import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { socialLists } from "../../constants";

const SocialLink = () => {
  useGSAP(() => {
    gsap.from("#social", {
      yPercent: 25,
      opacity: 0,
      stagger: 0.1,
      scrollTrigger: {
        trigger: "#social",
        scrub: 1.5,
      },
    });
  });
  return (
    <div className="my-8 md:my-16 w-full">
      {socialLists.map((social) => (
        <div
          key={social.id}
          className="px-5 lg:px-56 group hover:scale-[1.2] duration-500 transition-transform"
        >
          <div id="social" className="">
            <div className="flex justify-between items-center my-3 md:my-5">
              <p className="text-(--text-color) text-xl md:text-3xl lg:text-4xl font-[Poppins]">
                {social.name}
              </p>
              <img
                src={social.image}
                alt={social.name}
                className="size-8 md:size-12 group-hover:rotate-360 duration-1000"
              />
            </div>
            <div>
              <hr className="text-(--text-color) h-1 w-full" />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SocialLink;
