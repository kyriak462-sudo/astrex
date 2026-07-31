import { cookies } from "next/headers";
import { auth } from "@/lib/auth";
import { db } from "@/lib/db";
import { DEFAULT_LOCALE, isLocale, LOCALE_COOKIE } from "@/i18n/locales";
import { getDictionary } from "@/i18n/get-dictionary";
import { Avatar } from "@/components/app/avatar";

function displayName(name: string | null, email: string) {
  if (name && name.trim()) return name;
  return email.split("@")[0];
}

export default async function LeaderboardPage() {
  const session = await auth();

  const store = await cookies();
  const localeCookie = store.get(LOCALE_COOKIE)?.value ?? "";
  const locale = isLocale(localeCookie) ? localeCookie : DEFAULT_LOCALE;
  const dict = await getDictionary(locale);

  const now = new Date();
  const monthStart = new Date(Date.UTC(now.getUTCFullYear(), now.getUTCMonth(), 1));

  const [portfolios, monthlyPnlByPortfolio] = await Promise.all([
    db.virtualPortfolio.findMany({
      include: {
        user: { select: { id: true, name: true, email: true, avatarId: true, image: true } },
      },
    }),
    db.virtualTrade.groupBy({
      by: ["portfolioId"],
      where: { status: "CLOSED", closedAt: { gte: monthStart } },
      _sum: { pnl: true },
    }),
  ]);

  const monthlyPnlMap = new Map(
    monthlyPnlByPortfolio.map((g) => [g.portfolioId, g._sum.pnl ?? 0])
  );

  const ranked = portfolios
    .map((p) => ({
      userId: p.user.id,
      name: displayName(p.user.name, p.user.email),
      avatarId: p.user.avatarId,
      image: p.user.image,
      pnl: monthlyPnlMap.get(p.id) ?? 0,
    }))
    .filter((row) => Number.isFinite(row.pnl))
    .sort((a, b) => b.pnl - a.pnl)
    .slice(0, 50);

  return (
    <div className="mx-auto max-w-2xl">
      <h1 className="text-2xl font-semibold text-neutral-900 dark:text-white">
        {dict.leaderboard.title}
      </h1>
      <p className="mt-2 text-sm text-neutral-500 dark:text-white/45">
        {dict.leaderboard.subtitle}
      </p>

      <div className="mt-8 overflow-hidden rounded-2xl border border-black/10 dark:border-white/10">
        {ranked.length === 0 ? (
          <p className="p-5 text-sm text-neutral-400 dark:text-white/35">
            {dict.leaderboard.noData}
          </p>
        ) : (
          <div className="divide-y divide-black/[0.06] dark:divide-white/[0.06]">
            {ranked.map((row, i) => {
              const pnlUp = row.pnl >= 0;
              const isMe = row.userId === session?.user?.id;
              return (
                <div
                  key={row.userId}
                  className={`flex items-center justify-between px-5 py-3.5 ${
                    isMe ? "bg-black/[0.03] dark:bg-white/[0.04]" : ""
                  }`}
                >
                  <div className="flex items-center gap-3.5">
                    <span
                      className={`w-6 text-sm font-mono ${
                        i < 3
                          ? "text-[var(--color-up)]"
                          : "text-neutral-400 dark:text-white/35"
                      }`}
                    >
                      {i + 1}
                    </span>
                    <Avatar avatarId={row.avatarId} image={row.image} name={row.name} size={32} />
                    <span className="text-sm text-neutral-900 dark:text-white">
                      {row.name}
                      {isMe && (
                        <span className="ml-1.5 text-xs text-neutral-400 dark:text-white/35">
                          ({dict.leaderboard.you})
                        </span>
                      )}
                    </span>
                  </div>
                  <p
                    className={`font-mono text-sm ${
                      pnlUp ? "text-[var(--color-up)]" : "text-[var(--color-down)]"
                    }`}
                  >
                    {pnlUp ? "+" : ""}
                    {row.pnl.toLocaleString(locale, { maximumFractionDigits: 2 })}$
                  </p>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}
