"use client";
import { motion } from "framer-motion";
import { useState, useEffect, useMemo } from "react";
import { cn } from "@/lib/utils";

const HomeMain = () => {
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const texts = useMemo(() => ["UX/UI Designer", "FrontEnd Developer"], []);
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
  }, [displayText, isDeleting, currentIndex, texts]);

  return (
    <>
      <div className="fixed inset-0 w-screen h-screen overflow-hidden">
        {/* 배경 비디오 */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
          style={{ opacity: 0.13 }}
        >
          <source src="/movies/Mainvideo.webm" type="video/webm" />
        </video>
      </div>
      <div className="relative flex flex-col items-center w-full mt-10 md:px-10 xl:gap-0 gap-7 overflow-hidden">
        {/* 타이핑 효과 */}
        <span
          className="w-full text-[7vw] font-semibold -mb-4 caret-transparent text-brand-primary"
          style={{ fontSize: "clamp(30px, 6vw, 80px)" }}
        >
          {displayText}
          <span
            className={cn("inline-block ml-2 align-baseline", {
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
          className="w-full text-[7vw] font-bold -mb-4 caret-transparent"
          style={{ fontSize: "clamp(40px, 7vw, 80px)" }}
        >
          서주원
        </motion.span>
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="w-full text-[7vw] font-bold caret-transparent"
          style={{ fontSize: "clamp(40px, 7vw, 80px)" }}
        >
          포트폴리오입니다.
        </motion.span>
      </div>
    </>
  );
};
export default HomeMain;
