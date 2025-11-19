const CircularBrand = () => {
  return (
    // <div className="w-full h-full bg-amber-700 relative">
    //   <div className="absolute bg-black/50" />
    <div className="circular-brand fixed right-10 bottom-10 size-20 lg:size-32 border border-[#4caf50] rounded-full p-1 lg:p-2 z-100 cursor-pointer">
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

        <text className="text-xs font-bold fill-current text-[#4caf50]">
          <textPath href="#circlePath" startOffset="5%">
            - LET'S TALK NOW!
          </textPath>
          <textPath href="#circlePath" startOffset="55%">
            - LET'S TALK NOW!
          </textPath>
        </text>
      </svg>

      <div className="absolute inset-0 flex items-center justify-center">
        <a href="">
          <img
            src="/images/socialLinks/whatsapp.png"
            alt="whatsapp link"
            className="size-10 lg:size-14 object-contain ring ring-[#4caf50] rounded-full p-2"
          />
        </a>
      </div>
    </div>
    // </div>

    // <img
    //   src={leoLogo}
    //   alt="leo logo"
    //   className="circular-brand size-20 lg:size-32 fixed right-10 bottom-10 invert dark:invert-0 z-50"
    // />
  );
};

export default CircularBrand;
