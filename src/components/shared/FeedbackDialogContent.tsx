"use client";

import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

function FeedbackDialogContent({
  open,
  onOpenChange,
  restoreFocus,
}: {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  restoreFocus: () => void;
}) {
  const [feedback, setFeedback] = useState<string>("");
  const [sending, setSending] = useState(false);
  const [error, setError] = useState("");

  async function handleSend() {
    if (!feedback.trim() || sending) {
      return;
    }
    setSending(true);
    setError("");
    try {
      const response = await fetch("/api/feedback", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ feedback }),
      });
      if (!response.ok) throw new Error("Feedback request failed");
      setFeedback("");
      onOpenChange(false);
    } catch {
      setError("전송하지 못했습니다. 잠시 후 다시 시도해주세요.");
    } finally {
      setSending(false);
    }
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent
        className="bg-white text-black"
        onCloseAutoFocus={(event) => {
          event.preventDefault();
          restoreFocus();
        }}
        aria-describedby="feedback-description"
      >
        <DialogHeader>
          <DialogTitle className="text-black">
            안녕하세요. 서주원입니다.
          </DialogTitle>
        </DialogHeader>
        <div
          id="feedback-description"
          className="flex flex-col gap-2 text-sm text-black"
        >
          <span>바쁘신 와중에 포트폴리오를 확인해 주셔서 감사합니다.</span>
          <span>
            채용 과정과는 무관하게, 프론트엔드 개발자 후배의 입장에서 조언을
            구하고자 합니다.
          </span>
          <span>
            짧은 의견이라도 남겨주신다면 앞으로 성장하는 데 큰 도움이 될 것
            같습니다.
          </span>
          <span>부담 없이 작성해 주시면 감사하겠습니다. </span>
        </div>
        <div className="space-y-4">
          <label htmlFor="portfolio-feedback" className="sr-only">
            포트폴리오 피드백
          </label>
          <textarea
            id="portfolio-feedback"
            value={feedback}
            onChange={(e) => setFeedback(e.target.value)}
            className="w-full min-h-[150px] text-black rounded-md border border-input bg-background px-3 py-2 text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
            placeholder="피드백을 입력해주세요..."
          />
          {error && (
            <p role="alert" className="text-sm text-red-700">
              {error}
            </p>
          )}
          <div className="flex justify-end gap-2">
            <button
              onClick={handleSend}
              disabled={sending || !feedback.trim()}
              className="rounded-md bg-brand-primary px-4 py-2 text-sm text-black hover:bg-brand-primary/80 transition-colors"
            >
              {sending ? "전송 중…" : "전송"}
            </button>
            <button
              onClick={() => onOpenChange(false)}
              className="rounded-md text-black border border-input bg-background px-4 py-2 text-sm hover:bg-accent transition-colors"
            >
              잠시 닫아두기
            </button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}

export default FeedbackDialogContent;
