/**
 * BrainMenu.js — Hero animado do cerebro neural (v8.7 - ANIMACAO UNIFICADA)
 *
 * Mudancas da v8.7 (Sessão 20.7):
 * - Animacao UNIFICADA via requestAnimationFrame (nao mais CSS transition + setInterval)
 * - SCRAMBLE + DESCIDA + CRESCIMENTO acontecem AO MESMO TEMPO (sincronizados)
 * - Duracao: 2500ms (mesma da Matrix)
 * - Durante a descida:
 *   1. SCRAMBLE: caracteres vao sendo "travados" da esquerda para direita
 *   2. POSICAO: top desce linearmente de 6% para 50% (centro)
 *   3. TAMANHO: cresce em DEGRAUS de 20% (1.0x → 1.2x → 1.4x → 1.6x → 1.8x → 2.0x)
 * - Quando termina: tudo no centro, desembaralhado, com tamanho DOBRO
 *
 * Mudancas da v8.6 (Sessão 20.6):
 * - Animacao de scramble + centralizar + fonte +50% (CSS transition, separado)
 *
 * Mudancas da v8.5 (Sessão 20.5):
 * - pad = max(140, min(minDim * 0.29, 210)) (+10px nos 3 limites)
 *
 * Mudancas da v8.4 (Sessão 20.4):
 * - BUG FIX FINAL: HomeSection simplificado
 *
 * Mudancas da v6 (Matrix Trail):
 * - REMOVIDA rotacao do cerebro durante expand
 * - Botoes dos cantos aparecem DURANTE os trails
 * - Listener de `resetBrainMenu` para reiniciar tudo
 * - Trail duration 1500ms
 */
import { useEffect, useState, useRef, useMemo } from 'react';
import { useLanguage } from '../contexts/LanguageContext.js';

const SECTIONS = [
  { id: 'about',    img: 'img/brain_layer_about.png',    emoji: '👤', labelKey: 'about',    corner: 'top-left',     color: '#ffd60a' },
  { id: 'projects', img: 'img/brain_layer_projects.png', emoji: '💼', labelKey: 'projects', corner: 'top-right',    color: '#00d4ff' },
  { id: 'visitors', img: 'img/brain_layer_visitors.png', emoji: '🌍', labelKey: 'visitors', corner: 'bottom-left',  color: '#00ff88' },
  { id: 'contact',  img: 'img/brain_layer_contact.png',  emoji: '✉️', labelKey: 'contact',  corner: 'bottom-right', color: '#ff006e' },
];

// Funcao helper para calcular posicoes responsivas dos cantos
// Retorna posicoes em PIXELS baseadas no tamanho da viewport
//
// v8.5: pad = max(140, min(minDim * 0.29, 210)) (+10px vs v8.4)
// - 1280x720: pad = max(140, min(208.8, 210)) = 208.8px (vs 200px na v8.4)
//   Botoes a 208px das bordas laterais e 100px do fundo (em 720p)
// - 1920x1080: pad = max(140, min(313, 210)) = 210px (limitado pelo max)
// - 375x667 (mobile): pad = max(140, min(112.5, 210)) = 140px (limitado pelo min)
//   Botoes a 140px das bordas (vs 130px na v8.4)
function getTargetPosition(corner, windowSize) {
  const w = windowSize.w || 1920;
  const h = windowSize.h || 1080;
  const minDim = Math.min(w, h);
  // v8.5: pad = 29% do menor lado (min 140, max 210) - BOTOES +10px MAIS PRO CENTRO
  const pad = Math.max(140, Math.min(minDim * 0.29, 210));
  switch (corner) {
    case 'top-left':
      return { top: pad + 'px', left: pad + 'px' };
    case 'top-right':
      return { top: pad + 'px', left: (w - pad) + 'px' };
    case 'bottom-left':
      return { top: (h - pad) + 'px', left: pad + 'px' };
    case 'bottom-right':
      return { top: (h - pad) + 'px', left: (w - pad) + 'px' };
    default:
      return { top: '50%', left: '50%' };
  }
}

