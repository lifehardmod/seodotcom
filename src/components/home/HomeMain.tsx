"use client";
import { motion, useReducedMotion } from "framer-motion";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

const texts = ["FrontEnd Developer", "UX/UI Designer"];

export default function HomeMain() {
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const typingSpeed = 150;
  const deletingSpeed = 50;
  const pauseTime = 1000;

  const reduce = useReducedMotion();

  useEffect(() => {
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
      timer = window.setTimeout(() => {
        setDisplayText((prev) =>
          isDeleting ? prev.slice(0, -1) : currentText.slice(0, prev.length + 1)
        );
      }, isDeleting ? deletingSpeed : typingSpeed);
    }

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, currentIndex]);

  return (
    <section className="relative flex flex-col items-center w-full mt-10 xl:gap-0 overflow-hidden">
      {/* 타이핑 효과 영역 */}
      <h2
        className="w-full text-[clamp(30px,6vw,80px)] font-semibold -mb-4 caret-transparent text-brand-primary"
        aria-live="polite"
      >
        {displayText}
        <span
          className={cn("inline-block align-baseline", {
            "animate-blink": !isDeleting && displayText === texts[currentIndex],
          })}
        >
          |
        </span>
      </h2>

      <motion.h1
        initial={{ opacity: 0, y: reduce ? 0 : 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: reduce ? 0 : 0.5, delay: 0.2 }}
        className="w-full text-[clamp(40px,7vw,80px)] font-bold -mb-4 caret-transparent"
      >
        서주원
      </motion.h1>

      <motion.h2
        initial={{ opacity: 0, y: reduce ? 0 : 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: reduce ? 0 : 0.5, delay: 0.4 }}
        className="w-full text-[clamp(40px,7vw,80px)] font-bold caret-transparent"
      >
        포트폴리오입니다.
      </motion.h2>
    </section>
  );
}
