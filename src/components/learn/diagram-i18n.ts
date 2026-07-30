import type { Locale } from "@/i18n/locales";

// Short text labels drawn inside lesson diagrams (SVG). Universal trading jargon
// (RSI, MACD, EMA, SMA, VWAP, ATR, FVG, HH, HL, BOS, Long, Short, Stop-Loss,
// Take-Profit, golden cross, squeeze, expansion, neckline, Order Block,
// buy-side/sell-side liquidity, Open Interest) is deliberately left in English in
// every locale, matching how the lesson prose itself keeps those terms untranslated.
const LABELS = {
  price: {
    ru: "Цена", en: "Price", el: "Τιμή", es: "Precio", de: "Preis", fr: "Prix",
    tr: "Fiyat", pt: "Preço", it: "Prezzo", uk: "Ціна",
  },
  time: {
    ru: "Время", en: "Time", el: "Χρόνος", es: "Tiempo", de: "Zeit", fr: "Temps",
    tr: "Zaman", pt: "Tempo", it: "Tempo", uk: "Час",
  },
  periodHigh: {
    ru: "максимум периода", en: "period high", el: "υψηλό περιόδου", es: "máximo del período",
    de: "Periodenhoch", fr: "plus haut de la période", tr: "periyot yükseği",
    pt: "máximo do período", it: "massimo del periodo", uk: "максимум періоду",
  },
  periodLow: {
    ru: "минимум периода", en: "period low", el: "χαμηλό περιόδου", es: "mínimo del período",
    de: "Periodentief", fr: "plus bas de la période", tr: "periyot düşüğü",
    pt: "mínimo do período", it: "minimo del periodo", uk: "мінімум періоду",
  },
  upperWick: {
    ru: "верхняя тень", en: "upper wick", el: "πάνω σκιά", es: "mecha superior",
    de: "oberer Schatten", fr: "mèche supérieure", tr: "üst fitil",
    pt: "pavio superior", it: "ombra superiore", uk: "верхня тінь",
  },
  bullish: {
    ru: "бычья", en: "bullish", el: "ανοδικό", es: "alcista", de: "bullisch",
    fr: "haussière", tr: "boğa", pt: "altista", it: "rialzista", uk: "бичача",
  },
  bearish: {
    ru: "медвежья", en: "bearish", el: "πτωτικό", es: "bajista", de: "bärisch",
    fr: "baissière", tr: "ayı", pt: "baixista", it: "ribassista", uk: "ведмежа",
  },
  resistance: {
    ru: "сопротивление", en: "resistance", el: "αντίσταση", es: "resistencia",
    de: "Widerstand", fr: "résistance", tr: "direnç", pt: "resistência",
    it: "resistenza", uk: "опір",
  },
  support: {
    ru: "поддержка", en: "support", el: "στήριξη", es: "soporte", de: "Unterstützung",
    fr: "support", tr: "destek", pt: "suporte", it: "supporto", uk: "підтримка",
  },
  volume: {
    ru: "Объём", en: "Volume", el: "Όγκος", es: "Volumen", de: "Volumen",
    fr: "Volume", tr: "Hacim", pt: "Volume", it: "Volume", uk: "Обсяг",
  },
  entry: {
    ru: "Вход", en: "Entry", el: "Είσοδος", es: "Entrada", de: "Einstieg",
    fr: "Entrée", tr: "Giriş", pt: "Entrada", it: "Ingresso", uk: "Вхід",
  },
  exit: {
    ru: "Выход", en: "Exit", el: "Έξοδος", es: "Salida", de: "Ausstieg",
    fr: "Sortie", tr: "Çıkış", pt: "Saída", it: "Uscita", uk: "Вихід",
  },
  risk: {
    ru: "Риск", en: "Risk", el: "Κίνδυνος", es: "Riesgo", de: "Risiko",
    fr: "Risque", tr: "Risk", pt: "Risco", it: "Rischio", uk: "Ризик",
  },
  profit: {
    ru: "Прибыль", en: "Profit", el: "Κέρδος", es: "Beneficio", de: "Gewinn",
    fr: "Profit", tr: "Kâr", pt: "Lucro", it: "Profitto", uk: "Прибуток",
  },
  equalHighs: {
    ru: "равные максимумы", en: "equal highs", el: "ίσα υψηλά", es: "máximos iguales",
    de: "gleiche Hochs", fr: "plus hauts égaux", tr: "eşit tepeler",
    pt: "máximas iguais", it: "massimi uguali", uk: "рівні максимуми",
  },
  flagConsolidation: {
    ru: "флаг (консолидация)", en: "flag (consolidation)", el: "σημαία (ενοποίηση)",
    es: "bandera (consolidación)", de: "Flagge (Konsolidierung)",
    fr: "drapeau (consolidation)", tr: "bayrak (konsolidasyon)",
    pt: "bandeira (consolidação)", it: "bandiera (consolidamento)",
    uk: "прапор (консолідація)",
  },
  continuation: {
    ru: "продолжение", en: "continuation", el: "συνέχεια", es: "continuación",
    de: "Fortsetzung", fr: "continuation", tr: "devam", pt: "continuação",
    it: "continuazione", uk: "продовження",
  },
  higherTfTrend: {
    ru: "общий тренд", en: "overall trend", el: "γενική τάση", es: "tendencia general",
    de: "Gesamttrend", fr: "tendance générale", tr: "genel trend",
    pt: "tendência geral", it: "trend generale", uk: "загальний тренд",
  },
  lowerTfEntry: {
    ru: "точка входа", en: "entry point", el: "σημείο εισόδου", es: "punto de entrada",
    de: "Einstiegspunkt", fr: "point d'entrée", tr: "giriş noktası",
    pt: "ponto de entrada", it: "punto di ingresso", uk: "точка входу",
  },
  reaction: {
    ru: "реакция", en: "reaction", el: "αντίδραση", es: "reacción", de: "Reaktion",
    fr: "réaction", tr: "tepki", pt: "reação", it: "reazione", uk: "реакція",
  },
  stopTriggered: {
    ru: "стоп сработал", en: "stop triggered", el: "το stop ενεργοποιήθηκε",
    es: "stop activado", de: "Stop ausgelöst", fr: "stop déclenché",
    tr: "stop tetiklendi", pt: "stop acionado", it: "stop attivato",
    uk: "стоп спрацював",
  },
  targetReached: {
    ru: "цель достигнута", en: "target reached", el: "ο στόχος επιτεύχθηκε",
    es: "objetivo alcanzado", de: "Ziel erreicht", fr: "objectif atteint",
    tr: "hedefe ulaşıldı", pt: "alvo atingido", it: "obiettivo raggiunto",
    uk: "ціль досягнута",
  },
  sessionOpen: {
    ru: "открытие сессии", en: "session open", el: "άνοιγμα συνεδρίας",
    es: "apertura de sesión", de: "Sitzungsbeginn", fr: "ouverture de séance",
    tr: "seans açılışı", pt: "abertura da sessão", it: "apertura sessione",
    uk: "відкриття сесії",
  },
  sessionClose: {
    ru: "закрытие сессии", en: "session close", el: "κλείσιμο συνεδρίας",
    es: "cierre de sesión", de: "Sitzungsende", fr: "clôture de séance",
    tr: "seans kapanışı", pt: "fecho da sessão", it: "chiusura sessione",
    uk: "закриття сесії",
  },
  severalDays: {
    ru: "несколько дней", en: "several days", el: "αρκετές ημέρες", es: "varios días",
    de: "mehrere Tage", fr: "plusieurs jours", tr: "birkaç gün", pt: "vários dias",
    it: "diversi giorni", uk: "кілька днів",
  },
  exitAfterMonths: {
    ru: "выход спустя месяцы", en: "exit months later", el: "έξοδος μήνες αργότερα",
    es: "salida meses después", de: "Ausstieg Monate später",
    fr: "sortie des mois plus tard", tr: "aylar sonra çıkış",
    pt: "saída meses depois", it: "uscita dopo mesi", uk: "вихід через місяці",
  },
  breakoutImpulse: {
    ru: "пробой + импульс", en: "breakout + impulse", el: "διάσπαση + ορμή",
    es: "ruptura + impulso", de: "Breakout + Impuls", fr: "cassure + impulsion",
    tr: "kırılım + itki", pt: "rompimento + impulso", it: "breakout + impulso",
    uk: "пробій + імпульс",
  },
  meanExample: {
    ru: "среднее (например, MA)", en: "mean (e.g. MA)", el: "μέσος όρος (π.χ. MA)",
    es: "media (p. ej. MA)", de: "Mittelwert (z. B. MA)", fr: "moyenne (par ex. MM)",
    tr: "ortalama (örn. MA)", pt: "média (ex. MA)", it: "media (es. MA)",
    uk: "середнє (напр. MA)",
  },
  overboughtShort: {
    ru: "перекуплено — шорт", en: "overbought — short", el: "υπεραγορά — short",
    es: "sobrecompra — short", de: "überkauft — Short", fr: "surachat — short",
    tr: "aşırı alım — short", pt: "sobrecompra — short", it: "ipercomprato — short",
    uk: "перекуплено — шорт",
  },
  oversoldLong: {
    ru: "перепродано — лонг", en: "oversold — long", el: "υπερπώληση — long",
    es: "sobreventa — long", de: "überverkauft — Long", fr: "survente — long",
    tr: "aşırı satım — long", pt: "sobrevenda — long", it: "ipervenduto — long",
    uk: "перепродано — лонг",
  },
  longsPayShorts: {
    ru: "лонги платят шортам", en: "longs pay shorts", el: "οι long πληρώνουν τους short",
    es: "los longs pagan a los shorts", de: "Longs zahlen an Shorts",
    fr: "les longs paient les shorts", tr: "long'lar short'lara öder",
    pt: "longs pagam shorts", it: "i long pagano gli short",
    uk: "лонги платять шортам",
  },
  shortsPayLongs: {
    ru: "шорты платят лонгам", en: "shorts pay longs", el: "οι short πληρώνουν τους long",
    es: "los shorts pagan a los longs", de: "Shorts zahlen an Longs",
    fr: "les shorts paient les longs", tr: "short'lar long'lara öder",
    pt: "shorts pagam longs", it: "gli short pagano i long",
    uk: "шорти платять лонгам",
  },
  liquidationCascade: {
    ru: "каскад ликвидаций лонгов", en: "long liquidation cascade",
    el: "καταρράκτης ρευστοποιήσεων long", es: "cascada de liquidaciones de longs",
    de: "Kaskade von Long-Liquidationen", fr: "cascade de liquidations de longs",
    tr: "long tasfiye çığı", pt: "cascata de liquidações de longs",
    it: "cascata di liquidazioni long", uk: "каскад ліквідацій лонгів",
  },
  sharpBounce: {
    ru: "резкий отскок", en: "sharp bounce", el: "απότομη αναπήδηση", es: "rebote brusco",
    de: "scharfe Erholung", fr: "rebond brutal", tr: "keskin sıçrama",
    pt: "repique acentuado", it: "rimbalzo brusco", uk: "різкий відскок",
  },
  climaxVolume: {
    ru: "кульминационный объём", en: "climax volume", el: "κορυφαίος όγκος",
    es: "volumen climático", de: "Klimax-Volumen", fr: "volume de climax",
    tr: "doruk hacim", pt: "volume de clímax", it: "volume climax",
    uk: "кульмінаційний обсяг",
  },
  volumeDeltaByCandle: {
    ru: "объёма по свечам", en: "volume by candle",
    el: "όγκου ανά κερί", es: "de volumen por vela",
    de: "Volumen pro Kerze", fr: "de volume par bougie",
    tr: "muma göre hacim", pt: "de volume por vela",
    it: "di volume per candela", uk: "обсягу по свічках",
  },
  newPriceHigh: {
    ru: "новый максимум цены", en: "new price high", el: "νέο υψηλό τιμής",
    es: "nuevo máximo de precio", de: "neues Preishoch", fr: "nouveau plus haut de prix",
    tr: "yeni fiyat zirvesi", pt: "nova máxima de preço", it: "nuovo massimo di prezzo",
    uk: "новий максимум ціни",
  },
  rsiDivergence: {
    ru: "RSI ниже — дивергенция", en: "RSI lower — divergence",
    el: "RSI χαμηλότερο — απόκλιση", es: "RSI más bajo — divergencia",
    de: "RSI niedriger — Divergenz", fr: "RSI plus bas — divergence",
    tr: "RSI daha düşük — uyumsuzluk", pt: "RSI mais baixo — divergência",
    it: "RSI più basso — divergenza", uk: "RSI нижчий — дивергенція",
  },
  spot: {
    ru: "Спот", en: "Spot", el: "Spot", es: "Spot", de: "Spot", fr: "Spot",
    tr: "Spot", pt: "Spot", it: "Spot", uk: "Спот",
  },
  futures: {
    ru: "Фьючерсы", en: "Futures", el: "Futures", es: "Futuros", de: "Futures",
    fr: "Futures", tr: "Vadeli İşlemler", pt: "Futuros", it: "Futures", uk: "Ф'ючерси",
  },
  samePctMove: {
    ru: "Такое же +2% движение цены актива", en: "The same +2% price move of the asset",
    el: "Η ίδια κίνηση τιμής +2% του asset", es: "El mismo movimiento de precio +2% del activo",
    de: "Dieselbe +2%-Preisbewegung des Assets", fr: "Le même mouvement de prix +2 % de l'actif",
    tr: "Varlığın aynı +%2 fiyat hareketi", pt: "O mesmo movimento de preço +2% do ativo",
    it: "Lo stesso movimento di prezzo +2% dell'asset", uk: "Той самий рух ціни +2% активу",
  },
  crossoverUp: {
    ru: "пересечение вверх", en: "crossover up", el: "διασταύρωση προς τα πάνω",
    es: "cruce alcista", de: "Crossover nach oben", fr: "croisement haussier",
    tr: "yukarı kesişim", pt: "cruzamento em alta", it: "incrocio al rialzo",
    uk: "перетин вгору",
  },
  liquidityWord: {
    ru: "ликвидность", en: "liquidity", el: "ρευστότητα", es: "liquidez",
    de: "Liquidität", fr: "liquidité", tr: "likidite", pt: "liquidez",
    it: "liquidità", uk: "ліквідність",
  },
  positionSizeAtRisk: {
    ru: "Размер позиции при риске 1% от депозита", en: "Position size at 1% portfolio risk",
    el: "Μέγεθος θέσης με κίνδυνο 1% του χαρτοφυλακίου",
    es: "Tamaño de posición con riesgo del 1% de la cartera",
    de: "Positionsgröße bei 1 % Portfoliorisiko",
    fr: "Taille de position avec un risque de 1 % du portefeuille",
    tr: "Portföyün %1 riskinde pozisyon büyüklüğü",
    pt: "Tamanho da posição com risco de 1% da carteira",
    it: "Dimensione della posizione con rischio dell'1% del portafoglio",
    uk: "Розмір позиції при ризику 1% від депозиту",
  },
} as const satisfies Record<string, Record<Locale, string>>;

export type LabelKey = keyof typeof LABELS;

export function t(locale: Locale, key: LabelKey): string {
  return LABELS[key][locale] ?? LABELS[key].en;
}
