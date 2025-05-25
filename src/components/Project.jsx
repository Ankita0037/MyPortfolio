import React from "react";

const ProjectCard = ({ project }) => (
  <div className="rounded-2xl border border-blue-950 shadow-sm shadow-black p-5 bg-gradient-to-b from-blue-950 to-gray-800  
  h-auto min-h-[500px] w-[85vw] sm:w-[350px] md:w-full md:max-w-[400px] lg:max-w-[450px] xl:max-w-[400px]
  hover:scale-[1.02] transition-all duration-300 flex flex-col flex-shrink-0 snap-center md:flex-shrink">
    {/* Image container with consistent aspect ratio */}
    <div className="relative w-full aspect-video mb-4 rounded-lg overflow-hidden">
      <div className="absolute inset-0 bg-red-200 border flex items-center justify-center">
        <span className="text-gray-800 font-medium">Project Image</span>
      </div>
    </div>
    
    <div className="flex flex-col flex-grow px-2">
      <h1 className="text-2xl font-bold mb-3 text-center">{project.title}</h1>
      
      <ul className="flex flex-wrap justify-center gap-2 mb-4">
        {project.tags.map((tag, i) => (
          <li key={i} className="border bg-cyan-800 text-sm font-medium rounded-md px-3 py-1">
            {tag}
          </li>
        ))}
      </ul>
      
      <p className="text-base text-gray-300 leading-relaxed flex-grow">
        {project.description}
      </p>
      
      <div className="mt-4 text-center">
        <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-md transition-colors">
          View Project
        </button>
      </div>
    </div>
  </div>
);

const Project = () => {
  const projects = [
    {
      title: "Fitness Tracker",
      tags: ["JavaScript", "React", "MongoDB"],
      description: "A comprehensive fitness tracking application with workout logging and progress visualization features. Includes user authentication and data analytics dashboard."
    },
    {
      title: "E-commerce App",
      tags: ["React", "Node.js", "Firebase"],
      description: "Full-featured online store with product catalog, cart functionality, and secure checkout process. Integrated with payment gateway and admin panel."
    },
    {
      title: "Portfolio Site",
      tags: ["Next.js", "Tailwind", "Framer"],
      description: "Modern responsive portfolio showcasing projects with smooth animations. Optimized for performance and SEO with dark/light mode toggle."
    }
  ];

  return (
    <div className="text-white bg-[#1c294c] w-screen min-h-screen py-8 px-4">
      <div className="mb-12">
        <h1 className="text-3xl sm:text-4xl font-bold text-center hover:scale-105 transition-all duration-300 cursor-pointer">
          Projects
        </h1>
      </div>

      {/* Mobile/small screens (horizontal scroll) */}
      <div className="md:hidden flex flex-nowrap overflow-x-auto gap-6 snap-x snap-mandatory px-4 scrollbar-thin scrollbar-thumb-blue-900 pb-4 scroll-smooth">
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>

      {/* Medium+ screens (grid layout) */}
      <div className="hidden md:flex flex-wrap justify-center gap-8 px-4">
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </div>
  );
};

export default Project;