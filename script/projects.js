/**
 * projects.js — Seção Projetos (modais, testemunhos, links)
 */
(function() {
  'use strict';

  function initProjects() {
    var projectsSection = document.getElementById('projects');
    if (!projectsSection) return;

    // Animar cards com IntersectionObserver
    var cards = projectsSection.querySelectorAll('.project-card, .testimonial-card');
    if ('IntersectionObserver' in window) {
      var observer = new IntersectionObserver(function(entries) {
        entries.forEach(function(entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      }, { threshold: 0.1 });
      cards.forEach(function(el) { observer.observe(el); });
    } else {
      cards.forEach(function(el) { el.classList.add('visible'); });
    }

    // === Modal de link privado ===
    var privateOverlay = document.getElementById('private-modal');
    if (privateOverlay) {
      privateOverlay.addEventListener('click', function() {
        this.style.display = 'none';
      });
      var privateBox = privateOverlay.querySelector('.private-modal-box');
      if (privateBox) {
        privateBox.addEventListener('click', function(e) { e.stopPropagation(); });
      }
      var privateOk = privateOverlay.querySelector('button.ok');
      if (privateOk) {
        privateOk.addEventListener('click', function() {
          privateOverlay.style.display = 'none';
        });
      }
    }

    // === Modal da Roleta ===
    var roletaOverlay = document.getElementById('roleta-modal');
    if (roletaOverlay) {
      roletaOverlay.addEventListener('click', function() {
        this.style.display = 'none';
        // Pausa o iframe
        var iframe = this.querySelector('iframe');
        if (iframe) iframe.src = iframe.src;
      });
      var roletaBox = roletaOverlay.querySelector('.roleta-modal-box');
      if (roletaBox) {
        roletaBox.addEventListener('click', function(e) { e.stopPropagation(); });
      }
      var roletaClose = roletaOverlay.querySelector('.modal-close');
      if (roletaClose) {
        roletaClose.addEventListener('click', function() {
          roletaOverlay.style.display = 'none';
        });
      }
    }

    // === Handlers de clique em links de projeto ===
    var projectLinks = projectsSection.querySelectorAll('.project-actions button[data-link]');
    projectLinks.forEach(function(btn) {
      btn.addEventListener('click', function() {
        var link = this.getAttribute('data-link');
        var linkType = this.getAttribute('data-type') || 'visit';
        handleProjectLink(link, linkType);
      });
    });

    function handleProjectLink(link, type) {
      if (!link || link === '#') {
        // Link privado
        var pm = document.getElementById('private-modal');
        if (pm) pm.style.display = 'flex';
        return;
      }
      if (link === '#roleta') {
        var rm = document.getElementById('roleta-modal');
        if (rm) rm.style.display = 'flex';
        return;
      }
      if (link.startsWith('http://') || link.startsWith('https://')) {
        window.open(link, '_blank', 'noopener,noreferrer');
        return;
      }
      if (link.startsWith('#') && link.length > 1) {
        var targetId = link.slice(1);
        var el = document.getElementById(targetId);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
        return;
      }
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initProjects);
  } else {
    initProjects();
  }
})();
