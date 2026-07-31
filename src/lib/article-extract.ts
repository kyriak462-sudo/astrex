import { JSDOM } from "jsdom";
import { Readability } from "@mozilla/readability";
import DOMPurify from "isomorphic-dompurify";

const MIN_LENGTH = 400;

/**
 * Fetches an article's own page and extracts its full body as sanitized HTML,
 * so it can be rendered in-app instead of just the short RSS summary.
 * Returns null when the source can't be extracted (paywall, bot-blocked, too short) —
 * callers should fall back to the RSS excerpt + a link to the original.
 */
export async function getFullArticle(url: string): Promise<string | null> {
  try {
    const res = await fetch(url, {
      next: { revalidate: 1800 },
      headers: {
        "User-Agent":
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0 Safari/537.36",
      },
    });
    if (!res.ok) return null;

    const html = await res.text();
    const dom = new JSDOM(html, { url });
    const article = new Readability(dom.window.document).parse();
    if (!article?.content || (article.textContent ?? "").trim().length < MIN_LENGTH) return null;

    return DOMPurify.sanitize(article.content, {
      ALLOWED_TAGS: [
        "p", "br", "strong", "em", "b", "i", "u", "a", "ul", "ol", "li",
        "h2", "h3", "h4", "blockquote", "img", "figure", "figcaption", "hr",
      ],
      ALLOWED_ATTR: ["href", "src", "alt", "title"],
    });
  } catch {
    return null;
  }
}
