"use client";

import React, { useState, useEffect } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

import award1 from "../../assets/images/aboutUs/adesignaward.webp";
import award2 from "../../assets/images/aboutUs/awwwards.webp";
import award3 from "../../assets/images/aboutUs/cssda.webp";
import award4 from "../../assets/images/aboutUs/csswinner.webp";
import award5 from "../../assets/images/aboutUs/cssreel.webp";
import award6 from "../../assets/images/aboutUs/cssguru.webp";

interface VisualItem {
  key: number;
  url: string;
  label: any;
}

const visualData: VisualItem[] = [
  {
    key: 1,
    label: (
      <div className="flex justify-between">
        <div className="text-3xl">A' Design Awards & competition</div>
        <div className="text-2xl">Silver Medal</div>
      </div>
    ),
    url: award1,
  },
  {
    key: 2,
    label: (
      <div className="flex justify-between">
        <div className="text-3xl">AWWWARDS</div>
        <div className="text-2xl">2x - Honnerable Mention</div>
      </div>
    ),
    url: award2,
  },
  {
    key: 3,
    label: (
      <div className="flex justify-between">
        <div className="text-3xl">CSS Design Awards</div>
        <div className="text-2xl">2x - Website of the day</div>
      </div>
    ),
    url: award3,
  },
  {
    key: 4,
    label: (
      <div className="flex justify-between">
        <div className="text-3xl">CSS Winners</div>
        <div className="text-2xl">2x - Website of the day</div>
      </div>
    ),
    url: award4,
  },
  {
    key: 5,
    label: (
      <div className="flex justify-between">
        <div className="text-3xl">CSS Reels</div>
        <div className="text-2xl">Featured of the day</div>
      </div>
    ),
    url: award5,
  },
  {
    key: 6,
    label: (
      <div className="flex justify-between">
        <div className="text-3xl">Web Guru</div>
        <div className="text-2xl">2x - Guru of the day</div>
      </div>
    ),
    url: award6,
  },
];

const ImageReveal: React.FC = () => {
  const [focusedItem, setFocusedItem] = useState<VisualItem | null>(null);
  const [isLargeScreen, setIsLargeScreen] = useState(true);

  const cursorX = useMotionValue(0);
  const cursorY = useMotionValue(0);
  const smoothX = useSpring(cursorX, { stiffness: 300, damping: 40 });
  const smoothY = useSpring(cursorY, { stiffness: 300, damping: 40 });

  useEffect(() => {
    const updateScreen = () => {
      setIsLargeScreen(window.innerWidth >= 768);
    };
    updateScreen();
    window.addEventListener("resize", updateScreen);
    return () => window.removeEventListener("resize", updateScreen);
  }, []);

  const onMouseTrack = (e: React.MouseEvent) => {
    cursorX.set(e.clientX);
    cursorY.set(e.clientY);
  };

  const onHoverActivate = (item: VisualItem) => {
    setFocusedItem(item);
  };

  const onHoverDeactivate = () => {
    setFocusedItem(null);
  };

  return (
    <div
      className="relative mx-auto w-full min-h-fit overflow-hidden"
      onMouseMove={onMouseTrack}
      onMouseLeave={onHoverDeactivate}
    >
      {visualData.map((item) => (
        // <div
        //   key={item.key}
        //   className="p-4 cursor-pointer relative sm:flex items-center justify-between"
        //   onMouseEnter={() => onHoverActivate(item)}
        // >
        //   {!isLargeScreen && (
        //     <img
        //       src={item.url}
        //       className="sm:w-32 sm:h-20 w-full h-52 object-cover rounded-md"
        //       alt={item.label}
        //     />
        //   )}
        //   <h2
        //     className={`newFont uppercase md:text-5xl sm:text-2xl text-xl font-semibold sm:py-6 py-2 leading-[100%] relative transition-colors duration-300 ${
        //       focusedItem?.key === item.key
        //         ? "mix-blend-difference z-20 text-gray-300"
        //         : "text-foreground"
        //     }`}
        //   >
        //     {item.label}
        //   </h2>
        //   {/* <button
        //     className={`sm:block hidden p-4 rounded-full transition-all duration-300 ease-out ${
        //       focusedItem?.key === item.key
        //         ? "mix-blend-difference z-20 bg-white text-black"
        //         : ""
        //     }`}
        //   >
        //     <ArrowIcon className="w-8 h-8" />
        //   </button> */}
        //   <div
        //     className={`h-[2px] dark:bg-white bg-black absolute bottom-0 left-0 transition-all duration-300 ease-linear ${
        //       focusedItem?.key === item.key ? "w-full" : "w-0"
        //     }`}
        //   />
        // </div>

        <div
          className="hover:scale-[1.1] hover:w-[90%] transition-all duration-1000 w-[70%] mx-auto"
          onMouseEnter={() => onHoverActivate(item)}
        >
          <li
            key={item.key}
            className="flex justify-between w-full text-(--text-color)"
          >
            <div className="text-3xl w-full">{item.label}</div>
          </li>
          <hr className="text-(--text-color) h-1 w-full my-10" />
        </div>
      ))}

      {isLargeScreen && focusedItem && (
        <motion.img
          src={focusedItem.url}
          alt={focusedItem.label}
          className="fixed z-30 object-cover w-[300px] h-[400px] rounded-lg pointer-events-none shadow-2xl dark:bg-gray-950 bg-white"
          style={{
            left: smoothX,
            top: smoothY,
            x: "-50%",
            y: "-50%",
          }}
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.5 }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
        />
      )}
    </div>
  );
};

export default ImageReveal;
