import react from "react";
import { IoMdOpen } from "react-icons/io";

const About = () => {
  return (
    <div
      
      className="text-white bg-gradient-to-b from-[#0f172b] to-[#1c294c] w-full min-h-screen p-4 sm:p-6 flex flex-col items-center"
    >
      <div className="py-10 px-4 sm:px-10">
        <h1 className="text-4xl sm:text-5xl font-bold text-center">About Me</h1>
      </div>

      <div className="w-screen max-w-7xl px-4 sm:px-10 lg:flex lg:justify-between lg:items-center ">
        {/* Image Section */}
        <div className="flex justify-center mb-8 lg:mb-0 lg:flex-shrink-0">
          <img
            src="src/images/my photo.jpg"
            className="rounded-[10px] h-60 w-60 sm:h-100 sm:w-80 object-cover"
            alt="Profile photo"
          />
        </div>

        {/* Content Section */}
        <div className="space-y-5 lg:max-w-2xl mt-11">
          <div>
            <h1 className="text-2xl sm:text-3xl font-bold">I'm Ankita</h1>
            <h3 className="text-xl sm:text-2xl font-semibold">
              Full Stack Developer
            </h3>
          </div>

          <p className="text-base sm:text-lg">
            I am a Full-Stack developer based in Mumbai, India. I completed my
            Bachelor of Commerce from Shankar Narayan College, University of
            Mumbai. Driven by my growing interest in technology, I shifted to IT
            and am currently pursuing my MCA at Thakur Institute of Management
            Studies.
            <br />
            <br />I am very passionate about improving my coding skills and
            developing applications and websites.
          </p>

          <div className="flex gap-2 items-baseline">
            <span className="text-amber-200 font-medium">Email:</span>
            <span>prajapatiankita084@gmail.com</span>
          </div>

          <div className="flex gap-2 items-baseline">
            <span className="text-amber-200 font-medium">Place:</span>
            <span>Mumbai, India</span>
          </div>

          <a
            href="https://drive.google.com/file/d/1dd6GlVOjI60H2K3YhuDh6ek7yZOiJvjI/view?usp=drive_link"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block group mt-4"
          >
            <div className="border-1 bg-blue-700 text-xl sm:text-2xl font-bold rounded-[4px] px-4 py-2 w-fit flex justify-center items-center hover:bg-blue-600 transition-colors">
              <button className="flex items-center gap-1">
                <span>Resume</span>
                <IoMdOpen className="group-hover:translate-x-2 transition-all duration-500 ease-in-out" />
              </button>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;
