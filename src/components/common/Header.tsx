import { cn } from "@/lib/utils";
import MainNav from "./MainNav";

const Header = () => {
  return (
    <header className="hidden md:flex justify-center fixed top-0 left-0 right-0 z-50 items-center shadow-xl shadow-black bg-black">
      <div className="border-[2px] border-gradient bg-glass rounded-full px-16 py-2 mt-0 md:mb-3 md:mt-6">
        <MainNav />
        <div className={cn("w-full h-[0.2px]")} />
      </div>
    </header>
  );
};
export default Header;
