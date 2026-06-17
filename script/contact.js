/**
 * contact.js — Formulário de contato + social links
 */
(function() {
  'use strict';

  function initContact() {
    var contactSection = document.getElementById('contact');
    if (!contactSection) return;

    // Animar fade
    var fadeEls = contactSection.querySelectorAll('.contact-fade-left, .contact-fade-right');
    if ('IntersectionObserver' in window) {
      var observer = new IntersectionObserver(function(entries) {
        entries.forEach(function(entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      }, { threshold: 0.1 });
      fadeEls.forEach(function(el) { observer.observe(el); });
    } else {
      fadeEls.forEach(function(el) { el.classList.add('visible'); });
    }

    // Formulário
    var form = document.getElementById('contact-form');
    if (!form) return;

    var statusEl = document.getElementById('form-status');
    var submitBtn = form.querySelector('.submit-btn');

    form.addEventListener('submit', function(e) {
      e.preventDefault();

      var formData = new FormData(form);
      var name = formData.get('name') || '';
      var email = formData.get('email') || '';
      var subject = formData.get('subject') || 'Project inquiry';
      var message = formData.get('message') || '';

      var mailtoLink = 'mailto:ananias.renan@gmail.com' +
        '?subject=' + encodeURIComponent(subject) +
        '&body=' + encodeURIComponent(
          'Nome: ' + name + '\n' +
          'Email: ' + email + '\n\n' +
          message
        );

      if (statusEl) {
        statusEl.textContent = 'Abrindo seu cliente de email...';
        statusEl.style.color = '#00ff88';
      }

      window.location.href = mailtoLink;

      // Limpa
      form.reset();

      setTimeout(function() {
        if (statusEl) statusEl.textContent = '';
      }, 5000);
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initContact);
  } else {
    initContact();
  }
})();
