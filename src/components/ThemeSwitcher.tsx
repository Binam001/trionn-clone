import sun from "../assets/images/sun.svg";
import moon from "../assets/images/moon.svg";
import { useEffect, useState } from "react";

const getStoredTheme = () => localStorage.getItem("theme");

const getSystemPreference = () =>
  window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";

const ThemeSwitcher = () => {
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
    <button onClick={toggleTheme} className="rounded-full cursor-pointer">
      {theme === "light" ? (
        <img src={sun} alt="sun" className="size-10 invert dark:invert-0" />
      ) : (
        <img src={moon} alt="moon" className="size-10 invert dark:invert-0" />
      )}
    </button>
  );
};

export default ThemeSwitcher;
