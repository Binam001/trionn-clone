import { ChartNoAxesColumn, Menu, Moon, Sun } from "lucide-react";
import logo from "../assets/logo.svg";
import { useEffect, useState } from "react";

const getStoredTheme = () => localStorage.getItem("theme");

const getSystemPreference = () =>
  window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";

const Navbar = () => {
  const [theme, setTheme] = useState(() => {
    const stored = getStoredTheme();
    if (stored) return stored;
    return getSystemPreference();
  });

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
  }, [theme]);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

    const handleChange = (e: any) => {
      if (!getStoredTheme()) {
        setTheme(e.matches ? "dark" : "light");
      }
    };

    mediaQuery.addEventListener("change", handleChange);

    return () => {
      mediaQuery.removeEventListener("change", handleChange);
    };
  }, []);

  const toggleTheme = () => {
    setTheme((prev) => {
      const newTheme = prev === "dark" ? "light" : "dark";
      localStorage.setItem("theme", newTheme);
      return newTheme;
    });
  };

  return (
    <nav className="fixed top-0 left-0 right-0 px-3 md:px-10 lg:px-20 z-10">
      <div className="flex justify-between items-center mt-10">
        <div className="cursor-pointer">
          <img
            className="w-20 md:w-28 invert dark:invert-0"
            src={logo}
            alt="trionn"
          />
        </div>

        <div className="flex gap-4 text-(--foreground)">
          <button
            onClick={toggleTheme}
            className="p-2 bg-(--icon-bg-color) rounded-full cursor-pointer"
          >
            {theme === "light" ? <Moon /> : <Sun />}
          </button>
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
