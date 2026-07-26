import type { Dictionary } from "../dictionary";

const pt: Dictionary = {
  nav: {
    howItWorks: "Como funciona",
    features: "Recursos",
    market: "Mercado Virtual",
    signIn: "Entrar",
    startFree: "Começar grátis",
  },
  hero: {
    badge: "Duolingo para trading",
    title: "Aprenda trading da forma certa, passo a passo",
    subtitle:
      "Há informação demais e caótica sobre trading na internet. A ASTREX transforma o aprendizado em um caminho claro e estruturado — da sua primeira aula até negociar com confiança.",
    startFree: "Começar grátis",
    haveAccount: "Já tenho uma conta",
  },
  steps: {
    title: "Como funciona o aprendizado",
    subtitle:
      "Cada curso é um caminho de módulos e aulas, em que o próximo passo só é desbloqueado depois de dominar o anterior.",
    items: [
      { title: "Faça as aulas", description: "Aulas curtas e estruturadas, sem enrolação — só o que você precisa saber." },
      { title: "Pratique o que aprendeu", description: "Testes e exercícios logo após a teoria, para o conhecimento não se perder." },
      { title: "Opere no mercado", description: "Aplique o que aprendeu em uma carteira virtual sem risco financeiro." },
      { title: "Suba de nível", description: "Ganhe XP, mantenha sua sequência e desbloqueie novos módulos." },
    ],
  },
  features: {
    title: "Tudo o que você precisa em um só lugar",
    subtitle: "Teoria, prática e feedback — sem alternar entre dezenas de fontes dispersas.",
    items: [
      { title: "Aulas estruturadas", description: "Um caminho do básico a estratégias avançadas — passo a passo, sem caos." },
      { title: "Exercícios e testes", description: "Reforce cada tema com prática: testes, estudos de caso e verificação de entendimento." },
      { title: "Mercado virtual", description: "Abra operações em um mercado simulado sem risco de dinheiro real e aprenda com os erros." },
      { title: "Assistente de IA", description: "Faça perguntas, revise suas operações e receba explicações de termos a qualquer momento." },
      { title: "Sequências e motivação", description: "Metas diárias e sequências mantêm o ritmo — como um app de idiomas, mas para trading." },
      { title: "XP e conquistas", description: "Ganhe XP por cada aula concluída e desbloqueie conquistas pelo caminho." },
    ],
  },
  marketPreview: {
    title: "Pratique sem risco",
    subtitle:
      "Uma carteira virtual com dinâmica de mercado realista permite abrir posições long e short, acompanhar o P&L e aprender com erros antes de arriscar capital real.",
    startBalance: "US$ 10.000",
    startBalanceCaption: "saldo virtual inicial",
    positionsCaption: "e posições Short",
  },
  cta: {
    title: "Comece sua jornada de iniciante a trader",
    subtitle: "Grátis. Sem risco. Com estrutura clara em cada etapa.",
    button: "Começar grátis",
  },
  footer: {
    disclaimer: "Plataforma educacional. Não é uma recomendação de investimento.",
  },
  auth: {
    signIn: {
      title: "Bem-vindo de volta",
      subtitle: "Entre para continuar aprendendo.",
      submit: "Entrar",
      submitting: "Entrando…",
      noAccount: "Não tem uma conta?",
      createLink: "Criar uma",
      error: "Email ou senha incorretos.",
    },
    signUp: {
      title: "Comece a aprender",
      subtitle: "Vá de iniciante a trader avançado.",
      nameLabel: "Nome",
      namePlaceholder: "João",
      emailLabel: "Email",
      emailPlaceholder: "you@example.com",
      passwordLabel: "Senha",
      passwordPlaceholder: "Mínimo de 8 caracteres",
      submit: "Criar conta",
      submitting: "Criando conta…",
      haveAccount: "Já tem uma conta?",
      signInLink: "Entrar",
      genericError: "Não foi possível criar a conta.",
    },
    orEmail: "ou com email",
    google: "Continuar com o Google",
  },
  dashboard: {
    nav: {
      learn: "Aprender",
      market: "Mercado",
      charts: "Gráficos",
      profile: "Perfil",
    },
    level: "Nível",
    xp: "XP",
    streakDays: "dias de sequência",
    signOut: "Sair",
  },
  learn: {
    course: "Curso",
    noCourses: "Ainda não há cursos.",
    module: "Módulo",
  },
  lesson: {
    backToPath: "Voltar ao caminho",
    checkYourself: "Teste-se",
    alreadyCompleted: "Aula já concluída",
    completeButton: "Concluir aula",
  },
  market: {
    title: "Mercado Virtual",
    subtitle: "Opere com dados simulados sem risco de dinheiro real.",
    portfolioBalance: "Saldo da carteira",
    amountLabel: "Valor, $",
    long: "Long",
    short: "Short",
    openPositions: "Posições abertas",
    noPositions: "Ainda não há posições abertas.",
    entryPrice: "Entrada",
    closePosition: "Fechar posição",
  },
  charts: {
    title: "Análise de Gráficos",
    subtitle: "Pratique traçar linhas de tendência e níveis diretamente no gráfico.",
    tools: {
      cursor: "Cursor",
      trendline: "Linha de tendência",
      level: "Nível",
      clear: "Limpar desenhos",
    },
    hints: {
      firstPoint: "Clique no primeiro ponto",
      secondPoint: "Clique no segundo ponto",
      clickLevel: "Clique em um nível de preço",
    },
  },
  profile: {
    title: "Perfil",
  },
};

export default pt;
