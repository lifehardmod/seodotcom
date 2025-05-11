"use client";
import { motion } from "framer-motion";

const HomeMain = () => {
  return (
    <>
      <div className="fixed inset-0 w-screen h-screen overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
          style={{ opacity: 0.2 }}
        >
          <source src="/movies/Mainvideo.webm" type="video/webm" />
        </video>
      </div>
      <div className="relative flex flex-col items-center w-full mt-10 md:px-10 xl:gap-0 gap-6 overflow-hidden">
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="w-full text-[7vw] font-bold -mb-8 caret-transparent"
          style={{ fontSize: "clamp(50px, 7vw, 120px)" }}
        >
          UX/UI 디자이너
        </motion.span>
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="w-full text-[7vw] font-bold -mb-8 caret-transparent"
          style={{ fontSize: "clamp(70px, 7vw, 120px)" }}
        >
          서주원
        </motion.span>
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="w-full text-[7vw] font-bold caret-transparent"
          style={{ fontSize: "clamp(40px, 7vw, 120px)" }}
        >
          포트폴리오입니다.
        </motion.span>
      </div>
    </>
  );
};
export default HomeMain;
