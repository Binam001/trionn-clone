import { useGSAP } from "@gsap/react";
import { SplitText } from "gsap/all";
import gsap from "gsap";
import Button from "../Button";

const About = () => {
  useGSAP(() => {
    const paragraphSplit = new SplitText(".text5", {
      type: "lines",
      linesClass: "line-wrapper",
    });
    gsap.from(".text4", {
      xPercent: -25,
      opacity: 0,
      stagger: 0.1,
      scrollTrigger: {
        trigger: ".text4",
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
        trigger: ".text5",
        start: "top 60%",
        scrub: 1,
      },
    });

    gsap.from("#btn2", {
      opacity: 0,
      yPercent: 100,
      duration: 1.5,
      scrollTrigger: {
        trigger: "#btn2",
        start: "top bottom",
        end: "bottom center",
        scrub: 1,
      },
    });
  });
  return (
    <div className="mt-36 space-y-6">
      <div className="text-[90px] lg:text-[200px] text-(--text-color) leading-[0.75] font-[daysoftype] uppercase**[font-feature-settings:'ss01']**">
        <h1 className="text4">behind</h1>
        <h1 className="text4">the feast</h1>
      </div>
      <div className="">
        <p className="text5 w-[90%] lg:w-[50%] text-3xl lg:text-[50px] text-(--text-color-2) overflow-hidden">
          As a celebrated name in the culinary world, we transcend flavor,
          turning every dish into a lasting memory.
        </p>
      </div>
      <div className="flex flex-col gap-8 md:justify-self-end w-[80%] lg:w-[50%]">
        <p className="text5 text-xl text-(--text-color-2) overflow-hidden syne-normal">
          We serve creativity with the same passion as our signature dishes,
          staying fresh with every new trend and flavor. Just as great food
          leaves a lasting impression, our dedication ensures your dining
          experience becomes unforgettable and truly remarkable.
        </p>
        <div id="btn2">
          <Button title="About Us" />
        </div>
      </div>
    </div>
  );
};

export default About;
