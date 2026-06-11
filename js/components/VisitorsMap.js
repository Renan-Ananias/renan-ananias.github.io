/**
 * VisitorsMap.js — Mapa-múndi com rastreamento de visitantes
 *
 * Versão "no-build" do VisitorsMap.tsx do projeto original.
 * - Rastreia visitantes reais via localStorage + IP (ipapi.co)
 * - Mesmo IP → atualiza lastSeen + incrementa count
 * - BroadcastChannel para sync entre abas
 * - Sem dependência de tRPC
 */
import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext.js';

const MAP_W = 5760;
const MAP_H = 2880;

const VISITORS_STORAGE_KEY = 'portfolio:visitors:v3';
const GEO_CACHE_KEY = 'portfolio:ip-geo:v2';
const GEO_CACHE_TTL = 6 * 60 * 60 * 1000;
const SESSION_KEY = 'portfolio:tracked:session';

const TEST_CITIES = [
  { country: 'Brasil', city: 'Rio de Janeiro', lat: -22.9068, lon: -43.1729, cc: 'BR' },
  { country: 'Portugal', city: 'Lisboa', lat: 38.7223, lon: -9.1393, cc: 'PT' },
  { country: 'España', city: 'Madrid', lat: 40.4168, lon: -3.7038, cc: 'ES' },
  { country: 'France', city: 'Paris', lat: 48.8566, lon: 2.3522, cc: 'FR' },
  { country: 'Deutschland', city: 'Berlin', lat: 52.52, lon: 13.405, cc: 'DE' },
  { country: 'Italia', city: 'Roma', lat: 41.9028, lon: 12.4964, cc: 'IT' },
  { country: 'United States', city: 'San Francisco', lat: 37.7749, lon: -122.4194, cc: 'US' },
  { country: 'United States', city: 'Chicago', lat: 41.8781, lon: -87.6298, cc: 'US' },
  { country: 'Canada', city: 'Toronto', lat: 43.6532, lon: -79.3832, cc: 'CA' },
  { country: 'México', city: 'Ciudad de México', lat: 19.4326, lon: -99.1332, cc: 'MX' },
  { country: 'Argentina', city: 'Buenos Aires', lat: -34.6037, lon: -58.3816, cc: 'AR' },
  { country: 'Chile', city: 'Santiago', lat: -33.4489, lon: -70.6693, cc: 'CL' },
  { country: '日本', city: '大阪', lat: 34.6937, lon: 135.5023, cc: 'JP' },
  { country: '中国', city: '上海', lat: 31.2304, lon: 121.4737, cc: 'CN' },
  { country: '中国', city: '北京', lat: 39.9042, lon: 116.4074, cc: 'CN' },
  { country: 'India', city: 'Mumbai', lat: 19.076, lon: 72.8777, cc: 'IN' },
  { country: 'India', city: 'Bengaluru', lat: 12.9716, lon: 77.5946, cc: 'IN' },
  { country: 'South Korea', city: '서울', lat: 37.5665, lon: 126.978, cc: 'KR' },
  { country: 'Singapore', city: 'Singapore', lat: 1.3521, lon: 103.8198, cc: 'SG' },
  { country: 'Australia', city: 'Melbourne', lat: -37.8136, lon: 144.9631, cc: 'AU' },
  { country: 'New Zealand', city: 'Auckland', lat: -36.8485, lon: 174.7633, cc: 'NZ' },
  { country: 'South Africa', city: 'Cape Town', lat: -33.9249, lon: 18.4241, cc: 'ZA' },
  { country: 'Egypt', city: 'Cairo', lat: 30.0444, lon: 31.2357, cc: 'EG' },
  { country: 'Nigeria', city: 'Lagos', lat: 6.5244, lon: 3.3792, cc: 'NG' },
  { country: 'Türkiye', city: 'Istanbul', lat: 41.0082, lon: 28.9784, cc: 'TR' },
  { country: 'UAE', city: 'Dubai', lat: 25.2048, lon: 55.2708, cc: 'AE' },
  { country: 'Россия', city: 'Москва', lat: 55.7558, lon: 37.6173, cc: 'RU' },
];

function latLonToXY(lat, lon) {
  const x = ((lon + 180) / 360) * MAP_W;
  const y = ((90 - lat) / 180) * MAP_H;
  return { x, y };
}

