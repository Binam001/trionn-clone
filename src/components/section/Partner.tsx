import PartnerCard from "../PartnerCard";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Partner = () => {
  useGSAP(() => {
    gsap.from("#customer", {
      xPercent: -25,
      opacity: 0,
      stagger: 0.1,
      scrollTrigger: {
        trigger: "#customer",
        start: "top 80%",
        end: "center 30%",
        scrub: 1.5,
      },
    });
    gsap.from("#love", {
      xPercent: 25,
      opacity: 0,
      stagger: 0.1,
      scrollTrigger: {
        trigger: "#love",
        start: "top 80%",
        end: "center 30%",
        scrub: 1.5,
      },
    });
    gsap.from("#text", {
      opacity: 0,
      yPercent: 100,
      duration: 2,
      ease: "expo.out",
      stagger: 0.06,
      delay: 0.6,
      scrollTrigger: {
        trigger: "#text",
        start: "top bottom",
        scrub: 1,
      },
    });
  });
  return (
    <div className="mt-20 lg:mt-40 text-(--text-color)">
      <div
        id="customer"
        className="text-5xl lg:text-8xl leading-[0.9] font-[Britannic] text-(--title-color) uppercase"
      >
        customer
      </div>
      <div className="flex flex-col lg:flex-row lg:justify-between">
        <div
          id="love"
          className="text-5xl lg:text-8xl leading-[0.9] font-[Britannic] text-(--title-color) uppercase"
        >
          love
        </div>
        <p
          id="text"
          className="w-full lg:w-[30%] text-(--text-color) md:text-xl font-[Poppins]"
        >
          Listen closely—the cheer of happy guests resounds in every review.
        </p>
      </div>

      <PartnerCard />
    </div>
  );
};

export default Partner;
