import CircularBrand from "../CircularBrand";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText } from "gsap/all";

const PageTitle = ({
  text1,
  text2,
  text3,
  highlighter,
  desc,
}: {
  text1: string;
  text2: string;
  text3?: string;
  highlighter?: string;
  desc: string;
}) => {
  useGSAP(() => {
    document.fonts.ready.then(() => {
      const pageTitleParagraphSplit = new SplitText("#pageTitle", {
        type: "lines",
      });
      gsap.from(pageTitleParagraphSplit.lines, {
        opacity: 0,
        filter: "blur(100px)",
        yPercent: 100,
        duration: 2,
        ease: "expo.out",
        stagger: 0.2,
        delay: 0.6,
      });
      const pageDescParagraphSplit = new SplitText("#pageDesc", {
        type: "lines",
      });
      gsap.from(pageDescParagraphSplit.lines, {
        opacity: 0,
        yPercent: 100,
        duration: 2,
        ease: "expo.out",
        stagger: 0.2,
        delay: 1,
      });
    });
  });
  return (
    <div className="flex flex-col items-center gap-8 w-full">
      <CircularBrand />
      <div
        id="pageTitle"
        className="flex flex-col w-full text-3xl md:text-5xl lg:text-8xl text-center leading-[0.75] text-(--title-color) uppercase font-[Britannic]"
      >
        <span>{text1}</span>
        <span>{text2}</span>
        <span className="">
          {text3} <span className="text-(--text-yellow)">{highlighter}</span>
        </span>
      </div>

      <div
        id="pageDesc"
        className="relative flex flex-col text-center w-full md:w-[70%] lg:w-[55%] text-xs md:text-sm lg:text-lg font-[Poppins] text-(--text-color)"
      >
        <p>{desc}</p>
      </div>
    </div>
  );
};

export default PageTitle;
