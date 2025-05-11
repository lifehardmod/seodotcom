import Link from "next/link";

interface CardProps {
  title: string;
  description: string;
  to: string;
  image: string;
  Tag: string[];
  isExternal?: boolean;
}

const Card = ({
  title,
  description,
  to,
  image,
  isExternal = false,
}: CardProps) => {
  const cardContent = (
    <div className="flex flex-col gap-2">
      <img src={image} alt={title} className="w-full h-auto" />
      <div className="w-full px-2">
        <p className="text-[clamp(1rem,2.5vw,1.5rem)] font-semibold pt-2">
          {title}
        </p>
        <p className="text-[clamp(0.875rem,2.5vw,1.25rem)] font-normal">
          {description}
        </p>
      </div>
    </div>
  );

  const className = `
    w-full md:w-full lg:w-full
    h-auto flex flex-col gap-2 items-center rounded-md p-2
    hover:border-gradient hover:border
  `;

  if (isExternal) {
    return (
      <a
        href={to}
        className={className}
        target="_blank"
        rel="noopener noreferrer"
      >
        {cardContent}
      </a>
    );
  }

  return (
    <Link href={to} className={className}>
      {cardContent}
    </Link>
  );
};

export default Card;
