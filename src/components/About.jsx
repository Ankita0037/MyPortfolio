import react from "react";
import { IoMdOpen } from "react-icons/io";

const About = () => {
  return (
    <div
      id="about-section"
      className="text-white bg-gradient-to-b from-[#0f172b] to-[#1c294c] w-screen min-h-[100vh] p-4 sm:p-6 flex flex-col items-center"
    >
      <div className="p-10">
        <h1 className="text-3xl sm:text-5xl font-bold text-center">About Me</h1>
      </div>

      <div className="border-2 border-blue-600 shadow-2xl shadow-black p-10 w:auto lg:w-200 lg:flex ">
        <div className="p-5">
          <img src="src\images\my photo.jpg" className="rounded-[10px]" />
        </div>
        <div className="space-y-5">
          <div>
            <h1 className="text-2xl font-bold">I,m Ankita</h1>
            <h3 className="text-xl font-semibold">Full Stack Developer</h3>
          </div>
          <p className="">
            I am a Full-Stack developer based in Mumbai,India. I completed my
            Bachelor of Commerce from Shankar Narayan College, University of
            Mumbai. Driven by my growing interest in technology, I shifted to IT
            and am currently pursuing my MCA at Thakur Institute of Management
            Studies.
            <br />I am very pessionate about improving my coding skills and
            developing applications and websites.
          </p>
          <p className="flex gap-2">
            <h4 className="text-amber-200">Email : </h4>{" "}
            prajapatiankita084@gmail.com
          </p>
          <p className="flex gap-2">
            <h4 className="text-amber-200">Place : </h4> Mumbai,India
          </p>

          <a
            href="https://drive.google.com/file/d/1dd6GlVOjI60H2K3YhuDh6ek7yZOiJvjI/view?usp=drive_link"
            target="_blank"
            className="group"
          >
            <div className="border-1 bg-blue-700 text-2xl font-bold rounded-[4px] p-1 w-35 flex justify-center items-center">
              <button className="style-none flex items-center gap-1">
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
