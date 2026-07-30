"use client";

import { useEffect } from "react";

/** Scrolls the learn path to the first "available" (current) lesson node on load. */
export function ScrollToCurrentLesson() {
  useEffect(() => {
    const target = document.querySelector('[data-lesson-status="available"]');
    target?.scrollIntoView({ block: "center" });
  }, []);

  return null;
}
