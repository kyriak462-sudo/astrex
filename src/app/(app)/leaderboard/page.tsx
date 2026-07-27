import { auth } from "@/lib/auth";
import { db } from "@/lib/db";

const STARTING_BALANCE = 10000;

function displayName(name: string | null, email: string) {
  if (name && name.trim()) return name;
  return email.split("@")[0];
}

export default async function LeaderboardPage() {
  const session = await auth();

  const portfolios = await db.virtualPortfolio.findMany({
    orderBy: { balance: "desc" },
    take: 50,
    include: { user: { select: { id: true, name: true, email: true } } },
  });

  const ranked = portfolios
    .filter((p) => Number.isFinite(p.balance))
    .map((p) => ({
      userId: p.user.id,
      name: displayName(p.user.name, p.user.email),
      balance: p.balance,
      pnl: p.balance - STARTING_BALANCE,
    }));

  return (
    <div className="mx-auto max-w-2xl">
      <h1 className="text-2xl font-semibold text-neutral-900 dark:text-white">
        Доска лидеров
      </h1>
      <p className="mt-2 text-sm text-neutral-500 dark:text-white/45">
        Лучшие трейдеры платформы по итоговому P&amp;L на виртуальном балансе.
      </p>

      <div className="mt-8 overflow-hidden rounded-2xl border border-black/10 dark:border-white/10">
        {ranked.length === 0 ? (
          <p className="p-5 text-sm text-neutral-400 dark:text-white/35">Пока нет данных.</p>
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
                    <span className="text-sm text-neutral-900 dark:text-white">
                      {row.name}
                      {isMe && (
                        <span className="ml-1.5 text-xs text-neutral-400 dark:text-white/35">
                          (вы)
                        </span>
                      )}
                    </span>
                  </div>
                  <div className="text-right">
                    <p
                      className={`text-sm font-mono ${
                        pnlUp ? "text-[var(--color-up)]" : "text-[var(--color-down)]"
                      }`}
                    >
                      {pnlUp ? "+" : ""}
                      {row.pnl.toLocaleString("ru-RU", { maximumFractionDigits: 2 })}$
                    </p>
                    <p className="text-xs text-neutral-400 dark:text-white/35">
                      баланс ${row.balance.toLocaleString("ru-RU", { maximumFractionDigits: 0 })}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}