const MATRIX_CHARS = 'アイウエオカキクケコサシスセソタチツテトンナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン0123456789$#@%&*+=';

function scrollToSectionFromBrain(id) {
  const el = document.getElementById(id);
  if (!el) return;
  const navHeight = 64;
  const top = el.getBoundingClientRect().top + window.scrollY - navHeight;
  window.scrollTo({ top, behavior: 'smooth' });
}

// =============================================================
// MatrixTextTrail — Trilha de caracteres Matrix que desce do TOPO
// ao CENTRO (v8.9 — timing ajustado).
// Igual a MatrixTrail (dos botoes) mas com:
// - Origem: (50%, 6%)  — topo centralizado
// - Destino: (50%, 50%) — centro da pagina
// - Tamanho: 4rem (igual ao h1 "RENAN" original)
// - Cor: ciano neon com glow
// - Duração: 1500ms (v8.9: reduzido de 2000ms para acompanhar o fade in do texto)
// - Delay: 30ms entre cada caractere (v8.9: reduzido de 50ms para trail terminar em 2370ms)
// - 30 caracteres (mais denso que os botoes)
// - Última particula termina em: 29*30 + 1500 = 870 + 1500 = 2370ms
//   (texto "RENAN" faz fade in em 2350ms = 20ms ANTES do trail acabar)
// =============================================================
function MatrixTextTrail() {
  const ref = useRef(null);
  const numParticles = 30;

  const particles = useMemo(function() {
    return Array.from({ length: numParticles }, function(_, i) {
      return {
        id: i,
        char: MATRIX_CHARS[Math.floor(Math.random() * MATRIX_CHARS.length)],
        jx: (Math.random() - 0.5) * 120,  // jitter X (texto e maior que os botoes)
        jy: (Math.random() - 0.5) * 40,   // jitter Y
      };
    });
  }, []);

  useEffect(function() {
    if (!ref.current) return;

    const container = ref.current;
    const els = container.querySelectorAll('.text-trail-particle');
    const animations = [];

    els.forEach(function(el, i) {
      const particle = particles[i];
      const delay = i * 30;  // v8.9: 30ms entre cada caractere (vs 50ms v8.8)

      const anim = el.animate([
        // Estado inicial: invisivel no topo centralizado
        {
          left: '50%',
          top: '6%',
          opacity: 0,
          transform: 'translate(-50%, -50%) scale(0.3)',
        },
        // Aparece com jitter X (e como "explosao" do texto)
        {
          left: '50%',
          top: '6%',
          opacity: 1,
          transform: 'translate(calc(-50% + ' + particle.jx + 'px), calc(-50% + ' + particle.jy + 'px)) scale(1.4)',
          offset: 0.1,
        },
        // Estabiliza
        {
          left: '50%',
          top: '6%',
          opacity: 0.9,
          transform: 'translate(calc(-50% + ' + particle.jx + 'px), calc(-50% + ' + particle.jy + 'px)) scale(1)',
          offset: 0.25,
        },
        // Viaja para o centro (some ao chegar)
        {
          left: '50%',
          top: '50%',
          opacity: 0,
          transform: 'translate(-50%, -50%) scale(0.3)',
        },
      ], {
        duration: 1500,  // v8.9: reduzido de 2000ms
        delay: delay,
        easing: 'cubic-bezier(0.4, 0, 0.6, 1)',
        fill: 'forwards',
      });
      animations.push(anim);
    });

    return function() {
      animations.forEach(function(a) { a.cancel(); });
    };
  }, [particles]);

  return (
    <div
      ref={ref}
      style={{
        position: 'absolute',
        inset: 0,
        pointerEvents: 'none',
        zIndex: 21,  // ACIMA do texto (zIndex 20)
      }}
    >
      {particles.map(function(p) {
        return (
          <span
            key={p.id}
            className="text-trail-particle"
            style={{
              position: 'absolute',
              left: '50%',
              top: '6%',
              transform: 'translate(-50%, -50%)',
              fontFamily: '"Courier New", "Consolas", monospace',
              fontSize: '4rem',  // mesmo tamanho do h1 "RENAN"
              fontWeight: 'bold',
              color: '#00d9ff',
              textShadow: '0 0 10px #00d9ff, 0 0 20px #00d9ff, 0 0 30px rgba(0, 217, 255, 0.5)',
              opacity: 0,
              pointerEvents: 'none',
              whiteSpace: 'pre',
              userSelect: 'none',
              willChange: 'transform, opacity, left, top',
            }}
          >
            {p.char}
          </span>
        );
      })}
    </div>
  );
}

