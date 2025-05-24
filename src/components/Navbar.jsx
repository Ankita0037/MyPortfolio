import react from "react";
import { RiMenuFill } from "react-icons/ri";
import { IoClose } from "react-icons/io5";
import { HashLink as Link } from "react-router-hash-link";

import { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="fixed z-999 backdrop-blur-md bg-black/50 ">
      <nav className=" flex list-none justify-between items-center m-0 py-[10px] px-[20px] border-[1px] border-b-1 border-b-white w-screen">
        <div className=" flex gap-5 items-center w-[50vw]">
          <Link to="/">
            <h1
              onClick={() => scrollToTop()}
              className="relative inline-block text-2xl text-white font-bold tracking-wider cursor-none hover:scale-110 transition-all duration-400 before:absolute before:left-1/2 before:bottom-0 before:w-0 before:h-0.5 before:bg-white before:transition-all before:duration-400 before:ease-in-out hover:before:left-0 hover:before:w-full"
            >
              AnkitaPrajapati
            </h1>
          </Link>
          <div
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-amber-50 block lg:hidden"
          >
            {isMenuOpen ? (
              <IoClose className="w-[30px] h-[30px]" />
            ) : (
              <RiMenuFill className="w-[30px] h-[30px]" />
            )}
          </div>

          <ul className="hidden lg:flex gap-3.5 text-xl font-semibold text-amber-100 ">
            <Link to="#about" smooth>
              <li className="hover:underline cursor-none">About</li>
            </Link>
            <Link to="#skill" smooth>
              <li className="hover:underline cursor-none">Skills</li>
            </Link>
            <Link to="#project" smooth>
              <li className="hover:underline cursor-none">Projects</li>
            </Link>
            <Link to="#education" smooth>
              <li className="hover:underline cursor-none">Education</li>
            </Link>
            <Link to="#contact" smooth>
              <li className="hover:underline cursor-none">Contact</li>
            </Link>

            <a
              href="https://drive.google.com/file/d/1dd6GlVOjI60H2K3YhuDh6ek7yZOiJvjI/view?usp=drive_link"
              target="_blank"
              className="hover:underline cursor-none"
            >
              Resume
            </a>
          </ul>
        </div>

        <div className="flex gap-4 items-center">
          {/* GitHub */}
          <div className="relative group">
            <a href="https://github.com/Ankita0037" target="_blank">
              <img
                src="src/images/icons8-github-60 (1).png"
                alt="GitHub"
                className="h-[30px] w-[30px] cursor-none"
              />
            </a>
            <span className="absolute -bottom-6 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity text-xs font-medium bg-black/50 text-white px-2 py-1 rounded whitespace-nowrap z-99">
              GitHub
            </span>
          </div>

          {/* LinkedIn */}
          <div className="relative group ">
            <a
              href="https://www.linkedin.com/in/ankita-prajapati-979304265/ "
              target="_blank"
            >
              <img
                src="src/images/icons8-linkedin-100 (1).png"
                alt="LinkedIn"
                className="h-[30px] w-[30px] cursor-none"
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
        } block lg:hidden text-yellow-50 backdrop-blur-md bg-black/60 absolute w-[100vw] font-semibold text-2xl p-4 space-y-1 z-100`}
      >
        <Link to="#about" smooth>
          <li className="hover:underline cursor-none">About</li>
        </Link>
        <Link to="#skill" smooth>
          <li className="hover:underline cursor-none">Skills</li>
        </Link>
        <Link to="#project" smooth>
          <li className="hover:underline cursor-none">Projects</li>
        </Link>
        <Link to="#education" smooth>
          <li className="hover:underline cursor-none">Education</li>
        </Link>
        <Link to="#contact" smooth>
          <li className="hover:underline cursor-none">Contact</li>
        </Link>
      </ul>
    </div>
  );
};

export default Navbar;
