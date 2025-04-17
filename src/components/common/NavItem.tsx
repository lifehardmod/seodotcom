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
        "flex justify-center items-center text-nowrap min-w-[48px] min-h-[48px] flex-col gap-0 md:gap-1 ",
        "hover:text-green-400 group",
        "text-lg  md:text-2xl",
        isActive
          ? "border-blue-600 text-white font-semibold"
          : "text-gray-200 border-transparent  font-light"
      )}
    >
      {children}
    </Link>
  );
};

export default NavItem;
