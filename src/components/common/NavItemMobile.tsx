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
        "box-content flex w-full flex-col items-center justify-center gap-2 bg-gray-900 pt-4 pb-3 text-sm",
        "border-t-2",
        isActive
          ? "border-gray-200 text-white"
          : "border-transparent text-gray-200 hover:border-white"
      )}
    >
      {children}
    </Link>
  );
};

export default MobileNavItem;
