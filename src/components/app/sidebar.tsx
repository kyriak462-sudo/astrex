"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { GraduationCap, LineChart, CandlestickChart, User } from "lucide-react";
import { cn } from "@/lib/utils";
import { Logo } from "@/components/brand/logo";

const items = [
  { href: "/learn", label: "Обучение", icon: GraduationCap },
  { href: "/market", label: "Виртуальный рынок", icon: LineChart },
  { href: "/charts", label: "Анализ графиков", icon: CandlestickChart },
  { href: "/profile", label: "Профиль", icon: User },
];

export function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="hidden w-60 shrink-0 flex-col border-r border-white/[0.06] px-4 py-6 md:flex">
      <Link href="/learn" className="px-2">
        <Logo />
      </Link>

      <nav className="mt-10 flex flex-col gap-1">
        {items.map((item) => {
          const active = pathname?.startsWith(item.href);
          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm transition-colors",
                active
                  ? "bg-white/[0.06] text-white"
                  : "text-white/50 hover:bg-white/[0.03] hover:text-white/80"
              )}
            >
              <item.icon className="h-4 w-4" strokeWidth={1.75} />
              {item.label}
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}
