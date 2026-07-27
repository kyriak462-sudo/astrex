import type { Dictionary } from "../dictionary";

const de: Dictionary = {
  nav: {
    howItWorks: "So funktioniert's",
    features: "Funktionen",
    market: "Virtueller Markt",
    signIn: "Anmelden",
    startFree: "Kostenlos starten",
  },
  hero: {
    badge: "Duolingo fürs Trading",
    title: "Lerne Trading richtig, Schritt für Schritt",
    subtitle:
      "Im Internet gibt es zu viele chaotische Informationen über Trading. ASTREX verwandelt das Lernen in einen klaren, strukturierten Weg — von deiner ersten Lektion bis zum sicheren Trading.",
    startFree: "Kostenlos starten",
    haveAccount: "Ich habe bereits ein Konto",
  },
  steps: {
    title: "So funktioniert das Lernen",
    subtitle:
      "Jeder Kurs ist ein Pfad aus Modulen und Lektionen, bei dem der nächste Schritt erst freigeschaltet wird, wenn du den vorherigen gemeistert hast.",
    items: [
      { title: "Lektionen absolvieren", description: "Kurze, strukturierte Lektionen ohne Füllstoff — nur das Wichtigste." },
      { title: "Übung vertiefen", description: "Quizfragen und Übungen direkt nach der Theorie, damit das Wissen bleibt." },
      { title: "Am Markt handeln", description: "Wende das Gelernte in einem virtuellen Portfolio ohne finanzielles Risiko an." },
      { title: "Level aufsteigen", description: "Sammle XP, halte deine Streak und schalte neue Module frei." },
    ],
  },
  features: {
    title: "Alles, was du brauchst, an einem Ort",
    subtitle: "Theorie, Praxis und Feedback — ohne zwischen einem Dutzend verstreuter Quellen zu wechseln.",
    items: [
      { title: "Strukturierte Lektionen", description: "Ein Weg von den Grundlagen bis zu fortgeschrittenen Strategien — Schritt für Schritt, ohne Chaos." },
      { title: "Übungen und Quizfragen", description: "Vertiefe jedes Thema mit Praxis: Quiz, Fallstudien und Verständnischecks." },
      { title: "Virtueller Markt", description: "Eröffne Trades in einem simulierten Markt ohne Risiko für echtes Geld und lerne aus Fehlern." },
      { title: "KI-Assistent", description: "Stelle Fragen, analysiere deine Trades und lass dir Begriffe jederzeit erklären." },
      { title: "Streaks und Motivation", description: "Tägliche Ziele und Streaks halten dich im Rhythmus — wie eine Sprachlern-App, nur fürs Trading." },
      { title: "XP und Erfolge", description: "Sammle XP für jede abgeschlossene Lektion und schalte Erfolge frei." },
    ],
  },
  marketPreview: {
    title: "Übe ohne Risiko",
    subtitle:
      "Ein virtuelles Portfolio mit realistischer Marktdynamik lässt dich Long- und Short-Positionen eröffnen, den P&L verfolgen und aus Fehlern lernen — bevor du echtes Kapital riskierst.",
    startBalance: "$10.000",
    startBalanceCaption: "virtuelles Startguthaben",
    positionsCaption: "und Short-Positionen",
  },
  cta: {
    title: "Starte deinen Weg vom Anfänger zum Trader",
    subtitle: "Kostenlos. Ohne Risiko. Mit klarer Struktur bei jedem Schritt.",
    button: "Kostenlos starten",
  },
  footer: {
    disclaimer: "Bildungsplattform. Keine Anlageberatung.",
  },
  auth: {
    signIn: {
      title: "Willkommen zurück",
      subtitle: "Melde dich an, um weiterzulernen.",
      submit: "Anmelden",
      submitting: "Anmeldung läuft…",
      noAccount: "Noch kein Konto?",
      createLink: "Jetzt erstellen",
      error: "Falsche E-Mail oder Passwort.",
    },
    signUp: {
      title: "Jetzt lernen starten",
      subtitle: "Vom Anfänger zum fortgeschrittenen Trader.",
      nameLabel: "Name",
      namePlaceholder: "Max",
      emailLabel: "E-Mail",
      emailPlaceholder: "you@example.com",
      passwordLabel: "Passwort",
      passwordPlaceholder: "Mindestens 8 Zeichen",
      submit: "Konto erstellen",
      submitting: "Konto wird erstellt…",
      haveAccount: "Schon ein Konto?",
      signInLink: "Anmelden",
      genericError: "Konto konnte nicht erstellt werden.",
    },
    orEmail: "oder per E-Mail",
    google: "Weiter mit Google",
  },
  dashboard: {
    nav: {
      learn: "Lernen",
      market: "Markt",
      charts: "Charts",
      profile: "Profil",
      settings: "Einstellungen",
    },
    level: "Level",
    xp: "XP",
    streakDays: "Tage Streak",
    signOut: "Abmelden",
  },
  learn: {
    course: "Kurs",
    noCourses: "Noch keine Kurse vorhanden.",
    module: "Modul",
  },
  lesson: {
    backToPath: "Zurück zum Pfad",
    checkYourself: "Teste dich selbst",
    alreadyCompleted: "Lektion bereits abgeschlossen",
    completeButton: "Lektion abschließen",
  },
  market: {
    title: "Virtueller Markt",
    subtitle: "Handle mit simulierten Daten ohne Risiko für echtes Geld.",
    portfolioBalance: "Portfolio-Guthaben",
    amountLabel: "Betrag, $",
    long: "Long",
    short: "Short",
    openPositions: "Offene Positionen",
    noPositions: "Noch keine offenen Positionen.",
    entryPrice: "Einstieg",
    closePosition: "Position schließen",
  },
  charts: {
    title: "Chartanalyse",
    subtitle: "Übe das Zeichnen von Trendlinien und Levels direkt im Chart.",
    tools: {
      cursor: "Cursor",
      trendline: "Trendlinie",
      level: "Level",
      clear: "Zeichnungen löschen",
    },
    hints: {
      firstPoint: "Klicke auf den ersten Punkt",
      secondPoint: "Klicke auf den zweiten Punkt",
      clickLevel: "Klicke auf ein Preisniveau",
    },
  },
  profile: {
    title: "Profil",
  },
};

export default de;
