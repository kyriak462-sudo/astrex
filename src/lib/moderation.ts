import Anthropic from "@anthropic-ai/sdk";

const client = new Anthropic();

const POLICY = `You are a content moderator for a public post feed on a crypto/trading education platform.
Decide whether the user's post may be published.

Block only:
- Sexual or 18+ content
- Hate speech, harassment, or threats targeting a person or group
- Instructions for illegal activity or violence
- Spam, scams, or phishing links

Allow everything else, including opinions on war, politics, economics, markets, and crypto,
even if blunt or controversial. Ordinary trading/crypto chatter, jokes, and complaints are allowed.

Respond with exactly one word: ALLOW or BLOCK. No explanation.`;

export async function moderatePost(content: string): Promise<boolean> {
  try {
    const message = await client.messages.create({
      model: "claude-opus-5",
      max_tokens: 8,
      system: POLICY,
      messages: [{ role: "user", content }],
    });

    const text = message.content
      .filter((block) => block.type === "text")
      .map((block) => block.text)
      .join("")
      .trim()
      .toUpperCase();

    return text.startsWith("ALLOW");
  } catch {
    return false;
  }
}
