import type { Dictionary } from "../dictionary";

const fr: Dictionary = {
  nav: {
    howItWorks: "Comment ça marche",
    features: "Fonctionnalités",
    market: "Marché Virtuel",
    signIn: "Connexion",
    startFree: "Commencer gratuitement",
  },
  hero: {
    badge: "Duolingo pour le trading",
    title: "Apprenez le trading correctement, étape par étape",
    subtitle:
      "Il y a trop d'informations chaotiques sur le trading en ligne. ASTREX transforme l'apprentissage en un parcours clair et structuré — de votre première leçon à un trading confiant.",
    startFree: "Commencer gratuitement",
    haveAccount: "J'ai déjà un compte",
  },
  steps: {
    title: "Comment fonctionne l'apprentissage",
    subtitle:
      "Chaque cours est un parcours de modules et de leçons, où l'étape suivante ne se débloque qu'après avoir maîtrisé la précédente.",
    items: [
      { title: "Suivez les leçons", description: "Des leçons courtes et structurées, sans superflu — seulement l'essentiel." },
      { title: "Mettez en pratique", description: "Des quiz et exercices juste après la théorie, pour ancrer les connaissances." },
      { title: "Tradez sur le marché", description: "Appliquez vos connaissances sur un portefeuille virtuel sans risque financier." },
      { title: "Montez de niveau", description: "Gagnez de l'XP, gardez votre série et débloquez de nouveaux modules." },
    ],
  },
  features: {
    title: "Tout ce dont vous avez besoin au même endroit",
    subtitle: "Théorie, pratique et retours — sans jongler entre des dizaines de sources éparpillées.",
    items: [
      { title: "Leçons structurées", description: "Un parcours des bases aux stratégies avancées — étape par étape, sans chaos." },
      { title: "Exercices et quiz", description: "Renforcez chaque sujet par la pratique : quiz, études de cas et vérifications de compréhension." },
      { title: "Marché virtuel", description: "Ouvrez des positions sur un marché simulé sans risque d'argent réel et apprenez de vos erreurs." },
      { title: "Assistant IA", description: "Posez des questions, analysez vos trades et obtenez des explications de termes à tout moment." },
      { title: "Séries et motivation", description: "Des objectifs quotidiens et une série vous gardent dans le rythme — comme une appli de langues, mais pour le trading." },
      { title: "XP et succès", description: "Gagnez de l'XP pour chaque leçon terminée et débloquez des succès." },
    ],
  },
  marketPreview: {
    title: "Entraînez-vous sans risque",
    subtitle:
      "Un portefeuille virtuel avec une dynamique de marché réaliste vous permet d'ouvrir des positions longues et courtes, de suivre le P&L et d'apprendre de vos erreurs avant de risquer du capital réel.",
    startBalance: "10 000 $",
    startBalanceCaption: "solde virtuel de départ",
    positionsCaption: "et positions Short",
  },
  cta: {
    title: "Commencez votre parcours de débutant à trader",
    subtitle: "Gratuit. Sans risque. Avec une structure claire à chaque étape.",
    button: "Commencer gratuitement",
  },
  footer: {
    disclaimer: "Plateforme éducative. Ne constitue pas un conseil en investissement.",
  },
  auth: {
    signIn: {
      title: "Content de vous revoir",
      subtitle: "Connectez-vous pour continuer à apprendre.",
      submit: "Connexion",
      submitting: "Connexion…",
      noAccount: "Pas encore de compte ?",
      createLink: "En créer un",
      error: "Email ou mot de passe incorrect.",
    },
    signUp: {
      title: "Commencez à apprendre",
      subtitle: "Passez de débutant à trader avancé.",
      nameLabel: "Nom",
      namePlaceholder: "Jean",
      emailLabel: "Email",
      emailPlaceholder: "you@example.com",
      passwordLabel: "Mot de passe",
      passwordPlaceholder: "8 caractères minimum",
      submit: "Créer un compte",
      submitting: "Création du compte…",
      haveAccount: "Déjà un compte ?",
      signInLink: "Connexion",
      genericError: "Impossible de créer le compte.",
    },
    orEmail: "ou par email",
    google: "Continuer avec Google",
  },
  dashboard: {
    nav: {
      learn: "Apprendre",
      market: "Marché",
      charts: "Graphiques",
      profile: "Profil",
    },
    level: "Niveau",
    xp: "XP",
    streakDays: "jours de série",
    signOut: "Déconnexion",
  },
  learn: {
    course: "Cours",
    noCourses: "Aucun cours pour le moment.",
    module: "Module",
  },
  lesson: {
    backToPath: "Retour au parcours",
    checkYourself: "Testez-vous",
    alreadyCompleted: "Leçon déjà terminée",
    completeButton: "Terminer la leçon",
  },
  market: {
    title: "Marché Virtuel",
    subtitle: "Tradez sur des données simulées sans risque d'argent réel.",
    portfolioBalance: "Solde du portefeuille",
    amountLabel: "Montant, $",
    long: "Long",
    short: "Short",
    openPositions: "Positions ouvertes",
    noPositions: "Aucune position ouverte pour le moment.",
    entryPrice: "Entrée",
    closePosition: "Clôturer la position",
  },
  charts: {
    title: "Analyse Graphique",
    subtitle: "Entraînez-vous à tracer des lignes de tendance et des niveaux directement sur le graphique.",
    tools: {
      cursor: "Curseur",
      trendline: "Ligne de tendance",
      level: "Niveau",
      clear: "Effacer les dessins",
    },
    hints: {
      firstPoint: "Cliquez sur le premier point",
      secondPoint: "Cliquez sur le second point",
      clickLevel: "Cliquez sur un niveau de prix",
    },
  },
  profile: {
    title: "Profil",
  },
};

export default fr;
