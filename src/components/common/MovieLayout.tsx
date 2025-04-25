"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

interface MovieLayoutProps {
  movieLink: string;
  text: React.ReactNode;
}

const MovieLayout = ({ movieLink, text }: MovieLayoutProps) => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const videoOpacity = useTransform(scrollYProgress, [0, 0.5], [0.3, 0]);

  return (
    <div
      ref={containerRef}
      className="relative left-1/2 w-screen -translate-x-1/2"
    >
      <motion.video
        src={movieLink}
        autoPlay
        muted
        loop
        className="w-full object-cover max-h-[500px]"
        initial={{ opacity: 0, scale: 1.2 }}
        whileInView={{ opacity: 0.3, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        style={{ opacity: videoOpacity }}
      />
      <motion.div
        className="absolute top-0 left-0 w-full h-full flex items-center justify-center"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.5 }}
        style={{ opacity }}
      >
        <div>{text}</div>
      </motion.div>
    </div>
  );
};

export default MovieLayout;
