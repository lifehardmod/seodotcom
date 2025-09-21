import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";
interface CardProps {
  title: string;
  description: string;
  to: string;
  image: string;
  Tag: string[];
  isUpdated?: boolean;
}

const TagList = ({ tag }: { tag: string }) => {
  return (
    <div className="text-[clamp(0.875rem,2.5vw,1.25rem)] font-normal border border-gray-300 rounded-sm px-4 py-1 mt-2">
      {tag}
    </div>
  );
};

const Card = ({
  title,
  description,
  to,
  image,
  Tag,
  isUpdated = false,
}: CardProps) => {
  return (
    <Link
      href={to}
      className={cn(
        "w-full md:w-full lg:w-full h-auto flex flex-col gap-2 items-center rounded-md p-3 hover:border-gradient hover:border",
        isUpdated && "border-white border"
      )}
    >
      <div className="flex flex-col gap-1">
        <Image
          src={image}
          width={644}
          height={416}
          alt={title}
          className="flex-1 h-auto"
        />
        <div className="flex flex-wrap gap-2">
          {Tag.map((tag) => (
            <TagList key={tag} tag={tag} />
          ))}
        </div>
        <div className="w-full px-2">
          <p className="text-[clamp(1rem,2.5vw,1.5rem)] font-semibold pt-2">
            {title}
          </p>
          <p className="text-[clamp(0.875rem,2.5vw,1.25rem)] font-normal">
            {description}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default Card;
