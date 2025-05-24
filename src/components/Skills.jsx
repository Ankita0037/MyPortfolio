import React from "react";

const frontendSkills = ["HTML", "CSS", "JavaScript", "React"];
const backendSkills = ["Node.js", "Express.js", "MongoDB", "Java"];
const toolSkills = ["Git", "GitHub", "Postman"];

const Skills = () => {
  return (
    <div id = "skill-section" className="relative text-white bg-[#1c294c] w-screen min-h-[100vh] p-10 space-y-10 ">
      <div className="flex justify-center font-bold text-6xl ">
        <h1 className = "hover:scale-110 transition-all duration-300 ease-in-out cursor-pointer">Technical Skills</h1>
      </div>

    {/* Card container */}
      <div className="flex flex-col justify-between space-y-4 md:flex-row md:justify-center sm:space-x-10 items-center w-100% ">
        <div className="border-1 shadow-black shadow-sm border-blue-950 p-10 hover:scale-110 hover:bg-blue-800 Transition-all duration-500 ease-in-out rounded-[20px] tracking-wider group h-100 w-80">
          <h1 className="font-semibold text-4xl hover:scale-120 group-hover:text-green-500 transition-all duration-500 ease-in-out cursor-pointer">Frontend</h1>
          <ul className="text-2xl p-5 space-y-6">
            {frontendSkills.map((skill, index) => (
                <li key={index} className="hover:scale-105 hover:font-bold hover:underline transition-all duration-400 ease-in"> {skill} </li>
            ))}
            
          </ul>
        </div>
        <div className="border-1 shadow-black shadow-sm border-blue-950 p-10 hover:scale-110 hover:bg-blue-800 Transition-all duration-500 ease-in-out rounded-[20px] tracking-wider group h-100 w-80">
          <h1 className="font-semibold text-4xl hover:scale-120 group-hover:text-green-500 transition-all duration-500 ease-in-out cursor-pointer">Backend</h1>
          <ul className="text-2xl p-5 space-y-6">
            {backendSkills.map((skill, index) =>(
                <li key = {index} className="hover:scale-105 hover:font-bold hover:underline transition-all duration-400 ease-in"> {skill} </li>
            ))}
          </ul>
        </div>
        <div className="border-1 shadow-black shadow-sm border-blue-950 p-10 hover:scale-110 hover:bg-blue-800 Transition-all duration-500 ease-in-out rounded-[20px] tracking-wider group h-100 w-80">
          <h1 className="font-semibold text-4xl hover:scale-120 group-hover:text-green-500 transition-all duration-500 ease-in-out cursor-pointer">Tools</h1>
          <ul className="text-2xl p-5 space-y-6">
            {toolSkills.map((skill ,index) =>(
                <li key = {index} className="hover:scale-105 hover:font-bold hover:underline transition-all duration-400 ease-in"> {skill} </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Skills;
