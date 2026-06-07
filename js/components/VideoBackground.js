/**
 * VideoBackground.js — Camada de fundo com video em loop (Sessao 21.2 - v3)
 *
 * Comportamento por orientacao:
 * - LANDSCAPE (PC, tablet deitado, telas horizontais):
 *   - Video rotacionado 90 GRAUS (deita o video vertical)
 *   - width: 100vh (a altura vira a largura apos rotacao)
 *   - height: 100vw (a largura vira a altura apos rotacao)
 *   - Com video 9:16 em tela 16:9, a rotacao faz o video virar 16:9
 *     e o cover preenche 100% SEM ZOOM AGRESSSIVO
 *   - Sem rotação + cover em landscape, o video daria zoom agressivo
 *     (cobriria a largura com um pedaco gigante do video)
 *
 * - PORTRAIT (mobile, telas verticais):
 *   - Video em pe (sem rotacao), como o arquivo original
 *   - width: 100vw, height: 100vh
 *   - Com video 9:16 em tela 9:16, encaixa PERFEITAMENTE
 *   - Em telas 9:18, sobra topo/fundo (crop minimo, nao zoom)
 *
 * Dinamico:
 * - useState(isLandscape) detecta orientacao
 * - useEffect adiciona listener de resize
 * - Ao redimensionar a janela, a orientacao recalcula
 *   e o video se adapta (rotação 90° ↔ sem rotação)
 *
 * Otimizacoes:
 * - willChange: 'transform' (composicao GPU)
 * - muted (sem som)
 * - playsInline (mobile iOS)
 * - disablePictureInPicture, disableRemotePlayback
 * - pointerEvents: 'none' no container (clicks passam)
 * - zIndex: 0 (abaixo de tudo)
 *
 * Fallback:
 * - backgroundColor: '#0a0e27' no container (aparece enquanto carrega)
 *
 * v3: arquivo circuit-brain-v2.mp4 com rotação dinâmica por orientação
 */
import { useEffect, useState } from 'react';

function VideoBackground() {
  // Detecta orientacao: landscape (PC horizontal) vs portrait (mobile vertical)
  // Lazy initializer: usa o tamanho REAL da janela no primeiro render
  const [isLandscape, setIsLandscape] = useState(function() {
    if (typeof window !== 'undefined') {
      return window.innerWidth > window.innerHeight;
    }
    return true;  // fallback (SSR ou ambiente sem window)
  });

  // Listener de resize: recalcula orientacao ao redimensionar
  useEffect(function() {
    function handleResize() {
      setIsLandscape(window.innerWidth > window.innerHeight);
    }
    handleResize();  // sincroniza no mount (caso o valor inicial esteja errado)
    window.addEventListener('resize', handleResize);
    return function() {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        zIndex: 0,
        overflow: 'hidden',
        pointerEvents: 'none',
        backgroundColor: '#0a0e27',  // fallback enquanto carrega
      }}
    >
      <video
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        disablePictureInPicture
        disableRemotePlayback
        style={{
          // Posicao absoluta: necessario para o translate(-50%, -50%) centralizar
          position: 'absolute',
          top: '50%',
          left: '50%',
          // Dimensoes dinamicas baseadas na orientacao:
          // - Landscape: width=100vh, height=100vw (preparado para rotacao 90°)
          // - Portrait:  width=100vw, height=100vh (dimensoes normais)
          width: isLandscape ? '100vh' : '100vw',
          height: isLandscape ? '100vw' : '100vh',
          // Transform: centralizar SEMPRE + rotacionar 90° SE landscape
          // - Landscape: translate(-50%, -50%) rotate(90deg)
          //   → 1) translate centraliza o video
          //   → 2) rotate gira 90° em torno do centro (que ja esta centralizado)
          // - Portrait:  translate(-50%, -50%) (sem rotacao)
          transform: isLandscape
            ? 'translate(-50%, -50%) rotate(90deg)'
            : 'translate(-50%, -50%)',
          // Cobre 100% da tela (com crop minimo se proporcoes nao baterem)
          // Em landscape com video 9:16 e tela 16:9, o cover vira "perfeito" (sem crop)
          objectFit: 'cover',
          display: 'block',
          // Composição GPU para preservar qualidade e suavidade
          willChange: 'transform',
        }}
      >
        {/* Video v2 - 0.87 MB, codec H.264 preservado */}
        <source src="midia/circuit-brain-v2.mp4" type="video/mp4" />
      </video>
    </div>
  );
}

export { VideoBackground };
