// Appends a `{ type: "diagram", ... }` block to the end of specific lessons'
// `content` arrays, across all 10 locale files, using the TS AST for safe
// text-splicing (mirrors the approach in shuffle-answers.mjs).
import fs from "node:fs";
import path from "node:path";
import ts from "typescript";

const DIR = path.dirname(new URL(import.meta.url).pathname.replace(/^\/([A-Za-z]:)/, "$1"));
const LOCALES = ["ru", "en", "el", "es", "de", "fr", "tr", "pt", "it", "uk"];

const LESSON_DIAGRAMS = [
  { slug: "chto-takoe-treyding", diagram: "intro-chart", captions: {
    ru: "Так цена актива выглядит на графике", en: "This is what an asset's price looks like on a chart",
    el: "Έτσι φαίνεται η τιμή ενός assets σε ένα γράφημα", es: "Así se ve el precio de un activo en un gráfico",
    de: "So sieht der Preis eines Assets in einem Chart aus", fr: "Voici à quoi ressemble le prix d'un actif sur un graphique",
    tr: "Bir varlığın fiyatı grafikte böyle görünür", pt: "É assim que o preço de um ativo aparece num gráfico",
    it: "Ecco come appare il prezzo di un asset su un grafico", uk: "Так виглядає ціна активу на графіку",
  }},
  { slug: "vidy-rynkov", diagram: "market-types", captions: {
    ru: "Разница в результате при разном плече", en: "Same price move, different outcome by leverage",
    el: "Ίδια κίνηση τιμής, διαφορετικό αποτέλεσμα ανάλογα με τη μόχλευση", es: "El mismo movimiento de precio, resultado distinto según el apalancamiento",
    de: "Gleiche Preisbewegung, unterschiedliches Ergebnis je nach Hebel", fr: "Même mouvement de prix, résultat différent selon l'effet de levier",
    tr: "Aynı fiyat hareketi, kaldıraca göre farklı sonuç", pt: "O mesmo movimento de preço, resultado diferente conforme a alavancagem",
    it: "Stesso movimento di prezzo, risultato diverso in base alla leva", uk: "Той самий рух ціни, різний результат залежно від плеча",
  }},
  { slug: "kak-chitat-grafik", diagram: "chart-anatomy", captions: {
    ru: "Основные элементы ценового графика", en: "The basic elements of a price chart",
    el: "Τα βασικά στοιχεία ενός γραφήματος τιμής", es: "Los elementos básicos de un gráfico de precios",
    de: "Die Grundelemente eines Kurscharts", fr: "Les éléments de base d'un graphique de prix",
    tr: "Bir fiyat grafiğinin temel unsurları", pt: "Os elementos básicos de um gráfico de preços",
    it: "Gli elementi base di un grafico di prezzo", uk: "Основні елементи цінового графіка",
  }},
  { slug: "svechnoy-analiz", diagram: "candlestick-anatomy", captions: {
    ru: "Анатомия японской свечи", en: "Anatomy of a Japanese candlestick",
    el: "Ανατομία ενός ιαπωνικού κεριού", es: "Anatomía de una vela japonesa",
    de: "Anatomie einer japanischen Kerze", fr: "Anatomie d'une bougie japonaise",
    tr: "Bir Japon mumunun anatomisi", pt: "Anatomia de uma vela japonesa",
    it: "Anatomia di una candela giapponese", uk: "Анатомія японської свічки",
  }},
  { slug: "podderzhka-i-soprotivlenie", diagram: "support-resistance", captions: {
    ru: "Пример уровней на графике", en: "An example of levels on a chart",
    el: "Ένα παράδειγμα επιπέδων σε γράφημα", es: "Un ejemplo de niveles en un gráfico",
    de: "Ein Beispiel für Levels in einem Chart", fr: "Un exemple de niveaux sur un graphique",
    tr: "Grafikte seviyelere bir örnek", pt: "Um exemplo de níveis num gráfico",
    it: "Un esempio di livelli su un grafico", uk: "Приклад рівнів на графіку",
  }},
  { slug: "trend-i-ego-struktura", diagram: "trend-basic", captions: {
    ru: "Восходящий тренд на графике", en: "An uptrend on a chart",
    el: "Μια ανοδική τάση σε γράφημα", es: "Una tendencia alcista en un gráfico",
    de: "Ein Aufwärtstrend im Chart", fr: "Une tendance haussière sur un graphique",
    tr: "Grafikte bir yükseliş trendi", pt: "Uma tendência de alta num gráfico",
    it: "Un trend rialzista su un grafico", uk: "Висхідний тренд на графіку",
  }},
  { slug: "obyom-i-likvidnost", diagram: "volume-liquidity", captions: {
    ru: "Объём под ценовым графиком", en: "Volume below the price chart",
    el: "Όγκος κάτω από το γράφημα τιμής", es: "Volumen debajo del gráfico de precios",
    de: "Volumen unter dem Kurschart", fr: "Le volume sous le graphique de prix",
    tr: "Fiyat grafiğinin altında hacim", pt: "Volume abaixo do gráfico de preços",
    it: "Volume sotto il grafico di prezzo", uk: "Обсяг під ціновим графіком",
  }},
  { slug: "risk-menedzhment-osnovy", diagram: "risk-basic", captions: {
    ru: "Стоп-лосс и тейк-профит на графике", en: "Stop-loss and take-profit on a chart",
    el: "Stop-loss και take-profit σε γράφημα", es: "Stop-loss y take-profit en un gráfico",
    de: "Stop-Loss und Take-Profit im Chart", fr: "Stop-loss et take-profit sur un graphique",
    tr: "Grafikte stop-loss ve take-profit", pt: "Stop-loss e take-profit num gráfico",
    it: "Stop-loss e take-profit su un grafico", uk: "Stop-loss і take-profit на графіку",
  }},
  { slug: "skolzyashchie-srednie", diagram: "moving-averages", captions: {
    ru: "Пересечение скользящих средних на графике", en: "A moving-average crossover on a chart",
    el: "Μια διασταύρωση κινητών μέσων όρων σε γράφημα", es: "Un cruce de medias móviles en un gráfico",
    de: "Ein Crossover gleitender Durchschnitte im Chart", fr: "Un croisement de moyennes mobiles sur un graphique",
    tr: "Grafikte hareketli ortalama kesişimi", pt: "Um cruzamento de médias móveis num gráfico",
    it: "Un incrocio di medie mobili su un grafico", uk: "Перетин ковзних середніх на графіку",
  }},
  { slug: "urovni-fibonachchi", diagram: "fibonacci", captions: {
    ru: "Уровни Фибоначчи на графике", en: "Fibonacci levels on a chart",
    el: "Επίπεδα Fibonacci σε γράφημα", es: "Niveles de Fibonacci en un gráfico",
    de: "Fibonacci-Level im Chart", fr: "Les niveaux de Fibonacci sur un graphique",
    tr: "Grafikte Fibonacci seviyeleri", pt: "Níveis de Fibonacci num gráfico",
    it: "Livelli di Fibonacci su un grafico", uk: "Рівні Фібоначчі на графіку",
  }},
  { slug: "patterny-razvorota", diagram: "reversal-patterns", captions: {
    ru: "Паттерн двойной вершины на графике", en: "A double-top pattern on a chart",
    el: "Ένα μοτίβο διπλής κορυφής σε γράφημα", es: "Un patrón de doble techo en un gráfico",
    de: "Ein Double-Top-Muster im Chart", fr: "Un motif de double sommet sur un graphique",
    tr: "Grafikte çift tepe formasyonu", pt: "Um padrão de topo duplo num gráfico",
    it: "Un pattern di doppio massimo su un grafico", uk: "Патерн подвійної вершини на графіку",
  }},
  { slug: "patterny-prodolzheniya", diagram: "continuation-patterns", captions: {
    ru: "Паттерн бычьего флага на графике", en: "A bull flag pattern on a chart",
    el: "Ένα ανοδικό μοτίβο σημαίας σε γράφημα", es: "Un patrón de bandera alcista en un gráfico",
    de: "Ein Bullenflagge-Muster im Chart", fr: "Un motif de drapeau haussier sur un graphique",
    tr: "Grafikte boğa bayrağı formasyonu", pt: "Um padrão de bandeira de alta num gráfico",
    it: "Un pattern di bandiera rialzista su un grafico", uk: "Патерн бичачого прапора на графіку",
  }},
  { slug: "multitaymfreym-analiz", diagram: "multi-timeframe", captions: {
    ru: "Старший и младший таймфреймы рядом", en: "Higher and lower timeframes side by side",
    el: "Μεγαλύτερο και μικρότερο timeframe δίπλα-δίπλα", es: "Marco temporal superior e inferior lado a lado",
    de: "Höherer und niedrigerer Zeitrahmen nebeneinander", fr: "Unité de temps supérieure et inférieure côte à côte",
    tr: "Üst ve alt zaman dilimi yan yana", pt: "Timeframe maior e menor lado a lado",
    it: "Timeframe superiore e inferiore affiancati", uk: "Старший і молодший таймфрейми поруч",
  }},
  { slug: "likvidnost-na-rynke", diagram: "liquidity-types", captions: {
    ru: "Зоны ликвидности на графике", en: "Liquidity zones on a chart",
    el: "Ζώνες ρευστότητας σε γράφημα", es: "Zonas de liquidez en un gráfico",
    de: "Liquiditätszonen im Chart", fr: "Zones de liquidité sur un graphique",
    tr: "Grafikte likidite bölgeleri", pt: "Zonas de liquidez num gráfico",
    it: "Zone di liquidità su un grafico", uk: "Зони ліквідності на графіку",
  }},
  { slug: "risk-reward", diagram: "risk-reward", captions: {
    ru: "Соотношение риска и прибыли на графике", en: "Risk/reward ratio on a chart",
    el: "Αναλογία risk/reward σε γράφημα", es: "Relación riesgo/beneficio en un gráfico",
    de: "Chance-Risiko-Verhältnis im Chart", fr: "Ratio risque/rendement sur un graphique",
    tr: "Grafikte risk/getiri oranı", pt: "Relação risco/retorno num gráfico",
    it: "Rapporto rischio/rendimento su un grafico", uk: "Співвідношення ризику й прибутку на графіку",
  }},
  { slug: "razmer-pozitsii", diagram: "position-size", captions: {
    ru: "Размер позиции в зависимости от стопа", en: "Position size based on stop distance",
    el: "Μέγεθος θέσης ανάλογα με την απόσταση του stop", es: "Tamaño de posición según la distancia del stop",
    de: "Positionsgröße abhängig vom Stop-Abstand", fr: "Taille de position selon la distance du stop",
    tr: "Stop mesafesine göre pozisyon büyüklüğü", pt: "Tamanho da posição conforme a distância do stop",
    it: "Dimensione della posizione in base alla distanza dello stop", uk: "Розмір позиції залежно від відстані стопу",
  }},
  { slug: "stop-loss", diagram: "stop-loss-chart", captions: {
    ru: "Срабатывание стоп-лосса на графике", en: "A stop-loss triggering on a chart",
    el: "Ενεργοποίηση stop-loss σε γράφημα", es: "Un stop-loss activándose en un gráfico",
    de: "Ein auslösender Stop-Loss im Chart", fr: "Déclenchement d'un stop-loss sur un graphique",
    tr: "Grafikte tetiklenen bir stop-loss", pt: "Um stop-loss a ser acionado num gráfico",
    it: "Uno stop-loss che scatta su un grafico", uk: "Спрацювання стоп-лосу на графіку",
  }},
  { slug: "take-profit", diagram: "take-profit-chart", captions: {
    ru: "Срабатывание тейк-профита на графике", en: "A take-profit triggering on a chart",
    el: "Ενεργοποίηση take-profit σε γράφημα", es: "Un take-profit activándose en un gráfico",
    de: "Ein auslösender Take-Profit im Chart", fr: "Déclenchement d'un take-profit sur un graphique",
    tr: "Grafikte tetiklenen bir take-profit", pt: "Um take-profit a ser acionado num gráfico",
    it: "Un take-profit che scatta su un grafico", uk: "Спрацювання тейк-профіту на графіку",
  }},
  { slug: "macd", diagram: "macd", captions: {
    ru: "MACD на графике", en: "MACD on a chart",
    el: "MACD σε γράφημα", es: "MACD en un gráfico",
    de: "MACD im Chart", fr: "Le MACD sur un graphique",
    tr: "Grafikte MACD", pt: "MACD num gráfico",
    it: "MACD su un grafico", uk: "MACD на графіку",
  }},
  { slug: "ema", diagram: "ema", captions: {
    ru: "EMA на ценовом графике", en: "EMA on a price chart",
    el: "EMA σε γράφημα τιμής", es: "EMA en un gráfico de precios",
    de: "EMA im Kurschart", fr: "L'EMA sur un graphique de prix",
    tr: "Fiyat grafiğinde EMA", pt: "EMA num gráfico de preços",
    it: "EMA su un grafico di prezzo", uk: "EMA на ціновому графіку",
  }},
  { slug: "sma", diagram: "sma", captions: {
    ru: "SMA на ценовом графике", en: "SMA on a price chart",
    el: "SMA σε γράφημα τιμής", es: "SMA en un gráfico de precios",
    de: "SMA im Kurschart", fr: "La SMA sur un graphique de prix",
    tr: "Fiyat grafiğinde SMA", pt: "SMA num gráfico de preços",
    it: "SMA su un grafico di prezzo", uk: "SMA на ціновому графіку",
  }},
  { slug: "vwap", diagram: "vwap", captions: {
    ru: "VWAP на внутридневном графике", en: "VWAP on an intraday chart",
    el: "VWAP σε ενδοημερήσιο γράφημα", es: "VWAP en un gráfico intradía",
    de: "VWAP im Intraday-Chart", fr: "Le VWAP sur un graphique intrajournalier",
    tr: "Gün içi grafikte VWAP", pt: "VWAP num gráfico intradiário",
    it: "VWAP su un grafico intraday", uk: "VWAP на внутрішньоденному графіку",
  }},
  { slug: "atr", diagram: "atr", captions: {
    ru: "ATR под ценовым графиком", en: "ATR below a price chart",
    el: "ATR κάτω από γράφημα τιμής", es: "ATR debajo de un gráfico de precios",
    de: "ATR unter einem Kurschart", fr: "L'ATR sous un graphique de prix",
    tr: "Fiyat grafiğinin altında ATR", pt: "ATR abaixo de um gráfico de preços",
    it: "ATR sotto un grafico di prezzo", uk: "ATR під ціновим графіком",
  }},
  { slug: "bollinger-bands", diagram: "bollinger", captions: {
    ru: "Полосы Боллинджера на графике", en: "Bollinger Bands on a chart",
    el: "Bollinger Bands σε γράφημα", es: "Bandas de Bollinger en un gráfico",
    de: "Bollinger-Bänder im Chart", fr: "Les bandes de Bollinger sur un graphique",
    tr: "Grafikte Bollinger Bantları", pt: "Bandas de Bollinger num gráfico",
    it: "Bande di Bollinger su un grafico", uk: "Смуги Боллінджера на графіку",
  }},
  { slug: "volume", diagram: "volume-bars", captions: {
    ru: "Всплеск объёма на графике", en: "A volume spike on a chart",
    el: "Μια αιχμή όγκου σε γράφημα", es: "Un pico de volumen en un gráfico",
    de: "Ein Volumenspike im Chart", fr: "Un pic de volume sur un graphique",
    tr: "Grafikte bir hacim artışı", pt: "Um pico de volume num gráfico",
    it: "Un picco di volume su un grafico", uk: "Сплеск обсягу на графіку",
  }},
  { slug: "delta", diagram: "delta", captions: {
    ru: "Дельта объёма по свечам", en: "Volume delta by candle",
    el: "Delta όγκου ανά κερί", es: "Delta de volumen por vela",
    de: "Volumen-Delta pro Kerze", fr: "Le delta de volume par bougie",
    tr: "Muma göre hacim deltası", pt: "Delta de volume por vela",
    it: "Delta di volume per candela", uk: "Дельта обсягу по свічках",
  }},
  { slug: "open-interest", diagram: "open-interest", captions: {
    ru: "Open Interest вместе с ценой", en: "Open interest alongside price",
    el: "Open interest μαζί με την τιμή", es: "Open interest junto al precio",
    de: "Open Interest neben dem Preis", fr: "L'open interest à côté du prix",
    tr: "Fiyatla birlikte open interest", pt: "Open interest junto ao preço",
    it: "Open interest accanto al prezzo", uk: "Open Interest поруч із ціною",
  }},
  { slug: "funding-rate", diagram: "funding-rate", captions: {
    ru: "Funding Rate на графике", en: "Funding rate on a chart",
    el: "Funding rate σε γράφημα", es: "Funding rate en un gráfico",
    de: "Funding Rate im Chart", fr: "Le funding rate sur un graphique",
    tr: "Grafikte funding rate", pt: "Funding rate num gráfico",
    it: "Funding rate su un grafico", uk: "Funding Rate на графіку",
  }},
  { slug: "liquidations", diagram: "liquidations", captions: {
    ru: "Каскад ликвидаций на графике", en: "A liquidation cascade on a chart",
    el: "Ένας καταρράκτης ρευστοποιήσεων σε γράφημα", es: "Una cascada de liquidaciones en un gráfico",
    de: "Eine Liquidationskaskade im Chart", fr: "Une cascade de liquidations sur un graphique",
    tr: "Grafikte bir tasfiye çığı", pt: "Uma cascata de liquidações num gráfico",
    it: "Una cascata di liquidazioni su un grafico", uk: "Каскад ліквідацій на графіку",
  }},
  { slug: "scalping", diagram: "scalping", captions: {
    ru: "Скальпинг на младшем таймфрейме", en: "Scalping on a lower timeframe",
    el: "Scalping σε μικρότερο timeframe", es: "Scalping en un marco temporal menor",
    de: "Scalping auf einem kleineren Zeitrahmen", fr: "Le scalping sur une unité de temps courte",
    tr: "Küçük bir zaman diliminde scalping", pt: "Scalping num timeframe menor",
    it: "Scalping su un timeframe inferiore", uk: "Скальпінг на молодшому таймфреймі",
  }},
  { slug: "day-trading", diagram: "day-trading", captions: {
    ru: "Сделка в рамках одного дня", en: "A trade within a single day",
    el: "Μια συναλλαγή μέσα σε μία ημέρα", es: "Una operación dentro de un solo día",
    de: "Ein Trade innerhalb eines einzigen Tages", fr: "Une transaction en une seule journée",
    tr: "Tek bir gün içinde bir işlem", pt: "Uma operação dentro de um único dia",
    it: "Un'operazione in un solo giorno", uk: "Угода в межах одного дня",
  }},
  { slug: "swing-trading", diagram: "swing-trading", captions: {
    ru: "Свинг-сделка на несколько дней", en: "A swing trade over several days",
    el: "Μια swing συναλλαγή διάρκειας ημερών", es: "Una operación swing de varios días",
    de: "Ein Swing-Trade über mehrere Tage", fr: "Une transaction swing sur plusieurs jours",
    tr: "Birkaç günlük bir swing işlem", pt: "Uma operação swing de vários dias",
    it: "Un'operazione swing di più giorni", uk: "Свінг-угода на кілька днів",
  }},
  { slug: "position-trading", diagram: "position-trading", captions: {
    ru: "Долгосрочная позиция вдоль тренда", en: "A long-term position along a trend",
    el: "Μια μακροπρόθεσμη θέση κατά μήκος μιας τάσης", es: "Una posición a largo plazo a lo largo de una tendencia",
    de: "Eine langfristige Position entlang eines Trends", fr: "Une position à long terme le long d'une tendance",
    tr: "Bir trend boyunca uzun vadeli pozisyon", pt: "Uma posição de longo prazo ao longo de uma tendência",
    it: "Una posizione di lungo periodo lungo un trend", uk: "Довгострокова позиція вздовж тренду",
  }},
  { slug: "liquidity-sweep-strategiya", diagram: "liquidity-sweep", captions: {
    ru: "Снятие ликвидности как торговая стратегия", en: "Liquidity sweep as a trading strategy",
    el: "Liquidity sweep ως στρατηγική συναλλαγών", es: "Liquidity sweep como estrategia de trading",
    de: "Liquidity Sweep als Handelsstrategie", fr: "Le liquidity sweep comme stratégie de trading",
    tr: "Bir trading stratejisi olarak liquidity sweep", pt: "Liquidity sweep como estratégia de trading",
    it: "Il liquidity sweep come strategia di trading", uk: "Зняття ліквідності як торгова стратегія",
  }},
  { slug: "breakout", diagram: "breakout", captions: {
    ru: "Пробой уровня на графике", en: "A breakout on a chart",
    el: "Ένα breakout σε γράφημα", es: "Un breakout en un gráfico",
    de: "Ein Breakout im Chart", fr: "Un breakout sur un graphique",
    tr: "Grafikte bir breakout", pt: "Um breakout num gráfico",
    it: "Un breakout su un grafico", uk: "Пробій рівня на графіку",
  }},
  { slug: "mean-reversion", diagram: "mean-reversion", captions: {
    ru: "Возврат цены к среднему", en: "Price reverting to the mean",
    el: "Επιστροφή της τιμής στον μέσο όρο", es: "El precio volviendo a la media",
    de: "Rückkehr des Preises zum Mittelwert", fr: "Le retour du prix vers la moyenne",
    tr: "Fiyatın ortalamaya dönüşü", pt: "O preço a regressar à média",
    it: "Il prezzo che ritorna alla media", uk: "Повернення ціни до середнього",
  }},
];

