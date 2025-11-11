import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { Cat } from "lucide-react";

const CircularBrand = () => {
  useGSAP(() => {
    gsap.from(".circular-brand", {
      xPercent: 200,
      opacity: 0,
      duration: 1.5,
      scrollTrigger: {
        trigger: ".circular-brand",
        start: "top 10%",
        end: "bottom center",
        scrub: 1,
      },
    });
  });
  return (
    <div className="circular-brand fixed size-28 lg:size-40 right-10 bottom-10 border border-(--foreground) rounded-full p-2 z-10">
      <svg
        className="w-full h-full animate-[spin_6s_linear_infinite]"
        viewBox="0 0 100 100"
      >
        <path
          id="circlePath"
          d="
            M 50, 50
            m -40, 0
            a 40,40 0 1,1 80,0
            a 40,40 0 1,1 -80,0
          "
          fill="none"
        />

        <text className="text-xs font-bold fill-current text-(--foreground)">
          <textPath href="#circlePath" startOffset="5%">
            LET'S TALK NOW!
          </textPath>
          <textPath href="#circlePath" startOffset="55%">
            LET'S TALK NOW!
          </textPath>
        </text>
      </svg>

      <div className="absolute inset-0 flex items-center justify-center">
        <Cat className="size-8 lg:size-16 text-(--foreground)/60 rounded-full ring ring-offset-8" />
      </div>
    </div>
  );
};

export default CircularBrand;
