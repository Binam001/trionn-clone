import { useGSAP } from "@gsap/react";
import { SplitText } from "gsap/all";
import gsap from "gsap";
import Button from "../Button";

const About = () => {
  useGSAP(() => {
    document.fonts.ready.then(() => {
      const paragraphSplit = new SplitText(".text5", {
        type: "lines",
        autoSplit: true,
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
    });

    gsap.from(".text4", {
      xPercent: -25,
      opacity: 0,
      stagger: 0.1,
      scrollTrigger: {
        trigger: ".text4",
        start: "top bottom",
        end: "center center",
        scrub: 1.5,
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
    <div className="mt-36 space-y-8">
      <div className="text-5xl lg:text-8xl text-(--title-color) leading-[0.75] font-[Britannic] uppercase">
        <h1 className="text4">behind</h1>
        <h1 className="text4">the feast</h1>
      </div>
      <p className="text5 w-full lg:w-[60%] text-xl lg:text-4xl font-[Poppins] text-(--text-color) mt-10">
        As a celebrated name in the culinary world and we transcend flavor,
        turning every dish into a lasting memory.
      </p>
      <div className="flex flex-col gap-8 lg:justify-self-end w-[80%] lg:w-[50%]">
        <p className="text5 text-xl text-(--text-color) overflow-hidden font-[Poppins] hidden md:block">
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
