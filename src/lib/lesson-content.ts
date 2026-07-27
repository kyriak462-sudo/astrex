import type { DiagramKey } from "@/components/learn/diagrams";
import type { Locale } from "@/i18n/locales";
import { DEFAULT_LOCALE } from "@/i18n/locales";

export type ContentBlock =
  | { type: "paragraph"; text: string }
  | { type: "list"; items: string[] }
  | { type: "diagram"; diagram: DiagramKey; caption?: string };

export function parseLessonContent(content: unknown, locale: Locale): ContentBlock[] {
  if (!content || typeof content !== "object") return [];
  const byLocale = content as Record<string, ContentBlock[]>;
  return byLocale[locale] ?? byLocale[DEFAULT_LOCALE] ?? [];
}

export function pickLocalized<T>(
  value: Record<string, T> | null | undefined,
  locale: Locale
): T | undefined {
  if (!value) return undefined;
  return value[locale] ?? value[DEFAULT_LOCALE];
}
