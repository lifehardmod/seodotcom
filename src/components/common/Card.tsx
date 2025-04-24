import Link from "next/link";

interface CardProps {
  name: string;
  to: string;
  image: string;
}

const Card = ({ name, to, image }: CardProps) => {
  return (
    <Link
      href={to}
      className="w-fit h-fit  shadow-sm flex flex-col gap-2 shadow-white"
    >
      <img src={image} alt={name} width={384} height={216} />
      <p className="text-center text-lg font-semibold">{name}</p>
    </Link>
  );
};

export default Card;