// =============================================================
// MatrixTrail — spawna N caracteres no centro, cada um voa
// ate o canto correspondente com estilo Matrix code rain
// =============================================================
function MatrixTrail({ section, trailOffset = 0, windowSize }) {
  const ref = useRef(null);
  const numParticles = 25;

  const particles = useMemo(function() {
    return Array.from({ length: numParticles }, function(_, i) {
      return {
        id: i,
        char: MATRIX_CHARS[Math.floor(Math.random() * MATRIX_CHARS.length)],
      };
    });
  }, []);

  useEffect(function() {
    if (!ref.current) return;

    const container = ref.current;
    const els = container.querySelectorAll('.matrix-particle');
    // v8: posicoes responsivas (calculadas em pixels baseadas na viewport)
    const target = getTargetPosition(section.corner, windowSize);
    const animations = [];

    els.forEach(function(el, i) {
      const delay = (i * 25) + trailOffset;
      const jx = (Math.random() - 0.5) * 50;
      const jy = (Math.random() - 0.5) * 50;

      const anim = el.animate([
        {
          left: '50%',
          top: '50%',
          opacity: 0,
          transform: 'translate(-50%, -50%) scale(0.3)',
        },
        {
          left: '50%',
          top: '50%',
          opacity: 1,
          transform: 'translate(calc(-50% + ' + jx + 'px), calc(-50% + ' + jy + 'px)) scale(1.4)',
          offset: 0.1,
        },
        {
          left: '50%',
          top: '50%',
          opacity: 0.9,
          transform: 'translate(calc(-50% + ' + jx + 'px), calc(-50% + ' + jy + 'px)) scale(1)',
          offset: 0.25,
        },
        {
          left: target.left,
          top: target.top,
          opacity: 0.15,
          transform: 'translate(-50%, -50%) scale(0.4)',
        },
      ], {
        duration: 1500,
        delay: delay,
        easing: 'cubic-bezier(0.4, 0, 0.6, 1)',
        fill: 'forwards',
      });
      animations.push(anim);
    });

    return function() {
      animations.forEach(function(a) { a.cancel(); });
    };
  }, [section.corner, trailOffset, windowSize.w, windowSize.h]);

  return (
    <div
      ref={ref}
      style={{
        position: 'absolute',
        inset: 0,
        pointerEvents: 'none',
        zIndex: 25,
      }}
    >
      {particles.map(function(p) {
        return (
          <span
            key={p.id}
            className="matrix-particle"
            style={{
              position: 'absolute',
              left: '50%',
              top: '50%',
              color: section.color,
              fontFamily: '"Courier New", "Consolas", monospace',
              fontSize: '20px',
              fontWeight: 'bold',
              textShadow: '0 0 6px ' + section.color + ', 0 0 14px ' + section.color + ', 0 0 28px ' + section.color,
              opacity: 0,
              pointerEvents: 'none',
              whiteSpace: 'pre',
              userSelect: 'none',
              willChange: 'transform, opacity, left, top',
            }}
          >
            {p.char}
          </span>
        );
      })}
    </div>
  );
}

