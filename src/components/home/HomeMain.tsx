"use client";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

const texts = ["FrontEnd Developer"];

export default function HomeMain() {
  const [displayText, setDisplayText] = useState(texts[0]);
  const [isDeleting, setIsDeleting] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const typingSpeed = 150;
  const deletingSpeed = 50;
  const pauseTime = 1000;

  const [reduce, setReduce] = useState(true);

  useEffect(() => {
    const query = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReduce(query.matches);
    update();
    query.addEventListener("change", update);
    return () => query.removeEventListener("change", update);
  }, []);

  useEffect(() => {
    if (reduce) return;
    const currentText = texts[currentIndex];
    let timer: number;

    if (!isDeleting && displayText === currentText) {
      // 단어 완성 후 잠시 대기
      timer = window.setTimeout(() => setIsDeleting(true), pauseTime);
    } else if (isDeleting && displayText === "") {
      // 모두 지운 뒤 다음 단어로 전환
      timer = window.setTimeout(() => {
        setIsDeleting(false);
        setCurrentIndex((prev) => (prev + 1) % texts.length);
      }, 0);
    } else {
      // 타이핑/삭제 진행
      timer = window.setTimeout(
        () => {
          setDisplayText((prev) =>
            isDeleting
              ? prev.slice(0, -1)
              : currentText.slice(0, prev.length + 1),
          );
        },
        isDeleting ? deletingSpeed : typingSpeed,
      );
    }

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, currentIndex, reduce]);

  return (
    <section className="relative flex flex-col items-center w-full mt-10 xl:gap-0 gap-2 overflow-hidden">
      {/* 타이핑 효과 영역 */}
      <h2
        className="w-full min-h-[1.5em] text-[clamp(32px,6vw,80px)] font-semibold -mb-4 caret-transparent text-brand-primary"
        aria-label="FrontEnd Developer"
      >
        <span aria-hidden="true">{reduce ? texts[0] : displayText}</span>
        <span
          className={cn("inline-block align-baseline", {
            "animate-blink": !isDeleting && displayText === texts[currentIndex],
          })}
        >
          |
        </span>
      </h2>

      <h1 className="w-full text-[clamp(36px,7vw,80px)] font-bold -mb-4 caret-transparent">
        서주원
      </h1>

      <h2 className="w-full text-[clamp(36px,7vw,80px)] font-bold caret-transparent">
        포트폴리오입니다.
      </h2>
    </section>
  );
}
