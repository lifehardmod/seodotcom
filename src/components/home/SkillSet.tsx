import SkillCard from "./SkillCard";
import {
  BackendList,
  FrontendList,
  DevToolList,
  DesignToolList,
  Skill,
} from "@/constant/SkillSetConst";

const BackendSkillSet = () => {
  return (
    <ul className="flex flex-wrap gap-4">
      {BackendList.map((skill: Skill) => (
        <li key={skill.name}>
          <SkillCard name={skill.name} icon={skill.icon} />
        </li>
      ))}
    </ul>
  );
};

const FrontendSkillSet = () => {
  return (
    <ul className="flex flex-wrap gap-4">
      {FrontendList.map((skill: Skill) => (
        <li key={skill.name}>
          <SkillCard name={skill.name} icon={skill.icon} />
        </li>
      ))}
    </ul>
  );
};

const SkillSet = () => {
  return (
    <section className="flex flex-col gap-8">
      <div className="flex flex-col gap-4">
        <h2 className="text-xl font-semibold">프론트엔드</h2>
        <FrontendSkillSet />
      </div>
      <div className="flex flex-col gap-4">
        <h2 className="text-xl font-semibold">디자인</h2>
        <ul className="flex flex-wrap gap-4">
          {DesignToolList.map((tool) => (
            <li key={tool.name}>
              <SkillCard name={tool.name} icon={tool.icon} />
            </li>
          ))}
        </ul>
      </div>
      <div className="flex flex-col gap-4">
        <h2 className="text-xl font-semibold">백엔드</h2>
        <BackendSkillSet />
      </div>
      <div className="flex flex-col gap-4">
        <h2 className="text-xl font-semibold">프로젝트 툴</h2>
        <ul className="flex flex-wrap gap-4">
          {DevToolList.map((tool) => (
            <li key={tool.name}>
              <SkillCard name={tool.name} icon={tool.icon} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};
export default SkillSet;
