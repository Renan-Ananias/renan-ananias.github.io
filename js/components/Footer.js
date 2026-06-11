/**
 * Footer.js — Rodapé do site
 */
import { useLanguage } from '../contexts/LanguageContext.js';

export function Footer() {
  const { t } = useLanguage();
  const year = new Date().getFullYear();

  return (
    <footer className="relative z-20 border-t border-[#00d9ff]/20 bg-[#0a0e27]/60 backdrop-blur-md mt-12">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-center md:text-left">
            <div className="text-xl font-bold bg-gradient-to-r from-[#00ff88] via-[#00d9ff] to-[#00ff88] bg-clip-text text-transparent">
              RENAN
            </div>
            <div className="text-xs text-gray-500 mt-1">
              © {year} Renan Ananias. {t.home.subtitle}.
            </div>
          </div>

          <nav className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm">
            <a href="#home" className="text-gray-400 hover:text-[#00ff88] transition-colors">
              {t.nav.home}
            </a>
            <a href="#about" className="text-gray-400 hover:text-[#00ff88] transition-colors">
              {t.nav.about}
            </a>
            <a href="#projects" className="text-gray-400 hover:text-[#00ff88] transition-colors">
              {t.nav.projects}
            </a>
            <a href="#visitors" className="text-gray-400 hover:text-[#00ff88] transition-colors">
              {t.nav.visitors}
            </a>
            <a href="#contact" className="text-gray-400 hover:text-[#00ff88] transition-colors">
              {t.nav.contact}
            </a>
          </nav>

          <a
            href="mailto:ananias.renan@gmail.com"
            className="text-sm text-[#00d9ff] hover:text-[#00ff88] transition-colors"
          >
            ananias.renan@gmail.com
          </a>
        </div>
      </div>
    </footer>
  );
}
