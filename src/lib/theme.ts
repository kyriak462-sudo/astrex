export const THEME_COOKIE = "astrex-theme";
export type Theme = "dark" | "light";

export function isTheme(value: string | undefined): value is Theme {
  return value === "dark" || value === "light";
}
