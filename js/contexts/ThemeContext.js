/**
 * ThemeContext.js — Contexto de tema (light/dark)
 *
 * Equivalente ao ThemeContext.tsx do projeto original.
 * Sempre força dark mode (tema neon cyber), mas mantém a estrutura
 * para permitir alternância futura.
 */
import { createContext, useContext, useEffect, useState } from 'react';

const ThemeContext = createContext(undefined);

export function ThemeProvider({ children, defaultTheme = 'dark', switchable = false }) {
  const [theme, setTheme] = useState(() => {
    if (switchable) {
      const stored = localStorage.getItem('theme');
      return stored || defaultTheme;
    }
    return defaultTheme;
  });

  useEffect(() => {
    const root = document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    if (switchable) {
      localStorage.setItem('theme', theme);
    }
  }, [theme, switchable]);

  const toggleTheme = switchable
    ? () => setTheme((prev) => (prev === 'light' ? 'dark' : 'light'))
    : undefined;

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, switchable }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within ThemeProvider');
  }
  return context;
}
