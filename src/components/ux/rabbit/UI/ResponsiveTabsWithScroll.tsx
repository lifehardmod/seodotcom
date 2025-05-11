"use client";

import { useState, useRef } from "react";
import Image from "next/image";
interface Tab {
  id: number;
  label: string;
  imageUrl: string;
  detail: React.ReactNode;
}

interface ResponsiveTabsWithScrollProps {
  tabs: Tab[];
}

const ResponsiveTabsWithScroll = ({ tabs }: ResponsiveTabsWithScrollProps) => {
  const [activeTab, setActiveTab] = useState(0);
  const topRef = useRef<HTMLDivElement>(null);

  const handleTabClick = (tabId: number) => {
    setActiveTab(tabId);
    topRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <div ref={topRef} className="flex space-x-2 mb-6">
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
      <div className="w-full aspect-video overflow-auto bg-black/20 rounded-lg">
        <div className="w-full h-full min-h-[400px] p-4">
          <Image
            src={tabs[activeTab].imageUrl}
            alt={`${tabs[activeTab].label} 예시`}
            className="w-full h-auto object-cover rounded-lg"
            width={1920}
            height={1080}
          />
        </div>
      </div>
      <div className="mt-4">{tabs[activeTab].detail}</div>
      <div className="flex space-x-2 mt-6">
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
    </>
  );
};

export default ResponsiveTabsWithScroll;