function nearestCity(lat, lon) {
  let best = TEST_CITIES[0];
  let bestDist = Infinity;
  for (const c of TEST_CITIES) {
    const dx = c.lon - lon;
    const dy = c.lat - lat;
    const d = dx * dx + dy * dy;
    if (d < bestDist) {
      bestDist = d;
      best = c;
    }
  }
  return { country: best.country, city: best.city, countryCode: best.cc };
}

function loadLocalVisitors() {
  try {
    const raw = localStorage.getItem(VISITORS_STORAGE_KEY);
    if (!raw) return [];
    const arr = JSON.parse(raw);
    if (!Array.isArray(arr)) return [];
    return arr.filter((v) => v && v.ip && v.latitude != null && v.longitude != null);
  } catch {
    return [];
  }
}

function saveLocalVisitors(v) {
  try {
    localStorage.setItem(VISITORS_STORAGE_KEY, JSON.stringify(v));
  } catch {}
}

function findVisitorByIP(visitors, ip) {
  return visitors.find((v) => v.ip === ip);
}

function computeStats(visitors) {
  const map = new Map();
  let totalViews = 0;
  for (const v of visitors) {
    const key = v.country || '—';
    map.set(key, (map.get(key) || 0) + 1);
    totalViews += v.count || 1;
  }
  const countries = Array.from(map.entries())
    .map(([country, count]) => ({ country, count }))
    .sort((a, b) => b.count - a.count);
  return { totalVisitors: visitors.length, totalViews, countries };
}

function relativeTime(iso) {
  const ms = Date.now() - new Date(iso).getTime();
  if (ms < 0) return 'agora';
  const s = Math.floor(ms / 1000);
  if (s < 60) return 'agora';
  const m = Math.floor(s / 60);
  if (m < 60) return `${m} min`;
  const h = Math.floor(m / 60);
  if (h < 24) return `${h} h`;
  const d = Math.floor(h / 24);
  if (d < 7) return `${d} d`;
  return new Date(iso).toLocaleDateString();
}

async function fetchGeoFromIP() {
  try {
    const cached = localStorage.getItem(GEO_CACHE_KEY);
    if (cached) {
      const { timestamp, data } = JSON.parse(cached);
      if (Date.now() - timestamp < GEO_CACHE_TTL) {
        return data;
      }
    }

    const ctrl = new AbortController();
    const timeout = setTimeout(() => ctrl.abort(), 8000);
    const res = await fetch('https://ipapi.co/json/', {
      signal: ctrl.signal,
      headers: { Accept: 'application/json' },
    });
    clearTimeout(timeout);

    if (!res.ok) return null;

    const data = await res.json();
    if (data.error || !data.latitude || !data.longitude) return null;

    const result = {
      ip: data.ip || 'unknown',
      lat: parseFloat(data.latitude),
      lon: parseFloat(data.longitude),
      city: data.city || data.region || '—',
      country: data.country_name || data.country || '—',
      countryCode: data.country_code || '',
    };

    try {
      localStorage.setItem(
        GEO_CACHE_KEY,
        JSON.stringify({ timestamp: Date.now(), data: result })
      );
    } catch {}

    return result;
  } catch (e) {
    console.warn('[VisitorsMap] Erro ao consultar ipapi.co:', e);
    return null;
  }
}

