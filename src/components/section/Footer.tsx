import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import footerLogo from "../../assets/images/footer-logo.svg";
import { CircleArrowDown } from "lucide-react";

const Footer = () => {
  useGSAP(() => {
    gsap.from("#timeTo", {
      xPercent: -25,
      opacity: 0,
      stagger: 0.1,
      scrollTrigger: {
        trigger: "#timeTo",
        scrub: 1.5,
      },
    });
    gsap.from("#roar", {
      xPercent: 25,
      opacity: 0,
      stagger: 0.1,
      scrollTrigger: {
        trigger: "#roar",
        scrub: 1.5,
      },
    });
    gsap.from("#talkBtn", {
      opacity: 0,
      yPercent: 100,
      duration: 2,
      ease: "expo.out",
      delay: 0.6,
      scrollTrigger: {
        trigger: "#talkBtn",
        start: "top bottom",
        scrub: 1,
      },
    });

    const footerTimeline = gsap.timeline();

    footerTimeline.from(".footerLinkItem", {
      y: 100,
      opacity: 0,
      duration: 1,
      stagger: 0.2,
      scrollTrigger: {
        trigger: ".footerLink",
        start: "top bottom",
        end: "center 30%",
        scrub: 1.5,
      },
    });
  });
  return (
    <div className="mt-40 text-(--text-color)">
      <div
        id="timeTo"
        className="text-[70px] md:text-[120px] lg:text-[200px] leading-[0.9] font-[daysoftype] uppercase**[font-feature-settings:'ss01']**"
      >
        time to
      </div>
      <div className="flex flex-col lg:flex-row lg:justify-between">
        <div
          id="roar"
          className="text-[70px] md:text-[120px] lg:text-[200px] leading-[0.9] font-[daysoftype] uppercase**[font-feature-settings:'ss01']**"
        >
          roar
        </div>
        <button
          id="talkBtn"
          className="px-12 py-4 rounded-4xl bg-(--text-color) text-(--background) text-lg self-start lg:self-center cursor-pointer mt-20 lg:mt-0"
        >
          Let's talk!
        </button>
      </div>

      <hr className="text-(--text-color) h-1 w-full my-10" />

      <div className="footerLink flex flex-col lg:flex-row lg:justify-between gap-12 lg:gap-0 text-(--text-color) text-3xl">
        <div className="flex flex-col lg:flex-row lg:justify-between gap-12">
          <div className="footerLinkItem flex flex-col">
            <span className="text-lg">Email</span>
            <a href="#">hello@trionn.com</a>
          </div>
          <div className="footerLinkItem flex flex-col">
            <span className="text-lg">Call</span>
            <a href="#">+91 98241 82099</a>
          </div>
        </div>

        <div className="footerLinkItem flex flex-col lg:text-end">
          <span className="text-lg">Team</span>
          <a href="#">Talk to Trionn</a>
        </div>
      </div>

      <hr className="text-(--text-color) h-1 w-full my-10" />

      <div className="text-(--text-color)/70 text-xl my-10 flex justify-between">
        <p>
          © 2025 TRIONN<sup>®</sup>
        </p>
        <a href="#text1">
          <CircleArrowDown size={32} strokeWidth={1} className="rotate-180" />
        </a>
      </div>

      <div className="">
        <img src={footerLogo} alt="footer logo" />
      </div>
    </div>
  );
};

export default Footer;
