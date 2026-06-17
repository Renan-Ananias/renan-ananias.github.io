/**
 * brain-menu.js — Hero animado do cérebro neural (Vanilla JS)
 * Matrix trails, Corner buttons, RENAN text animation, Wave effect
 */
(function() {
  'use strict';

  var MATRIX_CHARS = 'アイウエオカキクケコサシスセソタチツテトンナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン0123456789$#@%&*+=';

  var SECTIONS = [
    { id: 'about',    img: 'midia/img/brain_layer_about.png',    emoji: '\uD83D\uDC64', corner: 'top-left',     color: '#ffd60a' },
    { id: 'projects', img: 'midia/img/brain_layer_projects.png', emoji: '\uD83D\uDCBC', corner: 'top-right',    color: '#00d4ff' },
    { id: 'visitors', img: 'midia/img/brain_layer_visitors.png', emoji: '\uD83C\uDF0D', corner: 'bottom-left',  color: '#00ff88' },
    { id: 'contact',  img: 'midia/img/brain_layer_contact.png',  emoji: '\u2709\uFE0F', corner: 'bottom-right', color: '#ff006e' },
  ];

  function getWindowSize() {
    return { w: window.innerWidth, h: window.innerHeight };
  }

  function getTargetPosition(corner, win) {
    var w = win.w || 1920, h = win.h || 1080;
    var minDim = Math.min(w, h);
    var pad = Math.max(140, Math.min(minDim * 0.29, 210));
    switch (corner) {
      case 'top-left':      return { top: pad + 'px', left: pad + 'px' };
      case 'top-right':     return { top: pad + 'px', left: (w - pad) + 'px' };
      case 'bottom-left':   return { top: (h - pad) + 'px', left: pad + 'px' };
      case 'bottom-right':  return { top: (h - pad) + 'px', left: (w - pad) + 'px' };
      default:              return { top: '50%', left: '50%' };
    }
  }

  function scrollToSection(id) {
    var el = document.getElementById(id);
    if (!el) return;
    var top = el.getBoundingClientRect().top + window.scrollY - 64;
    window.scrollTo({ top: top, behavior: 'smooth' });
  }

  // Estado do BrainMenu
  var state = {
    phase: 'initial',       // initial | pulse | expand | menu
    buttonsVisible: false,
    centered: false,
    textTop: '6%',
    textOpacity: 1,
    textScale: 1,
    renanText: 'RENAN',
    subtitleText: 'DESENVOLVEDOR CRIATIVO',
    windowSize: getWindowSize(),
  };

  var animFrameId = null;
  var sectionLabels = ['Sobre', 'Projetos', 'Visitantes', 'Contato'];

  function phaseTransition(newPhase) {
    var oldPhase = state.phase;
    state.phase = newPhase;

    if (newPhase === 'initial') {
      state.centered = false;
      state.textTop = '6%';
      state.textOpacity = 1;
      state.textScale = 1;
      state.buttonsVisible = false;
      if (animFrameId) { cancelAnimationFrame(animFrameId); animFrameId = null; }
      document.body.style.overflow = '';
      document.documentElement.style.overflow = '';
      render();
      return;
    }

    if (newPhase === 'pulse') {
      document.body.style.overflow = 'hidden';
      document.documentElement.style.overflow = 'hidden';
      render();
      setTimeout(function() { phaseTransition('expand'); }, 700);
      return;
    }

    if (newPhase === 'expand') {
      // Animação unificada (2500ms)
      var durationMs = 2500;
      var startTime = performance.now();
      var overlayEls = document.querySelectorAll('.hero-overlay');

      // Fade out dos overlays
      overlayEls.forEach(function(el, idx) {
        el.style.transition = 'all 1.5s cubic-bezier(0.65, 0, 0.35, 1) ' + (idx * 200) + 'ms';
        el.style.opacity = '0';
        el.style.transform = 'translate(-50%, -50%) scale(0.4)';
      });

      // Cria matrix trails
      createMatrixTrails();

      // Cria text trail
      createTextTrail();

      function animate(now) {
        var elapsed = now - startTime;
        var progress = Math.min(elapsed / durationMs, 1);

        // Posição: desce de 6% para 42%
        var topPct = 6 + (42 - 6) * progress;
        state.textTop = topPct + '%';

        // Opacidade + tamanho
        if (progress < 0.04) {
          state.textOpacity = 1 - (progress / 0.04);
          state.textScale = 1;
        } else if (progress < 0.94) {
          state.textOpacity = 0;
          state.textScale = 1;
        } else {
          var appearProgress = (progress - 0.94) / 0.06;
          state.textOpacity = appearProgress;
          state.textScale = 2;
        }

        renderText();

        if (progress < 1) {
          animFrameId = requestAnimationFrame(animate);
        } else {
          // Finaliza
          state.textTop = '42%';
          state.textOpacity = 1;
          state.textScale = 2;
          state.centered = true;
          animFrameId = null;
          renderText();
          // Mostra botões
          setTimeout(function() {
            state.buttonsVisible = true;
            renderButtons();
          }, 0);
          // Vai para menu após 2500ms
          setTimeout(function() {
            state.phase = 'menu';
          }, 2500);
        }
      }

      animFrameId = requestAnimationFrame(animate);
      render();
    }
  }

  function createMatrixTrails() {
    var container = document.getElementById('hero-matrix-trail');
    if (!container) return;
    container.innerHTML = '';

    SECTIONS.forEach(function(section, sIdx) {
      var numParticles = 25;
      var target = getTargetPosition(section.corner, state.windowSize);

      for (var i = 0; i < numParticles; i++) {
        var span = document.createElement('span');
        span.className = 'matrix-particle';
        span.textContent = MATRIX_CHARS[Math.floor(Math.random() * MATRIX_CHARS.length)];
        span.style.color = section.color;
        span.style.textShadow = '0 0 6px ' + section.color + ', 0 0 14px ' + section.color + ', 0 0 28px ' + section.color;
        span.style.left = '50%';
        span.style.top = '50%';
        span.style.transform = 'translate(-50%, -50%) scale(0.3)';
        span.style.opacity = '0';
        container.appendChild(span);

        var delay = (i * 25) + (sIdx * 100);
        var jx = (Math.random() - 0.5) * 50;
        var jy = (Math.random() - 0.5) * 50;

        var anim = span.animate([
          { left: '50%', top: '50%', opacity: 0, transform: 'translate(-50%, -50%) scale(0.3)' },
          { left: '50%', top: '50%', opacity: 1, transform: 'translate(calc(-50% + ' + jx + 'px), calc(-50% + ' + jy + 'px)) scale(1.4)', offset: 0.1 },
          { left: '50%', top: '50%', opacity: 0.9, transform: 'translate(calc(-50% + ' + jx + 'px), calc(-50% + ' + jy + 'px)) scale(1)', offset: 0.25 },
          { left: target.left, top: target.top, opacity: 0.15, transform: 'translate(-50%, -50%) scale(0.4)' },
        ], {
          duration: 1500,
          delay: delay,
          easing: 'cubic-bezier(0.4, 0, 0.6, 1)',
          fill: 'forwards',
        });
      }
    });
  }

  function createTextTrail() {
    var container = document.getElementById('hero-text-trail');
    if (!container) return;
    container.innerHTML = '';

    var numParticles = 30;

    for (var i = 0; i < numParticles; i++) {
      var span = document.createElement('span');
      span.className = 'text-trail-particle';
      span.textContent = MATRIX_CHARS[Math.floor(Math.random() * MATRIX_CHARS.length)];
      span.style.left = '50%';
      span.style.top = '6%';
      span.style.transform = 'translate(-50%, -50%)';
      span.style.opacity = '0';
      container.appendChild(span);

      var delay = i * 30;
      var jx = (Math.random() - 0.5) * 120;
      var jy = (Math.random() - 0.5) * 40;

      var anim = span.animate([
        { left: '50%', top: '6%', opacity: 0, transform: 'translate(-50%, -50%) scale(0.3)' },
        { left: '50%', top: '6%', opacity: 1, transform: 'translate(calc(-50% + ' + jx + 'px), calc(-50% + ' + jy + 'px)) scale(1.4)', offset: 0.1 },
        { left: '50%', top: '6%', opacity: 0.9, transform: 'translate(calc(-50% + ' + jx + 'px), calc(-50% + ' + jy + 'px)) scale(1)', offset: 0.25 },
        { left: '50%', top: '50%', opacity: 0, transform: 'translate(-50%, -50%) scale(0.3)' },
      ], {
        duration: 1500,
        delay: delay,
        easing: 'cubic-bezier(0.4, 0, 0.6, 1)',
        fill: 'forwards',
      });
    }
  }

  function render() {
    // Brain image
    var brainImg = document.getElementById('hero-brain-img');
    if (brainImg) {
      if (state.phase === 'expand' || state.phase === 'menu') {
        brainImg.style.opacity = '0';
        brainImg.style.transform = 'scale(0.7)';
      } else {
        brainImg.style.opacity = '1';
        brainImg.style.transform = state.phase === 'pulse' ? 'scale(1.15)' : 'scale(1)';
      }
    }

    // Brain overlays
    var overlays = document.querySelectorAll('.hero-overlay');
    if (state.phase !== 'expand' && state.phase !== 'menu') {
      overlays.forEach(function(el) {
        el.style.opacity = '1';
        el.style.transform = 'translate(-50%, -50%) rotate(0deg) scale(1)';
      });
    }

    // Texto
    renderText();

    // CTA button
    var cta = document.getElementById('hero-cta');
    if (cta) cta.style.display = (state.phase === 'initial') ? '' : 'none';

    // Botões
    renderButtons();
  }

  function renderText() {
    var textEl = document.getElementById('hero-text');
    if (!textEl) return;

    textEl.style.top = state.textTop;
    textEl.style.opacity = state.textOpacity;
    textEl.style.transition = 'opacity 0.1s linear';

    var h1 = textEl.querySelector('h1');
    var p = textEl.querySelector('p');

    if (h1) {
      h1.style.fontSize = (4 * state.textScale) + 'rem';
      if (!h1.children.length) {
        // Criar spans
        h1.innerHTML = '';
        var letters = state.renanText.split('');
        for (var i = 0; i < letters.length; i++) {
          var span = document.createElement('span');
          span.className = 'letter-h1' + (state.centered ? ' wave-letter' : '');
          span.style.setProperty('--wave-delay', (i * 80) + 'ms');
          span.textContent = letters[i];
          h1.appendChild(span);
        }
      } else {
        // Atualizar classes
        var spans = h1.querySelectorAll('span');
        for (var j = 0; j < spans.length; j++) {
          if (state.centered) spans[j].classList.add('wave-letter');
          else spans[j].classList.remove('wave-letter');
        }
      }
    }

    if (p) {
      p.style.fontSize = (1 * state.textScale) + 'rem';
      if (!p.children.length) {
        p.innerHTML = '';
        var subLetters = state.subtitleText.split('');
        for (var k = 0; k < subLetters.length; k++) {
          var sp = document.createElement('span');
          sp.className = 'letter-p' + (state.centered ? ' wave-letter' : '');
          sp.style.setProperty('--wave-delay', (k * 80) + 'ms');
          sp.textContent = subLetters[k];
          p.appendChild(sp);
        }
      } else {
        var subSpans = p.querySelectorAll('span');
        for (var l = 0; l < subSpans.length; l++) {
          if (state.centered) subSpans[l].classList.add('wave-letter');
          else subSpans[l].classList.remove('wave-letter');
        }
      }
    }
  }

  function renderButtons() {
    var container = document.getElementById('hero-buttons');
    if (!container) return;

    if (!state.buttonsVisible) {
      container.innerHTML = '';
      return;
    }

    // Só renderiza se vazio
    if (container.children.length > 0) return;

    container.style.position = 'absolute';
    container.style.inset = '0';
    container.style.zIndex = '30';
    container.style.pointerEvents = 'none';

    SECTIONS.forEach(function(section, idx) {
      var pos = getTargetPosition(section.corner, state.windowSize);
      var btn = document.createElement('button');
      btn.className = 'corner-btn';
      btn.style.position = 'absolute';
      btn.style.top = pos.top;
      btn.style.left = pos.left;
      btn.style.cursor = 'pointer';
      btn.style.pointerEvents = 'auto';
      btn.style.background = 'transparent';
      btn.style.border = 'none';
      btn.style.padding = '0';
      btn.style.transform = 'translate(-50%, -50%) scale(0.7)';
      btn.style.opacity = '0';
      btn.style.transition = 'all 0.5s cubic-bezier(0.34, 1.56, 0.64, 1)';

      // Delay escalonado
      setTimeout(function() {
        btn.style.opacity = '1';
        btn.style.transform = 'translate(-50%, -50%) scale(1)';
      }, idx * 150);

      btn.onclick = function(e) {
        e.preventDefault();
        document.body.style.overflow = '';
        document.documentElement.style.overflow = '';
        scrollToSection(section.id);
        history.replaceState(null, '', '#' + section.id);
      };

      btn.innerHTML = '<div class="corner-btn-inner">' +
        '<div class="corner-btn-emoji">' + section.emoji + '</div>' +
        '<div class="corner-btn-label">' + sectionLabels[idx] + '</div>' +
        '</div>';

      // Hover effects
      var inner = btn.querySelector('.corner-btn-inner');
      btn.onmouseenter = function() {
        inner.style.borderColor = '#00ff88';
        inner.style.boxShadow = '0 0 30px rgba(0, 255, 136, 0.6)';
        inner.style.transform = 'scale(1.1)';
      };
      btn.onmouseleave = function() {
        inner.style.borderColor = '#00d9ff';
        inner.style.boxShadow = '0 0 25px rgba(0, 217, 255, 0.3)';
        inner.style.transform = 'scale(1)';
      };

      container.appendChild(btn);
    });
  }

  // Handler de resize
  function handleResize() {
    state.windowSize = getWindowSize();
    // Re-renderiza botões se visíveis
    if (state.buttonsVisible) {
      var container = document.getElementById('hero-buttons');
      if (container) {
        container.innerHTML = '';
        state.buttonsVisible = false;
        setTimeout(function() {
          state.buttonsVisible = true;
          renderButtons();
        }, 50);
      }
    }
  }

  // Reset handler
  function handleReset() {
    state.phase = 'initial';
    state.buttonsVisible = false;
    state.centered = false;
    state.textTop = '6%';
    state.textOpacity = 1;
    state.textScale = 1;
    if (animFrameId) { cancelAnimationFrame(animFrameId); animFrameId = null; }
    // Limpar trails
    var mt = document.getElementById('hero-matrix-trail');
    if (mt) mt.innerHTML = '';
    var tt = document.getElementById('hero-text-trail');
    if (tt) tt.innerHTML = '';
    // Restaurar overlays
    document.querySelectorAll('.hero-overlay').forEach(function(el) {
      el.style.opacity = '1';
      el.style.transform = 'translate(-50%, -50%) scale(1)';
      el.style.transition = '';
    });
    document.body.style.overflow = '';
    document.documentElement.style.overflow = '';
    render();
  }

  // Inicialização
  function init() {
    var heroSection = document.querySelector('.hero-section');
    if (!heroSection) return;

    // Configurar estado inicial
    render();

    // Resize listener
    window.addEventListener('resize', handleResize);

    // Reset listener
    window.addEventListener('resetBrainMenu', handleReset);

    // Handle start
    var startBtn = document.getElementById('hero-start-btn');
    if (startBtn) {
      startBtn.addEventListener('click', function() {
        if (state.phase !== 'initial') return;
        phaseTransition('pulse');
      });
    }

    // Scroll to section (se hash na URL)
    if (window.location.hash) {
      var targetId = window.location.hash.slice(1);
      if (targetId) {
        setTimeout(function() {
          scrollToSection(targetId);
        }, 500);
      }
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
