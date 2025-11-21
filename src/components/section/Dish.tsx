import { dishLists } from "../../constants";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { SplitText } from "gsap/all";
import { useMediaQuery } from "react-responsive";
// import { useEffect, useState } from "react";

const Dish = () => {
  const isTablet = useMediaQuery({ maxWidth: 770 });

  useGSAP(() => {
    document.fonts.ready.then(() => {
      const paragraphSplit = new SplitText("#dishSectionDesc", {
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
          trigger: "#dishSectionDesc",
          start: "top 60%",
          scrub: 1,
        },
      });
    });

    // const oddRZ = isTablet ? 0 : -45;
    // const evenRZ = isTablet ? 0 : 45;
    const oddXp = isTablet ? -60 : -80;
    const evenXp = isTablet ? 60 : 80;
    // const start = isTablet ? "top center" : "top 80%";

    gsap.utils.toArray<HTMLElement>(".oddDishCard").forEach((el) => {
      gsap.to(el, {
        xPercent: oddXp,
        rotate: 180,
        // opacity: 0,
        stagger: 0.2,
        scrollTrigger: {
          trigger: el,
          start: "top 80%",
          end: "center center",
          scrub: 1.5,
        },
      });
    });
    gsap.utils.toArray<HTMLElement>(".evenDishCard").forEach((el) => {
      gsap.to(el, {
        xPercent: evenXp,
        rotate: 180,
        // opacity: 0,
        stagger: 0.2,
        scrollTrigger: {
          trigger: el,
          start: "top 80%",
          scrub: 1.5,
        },
      });
    });

    // gsap.from(".dribbbleBtn", {
    //   opacity: 0,
    //   yPercent: 100,
    //   duration: 1.5,
    //   scrollTrigger: {
    //     trigger: ".dribbbleBtn",
    //     start: "top bottom",
    //     end: "bottom center",
    //     scrub: 1,
    //   },
    // });
  });
  return (
    <div className="relative h-screen mt-16 lg:mt-32 flex flex-col justify-center items-center">
      <div>
        <img
          src="/redLogo.png"
          alt="shyam's logo"
          className="w-36 h-12 md:w-52 md:h-20"
        />
      </div>
      <p
        id="dishSectionDesc"
        className="text-(--text-color) md:text-3xl font-[Poppins] w-[80%] lg:w-[40%] text-center mt-10"
      >
        Where every dish is crafted with passion, bringing comfort, flavor, and
        warmth to your table.
      </p>

      <div className="absolute grid grid-cols-2 pointer-events-none">
        {dishLists.map(({ id, image }) => (
          <div
            key={id}
            className={`md:w-[75%] ${
              id % 2 === 0 ? "evenDishCard" : "oddDishCard justify-self-end"
            }`}
          >
            <img src={image} alt={`dish + ${id}`} className="object-contain" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dish;
