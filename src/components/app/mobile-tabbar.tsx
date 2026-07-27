"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { navItems } from "@/components/app/nav-items";

export function MobileTabBar({
  nav,
  settingsLabel,
}: {
  nav?: { learn: string; market: string; charts: string; profile: string };
  settingsLabel?: string;
}) {
  const pathname = usePathname();
  const labels: Record<string, string> = {
    "/learn": nav?.learn ?? "Обучение",
    "/market": nav?.market ?? "Рынок",
    "/charts": nav?.charts ?? "Графики",
    "/profile": nav?.profile ?? "Профиль",
    "/settings": settingsLabel ?? "Настройки",
  };

  return (
    <nav
      className="fixed inset-x-0 bottom-0 z-20 flex border-t border-white/[0.08] bg-black/80 backdrop-blur-md md:hidden"
      style={{ paddingBottom: "env(safe-area-inset-bottom)" }}
    >
      {navItems.map((item) => {
        const active = pathname?.startsWith(item.href);
        return (
          <Link
            key={item.href}
            href={item.href}
            className={cn(
              "flex flex-1 flex-col items-center gap-1 py-2.5 text-[11px] transition-colors",
              active ? "text-white" : "text-white/40"
            )}
          >
            <item.icon className="h-5 w-5" strokeWidth={1.75} />
            {labels[item.href] ?? item.label}
          </Link>
        );
      })}
    </nav>
  );
}