// Sub-componente para cada botao do menu
function CornerButton({ section, onClick, windowSize }) {
  const [show, setShow] = useState(false);
  // v8: posicoes responsivas (pixels calculados baseado na viewport)
  // Garante que botoes NAO sao cortados em mobile
  const pos = getTargetPosition(section.corner, windowSize);
  useEffect(function() {
    const t = setTimeout(function() { setShow(true); }, section.delay || 0);
    return function() { clearTimeout(t); };
  }, [section.delay]);
  return (
    <button
      onClick={onClick}
      className="group"
      style={{
        position: 'absolute',
        ...pos,
        cursor: 'pointer',
        pointerEvents: 'auto',
        background: 'transparent',
        border: 'none',
        padding: 0,
        opacity: show ? 1 : 0,
        // translate(-50%, -50%) CENTRA o botao no anchor point (mesma posicao das letras)
        // scale(0.7 → 1) faz a animacao de entrada
        transform: show
          ? 'translate(-50%, -50%) scale(1)'
          : 'translate(-50%, -50%) scale(0.7)',
        transition: 'all 0.5s cubic-bezier(0.34, 1.56, 0.64, 1)',
      }}
    >
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '0.75rem',
          padding: '1.5rem 2rem',
          background: 'rgba(26, 31, 58, 0.95)',
          border: '2px solid #00d9ff',
          borderRadius: '0.75rem',
          backdropFilter: 'blur(8px)',
          boxShadow: '0 0 25px rgba(0, 217, 255, 0.3)',
          transition: 'all 0.3s ease',
        }}
        onMouseOver={function(e) {
          e.currentTarget.style.borderColor = '#00ff88';
          e.currentTarget.style.boxShadow = '0 0 30px rgba(0, 255, 136, 0.6)';
          e.currentTarget.style.transform = 'scale(1.1)';
        }}
        onMouseOut={function(e) {
          e.currentTarget.style.borderColor = '#00d9ff';
          e.currentTarget.style.boxShadow = '0 0 25px rgba(0, 217, 255, 0.3)';
          e.currentTarget.style.transform = 'scale(1)';
        }}
      >
        <div style={{ fontSize: '3.5rem' }}>{section.emoji}</div>
        <div
          style={{
            color: '#00d9ff',
            fontSize: '1rem',
            fontWeight: 700,
            letterSpacing: '0.1em',
            transition: 'color 0.3s ease',
          }}
        >
          {section.label}
        </div>
      </div>
    </button>
  );
}

