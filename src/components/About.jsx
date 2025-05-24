import react from "react";

const About = () => {
  return (
    <div className="text-white bg-[#1c294c] w-screen min-h-[100vh] p-4 sm:p-6 flex flex-col items-center">
      <div className="p-10">
        <h1 className="text-3xl sm:text-5xl font-bold text-center">About Me</h1>
      </div>

      <div className="border-2 border-blue-600 shadow-2xl shadow-black p-10 w:auto lg:w-200 lg:flex ">
        <div className = "p-5">
          <img src="src\images\my photo.jpg" className = "rounded-[10px]" />
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

          <div className="flex justify-center">
            <button className="border-1 bg-blue-700 text-2xl font-bold rounded-[4px] p-1">
              Resume
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
