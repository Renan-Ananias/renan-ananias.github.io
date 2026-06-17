/**
 * visitors.js — Mapa de Visitantes (Vanilla JS)
 * Rastreamento via ipapi.co + localStorage + SVG
 */
(function() {
  'use strict';

  var MAP_W = 5760;
  var MAP_H = 2880;

  function initVisitors() {
    var mapSvg = document.getElementById('world-map');
    if (!mapSvg) return; // Não está na página

    var STORAGE_KEY = 'portfolio:visitors:v3';
    var GEO_CACHE_KEY = 'portfolio:ip-geo:v2';
    var GEO_CACHE_TTL = 6 * 60 * 60 * 1000;
    var SESSION_KEY = 'portfolio:tracked:session';

    // === Utilitários ===
    function latLonToXY(lat, lon) {
      return { x: ((lon + 180) / 360) * MAP_W, y: ((90 - lat) / 180) * MAP_H };
    }

    function loadVisitors() {
      try {
        var raw = localStorage.getItem(STORAGE_KEY);
        if (!raw) return [];
        var arr = JSON.parse(raw);
        return Array.isArray(arr) ? arr.filter(function(v) { return v && v.ip; }) : [];
      } catch(e) { return []; }
    }

    function saveVisitors(v) {
      try { localStorage.setItem(STORAGE_KEY, JSON.stringify(v)); } catch(e) {}
    }

    function computeStats(visitors) {
      var map = {}, totalViews = 0;
      for (var i = 0; i < visitors.length; i++) {
        var v = visitors[i], key = v.country || '—';
        map[key] = (map[key] || 0) + 1;
        totalViews += v.count || 1;
      }
      var countries = Object.keys(map).map(function(k) { return { country: k, count: map[k] }; })
        .sort(function(a, b) { return b.count - a.count; });
      return { totalVisitors: visitors.length, totalViews: totalViews, countries: countries };
    }

    function relativeTime(iso) {
      var ms = Date.now() - new Date(iso).getTime();
      if (ms < 0) return 'agora';
      var s = Math.floor(ms / 1000);
      if (s < 60) return 'agora';
      var m = Math.floor(s / 60);
      if (m < 60) return m + ' min';
      var h = Math.floor(m / 60);
      if (h < 24) return h + ' h';
      var d = Math.floor(h / 24);
      if (d < 7) return d + ' d';
      // Formato: dd/mm/aaaa - hh:mm:ss
      var dt = new Date(iso);
      var dd = String(dt.getDate()).padStart(2, '0');
      var mm = String(dt.getMonth() + 1).padStart(2, '0');
      var yyyy = dt.getFullYear();
      var hh = String(dt.getHours()).padStart(2, '0');
      var min = String(dt.getMinutes()).padStart(2, '0');
      var ss = String(dt.getSeconds()).padStart(2, '0');
      return dd + '/' + mm + '/' + yyyy + ' - ' + hh + ':' + min + ':' + ss;
    }

    // === Geo IP (duas APIs com fallback) ===
    // ip-api.com: funciona em HTTP (sem mixed content), boa cobertura
    // ipapi.co: fallback HTTPS (requer HTTPS, mas tem dados extras)
    var GEO_APIS = [
      { url: '//ip-api.com/json/', parser: function(d) {
        if (!d || d.status !== 'success' || !d.lat || !d.lon) return null;
        return {
          ip: d.query || 'unknown',
          lat: parseFloat(d.lat),
          lon: parseFloat(d.lon),
          city: d.city || d.region || '—',
          country: d.country || '—',
          countryCode: (d.countryCode || '').toLowerCase(),
        };
      }},
      { url: 'https://ipapi.co/json/', parser: function(d) {
        if (!d || d.error || !d.latitude || !d.longitude) return null;
        return {
          ip: d.ip || 'unknown',
          lat: parseFloat(d.latitude),
          lon: parseFloat(d.longitude),
          city: d.city || d.region || '—',
          country: d.country_name || d.country || '—',
          countryCode: (d.country_code || '').toLowerCase(),
        };
      }}
    ];

    function fetchGeoFromIP(callback, apiIndex) {
      if (apiIndex === undefined) apiIndex = 0;

      // Cache check apenas na primeira chamada
      if (apiIndex === 0) {
        try {
          var cached = localStorage.getItem(GEO_CACHE_KEY);
          if (cached) {
            var parsed = JSON.parse(cached);
            if (Date.now() - parsed.timestamp < GEO_CACHE_TTL) {
              callback(parsed.data);
              return;
            }
          }
        } catch(e) {}
      }

      if (apiIndex >= GEO_APIS.length) {
        // Todas as APIs falharam
        callback(null);
        return;
      }

      var api = GEO_APIS[apiIndex];
      var xhr = new XMLHttpRequest();
      xhr.open('GET', api.url, true);
      xhr.timeout = 8000;
      xhr.onload = function() {
        if (xhr.status !== 200) {
          // Tenta próxima API
          fetchGeoFromIP(callback, apiIndex + 1);
          return;
        }
        try {
          var data = JSON.parse(xhr.responseText);
          var result = api.parser(data);
          if (!result) {
            fetchGeoFromIP(callback, apiIndex + 1);
            return;
          }
          try { localStorage.setItem(GEO_CACHE_KEY, JSON.stringify({ timestamp: Date.now(), data: result })); } catch(e) {}
          callback(result);
        } catch(e) {
          fetchGeoFromIP(callback, apiIndex + 1);
        }
      };
      xhr.onerror = function() {
        fetchGeoFromIP(callback, apiIndex + 1);
      };
      xhr.ontimeout = function() {
        fetchGeoFromIP(callback, apiIndex + 1);
      };
      xhr.send();
    }

    // === Render SVG dots ===
    function renderDots(visitors, userGeo) {
      var container = document.getElementById('visitor-dots');
      if (!container) return;
      container.innerHTML = '';

      for (var i = 0; i < visitors.length; i++) {
        var v = visitors[i];
        var lat = typeof v.latitude === 'string' ? parseFloat(v.latitude) : v.latitude;
        var lon = typeof v.longitude === 'string' ? parseFloat(v.longitude) : v.longitude;
        if (lat == null || lon == null || isNaN(lat) || isNaN(lon)) continue;
        var xy = latLonToXY(lat, lon);
        if (xy.x < 0 || xy.x > MAP_W || xy.y < 0 || xy.y > MAP_H) continue;
        var isUser = userGeo && Math.abs(lat - userGeo.lat) < 0.5 && Math.abs(lon - userGeo.lon) < 0.5;
        var color = isUser ? '#00d9ff' : '#00ff88';
        var delay = (i % 7) * 0.25 + 's';

        // Onda
        var wave = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
        wave.setAttribute('cx', xy.x); wave.setAttribute('cy', xy.y);
        wave.setAttribute('r', '40'); wave.setAttribute('fill', 'none');
        wave.setAttribute('stroke', color); wave.setAttribute('stroke-width', '6');
        wave.setAttribute('opacity', '0.7');
        var a1 = document.createElementNS('http://www.w3.org/2000/svg', 'animate');
        a1.setAttribute('attributeName', 'r'); a1.setAttribute('values', '40;120;40');
        a1.setAttribute('dur', '2.2s'); a1.setAttribute('repeatCount', 'indefinite'); a1.setAttribute('begin', delay);
        wave.appendChild(a1);
        var a2 = document.createElementNS('http://www.w3.org/2000/svg', 'animate');
        a2.setAttribute('attributeName', 'opacity'); a2.setAttribute('values', '0.7;0;0.7');
        a2.setAttribute('dur', '2.2s'); a2.setAttribute('repeatCount', 'indefinite'); a2.setAttribute('begin', delay);
        wave.appendChild(a2);
        container.appendChild(wave);

        // Círculo externo
        var outer = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
        outer.setAttribute('cx', xy.x); outer.setAttribute('cy', xy.y);
        outer.setAttribute('r', '22'); outer.setAttribute('fill', color); outer.setAttribute('opacity', '0.25');
        container.appendChild(outer);

        // Círculo interno
        var inner = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
        inner.setAttribute('cx', xy.x); inner.setAttribute('cy', xy.y);
        inner.setAttribute('r', '14'); inner.setAttribute('fill', color);
        inner.setAttribute('stroke', '#0a0e27'); inner.setAttribute('stroke-width', '4');
        var a3 = document.createElementNS('http://www.w3.org/2000/svg', 'animate');
        a3.setAttribute('attributeName', 'r'); a3.setAttribute('values', '14;20;14');
        a3.setAttribute('dur', '2.2s'); a3.setAttribute('repeatCount', 'indefinite'); a3.setAttribute('begin', delay);
        inner.appendChild(a3);
        container.appendChild(inner);

        // Tooltip
        var title = document.createElementNS('http://www.w3.org/2000/svg', 'title');
        title.textContent = (v.city || 'Desconhecido') + ', ' + (v.country || '—') + ' (' + (v.count || 1) + ' visitas)' + (isUser ? ' — Você está aqui' : '');
        inner.appendChild(title);
      }
    }

    // === Render stats ===
    function renderStats(stats) {
      var elViews = document.getElementById('total-views');
      var elVisitors = document.getElementById('total-visitors');
      var elCountries = document.getElementById('total-countries');
      var elTop = document.getElementById('top-country');
      if (elViews) elViews.textContent = stats.totalViews;
      if (elVisitors) elVisitors.textContent = stats.totalVisitors;
      if (elCountries) elCountries.textContent = stats.countries.length;
      if (elTop) elTop.textContent = stats.countries.length > 0 ? stats.countries[0].country : '—';
    }

    // === Render visitor list ===
    function renderVisitorList(visitors, userGeo) {
      var list = document.getElementById('visitor-list');
      if (!list) return;
      if (visitors.length === 0) {
        list.innerHTML = '<div style="text-align:center;padding:2rem;color:var(--text-secondary);">Nenhum visitante registrado ainda.</div>';
        return;
      }

      var sorted = visitors.map(function(v) {
        var lat = typeof v.latitude === 'string' ? parseFloat(v.latitude) : v.latitude;
        var lon = typeof v.longitude === 'string' ? parseFloat(v.longitude) : v.longitude;
        var isUser = userGeo && lat != null && lon != null && Math.abs(lat - userGeo.lat) < 0.5 && Math.abs(lon - userGeo.lon) < 0.5;
        return { visitor: v, isUser: isUser, ts: new Date(v.lastSeen).getTime() };
      }).sort(function(a, b) {
        if (a.isUser && !b.isUser) return -1;
        if (!a.isUser && b.isUser) return 1;
        return b.ts - a.ts;
      }).slice(0, 10);

      list.innerHTML = '';
      for (var i = 0; i < sorted.length; i++) {
        var item = sorted[i];
        var div = document.createElement('div');
        div.className = 'visitor-item';
        if (item.isUser) div.style.borderColor = 'rgba(0, 217, 255, 0.5)';

        // Left side
        var left = document.createElement('div');
        left.className = 'visitor-item-left';

        var dot = document.createElement('span');
        dot.className = 'dot';
        dot.style.background = item.isUser ? '#00d9ff' : '#00ff88';
        dot.style.animation = 'pulse 2s infinite';
        left.appendChild(dot);

        var locDiv = document.createElement('div');
        var citySpan = document.createElement('div');
        citySpan.className = 'city';
        citySpan.textContent = (item.visitor.city || 'Desconhecido') + (item.isUser ? ' (Você)' : '');
        locDiv.appendChild(citySpan);
        var countrySpan = document.createElement('div');
        countrySpan.className = 'country';
        countrySpan.textContent = item.visitor.country || '—';
        locDiv.appendChild(countrySpan);
        left.appendChild(locDiv);

        div.appendChild(left);

        // Right side
        var right = document.createElement('div');
        right.className = 'visitor-item-right';

        var count = document.createElement('span');
        count.className = 'count';
        count.textContent = item.visitor.count + ' visitas';
        right.appendChild(count);

        var time = document.createElement('span');
        time.className = 'time';
        time.textContent = relativeTime(item.visitor.lastSeen);
        right.appendChild(time);

        div.appendChild(right);
        list.appendChild(div);
      }
    }

    // === Update UI ===
    function updateUI(visitors, userGeo) {
      renderStats(computeStats(visitors));
      renderDots(visitors, userGeo);
      renderVisitorList(visitors, userGeo);
    }

    // === Record visit ===
    function recordVisit(visitors, geo) {
      var existing = null;
      for (var i = 0; i < visitors.length; i++) {
        if (visitors[i].ip === geo.ip) { existing = visitors[i]; break; }
      }
      if (existing) {
        existing.lastSeen = new Date().toISOString();
        existing.count = (existing.count || 1) + 1;
      } else {
        visitors.push({
          id: 'v-' + Date.now() + '-' + Math.random().toString(36).slice(2, 6),
          ip: geo.ip, country: geo.country, city: geo.city,
          latitude: geo.lat, longitude: geo.lon, count: 1,
          firstSeen: new Date().toISOString(), lastSeen: new Date().toISOString(),
        });
      }
      saveVisitors(visitors);
      return visitors;
    }

    // === Tentar geolocalização via navegador (pede permissão) ===
    function tryBrowserGeo(callback) {
      if (!('geolocation' in navigator)) { callback(null); return; }
      navigator.geolocation.getCurrentPosition(function(pos) {
        callback({
          ip: 'browser-' + Date.now(),
          lat: pos.coords.latitude,
          lon: pos.coords.longitude,
          city: '—',
          country: '—',
          countryCode: '',
        });
      }, function() {
        callback(null);
      }, { timeout: 8000, maximumAge: 120000 });
    }

    // === Init ===
    var visitors = loadVisitors();
    var userGeo = null;
    var statusText = document.getElementById('status-text');
    var statusDot = document.getElementById('status-dot');
    var locText = document.getElementById('location-text');
    var geoAttempted = false;

    updateUI(visitors, null);

    if (!sessionStorage.getItem(SESSION_KEY)) {
      sessionStorage.setItem(SESSION_KEY, '1');
      if (statusText) statusText.textContent = 'Rastreando sua localização...';
      if (statusDot) statusDot.style.background = '#ffd60a';

      // 1º Tenta ipapi.co (IP-based, sem permissão)
      fetchGeoFromIP(function(geo) {
        if (geo) {
          userGeo = geo;
          visitors = recordVisit(visitors, geo);
          updateUI(visitors, userGeo);
          if (statusText) statusText.textContent = 'Rastreamento ao vivo';
          if (statusDot) statusDot.style.background = '#00ff88';
          if (locText) locText.textContent = '· ' + geo.city + ', ' + geo.country;
          geoAttempted = true;
        } else {
          // 2º Fallback: tenta geolocalização do navegador (pede permissão)
          if (statusText) statusText.textContent = 'Solicitando localização...';
          if (statusDot) statusDot.style.background = '#00d9ff';
          tryBrowserGeo(function(browserGeo) {
            if (browserGeo) {
              userGeo = browserGeo;
              visitors = recordVisit(visitors, browserGeo);
              updateUI(visitors, userGeo);
              if (statusText) statusText.textContent = 'Localização via navegador';
              if (statusDot) statusDot.style.background = '#00d9ff';
              if (locText) locText.textContent = '· Lat: ' + browserGeo.lat.toFixed(2) + ', Lon: ' + browserGeo.lon.toFixed(2);
            } else {
              if (statusText) statusText.textContent = 'Não foi possível localizar';
              if (statusDot) statusDot.style.background = '#ff4444';
            }
          });
        }
      });
    } else {
      if (visitors.length > 0) {
        if (statusText) statusText.textContent = 'Rastreamento ao vivo';
        if (statusDot) statusDot.style.background = '#00ff88';
      }
      updateUI(visitors, null);
    }

    // BroadcastChannel
    if (typeof BroadcastChannel !== 'undefined') {
      var channel = new BroadcastChannel('portfolio-visitors');
      channel.onmessage = function(ev) {
        if (ev.data && (ev.data.type === 'visitor-added' || ev.data.type === 'visitor-updated')) {
          visitors = loadVisitors();
          updateUI(visitors, userGeo);
        }
      };
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initVisitors);
  } else {
    initVisitors();
  }
})();
