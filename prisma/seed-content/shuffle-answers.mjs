// Shuffles each question's `options` array order (position-preserving text surgery),
// using the SAME permutation per question index across every locale file, so the
// correct answer is no longer always options[0] but translations stay aligned.
import fs from "node:fs";
import path from "node:path";
import ts from "typescript";

const DIR = path.dirname(new URL(import.meta.url).pathname.replace(/^\/([A-Za-z]:)/, "$1"));
const LOCALES = ["ru", "en", "el", "es", "de", "fr", "tr", "pt", "it", "uk"];

function isQuestionObject(node) {
  if (!ts.isObjectLiteralExpression(node)) return false;
  const names = node.properties
    .filter((p) => p.name && ts.isIdentifier(p.name))
    .map((p) => p.name.text);
  return names.includes("prompt") && names.includes("options") && names.includes("correctAnswer");
}

function findQuestionNodes(sourceFile) {
  const results = [];
  function visit(node) {
    if (isQuestionObject(node)) {
      results.push(node);
    }
    ts.forEachChild(node, visit);
  }
  visit(sourceFile);
  return results;
}

function getOptionsArray(questionNode) {
  const prop = questionNode.properties.find(
    (p) => p.name && ts.isIdentifier(p.name) && p.name.text === "options",
  );
  if (!prop || !ts.isArrayLiteralExpression(prop.initializer)) {
    throw new Error("options property missing or not an array literal");
  }
  return prop.initializer;
}

function fisherYates(n, rng) {
  const arr = Array.from({ length: n }, (_, i) => i);
  for (let i = n - 1; i > 0; i--) {
    const j = Math.floor(rng() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

// --- Step 1: derive one permutation per question index from the canonical ru.ts ---
const ruPath = path.join(DIR, "ru.ts");
const ruText = fs.readFileSync(ruPath, "utf8");
const ruSource = ts.createSourceFile(ruPath, ruText, ts.ScriptTarget.Latest, true, ts.ScriptKind.TS);
const ruQuestions = findQuestionNodes(ruSource);

const rng = Math.random;
const perms = ruQuestions.map((q) => {
  const arr = getOptionsArray(q);
  const n = arr.elements.length;
  let perm = fisherYates(n, rng);
  // Re-roll if it happens to be the identity permutation (keeps correct answer at slot 0)
  // and n > 1, so every question actually moves.
  if (n > 1) {
    let attempts = 0;
    while (perm.every((v, i) => v === i) && attempts < 20) {
      perm = fisherYates(n, rng);
      attempts++;
    }
  }
  return { n, perm };
});

console.log(`Derived ${perms.length} permutations from ru.ts`);

// --- Step 2: apply the same permutations (by index) to every locale file ---
for (const locale of LOCALES) {
  const filePath = path.join(DIR, `${locale}.ts`);
  const text = fs.readFileSync(filePath, "utf8");
  const source = ts.createSourceFile(filePath, text, ts.ScriptTarget.Latest, true, ts.ScriptKind.TS);
  const questions = findQuestionNodes(source);

  if (questions.length !== perms.length) {
    throw new Error(
      `${locale}.ts: question count ${questions.length} does not match ru.ts count ${perms.length}`,
    );
  }

  const replacements = [];

  questions.forEach((q, i) => {
    const { n, perm } = perms[i];
    const arrayNode = getOptionsArray(q);
    const elements = arrayNode.elements;
    if (elements.length !== n) {
      throw new Error(
        `${locale}.ts: question #${i} has ${elements.length} options, expected ${n} (ru.ts mismatch)`,
      );
    }
    if (n <= 1) return;

    const start = arrayNode.getStart(source);
    const end = arrayNode.getEnd();

    let rebuilt = text.slice(start, elements[0].getStart(source));
    for (let idx = 0; idx < elements.length; idx++) {
      const originalEl = elements[perm[idx]];
      rebuilt += originalEl.getText(source);
      if (idx < elements.length - 1) {
        rebuilt += text.slice(elements[idx].getEnd(), elements[idx + 1].getStart(source));
      } else {
        rebuilt += text.slice(elements[idx].getEnd(), end);
      }
    }

    replacements.push({ start, end, text: rebuilt });
  });

  replacements.sort((a, b) => b.start - a.start);
  let newText = text;
  for (const r of replacements) {
    newText = newText.slice(0, r.start) + r.text + newText.slice(r.end);
  }

  fs.writeFileSync(filePath, newText, "utf8");
  console.log(`${locale}.ts: shuffled ${replacements.length} question option arrays`);
}

console.log("Done.");
