"use client";

import { useRef, useState } from "react";
import dynamic from "next/dynamic";
import { LucideMessageSquareShare } from "lucide-react";

const FeedbackDialogContent = dynamic(() => import("./FeedbackDialogContent"), {
  ssr: false,
  loading: () => (
    <p
      role="status"
      className="fixed bottom-36 right-4 z-50 rounded bg-black px-4 py-2 text-white"
    >
      의견 입력창을 불러오는 중…
    </p>
  ),
});

export default function FeedbackDialog() {
  const [open, setOpen] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const trigger = useRef<HTMLButtonElement>(null);

  return (
    <>
      <button
        ref={trigger}
        type="button"
        aria-label="포트폴리오 피드백 남기기"
        aria-haspopup="dialog"
        aria-expanded={open}
        onClick={() => {
          setLoaded(true);
          setOpen(true);
        }}
        className="fixed bottom-20 sm:right-8 right-2 z-50 rounded-full bg-brand-primary p-3 text-black shadow-lg hover:bg-brand-primary/80 transition-colors"
      >
        <LucideMessageSquareShare width={20} height={20} />
      </button>
      {loaded && (
        <FeedbackDialogContent
          open={open}
          onOpenChange={setOpen}
          restoreFocus={() => trigger.current?.focus()}
        />
      )}
    </>
  );
}
