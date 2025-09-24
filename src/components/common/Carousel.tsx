"use client";

import { useState } from "react";
import { Lightbox } from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import Image from "next/image";
interface CarouselProps {
  images: (string | React.ReactNode)[];
}

const Carousel = ({ images }: CarouselProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  const nextSlide = () => {
    if (currentIndex === images.length - 1) {
      setCurrentIndex(0);
    } else {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const prevSlide = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1);
    }
  };

  const handleImageClick = () => {
    // 이미지가 문자열인 경우에만 lightbox 열기
    if (typeof images[currentIndex] === "string") {
      setIsLightboxOpen(true);
    }
  };
  const [isLoading, setIsLoading] = useState(true);

  // 문자열 이미지들만 필터링해서 lightbox용 슬라이드 생성
  const imageSlides = images
    .map((img, index) => ({ src: img as string, originalIndex: index }))
    .filter((slide) => typeof slide.src === "string")
    .map((slide) => ({ src: slide.src }));

  // 현재 캐러샐 인덱스에 해당하는 lightbox 인덱스 찾기
  const getCurrentLightboxIndex = () => {
    let lightboxIndex = 0;
    for (let i = 0; i < currentIndex; i++) {
      if (typeof images[i] === "string") {
        lightboxIndex++;
      }
    }
    return lightboxIndex;
  };

  return (
    <div className="relative w-full space-y-6">
      {/* 슬라이드 */}
      <div
        className="relative w-full overflow-hidden rounded-lg bg-white/5 cursor-pointer"
        onClick={handleImageClick}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            handleImageClick();
          }
        }}
      >
        {typeof images[currentIndex] === "string" ? (
          <Image
            src={images[currentIndex] as string}
            alt={images[currentIndex] as string}
            width={1920}
            height={1080}
            sizes="(max-width: 768px) 100vw, 800px"
            className={`object-contain transition-opacity duration-500 ${
              isLoading ? "opacity-0" : "opacity-100"
            }`}
            onLoadingComplete={() => setIsLoading(false)}
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            {images[currentIndex]}
          </div>
        )}
      </div>

      {/* 네비게이션 영역 */}
      <div className="flex items-center justify-center gap-2 sm:gap-4 md:gap-8">
        {/* 이전 버튼 */}
        <button
          onClick={prevSlide}
          className={`px-4 py-2 sm:px-4 md:px-6 rounded-lg text-sm sm:text-base md:text-lg font-medium transition-colors ${
            currentIndex === 0
              ? "bg-white/5 text-white/30 cursor-not-allowed"
              : "bg-white/10 hover:bg-white/20 text-white"
          }`}
          disabled={currentIndex === 0}
        >
          <span className="hidden sm:inline">이전</span>
          <span className="sm:hidden">‹</span>
        </button>

        {/* 인디케이터 */}
        <div className="flex gap-1 sm:gap-2 md:gap-3 px-2">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setCurrentIndex(index);
              }}
              className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all ${
                currentIndex === index
                  ? "bg-white"
                  : "bg-white/30 hover:bg-white/50"
              }`}
            />
          ))}
        </div>
        {/* 다음 버튼 */}
        <button
          onClick={nextSlide}
          className={`px-4 py-2 sm:px-4 md:px-6 rounded-lg text-sm sm:text-base md:text-lg font-medium transition-colors ${
            currentIndex === images.length - 1
              ? "bg-white/5 text-white/30 cursor-not-allowed"
              : "bg-white/10 hover:bg-white/20 text-white"
          }`}
          disabled={currentIndex === images.length - 1}
        >
          <span className="hidden sm:inline">다음</span>
          <span className="sm:hidden">›</span>
        </button>
      </div>
      {/* 라이트박스 */}
      <Lightbox
        open={isLightboxOpen}
        close={() => setIsLightboxOpen(false)}
        slides={imageSlides}
        index={getCurrentLightboxIndex()}
        render={{
          buttonPrev: imageSlides.length <= 1 ? () => null : undefined,
          buttonNext: imageSlides.length <= 1 ? () => null : undefined,
        }}
        carousel={{ finite: true }}
        controller={{ closeOnBackdropClick: true }}
      />
    </div>
  );
};

export default Carousel;
