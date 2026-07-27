"use client";

import { useRef, useState, type FormEvent } from "react";

type ChatMessage = { role: "user" | "assistant"; content: string };

export function AiChat({ symbol, symbolName }: { symbol: string; symbolName: string }) {
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  async function sendMessage(e: FormEvent) {
    e.preventDefault();
    const text = input.trim();
    if (!text || loading) return;

    const historyForRequest: ChatMessage[] = [...messages, { role: "user", content: text }];
    setMessages([...historyForRequest, { role: "assistant", content: "" }]);
    setInput("");
    setLoading(true);

    try {
      const res = await fetch("/api/ai-chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ symbol, messages: historyForRequest }),
      });

      if (!res.ok || !res.body) throw new Error("request failed");

      const reader = res.body.getReader();
      const decoder = new TextDecoder();
      let acc = "";

      while (true) {
        const { done, value } = await reader.read();
        if (done) break;
        acc += decoder.decode(value, { stream: true });
        setMessages((prev) => {
          const copy = [...prev];
          copy[copy.length - 1] = { role: "assistant", content: acc };
          return copy;
        });
        scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight });
      }
    } catch {
      setMessages((prev) => {
        const copy = [...prev];
        copy[copy.length - 1] = {
          role: "assistant",
          content: "Не удалось получить ответ. Попробуйте ещё раз.",
        };
        return copy;
      });
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="flex flex-col rounded-2xl border border-black/10 bg-black/[0.02] dark:border-white/10 dark:bg-white/[0.02]">
      <div className="border-b border-black/10 px-5 py-3 dark:border-white/10">
        <p className="text-sm font-medium text-neutral-900 dark:text-white">
          ИИ-аналитик · {symbolName}
        </p>
        <p className="mt-0.5 text-xs text-neutral-500 dark:text-white/40">
          Тренд, уровни поддержки/сопротивления и возможные причины движения цены.
        </p>
      </div>

      <div
        ref={scrollRef}
        className="flex max-h-96 min-h-48 flex-col gap-3 overflow-y-auto px-5 py-4"
      >
        {messages.length === 0 && (
          <p className="text-sm text-neutral-400 dark:text-white/30">
            Например: «Какой сейчас тренд?», «Какие уровни цена не смогла пробить?» или «Почему
            монета сейчас растёт/падает?»
          </p>
        )}
        {messages.map((m, i) => (
          <div
            key={i}
            className={`max-w-[90%] whitespace-pre-wrap rounded-xl px-3.5 py-2 text-sm leading-relaxed ${
              m.role === "user"
                ? "self-end bg-neutral-900 text-white dark:bg-white dark:text-black"
                : "self-start bg-black/[0.04] text-neutral-800 dark:bg-white/[0.05] dark:text-white/85"
            }`}
          >
            {m.content || (m.role === "assistant" && loading ? "…" : "")}
          </div>
        ))}
      </div>

      <form onSubmit={sendMessage} className="flex gap-2 border-t border-black/10 p-3 dark:border-white/10">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Спросите про этот актив..."
          className="h-10 flex-1 rounded-lg border border-black/10 bg-black/[0.02] px-3 text-sm text-neutral-900 outline-none placeholder:text-neutral-400 focus:border-black/30 dark:border-white/10 dark:bg-white/[0.03] dark:text-white dark:placeholder:text-white/25 dark:focus:border-white/30"
        />
        <button
          type="submit"
          disabled={loading || !input.trim()}
          className="h-10 shrink-0 rounded-lg bg-neutral-900 px-4 text-sm font-medium text-white transition-opacity hover:opacity-90 disabled:opacity-40 dark:bg-white dark:text-black"
        >
          →
        </button>
      </form>
    </div>
  );
}
