import { Link } from "react-router-dom";
import { sideMenuLists } from "../../constants";
import type { Dispatch, SetStateAction } from "react";
import { useGSAP } from "@gsap/react";
// import gsap from "gsap";

interface SideMenuProps {
  setOpen: Dispatch<SetStateAction<boolean>>;
}

const SideMenu = ({ setOpen }: SideMenuProps) => {
  useGSAP(() => {
    // gsap.from("#navBarDish", {
    //   transformOrigin: "100% 50%",
    //   rotate: 180,
    //   duration: 1,
    //   delay: 1,
    // });
  });
  return (
    <div className="text-white relative h-screen flex items-center z-100!">
      <div className="md:flex px-8 lg:px-20 absolute w-full mb-5">
        <ul className="w-1/2 text-6xl lg:text-8xl leading-[0.8] font-[Britannic] uppercase">
          {sideMenuLists.map((sideMenuItem) => (
            <li
              key={sideMenuItem.id}
              className="group relative duration-500 transition-all"
            >
              {sideMenuItem.to ? (
                <Link to={sideMenuItem.to} onClick={() => setOpen(false)}>
                  <span className="block group-hover:ml-16 transition-all duration-500 hover:text-(--yellow)">
                    {sideMenuItem.name}
                  </span>
                </Link>
              ) : (
                <span className="block group-hover:ml-16 transition-all duration-500">
                  {sideMenuItem.name}
                </span>
              )}
              <div className="absolute left-0 top-[40%] -translate-y-[40%] hidden group-hover:block size-8 bg-(--yellow) rounded-full"></div>
            </li>
          ))}
        </ul>

        <div className="w-1/2 flex justify-end absolute right-0">
          <img
            id="navBarDish"
            src="/images/dish/circularDish.png"
            // src="/images/dish/dish7.png"
            alt="navbar dish"
            className="size-dvh animate-[spin_30s_linear_infinite] -mr-40"
            // className="h-dvh"
          />
        </div>
      </div>
    </div>
  );
};

export default SideMenu;
