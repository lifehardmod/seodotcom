import Link from "next/link";
import { cn } from "../../components/shared/lib/utils";

interface NavItemProps {
  to: string;
  children: React.ReactNode;
  isActive: boolean;
  size?: "main" | "sub";
}

const NavItem = ({ to, children, isActive, size = "main" }: NavItemProps) => {
  return (
    <Link
      href={to}
      className={cn(
        "box-content flex items-center gap-2 px-0.5 pb-1 text-nowrap",
        "border-b-2",
        size === "main" ? "text-lg" : "text-base md:text-lg",
        isActive
          ? "border-black text-black"
          : "text-text-disabled border-transparent hover:border-white"
      )}
    >
      {children}
    </Link>
  );
};

export default NavItem;
