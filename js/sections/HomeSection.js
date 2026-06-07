/**
 * HomeSection.js — Secao inicial (hero)
 *
 * v6: REMOVIDO flex/min-h-screen/pt-16/overflow-hidden.
 * Antes, esses estilos CONFLITAVAM com BrainMenu (height: 100vh):
 * - pt-16 (64px) + justify-center empurrava o BrainMenu 100vh
 *   para FORA da section em ~32px (overflow-hidden cortava o fundo)
 * - Resultado: botoes bottom (Visitors/Contact) eram cortados pela borda
 * Agora a section e' apenas um wrapper relativo; o BrainMenu controla 100%.
 */
import ErrorBoundary from '../components/ErrorBoundary.js';
import { BrainMenu } from '../components/BrainMenu.js';

export function HomeSection() {
  return (
    <section id="home" className="relative scroll-mt-20">
      <ErrorBoundary>
        <BrainMenu />
      </ErrorBoundary>
    </section>
  );
}
