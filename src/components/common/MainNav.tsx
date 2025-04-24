"use client";

import { NAV_ITEMS } from "@/constant/nav";
import NavItem from "@/components/common/NavItem";
import { usePathname, useSearchParams } from "next/navigation";

const MainNav = () => {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  return (
    <nav className="flex gap-8">
      {NAV_ITEMS.map((item) => {
        const isActive =
          item.to === "/" ? pathname === "/" : pathname.startsWith(item.to);
        return (
          <NavItem key={item.to} to={item.to} isActive={isActive}>
            {item.label}
          </NavItem>
        );
      })}
    </nav>
  );
};

export default MainNav;
