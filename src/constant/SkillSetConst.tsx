export interface Skill {
  name: string;
  icon: string;
}

const BackendList: Skill[] = [
  {
    name: "Java",
    icon: "/Icon/SkillSet/Java.svg",
  },
  {
    name: "Springboot",
    icon: "/Icon/SkillSet/Spring.svg",
  },

  {
    name: "MySQL",
    icon: "/Icon/SkillSet/MySQL.svg",
  },
];
const FrontendList: Skill[] = [
  {
    name: "JavaScript",
    icon: "/Icon/SkillSet/JavaScript.svg",
  },
  {
    name: "React",
    icon: "/Icon/SkillSet/React.svg",
  },
  {
    name: "Zustand",
    icon: "/Icon/SkillSet/Zustand.svg",
  },
  {
    name: "TypeScript",
    icon: "/Icon/SkillSet/TypeScript.svg",
  },
  {
    name: "HTML",
    icon: "/Icon/SkillSet/HTML.svg",
  },
  {
    name: "CSS",
    icon: "/Icon/SkillSet/CSS.svg",
  },
];

const DevToolList: Skill[] = [
  {
    name: "Git",
    icon: "/Icon/SkillSet/Git.svg",
  },
  {
    name: "Jira",
    icon: "/Icon/SkillSet/Jira.svg",
  },
];

const DesignToolList: Skill[] = [
  {
    name: "Figma",
    icon: "/Icon/SkillSet/Figma.svg",
  },
  {
    name: "Illustrator",
    icon: "/Icon/SkillSet/Illustrator.svg",
  },
  {
    name: "Photoshop",
    icon: "/Icon/SkillSet/Photoshop.svg",
  },
  {
    name: "AfterEffect",
    icon: "/Icon/SkillSet/Aftereffect.svg",
  },
  {
    name: "PremierePro",
    icon: "/Icon/SkillSet/Premiere.svg",
  },
];
export { BackendList, FrontendList, DevToolList, DesignToolList };
