export type DiagramKey =
  | "fvg"
  | "imbalance"
  | "liquidity-sweep"
  | "trend-structure"
  | "order-block"
  | "rsi";

export type ContentBlock =
  | { type: "paragraph"; text: string }
  | { type: "list"; items: string[] }
  | { type: "diagram"; diagram: DiagramKey; caption?: string };

export type LessonSeed = {
  slug: string;
  title: string;
  summary: string;
  xpReward: number;
  content: ContentBlock[];
  questions: {
    prompt: string;
    options: string[];
    correctAnswer: string;
  }[];
};

export type ModuleSeed = {
  title: string;
  lessons: LessonSeed[];
};

export type CourseSeed = {
  slug: string;
  title: string;
  description: string;
  modules: ModuleSeed[];
};
