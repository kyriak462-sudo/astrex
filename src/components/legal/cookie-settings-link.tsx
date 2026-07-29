"use client";

import { openCookieSettings } from "@/components/legal/cookie-consent";

export function CookieSettingsLink({ label }: { label: string }) {
  return (
    <button
      type="button"
      onClick={openCookieSettings}
      className="underline underline-offset-2 hover:text-neutral-900 dark:hover:text-white"
    >
      {label}
    </button>
  );
}
