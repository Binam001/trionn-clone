import { useEffect, useState, useRef } from "react";

interface TypewriterProps {
  text: string;
  audio: HTMLAudioElement;
}

const Typewriter = ({ text, audio }: TypewriterProps) => {
  const [displayedText, setDisplayedText] = useState("");
  const requestRef = useRef<number>(0);

  useEffect(() => {
    if (!audio) return;

    const totalChars = text.length;

    const startTyping = () => {
      const duration = audio.duration || 5; // fallback if metadata not loaded
      let startTime: number;

      const step = (timestamp: number) => {
        if (!startTime) startTime = timestamp;
        const elapsed = (timestamp - startTime) / 1000; // in seconds
        const progress = Math.min(elapsed / duration, 1);
        const chars = Math.floor(progress * totalChars);
        setDisplayedText(text.slice(0, chars));

        if (progress < 1) requestRef.current = requestAnimationFrame(step);
      };

      requestRef.current = requestAnimationFrame(step);
    };

    if (audio.readyState >= 2) startTyping(); // metadata already loaded
    else audio.onloadedmetadata = startTyping;

    return () => cancelAnimationFrame(requestRef.current!);
  }, [text, audio]);

  return <p className="text-white text-lg font-semibold">{displayedText}</p>;
};

export default Typewriter;
