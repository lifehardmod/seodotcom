"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const media: Record<string, string> = {
  "/movies/Mainvideo.webm": "home",
  "/movies/UX_Title.webm": "projects",
  "/movies/Rabbit_Title.webm": "rabbit",
  "/movies/MIMO_Title.webm": "mimo",
  "/Assembly/Assembly_Title.webm": "assembly",
};

export default function DecorativeVideo({
  src,
  opacity = 0.3,
}: {
  src: string;
  opacity?: number;
}) {
  const container = useRef<HTMLDivElement>(null);
  const video = useRef<HTMLVideoElement>(null);
  const [autoPlay, setAutoPlay] = useState(false);
  const [manualPlay, setManualPlay] = useState<boolean | null>(null);
  const [visible, setVisible] = useState(false);
  const [playing, setPlaying] = useState(false);
  const [ready, setReady] = useState(false);
  const name = media[src];
  const enabled = manualPlay ?? autoPlay;
  const active = enabled && visible;

  useEffect(() => {
    const query = window.matchMedia(
      "(min-width: 768px) and (prefers-reduced-motion: no-preference)",
    );
    const connection = (
      navigator as Navigator & {
        connection?: { saveData?: boolean; effectiveType?: string };
      }
    ).connection;
    const update = () =>
      setAutoPlay(
        query.matches &&
          !connection?.saveData &&
          !["slow-2g", "2g"].includes(connection?.effectiveType ?? ""),
      );
    update();
    query.addEventListener("change", update);
    let inView = false;
    const updateVisibility = () => setVisible(inView && !document.hidden);
    const observer = new IntersectionObserver(([entry]) => {
      inView = entry.isIntersecting;
      updateVisibility();
    });
    if (container.current) observer.observe(container.current);
    document.addEventListener("visibilitychange", updateVisibility);
    return () => {
      observer.disconnect();
      query.removeEventListener("change", update);
      document.removeEventListener("visibilitychange", updateVisibility);
    };
  }, []);

  useEffect(() => {
    const element = video.current;
    if (!element) return;
    if (active) element.play().catch(() => setPlaying(false));
    else element.pause();
  }, [active]);

  return (
    <div ref={container} className="absolute inset-0 overflow-hidden">
      <div className="absolute inset-0" style={{ opacity }} aria-hidden="true">
        <Image
          src={`/movies/optimized/${name}.webp`}
          alt=""
          fill
          sizes="100vw"
          priority
          fetchPriority="high"
          className="object-cover"
        />
        {active && (
          <video
            ref={video}
            src={`/movies/optimized/${name}.mp4`}
            muted
            loop
            playsInline
            autoPlay
            preload="none"
            className="absolute inset-0 h-full w-full object-cover"
            style={{ opacity: ready ? 1 : 0 }}
            onLoadedData={() => setReady(true)}
            onPlay={() => setPlaying(true)}
            onPause={() => setPlaying(false)}
            onError={() => {
              setReady(false);
              setPlaying(false);
            }}
          />
        )}
      </div>
      <button
        type="button"
        onClick={() => setManualPlay(!enabled)}
        aria-label={playing ? "배경 영상 일시정지" : "배경 영상 재생"}
        className="pointer-events-auto absolute bottom-3 right-4 z-10 rounded border border-white/30 bg-black/70 px-3 py-2 text-xs text-white hover:bg-black focus-visible:outline-2 focus-visible:outline-offset-2"
      >
        {enabled ? "영상 정지" : "영상 재생"}
      </button>
    </div>
  );
}
