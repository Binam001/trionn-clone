import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { SplitText } from "gsap/all";
import Button from "../Button";

const OurCombo = () => {
  useGSAP(() => {
    document.fonts.ready.then(() => {
      const paragraphSplit = new SplitText("#text3", {
        type: "lines",
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
    });

    gsap.from(".text2", {
      xPercent: -25,
      opacity: 0,
      stagger: 0.2,
      scrollTrigger: {
        trigger: ".text2",
        start: "top 90%",
        end: "center 40%",
        scrub: 1.5,
      },
    });

    gsap.from("#btn1", {
      opacity: 0,
      yPercent: 100,
      duration: 2,
      scrollTrigger: {
        trigger: "#btn1",
        start: "top bottom",
        end: "center center",
        scrub: 1,
      },
    });
  });
  return (
    <div className="mt-20 lg:my-40">
      <div className="flex justify-between">
        <div className="text-[70px] md:text-[80px] lg:text-8xl leading-[0.9] font-[Britannic] uppercase">
          <h1 className="text2 text-(--text-color)">our</h1>
          <h1 className="text2 text-(--text-color)">combo</h1>
        </div>
        <div id="btn1" className="hidden md:block">
          <Button title="Explore Packs" />
        </div>
      </div>

      <div className="flex justify-between items-center">
        <p
          id="text3"
          className="w-full md:w-1/2 lg:text-xl text-(--text-color) overflow-hidden font-[Poppins]"
        >
          In the world of taste adventures, our meals are beloved by all who
          visit.
        </p>
      </div>
    </div>
  );
};

export default OurCombo;
