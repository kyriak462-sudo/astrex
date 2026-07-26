import type { ContentBlock } from "@/lib/lesson-content";
import { DIAGRAMS } from "@/components/learn/diagrams";

export function LessonContentBlocks({ blocks }: { blocks: ContentBlock[] }) {
  return (
    <div className="space-y-6">
      {blocks.map((block, i) => {
        if (block.type === "paragraph") {
          return (
            <p key={i} className="text-sm leading-relaxed text-white/70">
              {block.text}
            </p>
          );
        }

        if (block.type === "list") {
          return (
            <ul key={i} className="space-y-2">
              {block.items.map((item, j) => (
                <li key={j} className="flex gap-2.5 text-sm leading-relaxed text-white/70">
                  <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-white/40" />
                  {item}
                </li>
              ))}
            </ul>
          );
        }

        if (block.type === "diagram") {
          const Diagram = DIAGRAMS[block.diagram];
          if (!Diagram) return null;
          return (
            <div key={i}>
              <Diagram />
              {block.caption && (
                <p className="mt-2 text-xs text-white/35">{block.caption}</p>
              )}
            </div>
          );
        }

        return null;
      })}
    </div>
  );
}
