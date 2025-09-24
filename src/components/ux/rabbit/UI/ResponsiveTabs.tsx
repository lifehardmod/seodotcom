"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import Lightbox from "yet-another-react-lightbox";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import "yet-another-react-lightbox/styles.css";

interface Tab {
  id: number;
  label: string;
}

interface ResponsiveTabsProps {
  tabs: Tab[];
}

const ResponsiveTabs = ({ tabs }: ResponsiveTabsProps) => {
  const [activeTab, setActiveTab] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);
  const topRef = useRef<HTMLDivElement>(null);

  // 라이트박스용 슬라이드 배열 생성
  const slides = tabs.map((_, index) => ({
    src: `/Rabbit/반응형${index + 1}.webp`,
    alt: `반응형 ${index + 1} 예시`,
    width: 1920,
    height: 1080,
  }));

  const handleTabClick = (tabId: number) => {
    setActiveTab(tabId);
    const element = topRef.current;
    if (element) {
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - 150;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  const handleImageClick = () => {
    setLightboxIndex(activeTab);
    setLightboxOpen(true);
  };

  return (
    <>
      <div ref={topRef} className="flex space-x-2 mb-6 flex-wrap gap-4">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => handleTabClick(tab.id)}
            className={`px-4 py-2 rounded-lg transition-colors ${
              activeTab === tab.id
                ? "bg-white/20 text-white"
                : "bg-white/5 text-gray-400 hover:bg-white/10"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div className="mt-6 w-full relative">
        {/* 반응형 이미지 컨테이너 */}
        <div
          className="relative w-full h-fit overflow-hidden rounded-lg bg-white/5 cursor-pointer group"
          onClick={handleImageClick}
          title="이미지를 클릭하여 확대"
        >
          <Image
            src={`/Rabbit/반응형${activeTab + 1}.webp`}
            alt={`반응형 ${activeTab + 1} 예시`}
            width={1920}
            height={1080}
            className="object-contain transition-all duration-300 ease-in-out group-hover:scale-105"
            priority={activeTab === 0}
          />
          {/* 확대 아이콘 오버레이 */}
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center">
            <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white/10 backdrop-blur-sm rounded-full p-3">
              <svg
                className="w-6 h-6 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* 라이트박스 */}
      <Lightbox
        open={lightboxOpen}
        close={() => setLightboxOpen(false)}
        slides={slides}
        index={lightboxIndex}
        controller={{ closeOnBackdropClick: true }}
        plugins={[Zoom]}
        zoom={{
          maxZoomPixelRatio: 2,
          zoomInMultiplier: 1.5,
          doubleTapDelay: 300,
          doubleClickDelay: 300,
          doubleClickMaxStops: 1,
          keyboardMoveDistance: 50,
          wheelZoomDistanceFactor: 500,
          pinchZoomDistanceFactor: 500,
          scrollToZoom: true,
        }}
        render={{
          buttonPrev: slides.length <= 1 ? () => null : undefined,
          buttonNext: slides.length <= 1 ? () => null : undefined,
        }}
      />
    </>
  );
};

export default ResponsiveTabs;
