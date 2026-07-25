import { redirect } from "next/navigation";
import { auth } from "@/lib/auth";
import { db } from "@/lib/db";
import { Sidebar } from "@/components/app/sidebar";
import { Topbar } from "@/components/app/topbar";

const XP_PER_LEVEL = 500;

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

  return (
    <div className="flex flex-1">
      <Sidebar />
      <div className="flex flex-1 flex-col">
        <Topbar
          xp={xp}
          level={level}
          streakCount={streakCount}
          xpToNextLevel={xpToNextLevel}
        />
        <main className="flex-1 px-6 py-8">{children}</main>
      </div>
    </div>
  );
}
