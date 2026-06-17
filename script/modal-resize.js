/**
 * modal-resize.js — 3 botões de redimensionamento (Desktop / Tablet / Celular)
 *
 * Adiciona uma barra com 3 botões no header do modal:
 * 🖥 Desktop (100%) | 📱 Tablet (~66%) | 📱 Celular (400px)
 * Apenas a largura é alterada — a altura permanece a mesma.
 * O botão ativo fica destacado.
 *
 * Uso: adicione a classe .resizable-modal ao .modal-box
 */
(function() {
  'use strict';

  function initResizeButtons() {
    var modals = document.querySelectorAll('.resizable-modal');
    if (!modals.length) return;

    var DEVICES = [
      {
        id: 'desktop',
        name: 'Desktop',
        w: 1.0,
        svg: '<svg viewBox="0 0 20 18" width="14" height="13" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect x="1" y="1" width="18" height="12" rx="1"/><line x1="5" y1="17" x2="15" y2="17"/><line x1="10" y1="13" x2="10" y2="17"/></svg>'
      },
      {
        id: 'tablet',
        name: 'Tablet',
        w: 0.66,
        svg: '<svg viewBox="0 0 16 20" width="12" height="14" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect x="1" y="1" width="14" height="18" rx="2"/><line x1="8" y1="16" x2="8.01" y2="16"/></svg>'
      },
      {
        id: 'mobile',
        name: 'Celular',
        w: 400, // largura fixa em px
        svg: '<svg viewBox="0 0 12 20" width="10" height="15" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect x="1" y="1" width="10" height="18" rx="2"/><line x1="6" y1="16" x2="6.01" y2="16"/></svg>'
      }
    ];

    modals.forEach(function(modalBox) {
      if (modalBox.querySelector('.resize-bar')) return;

      var header = modalBox.querySelector('.private-modal-header, .roleta-modal-header');
      if (!header) return;

      // Cria container da barra
      var bar = document.createElement('div');
      bar.className = 'resize-bar';
      header.appendChild(bar);

      var origW = 0;
      var activeId = 'desktop';

      DEVICES.forEach(function(device) {
        var btn = document.createElement('button');
        btn.className = 'resize-btn' + (device.id === 'desktop' ? ' active' : '');
        btn.setAttribute('title', device.name);
        btn.innerHTML = device.svg + '<span class="resize-btn-tooltip">' + device.name + '</span>';
        bar.appendChild(btn);

        // Define largura inicial no primeiro clique em qualquer botão
        function setWidth(id) {
          if (origW === 0) {
            origW = modalBox.offsetWidth;
          }

          if (id === 'desktop') {
            modalBox.style.width = origW + 'px';
          } else if (id === 'mobile') {
            modalBox.style.width = DEVICES[2].w + 'px';
          } else { // tablet
            modalBox.style.width = Math.round(origW * DEVICES[1].w) + 'px';
          }
          modalBox.style.maxWidth = 'none';
          modalBox.style.minWidth = 'auto';

          // Atualiza active
          bar.querySelectorAll('.resize-btn').forEach(function(b) { b.classList.remove('active'); });
          btn.classList.add('active');
          activeId = id;
        }

        btn.addEventListener('click', function(e) {
          e.stopPropagation();
          setWidth(device.id);
        });
      });
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initResizeButtons);
  } else {
    initResizeButtons();
  }
})();
