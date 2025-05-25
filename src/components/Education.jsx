import React from "react";
import { FaGraduationCap } from "react-icons/fa";

const Education = () => {
  return (
    <div className=" text-white bg-[#1c294c] w-screen min-h-[100vh] p-4 sm:p-6 flex flex-col items-center">
      {/* Title Section */}
      <div className="flex flex-col items-center mb-10 sm:mb-20 w-full">
        <div className="flex items-center gap-4">
          <FaGraduationCap className="text-4xl sm:text-5xl" />
          <h1 className="text-3xl sm:text-5xl font-bold text-center">
            My Education
          </h1>
        </div>
      </div>

      {/* Education Card */}
      <div className="w-full max-w-4xl space-y-5">
        <div className="bg-[#101d42] border-2 border-blue-900 rounded-lg shadow-lg p-6 sm:p-8 flex flex-col sm:flex-row items-center gap-6 sm:gap-8">
          {/* College Image */}
          <div className="min-w-[160px]">
            <img
              src="src\images\timscdr.jpg"
              alt="Shankar Narayan College"
              className="w-40 h-auto rounded-md object-cover"
            />
          </div>

          {/* Education Details */}
          <div className="text-center sm:text-left">
            <h1 className="text-xl sm:text-2xl font-bold mb-2">
              Masters Of Computer Application
            </h1>
            <p className="text-gray-300 mb-3">
              Thakur Institute of Management Studies, Career Development and Research.
            </p>
            <h2 className="text-amber-300 font-medium">
              2024-2026 | Pursuing
            </h2>
          </div>
        </div>
        <div className="bg-[#101d42] border-2 border-blue-900 rounded-lg shadow-lg p-6 sm:p-8 flex flex-col sm:flex-row items-center gap-6 sm:gap-8">
          {/* College Image */}
          <div className="min-w-[160px]">
            <img
              src="src/images/sn college.avif"
              alt="Shankar Narayan College"
              className="w-40 h-auto rounded-md object-cover"
            />
          </div>

          {/* Education Details */}
          <div className="text-center sm:text-left">
            <h1 className="text-xl sm:text-2xl font-bold mb-2">
              Bachelor of Commerce
            </h1>
            <p className="text-gray-300 mb-3">
              Shankar Narayan College of Arts, Commerce and Science
            </p>
            <h2 className="text-amber-300 font-medium">
              2020-2023 | Completed | 7.17 CGPA
            </h2>
          </div>
        </div>
        <div className="bg-[#101d42] border-2 border-blue-900 rounded-lg shadow-lg p-6 sm:p-8 flex flex-col sm:flex-row items-center gap-6 sm:gap-8">
          {/* College Image */}
          <div className="min-w-[160px]">
            <img
              src="src\images\Kapol clg.avif"
              alt="Shankar Narayan College"
              className="w-40 h-auto rounded-md object-cover"
            />
          </div>

          {/* Education Details */}
          <div className="text-center sm:text-left">
            <h1 className="text-xl sm:text-2xl font-bold mb-2">HSC</h1>
            <p className="text-gray-300 mb-3">Aadarsh Education Society</p>
            <h2 className="text-amber-300 font-medium">
              2018-2020 | Completed | 79.38%
            </h2>
          </div>
        </div>
      </div>

      {/* <div className="border-2 border-blue-600 h-30 w-150"></div> */}
    </div>
  );
};

export default Education;
