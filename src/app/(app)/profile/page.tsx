import { auth } from "@/lib/auth";
import { db } from "@/lib/db";
import { SignOutButton } from "@/components/app/sign-out-button";
import { PnlCalendar } from "@/components/app/pnl-calendar";

const CALENDAR_DAYS = 14 * 7;

export default async function ProfilePage() {
  const session = await auth();
  const user = session?.user?.id
    ? await db.user.findUnique({
        where: { id: session.user.id },
        select: { name: true, email: true, xp: true, level: true, streakCount: true },
      })
    : null;

  const portfolio = session?.user?.id
    ? await db.virtualPortfolio.findUnique({ where: { userId: session.user.id } })
    : null;

  const since = new Date(Date.now() - CALENDAR_DAYS * 86_400_000);
  const closedTrades = portfolio
    ? await db.virtualTrade.findMany({
        where: { portfolioId: portfolio.id, status: "CLOSED", closedAt: { gte: since } },
        select: { pnl: true, closedAt: true },
      })
    : [];

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
      <h1 className="text-2xl font-semibold text-neutral-900 dark:text-white">Профиль</h1>

      <div className="mt-6 rounded-2xl border border-black/10 bg-black/[0.02] p-6 dark:border-white/10 dark:bg-white/[0.02]">
        <p className="text-lg font-medium text-neutral-900 dark:text-white">
          {user?.name ?? session?.user?.name}
        </p>
        <p className="mt-1 text-sm text-neutral-500 dark:text-white/40">
          {user?.email ?? session?.user?.email}
        </p>

        <div className="mt-6 grid grid-cols-3 gap-4 border-t border-black/[0.06] pt-6 dark:border-white/[0.06]">
          <div>
            <p className="text-xl font-semibold text-neutral-900 dark:text-white">
              {user?.level ?? 1}
            </p>
            <p className="mt-1 text-xs text-neutral-500 dark:text-white/40">Уровень</p>
          </div>
          <div>
            <p className="text-xl font-semibold text-neutral-900 dark:text-white">
              {user?.xp ?? 0}
            </p>
            <p className="mt-1 text-xs text-neutral-500 dark:text-white/40">XP</p>
          </div>
          <div>
            <p className="text-xl font-semibold text-[var(--color-up)]">
              {user?.streakCount ?? 0}
            </p>
            <p className="mt-1 text-xs text-neutral-500 dark:text-white/40">Дней подряд</p>
          </div>
        </div>
      </div>

      <div className="mt-6 rounded-2xl border border-black/10 bg-black/[0.02] p-6 dark:border-white/10 dark:bg-white/[0.02]">
        <p className="text-sm font-medium text-neutral-900 dark:text-white">
          P&amp;L по дням
        </p>
        <p className="mt-1 text-xs text-neutral-400 dark:text-white/40">
          Результат закрытых сделок за последние {Math.round(CALENDAR_DAYS / 7)} недель. Нажмите
          на день, чтобы увидеть детали.
        </p>
        <div className="mt-4">
          <PnlCalendar days={days} />
        </div>
      </div>

      <div className="mt-6">
        <SignOutButton />
      </div>
    </div>
  );
}
