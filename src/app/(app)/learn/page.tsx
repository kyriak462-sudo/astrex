import { cookies } from "next/headers";
import { auth } from "@/lib/auth";
import { db } from "@/lib/db";
import { LessonPath, type PathLesson } from "@/components/learn/lesson-path";
import { pickLocalized } from "@/lib/lesson-content";
import { DEFAULT_LOCALE, isLocale, LOCALE_COOKIE } from "@/i18n/locales";
import { getDictionary } from "@/i18n/get-dictionary";

export default async function LearnPage() {
  const session = await auth();

  const store = await cookies();
  const localeCookie = store.get(LOCALE_COOKIE)?.value ?? "";
  const locale = isLocale(localeCookie) ? localeCookie : DEFAULT_LOCALE;
  const dict = await getDictionary(locale);

  const course = await db.course.findFirst({
    where: { published: true },
    orderBy: { order: "asc" },
    include: {
      modules: {
        orderBy: { order: "asc" },
        include: {
          lessons: {
            where: { published: true },
            orderBy: { order: "asc" },
          },
        },
      },
    },
  });

  const completedLessonIds = new Set<string>();
  if (session?.user?.id) {
    const progress = await db.userLessonProgress.findMany({
      where: { userId: session.user.id, status: "COMPLETED" },
      select: { lessonId: true },
    });
    for (const p of progress) completedLessonIds.add(p.lessonId);
  }

  if (!course) {
    return (
      <div className="mx-auto max-w-2xl">
        <p className="text-sm text-neutral-500 dark:text-white/45">{dict.learn.noCourses}</p>
      </div>
    );
  }

  const courseTitle = pickLocalized(course.title as Record<string, string>, locale) ?? "";
  const courseDescription =
    pickLocalized(course.description as Record<string, string>, locale) ?? "";

  return (
    <div className="mx-auto max-w-2xl">
      <div className="mb-10">
        <p className="text-xs uppercase tracking-widest text-neutral-400 dark:text-white/35">
          {dict.learn.course}
        </p>
        <h1 className="mt-1 text-2xl font-semibold text-neutral-900 dark:text-white">
          {courseTitle}
        </h1>
        <p className="mt-2 text-sm text-neutral-500 dark:text-white/45">{courseDescription}</p>
      </div>

      {course.modules.map((mod, moduleIndex) => {
        const lessons: PathLesson[] = mod.lessons.map((lesson) => {
          const completed = completedLessonIds.has(lesson.id);
          const unlocked =
            !lesson.requiredLessonId || completedLessonIds.has(lesson.requiredLessonId);

          return {
            id: lesson.id,
            title: pickLocalized(lesson.title as Record<string, string>, locale) ?? "",
            status: completed ? "completed" : unlocked ? "available" : "locked",
          };
        });

        const modTitle = pickLocalized(mod.title as Record<string, string>, locale) ?? "";

        return (
          <div key={mod.id} className="mb-14">
            <p className="text-xs uppercase tracking-widest text-neutral-400 dark:text-white/35">
              {dict.learn.module} {moduleIndex + 1}
            </p>
            <h2 className="mt-1 text-lg font-medium text-neutral-900 dark:text-white">
              {modTitle}
            </h2>
            <div className="mt-6">
              <LessonPath lessons={lessons} />
            </div>
          </div>
        );
      })}
    </div>
  );
}
