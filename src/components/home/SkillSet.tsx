import SkillCard from "./SkillCard";
import { skillList, ToolList } from "@/constant/SkillSetConst";

const SkillSet = () => {
  return (
    <article className="flex flex-col gap-8">
      <article className="flex flex-col gap-4">
        <h2 className="text-xl font-semibold">사용 스킬</h2>
        <ul className="flex flex-wrap gap-4">
          {skillList.map((skill) => (
            <li key={skill.name}>
              <SkillCard name={skill.name} icon={skill.icon} />
            </li>
          ))}
        </ul>
      </article>
      <article className="flex flex-col gap-4">
        <h2 className="text-xl font-semibold">사용 도구</h2>
        <ul className="flex flex-wrap gap-4">
          {ToolList.map((tool) => (
            <li key={tool.name}>
              <SkillCard name={tool.name} icon={tool.icon} />
            </li>
          ))}
        </ul>
      </article>
    </article>
  );
};
export default SkillSet;
