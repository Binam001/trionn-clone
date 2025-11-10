import { ChartNoAxesColumn, Menu } from "lucide-react";
import logo from "../assets/logo.svg";
import ThemeSwitcher from "./ThemeSwitcher";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 px-3 md:px-10 lg:px-20 z-10">
      <div className="flex justify-between items-center mt-10">
        <div className="cursor-pointer">
          <a href="#text1">
            <img
              className="w-20 md:w-28 invert dark:invert-0"
              src={logo}
              alt="trionn"
            />
          </a>
        </div>

        <div className="flex gap-4 text-(--foreground)">
          <ThemeSwitcher />
          <button className="p-2 bg-(--icon-bg-color) rounded-full cursor-pointer">
            <ChartNoAxesColumn />
          </button>
        </div>

        <div className="flex items-center gap-4 text-(--foreground)">
          <span className="text-base md:text-xl font-[daysoftype] uppercase**[font-feature-settings:'ss01']** cursor-pointer">
            menu
          </span>
          <div className="p-3 md:p-4 bg-(--icon-bg-color) rounded-full cursor-pointer">
            <Menu />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
