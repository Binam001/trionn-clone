import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { SplitText } from "gsap/all";
import Button from "../Button";

const RecentWork = () => {
  useGSAP(() => {
    const paragraphSplit = new SplitText("#text3", {
      type: "lines",
      linesClass: "line-wrapper",
    });
    gsap.from(".text2", {
      xPercent: -25,
      opacity: 0,
      stagger: 0.2,
      scrollTrigger: {
        trigger: ".text2",
        start: "top 80%",
        end: "center 30%",
        scrub: 1.5,
      },
    });
    gsap.from(paragraphSplit.lines, {
      opacity: 0,
      yPercent: 100,
      duration: 2,
      ease: "expo.out",
      stagger: 0.06,
      delay: 0.6,
      scrollTrigger: {
        trigger: "#text3",
        start: "top bottom",
        scrub: 1,
      },
    });

    gsap.from("#btn1", {
      opacity: 0,
      yPercent: 100,
      duration: 2,
      scrollTrigger: {
        trigger: "#btn1",
        start: "top bottom",
        end: "bottom center",
        scrub: 1,
      },
    });
  });
  return (
    <div className="mt-20">
      <div className="text-[70px] md:text-[80px] lg:text-[200px] leading-[0.9] font-[daysoftype] uppercase**[font-feature-settings:'ss01']**">
        <h1 className="text2 text-(--text-color)">recent</h1>
        <h1 className="text2 text-(--text-color)">work</h1>
      </div>

      <div className="flex justify-between items-center">
        <p
          id="text3"
          className="w-[90%] md:w-[40%] lg:w-[35%] text-2xl lg:text-3xl text-(--text-color-2) overflow-hidden syne-normal"
        >
          In the creative wilderness, clients find our work truly beloved.
        </p>
        <div id="btn1" className="hidden md:block">
          <Button title="Explore work" />
        </div>
      </div>
    </div>
  );
};

export default RecentWork;
