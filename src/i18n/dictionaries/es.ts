import type { Dictionary } from "../dictionary";

const es: Dictionary = {
  nav: {
    howItWorks: "Cómo funciona",
    features: "Funciones",
    market: "Mercado Virtual",
    signIn: "Iniciar sesión",
    startFree: "Empezar gratis",
  },
  hero: {
    badge: "Duolingo para el trading",
    title: "Aprende trading correctamente, paso a paso",
    subtitle:
      "Hay demasiada información caótica sobre trading en internet. ASTREX convierte el aprendizaje en un camino claro y estructurado, desde tu primera lección hasta operar con confianza.",
    startFree: "Empezar gratis",
    haveAccount: "Ya tengo una cuenta",
  },
  steps: {
    title: "Cómo funciona el aprendizaje",
    subtitle:
      "Cada curso es un camino de módulos y lecciones, donde el siguiente paso se desbloquea solo después de dominar el anterior.",
    items: [
      { title: "Completa lecciones", description: "Lecciones cortas y estructuradas, sin relleno — solo lo que necesitas saber." },
      { title: "Practica lo aprendido", description: "Cuestionarios y ejercicios justo después de la teoría, para que el conocimiento se quede." },
      { title: "Opera en el mercado", description: "Aplica lo aprendido en una cartera virtual sin riesgo financiero." },
      { title: "Sube de nivel", description: "Gana XP, mantén tu racha y desbloquea nuevos módulos del camino." },
    ],
  },
  features: {
    title: "Todo lo que necesitas en un solo lugar",
    subtitle: "Teoría, práctica y retroalimentación, sin saltar entre docenas de fuentes dispersas.",
    items: [
      { title: "Lecciones estructuradas", description: "Un camino desde lo básico hasta estrategias avanzadas — paso a paso, sin caos." },
      { title: "Ejercicios y cuestionarios", description: "Refuerza cada tema con práctica: tests, casos prácticos y comprobación de comprensión." },
      { title: "Mercado virtual", description: "Abre operaciones en un mercado simulado sin riesgo de dinero real y aprende de tus errores." },
      { title: "Asistente de IA", description: "Haz preguntas, revisa tus operaciones y obtén explicaciones de términos en cualquier momento." },
      { title: "Rachas y motivación", description: "Metas diarias y rachas te mantienen en ritmo — como una app de idiomas, pero para trading." },
      { title: "Experiencia y logros", description: "Gana XP por cada lección completada y desbloquea logros en tu camino hacia la maestría." },
    ],
  },
  marketPreview: {
    title: "Practica sin riesgo",
    subtitle:
      "Una cartera virtual con dinámica de mercado realista te permite abrir posiciones largas y cortas, seguir el P&L y aprender de los errores antes de arriesgar capital real.",
    startBalance: "$10,000",
    startBalanceCaption: "saldo virtual inicial",
    positionsCaption: "y posiciones Short",
  },
  cta: {
    title: "Empieza tu camino de principiante a trader",
    subtitle: "Gratis. Sin riesgo. Con una estructura clara en cada paso.",
    button: "Empezar gratis",
  },
  footer: {
    disclaimer: "Plataforma educativa. No constituye asesoramiento de inversión.",
  },
  auth: {
    signIn: {
      title: "Bienvenido de nuevo",
      subtitle: "Inicia sesión para continuar aprendiendo.",
      submit: "Iniciar sesión",
      submitting: "Iniciando sesión…",
      noAccount: "¿No tienes una cuenta?",
      createLink: "Crear una",
      error: "Email o contraseña incorrectos.",
    },
    signUp: {
      title: "Empieza a aprender",
      subtitle: "Pasa de principiante a trader avanzado.",
      nameLabel: "Nombre",
      namePlaceholder: "Juan",
      emailLabel: "Email",
      emailPlaceholder: "you@example.com",
      passwordLabel: "Contraseña",
      passwordPlaceholder: "Mínimo 8 caracteres",
      submit: "Crear cuenta",
      submitting: "Creando cuenta…",
      haveAccount: "¿Ya tienes una cuenta?",
      signInLink: "Iniciar sesión",
      genericError: "No se pudo crear la cuenta.",
    },
    orEmail: "o con email",
    google: "Continuar con Google",
  },
  dashboard: {
    nav: {
      learn: "Aprender",
      market: "Mercado",
      charts: "Gráficos",
      profile: "Perfil",
      settings: "Ajustes",
    },
    level: "Nivel",
    xp: "XP",
    streakDays: "días de racha",
    signOut: "Cerrar sesión",
  },
  learn: {
    course: "Curso",
    noCourses: "Aún no hay cursos.",
    module: "Módulo",
  },
  lesson: {
    backToPath: "Volver al camino",
    checkYourself: "Ponte a prueba",
    alreadyCompleted: "Lección ya completada",
    completeButton: "Completar lección",
  },
  market: {
    title: "Mercado Virtual",
    subtitle: "Opera con datos simulados sin riesgo de dinero real.",
    portfolioBalance: "Saldo de la cartera",
    amountLabel: "Importe, $",
    long: "Long",
    short: "Short",
    openPositions: "Posiciones abiertas",
    noPositions: "Aún no hay posiciones abiertas.",
    entryPrice: "Entrada",
    closePosition: "Cerrar posición",
  },
  charts: {
    title: "Análisis de Gráficos",
    subtitle: "Practica trazando líneas de tendencia y niveles directamente en el gráfico.",
    tools: {
      cursor: "Cursor",
      trendline: "Línea de tendencia",
      level: "Nivel",
      clear: "Borrar dibujos",
    },
    hints: {
      firstPoint: "Haz clic en el primer punto",
      secondPoint: "Haz clic en el segundo punto",
      clickLevel: "Haz clic en un nivel de precio",
    },
  },
  profile: {
    title: "Perfil",
  },
};

export default es;
