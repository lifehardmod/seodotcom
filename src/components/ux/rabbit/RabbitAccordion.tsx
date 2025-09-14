"use client";

import { ReactNode, useState } from "react";

interface ContentItem {
  title?: string;
  description?: string;
  image?: string;
  list?: string[];
  component?: ReactNode;
}

interface Section {
  title: string;
  content: ContentItem[];
}

interface RabbitAccordionProps {
  sections: Section[];
}

const RabbitAccordion = ({ sections }: RabbitAccordionProps) => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="w-full sm:px-4 pb-20">
      {/* 탭 헤더 */}
      <div className="flex gap-2 mb-8">
        {sections.map((section, index) => (
          <button
            key={index}
            onClick={() => setActiveTab(index)}
            className={`px-6 py-2 rounded-lg text-lg font-medium transition-all
              ${
                activeTab === index
                  ? "bg-white text-black"
                  : "bg-white/5 hover:bg-white/10"
              }`}
          >
            {section.title}
          </button>
        ))}
      </div>

      {/* 탭 컨텐츠 */}
      <div className="space-y-8">
        {sections[activeTab].content.map((item, index) => (
          <div key={index} className="space-y-4">
            {/* 기본 정보 섹션 */}
            <div className="bg-white/5 backdrop-blur-sm rounded-lg px-4 py-2 sm:p-6">
              {item.title && (
                <h3 className="text-xl sm:text-2xl font-semibold mb-4">
                  {item.title}
                </h3>
              )}
              {item.description && (
                <p className="text-white mb-4 leading-relaxed text-base sm:text-xl">
                  {item.description}
                </p>
              )}
              {item.list && (
                <ul className="list-disc list-inside space-y-2 text-gray-100 text-base sm:text-xl">
                  {item.list.map((listItem, listIndex) => (
                    <li key={listIndex}>{listItem}</li>
                  ))}
                </ul>
              )}
            </div>

            {/* 연결된 컴포넌트 */}
            {item.component && (
              <div className="bg-white/5 backdrop-blur-sm rounded-lg p-6">
                {item.component}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default RabbitAccordion;
