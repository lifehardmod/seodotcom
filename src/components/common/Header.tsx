import { cn } from "../shared/lib/utils";
import MainNav from "./MainNav";

const Header = () => {
  return (
    <div className="border-[2px] border-gradient bg-glass w-fit rounded-full h-fit px-16 py-2 mt-0 md:mt-8">
      <div className="flex flex-col items-center justify-center ">
        <MainNav />
      </div>
      <div className={cn("w-full h-[0.2px] ")}></div>
    </div>
  );
};

export default Header;
