import { useEffect, useState, useRef } from "react";
import { useInView } from "framer-motion";
import { motion } from "framer-motion";
import { cn } from "../lib/utils";

interface TypewriterProps {
  text: string | string[];
  speed?: number;
  initialDelay?: number;
  waitTime?: number;
  deleteSpeed?: number;
  loop?: boolean;
  className?: string;
  showCursor?: boolean;
  hideCursorOnType?: boolean;
  cursorChar?: string | React.ReactNode;
  cursorClassName?: string;
}

export function Typewriter({
  text,
  speed = 100,
  initialDelay = 0,
  waitTime = 2000,
  deleteSpeed = 30,
  loop = false,
  className,
  showCursor = true,
  hideCursorOnType = false,
  cursorChar = "|",
  cursorClassName = "ml-1",
}: TypewriterProps) {
  const texts = Array.isArray(text) ? text : [text];
  const ref = useRef(null);

  const isInView = useInView(ref, {
    margin: "-20% 0px",
    once: true,
  });

  const [displayText, setDisplayText] = useState("");
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [isFinished, setIsFinished] = useState(false); // NEW

  const currentText = texts[currentTextIndex];

  useEffect(() => {
    let timeout: number;

    if (!isInView) {
      return;
    }

    // fully finished (for single text & no loop)
    if (!loop && !isDeleting && displayText === currentText) {
      setIsFinished(true);
      return;
    }

    const type = () => {
      if (!isDeleting && displayText.length < currentText.length) {
        timeout = setTimeout(() => {
          setDisplayText(currentText.slice(0, displayText.length + 1));
        }, speed);
      } else if (!isDeleting && displayText.length === currentText.length) {
        // wait before deleting
        if (texts.length > 1) {
          timeout = setTimeout(() => setIsDeleting(true), waitTime);
        }
      } else if (isDeleting && displayText.length > 0) {
        timeout = setTimeout(() => {
          setDisplayText(currentText.slice(0, displayText.length - 1));
        }, deleteSpeed);
      } else if (isDeleting && displayText.length === 0) {
        setIsDeleting(false);
        setCurrentTextIndex((prev) => (prev + 1) % texts.length);
      }
    };

    // apply initial delay only at the start
    if (displayText === "" && !isDeleting && currentTextIndex === 0) {
      timeout = setTimeout(type, initialDelay);
    } else {
      type();
    }

    return () => clearTimeout(timeout);
  }, [
    displayText,
    isDeleting,
    currentTextIndex,
    speed,
    deleteSpeed,
    waitTime,
    currentText,
    loop,
    texts.length,
    initialDelay,
    isInView,
  ]);

  /** Cursor hiding logic */
  const shouldHideCursor =
    hideCursorOnType && // user wants cursor hidden while typing
    !loop &&
    isFinished;

  return (
    <div
      ref={ref}
      className={cn("inline whitespace-pre-wrap tracking-tight", className)}
    >
      <span>{displayText}</span>

      {isInView && showCursor && !shouldHideCursor && (
        <motion.span
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: {
              duration: 0.01,
              repeat: Infinity,
              repeatDelay: 0.5,
              repeatType: "reverse",
            },
          }}
          className={cursorClassName}
        >
          {cursorChar}
        </motion.span>
      )}
    </div>
  );
}
