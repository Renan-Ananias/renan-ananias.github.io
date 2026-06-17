/**
 * circuit-bg.js — Fundo animado de circuit board (Canvas)
 * Renderiza grid de circuitos com partículas neon em movimento
 */
(function() {
  'use strict';

  function initCircuitBg() {
    var canvas = document.getElementById('circuit-canvas');
    if (!canvas) return;

    var ctx = canvas.getContext('2d');
    var animId = null;
    var time = 0;

    function resize() {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    }

    resize();
    window.addEventListener('resize', resize);

    function draw() {
      // Fundo
      // Fundo transparente para o vídeo aparecer atrás
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      var nodeSize = 40;
      var nodeRadius = 2;
      var lineColor = 'rgba(0, 255, 136, 0.15)';
      var nodeColor = 'rgba(0, 255, 136, 0.2)';
      var activeColor = 'rgba(0, 255, 136, 0.6)';

      // Grid
      ctx.strokeStyle = lineColor;
      ctx.lineWidth = 1;

      for (var x = 0; x < canvas.width; x += nodeSize) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, canvas.height);
        ctx.stroke();
      }
      for (var y = 0; y < canvas.height; y += nodeSize) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(canvas.width, y);
        ctx.stroke();
      }

      // Nodos + pulsos
      for (x = 0; x < canvas.width; x += nodeSize) {
        for (y = 0; y < canvas.height; y += nodeSize) {
          var dist = Math.sqrt(Math.pow(x - canvas.width / 2, 2) + Math.pow(y - canvas.height / 2, 2));
          var wave = Math.sin(time * 0.003 + dist * 0.01) * 0.5 + 0.5;

          ctx.fillStyle = wave > 0.4 ? activeColor : nodeColor;
          ctx.beginPath();
          ctx.arc(x, y, nodeRadius, 0, Math.PI * 2);
          ctx.fill();

          if (wave > 0.5) {
            ctx.strokeStyle = 'rgba(0, 255, 136, ' + (wave * 0.3) + ')';
            ctx.lineWidth = 0.5;
            if (x + nodeSize < canvas.width) {
              ctx.beginPath();
              ctx.moveTo(x, y);
              ctx.lineTo(x + nodeSize, y);
              ctx.stroke();
            }
            if (y + nodeSize < canvas.height) {
              ctx.beginPath();
              ctx.moveTo(x, y);
              ctx.lineTo(x, y + nodeSize);
              ctx.stroke();
            }
          }
        }
      }

      // Partículas ciano viajando
      var particleCount = 20;
      for (var i = 0; i < particleCount; i++) {
        var pt = (time * 0.5 + i * 50) % (canvas.width + canvas.height);
        var px = pt % canvas.width;
        var py = Math.floor(pt / canvas.width) * nodeSize;

        if (py < canvas.height) {
          var grad = ctx.createRadialGradient(px, py, 0, px, py, 8);
          grad.addColorStop(0, 'rgba(0, 217, 255, 0.8)');
          grad.addColorStop(1, 'rgba(0, 217, 255, 0)');
          ctx.fillStyle = grad;
          ctx.beginPath();
          ctx.arc(px, py, 8, 0, Math.PI * 2);
          ctx.fill();
        }
      }

      time++;
      animId = requestAnimationFrame(draw);
    }

    draw();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initCircuitBg);
  } else {
    initCircuitBg();
  }
})();
