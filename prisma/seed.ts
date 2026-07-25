import "dotenv/config";
import { PrismaClient } from "@prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";

const adapter = new PrismaPg({ connectionString: process.env.DATABASE_URL });
const db = new PrismaClient({ adapter });

type LessonSeed = {
  slug: string;
  title: string;
  summary: string;
  xpReward: number;
  questions?: {
    prompt: string;
    options: string[];
    correctAnswer: string;
  }[];
};

type ModuleSeed = {
  title: string;
  lessons: LessonSeed[];
};

const CURRICULUM: ModuleSeed[] = [
  {
    title: "Основы трейдинга",
    lessons: [
      {
        slug: "chto-takoe-treyding",
        title: "Что такое трейдинг",
        summary: "Разница между инвестированием и трейдингом, основные участники рынка.",
        xpReward: 10,
        questions: [
          {
            prompt: "Чем трейдинг принципиально отличается от долгосрочного инвестирования?",
            options: [
              "Трейдинг предполагает частые сделки на коротких горизонтах",
              "Трейдинг доступен только банкам",
              "Трейдинг не связан с риском",
            ],
            correctAnswer: "Трейдинг предполагает частые сделки на коротких горизонтах",
          },
        ],
      },
      {
        slug: "vidy-rynkov",
        title: "Виды рынков",
        summary: "Крипто, форекс, акции и товарные рынки — в чём разница.",
        xpReward: 10,
      },
      {
        slug: "kak-chitat-grafik",
        title: "Как читать график",
        summary: "Оси, таймфреймы, цена открытия/закрытия.",
        xpReward: 10,
      },
      {
        slug: "svechnoy-analiz",
        title: "Свечной анализ",
        summary: "Анатомия японской свечи и базовые свечные паттерны.",
        xpReward: 15,
        questions: [
          {
            prompt: "Что показывает тело свечи?",
            options: [
              "Диапазон между ценой открытия и закрытия",
              "Максимальный объём торгов",
              "Количество участников рынка",
            ],
            correctAnswer: "Диапазон между ценой открытия и закрытия",
          },
        ],
      },
      {
        slug: "podderzhka-i-soprotivlenie",
        title: "Поддержка и сопротивление",
        summary: "Как находить ключевые уровни на графике.",
        xpReward: 15,
      },
      {
        slug: "trend-i-ego-struktura",
        title: "Тренд и его структура",
        summary: "Восходящий, нисходящий и боковой тренд, структура хай/лоу.",
        xpReward: 15,
      },
      {
        slug: "obyom-i-likvidnost",
        title: "Объём и ликвидность",
        summary: "Зачем следить за объёмом и что такое ликвидность рынка.",
        xpReward: 15,
      },
      {
        slug: "risk-menedzhment-osnovy",
        title: "Риск-менеджмент: основы",
        summary: "Размер позиции, стоп-лосс, соотношение риск/прибыль.",
        xpReward: 20,
      },
    ],
  },
  {
    title: "Технический анализ",
    lessons: [
      {
        slug: "skolzyashchie-srednie",
        title: "Индикаторы: скользящие средние",
        summary: "SMA и EMA — как использовать для определения тренда.",
        xpReward: 15,
      },
      {
        slug: "rsi-i-oscillyatory",
        title: "RSI и осцилляторы",
        summary: "Перекупленность, перепроданность, дивергенции.",
        xpReward: 15,
      },
      {
        slug: "urovni-fibonachchi",
        title: "Уровни Фибоначчи",
        summary: "Коррекции и расширения Фибоначчи в разметке графика.",
        xpReward: 15,
      },
      {
        slug: "patterny-razvorota",
        title: "Паттерны разворота",
        summary: "Голова и плечи, двойная вершина/дно.",
        xpReward: 20,
      },
      {
        slug: "patterny-prodolzheniya",
        title: "Паттерны продолжения",
        summary: "Флаги, треугольники, прямоугольники.",
        xpReward: 20,
      },
      {
        slug: "multitaymfreym-analiz",
        title: "Таймфреймы и мультитаймфрейм-анализ",
        summary: "Как согласовывать сигналы на разных таймфреймах.",
        xpReward: 20,
      },
      {
        slug: "psikhologiya-treydera",
        title: "Психология трейдера",
        summary: "Контроль эмоций, дисциплина, торговый дневник.",
        xpReward: 20,
      },
      {
        slug: "pervaya-virtualnaya-sdelka",
        title: "Первая виртуальная сделка",
        summary: "Применяем всё изученное на виртуальном балансе.",
        xpReward: 25,
      },
    ],
  },
];

async function main() {
  const course = await db.course.upsert({
    where: { slug: "put-treydera" },
    update: {},
    create: {
      slug: "put-treydera",
      title: "Путь трейдера",
      description:
        "Структурированный путь от базовых понятий рынка до практики на виртуальном счёте.",
      level: "BEGINNER",
      order: 0,
      published: true,
    },
  });

  let moduleOrder = 0;
  let previousLessonId: string | null = null;

  for (const moduleSeed of CURRICULUM) {
    const mod = await db.module.upsert({
      where: { id: `${course.id}-${moduleOrder}` },
      update: {},
      create: {
        id: `${course.id}-${moduleOrder}`,
        courseId: course.id,
        title: moduleSeed.title,
        order: moduleOrder,
      },
    });

    let lessonOrder = 0;

    for (const lessonSeed of moduleSeed.lessons) {
      const lesson: Awaited<ReturnType<typeof db.lesson.upsert>> = await db.lesson.upsert({
        where: { moduleId_slug: { moduleId: mod.id, slug: lessonSeed.slug } },
        update: {
          title: lessonSeed.title,
          summary: lessonSeed.summary,
          xpReward: lessonSeed.xpReward,
          requiredLessonId: previousLessonId,
          published: true,
        },
        create: {
          moduleId: mod.id,
          slug: lessonSeed.slug,
          title: lessonSeed.title,
          summary: lessonSeed.summary,
          content: { blocks: [{ type: "paragraph", text: lessonSeed.summary }] },
          order: lessonOrder,
          xpReward: lessonSeed.xpReward,
          requiredLessonId: previousLessonId,
          published: true,
        },
      });

      if (lessonSeed.questions) {
        let questionOrder = 0;
        for (const q of lessonSeed.questions) {
          await db.question.upsert({
            where: { id: `${lesson.id}-q${questionOrder}` },
            update: {},
            create: {
              id: `${lesson.id}-q${questionOrder}`,
              lessonId: lesson.id,
              type: "SINGLE_CHOICE",
              prompt: q.prompt,
              options: q.options,
              correctAnswer: q.correctAnswer,
              order: questionOrder,
              xpReward: 5,
            },
          });
          questionOrder++;
        }
      }

      previousLessonId = lesson.id;
      lessonOrder++;
    }
    moduleOrder++;
  }

  console.log(`Seeded course "${course.title}" with ${CURRICULUM.length} modules.`);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await db.$disconnect();
  });
