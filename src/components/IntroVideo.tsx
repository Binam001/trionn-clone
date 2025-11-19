import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useMediaQuery } from "react-responsive";
// import introVideo from "../assets/videos/intro-video.mp4";

const IntroVideo = () => {
  const isTablet = useMediaQuery({ maxWidth: 770 });

  const yPercent = isTablet ? -100 : -70;

  useGSAP(() => {
    gsap.from("#introVideo", {
      yPercent,
      scale: 0.15,
      borderRadius: "500px",
      scrollTrigger: {
        trigger: "#introVideo",
        start: "top 70%",
        end: "bottom center",
        scrub: 1,
      },
    });
  });
  return (
    <div className="mt-0">
      <video
        id="introVideo"
        src="/videos/introVideo.mp4"
        // src={introVideo}
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
