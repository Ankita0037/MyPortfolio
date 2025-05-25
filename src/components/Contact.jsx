import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { IoPersonSharp } from "react-icons/io5";
import { MdMailOutline } from "react-icons/md";
import { RiMessage2Line } from "react-icons/ri";
import { IoIosPaperPlane } from "react-icons/io";
import { FaHeadset } from "react-icons/fa6";

export const Contact = () => {
  
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_sf4o64n", "template_gez2s7c", form.current, {
        publicKey: "wrYtRQZ673DxzOLEQ",
      })
      .then(
        () => {
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <div className="min-h-[100vh] bg-[#1c294c] text-white flex flex-col items-center justify-start p-4 sm:p-10 w-screen">
      <div className="flex items-center gap-4 mb-8">
        <FaHeadset className="text-5xl" />
        <h1 className="text-3xl sm:text-5xl font-bold">Get in Touch</h1>
      </div>
  
      <div className="w-full max-w-4xl bg-[#101d42] border-2 border-blue-900 rounded-lg shadow-black shadow-2xl p-6 sm:p-10">
        <div className="flex flex-col sm:flex-row gap-8 items-center">
          <div className="hidden sm:block flex-1">
            <img 
              src="src/images/contact_Background-removebg-preview.png" 
              alt="Contact illustration"
              className="w-full h-auto"
            />
          </div>
  
          <div className="flex-1 w-full">
            <form ref={form} onSubmit={sendEmail} className="space-y-4 w-full">
              <div className="flex items-center border rounded-lg bg-[#1c294c] p-3 focus-within:border-amber-300 transition-colors duration-200">
                <IoPersonSharp className="text-xl mr-2 text-gray-400 group-focus-within:text-fuchsia-700 transition-colors duration-200" />
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  className="w-full bg-transparent focus:outline-none"
                  required
                />
              </div>
  
              <div className="flex items-center border rounded-lg bg-[#1c294c] p-3 focus-within:border-amber-300 transition-colors duration-200">
                <MdMailOutline className="text-xl mr-2" />
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  className="w-full bg-transparent focus:outline-none"
                  required
                />
              </div>
  
              <div className="flex items-start border rounded-lg bg-[#1c294c] p-3 min-h-[120px] focus-within:border-amber-300 transition-colors duration-200">
                <RiMessage2Line className="text-xl mr-2 mt-1" />
                <textarea
                  name="message"
                  placeholder="Message"
                  className="w-full bg-transparent focus:outline-none resize-none"
                  required
                />
              </div>
  
              <button
                type="submit"
                className="flex items-center justify-center gap-2 bg-blue-800 hover:bg-blue-700 text-white text-xl font-bold py-2 px-6 rounded-md shadow-md transition-colors w-full cursor-none"
              >
                Send <IoIosPaperPlane />
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
