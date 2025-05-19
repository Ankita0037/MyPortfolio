import React from "react";

const Project = () => {
  return (
    <div className="text-white bg-[#1c294c] flex justify-center w-screen h-[100vh] ">
      <div>
        <h1 className="font-bold text-5xl hover:scale-110 transition-all duration-300 ease-in-out cursor-pointer">
          Projects
        </h1>
      </div>

      <div className="flex flex-col justify-between space-y-4 md:flex-row md:justify-center sm:space-x-10 items-center w-100 ">
        <div className="border-1 shadow-black shadow-sm border-blue-950 p-10 hover:scale-110 hover:bg-blue-800 Transition-all duration-500 ease-in-out rounded-[20px] tracking-wider group h-100 w-80">
          <img src="" className="" />
        </div>
      </div>
    </div>
  );
};

export default Project;
