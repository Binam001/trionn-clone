// import { CircleArrowDown } from "lucide-react";
import CircularBrand from "../components/CircularBrand";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText } from "gsap/all";
import Footer from "../components/section/Footer";
import MenuSlider from "../components/MenuSlider";

const Menu = () => {
  useGSAP(() => {
    const servicesPageTitleParagraphSplit = new SplitText("#workPageTitle", {
      type: "lines",
    });
    gsap.from(servicesPageTitleParagraphSplit.lines, {
      opacity: 0,
      filter: "blur(100px)",
      yPercent: 100,
      duration: 2,
      ease: "expo.out",
      stagger: 0.2,
      delay: 0.6,
    });
    const servicesPageDescParagraphSplit = new SplitText("#workPageDesc", {
      type: "lines",
    });
    gsap.from(servicesPageDescParagraphSplit.lines, {
      opacity: 0,
      yPercent: 100,
      duration: 2,
      ease: "expo.out",
      stagger: 0.2,
      delay: 1,
    });

    gsap.utils.toArray<HTMLElement>(".card").forEach((el) => {
      gsap.from(el, {
        xPercent: 30,
        duration: 1.5,
        scrollTrigger: {
          trigger: el,
          start: "top 80%",
          end: "center center",
          scrub: 1.5,
        },
      });
    });

    gsap.utils.toArray<HTMLElement>(".textShadow").forEach((el) => {
      const card = el.closest(".mt-20")?.querySelector(".card");

      gsap.to(el, {
        xPercent: 100,
        // width: 0,
        // opacity: 0,
        duration: 1.5,
        scrollTrigger: {
          trigger: card || el,
          start: "bottom 75%",
          scrub: 1.5,
        },
      });
    });
  });
  return (
    <div className="flex flex-col items-center relative -mt-15">
      <div className="fixed top-0 w-screen pointer-events-none">
        <img
          src="/images/sweets/sweets2.png"
          alt="sweets 2"
          className="w-full"
        />
        <div className="absolute inset-0 w-full h-full z-1 bg-black/50" />
      </div>
      <CircularBrand />
      <div className="w-1/2 flex absolute left-0">
        <div className="w-1/3 h-screen" />
        <div className="flex flex-col justify-center gap-10 w-2/3 text-white font-[Britannic] text-center h-screen -mt-10">
          <div className="flex flex-col text-[50px] md:text-6xl uppercase px-4">
            <p>Welcome to the wild side of taste</p>
          </div>
        </div>
      </div>
      <div className="w-1/2 flex absolute right-0">
        <div className="flex flex-col justify-center gap-10 w-2/3 text-white font-[Britannic] text-center h-screen -mt-10">
          <div className="flex flex-col text-[50px] md:text-6xl uppercase px-4">
            <p>Thank you for exploring our world of taste</p>
          </div>
        </div>
        <div className="w-1/3 h-screen" />
      </div>
      <MenuSlider />

      <Footer />
    </div>
  );
};

export default Menu;
