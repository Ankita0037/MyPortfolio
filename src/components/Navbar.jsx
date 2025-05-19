import react from "react";
import { RiMenuFill } from "react-icons/ri";
import { IoClose } from "react-icons/io5";

import { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div>
      <nav className=" flex list-none justify-between items-center m-0 py-[10px] px-[20px] bg-[#090e1a] border-[1px] border-amber-50 w-screen">
        <div className=" flex gap-5 items-center w-[50vw]">
          <h1 className="relative inline-block text-2xl text-white font-bold tracking-wider cursor-pointer hover:scale-110 transition-all duration-400 before:absolute before:left-1/2 before:bottom-0 before:w-0 before:h-0.5 before:bg-white before:transition-all before:duration-400 before:ease-in-out hover:before:left-0 hover:before:w-full ">
            AnkitaPrajapati
          </h1>

          <div
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-amber-50 block sm:hidden"
          >
            {isMenuOpen ? (
              <IoClose className="w-[30px] h-[30px]" />
            ) : (
              <RiMenuFill className="w-[30px] h-[30px]" />
            )}
          </div>

          <ul className="hidden sm:flex gap-3.5 text-xl font-semibold text-amber-100 ">
            <li className="hover:underline cursor-pointer">Home</li>
            <li className="hover:underline cursor-pointer">About</li>
            <li className="hover:underline cursor-pointer">Contact</li>
          </ul>
        </div>

        <div className="flex gap-4 items-center">
          {/* GitHub */}
          <div className="relative group">
            <a href="https://github.com/Ankita0037" target="_blank">
              <img
                src="src/images/icons8-github-60 (1).png"
                alt="GitHub"
                className="h-[30px] w-[30px]"
              />
            </a>
            <span className="absolute -bottom-6 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity text-xs font-medium bg-black/50 text-white px-2 py-1 rounded whitespace-nowrap z-99">
              GitHub
            </span>
          </div>

          {/* LinkedIn */}
          <div className="relative group">
            <a
              href="https://www.linkedin.com/in/ankita-prajapati-979304265/ "
              target="_blank"
            >
              <img
                src="src/images/icons8-linkedin-100 (1).png"
                alt="LinkedIn"
                className="h-[30px] w-[30px]"
              />
            </a>
            <span className="absolute -bottom-6 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity text-xs font-medium bg-black/50 text-white px-2 py-1 rounded whitespace-nowrap z-99">
              LinkedIn
            </span>
          </div>
        </div>
      </nav>
      <ul
        className={`${
          isMenuOpen ? "block" : "hidden"
        } block sm:hidden text-yellow-50 backdrop-blur-md bg-black/60 absolute w-[100vw] font-semibold text-2xl p-4 space-y-1 z-100`}
      >
        <li className="hover:underline cursor-pointer">Home</li>
        <li className="hover:underline cursor-pointer">About</li>
        <li className="hover:underline cursor-pointer">Contact</li>
      </ul>
    </div>
  );
};

export default Navbar;
