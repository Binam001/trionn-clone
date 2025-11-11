import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import introVideo from "../assets/videos/intro-video.mp4";

const IntroVideo = () => {
  useGSAP(() => {
    // gsap.fromTo(
    //   ".intro-video",
    //   {
    //     yPercent: -50,
    //     scale: 0.2,
    //     borderRadius: "100%",
    //   },
    //   {
    //     yPercent: 0,
    //     scale: 1,
    //     borderRadius: "20%",
    //     scrollTrigger: {
    //       trigger: ".intro-video",
    //       start: "top 70%",
    //       end: "bottom center",
    //       scrub: 1.5,
    //     },
    //   }
    // );

    gsap.from(".intro-video", {
      yPercent: -50,
      scale: 0.2,
      borderRadius: "100%",
      scrollTrigger: {
        trigger: ".intro-video",
        start: "top 70%",
        end: "bottom center",
        scrub: 1.5,
      },
    });
  });
  return (
    <div id="introVideo" className="intro-video mt-18">
      <video
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
