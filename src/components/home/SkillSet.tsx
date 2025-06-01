"use client";

import { useState } from "react";
import FrontendSkillSet from "./FrontendSkillSet";
import DevToolSkillSet from "./DevToolSkillSet";
import BackendSkillSet from "./BackendSkillSet";
import DesignSkillSet from "./DesignSkillSet";

const SkillSet = () => {
  const [activeTab, setActiveTab] = useState("design");

  const tabs = [
    { id: "design", label: "디자인" },
    { id: "frontend", label: "프론트엔드" },
    { id: "backend", label: "백엔드" },
    { id: "tools", label: "프로젝트 툴" },
  ];

  const renderActiveTab = () => {
    switch (activeTab) {
      case "design":
        return <DesignSkillSet />;
      case "frontend":
        return <FrontendSkillSet />;
      case "backend":
        return <BackendSkillSet />;
      case "tools":
        return <DevToolSkillSet />;
      default:
        return null;
    }
  };

  return (
    <section className="flex flex-col gap-8">
      <div>
        <span className="tracking-tight text-[clamp(40px,7vw,120px)] font-bold">
          SKILLS
        </span>
        <div className="flex gap-4 border-gray-200">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-4 py-1 text-lg font-semibold transition-colors rounded-sm ${
                activeTab === tab.id
                  ? "border-2 "
                  : "text-gray-200 hover:text-gray-300 border-2 border-gray-600"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>
      <div>{renderActiveTab()}</div>
    </section>
  );
};

export default SkillSet;
