import React from "react";

const Hero = () => {
  return (
    <div className="relative text-white bg-[#090e1a]">
      {/* Hero Section */}

      <div className="min-h-[90vh] p-10 px-4  ">
      <h1 className = "font-bold text-2xl">Hi, I'am Ankita Prajapati</h1>
      <h1 className = "font-bold text-2xl">And I am a Full Stack Developer</h1>
      <p>
        I'am based in Mumbai,Maharastra, and I'am Passionate about Frontend,
        Full Stack.
      </p>
      <div className = "">
        <img src="src\images\my photo.jpg" className = "h-100 w-100 rounded-full "></img>
      </div>
      </div>
      
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0] rotate-180">
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
            className="fill-[#0f172b]"
          ></path>

          <path
            d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"
            className="fill-[#0f172b]"
          ></path>
        </svg>
      </div>
    </div>
  );
};

export default Hero;
