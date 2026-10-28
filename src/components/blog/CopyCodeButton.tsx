"use client";

import { useEffect, useRef, useState } from "react";

export default function CopyCodeButton({ text }: { text: string }) {
  const [state, setState] = useState<"idle" | "copied" | "failed">("idle");
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);
  useEffect(
    () => () => {
      if (timer.current) clearTimeout(timer.current);
    },
    [],
  );

  async function copy() {
    try {
      await navigator.clipboard.writeText(text);
      setState("copied");
    } catch {
      setState("failed");
    }
    if (timer.current) clearTimeout(timer.current);
    timer.current = setTimeout(() => setState("idle"), 2500);
  }

  return (
    <button type="button" className="blog-copy-button" onClick={copy}>
      <span aria-live="polite">
        {state === "copied"
          ? "복사됨"
          : state === "failed"
            ? "복사 실패"
            : "코드 복사"}
      </span>
    </button>
  );
}
