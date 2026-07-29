"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Logo } from "@/components/brand/logo";
import { navItems } from "@/components/app/nav-items";

export function Sidebar({
  nav,
  settingsLabel,
}: {
  nav?: { learn: string; market: string; charts: string; leaderboard: string; profile: string };
  settingsLabel?: string;
}) {
  const pathname = usePathname();
  const labels: Record<string, string> = {
    "/learn": nav?.learn ?? "Обучение",
    "/market": nav?.market ?? "Рынок",
    "/charts": nav?.charts ?? "Графики",
    "/leaderboard": nav?.leaderboard ?? "Лидеры",
    "/profile": nav?.profile ?? "Профиль",
    "/settings": settingsLabel ?? "Настройки",
  };

  return (
    <aside className="hidden w-60 shrink-0 flex-col border-r border-black/[0.06] px-4 py-6 dark:border-white/[0.06] md:flex">
      <Link href="/learn" className="px-2">
        <Logo className="text-neutral-900 dark:text-white" />
      </Link>

      <nav className="mt-10 flex flex-col gap-1">
        {navItems.map((item) => {
          const active = pathname?.startsWith(item.href);
          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm transition-colors",
                active
                  ? "bg-black/[0.06] text-neutral-900 dark:bg-white/[0.06] dark:text-white"
                  : "text-neutral-500 hover:bg-black/[0.03] hover:text-neutral-900 dark:text-white/50 dark:hover:bg-white/[0.03] dark:hover:text-white/80"
              )}
            >
              <item.icon className="h-4 w-4" strokeWidth={1.75} />
              {labels[item.href] ?? item.label}
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}
