/**
 * LanguageContext.js — Contexto de idioma (pt-br, en, es, zh-cn, zh-tw, ja)
 *
 * Equivalente ao LanguageContext.tsx do projeto original,
 * sem dependências de tRPC ou TypeScript.
 */
import { createContext, useContext, useEffect, useState } from 'react';
import { getDictionary, detectInitialLanguage } from '../i18n/dictionaries.js';

const STORAGE_KEY = 'portfolio-lang';

const LanguageContext = createContext(null);

export function LanguageProvider({ children }) {
  const [language, setLanguageState] = useState(detectInitialLanguage);
  const [t, setT] = useState(() => getDictionary(detectInitialLanguage()));

  useEffect(() => {
    setT(getDictionary(language));
    document.documentElement.lang = language;
  }, [language]);

  const setLanguage = (lang) => {
    setLanguageState(lang);
    try {
      localStorage.setItem(STORAGE_KEY, lang);
    } catch {
      // localStorage indisponível (modo privado) — silencioso
    }
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) {
    throw new Error('useLanguage deve ser usado dentro de <LanguageProvider>');
  }
  return ctx;
}
