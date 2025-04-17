import { cn } from "../shared/lib/utils";
import MainNav from "./MainNav";

const Header = () => {
  return (
    <div>
      <div className="flex flex-col items-center justify-center min-h-[80px]  border-black">
        <MainNav />
      </div>
      <div className={cn("w-full h-[0.2px] bg-black")}></div>
    </div>
  );
};

export default Header;
