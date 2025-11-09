import { ChartNoAxesColumn, Menu, Moon } from "lucide-react";
import logo from "../assets/logo.svg";
const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 px-20">
      <div className="flex justify-between items-center mt-10">
        <div className="cursor-pointer">
          <img className="w-28 invert" src={logo} alt="trionn" />
        </div>

        <div className="flex gap-4">
          <div className="p-2 bg-(--icon-bg-color) rounded-full cursor-pointer">
            <Moon />
          </div>
          <div className="p-2 bg-(--icon-bg-color) rounded-full cursor-pointer">
            <ChartNoAxesColumn />
          </div>
        </div>

        <div className="flex items-center gap-4">
          <span className="text-xl font-[daysoftype] uppercase**[font-feature-settings:'ss01']** cursor-pointer">
            menu
          </span>
          <div className="p-4 bg-(--icon-bg-color) rounded-full cursor-pointer">
            <Menu />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
