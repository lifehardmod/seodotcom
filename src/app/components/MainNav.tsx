import { NAV_ITEMS } from "@/constant/nav";
import NavItem from "./NavItem";
import { headers } from "next/headers";

const MainNav = async () => {
  const headersList = await headers();
  const currentPath = headersList.get("x-pathname") || "/";

  return (
    <nav className="flex gap-8 pr-4">
      {NAV_ITEMS.map((item) => {
        const isActive = currentPath === item.to;
        console.log(currentPath);

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
