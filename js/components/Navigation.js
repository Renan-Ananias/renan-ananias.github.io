/**
 * Navigation.js — Barra de navegacao superior (v2 - MINIMAL)
 *
 * Mudancas da v1:
 * - REMOVIDOS os 5 links de secao (About, Projects, etc.) e o mobile menu
 * - Agora mostra APENAS "RENAN" + LanguageSwitcher sempre
 * - Os 4 botoes nos cantos do BrainMenu SAO o menu principal
 * - Click no RENAN: faz reset completo do BrainMenu (como F5) + scroll para o topo
 */
import { useLanguage } from '../contexts/LanguageContext.js';
import { LanguageSwitcher } from './LanguageSwitcher.js';

function scrollToSection(id) {
  const el = document.getElementById(id);
  if (!el) return;
  const navHeight = 64;
  const top = el.getBoundingClientRect().top + window.scrollY - navHeight;
  window.scrollTo({ top, behavior: 'smooth' });
}

export function Navigation() {
  const { t: _t } = useLanguage(); // mantido para futuro uso, nao usado no momento

  const handleRenanClick = function(e) {
    e.preventDefault();
    // Reset completo do BrainMenu (para animacao, libera scroll lock, volta ao estado inicial)
    if (typeof window !== 'undefined') {
      window.dispatchEvent(new CustomEvent('resetBrainMenu'));
    }
    // Scroll para o topo (secao home)
    scrollToSection('home');
    // Update URL
    history.replaceState(null, '', '#home');
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0a0e27]/80 backdrop-blur-md border-b border-[#00d9ff]/20">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex items-center justify-between h-16">
          <a
            href="#home"
            onClick={handleRenanClick}
            className="text-2xl font-bold bg-gradient-to-r from-[#00ff88] via-[#00d9ff] to-[#00ff88] bg-clip-text text-transparent hover:opacity-80 transition-opacity cursor-pointer select-none"
            title="Voltar ao inicio (reset da animacao)"
          >
            RENAN
          </a>
          <div className="pl-4 ml-2 border-l border-[#00d9ff]/20">
            <LanguageSwitcher />
          </div>
        </div>
      </div>
    </nav>
  );
}
