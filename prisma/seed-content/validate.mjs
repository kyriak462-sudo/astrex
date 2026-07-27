// Usage: npx tsx prisma/seed-content/validate.mjs <locale>
// Validates that prisma/seed-content/<locale>.ts structurally matches ru.ts
// (same module/lesson/question counts) and that every correctAnswer is
// present verbatim in that question's options.
const locale = process.argv[2];
if (!locale) {
  console.error("Usage: node validate.mjs <locale>");
  process.exit(1);
}

const ruMod = await import("./ru.ts");
const targetMod = await import(`./${locale}.ts`);

const ruCourse = ruMod.COURSE_RU;
const exportName = `COURSE_${locale.toUpperCase()}`;
const targetCourse = targetMod[exportName];

if (!targetCourse) {
  console.error(`FAIL: ${exportName} not exported from ${locale}.ts`);
  process.exit(1);
}

let errors = [];

if (targetCourse.modules.length !== ruCourse.modules.length) {
  errors.push(`module count: ru=${ruCourse.modules.length} ${locale}=${targetCourse.modules.length}`);
}

for (let i = 0; i < ruCourse.modules.length; i++) {
  const ruMod2 = ruCourse.modules[i];
  const tMod = targetCourse.modules[i];
  if (!tMod) {
    errors.push(`module ${i} missing in ${locale}`);
    continue;
  }
  if (tMod.lessons.length !== ruMod2.lessons.length) {
    errors.push(`module ${i} lesson count: ru=${ruMod2.lessons.length} ${locale}=${tMod.lessons.length}`);
  }
  for (let j = 0; j < ruMod2.lessons.length; j++) {
    const ruLesson = ruMod2.lessons[j];
    const tLesson = tMod.lessons[j];
    if (!tLesson) {
      errors.push(`module ${i} lesson ${j} missing in ${locale}`);
      continue;
    }
    if (tLesson.slug !== ruLesson.slug) {
      errors.push(`module ${i} lesson ${j} slug mismatch: ru="${ruLesson.slug}" ${locale}="${tLesson.slug}"`);
    }
    if (tLesson.xpReward !== ruLesson.xpReward) {
      errors.push(`module ${i} lesson ${j} (${ruLesson.slug}) xpReward mismatch: ru=${ruLesson.xpReward} ${locale}=${tLesson.xpReward}`);
    }
    if (tLesson.content.length !== ruLesson.content.length) {
      errors.push(`module ${i} lesson ${j} (${ruLesson.slug}) content block count: ru=${ruLesson.content.length} ${locale}=${tLesson.content.length}`);
    } else {
      for (let b = 0; b < ruLesson.content.length; b++) {
        const ruBlock = ruLesson.content[b];
        const tBlock = tLesson.content[b];
        if (!tBlock || tBlock.type !== ruBlock.type) {
          errors.push(`module ${i} lesson ${j} (${ruLesson.slug}) block ${b} type mismatch: ru="${ruBlock.type}" ${locale}="${tBlock?.type}"`);
        } else if (ruBlock.type === "diagram" && tBlock.diagram !== ruBlock.diagram) {
          errors.push(`module ${i} lesson ${j} (${ruLesson.slug}) block ${b} diagram key mismatch: ru="${ruBlock.diagram}" ${locale}="${tBlock.diagram}"`);
        } else if (ruBlock.type === "list" && tBlock.items.length !== ruBlock.items.length) {
          errors.push(`module ${i} lesson ${j} (${ruLesson.slug}) block ${b} list item count: ru=${ruBlock.items.length} ${locale}=${tBlock.items.length}`);
        }
      }
    }
    if (tLesson.questions.length !== ruLesson.questions.length) {
      errors.push(`module ${i} lesson ${j} (${ruLesson.slug}) question count: ru=${ruLesson.questions.length} ${locale}=${tLesson.questions.length}`);
    } else {
      for (let q = 0; q < ruLesson.questions.length; q++) {
        const ruQ = ruLesson.questions[q];
        const tQ = tLesson.questions[q];
        if (!tQ) continue;
        if (tQ.options.length !== ruQ.options.length) {
          errors.push(`module ${i} lesson ${j} (${ruLesson.slug}) question ${q} option count: ru=${ruQ.options.length} ${locale}=${tQ.options.length}`);
        }
        if (!tQ.options.includes(tQ.correctAnswer)) {
          errors.push(`module ${i} lesson ${j} (${ruLesson.slug}) question ${q}: correctAnswer NOT found in options. correctAnswer="${tQ.correctAnswer}" options=${JSON.stringify(tQ.options)}`);
        }
      }
    }
  }
}

if (errors.length > 0) {
  console.error(`FAIL (${locale}): ${errors.length} issue(s):`);
  for (const e of errors) console.error(" - " + e);
  process.exit(1);
} else {
  console.log(`OK (${locale}): structure matches ru.ts, all correctAnswer values verified against options.`);
}
