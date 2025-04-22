"use client";
import { NAV_ITEMS } from "@/constant/nav";
import { usePathname } from "next/navigation";
import MobileNavItem from "./NavItemMobile";

const MobileNav = () => {
  const pathname = usePathname();

  return (
    <nav className="flex w-full items-center ">
      {NAV_ITEMS.map((item) => (
        <div key={item.to} className="w-full">
          <MobileNavItem
            to={item.to}
            isActive={
              item.to === "/"
                ? pathname === "/"
                : pathname.includes(item.activeLabel)
            }
          >
            {item.label}
          </MobileNavItem>
        </div>
      ))}
    </nav>
  );
};

export default MobileNav;
