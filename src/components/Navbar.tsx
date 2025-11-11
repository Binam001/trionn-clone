import { Menu } from "lucide-react";
import logo from "../assets/logo.svg";
import soundBar from "../assets/sound-bar.svg";
import animatedSoundBar from "../assets/animated-sound-bar.svg";
import ThemeSwitcher from "./ThemeSwitcher";
import { useRef, useState } from "react";
import audio from "../assets/audio/relaxing-afternoon-full-version-relaxing-and-easy-piano-music-112850.mp3";
import SideMenu from "./section/SideMenu";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  const toggleAudio = () => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }

    setIsPlaying(!isPlaying);
  };
  return (
    <nav className="fixed top-0 left-0 right-0 px-3 md:px-10 lg:px-20 z-50">
      <div className="flex justify-between items-center mt-5 lg:mt-10">
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
          <button
            onClick={toggleAudio}
            className="p-1 bg-(--icon-bg-color) rounded-full cursor-pointer"
          >
            <img
              src={!isPlaying ? soundBar : animatedSoundBar}
              alt="sound-bar"
              className="size-8 dark:invert-0 invert"
            />
          </button>
          <audio ref={audioRef} src={audio} />
        </div>

        <div className="flex items-center gap-4 text-(--foreground)">
          {!open && (
            <button
              onClick={() => setOpen(true)}
              className="flex items-center gap-4 text-base md:text-xl font-[daysoftype] uppercase**[font-feature-settings:'ss01']** cursor-pointer"
            >
              menu
              <div className="p-3 md:p-4 bg-(--icon-bg-color) rounded-full cursor-pointer">
                <Menu />
              </div>
            </button>
          )}
        </div>

        <div
          className={`fixed top-0 left-0 h-full w-full bg-(--sideMenu-bg) shadow-lg transition-transform duration-300 
          ${open ? "translate-x-0" : "-translate-x-full"}`}
        >
          {open && <SideMenu setOpen={setOpen} />}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
