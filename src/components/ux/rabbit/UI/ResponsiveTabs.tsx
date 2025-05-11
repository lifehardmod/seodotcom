"use client";

import { useState, useRef } from "react";

interface Tab {
  id: number;
  label: string;
}

interface ResponsiveTabsProps {
  tabs: Tab[];
}

const ResponsiveTabs = ({ tabs }: ResponsiveTabsProps) => {
  const [activeTab, setActiveTab] = useState(0);
  const topRef = useRef<HTMLDivElement>(null);

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
      <div className="mt-6 w-full h-[800px] overflow-hidden flex items-center justify-center">
        <div className="w-[1200px] h-full">
          <img
            src={`/Rabbit/반응형${activeTab + 1}.gif`}
            alt={`반응형 ${activeTab + 1} 예시`}
            className="w-full h-full object-contain rounded-lg transform scale-140"
          />
        </div>
      </div>
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

export default ResponsiveTabs;
