"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

const HomeMain = () => {
  const [currentText, setCurrentText] = useState("UX/UI Designer");
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsVisible(false);
      setTimeout(() => {
        setCurrentText(
          currentText === "UX/UI Designer"
            ? "FrontEnd Developer"
            : "UX/UI Designer"
        );
        setIsVisible(true);
      }, 500);
    }, 3000);

    return () => clearInterval(interval);
  }, [currentText]);

  return (
    <>
      <div className="fixed inset-0 w-screen h-screen overflow-hidden">
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
        <AnimatePresence mode="wait">
          {isVisible && (
            <motion.span
              key={currentText}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="w-full text-[7vw] font-semibold -mb-4 caret-transparent text-brand-primary"
              style={{ fontSize: "clamp(30px, 6vw, 80px)" }}
            >
              {currentText}
            </motion.span>
          )}
        </AnimatePresence>
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
          className="w-full text-[7vw] font-bold  caret-transparent"
          style={{ fontSize: "clamp(40px, 7vw, 80px)" }}
        >
          포트폴리오입니다.
        </motion.span>
      </div>
    </>
  );
};
export default HomeMain;
