"use client";

import { useState } from "react";
import FrontendSkillSet from "./FrontendSkillSet";
import DevToolSkillSet from "./DevToolSkillSet";
import BackendSkillSet from "./BackendSkillSet";
import DesignSkillSet from "./DesignSkillSet";
import {
  BackendList,
  FrontendList,
  DesignToolList,
  DevToolList,
} from "@/constant/SkillSetConst";
const SkillSet = () => {
  const [activeTab, setActiveTab] = useState("frontend");

  const preloadImages = {
    frontend: FrontendList.map((skill) => skill.icon),
    backend: BackendList.map((skill) => skill.icon),
    design: DesignToolList.map((skill) => skill.icon),
    tools: DevToolList.map((skill) => skill.icon),
  };

  const handleMouseEnter = (tabId: string) => {
    preloadImages[tabId as keyof typeof preloadImages]?.forEach(
      (src: string) => {
        const img = new window.Image();
        img.src = src;
      }
    );
  };

  const tabs = [
    { id: "frontend", label: "프론트엔드" },
    { id: "design", label: "디자인" },
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
              onMouseEnter={() => handleMouseEnter(tab.id)}
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
