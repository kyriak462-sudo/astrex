import type { DiagramKey } from "@/components/learn/diagrams";

export type ContentBlock =
  | { type: "paragraph"; text: string }
  | { type: "list"; items: string[] }
  | { type: "diagram"; diagram: DiagramKey; caption?: string };

export function parseLessonContent(content: unknown): ContentBlock[] {
  if (
    content &&
    typeof content === "object" &&
    "blocks" in content &&
    Array.isArray((content as { blocks: unknown }).blocks)
  ) {
    return (content as { blocks: ContentBlock[] }).blocks;
  }
  return [];
}
