"use client";

import { useEffect, useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { LucideMessageSquareShare } from "lucide-react";

function FeedbackDialog() {
  const [open, setOpen] = useState(false);
  const storageKey = "feedback-dismissed";
  const [feedback, setFeedback] = useState<string>("");

  useEffect(() => {
    const isDismissed = localStorage.getItem(storageKey);
    if (!isDismissed) {
      setOpen(true);
    }
  }, []);

  async function handleSubmit() {
    if (!feedback.trim()) {
      return;
    }

    try {
      await fetch("/api/feedback", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ feedback }),
      });
    } catch (error) {
      console.error(error);
    }
  }

  function handleOpenChange(newOpen: boolean) {
    if (!newOpen) {
      localStorage.setItem(storageKey, "true");
    }
    setOpen(newOpen);
  }

  function handleSend() {
    handleSubmit();
    handleOpenChange(false);
  }

  return (
    <Dialog open={open} onOpenChange={handleOpenChange}>
      <DialogTrigger asChild>
        <button className="fixed bottom-20 sm:right-8 right-2 z-50 rounded-full bg-brand-primary p-3 text-black shadow-lg hover:bg-brand-primary/80 transition-colors">
          <LucideMessageSquareShare width={20} height={20} />
        </button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="text-black">
            안녕하세요. 서주원입니다.
          </DialogTitle>
        </DialogHeader>
        <div className="flex flex-col gap-2 text-sm text-black">
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
          <span>새해 복 많이 받으세요.</span>
          <span className="text-gray-500">
            해당 dialog는 오른쪽 하단에 두겠습니다. discord webhook을 이용해
            수집중입니다.
          </span>
        </div>
        <div className="space-y-4">
          <textarea
            value={feedback}
            onChange={(e) => setFeedback(e.target.value)}
            className="w-full min-h-[150px] text-black rounded-md border border-input bg-background px-3 py-2 text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
            placeholder="피드백을 입력해주세요..."
          />
          <div className="flex justify-end gap-2">
            <button
              onClick={handleSend}
              className="rounded-md bg-brand-primary px-4 py-2 text-sm text-black hover:bg-brand-primary/80 transition-colors"
            >
              전송
            </button>
            <button
              onClick={() => handleOpenChange(false)}
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

export default FeedbackDialog;
