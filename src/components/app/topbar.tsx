import { Flame, Zap } from "lucide-react";
import { pluralizeDays } from "@/lib/pluralize";
import type { Locale } from "@/i18n/locales";

export function Topbar({
  xp,
  level,
  streakCount,
  xpToNextLevel,
  locale = "ru",
  levelLabel = "Уровень",
  streakDaysLabel,
}: {
  xp: number;
  level: number;
  streakCount: number;
  xpToNextLevel: number;
  locale?: Locale;
  levelLabel?: string;
  streakDaysLabel?: string;
}) {
  const progress = Math.min(100, Math.round((xp / xpToNextLevel) * 100));
  const streakText =
    locale === "ru"
      ? `${streakCount} ${pluralizeDays(streakCount)} подряд`
      : `${streakCount} ${streakDaysLabel ?? pluralizeDays(streakCount)}`;

  return (
    <header className="flex h-16 items-center justify-between border-b border-black/[0.06] px-4 dark:border-white/[0.06] sm:px-6">
      <div className="flex items-center gap-2 sm:gap-3">
        <span className="hidden text-sm text-neutral-500 dark:text-white/40 sm:inline">
          {levelLabel} {level}
        </span>
        <div className="h-1.5 w-16 overflow-hidden rounded-full bg-black/10 dark:bg-white/10 sm:w-40">
          <div
            className="h-full rounded-full bg-neutral-900 dark:bg-white"
            style={{ width: `${progress}%` }}
          />
        </div>
        <span className="inline-flex items-center gap-1 text-xs text-neutral-500 dark:text-white/40">
          <Zap className="h-3.5 w-3.5" /> {xp} XP
        </span>
      </div>

      <span className="inline-flex items-center gap-1.5 rounded-full border border-black/10 px-2.5 py-1.5 text-xs text-neutral-600 dark:border-white/10 dark:text-white/60 sm:px-3">
        <Flame className="h-3.5 w-3.5 text-[var(--color-up)]" strokeWidth={2} />
        <span className="hidden sm:inline">{streakText}</span>
        <span className="sm:hidden">{streakCount}</span>
      </span>
    </header>
  );
}
