/**
 * LanguageSwitcher.js — Dropdown para trocar idioma
 *
 * Equivalente ao LanguageSwitcher.tsx do projeto original.
 */
import { useState, useRef, useEffect } from 'react';
import { Globe, Check, ChevronDown } from './Icons.js';
import { useLanguage } from '../contexts/LanguageContext.js';
import { SUPPORTED_LANGUAGES } from '../i18n/dictionaries.js';

export function LanguageSwitcher() {
  const { language, setLanguage, t } = useLanguage();
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const handleClick = (e) => {
      if (ref.current && !ref.current.contains(e.target)) {
        setOpen(false);
      }
    };
    if (open) document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, [open]);

  const current = SUPPORTED_LANGUAGES.find((l) => l.code === language) || SUPPORTED_LANGUAGES[0];

  const handleSelect = (code) => {
    setLanguage(code);
    setOpen(false);
  };

  return (
    <div className="relative" ref={ref}>
      <button
        onClick={() => setOpen(!open)}
        title={t.nav.language}
        aria-label={t.nav.language}
        className="flex items-center gap-1.5 px-3 py-1.5 text-sm font-semibold text-gray-300 hover:text-[#00ff88] border border-[#00d9ff]/20 hover:border-[#00ff88]/60 rounded-md transition-all bg-[#0a0e27]/40 hover:bg-[#0a0e27]/70"
      >
        <Globe className="w-4 h-4" />
        <span className="text-base leading-none">{current.flag}</span>
        <span className="hidden lg:inline text-xs uppercase tracking-wide">
          {current.code === 'zh-cn'
            ? 'ZH'
            : current.code === 'zh-tw'
            ? 'TW'
            : current.code.split('-')[0].toUpperCase()}
        </span>
        <ChevronDown
          className={`w-3.5 h-3.5 transition-transform ${open ? 'rotate-180' : ''}`}
        />
      </button>

      {open && (
        <div
          className="absolute right-0 mt-2 w-56 rounded-lg border border-[#00d9ff]/30 bg-[#0a0e27]/95 backdrop-blur-md shadow-xl shadow-black/50 z-50 overflow-hidden animate-fade-in animate-slide-in-from-top-2"
          style={{ animationDuration: '150ms' }}
        >
          <div className="px-3 py-2 border-b border-[#00d9ff]/20 text-xs uppercase tracking-wider text-[#00d9ff]/80">
            {t.nav.language}
          </div>
          <ul className="py-1">
            {SUPPORTED_LANGUAGES.map((lang) => {
              const isActive = language === lang.code;
              return (
                <li key={lang.code}>
                  <button
                    onClick={() => handleSelect(lang.code)}
                    className={`w-full flex items-center gap-3 px-3 py-2 text-sm transition-colors ${
                      isActive
                        ? 'bg-[#00ff88]/10 text-[#00ff88]'
                        : 'text-gray-300 hover:bg-[#1a1f3a] hover:text-white'
                    }`}
                  >
                    <span className="text-lg leading-none">{lang.flag}</span>
                    <span className="flex-1 text-left">{lang.label}</span>
                    {isActive && <Check className="w-4 h-4 text-[#00ff88]" />}
                  </button>
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </div>
  );
}

export default LanguageSwitcher;
