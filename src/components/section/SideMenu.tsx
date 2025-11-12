import { Link } from "react-router-dom";
import { sideMenuLists, socialLists } from "../../constants";
import type { Dispatch, SetStateAction } from "react";

interface SideMenuProps {
  setOpen: Dispatch<SetStateAction<boolean>>;
}

const SideMenu = ({ setOpen }: SideMenuProps) => {
  return (
    <div className="text-(--text-color) relative h-screen">
      <div className="md:flex px-8 lg:px-20 absolute bottom-0 w-full">
        <ul className="w-1/2 text-[80px] lg:text-[100px] leading-[0.8] font-[daysoftype] uppercase**[font-feature-settings:'ss01']**">
          {sideMenuLists.map((sideMenuItem) => (
            <li
              key={sideMenuItem.id}
              className="group relative duration-500 transition-all"
            >
              {sideMenuItem.to ? (
                <Link to={sideMenuItem.to} onClick={() => setOpen(false)}>
                  <span className="block group-hover:ml-16 transition-all duration-500">
                    {sideMenuItem.name}
                  </span>
                </Link>
              ) : (
                <span className="block group-hover:ml-16 transition-all duration-500">
                  {sideMenuItem.name}
                </span>
              )}
              <div className="absolute left-0 top-[40%] -translate-y-[40%] hidden group-hover:block size-8 bg-(--text-color) rounded-full"></div>
            </li>
          ))}
        </ul>

        <div className="w-1/2 text-end flex md:flex-col md:justify-end gap-10">
          <div className="flex flex-col gap-4 text-2xl">
            <a href="">hello@trionn.com</a>
            <a href="" className="hidden md:block">
              +91 98241 82099
            </a>
          </div>
          <div className="hidden lg:flex justify-end gap-2 mb-4">
            {socialLists.map((social) => (
              <div key={social.id} className="">
                <a href="#">
                  <img
                    src={social.image}
                    alt={social.name}
                    className="size-10"
                  />
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideMenu;
