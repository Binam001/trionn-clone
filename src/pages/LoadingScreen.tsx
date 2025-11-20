import { useEffect, useState } from "react";
import { useAudio } from "../context/AudioContext";
import { AnimatePresence, motion } from "framer-motion";
import Typewriter from "../components/Typewriter";
import { ArrowRight } from "lucide-react";

const LoadingScreen = () => {
  const [showPopup, setShowPopup] = useState(false);
  const { setIsAudioOn } = useAudio();
  const [startVoice, setStartVoice] = useState(false);
  // const [skip, setSkip] = useState(false);
  const [audio] = useState(new Audio("/audio/intro-voice-over.mp3"));

  useEffect(() => {
    const visited = localStorage.getItem("visitedBefore");
    if (!visited) {
      setShowPopup(true);
    }
  }, []);

  const handleChoice = (choice: boolean) => {
    setIsAudioOn(choice);
    localStorage.setItem("visitedBefore", "true");
    if (choice) {
      setStartVoice(true);
      audio.play();
      audio.onended = () => setShowPopup(false);
    } else {
      setShowPopup(false);
    }
  };

  // if (!showPopup) return null;
  const paragraph =
    "Welcome to Shyam’s, where every dish tells a story and every flavor is a celebration. Step in, savor the experience, and let your taste buds embark on a journey of unforgettable delights.";
  return (
    <AnimatePresence mode="wait">
      {showPopup && (
        <motion.div
          initial={{ y: 0 }}
          animate={{ y: 0 }}
          exit={{
            y: "-100%",
            transition: {
              duration: 2,
              ease: [0.22, 1, 0.36, 1],
            },
          }}
          className="fixed inset-0 flex flex-col justify-between bg-(--title-color) z-50 p-20 space-y-15"
        >
          <div className="flex flex-col items-ceter gap-4">
            <div className="flex flex-col md:flex-row text-white text-5xl font-[Britannic] pt-0 mt-0">
              <span className="text-(--yellow)">Hello,</span>
              <span>Welcome to</span>
            </div>
            <div className="">
              <img src="/whiteLogo.png" alt="logo" className="w-36" />
            </div>
          </div>

          <div className="space-y-5 text-lg font-semibold font-[Poppins]">
            {!startVoice ? (
              <>
                <div className="">
                  <p className="text-white">
                    Would you like to experience the website with sound?
                  </p>
                </div>
                <div className="flex gap-5">
                  <button
                    onClick={() => handleChoice(true)}
                    className="text-(--yellow) cursor-pointer border-b-2 border-(--title-color) hover:border-(--yellow)"
                  >
                    Yes, Please!
                  </button>
                  <button
                    onClick={() => handleChoice(false)}
                    className="text-white cursor-pointer border-b-2 border-(--title-color) hover:border-white"
                  >
                    No
                  </button>
                </div>
              </>
            ) : (
              <>
                <Typewriter text={paragraph} audio={audio} />

                <div className="flex group">
                  <button
                    className="mt-5 flex gap-2 text-white hover:text-(--yellow) cursor-pointer transition-all duration-500"
                    onClick={() => {
                      audio.pause();
                      setShowPopup(false);
                    }}
                  >
                    Skip our story{" "}
                    <ArrowRight className="group-hover:translate-x-5  transition-all duration-300" />
                  </button>
                </div>
              </>
            )}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LoadingScreen;
