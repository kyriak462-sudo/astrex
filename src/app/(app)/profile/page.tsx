import { cookies } from "next/headers";
import Link from "next/link";
import { Settings } from "lucide-react";
import { auth } from "@/lib/auth";
import { db } from "@/lib/db";
import { DEFAULT_LOCALE, isLocale, LOCALE_COOKIE } from "@/i18n/locales";
import { getDictionary } from "@/i18n/get-dictionary";
import { SignOutButton } from "@/components/app/sign-out-button";
import { PnlChart } from "@/components/app/pnl-chart";
import { Avatar } from "@/components/app/avatar";

const CALENDAR_DAYS = 14 * 7;

export default async function ProfilePage() {
  const session = await auth();
  const store = await cookies();
  const localeCookie = store.get(LOCALE_COOKIE)?.value ?? "";
  const locale = isLocale(localeCookie) ? localeCookie : DEFAULT_LOCALE;
  const dict = await getDictionary(locale);
  const d = dict.profile;
  const user = session?.user?.id
    ? await db.user.findUnique({
        where: { id: session.user.id },
        select: {
          name: true,
          email: true,
          xp: true,
          level: true,
          streakCount: true,
          avatarId: true,
          image: true,
        },
      })
    : null;

  const portfolio = session?.user?.id
    ? await db.virtualPortfolio.findUnique({ where: { userId: session.user.id } })
    : null;

  const since = new Date(Date.now() - CALENDAR_DAYS * 86_400_000);
  const todayStart = new Date();
  todayStart.setHours(0, 0, 0, 0);

  const [closedTrades, allTimeAgg, todayAgg] = await Promise.all([
    portfolio
      ? db.virtualTrade.findMany({
          where: { portfolioId: portfolio.id, status: "CLOSED", closedAt: { gte: since } },
          select: { pnl: true, closedAt: true },
        })
      : Promise.resolve([]),
    portfolio
      ? db.virtualTrade.aggregate({
          where: { portfolioId: portfolio.id, status: "CLOSED" },
          _sum: { pnl: true },
        })
      : Promise.resolve(null),
    portfolio
      ? db.virtualTrade.aggregate({
          where: { portfolioId: portfolio.id, status: "CLOSED", closedAt: { gte: todayStart } },
          _sum: { pnl: true },
        })
      : Promise.resolve(null),
  ]);

  const allTimePnl = allTimeAgg?._sum.pnl ?? 0;
  const todayPnl = todayAgg?._sum.pnl ?? 0;

  const dailyMap = new Map<string, { pnl: number; count: number }>();
  for (const t of closedTrades) {
    if (!t.closedAt || t.pnl == null || !Number.isFinite(t.pnl)) continue;
    const key = t.closedAt.toISOString().slice(0, 10);
    const entry = dailyMap.get(key) ?? { pnl: 0, count: 0 };
    entry.pnl += t.pnl;
    entry.count += 1;
    dailyMap.set(key, entry);
  }
  const days = Array.from(dailyMap.entries()).map(([date, v]) => ({ date, ...v }));

  return (
    <div className="mx-auto max-w-2xl">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold text-neutral-900 dark:text-white">{d.title}</h1>
        <Link
          href="/settings"
          className="inline-flex items-center gap-2 rounded-full border border-black/10 px-3.5 py-2 text-sm text-neutral-600 transition-colors hover:border-black/25 hover:text-neutral-900 dark:border-white/10 dark:text-white/60 dark:hover:border-white/25 dark:hover:text-white"
        >
          <Settings className="h-4 w-4" strokeWidth={1.75} />
          {d.settingsButton}
        </Link>
      </div>

      <div className="mt-6 rounded-2xl border border-black/10 bg-black/[0.02] p-6 dark:border-white/10 dark:bg-white/[0.02]">
        <div className="flex items-center gap-4">
          <Avatar
            avatarId={user?.avatarId}
            image={user?.image}
            name={user?.name ?? session?.user?.name}
            size={56}
          />
          <div>
            <p className="text-lg font-medium text-neutral-900 dark:text-white">
              {user?.name ?? session?.user?.name}
            </p>
            <p className="mt-1 text-sm text-neutral-500 dark:text-white/40">
              {user?.email ?? session?.user?.email}
            </p>
          </div>
        </div>

        <div className="mt-6 grid grid-cols-3 gap-4 border-t border-black/[0.06] pt-6 dark:border-white/[0.06]">
          <div>
            <p className="text-xl font-semibold text-neutral-900 dark:text-white">
              {user?.level ?? 1}
            </p>
            <p className="mt-1 text-xs text-neutral-500 dark:text-white/40">{d.level}</p>
          </div>
          <div>
            <p className="text-xl font-semibold text-neutral-900 dark:text-white">
              {user?.xp ?? 0}
            </p>
            <p className="mt-1 text-xs text-neutral-500 dark:text-white/40">{d.xp}</p>
          </div>
          <div>
            <p className="text-xl font-semibold text-[var(--color-up)]">
              {user?.streakCount ?? 0}
            </p>
            <p className="mt-1 text-xs text-neutral-500 dark:text-white/40">{d.streakDays}</p>
          </div>
        </div>
      </div>

      <div className="mt-6 rounded-2xl border border-black/10 bg-black/[0.02] p-6 dark:border-white/10 dark:bg-white/[0.02]">
        <p className="text-sm font-medium text-neutral-900 dark:text-white">{d.pnlTitle}</p>
        <p className="mt-1 text-xs text-neutral-400 dark:text-white/40">
          {d.pnlSubtitle.replace("{weeks}", String(Math.round(CALENDAR_DAYS / 7)))}
        </p>

        <div className="mt-4 grid grid-cols-2 gap-3">
          <div className="rounded-xl border border-black/[0.06] p-3 dark:border-white/[0.06]">
            <p className="text-xs text-neutral-400 dark:text-white/35">{d.allTime}</p>
            <p
              className={`mt-1 font-mono text-lg ${
                allTimePnl >= 0 ? "text-[var(--color-up)]" : "text-[var(--color-down)]"
              }`}
            >
              {allTimePnl >= 0 ? "+" : ""}
              {allTimePnl.toFixed(2)}$
            </p>
          </div>
          <div className="rounded-xl border border-black/[0.06] p-3 dark:border-white/[0.06]">
            <p className="text-xs text-neutral-400 dark:text-white/35">{d.today}</p>
            <p
              className={`mt-1 font-mono text-lg ${
                todayPnl >= 0 ? "text-[var(--color-up)]" : "text-[var(--color-down)]"
              }`}
            >
              {todayPnl >= 0 ? "+" : ""}
              {todayPnl.toFixed(2)}$
            </p>
          </div>
        </div>

        <div className="mt-4">
          <PnlChart days={days} rangeDays={CALENDAR_DAYS} />
        </div>
      </div>

      <div className="mt-6">
        <SignOutButton label={dict.dashboard.signOut} />
      </div>
    </div>
  );
}
