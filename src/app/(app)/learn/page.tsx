import { LessonPath, type PathLesson } from "@/components/learn/lesson-path";

const DEMO_LESSONS: PathLesson[] = [
  { id: "1", title: "Что такое трейдинг", status: "completed" },
  { id: "2", title: "Виды рынков", status: "completed" },
  { id: "3", title: "Как читать график", status: "completed" },
  { id: "4", title: "Свечной анализ", status: "available" },
  { id: "5", title: "Поддержка и сопротивление", status: "locked" },
  { id: "6", title: "Тренд и его структура", status: "locked" },
  { id: "7", title: "Риск-менеджмент", status: "locked" },
  { id: "8", title: "Первая виртуальная сделка", status: "locked" },
];

export default function LearnPage() {
  return (
    <div className="mx-auto max-w-2xl">
      <div className="mb-8">
        <p className="text-xs uppercase tracking-widest text-white/35">Модуль 1</p>
        <h1 className="mt-1 text-2xl font-semibold text-white">Основы трейдинга</h1>
        <p className="mt-2 text-sm text-white/45">
          Изучите базовые понятия рынка и научитесь читать графики, прежде чем
          переходить к стратегиям.
        </p>
      </div>

      <LessonPath lessons={DEMO_LESSONS} />
    </div>
  );
}