export function VisitorsMap() {
  const { t } = useLanguage();

  const [visitors, setVisitors] = useState([]);
  const [mode, setMode] = useState('loading');
  const [userGeo, setUserGeo] = useState(null);
  const [geoStatus, setGeoStatus] = useState('idle');
  const [pulseKey, setPulseKey] = useState(0);
  const channelRef = useRef(null);

  useEffect(() => {
    const local = loadLocalVisitors();
    setVisitors(local);
    setMode('self');
  }, []);

  useEffect(() => {
    if (mode === 'loading') return;
    if (sessionStorage.getItem(SESSION_KEY)) return;
    sessionStorage.setItem(SESSION_KEY, '1');

    setGeoStatus('loading');
    fetchGeoFromIP().then((geo) => {
      if (geo) {
        setUserGeo(geo);
        setGeoStatus('ok');
        recordVisit(geo);
      } else {
        if ('geolocation' in navigator) {
          navigator.geolocation.getCurrentPosition(
            (pos) => {
              const { latitude, longitude } = pos.coords;
              const nearest = nearestCity(latitude, longitude);
              const fallbackGeo = {
                ip: `geo-${Date.now()}`,
                lat: latitude,
                lon: longitude,
                city: nearest.city,
                country: nearest.country,
                countryCode: nearest.countryCode,
              };
              setUserGeo(fallbackGeo);
              setGeoStatus('fallback');
              recordVisit(fallbackGeo);
            },
            () => {
              const defaultGeo = {
                ip: 'default-sp',
                lat: -23.5505,
                lon: -46.6333,
                city: 'São Paulo',
                country: 'Brasil',
                countryCode: 'BR',
              };
              setUserGeo(defaultGeo);
              setGeoStatus('error');
              recordVisit(defaultGeo);
            },
            { timeout: 5000, maximumAge: 60_000 }
          );
        } else {
          setGeoStatus('error');
        }
      }
    });
  }, [mode]);

  const recordVisit = useCallback((geo) => {
    setVisitors((prev) => {
      const existing = findVisitorByIP(prev, geo.ip);
      if (existing) {
        const updated = {
          ...existing,
          lastSeen: new Date().toISOString(),
          count: existing.count + 1,
        };
        const next = prev.map((v) => (v.ip === geo.ip ? updated : v));
        saveLocalVisitors(next);
        channelRef.current?.postMessage({ type: 'visitor-updated', visitor: updated });
        return next;
      } else {
        const newVisitor = {
          id: `v-${Date.now()}-${Math.random().toString(36).slice(2, 6)}`,
          ip: geo.ip,
          country: geo.country,
          city: geo.city,
          latitude: geo.lat,
          longitude: geo.lon,
          count: 1,
          firstSeen: new Date().toISOString(),
          lastSeen: new Date().toISOString(),
        };
        const next = [...prev, newVisitor];
        saveLocalVisitors(next);
        channelRef.current?.postMessage({ type: 'visitor-added', visitor: newVisitor });
        return next;
      }
    });
    setPulseKey((k) => k + 1);
  }, []);

  useEffect(() => {
    if (typeof BroadcastChannel === 'undefined') return;
    const ch = new BroadcastChannel('portfolio-visitors');
    channelRef.current = ch;
    ch.onmessage = (ev) => {
      if (ev.data?.type === 'visitor-added' || ev.data?.type === 'visitor-updated') {
        const visitor = ev.data.visitor;
        setVisitors((prev) => {
          const existing = findVisitorByIP(prev, visitor.ip);
          if (existing) {
            return prev.map((v) => (v.ip === visitor.ip ? { ...v, count: v.count + 1, lastSeen: visitor.lastSeen } : v));
          } else {
            return [...prev, visitor];
          }
        });
        setPulseKey((k) => k + 1);
      }
    };
    return () => ch.close();
  }, []);

  const stats = useMemo(() => computeStats(visitors), [visitors]);

  const dots = useMemo(() => {
    return visitors
      .map((v) => {
        const lat = typeof v.latitude === 'string' ? parseFloat(v.latitude) : v.latitude;
        const lon = typeof v.longitude === 'string' ? parseFloat(v.longitude) : v.longitude;
        if (lat == null || lon == null || isNaN(lat) || isNaN(lon)) return null;
        const { x, y } = latLonToXY(lat, lon);
        if (x < 0 || x > MAP_W || y < 0 || y > MAP_H) return null;
        const isUser = !!userGeo && Math.abs(lat - userGeo.lat) < 0.5 && Math.abs(lon - userGeo.lon) < 0.5;
        return { id: String(v.id), x, y, isUser, visitor: v };
      })
      .filter(Boolean);
  }, [visitors, userGeo]);

  return (
    <div className="w-full space-y-6">
      {/* Stats cards */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div
          key={pulseKey}
          className="bg-[#1a1f3a]/50 border border-[#00ff88]/40 p-4 rounded-lg text-center relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-[#00ff88]/5 animate-pulse" />
          <div className="relative">
            <div className="text-3xl font-bold text-[#00ff88] flex items-center justify-center gap-2">
              <span className="w-2 h-2 bg-[#00ff88] rounded-full animate-pulse" />
              {stats.totalViews}
            </div>
            <div className="text-sm text-gray-400 mt-1">{t.visitors.totalViews}</div>
          </div>
        </div>

        <div className="bg-[#1a1f3a]/50 border border-[#00d9ff]/30 p-4 rounded-lg text-center">
          <div className="text-3xl font-bold text-[#00d9ff]">{stats.totalVisitors}</div>
          <div className="text-sm text-gray-400 mt-1">{t.visitors.totalVisitors}</div>
        </div>

        <div className="bg-[#1a1f3a]/50 border border-[#00ff88]/30 p-4 rounded-lg text-center">
          <div className="text-3xl font-bold text-[#00ff88]">{stats.countries.length}</div>
          <div className="text-sm text-gray-400 mt-1">{t.visitors.countries}</div>
        </div>

        {stats.countries.length > 0 && stats.countries[0]?.country && (
          <div className="bg-[#1a1f3a]/50 border border-[#00ff88]/30 p-4 rounded-lg text-center">
            <div className="text-xl font-bold text-[#00ff88] truncate">{stats.countries[0].country}</div>
            <div className="text-sm text-gray-400 mt-1">{t.visitors.topCountry}</div>
          </div>
        )}
      </div>

      {/* Mapa-mundi */}
      <div className="bg-[#1a1f3a]/50 border border-[#00d9ff]/30 rounded-lg overflow-hidden backdrop-blur-sm p-3">
        <div className="flex flex-wrap items-center justify-between gap-2 mb-2 text-xs">
          <div className="flex items-center gap-2">
            <span
              className={`inline-block w-2 h-2 rounded-full ${
                mode === 'self' ? 'bg-[#00d9ff] animate-pulse' : 'bg-gray-500'
              }`}
            />
            <span className="text-gray-400">
              {mode === 'self' && geoStatus === 'loading' && t.visitors.trackingYou}
              {mode === 'self' && geoStatus === 'ok' && t.visitors.liveTracking}
              {mode === 'self' && geoStatus === 'fallback' && t.visitors.geoFallback}
              {mode === 'self' && geoStatus === 'error' && t.visitors.geoError}
              {mode === 'loading' && t.visitors.loading}
            </span>
            {userGeo && mode === 'self' && (
              <span className="text-gray-500 hidden sm:inline">
                · {userGeo.city}, {userGeo.country}
              </span>
            )}
          </div>
        </div>

        <svg
          viewBox={`0 0 ${MAP_W} ${MAP_H}`}
          preserveAspectRatio="xMidYMid meet"
          className="w-full h-auto block"
          style={{ aspectRatio: '2 / 1', minHeight: '320px', maxHeight: '560px' }}
        >
          <defs>
            <radialGradient id="ocean" cx="50%" cy="50%" r="75%">
              <stop offset="0%" stopColor="#0d1a3a" />
              <stop offset="100%" stopColor="#050a1f" />
            </radialGradient>
          </defs>
          <rect x="0" y="0" width={MAP_W} height={MAP_H} fill="url(#ocean)" />

          <image
            href="assets/world-map.svg"
            x="0"
            y="0"
            width={MAP_W}
            height={MAP_H}
            preserveAspectRatio="xMidYMid meet"
            style={{ filter: 'brightness(1.4) saturate(0.4)' }}
            opacity="0.9"
          />

          <g stroke="rgba(0, 255, 136, 0.06)" strokeWidth="2" fill="none" pointerEvents="none">
            {Array.from({ length: 12 }).map((_, i) => {
              const y = (i + 1) * (MAP_H / 13);
              return <line key={`h${i}`} x1="0" y1={y} x2={MAP_W} y2={y} />;
            })}
            {Array.from({ length: 24 }).map((_, i) => {
              const x = (i + 1) * (MAP_W / 25);
              return <line key={`v${i}`} x1={x} y1="0" x2={x} y2={MAP_H} />;
            })}
            <line x1="0" y1={MAP_H / 2} x2={MAP_W} y2={MAP_H / 2} stroke="rgba(0, 217, 255, 0.12)" strokeWidth="3" />
            <line x1={MAP_W / 2} y1="0" x2={MAP_W / 2} y2={MAP_H} stroke="rgba(0, 217, 255, 0.12)" strokeWidth="3" />
          </g>

          {dots.map((d, idx) => {
            const color = d.isUser ? '#00d9ff' : '#00ff88';
            const delay = `${(idx % 7) * 0.25}s`;
            return (
              <g key={`${d.id}-${idx}`} className="visitor-marker" style={{ cursor: 'pointer' }}>
                <circle cx={d.x} cy={d.y} r="40" fill="none" stroke={color} strokeWidth="6" opacity="0.7">
                  <animate attributeName="r" values="40;120;40" dur="2.2s" repeatCount="indefinite" begin={delay} />
                  <animate attributeName="opacity" values="0.7;0;0.7" dur="2.2s" repeatCount="indefinite" begin={delay} />
                </circle>
                <circle cx={d.x} cy={d.y} r="22" fill={color} opacity="0.25" />
                <circle cx={d.x} cy={d.y} r="14" fill={color} stroke="#0a0e27" strokeWidth="4">
                  <animate attributeName="r" values="14;20;14" dur="2.2s" repeatCount="indefinite" begin={delay} />
                </circle>
                <title>
                  {`${d.visitor.city || t.common.unknown}, ${d.visitor.country || t.common.unknown} (${d.visitor.count} ${t.visitors.visits})${
                    d.isUser ? ` — ${t.visitors.youAreHere}` : ''
                  }`}
                </title>
              </g>
            );
          })}
        </svg>
      </div>

      {/* Lista de visitantes recentes */}
      {visitors.length > 0 && (
        <div className="bg-[#1a1f3a]/50 border border-[#00d9ff]/30 rounded-lg p-4 backdrop-blur-sm">
          <h3 className="text-lg font-bold text-[#00ff88] mb-4">{t.visitors.recentVisitors}</h3>
          <div className="space-y-2 max-h-56 overflow-y-auto pr-1">
            {(() => {
              const sorted = [...visitors]
                .map((v) => {
                  const lat = typeof v.latitude === 'string' ? parseFloat(v.latitude) : v.latitude;
                  const lon = typeof v.longitude === 'string' ? parseFloat(v.longitude) : v.longitude;
                  const isUser = !!userGeo && lat != null && lon != null && Math.abs(lat - userGeo.lat) < 0.5 && Math.abs(lon - userGeo.lon) < 0.5;
                  return { visitor: v, lat, lon, isUser, ts: new Date(v.lastSeen).getTime() };
                })
                .sort((a, b) => {
                  if (a.isUser && !b.isUser) return -1;
                  if (!a.isUser && b.isUser) return 1;
                  return b.ts - a.ts;
                })
                .slice(0, 12);
              return sorted.map(({ visitor, isUser }, idx) => (
                <div
                  key={`${visitor.id}-${idx}`}
                  className={`flex items-center justify-between text-sm p-2 rounded border transition-colors ${
                    isUser
                      ? 'bg-[#00d9ff]/10 border-[#00d9ff]/50 hover:border-[#00d9ff]'
                      : 'bg-[#0a0e27]/50 border-[#00d9ff]/20 hover:border-[#00ff88]/50'
                  }`}
                >
                  <div className="flex items-center gap-3 min-w-0 flex-1">
                    <div
                      className={`w-2 h-2 rounded-full animate-pulse flex-shrink-0 ${
                        isUser ? 'bg-[#00d9ff]' : 'bg-[#00ff88]'
                      }`}
                    />
                    <div className="min-w-0 flex-1">
                      <div className="text-gray-200 truncate">
                        {visitor.city || t.common.unknown}
                        {isUser && <span className="ml-2 text-[#00d9ff] text-xs font-semibold">({t.visitors.youAreHere})</span>}
                      </div>
                      <div className="text-xs text-gray-400 truncate">
                        {visitor.country || t.common.unknown}
                        {' · '}
                        <span className="text-[#00ff88] font-semibold">{visitor.count} {t.visitors.visits}</span>
                      </div>
                    </div>
                  </div>
                  <div className="text-xs text-gray-500 flex-shrink-0 ml-2">
                    {relativeTime(visitor.lastSeen)}
                  </div>
                </div>
              ));
            })()}
          </div>
        </div>
      )}

      {visitors.length === 0 && mode === 'self' && geoStatus !== 'loading' && (
        <div className="bg-[#1a1f3a]/50 border border-[#00d9ff]/20 rounded-lg p-8 backdrop-blur-sm text-center">
          <p className="text-gray-400">
            {t.visitors.geoError}
          </p>
        </div>
      )}
    </div>
  );
}
