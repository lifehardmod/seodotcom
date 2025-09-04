import { Skill } from "@/constant/SkillSetConst";
import SkillCard from "./SkillCard";

const SkillCardList = ({
  skills,
  children,
}: {
  skills: Skill[];
  children: React.ReactNode;
}) => {
  return (
    <div>
      <ul className="flex flex-wrap gap-4 sm:justify-start justify-center">
        {skills.map((skill: Skill) => (
          <li key={skill.name}>
            <SkillCard name={skill.name} icon={skill.icon} />
          </li>
        ))}
      </ul>
      <div className="flex flex-col gap-8 mt-8">{children}</div>
    </div>
  );
};

export default SkillCardList;
