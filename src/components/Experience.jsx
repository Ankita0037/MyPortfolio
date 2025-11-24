import React from "react";
import { MdWork } from "react-icons/md";
import { motion } from "framer-motion";

const Experience = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        when: "beforeChildren"
      }
    }
  };

  const titleVariants = {
    hidden: { y: -30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    },
    hover: {
      y: -10,
      boxShadow: "0 20px 25px -5px rgba(59, 130, 246, 0.5)",
      transition: {
        duration: 0.3
      }
    }
  };

  const bulletVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <motion.div
      className="text-white bg-gradient-to-b from-[#0f172b] to-[#1c294c] w-screen min-h-screen p-4 sm:p-6 flex flex-col items-center"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.2 }}
      variants={containerVariants}
    >
      {/* Title Section */}
      <motion.div 
        className="flex flex-col items-center mb-10 sm:mb-20 w-full"
        variants={titleVariants}
      >
        <div className="flex items-center gap-4 mt-14">
          <MdWork className="text-4xl sm:text-5xl text-amber-200" />
          <h1 className="text-3xl sm:text-5xl font-bold text-center">
            Experience
          </h1>
        </div>
      </motion.div>

      {/* Experience Card */}
      <motion.div 
        className="w-full max-w-5xl space-y-6"
        variants={containerVariants}
      >
        <motion.div
          className="bg-[#101d42] border-2 border-blue-900 rounded-lg shadow-xl p-6 sm:p-8 hover:border-blue-600 transition-all duration-300"
          variants={cardVariants}
          whileHover="hover"
        >
          {/* Header Section */}
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4 gap-2">
            <motion.h1 
              className="text-2xl sm:text-3xl font-bold text-white"
              whileHover={{ x: 5 }}
            >
              Full Stack Developer Intern
            </motion.h1>
            <motion.div
              className="flex items-center gap-2 bg-blue-900/50 px-4 py-2 rounded-md"
              whileHover={{ scale: 1.05 }}
            >
              <span className="text-green-400 font-semibold">●</span>
              <span className="text-gray-300 font-medium">September 2025 - Present</span>
            </motion.div>
          </div>

          {/* Company Info */}
          <div className="mb-6">
            <motion.h2 
              className="text-xl sm:text-2xl font-semibold text-amber-300 mb-2"
              whileHover={{ x: 5 }}
            >
              Infosys Springboard
            </motion.h2>
            <motion.div 
              className="flex flex-wrap gap-2 items-center text-gray-300"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: false }}
              transition={{ delay: 0.3 }}
            >
              <span className="font-semibold">Project:</span>
              <span className="text-blue-300">Hire Helper</span>
              <span className="mx-2">|</span>
              <motion.a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-blue-300 underline flex items-center gap-1"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Live Demo
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </motion.a>
            </motion.div>
          </div>

          {/* Key Responsibilities */}
          <motion.div 
            className="space-y-4"
            variants={containerVariants}
          >
            <motion.ul className="space-y-3 text-gray-300">
              <motion.li 
                className="flex items-start gap-3"
                variants={bulletVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.2 }}
              >
                <span className="text-blue-400 font-bold mt-1 flex-shrink-0">▸</span>
                <span className="leading-relaxed">
                  Developed <span className="font-semibold text-white">Hire Helper</span>, an on-demand task assistance platform using the <span className="font-semibold text-amber-200">MERN stack</span>, enabling users to post and discover local tasks seamlessly.
                </span>
              </motion.li>
              <motion.li 
                className="flex items-start gap-3"
                variants={bulletVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.2 }}
                transition={{ delay: 0.1 }}
              >
                <span className="text-blue-400 font-bold mt-1 flex-shrink-0">▸</span>
                <span className="leading-relaxed">
                  Engineered a responsive frontend with <span className="font-semibold text-amber-200">React & Tailwind CSS</span> and implemented secure user authentication with <span className="font-semibold text-white">OTP verification</span> via Node.js & Nodemailer.
                </span>
              </motion.li>
              <motion.li 
                className="flex items-start gap-3"
                variants={bulletVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.2 }}
                transition={{ delay: 0.2 }}
              >
                <span className="text-blue-400 font-bold mt-1 flex-shrink-0">▸</span>
                <span className="leading-relaxed">
                  Designed and integrated <span className="font-semibold text-amber-200">RESTful APIs</span> for task management and real-time notifications, enhancing user engagement and platform interactivity.
                </span>
              </motion.li>
            </motion.ul>
          </motion.div>

          {/* Tech Stack Tags */}
          <motion.div 
            className="mt-6 pt-6 border-t border-blue-800"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: false }}
            transition={{ delay: 0.4 }}
          >
            <h3 className="text-sm font-semibold text-gray-400 mb-3">Technologies Used:</h3>
            <motion.div 
              className="flex flex-wrap gap-2"
              variants={containerVariants}
            >
              {['MongoDB', 'Express.js', 'React', 'Node.js', 'Tailwind CSS', 'REST API', 'Nodemailer'].map((tech, index) => (
                <motion.span
                  key={index}
                  className="bg-cyan-900/50 border border-cyan-700 text-cyan-200 text-sm font-medium rounded-md px-3 py-1.5"
                  whileHover={{ scale: 1.1, backgroundColor: "rgba(6, 78, 59, 0.7)" }}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: false }}
                  transition={{ delay: index * 0.05 }}
                >
                  {tech}
                </motion.span>
              ))}
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Experience;
