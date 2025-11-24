import soundBar from "/images/sound-bar.svg";
import animatedSoundBar from "/images/animated-sound-bar.svg";
// import ThemeSwitcher from "./ThemeSwitcher";
import { useEffect, useRef, useState } from "react";
import audio from "/audio/audio.mp3";
import SideMenu from "./section/SideMenu";
import { AnimatePresence, motion } from "framer-motion";
import { darkLogo, lightLogo } from "../constants";
import { useAudio } from "../context/AudioContext";
import { useLocation } from "react-router-dom";
// import { darkLogo, lightLogo } from "../constants";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  // const [theme, setTheme] = useState(() => {
  //   const stored = localStorage.getItem("theme");
  //   if (stored) return stored;
  //   return window.matchMedia("(prefers-color-scheme: dark)").matches
  //     ? "dark"
  //     : "light";
  // });
  // useEffect(() => {
  //   document.documentElement.classList.toggle("dark", theme === "dark");
  // }, [theme]);

  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const SCROLL_THRESHOLD = window.innerHeight - 80;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      const isLandingPage = location.pathname === "/";

      if (isLandingPage) {
        if (currentScrollY > SCROLL_THRESHOLD && !scrolled) {
          setScrolled(true);
        } else if (currentScrollY <= SCROLL_THRESHOLD && scrolled) {
          setScrolled(false);
        }
      } else {
        setScrolled(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, [scrolled, location.pathname]);

  const { isAudioOn, setIsAudioOn } = useAudio();
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    if (!audioRef.current) return;

    if (isAudioOn) {
      audioRef.current.volume = 0.4;
      audioRef.current.play().catch(() => {});
    } else {
      audioRef.current.pause();
    }
  }, [isAudioOn]);

  const controlNavbar = () => {
    if (typeof window !== "undefined") {
      if (window.scrollY > lastScrollY && window.scrollY > 80) {
        // scrolling down
        setIsVisible(false);
      } else {
        // scrolling up
        setIsVisible(true);
      }
      setLastScrollY(window.scrollY);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", controlNavbar);
    return () => window.removeEventListener("scroll", controlNavbar);
  }, [lastScrollY]);

  const curtainVariants = {
    initial: { y: "-100%" },
    animate: { y: 0, transition: { duration: 0.5, ease: "easeInOut" as any } },
    exit: {
      y: "-100%",
      transition: { duration: 0.3, ease: "easeInOut" as any, delay: 0.8 },
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
  const logoSrc = scrolled ? lightLogo : darkLogo;
  const audioBg = scrolled ? "bg-(--background)" : "invert";
  const menuText = scrolled ? "text-(--title-color)" : "text-white";
  const menuBtn = scrolled ? "bg-(--title-color)" : "bg-white";

  return (
    <>
      <nav
        className={`fixed ${
          open
            ? "bg-transparent"
            : scrolled
            ? "bg-white/80 backdrop-blur-3xl"
            : "bg-transparent"
        } w-full top-0 left-0 py-3 px-4 md:px-20 z-60 transition-transform duration-500 ease-in-out mix-blend-colo ${
          isVisible ? "translate-y-0" : "-translate-y-full"
        }
        
        `}
      >
        <div className="flex justify-between items-center">
          <div className="cursor-pointer relative">
            <a href="/" className="">
              <img
                className={`w-18 md:w-24`}
                // src={theme === "light" ? lightLogo : darkLogo}
                src={logoSrc}
                alt="shyam's logo"
              />
            </a>
          </div>

          <div className="flex gap-2 text-(--foreground)">
            {/* <ThemeSwitcher theme={theme} setTheme={setTheme} /> */}
            <button
              onClick={() => setIsAudioOn(!isAudioOn)}
              className={`p-1 rounded-full cursor-pointer
                ${audioBg}`}
            >
              <img
                src={!isAudioOn ? soundBar : animatedSoundBar}
                alt="sound-bar"
                className={`size-6 invert`}
              />
            </button>
            <audio ref={audioRef} src={audio} loop />
          </div>

          <div className="text-(--foreground) ">
            {!open ? (
              <button
                onClick={() => setOpen(true)}
                className="flex items-center gap-4 cursor-pointer uppercase"
              >
                <span className={`${menuText} font-bold`}>menu</span>
                <div className="">
                  {/* <div className="bg-(--icon-bg-color) size-11 rounded-full justify-center flex items-center mx-auto"> */}
                  <div className="w-fit items-end flex gap-1 justify-center flex-col">
                    <div
                      className={`w-6 h-0.5 ${menuBtn} transition-all duration-300`}
                    />
                    <div
                      className={`w-4 h-0.5 ${menuBtn} transition-all duration-300`}
                    />
                  </div>
                </div>
              </button>
            ) : (
              <button
                onClick={() => setOpen(false)}
                className="flex items-center gap-4 cursor-pointer uppercase text-(--background) font-bold"
              >
                close
                <div className="bg-(--background) size-8 rounded-full flex flex-col justify-center items-center mx-auto relative">
                  <div className="absolute w-5 h-0.5 bg-(--title-color) rotate-45 transition-all duration-300" />
                  <div className="absolute w-5 h-0.5 bg-(--title-color) -rotate-45 transition-all duration-300" />
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
              className="absolute top-0 left-0 w-full h-full bg-(--yellow)"
              variants={curtainVariants}
              initial="initial"
              animate="animate"
              exit="exit"
            />

            {/* SIDEMENU (The real menu) */}
            <motion.div
              className="absolute top-0 left-0 w-full h-full bg-red-600 pointer-events-auto"
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
