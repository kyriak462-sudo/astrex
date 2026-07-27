import "server-only";
import type { Dictionary } from "./dictionary";
import type { Locale } from "./locales";

const loaders: Record<Locale, () => Promise<{ default: Dictionary }>> = {
  ru: () => import("./dictionaries/ru"),
  en: () => import("./dictionaries/en"),
  el: () => import("./dictionaries/el"),
  es: () => import("./dictionaries/es"),
  de: () => import("./dictionaries/de"),
  fr: () => import("./dictionaries/fr"),
  tr: () => import("./dictionaries/tr"),
  pt: () => import("./dictionaries/pt"),
  it: () => import("./dictionaries/it"),
  uk: () => import("./dictionaries/uk"),
};

export async function getDictionary(locale: Locale): Promise<Dictionary> {
  const loader = loaders[locale] ?? loaders.ru;
  const mod = await loader();
  return mod.default;
}
