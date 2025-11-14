import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText } from "gsap/all";

export const animation = () => {
  useGSAP(() => {
    const secondParagraphSplit = new SplitText(".secondDesc", {
      type: "lines",
      linesClass: "line-wrapper",
    });

    gsap.from(secondParagraphSplit.lines, {
      y: 100,
      opacity: 0,
      duration: 0.8,
      stagger: 0.2,
      scrollTrigger: {
        trigger: ".secondDesc",
        start: "top bottom",
        scrub: 1.5,
      },
    });
  });
};
