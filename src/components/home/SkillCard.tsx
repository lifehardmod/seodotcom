import React from "react";

interface Skill {
  name: string;
  icon: React.ReactElement;
}

const SkillCard = ({ name, icon }: Skill) => {
  return (
    <div className="flex items-center flex-col gap-1 w-[120px] h-[120px] bg-black border-1 justify-center rounded-md pt-2">
      <div>{icon}</div>
      <p className="font-semibold">{name}</p>
    </div>
  );
};

export default SkillCard;
