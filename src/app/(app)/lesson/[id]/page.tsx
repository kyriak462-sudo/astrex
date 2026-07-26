import Link from "next/link";
import { notFound, redirect } from "next/navigation";
import { ArrowLeft, Zap } from "lucide-react";
import { auth } from "@/lib/auth";
import { db } from "@/lib/db";
import { parseLessonContent } from "@/lib/lesson-content";
import { LessonContentBlocks } from "@/components/learn/lesson-content-blocks";
import { LessonQuiz } from "@/components/learn/lesson-quiz";
import { Button } from "@/components/ui/button";
import { completeLesson } from "./actions";

export default async function LessonPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const session = await auth();
  if (!session?.user?.id) redirect("/sign-in");

  const lesson = await db.lesson.findUnique({
    where: { id },
    include: {
      questions: { orderBy: { order: "asc" } },
      module: true,
    },
  });
  if (!lesson) notFound();

  const progress = await db.userLessonProgress.findMany({
    where: { userId: session.user.id, status: "COMPLETED" },
    select: { lessonId: true },
  });
  const completedIds = new Set(progress.map((p) => p.lessonId));

  const unlocked =
    !lesson.requiredLessonId || completedIds.has(lesson.requiredLessonId);
  if (!unlocked) redirect("/learn");

  const isCompleted = completedIds.has(lesson.id);
  const blocks = parseLessonContent(lesson.content);
  const totalXp =
    lesson.xpReward + lesson.questions.reduce((sum, q) => sum + q.xpReward, 0);

  return (
    <div className="mx-auto max-w-2xl">
      <Link
        href="/learn"
        className="inline-flex items-center gap-1.5 text-sm text-white/40 hover:text-white/70"
      >
        <ArrowLeft className="h-4 w-4" /> Назад к пути
      </Link>

      <p className="mt-6 text-xs uppercase tracking-widest text-white/35">
        {lesson.module.title}
      </p>
      <h1 className="mt-1 text-2xl font-semibold text-white">{lesson.title}</h1>
      {lesson.summary && (
        <p className="mt-2 text-sm text-white/50">{lesson.summary}</p>
      )}

      <div className="mt-8">
        <LessonContentBlocks blocks={blocks} />
      </div>

      {lesson.questions.length > 0 && (
        <div className="mt-10">
          <p className="mb-4 text-xs uppercase tracking-widest text-white/35">
            Проверьте себя
          </p>
          <LessonQuiz
            questions={lesson.questions.map((q) => ({
              id: q.id,
              prompt: q.prompt,
              options: q.options as string[],
              correctAnswer: q.correctAnswer as string,
            }))}
          />
        </div>
      )}

      <div className="mt-10 border-t border-white/[0.06] pt-6">
        {isCompleted ? (
          <p className="text-sm text-[var(--color-up)]">Урок уже пройден ✓</p>
        ) : (
          <form action={completeLesson.bind(null, lesson.id)}>
            <Button type="submit" size="lg">
              <Zap className="h-4 w-4" /> Завершить урок (+{totalXp} XP)
            </Button>
          </form>
        )}
      </div>
    </div>
  );
}
