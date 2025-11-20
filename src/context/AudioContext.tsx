import React, { createContext, useContext, useState, useEffect } from "react";

interface AudioContextType {
  isAudioOn: boolean;
  setIsAudioOn: (value: boolean) => void;
}

const AudioContext = createContext<AudioContextType>({
  isAudioOn: false,
  setIsAudioOn: () => {},
});

export const AudioProvider = ({ children }: { children: React.ReactNode }) => {
  const [isAudioOn, setIsAudioOn] = useState<boolean>(() => {
    const saved = localStorage.getItem("audioPreference");
    return saved ? saved === "on" : false;
  });

  useEffect(() => {
    localStorage.setItem("audioPreference", isAudioOn ? "on" : "off");
  }, [isAudioOn]);

  return (
    <AudioContext.Provider value={{ isAudioOn, setIsAudioOn }}>
      {children}
    </AudioContext.Provider>
  );
};

export const useAudio = () => useContext(AudioContext);
