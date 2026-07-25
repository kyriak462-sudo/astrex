import { auth } from "@/lib/auth";
import { db } from "@/lib/db";
import { LessonPath, type PathLesson } from "@/components/learn/lesson-path";

export default async function LearnPage() {
  const session = await auth();

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
        <p className="text-sm text-white/45">Курсы пока не добавлены.</p>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-2xl">
      <div className="mb-10">
        <p className="text-xs uppercase tracking-widest text-white/35">Курс</p>
        <h1 className="mt-1 text-2xl font-semibold text-white">{course.title}</h1>
        <p className="mt-2 text-sm text-white/45">{course.description}</p>
      </div>

      {course.modules.map((mod, moduleIndex) => {
        const lessons: PathLesson[] = mod.lessons.map((lesson) => {
          const completed = completedLessonIds.has(lesson.id);
          const unlocked =
            !lesson.requiredLessonId || completedLessonIds.has(lesson.requiredLessonId);

          return {
            id: lesson.id,
            title: lesson.title,
            status: completed ? "completed" : unlocked ? "available" : "locked",
          };
        });

        return (
          <div key={mod.id} className="mb-14">
            <p className="text-xs uppercase tracking-widest text-white/35">
              Модуль {moduleIndex + 1}
            </p>
            <h2 className="mt-1 text-lg font-medium text-white">{mod.title}</h2>
            <div className="mt-6">
              <LessonPath lessons={lessons} />
            </div>
          </div>
        );
      })}
    </div>
  );
}
