"use server";

import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";
import { auth } from "@/lib/auth";
import { db } from "@/lib/db";
import { levelForXp } from "@/lib/gamification";

export type QuestionResult = { questionId: string; firstTryCorrect: boolean };

/** Questions missed on the first attempt earn half XP (rounded up, minimum 1) as a soft penalty. */
export async function completeLesson(lessonId: string, questionResults: QuestionResult[] = []) {
  const session = await auth();
  if (!session?.user?.id) redirect("/sign-in");

  const userId = session.user.id;

  const lesson = await db.lesson.findUnique({
    where: { id: lessonId },
    include: { questions: true },
  });
  if (!lesson) redirect("/learn");

  const existing = await db.userLessonProgress.findUnique({
    where: { userId_lessonId: { userId, lessonId } },
  });

  if (existing?.status !== "COMPLETED") {
    const resultByQuestion = new Map(questionResults.map((r) => [r.questionId, r.firstTryCorrect]));
    const xpEarned =
      lesson.xpReward +
      lesson.questions.reduce((sum, q) => {
        const firstTryCorrect = resultByQuestion.get(q.id) ?? true;
        return sum + (firstTryCorrect ? q.xpReward : Math.max(1, Math.ceil(q.xpReward / 2)));
      }, 0);

    await db.userLessonProgress.upsert({
      where: { userId_lessonId: { userId, lessonId } },
      update: { status: "COMPLETED", xpEarned, completedAt: new Date() },
      create: { userId, lessonId, status: "COMPLETED", xpEarned, completedAt: new Date() },
    });

    const user = await db.user.findUnique({ where: { id: userId } });
    const newXp = (user?.xp ?? 0) + xpEarned;

    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const lastActive = user?.lastActiveDate ? new Date(user.lastActiveDate) : null;
    if (lastActive) lastActive.setHours(0, 0, 0, 0);

    let streakCount = user?.streakCount ?? 0;
    if (!lastActive || lastActive.getTime() !== today.getTime()) {
      const oneDay = 24 * 60 * 60 * 1000;
      const isConsecutive = !!lastActive && today.getTime() - lastActive.getTime() === oneDay;
      streakCount = isConsecutive ? streakCount + 1 : 1;
    }

    await db.user.update({
      where: { id: userId },
      data: { xp: newXp, level: levelForXp(newXp), streakCount, lastActiveDate: today },
    });
  }

  revalidatePath("/learn", "layout");
  revalidatePath("/profile");
  redirect("/learn");
}
