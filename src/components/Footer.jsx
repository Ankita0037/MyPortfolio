import React from "react";
import { FaAngleRight } from "react-icons/fa6";
import { HashLink as Link } from "react-router-hash-link";

const Footer = () => {
  return (
    <footer className="w-full bg-gradient-to-b from-[#051f5b] to-black text-white py-12 px-4 sm:px-8 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto">
        {/* Main Footer Content */}
        <div className="flex flex-col md:flex-row justify-between gap-8 md:gap-4 lg:gap-8 mb-8">
          {/* Portfolio Info */}
          <div className="flex-1 max-w-md">
            <h1 className="font-bold text-2xl mb-2">Ankita's Portfolio</h1>
            <p className="text-sm mb-2">
              Thank You for visiting my personal portfolio website. Connect with
              me over socials.
            </p>
            <p className="text-sm">
              Keep Rising. Connect with me over live chat!
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex-1 max-w-xs">
            <h1 className="font-bold text-2xl mb-4">Quick Links</h1>
            <ul className="space-y-2">
              {["Home", "About", "Skills", "Education", "Projects"].map(
                (item) => (
                  <Link to={`#${item.toLowerCase()}`} key={item}>
                    <li
                      key={item}
                      className="flex items-center gap-2 hover:text-blue-300 transition-colors cursor-none"
                    >
                      <FaAngleRight className="bg-blue-700 rounded-full p-1 text-white flex-shrink-0" />
                      <span className="text-sm md:text-base">{item}</span>
                    </li>
                  </Link>
                )
              )}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="flex-1 max-w-xs">
            <h1 className="font-bold text-2xl mb-4">Contact Info</h1>
            <div className="space-y-2">
              <p className="text-sm md:text-base">
                prajapatiankita084@gmail.com
              </p>
              <p className="text-sm md:text-base">Mumbai, India-401209</p>
              <a
                href="https://drive.google.com/file/d/1dd6GlVOjI60H2K3YhuDh6ek7yZOiJvjI/view?usp=drive_link"
                target="_blank"
                className="hover:underline cursor-pointer sm:cursor-none"
              ></a>
            </div>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="border-t border-gray-700 pt-6 text-center text-sm text-gray-400">
          <p>Designed & Developed By Ankita Prajapati</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
