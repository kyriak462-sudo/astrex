export const LOCALES = [
  { code: "ru", label: "Русский" },
  { code: "en", label: "English" },
  { code: "el", label: "Ελληνικά" },
  { code: "es", label: "Español" },
  { code: "de", label: "Deutsch" },
  { code: "fr", label: "Français" },
  { code: "tr", label: "Türkçe" },
  { code: "pt", label: "Português" },
  { code: "it", label: "Italiano" },
  { code: "uk", label: "Українська" },
] as const;

export type Locale = (typeof LOCALES)[number]["code"];

export const DEFAULT_LOCALE: Locale = "en";
export const LOCALE_COOKIE = "astrex-locale";

export function isLocale(value: string): value is Locale {
  return LOCALES.some((l) => l.code === value);
}
