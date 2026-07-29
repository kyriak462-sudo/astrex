export type Dictionary = {
  nav: {
    howItWorks: string;
    features: string;
    market: string;
    signIn: string;
    startFree: string;
  };
  hero: {
    badge: string;
    title: string;
    subtitle: string;
    startFree: string;
    haveAccount: string;
  };
  steps: {
    title: string;
    subtitle: string;
    items: { title: string; description: string }[];
  };
  features: {
    title: string;
    subtitle: string;
    items: { title: string; description: string }[];
  };
  marketPreview: {
    title: string;
    subtitle: string;
    startBalance: string;
    startBalanceCaption: string;
    positionsCaption: string;
  };
  cta: {
    title: string;
    subtitle: string;
    button: string;
  };
  footer: {
    disclaimer: string;
  };
  auth: {
    signIn: {
      title: string;
      subtitle: string;
      submit: string;
      submitting: string;
      noAccount: string;
      createLink: string;
      error: string;
    };
    signUp: {
      title: string;
      subtitle: string;
      nameLabel: string;
      namePlaceholder: string;
      emailLabel: string;
      emailPlaceholder: string;
      passwordLabel: string;
      passwordPlaceholder: string;
      submit: string;
      submitting: string;
      haveAccount: string;
      signInLink: string;
      genericError: string;
    };
    orEmail: string;
    google: string;
    verify: {
      title: string;
      subtitle: string;
      codePlaceholder: string;
      submit: string;
      submitting: string;
      resend: string;
      resending: string;
      resent: string;
      invalidCode: string;
      genericError: string;
    };
  };
  dashboard: {
    nav: {
      learn: string;
      market: string;
      leaderboard: string;
      profile: string;
      settings: string;
    };
    level: string;
    xp: string;
    streakDays: string;
    signOut: string;
  };
  learn: {
    course: string;
    noCourses: string;
    module: string;
  };
  lesson: {
    backToPath: string;
    checkYourself: string;
    alreadyCompleted: string;
    completeButton: string;
  };
  market: {
    title: string;
    subtitle: string;
    portfolioBalance: string;
    amountLabel: string;
    long: string;
    short: string;
    openPositions: string;
    noPositions: string;
    entryPrice: string;
    closePosition: string;
  };
  profile: {
    title: string;
  };
  leaderboard: {
    title: string;
    subtitle: string;
    noData: string;
    you: string;
    balance: string;
  };
  support: {
    title: string;
    description: string;
    placeholder: string;
    send: string;
    greeting: string;
    error: string;
  };
};
