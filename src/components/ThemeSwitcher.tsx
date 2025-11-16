import sun from "../assets/images/sun.svg";
import moon from "../assets/images/moon.svg";

interface Props {
  theme: string;
  setTheme: (theme: string) => void;
}

const ThemeSwitcher = ({ theme, setTheme }: Props) => {
  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    localStorage.setItem("theme", newTheme);
    window.dispatchEvent(new Event("theme-change"));
    setTheme(newTheme);
  };

  return (
    <button onClick={toggleTheme} className="rounded-full cursor-pointer">
      {theme === "light" ? (
        <img src={moon} alt="moon" className="size-8 invert dark:invert-0" />
      ) : (
        <img src={sun} alt="sun" className="size-8 invert dark:invert-0" />
      )}
    </button>
  );
};

export default ThemeSwitcher;
