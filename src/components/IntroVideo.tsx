import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useMediaQuery } from "react-responsive";

const IntroVideo = () => {
  const isMedium = useMediaQuery({ maxWidth: 770 });
  const isMobile = useMediaQuery({ maxWidth: 430 });

  const yPercent = isMedium ? -50 : -70;

  useGSAP(() => {
    if (isMobile) return;

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
