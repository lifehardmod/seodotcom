"use client";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

const texts = ["UX/UI Designer", "FrontEnd Developer"];

const HomeMain = () => {
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const typingSpeed = 150;
  const deletingSpeed = 50;
  const pauseTime = 1000;

  useEffect(() => {
    const currentText = texts[currentIndex];

    if (!isDeleting && displayText === currentText) {
      setTimeout(() => {
        setIsDeleting(true);
      }, pauseTime);
      return;
    }

    if (isDeleting && displayText === "") {
      setIsDeleting(false);
      setCurrentIndex((prev) => (prev + 1) % texts.length);
      return;
    }

    const timer = setTimeout(
      () => {
        if (isDeleting) {
          setDisplayText((prev) => prev.slice(0, -1));
        } else {
          setDisplayText(currentText.slice(0, displayText.length + 1));
        }
      },
      isDeleting ? deletingSpeed : typingSpeed
    );

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, currentIndex]);

  return (
    <>
      <div className="relative flex flex-col items-center w-full mt-10 xl:gap-0 overflow-hidden">
        {/* 타이핑 효과 */}
        <span className="w-full text-[clamp(30px,6vw,80px)] font-semibold -mb-4 caret-transparent text-brand-primary">
          {displayText}
          <span
            className={cn("inline-block align-baseline", {
              "animate-blink":
                !isDeleting && displayText === texts[currentIndex],
            })}
            style={{ color: "currentColor" }}
          >
            |
          </span>
        </span>
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="w-full text-[clamp(40px,7vw,80px)] font-bold -mb-4 caret-transparent"
        >
          서주원
        </motion.span>
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="w-full text-[clamp(40px,7vw,80px)] font-bold caret-transparent"
        >
          포트폴리오입니다.
        </motion.span>
      </div>
    </>
  );
};
export default HomeMain;
