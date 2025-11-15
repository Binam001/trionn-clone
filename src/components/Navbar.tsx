// import logo from "../assets/logo.svg";
import lightLogo from "../assets/Red.png";
import darkLogo from "../assets/White.png";
import soundBar from "../assets/images/sound-bar.svg";
import animatedSoundBar from "../assets/images/animated-sound-bar.svg";
import ThemeSwitcher from "./ThemeSwitcher";
import { useEffect, useRef, useState } from "react";
import audio from "../assets/audio/relaxing-afternoon-full-version-relaxing-and-easy-piano-music-112850.mp3";
import SideMenu from "./section/SideMenu";
import { AnimatePresence, motion } from "framer-motion";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [theme, setTheme] = useState(() => {
    const stored = localStorage.getItem("theme");
    if (stored) return stored;
    return window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";
  });
  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
  }, [theme]);

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

  const curtainVariants = {
    initial: { y: "-100%" },
    animate: { y: 0, transition: { duration: 0.5, ease: "easeInOut" as any } },
    exit: {
      y: "-100%",
      transition: { duration: 0.5, ease: "easeInOut" as any, delay: 0.8 },
    },
  };
  const menuVariants = {
    initial: { y: "-30%", opacity: 0 },
    animate: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5, ease: "easeOut" as any, delay: 0.8 },
    },
    exit: {
      y: "-30%",
      opacity: 0,
      transition: { duration: 0.4, ease: "easeIn" as any },
    },
  };

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 px-3 md:px-10 lg:px-20 z-60">
        <div className="flex justify-between items-center mt-5 lg:mt-[22px]">
          <div className="cursor-pointer">
            <a href="/">
              <img
                className="w-18 md:w-24"
                src={theme === "light" ? lightLogo : darkLogo}
                alt="trionn"
              />
            </a>
          </div>

          <div className="flex gap-2 text-(--foreground)">
            <ThemeSwitcher theme={theme} setTheme={setTheme} />
            <button
              onClick={toggleAudio}
              className="p-1 bg-(--icon-bg-color) rounded-full cursor-pointer"
            >
              <img
                src={!isPlaying ? soundBar : animatedSoundBar}
                alt="sound-bar"
                className="size-6 dark:invert-0 invert"
              />
            </button>
            <audio ref={audioRef} src={audio} />
          </div>

          <div className="flex items-center gap-4 text-(--foreground)">
            {!open ? (
              <button
                onClick={() => setOpen(true)}
                className="flex items-center gap-4 text-sm font-[daysoftype] uppercase**[font-feature-settings:'ss01']** cursor-pointer"
              >
                menu
                <div className="bg-(--icon-bg-color) size-11 rounded-full justify-center flex items-center mx-auto">
                  <div className="w-fit items-end flex gap-1 justify-center flex-col">
                    <div className="w-6 h-0.5 bg-(--text-color) transition-all duration-300" />
                    <div className="w-4 h-0.5 bg-(--text-color) transition-all duration-300" />
                  </div>
                </div>
              </button>
            ) : (
              <button
                onClick={() => setOpen(false)}
                className="flex items-center gap-4 text-sm font-[daysoftype] uppercase**[font-feature-settings:'ss01']** cursor-pointer"
              >
                close
                <div className="bg-(--icon-bg-color) size-11 rounded-full flex flex-col justify-center items-center mx-auto relative">
                  <div className="absolute w-6 h-0.5 bg-(--text-color) rotate-45 transition-all duration-300" />
                  <div className="absolute w-6 h-0.5 bg-(--text-color) -rotate-45 transition-all duration-300" />
                </div>
              </button>
            )}
          </div>
        </div>
      </nav>
      <AnimatePresence>
        {open && (
          <div className="fixed top-0 left-0 w-full h-full z-50 pointer-events-none">
            {/* CURTAIN LAYER */}
            <motion.div
              className="absolute top-0 left-0 w-full h-full bg-(--sideMenu-mask-bg)"
              variants={curtainVariants}
              initial="initial"
              animate="animate"
              exit="exit"
            />

            {/* SIDEMENU (The real menu) */}
            <motion.div
              className="absolute top-0 left-0 w-full h-full bg-(--sideMenu-bg) pointer-events-auto"
              variants={menuVariants}
              initial="initial"
              animate="animate"
              exit="exit"
            >
              <SideMenu setOpen={setOpen} />
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
