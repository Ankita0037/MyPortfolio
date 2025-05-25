import React, { useState } from "react";
import { TypeAnimation } from "react-type-animation";
import { RiScrollToBottomLine } from "react-icons/ri";
import { HashLink as Link } from "react-router-hash-link";
import { motion } from "framer-motion";

const sliderVariants = {
  initial: {
    x: 0,
  },
  animate: {
    x: "-100%",
    transition: {
      duration: 10,
      ease: "linear",
      repeat: Infinity,
      repeatType: "mirror",
    },
  },
};

const Hero = () => {
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const tiltX = ((y - centerY) / centerY) * 10; // 10 degrees max tilt
    const tiltY = ((centerX - x) / centerX) * 10;

    setTilt({ x: tiltX, y: tiltY });
  };

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0 });
  };

  return (
    <div className="relative text-white bg-[#090e1a] w-screen min-h-[100vh] p-5">
      <motion.div
        variants={sliderVariants}
        initial="initial"
        animate="animate"
        className="absolute text-[40vh] -bottom-[15px] whitespace-nowrap text-white/10 w-[140%] font-bold z-0 pointer-events-none select-none slidingTextContainer"
        aria-hidden="true"
      >
        Web Developer React Dev
      </motion.div>

      {/* Hero Section */}
      <div className="flex flex-col justify-between xl:flex-row xl:justify-between items-center w-100% p-0 sm:p-9 mt-11">
        <div className="pt-0 sm:pt-12 xl:pt-0 space-y-4 w-full xl:w-1/2 h-60 sm:h-auto transition-all duration-500 ease-in-out">
          <h1 className="font-bold text-3xl tracking-wider">
            Hi, I'am Ankita Prajapati
          </h1>
          <div className="font-bold tracking-wider sm:text-2xl h-20 sm:h-14">
            <span className="text-2xl sm:text-3xl">I am a </span>
            <TypeAnimation
              className="text-3xl sm:text-4xl lg:text-5xl inline-block text-[#ffff99]"
              sequence={[`Programmer!`, 1000, "Full Stack Developer!", 1000]}
              Wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </div>

          <p className="text-xl sm:text-2xl font-semibold tracking-wider">
            I'am based in Mumbai,Maharastra, and I'am Passionate about Frontend,
            Full Stack.
          </p>
        </div>

        {/* image container*/}
        <div
          className="h-70 w-70 sm:w-100 sm:h-100 bg-white rounded-full flex justify-center items-center mt-10 hover:drop-shadow-[0_0_20px_white] transition-all duration-500 ease-in-out cursor-none"
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          style={{
            transform: `perspective(1000px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
            transition: "transform 0.3s cubic-bezier(0.03, 0.98, 0.52, 0.99)",
          }}
        >
          <img
            src="src/images/my photo.jpg"
            className="h-70 w-70 sm:w-100 sm:h-100 rounded-full z-100 hover:scale-105 transition-all duration-500 ease-in-out relative "
            style={{
              transform: `perspective(1000px) rotateX(${
                tilt.x * -0.5
              }deg) rotateY(${tilt.y * -0.5}deg)`,
            }}
          />
        </div>
      </div>

      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0] rotate-180 z-10">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="relative block w-[calc(100%+1.3px)] h-[158px]"
        >
          <path
            d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
            opacity=".25"
            className="fill-[#132248]"
          ></path>
          <path
            d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"
            className="fill-[#0f172b]"
          ></path>
        </svg>
      </div>

      {/* scrolldown button */}
      <div className="relative z-50 flex justify-center items-center h-20 text-white animate-pulse duration-10">
        <Link to="#about" smooth>
          <RiScrollToBottomLine className="relative z-55 w-10 h-10 sm:w-14 sm:h-20 animate-bounce hover:animate-none hover:text-blue-500 cursor-none" />
        </Link>
      </div>
    </div>
  );
};

export default Hero;
