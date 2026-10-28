"use client";

import { useState, useRef, useCallback } from "react";
import Image from "next/image";

interface RabbitCarouselProps {
  images: (string | React.ReactNode)[];
  enableScroll?: boolean;
}

const RabbitCarousel = ({
  images,
  enableScroll = true,
}: RabbitCarouselProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);

  const scrollToCarousel = useCallback(() => {
    if (!enableScroll || !carouselRef.current) return;

    const rect = carouselRef.current.getBoundingClientRect();
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const targetPosition = rect.top + scrollTop - 200;
    window.scrollTo({
      top: targetPosition,
      behavior: "smooth",
    });
  }, [enableScroll]);

  const nextSlide = () => {
    if (currentIndex === images.length - 1) {
      setCurrentIndex(0);
    } else {
      setCurrentIndex(currentIndex + 1);
    }
    scrollToCarousel();
  };

  const prevSlide = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1);
      scrollToCarousel();
    }
  };

  const renderSlide = (slide: string | React.ReactNode) => {
    if (typeof slide === "string") {
      return (
        <Image
          src={slide}
          alt={`Slide ${currentIndex + 1}`}
          width={1920}
          height={1080}
          className="w-full h-auto object-contain"
          sizes="(max-width: 767px) calc(100vw - 64px), 1200px"
        />
      );
    }
    return (
      <div className="w-full flex items-center justify-center">{slide}</div>
    );
  };

  return (
    <div ref={carouselRef} className="relative w-full space-y-6">
      {/* 슬라이드 */}
      <div className="relative w-full overflow-hidden rounded-lg bg-white/5">
        {typeof images[currentIndex] === "string"
          ? renderSlide(images[currentIndex])
          : images.map((slide, i) => (
              <div key={i} hidden={i !== currentIndex}>
                {renderSlide(slide)}
              </div>
            ))}
      </div>

      {/* 네비게이션 영역 */}
      <div className="flex items-center justify-center gap-2 sm:gap-8">
        {/* 이전 버튼 */}
        <button
          onClick={prevSlide}
          className={`px-6 py-2 rounded-lg text-lg font-medium transition-colors ${
            currentIndex === 0
              ? "bg-white/5 text-white/30 cursor-not-allowed"
              : "bg-white/10 hover:bg-white/20 text-white"
          }`}
          disabled={currentIndex === 0}
        >
          이전
        </button>

        {/* 인디케이터 */}
        <div className="flex max-w-full flex-wrap justify-center gap-2">
          {images.map((_, index) => (
            <button
              key={index}
              aria-label={`${index + 1}번째 슬라이드`}
              aria-current={currentIndex === index ? "true" : undefined}
              onClick={() => {
                setCurrentIndex(index);
                scrollToCarousel();
              }}
              className={`w-6 h-6 shrink-0 rounded-full border-[6px] border-transparent bg-clip-content transition-all ${
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
          className={`px-6 py-2 rounded-lg text-lg font-medium transition-colors ${
            currentIndex === images.length - 1
              ? "bg-white/5 text-white/30 cursor-not-allowed"
              : "bg-white/10 hover:bg-white/20 text-white"
          }`}
          disabled={currentIndex === images.length - 1}
        >
          다음
        </button>
      </div>
    </div>
  );
};

export default RabbitCarousel;
