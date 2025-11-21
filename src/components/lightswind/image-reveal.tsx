"use client";

import React, { useState, useEffect } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

import award1 from "/images/award/award1.png";
import award2 from "/images/award/award2.png";
import award3 from "/images/award/award3.png";
import award4 from "/images/award/award4.png";
import award5 from "/images/award/award5.png";
import award6 from "/images/award/award6.png";

interface VisualItem {
  key: number;
  url: string;
  label: any;
}

const visualData: VisualItem[] = [
  {
    key: 1,
    label: (
      <div className="flex items-center flex-col lg:flex-row lg:justify-between">
        <div className="text-3xl">Michelin Guide</div>
        <div className="text-2xl">One Star Selection</div>
      </div>
    ),
    url: award1,
  },
  {
    key: 2,
    label: (
      <div className="flex items-center flex-col lg:flex-row lg:justify-between">
        <div className="text-3xl">James Beard Foundation</div>
        <div className="text-2xl">Best New Restaurant Nominee</div>
      </div>
    ),
    url: award2,
  },
  {
    key: 3,
    label: (
      <div className="flex items-center flex-col lg:flex-row lg:justify-between">
        <div className="text-3xl">Wine Spectator</div>
        <div className="text-2xl">Award of Excellence (3x)</div>
      </div>
    ),
    url: award3,
  },
  {
    key: 4,
    label: (
      <div className="flex items-center flex-col lg:flex-row lg:justify-between">
        <div className="text-3xl">The World's 50 Best</div>
        <div className="text-2xl">51-100 Extended List</div>
      </div>
    ),
    url: award4,
  },
  {
    key: 5,
    label: (
      <div className="flex items-center flex-col lg:flex-row lg:justify-between">
        <div className="text-3xl">Forbes Travel Guide</div>
        <div className="text-2xl">Four Star Rating</div>
      </div>
    ),
    url: award5,
  },
  {
    key: 6,
    label: (
      <div className="flex items-center flex-col lg:flex-row lg:justify-between">
        <div className="text-3xl">AAA Diamond Rating</div>
        <div className="text-2xl">Five Diamond Restaurant</div>
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
        <div>
          {isLargeScreen ? (
            <div
              className="hover:scale-[1.1] hover:w-[90%] transition-all duration-1000 w-[70%] mx-auto"
              onMouseEnter={() => onHoverActivate(item)}
            >
              <div
                key={item.key}
                className="flex justify-between w-full text-(--text-color)"
              >
                <div className="w-full">{item.label}</div>
              </div>
              <hr className="text-(--text-color) text-2xl h-1 w-full my-10" />
            </div>
          ) : (
            <div className="w-[90%] mx-auto">
              <div
                key={item.key}
                className="flex flex-col items-center gap-4 text-(--text-color)"
              >
                <img
                  src={item.url}
                  alt={item.label}
                  className="size-20 rounded-xl"
                />
                <div className="w-full">{item.label}</div>
              </div>
              <hr className="text-(--text-color) text-xl h-1 w-full my-10" />
            </div>
          )}
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
