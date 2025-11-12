import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import introVideo from "../assets/videos/intro-video.mp4";

const IntroVideo = () => {
  useGSAP(() => {
    gsap.from("#introVideo", {
      yPercent: -65,
      scale: 0.15,
      borderRadius: "500px",
      scrollTrigger: {
        trigger: "#introVideo",
        start: "top 70%",
        end: "bottom center",
        scrub: 1.5,
      },
    });
  });
  return (
    <div className="mt-18">
      <video
        id="introVideo"
        src={introVideo}
        muted
        playsInline
        loop
        autoPlay
        className="w-full h-1/2 rounded-4xl"
      />
    </div>
  );
};

export default IntroVideo;
