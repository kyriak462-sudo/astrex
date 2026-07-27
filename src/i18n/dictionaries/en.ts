import type { Dictionary } from "../dictionary";

const en: Dictionary = {
  nav: {
    howItWorks: "How it works",
    features: "Features",
    market: "Virtual Market",
    signIn: "Sign in",
    startFree: "Start for free",
  },
  hero: {
    badge: "Duolingo for trading",
    title: "Learn trading the right way, step by step",
    subtitle:
      "There's too much chaotic information about trading online. ASTREX turns learning into a clear, structured path — from your first lesson to confident trading.",
    startFree: "Start for free",
    haveAccount: "I have an account",
  },
  steps: {
    title: "How the learning works",
    subtitle:
      "Every course is a path of modules and lessons, where the next step unlocks only after you've mastered the previous one.",
    items: [
      { title: "Take lessons", description: "Short, structured lessons with no filler — only what you need to know." },
      { title: "Practice it", description: "Quizzes and exercises right after the theory, so knowledge sticks." },
      { title: "Trade the market", description: "Apply what you learned on a virtual portfolio with zero financial risk." },
      { title: "Level up", description: "Earn XP, keep your streak, and unlock new modules on the path." },
    ],
  },
  features: {
    title: "Everything you need in one place",
    subtitle: "Theory, practice, and feedback — without switching between a dozen scattered sources.",
    items: [
      { title: "Structured lessons", description: "A path from the basics to advanced strategies — step by step, no chaos or noise." },
      { title: "Exercises and quizzes", description: "Reinforce every topic with practice: quizzes, case studies, and understanding checks before moving on." },
      { title: "Virtual market", description: "Open trades on a simulated market with zero risk to real money and learn from your mistakes." },
      { title: "AI assistant", description: "Ask questions, review your trades, and get terms explained at any point in your learning." },
      { title: "Streaks and motivation", description: "Daily goals and streaks keep you in rhythm — like a language app, but for trading." },
      { title: "XP and achievements", description: "Earn XP for every lesson you complete and unlock achievements on your way to mastery." },
    ],
  },
  marketPreview: {
    title: "Practice without risk",
    subtitle:
      "A virtual portfolio with realistic market dynamics lets you open long and short positions, track P&L, and learn from mistakes — before risking real capital.",
    startBalance: "$10,000",
    startBalanceCaption: "starting virtual balance",
    positionsCaption: "and Short positions",
  },
  cta: {
    title: "Start your path from beginner to trader",
    subtitle: "Free. No risk. With a clear structure at every step.",
    button: "Start for free",
  },
  footer: {
    disclaimer: "Educational platform. Not investment advice.",
  },
  auth: {
    signIn: {
      title: "Welcome back",
      subtitle: "Sign in to continue learning.",
      submit: "Sign in",
      submitting: "Signing in…",
      noAccount: "Don't have an account?",
      createLink: "Create one",
      error: "Incorrect email or password.",
    },
    signUp: {
      title: "Start learning",
      subtitle: "Go from beginner to advanced trader.",
      nameLabel: "Name",
      namePlaceholder: "John",
      emailLabel: "Email",
      emailPlaceholder: "you@example.com",
      passwordLabel: "Password",
      passwordPlaceholder: "At least 8 characters",
      submit: "Create account",
      submitting: "Creating account…",
      haveAccount: "Already have an account?",
      signInLink: "Sign in",
      genericError: "Couldn't create an account.",
    },
    orEmail: "or with email",
    google: "Continue with Google",
  },
  dashboard: {
    nav: {
      learn: "Learn",
      market: "Market",
      charts: "Charts",
      profile: "Profile",
      settings: "Settings",
    },
    level: "Level",
    xp: "XP",
    streakDays: "day streak",
    signOut: "Sign out",
  },
  learn: {
    course: "Course",
    noCourses: "No courses yet.",
    module: "Module",
  },
  lesson: {
    backToPath: "Back to path",
    checkYourself: "Check yourself",
    alreadyCompleted: "Lesson already completed",
    completeButton: "Complete lesson",
  },
  market: {
    title: "Virtual Market",
    subtitle: "Trade on simulated data with zero risk to real money.",
    portfolioBalance: "Portfolio balance",
    amountLabel: "Amount, $",
    long: "Long",
    short: "Short",
    openPositions: "Open positions",
    noPositions: "No open positions yet.",
    entryPrice: "Entry",
    closePosition: "Close position",
  },
  charts: {
    title: "Chart Analysis",
    subtitle: "Practice drawing trend lines and levels right on the chart.",
    tools: {
      cursor: "Cursor",
      trendline: "Trend line",
      level: "Level",
      clear: "Clear drawings",
    },
    hints: {
      firstPoint: "Click the first point",
      secondPoint: "Click the second point",
      clickLevel: "Click a price level",
    },
  },
  profile: {
    title: "Profile",
  },
};

export default en;
