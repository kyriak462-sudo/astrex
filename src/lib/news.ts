import { XMLParser } from "fast-xml-parser";

export type NewsArticle = {
  id: string;
  title: string;
  url: string;
  imageUrl: string | null;
  source: string;
  body: string;
  publishedAt: number;
};

// "general" feeds mix in unrelated human-interest/crime stories, so they're
// filtered down to economy/war-relevant items via TOPIC_KEYWORDS below.
// "crypto"/"business" feeds are inherently on-topic and pass through unfiltered.
const FEEDS: { url: string; source: string; category: "crypto" | "business" | "general" }[] = [
  { url: "https://www.coindesk.com/arc/outboundfeeds/rss/", source: "CoinDesk", category: "crypto" },
  { url: "https://cointelegraph.com/rss", source: "Cointelegraph", category: "crypto" },
  { url: "https://feeds.bbci.co.uk/news/world/rss.xml", source: "BBC World", category: "general" },
  { url: "https://feeds.bbci.co.uk/news/business/rss.xml", source: "BBC Business", category: "business" },
  { url: "https://feeds.content.dowjones.io/public/rss/mw_topstories", source: "MarketWatch", category: "business" },
  { url: "https://www.federalreserve.gov/feeds/press_all.xml", source: "Federal Reserve", category: "business" },
];

const TOPIC_KEYWORDS = [
  "war", "conflict", "military", "strike", "missile", "troops", "ceasefire", "peace deal",
  "iran", "israel", "gaza", "hamas", "ukraine", "russia", "hormuz", "sanction",
  "trump", "tariff", "election", "econom", "inflation", "recession",
  "fed ", "federal reserve", "interest rate", "trade war", "market", "stock", "dollar",
  "currency", "crisis", "nuclear", "embargo", "oil price", "opec", "g7", "g20", "nato",
];

function matchesTopic(title: string, body: string) {
  const text = `${title} ${body}`.toLowerCase();
  return TOPIC_KEYWORDS.some((k) => text.includes(k));
}

const parser = new XMLParser({
  ignoreAttributes: false,
  attributeNamePrefix: "@_",
  textNodeName: "#text",
});

function stripHtml(html: string) {
  return html
    .replace(/<[^>]+>/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

async function fetchFeed(feed: {
  url: string;
  source: string;
  category: "crypto" | "business" | "general";
}): Promise<NewsArticle[]> {
  try {
    const res = await fetch(feed.url, {
      next: { revalidate: 300 },
      headers: { "User-Agent": "Mozilla/5.0 (compatible; AstrexNewsBot/1.0)" },
    });
    if (!res.ok) return [];

    const xml = await res.text();
    const parsed = parser.parse(xml);
    const rawItems = parsed?.rss?.channel?.item;
    const items = Array.isArray(rawItems) ? rawItems : rawItems ? [rawItems] : [];

    return items
      .map((item): NewsArticle | null => {
        const title = typeof item.title === "string" ? item.title : item.title?.["#text"];
        const link = typeof item.link === "string" ? item.link : item.link?.["#text"];
        if (!title || !link) return null;

        const description =
          typeof item.description === "string"
            ? item.description
            : item.description?.["#text"] ?? "";
        const mediaContent = item["media:content"];
        const imageUrl = Array.isArray(mediaContent)
          ? mediaContent[0]?.["@_url"] ?? null
          : mediaContent?.["@_url"] ?? null;
        const pubDate = item.pubDate ? new Date(item.pubDate).getTime() : Date.now();

        const cleanTitle = stripHtml(title);
        const cleanBody = stripHtml(description);
        if (feed.category === "general" && !matchesTopic(cleanTitle, cleanBody)) return null;

        return {
          id: link,
          title: cleanTitle,
          url: link,
          imageUrl,
          source: feed.source,
          body: cleanBody,
          publishedAt: Number.isFinite(pubDate) ? pubDate : Date.now(),
        };
      })
      .filter((a): a is NewsArticle => a !== null);
  } catch {
    return [];
  }
}

export async function getNews(): Promise<NewsArticle[]> {
  const results = await Promise.all(FEEDS.map(fetchFeed));
  return results.flat().sort((a, b) => b.publishedAt - a.publishedAt);
}
