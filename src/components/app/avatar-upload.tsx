"use client";

import { useRef, useTransition } from "react";

const MAX_DIMENSION = 256;
const JPEG_QUALITY = 0.8;

function resizeToDataUrl(file: File): Promise<string> {
  return new Promise((resolve, reject) => {
    const img = new Image();
    const objectUrl = URL.createObjectURL(file);
    img.onload = () => {
      URL.revokeObjectURL(objectUrl);
      const scale = Math.max(MAX_DIMENSION / img.width, MAX_DIMENSION / img.height, 1 / 4);
      const size = MAX_DIMENSION;
      const canvas = document.createElement("canvas");
      canvas.width = size;
      canvas.height = size;
      const ctx = canvas.getContext("2d");
      if (!ctx) return reject(new Error("no canvas context"));
      const drawWidth = img.width * scale;
      const drawHeight = img.height * scale;
      ctx.drawImage(
        img,
        (size - drawWidth) / 2,
        (size - drawHeight) / 2,
        drawWidth,
        drawHeight
      );
      resolve(canvas.toDataURL("image/jpeg", JPEG_QUALITY));
    };
    img.onerror = () => {
      URL.revokeObjectURL(objectUrl);
      reject(new Error("failed to load image"));
    };
    img.src = objectUrl;
  });
}

export function AvatarUpload({
  action,
  label,
}: {
  action: (dataUrl: string) => Promise<void>;
  label: string;
}) {
  const inputRef = useRef<HTMLInputElement>(null);
  const [pending, startTransition] = useTransition();

  async function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    e.target.value = "";
    if (!file || !file.type.startsWith("image/")) return;

    try {
      const dataUrl = await resizeToDataUrl(file);
      startTransition(() => {
        action(dataUrl);
      });
    } catch {
      // ignore — user can retry
    }
  }

  return (
    <div>
      <input
        ref={inputRef}
        type="file"
        accept="image/*"
        className="hidden"
        onChange={handleChange}
      />
      <button
        type="button"
        disabled={pending}
        onClick={() => inputRef.current?.click()}
        className="inline-flex h-9 items-center justify-center rounded-lg border border-black/10 px-3.5 text-sm text-neutral-700 transition-colors hover:border-black/25 hover:text-neutral-900 disabled:opacity-50 dark:border-white/10 dark:text-white/70 dark:hover:border-white/25 dark:hover:text-white"
      >
        {label}
      </button>
    </div>
  );
}
