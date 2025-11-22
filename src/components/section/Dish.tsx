import { dishLists } from "../../constants";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
// import { SplitText } from "gsap/all";
import { useMediaQuery } from "react-responsive";
// import { useEffect, useState } from "react";

const Dish = () => {
  const isTablet = useMediaQuery({ maxWidth: 770 });

  useGSAP(() => {
    const images = gsap.utils.toArray<HTMLElement>(".dishItem");

    // 1) INITIAL POSITION: stacked at center
    gsap.set(images, {
      xPercent: -50,
      yPercent: -50,
      x: 0,
      y: 0,
      position: "absolute",
      top: "50%",
      left: "50%",
    });

    const radius = isTablet ? 150 : 250;

    // -------------------------------
    // A) SCROLL TRIGGERED SPREAD OUT
    // -------------------------------
    gsap.to(images, {
      x: (i) => radius * Math.cos((i / images.length) * Math.PI * 2),
      y: (i) => radius * Math.sin((i / images.length) * Math.PI * 2),
      ease: "expo.out",
      duration: 1.2,
      stagger: 0.08,
      scrollTrigger: {
        trigger: "#dishSectionWrapper",
        start: "top 70%",
        end: "top 20%",
        scrub: 1,
      },
    });

    // -------------------------------
    // B) INFINITE CLOCKWISE ROTATION
    // -------------------------------
    gsap.to("#dishCircle", {
      rotate: 360,
      duration: 20,
      ease: "none",
      repeat: -1,
      transformOrigin: "50% 50%",
    });
  });

  return (
    <div
      id="dishSectionWrapper"
      className="relative h-screen mt-0 md:mt-16 lg:mt-32 flex flex-col justify-center items-center"
    >
      <div>
        <img src="/redLogo.png" alt="shyam's logo" className="w-24 md:w-32" />
      </div>

      <p
        id="dishSectionDesc"
        className="text-(--text-color) md:text-2xl font-[Poppins] w-[80%] lg:w-[40%] text-center mt-10"
      >
        Where every dish is crafted with passion, bringing comfort, flavor, and
        warmth to your table.
      </p>

      {/* container that rotates in a circle */}
      <div
        id="dishCircle"
        className="absolute w-full h-full pointer-events-none"
      >
        {dishLists.map(({ id, image }) => (
          <div key={id} className="dishItem w-24 md:w-40">
            <img
              src={image}
              alt={`dish ${id}`}
              className="object-contain animate-[spin_30s_linear_infinite]"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dish;
