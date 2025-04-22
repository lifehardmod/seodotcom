import Link from "next/link";
import { cn } from "../shared/lib/utils";

interface NavItemProps {
  to: string;
  children: React.ReactNode;
  isActive: boolean;
}

const NavItem = ({ to, children, isActive }: NavItemProps) => {
  return (
    <Link
      href={to}
      className={cn(
        "flex justify-center items-center text-nowrap min-w-[100px] min-h-[48px] flex-col gap-0 md:gap-1",
        "hover:text-green-400 group",
        "text-lg  md:text-2xl",
        isActive
          ? "text-green-400 font-semibold"
          : "text-gray-200 border-transparent font-light"
      )}
    >
      <span className="relative">
        {children}
        <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-green-400 transition-all duration-300 group-hover:w-full" />
      </span>
    </Link>
  );
};

export default NavItem;
