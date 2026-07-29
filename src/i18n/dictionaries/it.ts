import type { Dictionary } from "../dictionary";

const it: Dictionary = {
  nav: {
    howItWorks: "Come funziona",
    features: "Funzionalità",
    market: "Mercato Virtuale",
    signIn: "Accedi",
    startFree: "Inizia gratis",
  },
  hero: {
    badge: "Duolingo per il trading",
    title: "Impara il trading nel modo giusto, passo dopo passo",
    subtitle:
      "Online c'è troppa informazione caotica sul trading. ASTREX trasforma l'apprendimento in un percorso chiaro e strutturato — dalla tua prima lezione a un trading consapevole.",
    startFree: "Inizia gratis",
    haveAccount: "Ho già un account",
  },
  steps: {
    title: "Come funziona l'apprendimento",
    subtitle:
      "Ogni corso è un percorso di moduli e lezioni, dove il passo successivo si sblocca solo dopo aver padroneggiato il precedente.",
    items: [
      { title: "Segui le lezioni", description: "Lezioni brevi e strutturate, senza fronzoli — solo ciò che serve sapere." },
      { title: "Mettiti alla prova", description: "Quiz ed esercizi subito dopo la teoria, per far restare le conoscenze." },
      { title: "Fai trading sul mercato", description: "Applica ciò che hai imparato su un portafoglio virtuale senza rischio finanziario." },
      { title: "Sali di livello", description: "Guadagna XP, mantieni la tua streak e sblocca nuovi moduli del percorso." },
    ],
  },
  features: {
    title: "Tutto ciò che ti serve in un unico posto",
    subtitle: "Teoria, pratica e feedback — senza passare tra decine di fonti sparse.",
    items: [
      { title: "Lezioni strutturate", description: "Un percorso dalle basi alle strategie avanzate — passo dopo passo, senza caos." },
      { title: "Esercizi e quiz", description: "Rinforza ogni argomento con la pratica: quiz, casi studio e verifica della comprensione." },
      { title: "Mercato virtuale", description: "Apri operazioni su un mercato simulato senza rischiare denaro reale e impara dai tuoi errori." },
      { title: "Grafici di mercato reali", description: "Grafici professionali TradingView con dati in tempo reale e strumenti di analisi tecnica." },
      { title: "Streak e motivazione", description: "Obiettivi giornalieri e streak ti mantengono nel ritmo — come un'app per le lingue, ma per il trading." },
      { title: "XP e obiettivi", description: "Guadagna XP per ogni lezione completata e sblocca obiettivi lungo il percorso." },
    ],
  },
  marketPreview: {
    title: "Esercitati senza rischi",
    subtitle:
      "Un portafoglio virtuale con dinamiche di mercato realistiche ti permette di aprire posizioni long e short, monitorare il P&L e imparare dagli errori prima di rischiare capitale reale.",
    startBalance: "10.000 $",
    startBalanceCaption: "saldo virtuale iniziale",
    positionsCaption: "e posizioni Short",
  },
  cta: {
    title: "Inizia il tuo percorso da principiante a trader",
    subtitle: "Gratis. Senza rischi. Con una struttura chiara in ogni fase.",
    button: "Inizia gratis",
  },
  footer: {
    disclaimer: "Piattaforma educativa. Non costituisce consulenza finanziaria.",
  },
  auth: {
    signIn: {
      title: "Bentornato",
      subtitle: "Accedi per continuare a imparare.",
      submit: "Accedi",
      submitting: "Accesso in corso…",
      noAccount: "Non hai un account?",
      createLink: "Creane uno",
      error: "Email o password errati.",
    },
    signUp: {
      title: "Inizia a imparare",
      subtitle: "Passa da principiante a trader avanzato.",
      nameLabel: "Nome",
      namePlaceholder: "Mario",
      emailLabel: "Email",
      emailPlaceholder: "you@example.com",
      passwordLabel: "Password",
      passwordPlaceholder: "Almeno 8 caratteri",
      submit: "Crea account",
      submitting: "Creazione account…",
      haveAccount: "Hai già un account?",
      signInLink: "Accedi",
      genericError: "Impossibile creare l'account.",
    },
    orEmail: "oppure con email",
    google: "Continua con Google",
    verify: {
      title: "Verifica la tua email",
      subtitle: "Abbiamo inviato un codice a 6 cifre alla tua email. Inseriscilo qui sotto.",
      codePlaceholder: "Codice dall'email",
      submit: "Verifica",
      submitting: "Verifica in corso...",
      resend: "Invia di nuovo il codice",
      resending: "Invio in corso...",
      resent: "Codice inviato di nuovo",
      invalidCode: "Il codice non è valido o è scaduto.",
      genericError: "Impossibile verificare l'email. Riprova.",
    },
  },
  dashboard: {
    nav: {
      learn: "Impara",
      market: "Mercato",
      profile: "Profilo",
      settings: "Impostazioni",
      leaderboard: "Classifica",
    },
    level: "Livello",
    xp: "XP",
    streakDays: "giorni di streak",
    signOut: "Esci",
  },
  learn: {
    course: "Corso",
    noCourses: "Nessun corso ancora disponibile.",
    module: "Modulo",
  },
  lesson: {
    backToPath: "Torna al percorso",
    checkYourself: "Mettiti alla prova",
    alreadyCompleted: "Lezione già completata",
    completeButton: "Completa lezione",
  },
  market: {
    title: "Mercato Virtuale",
    subtitle: "Fai trading su dati simulati senza rischiare denaro reale.",
    portfolioBalance: "Saldo del portafoglio",
    amountLabel: "Importo, $",
    long: "Long",
    short: "Short",
    openPositions: "Posizioni aperte",
    noPositions: "Ancora nessuna posizione aperta.",
    entryPrice: "Ingresso",
    closePosition: "Chiudi posizione",
  },
  profile: {
    title: "Profilo",
  },
  leaderboard: {
    title: "Classifica",
    subtitle: "I migliori trader della piattaforma per P&L di questo mese. Si azzera il giorno 1.",
    noData: "Ancora nessun dato.",
    you: "tu",
    balance: "saldo",
  },
  support: {
    title: "Assistenza",
    description: "Descrivi il tuo problema: l'assistente IA cercherà di risolverlo subito.",
    placeholder: "Descrivi il tuo problema...",
    send: "Invia",
    greeting: "Ciao! Sono l'assistente di assistenza di ASTREX. Descrivi il tuo problema e cercherò di aiutarti.",
    error: "Impossibile inviare il messaggio. Riprova.",
  },
};

export default it;
