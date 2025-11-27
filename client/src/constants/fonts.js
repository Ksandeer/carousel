import fonts from '../fonts.json';

export const FONT_OPTIONS = fonts;

const FONT_MAP = new Map(fonts.map((font) => [font.value, font]));

export const DEFAULT_FONT = FONT_OPTIONS[0]?.value || 'Inter';

export function getFontOption(value) {
  return FONT_MAP.get(value) || null;
}

export function getFontStack(value) {
  const option = getFontOption(value);
  if (option) {
    return `'${option.value}', ${option.fallback || 'sans-serif'}`;
  }
  return value ? `'${value}', sans-serif` : "'Inter', sans-serif";
}

export function getFontImportUrl(value) {
  const option = getFontOption(value);
  if (!option || !option.googleId) {
    return null;
  }
  return `https://fonts.googleapis.com/css2?family=${option.googleId}&display=swap`;
}

export default FONT_OPTIONS;
