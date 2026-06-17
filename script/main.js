/**
 * main.js — Bootstrap e funcionalidades globais
 * Smooth scroll, nav reset, active link tracking
 */
(function() {
  'use strict';

  function init() {
    // === Smooth scroll para links internos (#) ===
    document.querySelectorAll('a[href^="#"]').forEach(function(anchor) {
      anchor.addEventListener('click', function(e) {
        var href = this.getAttribute('href');
        if (!href || href === '#') return;
        e.preventDefault();
        var target = document.querySelector(href);
        if (target) {
          var navHeight = 64;
          var top = target.getBoundingClientRect().top + window.scrollY - navHeight;
          window.scrollTo({ top: top, behavior: 'smooth' });
        }
      });
    });

    // === Logo RENAN na nav: reset brain menu + scroll top ===
    var navLogo = document.getElementById('nav-logo');
    if (navLogo) {
      navLogo.addEventListener('click', function(e) {
        e.preventDefault();
        if (typeof window !== 'undefined') {
          window.dispatchEvent(new CustomEvent('resetBrainMenu'));
        }
        window.scrollTo({ top: 0, behavior: 'smooth' });
        history.replaceState(null, '', '#home');
      });
    }

    // === Active link tracking no scroll ===
    var sections = document.querySelectorAll('section[id]');
    var navLinks = document.querySelectorAll('.nav-links a[href^="#"]');

    if (sections.length > 0 && navLinks.length > 0 && 'IntersectionObserver' in window) {
      var observer = new IntersectionObserver(function(entries) {
        entries.forEach(function(entry) {
          if (entry.isIntersecting) {
            var id = entry.target.getAttribute('id');
            navLinks.forEach(function(link) {
              link.classList.remove('active');
              if (link.getAttribute('href') === '#' + id) {
                link.classList.add('active');
              }
            });
          }
        });
      }, { threshold: 0.3 });

      sections.forEach(function(s) { observer.observe(s); });
    }

    console.log('[Portfolio] Carregado com sucesso!');
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
