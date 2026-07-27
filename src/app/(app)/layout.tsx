import { redirect } from "next/navigation";
import { cookies } from "next/headers";
import { auth } from "@/lib/auth";
import { db } from "@/lib/db";
import { Sidebar } from "@/components/app/sidebar";
import { Topbar } from "@/components/app/topbar";
import { MobileTabBar } from "@/components/app/mobile-tabbar";
import { XP_PER_LEVEL } from "@/lib/gamification";
import { DEFAULT_LOCALE, isLocale, LOCALE_COOKIE } from "@/i18n/locales";
import { getDictionary } from "@/i18n/get-dictionary";

export default async function AppLayout({ children }: { children: React.ReactNode }) {
  const session = await auth();
  if (!session?.user?.id) redirect("/sign-in");

  const user = await db.user.findUnique({
    where: { id: session.user.id },
    select: { xp: true, level: true, streakCount: true },
  });

  const xp = user?.xp ?? 0;
  const level = user?.level ?? 1;
  const streakCount = user?.streakCount ?? 0;
  const xpToNextLevel = level * XP_PER_LEVEL;

  const store = await cookies();
  const localeCookie = store.get(LOCALE_COOKIE)?.value ?? "";
  const locale = isLocale(localeCookie) ? localeCookie : DEFAULT_LOCALE;
  const dict = await getDictionary(locale);

  return (
    <div className="flex flex-1">
      <Sidebar nav={dict.dashboard.nav} settingsLabel={dict.dashboard.nav.settings} />
      <div className="flex flex-1 flex-col">
        <Topbar
          xp={xp}
          level={level}
          streakCount={streakCount}
          xpToNextLevel={xpToNextLevel}
          locale={locale}
          levelLabel={dict.dashboard.level}
          streakDaysLabel={dict.dashboard.streakDays}
        />
        <main className="relative flex-1 px-4 py-6 pb-24 sm:px-6 sm:py-8 md:pb-8">
          {children}
        </main>
      </div>
      <MobileTabBar nav={dict.dashboard.nav} settingsLabel={dict.dashboard.nav.settings} />
    </div>
  );
}
