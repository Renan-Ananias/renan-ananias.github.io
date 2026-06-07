/**
 * utils.js — Utilitários gerais
 *
 * Equivalente ao `cn()` do projeto original (clsx + tailwind-merge),
 * mas simplificado para não precisar de dependências externas.
 *
 * Concatena classes condicionalmente (falsy values são ignorados).
 */
export function cn(...inputs) {
  return inputs
    .flat(Infinity)
    .filter(Boolean)
    .join(' ')
    .replace(/\s+/g, ' ')
    .trim();
}
