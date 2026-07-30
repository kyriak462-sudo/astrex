export type DiagramKey =
  | "fvg"
  | "imbalance"
  | "liquidity-sweep"
  | "trend-structure"
  | "order-block"
  | "rsi"
  | "intro-chart"
  | "market-types"
  | "chart-anatomy"
  | "candlestick-anatomy"
  | "support-resistance"
  | "trend-basic"
  | "volume-liquidity"
  | "risk-basic"
  | "moving-averages"
  | "fibonacci"
  | "reversal-patterns"
  | "continuation-patterns"
  | "multi-timeframe"
  | "liquidity-types"
  | "risk-reward"
  | "position-size"
  | "stop-loss-chart"
  | "take-profit-chart"
  | "macd"
  | "ema"
  | "sma"
  | "vwap"
  | "atr"
  | "bollinger"
  | "volume-bars"
  | "delta"
  | "open-interest"
  | "funding-rate"
  | "liquidations"
  | "scalping"
  | "day-trading"
  | "swing-trading"
  | "position-trading"
  | "breakout"
  | "mean-reversion";

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
