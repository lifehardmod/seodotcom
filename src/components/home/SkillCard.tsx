import React from "react";
import Image from "next/image";
interface Skill {
  name: string;
  icon: string;
}

const SkillCard = ({ name, icon }: Skill) => {
  return (
    <div className="flex items-center flex-col gap-3 size-[clamp(95px,14vw,130px)] bg-black border justify-center rounded-md pt-2">
      <Image
        src={icon}
        alt={name}
        width={60}
        height={60}
        className="size-[clamp(36px,7vw,70px)]"
      />
      <p className="text-sm sm:text-base ">{name}</p>
    </div>
  );
};

export default SkillCard;
