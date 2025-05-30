import React from "react";
import Image from "next/image";
interface Skill {
  name: string;
  icon: string;
}

const SkillCard = ({ name, icon }: Skill) => {
  return (
    <div className="flex items-center flex-col gap-3 w-[130px] h-[130px] bg-black border-1 justify-center rounded-md pt-2">
      <Image src={icon} alt={name} width={60} height={60} />
      <p className="text-sm">{name}</p>
    </div>
  );
};

export default SkillCard;
