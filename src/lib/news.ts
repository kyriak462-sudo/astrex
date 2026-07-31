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

const FEEDS = [
  { url: "https://www.coindesk.com/arc/outboundfeeds/rss/", source: "CoinDesk" },
  { url: "https://cointelegraph.com/rss", source: "Cointelegraph" },
  { url: "https://feeds.bbci.co.uk/news/world/rss.xml", source: "BBC World" },
  { url: "https://feeds.bbci.co.uk/news/business/rss.xml", source: "BBC Business" },
  { url: "https://feeds.content.dowjones.io/public/rss/mw_topstories", source: "MarketWatch" },
  { url: "https://www.federalreserve.gov/feeds/press_all.xml", source: "Federal Reserve" },
];

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

async function fetchFeed(feed: { url: string; source: string }): Promise<NewsArticle[]> {
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

        return {
          id: link,
          title: stripHtml(title),
          url: link,
          imageUrl,
          source: feed.source,
          body: stripHtml(description),
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
