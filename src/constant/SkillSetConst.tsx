import React from "react";
import {
  SiMysql,
  SiReact,
  SiJavascript,
  SiTypescript,
  SiGit,
  SiJira,
  SiFigma,
  SiAdobeillustrator,
  SiAdobephotoshop,
  SiAdobeaftereffects,
  SiAdobepremierepro,
} from "react-icons/si";
import { DiJava } from "react-icons/di";

interface Skill {
  name: string;
  icon: React.ReactElement;
}

const size = 60;
const skillList: Skill[] = [
  {
    name: "Java",
    icon: <DiJava size={size} />,
  },
  {
    name: "MySQL",
    icon: <SiMysql size={size} />,
  },
  {
    name: "React",
    icon: <SiReact size={size} />,
  },
  {
    name: "JavaScript",
    icon: <SiJavascript size={size} />,
  },
  {
    name: "TypeScript",
    icon: <SiTypescript size={size} />,
  },
];

const ToolList: Skill[] = [
  {
    name: "Git",
    icon: <SiGit size={size} />,
  },
  {
    name: "Jira",
    icon: <SiJira size={size} />,
  },
  {
    name: "Figma",
    icon: <SiFigma size={size} />,
  },
  {
    name: "Illustrator",
    icon: <SiAdobeillustrator size={size} />,
  },
  {
    name: "Photoshop",
    icon: <SiAdobephotoshop size={size} />,
  },
  {
    name: "AfterEffect",
    icon: <SiAdobeaftereffects size={size} />,
  },
  {
    name: "PremierePro",
    icon: <SiAdobepremierepro size={size} />,
  },
];

export { skillList, ToolList };
