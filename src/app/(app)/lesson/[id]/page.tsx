import Link from "next/link";
import { cookies } from "next/headers";
import { notFound, redirect } from "next/navigation";
import { ArrowLeft, Zap } from "lucide-react";
import { auth } from "@/lib/auth";
import { db } from "@/lib/db";
import { parseLessonContent, pickLocalized } from "@/lib/lesson-content";
import { LessonContentBlocks } from "@/components/learn/lesson-content-blocks";
import { LessonQuiz } from "@/components/learn/lesson-quiz";
import { Button } from "@/components/ui/button";
import { DEFAULT_LOCALE, isLocale, LOCALE_COOKIE } from "@/i18n/locales";
import { getDictionary } from "@/i18n/get-dictionary";
import { completeLesson } from "./actions";

export default async function LessonPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const session = await auth();
  if (!session?.user?.id) redirect("/sign-in");

  const store = await cookies();
  const localeCookie = store.get(LOCALE_COOKIE)?.value ?? "";
  const locale = isLocale(localeCookie) ? localeCookie : DEFAULT_LOCALE;
  const dict = await getDictionary(locale);

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
  const blocks = parseLessonContent(lesson.content, locale);
  const totalXp =
    lesson.xpReward + lesson.questions.reduce((sum, q) => sum + q.xpReward, 0);

  const lessonTitle = pickLocalized(lesson.title as Record<string, string>, locale) ?? "";
  const lessonSummary = pickLocalized(lesson.summary as Record<string, string> | null, locale);
  const moduleTitle = pickLocalized(lesson.module.title as Record<string, string>, locale) ?? "";

  return (
    <div className="mx-auto max-w-2xl">
      <Link
        href="/learn"
        className="inline-flex items-center gap-1.5 text-sm text-neutral-500 hover:text-neutral-900 dark:text-white/40 dark:hover:text-white/70"
      >
        <ArrowLeft className="h-4 w-4" /> {dict.lesson.backToPath}
      </Link>

      <p className="mt-6 text-xs uppercase tracking-widest text-neutral-400 dark:text-white/35">
        {moduleTitle}
      </p>
      <h1 className="mt-1 text-2xl font-semibold text-neutral-900 dark:text-white">
        {lessonTitle}
      </h1>
      {lessonSummary && (
        <p className="mt-2 text-sm text-neutral-500 dark:text-white/50">{lessonSummary}</p>
      )}

      <div className="mt-8">
        <LessonContentBlocks blocks={blocks} locale={locale} />
      </div>

      {lesson.questions.length > 0 ? (
        <div className="mt-10">
          <p className="mb-4 text-xs uppercase tracking-widest text-neutral-400 dark:text-white/35">
            {dict.lesson.checkYourself}
          </p>
          <LessonQuiz
            lessonId={lesson.id}
            isCompleted={isCompleted}
            totalXp={totalXp}
            completeAction={completeLesson}
            labels={{
              completeButton: dict.lesson.completeButton,
              alreadyCompleted: dict.lesson.alreadyCompleted,
              retryHint: dict.lesson.retryHint,
            }}
            questions={lesson.questions.map((q) => ({
              id: q.id,
              prompt: pickLocalized(q.prompt as Record<string, string>, locale) ?? "",
              options: pickLocalized(q.options as Record<string, string[]>, locale) ?? [],
              correctAnswer:
                pickLocalized(q.correctAnswer as Record<string, string>, locale) ?? "",
            }))}
          />
        </div>
      ) : (
        <div className="mt-10 border-t border-black/[0.06] pt-6 dark:border-white/[0.06]">
          {isCompleted ? (
            <p className="text-sm text-[var(--color-up)]">{dict.lesson.alreadyCompleted} ✓</p>
          ) : (
            <form action={completeLesson.bind(null, lesson.id, [])}>
              <Button type="submit" size="lg">
                <Zap className="h-4 w-4" /> {dict.lesson.completeButton} (+{totalXp} XP)
              </Button>
            </form>
          )}
        </div>
      )}
    </div>
  );
}
