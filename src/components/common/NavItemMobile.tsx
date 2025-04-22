import { cn } from "@/components/shared/lib/utils";
import Link from "next/link";

interface NavItemMobileProps {
  to: string;
  children: React.ReactNode;
  isActive: boolean;
}

const MobileNavItem = ({ to, children, isActive }: NavItemMobileProps) => {
  return (
    <Link
      href={to}
      className={cn(
        "box-content flex w-full flex-col items-center justify-center gap-2 bg-gray-900 pt-3 pb-5 text-lg",
        "border-t-3",
        isActive
          ? "border-green-400 text-green-400 font-semibold"
          : "border-transparent text-gray-200  hover:text-green-400"
      )}
    >
      {children}
    </Link>
  );
};

export default MobileNavItem;
