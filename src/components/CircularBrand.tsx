import leoLogo from "../assets/images/Lion.svg";

const CircularBrand = () => {
  return (
    // <div className="circular-brand fixed right-10 bottom-10 size-20 lg:size-32 border border-(--foreground) rounded-full p-1 lg:p-2 z-10">
    //   <svg
    //     className="w-full h-full animate-[spin_6s_linear_infinite]"
    //     viewBox="0 0 100 100"
    //   >
    //     <path
    //       id="circlePath"
    //       d="
    //         M 50, 50
    //         m -40, 0
    //         a 40,40 0 1,1 80,0
    //         a 40,40 0 1,1 -80,0
    //       "
    //       fill="none"
    //     />

    //     <text className="text-xs font-bold fill-current text-(--text-color)">
    //       <textPath href="#circlePath" startOffset="5%">
    //         LET'S TALK NOW!
    //       </textPath>
    //       <textPath href="#circlePath" startOffset="55%">
    //         LET'S TALK NOW!
    //       </textPath>
    //     </text>
    //   </svg>

    //   <div className="absolute inset-0 flex items-center justify-center">
    //     {/* <Cat className="size-5 lg:size-16 text-(--foreground)/60 rounded-full ring ring-offset-8" /> */}
    //     <img
    //       src={leo}
    //       alt="leo"
    //       className="size-10 lg:size-18 object-cover invert dark:invert-0"
    //     />
    //   </div>
    // </div>
    <img
      src={leoLogo}
      alt="leo logo"
      className="circular-brand size-20 lg:size-32 fixed right-10 bottom-10 invert dark:invert-0 z-10"
    />
  );
};

export default CircularBrand;
