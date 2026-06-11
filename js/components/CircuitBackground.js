/**
 * CircuitBackground.js — Fundo animado de circuit board (canvas)
 *
 * Equivalente ao CircuitBackground.tsx do projeto original.
 */
import { useEffect, useRef } from 'react';

export function CircuitBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    let animationFrameId;
    let time = 0;

    const drawCircuitBoard = () => {
      ctx.fillStyle = 'rgba(10, 14, 39, 0.95)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      const nodeSize = 40;
      const nodeRadius = 2;
      const lineColor = 'rgba(0, 255, 136, 0.15)';
      const nodeColor = 'rgba(0, 255, 136, 0.2)';
      const activeNodeColor = 'rgba(0, 255, 136, 0.6)';

      ctx.strokeStyle = lineColor;
      ctx.lineWidth = 1;

      for (let x = 0; x < canvas.width; x += nodeSize) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, canvas.height);
        ctx.stroke();
      }
      for (let y = 0; y < canvas.height; y += nodeSize) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(canvas.width, y);
        ctx.stroke();
      }

      for (let x = 0; x < canvas.width; x += nodeSize) {
        for (let y = 0; y < canvas.height; y += nodeSize) {
          const distFromCenter = Math.sqrt(
            Math.pow(x - canvas.width / 2, 2) + Math.pow(y - canvas.height / 2, 2)
          );
          const wave = Math.sin(time * 0.003 + distFromCenter * 0.01) * 0.5 + 0.5;

          ctx.fillStyle = wave > 0.4 ? activeNodeColor : nodeColor;
          ctx.beginPath();
          ctx.arc(x, y, nodeRadius, 0, Math.PI * 2);
          ctx.fill();

          if (wave > 0.5) {
            ctx.strokeStyle = `rgba(0, 255, 136, ${wave * 0.3})`;
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

      const particleCount = 20;
      for (let i = 0; i < particleCount; i++) {
        const particleTime = (time * 0.5 + i * 50) % (canvas.width + canvas.height);
        const particleX = particleTime % canvas.width;
        const particleY = Math.floor(particleTime / canvas.width) * nodeSize;

        if (particleY < canvas.height) {
          const gradient = ctx.createRadialGradient(particleX, particleY, 0, particleX, particleY, 8);
          gradient.addColorStop(0, 'rgba(0, 217, 255, 0.8)');
          gradient.addColorStop(1, 'rgba(0, 217, 255, 0)');
          ctx.fillStyle = gradient;
          ctx.beginPath();
          ctx.arc(particleX, particleY, 8, 0, Math.PI * 2);
          ctx.fill();
        }
      }

      time += 1;
      animationFrameId = requestAnimationFrame(drawCircuitBoard);
    };

    drawCircuitBoard();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full pointer-events-none z-0"
      style={{ background: 'linear-gradient(135deg, #0a0e27 0%, #1a1f3a 100%)' }}
    />
  );
}