export function BrainMenu() {
  const [phase, setPhase] = useState('initial');
  const [buttonsVisible, setButtonsVisible] = useState(false);
  // v8.2: windowSize responsivo (usado por MatrixTrail e CornerButton)
  // Inicializa com window.innerWidth/Height REAIS (nao hardcoded 1920x1080)
  // Isso garante que mesmo no primeiro render (antes do useEffect),
  // o windowSize ja esta correto para a viewport do usuario
  const [windowSize, setWindowSize] = useState(function() {
    if (typeof window !== 'undefined') {
      return { w: window.innerWidth, h: window.innerHeight };
    }
    return { w: 1920, h: 1080 };
  });
  // v8.8: States para animacao MATRIX TEXT TRAIL (sem scramble, so descida + fade + scale)
  const [renanText, setRenanText] = useState('RENAN');
  const [subtitleText, setSubtitleText] = useState('CREATIVE DEVELOPER');
  const [centered, setCentered] = useState(false);
  // textTop: posicao vertical (string, ex: '6%', '50%')
  // textOpacity: 1.0 (visivel) → 0 (escondido) → 1 (visivel de novo)
  // textScale: multiplicador de tamanho (1.0 = normal, 2.0 = dobro)
  const [textTop, setTextTop] = useState('6%');
  const [textOpacity, setTextOpacity] = useState(1.0);
  const [textScale, setTextScale] = useState(1.0);
  const animationFrameRef = useRef(null);
  const subtitleTargetRef = useRef('CREATIVE DEVELOPER');
  // v9.0: refs para cada letra do texto (mantidos por compatibilidade, mas nao usados na v9.2)
  // v9.2: wave agora e via CSS animation (classe .wave-letter)
  const letterRefs = useRef([]);
  const subtitleLetterRefs = useRef([]);
  const { t } = useLanguage();

  // v8.8: Reset - quando phase volta para 'initial', cancela animacao e reseta tudo
  // v9.2: wave via CSS (classe .wave-letter removida automaticamente quando centered=false)
  useEffect(function() {
    if (phase === 'initial') {
      subtitleTargetRef.current = t.home.subtitle;
      setSubtitleText(t.home.subtitle);
      setRenanText('RENAN');
      setCentered(false);
      setTextTop('6%');
      setTextOpacity(1.0);  // v8.8: visivel no estado inicial
      setTextScale(1.0);
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
        animationFrameRef.current = null;
      }
    }
  }, [phase, t.home.subtitle]);

  // v9.3: Animacao UNIFICADA (SEM SCRAMBLE) - comeca quando phase='expand'
  // Quando termina (2500ms), setCentered(true) aciona a classe CSS .wave-letter
  // nos spans do h1 e p, iniciando o efeito WAVE.
  // Durante 2500ms:
  //   t=0-100ms (0-4%):       FADE OUT RAPIDO — texto "RENAN" some (opacity 1.0 → 0)
  //   t=100-2350ms (4-94%):   MATRIX TRAIL — trilha de caracteres visivel, texto invisivel
  //   t=2350-2500ms (94-100%): FADE IN + SCALE — texto real aparece 20ms ANTES do trail acabar
  // Posicao: top desce LINEARMENTE de 6% para 50% (v9.3: texto SOBREPOE o quadrado
  //   preto central, conforme pedido do usuario)
  // Tamanho: 1.0x durante o trail, salta para 2.0x (DOBRO) no fade in final
  useEffect(function() {
    if (phase === 'expand' && !centered) {
      const durationMs = 2500;
      const startTime = performance.now();

      function animate() {
        const elapsed = performance.now() - startTime;
        const progress = Math.min(elapsed / durationMs, 1);

        // 1. POSICAO: top desce LINEARMENTE de 6% para 42% (v9.4: texto SOBREPOE
        //    o quadrado preto central, com o CENTRO do texto alinhado ao centro do quadrado)
        //    - top: 42% porque o texto tem ~16rem de altura total (RENAN 8rem + gap 2rem + sub 4rem)
        //    - Com scale 2.0, o centro do bloco de texto fica em ~50% quando top=42%
        //    - Assim RENAN fica perfeitamente sobrepondo o quadrado preto no centro
        const topPct = 6 + (42 - 6) * progress;
        setTextTop(topPct + '%');

        // 2. OPACIDADE + TAMANHO: 3 fases
        if (progress < 0.04) {
          // Fase 1: FADE OUT RAPIDO (0-100ms) — texto some mais rapido
          setTextOpacity(1 - (progress / 0.04));  // 1.0 → 0 em 100ms
          setTextScale(1.0);
        } else if (progress < 0.94) {
          // Fase 2: MATRIX TRAIL (100-2350ms) — texto invisivel, scale normal
          // A MatrixTextTrail (sub-componente) é renderizada por cima nesta fase
          setTextOpacity(0);
          setTextScale(1.0);
        } else {
          // Fase 3: FADE IN + SCALE (2350-2500ms) — texto aparece 20ms ANTES do trail acabar
          const appearProgress = (progress - 0.94) / 0.06;  // 0 → 1 em 150ms
          setTextOpacity(appearProgress);  // 0 → 1
          setTextScale(2.0);  // JA no tamanho DOBRO
        }

        if (progress < 1) {
          animationFrameRef.current = requestAnimationFrame(animate);
        } else {
          // Animacao terminada - garante estado final limpo
          setTextTop('42%');  // v9.4: texto SOBREPOE o quadrado preto com centro alinhado
          setTextOpacity(1.0);
          setTextScale(2.0);
          setCentered(true);
          animationFrameRef.current = null;
        }
      }

      animationFrameRef.current = requestAnimationFrame(animate);
    }

    return function() {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
        animationFrameRef.current = null;
      }
    };
  }, [phase, centered]);  // v9.2: voltou para [phase, centered] (wave agora via CSS, sem race condition)

  // v9.3: Efeito WAVE agora e via CSS animation (classe .wave-letter nos spans)
  // O CSS @keyframes waveColors e definido em css/styles.css (arquivo estatico)
  // — NUNCA dentro de <style> no JSX, pq o React recriaria a cada render e
  // reiniciaria a animacao, fazendo o usuario ver apenas o primeiro frame.
  // A classe e aplicada condicionalmente: centered ? 'wave-letter' : ''
  // Isso garante que o wave so aparece DEPOIS do texto reaparecer grande no centro.
  // Quando centered vira false (reset), a classe e removida e o wave para.

  // v8.2: Listener de resize para recalcular posicoes responsivas
  useEffect(function() {
    function handleResize() {
      setWindowSize({ w: window.innerWidth, h: window.innerHeight });
    }
    // handleResize() nao e necessario - useState initializer ja pegou o tamanho real
    window.addEventListener('resize', handleResize);
    return function() {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // Listener para reset (quando usuario clica RENAN ou botao de secao)
  useEffect(function() {
    const handleReset = function() {
      setPhase('initial');
      setButtonsVisible(false);
    };
    window.addEventListener('resetBrainMenu', handleReset);
    return function() {
      window.removeEventListener('resetBrainMenu', handleReset);
    };
  }, []);

  // Phase transitions
  useEffect(function() {
    if (phase === 'pulse') {
      const t1 = setTimeout(function() { setPhase('expand'); }, 700);
      return function() { clearTimeout(t1); };
    }
    if (phase === 'expand') {
      // Botoes comecam a aparecer DURANTE o trail (overlap = letras viram botoes)
      // Trail 3 (Contact) last particle ends at: 24*25 + 3*100 + 1500 = 2400ms
      // Botoes comecam em 1900ms (durante os 500ms finais dos trails)
      const tButtons = setTimeout(function() { setButtonsVisible(true); }, 1900);
      // Switch para menu quando os trails completarem (2500ms = 100ms buffer)
      const tNext = setTimeout(function() {
        setPhase('menu');
        // buttonsVisible continua true (botoes nao desmontam)
      }, 2500);
      return function() {
        clearTimeout(tButtons);
        clearTimeout(tNext);
      };
    }
  }, [phase]);

  // Body overflow management (movido do HomeSection)
  useEffect(function() {
    if (phase === 'initial' || phase === 'menu') {
      document.body.style.overflow = '';
      document.documentElement.style.overflow = '';
    } else {
      document.body.style.overflow = 'hidden';
      document.documentElement.style.overflow = 'hidden';
    }
    return function() {
      document.body.style.overflow = '';
      document.documentElement.style.overflow = '';
    };
  }, [phase]);

  const handleStart = function() {
    if (phase !== 'initial') return;
    setPhase('pulse');
  };

  const handleSectionClick = function(id) {
    return function(e) {
      e.preventDefault();
      // Liberar scroll lock (caso clique mid-animation)
      document.body.style.overflow = '';
      document.documentElement.style.overflow = '';
      // Scroll para a secao
      scrollToSectionFromBrain(id);
      // Update URL
      history.replaceState(null, '', '#' + id);
      // NAO dispara reset — só RENAN faz reset
    };
  };

  // Estilos dos 4 overlays de imagem (fade rapido no expand)
  const getOverlayStyle = function(section, index) {
    if (phase === 'initial' || phase === 'pulse') {
      return {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%) rotate(0deg) scale(1)',
        width: 'min(70vh, 70vw, 500px)',
        height: 'min(70vh, 70vw, 500px)',
        transition: 'all 1.5s cubic-bezier(0.65, 0, 0.35, 1) ' + (index * 200) + 'ms',
        opacity: 1,
        pointerEvents: 'none',
      };
    }
    return {
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%) scale(0.4)',
      width: 'min(70vh, 70vw, 500px)',
      height: 'min(70vh, 70vw, 500px)',
      transition: 'opacity 0.3s ease-out, transform 0.4s ease-out',
      opacity: 0,
      pointerEvents: 'none',
    };
  };

  return (
    <>
      {/* v9.3: CSS do wave agora e estatico (em css/styles.css)
          - Nao e recriado a cada render do React
          - A classe .wave-letter e aplicada nos spans quando centered=true */}
    <div
      className="relative w-full overflow-hidden"
      style={{ height: '100vh', minHeight: '600px' }}
    >
      {/* CAMADA 1: Imagem base do cerebro
          - SEM rotacao durante expand (v7: era feia, conflitava com as letras)
          - Apenas fade out + leve shrink */}
      <div
        className="absolute inset-0 flex items-center justify-center"
        style={{
          opacity: (phase === 'expand' || phase === 'menu') ? 0 : 1,
          transform: phase === 'expand' ? 'scale(0.7)' : 'scale(1)',
          transition: 'opacity 0.4s ease-out, transform 0.5s ease-out',
        }}
      >
        <img
          src="img/AI_Cerebro-com-chip-central.png"
          alt="Cerebro Neural"
          className="object-contain"
          style={{
            width: 'min(70vh, 70vw, 500px)',
            height: 'min(70vh, 70vw, 500px)',
            transform: phase === 'pulse' ? 'scale(1.15)' : 'scale(1)',
            transition: 'transform 0.6s ease',
            filter: 'drop-shadow(0 0 20px rgba(0, 217, 255, 0.5))',
          }}
        />
      </div>

      {/* CAMADA 2: 4 Overlays de imagem (fade rapido no expand) */}
      {SECTIONS.map(function(section, index) {
        return (
          <div key={section.id} style={getOverlayStyle(section, index)}>
            <img
              src={section.img}
              alt={section.id}
              className="w-full h-full object-contain"
              style={{
                filter: 'drop-shadow(0 0 15px rgba(0, 255, 136, 0.6))',
              }}
            />
          </div>
        );
      })}

      {/* CAMADA 2.5: Matrix Trails (so aparece no expand)
          - 4 trilhas separadas, cada uma na cor da secao
          - 25 caracteres por trilha, fluindo do centro ao canto
          - Trail duration: 1500ms (mais lento = letras mais visiveis)
          - Final opacity: 0.15 (letras ainda visiveis atras dos botoes)
          - v8: windowSize prop para posicionamento responsivo */}
      {phase === 'expand' && SECTIONS.map(function(section, index) {
        return (
          <MatrixTrail
            key={section.id}
            section={section}
            trailOffset={index * 100}
            windowSize={windowSize}
          />
        );
      })}

      {/* CAMADA 2.7: MatrixTextTrail (v8.8) — Trilha Matrix para o texto "RENAN"
          - 30 caracteres descendo do TOPO (6%) ao CENTRO (50%)
          - Aparece em phase='expand' (mesmo tempo dos botoes)
          - Quando termina, o texto real aparece no centro (DOBRO do tamanho) */}
      {phase === 'expand' && <MatrixTextTrail />}

      {/* CAMADA 3: Nome RENAN + subtitle
          - v8.8: animacao UNIFICADA controlada por JS (requestAnimationFrame)
          - textTop: posicao vertical (atualizada de 6% ate 50% durante a animacao)
          - textOpacity: fade out (0-200ms) → invisivel (200-2300ms) → fade in (2300-2500ms)
          - textScale: 1.0x durante o trail, salta para 2.0x (DOBRO) no fade in final
          - SEM SCRAMBLE — em vez disso, MatrixTextTrail e renderizada por cima */}
      <div
        className="absolute left-1/2 text-center"
        style={{
          top: textTop,
          transform: 'translateX(-50%)',
          opacity: textOpacity,  // v8.8: controlado por rAF (fade in/out)
          zIndex: 20,
          transition: 'opacity 0.1s linear',  // suaviza transicoes rapidas
        }}
      >
        <h1
          className="font-bold"
          style={{
            fontSize: (4 * textScale) + 'rem',
            lineHeight: 1.1,
            // v9.4.3: COR e TEXTSHADOR removidos COMPLETAMENTE do h1/p.
            // Agora as cores padrao sao definidas via classes CSS nos spans:
            //   .letter-h1 (verde) e .letter-p (azul).
            // Quando .wave-letter e adicionado, o @keyframes waveColors (nivel de
            // cascata de animacao) SOBREPOE os valores das classes normais.
            // Nao ha mais conflito de heranca ou race condition!
            fontFamily: 'monospace',
            minWidth: '5ch',
            textAlign: 'center',
            whiteSpace: 'nowrap',
          }}
        >
          {renanText.split('').map(function(char, i) {
            return (
              <span
                key={'r-' + i}
                ref={function(el) { letterRefs.current[i] = el; }}
                // v9.4.3: letter-h1 = cor verde padrao.
                // wave-letter = animacao @keyframes waveColors (SOBREPOE a cor).
                // CSS variable --wave-delay controla o delay entre letras.
                className={'letter-h1' + (centered ? ' wave-letter' : '')}
                style={{ '--wave-delay': (i * 80) + 'ms' }}
              >
                {char}
              </span>
            );
          })}
        </h1>
        <p
          style={{
            // v9.4.3: COR e TEXTSHADOW removidos COMPLETAMENTE.
            // Cores padrao via classes CSS .letter-p nos spans.
            fontSize: (1 * textScale) + 'rem',
            letterSpacing: '0.2em',
            marginTop: '0.5rem',
            fontFamily: 'monospace',
            whiteSpace: 'nowrap',
            textAlign: 'center',
          }}
        >
          {subtitleText.split('').map(function(char, i) {
            return (
              <span
                key={'s-' + i}
                ref={function(el) { subtitleLetterRefs.current[i] = el; }}
                // v9.4.3: letter-p = cor azul padrao.
                // wave-letter = animacao @keyframes waveColors (SOBREPOE a cor).
                className={'letter-p' + (centered ? ' wave-letter' : '')}
                style={{ '--wave-delay': (i * 80) + 'ms' }}
              >
                {char}
              </span>
            );
          })}
        </p>
      </div>

      {/* CAMADA 4: CTA "Explore My Work" (so no initial) */}
      {phase === 'initial' && (
        <div
          style={{
            position: 'absolute',
            bottom: '12%',
            left: '50%',
            transform: 'translateX(-50%)',
            zIndex: 20,
          }}
        >
          <button
            onClick={handleStart}
            style={{
              padding: '1rem 2.5rem',
              border: '2px solid #00ff88',
              color: '#00ff88',
              background: 'rgba(10, 14, 39, 0.5)',
              fontSize: '1.1rem',
              fontWeight: 600,
              letterSpacing: '0.1em',
              cursor: 'pointer',
              boxShadow: '0 0 20px rgba(0, 255, 136, 0.4)',
              transition: 'all 0.3s ease',
            }}
            onMouseOver={function(e) {
              e.currentTarget.style.background = '#00ff88';
              e.currentTarget.style.color = '#0a0e27';
            }}
            onMouseOut={function(e) {
              e.currentTarget.style.background = 'rgba(10, 14, 39, 0.5)';
              e.currentTarget.style.color = '#00ff88';
            }}
          >
            {t.home.cta}
          </button>
        </div>
      )}

      {/* CAMADA 5: 4 Botoes nos cantos
          - Renderiza quando buttonsVisible (durante expand) ou phase === 'menu'
          - Z-index 30 (acima dos trails em z-index 25)
          - Botoes com delay escalonado (0, 150, 300, 450ms)
          - v8: windowSize prop para posicionamento responsivo */}
      {buttonsVisible && (
        <div className="absolute inset-0" style={{ zIndex: 30, pointerEvents: 'none' }}>
          {SECTIONS.map(function(section, i) {
            return (
              <CornerButton
                key={section.id}
                section={{
                  ...section,
                  delay: i * 150,
                  label: t.nav[section.labelKey],
                }}
                onClick={handleSectionClick(section.id)}
                windowSize={windowSize}
              />
            );
          })}
        </div>
      )}
    </div>
    </>
  );
}
