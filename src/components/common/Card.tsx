import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";
import Tag from "./Tag";

interface CardProps {
  id: number;
  title: string;
  description: string;
  to: string;
  image: string;
  tags: string[];
  isUpdated?: boolean;
}

const Card = ({
  id,
  title,
  description,
  to,
  image,
  tags,
  isUpdated = false,
}: CardProps) => {
  return (
    <Link
      href={id === 3 ? "https://duduji.site" : to}
      className={cn(
        "w-full md:w-full lg:w-full h-full flex flex-col gap-2 items-center rounded-md p-3 hover:border-gradient hover:border",
        isUpdated && "border-white border"
      )}
    >
      <div className="flex flex-col gap-1 h-full">
        <Image
          src={image}
          width={644}
          height={416}
          alt={title}
          className="flex-1 h-auto"
        />
        <div className="flex flex-col justify-between flex-1">
          <div className="flex flex-wrap gap-2">
            {tags.map((tag) => (
              <Tag key={tag} label={tag} />
            ))}
          </div>
          <div className="w-full px-2 pt-2 pb-1">
            <p className="text-[clamp(1rem,2.5vw,1.5rem)] font-semibold">
              {title}
            </p>
            <p className="text-[clamp(1rem,1.95vw,1.25rem)] font-normal">
              {description}
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Card;
