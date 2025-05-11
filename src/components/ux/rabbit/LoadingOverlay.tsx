"use client";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import SignatureLoader from "./SignatureLoader";

interface LoadingOverlayProps {
  isLoading: boolean;
  content?: string | string[];
  onCancel?: () => void;
}

const LoadingOverlay = ({
  isLoading,
  content,
  onCancel,
}: LoadingOverlayProps) => {
  const isArray = Array.isArray(content);
  const [visibleText, setVisibleText] = useState(
    isArray ? content[0] : typeof content === "string" ? content : ""
  );

  useEffect(() => {
    if (!isLoading || !isArray || !content || content.length === 0) return;

    let index = 0;
    setVisibleText(content[0]); // 초기 메시지 설정

    const interval = setInterval(() => {
      index = (index + 1) % content.length;
      setVisibleText(content[index]);
    }, 2000); // 2초마다 메시지 변경

    return () => clearInterval(interval);
  }, [isLoading, content, isArray]);

  if (!isLoading) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-black/50 backdrop-blur-sm">
      <SignatureLoader />
      <div className="relative mt-4 flex h-10 items-center justify-center text-2xl whitespace-nowrap text-white">
        <AnimatePresence mode="wait">
          {visibleText && (
            <motion.p
              key={visibleText}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.5 }}
              className="font-bit absolute text-center"
            >
              {visibleText}
            </motion.p>
          )}
        </AnimatePresence>
      </div>
      {onCancel && (
        <button
          onClick={onCancel}
          className="mt-8 px-6 py-2 bg-white/10 hover:bg-white/20 text-white rounded-lg transition-colors"
        >
          취소
        </button>
      )}
    </div>
  );
};

export default LoadingOverlay;
