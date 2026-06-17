/**
 * video-bg.js — Video Background responsivo (v3 - SIMPLIFICADO)
 * Orientação landscape/portrait + autoplay com fallback
 */
(function() {
  'use strict';

  var video = document.querySelector('#video-bg video');
  if (!video) return;

  function updateOrientation() {
    var isLandscape = window.innerWidth > window.innerHeight;
    if (isLandscape) {
      video.style.width = '100vh';
      video.style.height = '100vw';
      video.style.transform = 'translate(-50%, -50%) rotate(90deg)';
    } else {
      video.style.width = '100vw';
      video.style.height = '100vh';
      video.style.transform = 'translate(-50%, -50%)';
    }
  }

  updateOrientation();

  var resizeTimer;
  window.addEventListener('resize', function() {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(updateOrientation, 150);
  });

  // Autoplay com fallback para interação do usuário
  var playPromise = video.play();
  if (playPromise !== undefined) {
    playPromise.catch(function() {
      var playOnInteraction = function() {
        video.play().catch(function() {});
        document.removeEventListener('click', playOnInteraction);
        document.removeEventListener('touchstart', playOnInteraction);
        document.removeEventListener('scroll', playOnInteraction);
      };
      document.addEventListener('click', playOnInteraction, { once: true });
      document.addEventListener('touchstart', playOnInteraction, { once: true });
    });
  }
})();
