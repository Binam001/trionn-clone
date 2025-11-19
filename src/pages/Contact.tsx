// import { CircleArrowDown } from "lucide-react";
import CircularBrand from "../components/CircularBrand";
import { useEffect, useState } from "react";
import Button from "../components/Button";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
// import footerLogo from "../assets/images/footer-logo.svg";
// import { footerLinks } from "../constants";
import PageTitle from "../components/section/PageTitle";
import Footer from "../components/section/Footer";
import SocialLink from "../components/section/SocialLink";

const Contact = () => {
  // const [activeContent, setActiveContent] = useState("button1");
  // const handleButtonClick = (contentKey: any) => {
  //   setActiveContent(contentKey);
  // };

  function getCurrentLocalTimeInfo() {
    const now = new Date();

    const timeString = now.toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
    });

    return { timeString };
  }
  const [timeInfo, setTimeInfo] = useState(getCurrentLocalTimeInfo());

  useEffect(() => {
    const ONE_MINUTE = 60000;
    const timerId = setInterval(() => {
      setTimeInfo(getCurrentLocalTimeInfo());
    }, ONE_MINUTE);
    return () => clearInterval(timerId);
  }, []);

  useGSAP(() => {
    // gsap.to(".textShadow1, .textShadow2", {
    //   xPercent: 100,
    //   stagger: 0.2,
    //   duration: 1.5,
    //   scrollTrigger: {
    //     trigger: ".textShadow1, .textShadow2",
    //     start: "top bottom",
    //     scrub: 1.5,
    //   },
    // });
    gsap.from(".our, .hideaway", {
      xPercent: 25,
      opacity: 0,
      stagger: 0.1,
      scrollTrigger: {
        trigger: ".our, .hideaway",
        start: "top 80%",
        end: "center center",
        scrub: 1.5,
      },
    });
    gsap.from("#location", {
      yPercent: 50,
      opacity: 0,
      duration: 1.5,
      scrollTrigger: {
        trigger: "#location",
        start: "top bottom",
        end: "center center",
        scrub: 1.5,
      },
    });
    gsap.utils.toArray<HTMLElement>(".footerLink").forEach((el) => {
      gsap.from(el, {
        yPercent: 50,
        opacity: 0,
        duration: 1,
        stagger: 0.5,
        scrollTrigger: {
          trigger: el,
          start: "top bottom",
          end: "center center",
          scrub: 1,
        },
      });
    });
  });
  return (
    <div className="flex flex-col items-center gap-8 mt-10 text-(--text-color)">
      <CircularBrand />
      <PageTitle
        text1="step into "
        text2="the wilderness"
        text3="of flavor."
        desc="In a world full of changing tastes, we invite you to explore bold flavors with us—where every conversation leads to new culinary horizons."
      />

      <div className="w-full lg:px-20 md:mt-40">
        <div className="flex justify-between gap-5 my-5 lg:my-20">
          {/* <div className="flex flex-col md:flex-row md:justify-between gap-5 text-(--text-color)/60 my-20"> */}
          {/* <div className="flex justify-between gap-10 lg:gap-32 text-3xl md:text-[45px] lg:text-[60px] font-[Britannic]">
            <div className="">
              <button
                onClick={() => handleButtonClick("button1")}
                className={`
            ${
              activeContent === "button1"
                ? "text-(--text-color) border-b-4 uppercase"
                : ""
            }
          `}
              >
                say hello!
              </button>
            </div>
            <div className="">
              <button
                onClick={() => handleButtonClick("button2")}
                className={`
            ${
              activeContent === "button2"
                ? "text-(--text-color) border-b-4"
                : ""
            }
          `}
              >
                get a quote!
              </button>
            </div>
          </div> */}
          <div className="">
            <button className="font-[Britannic] text-2xl md:text-6xl uppercase border-b-4">
              say hello
            </button>
          </div>
          <div className="text-xl md:text-4xl">
            <div>{timeInfo.timeString}</div>
          </div>
        </div>

        <div className="">
          <div>
            <form action="" className="font-[Poppins]">
              <div className="lg:grid lg:grid-cols-2 gap-8 space-y-6 lg:space-y-0">
                <div className="flex flex-col gap-2 lg:gap-4">
                  <label htmlFor="name">Name*</label>
                  <input
                    id="name"
                    type="text"
                    placeholder="Your Name"
                    className="w-full p-3 md:p-6 backdrop-blur-xs rounded-2xl md:text-lg focus:bg-white focus:text-black focus:outline-none border"
                  />
                </div>
                <div className="flex flex-col gap-4">
                  <label htmlFor="email">Email*</label>
                  <input
                    id="email"
                    type="email"
                    placeholder="Your email address"
                    className="w-full p-3 md:p-6 backdrop-blur-xs rounded-2xl md:text-lg focus:bg-white focus:text-black focus:outline-none border"
                  />
                </div>
                <div className="flex flex-col gap-4">
                  <label htmlFor="phone">Phone</label>
                  <input
                    id="phone"
                    type="text"
                    placeholder="Your phone number"
                    className="w-full p-3 md:p-6 backdrop-blur-xs rounded-2xl md:text-lg focus:bg-white focus:text-black focus:outline-none border"
                  />
                </div>
                {/* <div className="flex flex-col gap-4">
                  <label htmlFor="company">Company/Organisation</label>
                  <input
                    id="company"
                    type="text"
                    placeholder="Ex. Shyam"
                    className="w-full p-3 md:p-6 backdrop-blur-xs rounded-2xl md:text-lg focus:bg-white focus:text-black focus:outline-none border"
                  />
                </div> */}
                {/* {activeContent == "button2" && (
                  <>
                    <div className="flex flex-col gap-4">
                      <label htmlFor="projectType">Project type*</label>
                      <select
                        name="projectType"
                        id="projectType"
                        className="text-(--text-color) bg-(--card-bg) p-3 md:p-6"
                      >
                        <option value="">Project type</option>
                        <option value="">Design</option>
                        <option value="">Branding</option>
                        <option value="">Development</option>
                        <option value="">Design & Development</option>
                        <option value="">Other</option>
                      </select>
                    </div>
                    <div className="flex flex-col gap-4">
                      <label htmlFor="projectBudget">
                        Project budget(USD)*
                      </label>
                      <select
                        name="projectBudget"
                        id="projectBudget"
                        className="text-(--text-color) bg-(--card-bg) p-3 md:p-6"
                      >
                        <option value="">Select budget</option>
                        <option value="">Less than $1000 USD</option>
                        <option value="">$1001 - $5000 USD</option>
                        <option value="">$5001 - $10000 USD</option>
                        <option value="">$10001 - $20000 USD</option>
                        <option value="">More than $20000 USD</option>
                      </select>
                    </div>
                    <div className="col-span-2 flex flex-col gap-4">
                      <label htmlFor="medium">How did you hear about us?</label>
                      <select
                        name="medium"
                        id="medium"
                        className="text-(--text-color) bg-(--card-bg) p-3 md:p-6"
                      >
                        <option value="">Select</option>
                        <option value="">Awwards</option>
                        <option value="">Instagram</option>
                        <option value="">LinkedIn</option>
                        <option value="">Google</option>
                        <option value="">Website</option>
                        <option value="">Other</option>
                      </select>
                    </div>
                  </>
                )} */}
              </div>

              <div className="flex flex-col gap-4 mt-8">
                <label htmlFor="message">Message*</label>
                <textarea
                  id="message"
                  placeholder="Ex. Hello, How can I help you?"
                  className="w-full h-40 md:h-60 p-3 md:p-6 backdrop-blur-xs rounded-2xl md:text-lg focus:bg-white focus:text-black focus:outline-none border"
                />
              </div>

              <div className="mt-10 flex justify-end">
                <Button title="Submit" />
              </div>
            </form>
          </div>
        </div>
      </div>

      <div className="space-y-4 mt-20 w-full">
        <div className="relative text-3xl md:text-5xl lg:text-8xl leading-[0.75] text-(--text-color) font-[Britannic] uppercase">
          <div className="relative">
            <p className="our">our</p>
            {/* <div className="textShadow1 bg-(--background) w-full h-full absolute top-0 -mt-3 lg:-mt-6 opacity-90"></div> */}
          </div>

          <div className="relative">
            <p className="hideaway">hideaway</p>
            {/* <div className="textShadow2 bg-(--background) w-full h-full absolute top-0 -mt-3 lg:-mt-6 opacity-90"></div> */}
          </div>
        </div>
        <div
          id="location"
          className="font-[Poppins] text-(--text-color) flex flex-col space-y-4 md:text-3xl mt-20"
        >
          <span className="text-(--text-color) md:text-4xl border-b w-max">
            Location
          </span>
          {/* <span>SHYAM'S</span> */}
          <span className="mt-5">216 - 217 4Plus Complex</span>
          <span>Astron chowk, Rajkot 01</span>
          <span>Kathmandu, Nepal.</span>
        </div>
      </div>

      <SocialLink />

      <Footer />

      {/* <div className="w-full mt-16">
        {footerLinks.map((footer) => (
          <div
            key={footer.id}
            className="footerLink border-y py-10 text-3xl font-[Poppins] space-y-4"
          >
            <div className="text-(--text-color)/60">{footer.title}</div>
            <div className="flex flex-row flex-wrap gap-5">
              {footer.link.map((link) => (
                <button>{link}</button>
              ))}
            </div>
          </div>
        ))}
      </div> */}

      {/* <div className="text-(--text-color)/70 text-xl my-10 flex justify-between w-full">
        <p>
          © 2025 TRIONN<sup>®</sup>
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

export default Contact;
