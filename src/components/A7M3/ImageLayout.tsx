"use client";

import dynamic from "next/dynamic";
const Lightbox = dynamic(() => import("@/components/common/ImageLightbox"), {
  ssr: false,
});

import { useState } from "react";
import Image from "next/image";

const ImageLayout = () => {
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

  const slides = [
    { src: "/A7M3/1.webp" },
    { src: "/A7M3/2.webp" },
    { src: "/A7M3/3.webp" },
  ];

  const openLightbox = (index: number) => {
    setCurrentSlideIndex(index);
    setIsLightboxOpen(true);
  };

  return (
    <div className="w-full">
      <article className="w-full flex flex-col gap-4 px-4">
        <Image
          src="/A7M3/1.webp"
          alt="A7M3 카메라 UI 개선 프로젝트 자료"
          width={1000}
          height={1000}
          priority
          sizes="(max-width: 767px) calc(100vw - 64px), 1360px"
          className="w-full h-auto object-cover cursor-pointer hover:opacity-90 transition-opacity"
          onClick={() => openLightbox(0)}
        />
        <div className="flex flex-row gap-4 w-full">
          <div className="flex-1">
            <Image
              src="/A7M3/2.webp"
              alt="A7M3 카메라 UI 개선 프로젝트 자료"
              width={1920}
              height={1080}
              sizes="(max-width: 767px) 44vw, 650px"
              className="w-full h-auto object-cover cursor-pointer hover:opacity-90 transition-opacity"
              onClick={() => openLightbox(1)}
            />
          </div>
          <div className="flex-1">
            <Image
              src="/A7M3/3.webp"
              alt="A7M3 카메라 UI 개선 프로젝트 자료"
              width={1920}
              height={1080}
              sizes="(max-width: 767px) 44vw, 650px"
              className="w-full h-auto object-cover cursor-pointer hover:opacity-90 transition-opacity"
              onClick={() => openLightbox(2)}
            />
          </div>
        </div>
      </article>

      {isLightboxOpen && (
        <Lightbox
          open={isLightboxOpen}
          close={() => setIsLightboxOpen(false)}
          slides={slides}
          index={currentSlideIndex}
          carousel={{
            finite: true,
          }}
        />
      )}
    </div>
  );
};

export default ImageLayout;
