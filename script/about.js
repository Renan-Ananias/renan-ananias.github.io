/**
 * about.js — Animações da seção Sobre (fade-in ao scroll)
 */
(function() {
  'use strict';

  function initAbout() {
    var aboutSection = document.getElementById('about');
    if (!aboutSection) return;

    var animated = aboutSection.querySelectorAll('.about-fade-in, .about-fade-in-left, .about-fade-in-right, .timeline-item, .skill-card');

    if ('IntersectionObserver' in window) {
      var observer = new IntersectionObserver(function(entries) {
        entries.forEach(function(entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            // Se for skill-card, adiciona delay escalonado
            var idx = Array.from(animated).indexOf(entry.target);
            if (idx >= 0) {
              entry.target.style.transitionDelay = (idx * 100) + 'ms';
            }
            observer.unobserve(entry.target);
          }
        });
      }, { threshold: 0.1 });

      animated.forEach(function(el) {
        observer.observe(el);
      });
    } else {
      // Fallback: mostra tudo
      animated.forEach(function(el) {
        el.classList.add('visible');
      });
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initAbout);
  } else {
    initAbout();
  }
})();
