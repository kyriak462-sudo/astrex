import "dotenv/config";
import { PrismaClient } from "@prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";
import type { CourseSeed } from "./seed-content/types";
import { COURSE_RU } from "./seed-content/ru";
import { COURSE_EN } from "./seed-content/en";
import { COURSE_EL } from "./seed-content/el";
import { COURSE_ES } from "./seed-content/es";
import { COURSE_DE } from "./seed-content/de";
import { COURSE_FR } from "./seed-content/fr";
import { COURSE_TR } from "./seed-content/tr";
import { COURSE_PT } from "./seed-content/pt";
import { COURSE_IT } from "./seed-content/it";
import { COURSE_UK } from "./seed-content/uk";

const adapter = new PrismaPg({ connectionString: process.env.DATABASE_URL });
const db = new PrismaClient({ adapter });

const COURSES: Record<string, CourseSeed> = {
  ru: COURSE_RU,
  en: COURSE_EN,
  el: COURSE_EL,
  es: COURSE_ES,
  de: COURSE_DE,
  fr: COURSE_FR,
  tr: COURSE_TR,
  pt: COURSE_PT,
  it: COURSE_IT,
  uk: COURSE_UK,
};

const LOCALES = Object.keys(COURSES);
const SPINE = COURSE_RU;

function localize<T>(pick: (course: CourseSeed) => T): Record<string, T> {
  const result: Record<string, T> = {};
  for (const locale of LOCALES) {
    result[locale] = pick(COURSES[locale]);
  }
  return result;
}

function validateStructure() {
  const errors: string[] = [];
  for (const locale of LOCALES) {
    const c = COURSES[locale];
    if (c.modules.length !== SPINE.modules.length) {
      errors.push(`${locale}: module count ${c.modules.length} != ${SPINE.modules.length}`);
      continue;
    }
    for (let i = 0; i < SPINE.modules.length; i++) {
      const sm = SPINE.modules[i];
      const cm = c.modules[i];
      if (cm.lessons.length !== sm.lessons.length) {
        errors.push(`${locale}: module ${i} lesson count ${cm.lessons.length} != ${sm.lessons.length}`);
        continue;
      }
      for (let j = 0; j < sm.lessons.length; j++) {
        const sl = sm.lessons[j];
        const cl = cm.lessons[j];
        if (cl.slug !== sl.slug) {
          errors.push(`${locale}: module ${i} lesson ${j} slug "${cl.slug}" != "${sl.slug}"`);
        }
        if (cl.questions.length !== sl.questions.length) {
          errors.push(`${locale}: lesson "${sl.slug}" question count ${cl.questions.length} != ${sl.questions.length}`);
          continue;
        }
        for (let k = 0; k < sl.questions.length; k++) {
          const q = cl.questions[k];
          if (!q.options.includes(q.correctAnswer)) {
            errors.push(`${locale}: lesson "${sl.slug}" question ${k}: correctAnswer not in options`);
          }
        }
      }
    }
  }
  if (errors.length > 0) {
    throw new Error(`Seed content validation failed:\n${errors.join("\n")}`);
  }
}

async function main() {
  validateStructure();

  const course = await db.course.upsert({
    where: { slug: SPINE.slug },
    update: {
      title: localize((c) => c.title),
      description: localize((c) => c.description),
    },
    create: {
      slug: SPINE.slug,
      title: localize((c) => c.title),
      description: localize((c) => c.description),
      level: "BEGINNER",
      order: 0,
      published: true,
    },
  });

  let moduleOrder = 0;
  let previousLessonId: string | null = null;

  for (let mIdx = 0; mIdx < SPINE.modules.length; mIdx++) {
    const spineModule = SPINE.modules[mIdx];

    const mod = await db.module.upsert({
      where: { id: `${course.id}-${moduleOrder}` },
      update: {
        title: localize((c) => c.modules[mIdx].title),
      },
      create: {
        id: `${course.id}-${moduleOrder}`,
        courseId: course.id,
        title: localize((c) => c.modules[mIdx].title),
        order: moduleOrder,
      },
    });

    let lessonOrder = 0;

    for (let lIdx = 0; lIdx < spineModule.lessons.length; lIdx++) {
      const spineLesson = spineModule.lessons[lIdx];
      const content = localize((c) => c.modules[mIdx].lessons[lIdx].content);
      const title = localize((c) => c.modules[mIdx].lessons[lIdx].title);
      const summary = localize((c) => c.modules[mIdx].lessons[lIdx].summary);

      const lesson: Awaited<ReturnType<typeof db.lesson.upsert>> = await db.lesson.upsert({
        where: { moduleId_slug: { moduleId: mod.id, slug: spineLesson.slug } },
        update: {
          title,
          summary,
          content,
          xpReward: spineLesson.xpReward,
          requiredLessonId: previousLessonId,
          published: true,
        },
        create: {
          moduleId: mod.id,
          slug: spineLesson.slug,
          title,
          summary,
          content,
          order: lessonOrder,
          xpReward: spineLesson.xpReward,
          requiredLessonId: previousLessonId,
          published: true,
        },
      });

      let questionOrder = 0;
      for (let qIdx = 0; qIdx < spineLesson.questions.length; qIdx++) {
        const prompt = localize((c) => c.modules[mIdx].lessons[lIdx].questions[qIdx].prompt);
        const options = localize((c) => c.modules[mIdx].lessons[lIdx].questions[qIdx].options);
        const correctAnswer = localize(
          (c) => c.modules[mIdx].lessons[lIdx].questions[qIdx].correctAnswer
        );

        await db.question.upsert({
          where: { id: `${lesson.id}-q${questionOrder}` },
          update: { prompt, options, correctAnswer },
          create: {
            id: `${lesson.id}-q${questionOrder}`,
            lessonId: lesson.id,
            type: "SINGLE_CHOICE",
            prompt,
            options,
            correctAnswer,
            order: questionOrder,
            xpReward: 5,
          },
        });
        questionOrder++;
      }

      previousLessonId = lesson.id;
      lessonOrder++;
    }
    moduleOrder++;
  }

  const totalLessons = SPINE.modules.reduce((sum, m) => sum + m.lessons.length, 0);
  console.log(
    `Seeded course across ${LOCALES.length} locales: ${SPINE.modules.length} modules, ${totalLessons} lessons.`
  );
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await db.$disconnect();
  });
