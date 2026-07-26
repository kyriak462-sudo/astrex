import "dotenv/config";
import { PrismaClient } from "@prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";

const adapter = new PrismaPg({ connectionString: process.env.DATABASE_URL });
const db = new PrismaClient({ adapter });

type DiagramKey = "fvg" | "imbalance" | "liquidity-sweep" | "trend-structure";

type ContentBlock =
  | { type: "paragraph"; text: string }
  | { type: "list"; items: string[] }
  | { type: "diagram"; diagram: DiagramKey; caption?: string };

type LessonSeed = {
  slug: string;
  title: string;
  summary: string;
  xpReward: number;
  content?: ContentBlock[];
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
  {
    title: "Макроэкономика и крипторынок",
    lessons: [
      {
        slug: "frs-i-protsentnye-stavki",
        title: "ФРС и процентные ставки",
        summary: "Как решения ФРС США по ставке двигают весь рынок, включая крипту.",
        xpReward: 20,
        content: [
          {
            type: "paragraph",
            text: "ФРС (Федеральная резервная система США) определяет ключевую процентную ставку, от которой зависит стоимость денег во всей мировой экономике. Когда ставку повышают, кредиты дорожают, инвесторы уходят из рискованных активов — акций и криптовалют — в облигации и депозиты.",
          },
          {
            type: "paragraph",
            text: "Когда ФРС снижает ставку или намекает на смягчение политики, рискованные активы обычно растут: деньги становятся дешевле, инвесторы снова готовы рисковать ради доходности.",
          },
          {
            type: "list",
            items: [
              "Заседания FOMC проходят 8 раз в год — это ключевые даты для рынка",
              "Рынок реагирует не только на само решение, но и на риторику (\"ястребиная\" или \"голубиная\")",
              "Крипторынок особенно чувствителен к ставке из-за высокой доли спекулятивного капитала",
            ],
          },
        ],
        questions: [
          {
            prompt: "Как рынок обычно реагирует на повышение ставки ФРС?",
            options: [
              "Рискованные активы (включая крипту) чаще всего падают",
              "Крипторынок никак не реагирует на ставку",
              "Биткоин всегда растёт при повышении ставки",
            ],
            correctAnswer: "Рискованные активы (включая крипту) чаще всего падают",
          },
        ],
      },
      {
        slug: "inflyatsiya-i-cpi",
        title: "Инфляция и индекс CPI",
        summary: "Почему данные по инфляции двигают рынок сильнее многих других новостей.",
        xpReward: 20,
        content: [
          {
            type: "paragraph",
            text: "CPI (индекс потребительских цен) — главный индикатор инфляции в США, публикуется ежемесячно. Если инфляция выше ожиданий, рынок закладывает более жёсткую политику ФРС — рискованные активы падают. Если инфляция замедляется, рынок радуется и растёт.",
          },
          {
            type: "list",
            items: [
              "Публикация CPI — один из самых волатильных моментов месяца на крипторынке",
              "Важен не сам показатель, а его отличие от прогноза аналитиков",
              "Помимо CPI, есть PCE — предпочитаемый ФРС индикатор инфляции",
            ],
          },
        ],
      },
      {
        slug: "indeks-dollara-dxy",
        title: "Индекс доллара (DXY)",
        summary: "Обратная корреляция доллара и криптовалют.",
        xpReward: 20,
        content: [
          {
            type: "paragraph",
            text: "DXY измеряет силу доллара США относительно корзины других валют. Исторически DXY и биткоин часто движутся в противофазе: сильный доллар давит на крипту и другие рискованные активы, слабый доллар — поддерживает их рост.",
          },
          {
            type: "paragraph",
            text: "Опытные трейдеры держат график DXY на отдельной панели наравне с BTC — резкий рост индекса доллара часто предупреждает о коррекции на крипторынке ещё до того, как это видно на самом графике биткоина.",
          },
        ],
      },
      {
        slug: "korrelyatsiya-s-fondovym-rynkom",
        title: "Корреляция с фондовым рынком",
        summary: "Связь биткоина с индексом Nasdaq и аппетитом к риску.",
        xpReward: 20,
        questions: [
          {
            prompt: "С каким классом активов биткоин чаще всего коррелирует в последние годы?",
            options: [
              "С высокотехнологичными акциями (Nasdaq)",
              "С государственными облигациями",
              "Не коррелирует ни с чем",
            ],
            correctAnswer: "С высокотехнологичными акциями (Nasdaq)",
          },
        ],
      },
      {
        slug: "ekonomicheskiy-kalendar",
        title: "Экономический календарь и новости",
        summary: "Какие события обязательно нужно отслеживать перед сделкой.",
        xpReward: 20,
      },
    ],
  },
  {
    title: "Smart Money концепции",
    lessons: [
      {
        slug: "imbalans-i-fvg",
        title: "Имбаланс и Fair Value Gap (FVG)",
        summary: "Зоны неэффективности цены и как их находить на графике.",
        xpReward: 25,
        content: [
          {
            type: "paragraph",
            text: "Имбаланс — это зона на графике, где цена прошла слишком быстро в одну сторону, не дав обеим сторонам (покупателям и продавцам) полноценно поторговать. Такие зоны рынок часто \"возвращается закрыть\" позже.",
          },
          {
            type: "paragraph",
            text: "Fair Value Gap (FVG) — частный случай имбаланса из трёх свечей: между хвостом первой и хвостом третьей свечи остаётся видимый разрыв. Это одна из самых популярных зон интереса в Smart Money Concepts.",
          },
          { type: "diagram", diagram: "fvg", caption: "Классический бычий FVG на трёх свечах" },
          { type: "diagram", diagram: "imbalance", caption: "Более широкая зона имбаланса на одной импульсной свече" },
        ],
        questions: [
          {
            prompt: "Что такое Fair Value Gap (FVG)?",
            options: [
              "Разрыв между хвостами 1-й и 3-й свечи из-за резкого импульса",
              "Уровень стоп-лосса",
              "Индикатор объёма",
            ],
            correctAnswer: "Разрыв между хвостами 1-й и 3-й свечи из-за резкого импульса",
          },
        ],
      },
      {
        slug: "likvidnost-na-rynke",
        title: "Ликвидность и её виды",
        summary: "Где на графике скапливаются отложенные ордера крупных игроков.",
        xpReward: 25,
        content: [
          {
            type: "paragraph",
            text: "Ликвидность — это скопления отложенных ордеров (стоп-лоссов и лимитных заявок) на конкретных ценовых уровнях. Чаще всего она копится за равными хаями/лоями и очевидными уровнями поддержки/сопротивления, которые видят все.",
          },
          {
            type: "list",
            items: [
              "Buy-side ликвидность — стопы шортистов выше локальных хаёв",
              "Sell-side ликвидность — стопы лонгистов ниже локальных лоёв",
              "Крупным игрокам нужна ликвидность, чтобы набрать или закрыть позицию без сильного проскальзывания",
            ],
          },
        ],
      },
      {
        slug: "snyatie-likvidnosti",
        title: "Снятие ликвидности (Liquidity Sweep)",
        summary: "Почему цена сначала выносит стопы, а потом разворачивается.",
        xpReward: 25,
        content: [
          {
            type: "paragraph",
            text: "Liquidity Sweep — ситуация, когда цена намеренно прокалывает уровень с ликвидностью (например, равные хаи), собирает отложенные ордера, а затем резко разворачивается в противоположную сторону — туда, куда изначально и планировало пойти крупное движение.",
          },
          { type: "diagram", diagram: "liquidity-sweep", caption: "Прокол равных хаёв и резкий разворот вниз" },
          {
            type: "paragraph",
            text: "Понимание sweep помогает не попадать в ловушку: пробой уровня сам по себе не гарантирует продолжения движения в эту сторону — часто это лишь охота за ликвидностью.",
          },
        ],
        questions: [
          {
            prompt: "Что обычно происходит с ценой сразу после liquidity sweep?",
            options: [
              "Резкий разворот в сторону, противоположную проколу",
              "Цена всегда продолжает движение в сторону прокола",
              "Ничего, объём падает до нуля",
            ],
            correctAnswer: "Резкий разворот в сторону, противоположную проколу",
          },
        ],
      },
      {
        slug: "struktura-trenda-bos-choch",
        title: "Структура тренда: BOS и CHoCH",
        summary: "Как по хаям и лоям определить, жив тренд или уже сломан.",
        xpReward: 25,
        content: [
          {
            type: "paragraph",
            text: "Восходящий тренд состоит из последовательности Higher High (HH) и Higher Low (HL). Пока эта структура сохраняется, тренд считается действующим.",
          },
          {
            type: "paragraph",
            text: "Break of Structure (BOS) — пробой предыдущего хая, подтверждающий продолжение тренда. Change of Character (CHoCH) — пробой в обратную сторону, первый сигнал о возможном развороте тренда.",
          },
          { type: "diagram", diagram: "trend-structure", caption: "HH/HL структура восходящего тренда и BOS" },
        ],
        questions: [
          {
            prompt: "Что сигнализирует Change of Character (CHoCH)?",
            options: [
              "Возможный разворот текущего тренда",
              "Продолжение тренда с ускорением",
              "Отсутствие ликвидности на рынке",
            ],
            correctAnswer: "Возможный разворот текущего тренда",
          },
        ],
      },
      {
        slug: "order-bloki",
        title: "Ордер-блоки",
        summary: "Зоны, откуда крупные игроки запускали сильное движение цены.",
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
      const content = {
        blocks: lessonSeed.content ?? [],
      };

      const lesson: Awaited<ReturnType<typeof db.lesson.upsert>> = await db.lesson.upsert({
        where: { moduleId_slug: { moduleId: mod.id, slug: lessonSeed.slug } },
        update: {
          title: lessonSeed.title,
          summary: lessonSeed.summary,
          content,
          xpReward: lessonSeed.xpReward,
          requiredLessonId: previousLessonId,
          published: true,
        },
        create: {
          moduleId: mod.id,
          slug: lessonSeed.slug,
          title: lessonSeed.title,
          summary: lessonSeed.summary,
          content,
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
