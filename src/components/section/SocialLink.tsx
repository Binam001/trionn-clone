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
    <div className="my-10">
      {socialLists.map((social) => (
        <div
          key={social.id}
          className="px-20 lg:px-56 hover:scale-[1.2] duration-500 transition-transform"
        >
          <div id="social" className="">
            <div className="flex justify-between items-center my-5">
              <p className="text-(--text-color) text-4xl syne-normal">
                {social.name}
              </p>
              <img src={social.image} alt={social.name} className="size-12" />
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
