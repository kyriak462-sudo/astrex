import { auth } from "@/lib/auth";
import { db } from "@/lib/db";
import { SignOutButton } from "@/components/app/sign-out-button";

export default async function ProfilePage() {
  const session = await auth();
  const user = session?.user?.id
    ? await db.user.findUnique({
        where: { id: session.user.id },
        select: { name: true, email: true, xp: true, level: true, streakCount: true },
      })
    : null;

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

      <div className="mt-6">
        <SignOutButton />
      </div>
    </div>
  );
}