function findLessonNodes(sourceFile, targetSlugs) {
  const results = new Map(); // slug -> node
  function visit(node) {
    if (ts.isObjectLiteralExpression(node)) {
      const slugProp = node.properties.find(
        (p) => p.name && ts.isIdentifier(p.name) && p.name.text === "slug"
      );
      const contentProp = node.properties.find(
        (p) => p.name && ts.isIdentifier(p.name) && p.name.text === "content"
      );
      if (slugProp && contentProp && ts.isPropertyAssignment(slugProp) && ts.isStringLiteral(slugProp.initializer)) {
        const slug = slugProp.initializer.text;
        if (targetSlugs.has(slug) && !results.has(slug)) {
          results.set(slug, node);
        }
      }
    }
    ts.forEachChild(node, visit);
  }
  visit(sourceFile);
  return results;
}

function escapeStr(s) {
  return s.replace(/\\/g, "\\\\").replace(/"/g, '\\"');
}

for (const locale of LOCALES) {
  const filePath = path.join(DIR, `${locale}.ts`);
  const text = fs.readFileSync(filePath, "utf8");
  const source = ts.createSourceFile(filePath, text, ts.ScriptTarget.Latest, true, ts.ScriptKind.TS);

  const targetSlugs = new Set(LESSON_DIAGRAMS.map((l) => l.slug));
  const lessonNodes = findLessonNodes(source, targetSlugs);

  const missing = [...targetSlugs].filter((s) => !lessonNodes.has(s));
  if (missing.length) {
    throw new Error(`${locale}.ts: lessons not found: ${missing.join(", ")}`);
  }

  const replacements = [];

  for (const entry of LESSON_DIAGRAMS) {
    const lessonNode = lessonNodes.get(entry.slug);
    const contentProp = lessonNode.properties.find(
      (p) => p.name && ts.isIdentifier(p.name) && p.name.text === "content"
    );
    const arr = contentProp.initializer;
    const elements = arr.elements;
    const lastEl = elements[elements.length - 1];
    const lastElEnd = lastEl.getEnd();

    const lineStart = text.lastIndexOf("\n", lastEl.getStart()) + 1;
    const indent = text.slice(lineStart, lastEl.getStart());

    let pos = lastElEnd;
    while (text[pos] !== ",") pos++;
    pos++; // position right after the comma

    const caption = entry.captions[locale];
    if (!caption) throw new Error(`Missing caption for ${entry.slug} / ${locale}`);

    const insertText = `\n${indent}{ type: "diagram", diagram: "${entry.diagram}", caption: "${escapeStr(caption)}" },`;
    replacements.push({ pos, text: insertText });
  }

  replacements.sort((a, b) => b.pos - a.pos);
  let newText = text;
  for (const r of replacements) {
    newText = newText.slice(0, r.pos) + r.text + newText.slice(r.pos);
  }

  fs.writeFileSync(filePath, newText, "utf8");
  console.log(`${locale}.ts: inserted ${replacements.length} diagram blocks`);
}

console.log("Done.");
