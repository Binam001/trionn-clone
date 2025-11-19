// import { useGSAP } from "@gsap/react";
// import gsap from "gsap";
// import footerLogo from "../../assets/images/footer-logo.svg";
// import { CircleArrowDown } from "lucide-react";
// import { MagneticButton } from "../ui/magnetic-button";
import { ImageHover } from "../image-reveal";

const Footer = () => {
  // useGSAP(() => {
  //   gsap.from("#timeTo", {
  //     xPercent: -25,
  //     opacity: 0,
  //     stagger: 0.1,
  //     scrollTrigger: {
  //       trigger: "#timeTo",
  //       start: "top 80%",
  //       end: "center center",
  //       scrub: 1.5,
  //     },
  //   });
  //   gsap.from("#roar", {
  //     xPercent: 25,
  //     opacity: 0,
  //     stagger: 0.1,
  //     scrollTrigger: {
  //       trigger: "#roar",
  //       start: "top 80%",
  //       end: "center center",
  //       scrub: 1.5,
  //     },
  //   });
  //   gsap.from("#talkBtn", {
  //     opacity: 0,
  //     yPercent: 100,
  //     duration: 2,
  //     ease: "expo.out",
  //     delay: 0.6,
  //     scrollTrigger: {
  //       trigger: "#talkBtn",
  //       start: "top bottom",
  //       scrub: 1,
  //     },
  //   });

  //   const footerTimeline = gsap.timeline();

  //   footerTimeline.from(".footerLinkItem", {
  //     y: 100,
  //     opacity: 0,
  //     duration: 1,
  //     stagger: 0.2,
  //     scrollTrigger: {
  //       trigger: ".footerLink",
  //       start: "top bottom",
  //       end: "center 30%",
  //       scrub: 1.5,
  //     },
  //   });
  // });
  return (
    <div className="mt-20 text-(--text-color) font-[Poppins] flex flex-col items-center">
      <div className="relative mt-20 w-screen">
        <ImageHover text1="majestic" text2="flavors" text3="await" />
      </div>

      {/* <div
        id="timeTo"
        className="text-[40px] md:text-[70px] lg:text-[120px] leading-[0.9] font-[Britannic] uppercase"
      >
        let your
      </div>
      <div className="flex flex-col lg:flex-row lg:justify-between">
        <div
          id="roar"
          className="text-[40px] md:text-[70px] lg:text-[120px] leading-[0.9] font-[Britannic] uppercase"
        >
          hunger roar
        </div>
        <MagneticButton>
          <button
            id="talkBtn"
            className="px-12 py-4 rounded-4xl bg-(--text-color) text-(--background) text-lg self-start lg:self-center cursor-pointer mt-20 lg:mt-0"
          >
            Let's talk!
          </button>
        </MagneticButton>
      </div> */}

      {/* <hr className="text-(--text-color) h-1 w-full my-10" /> */}

      {/* <div className="footerLink flex flex-col lg:flex-row lg:justify-between gap-12 lg:gap-0 text-(--text-color) text-3xl">
        <div className="flex flex-col lg:flex-row lg:justify-between gap-12">
          <div className="footerLinkItem flex flex-col">
            <span className="text-lg">Email</span>
            <a href="#">hello@shyam.com</a>
          </div>
          <div className="footerLinkItem flex flex-col">
            <span className="text-lg">Call</span>
            <a href="#">+977 98241 82099</a>
          </div>
        </div>

        <div className="footerLinkItem flex flex-col lg:text-end">
          <span className="text-lg">Team</span>
          <a href="#">Talk to Shyam</a>
        </div>
      </div> */}

      {/* <hr className="text-(--text-color) h-1 w-full my-10" /> */}

      {/* <div className="text-(--text-color)/70 text-xl my-10 flex justify-between">
        <p>
          © 2025 SHYAM'S<sup>®</sup>
        </p>
        <a href="#text1">
          <CircleArrowDown size={32} strokeWidth={1} className="rotate-180" />
        </a>
      </div> */}

      {/* <div className="">
        <img src={footerLogo} alt="footer logo" />
      </div> */}
    </div>
  );
};

export default Footer;
