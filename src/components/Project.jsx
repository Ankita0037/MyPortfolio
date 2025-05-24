import React from "react";

const ProjectCard = ({ project }) => (
  <div className="rounded-2xl border border-blue-950 shadow-sm shadow-black p-4 bg-gradient-to-b from-blue-950 to-gray-800  
  h-[500px] w-[350px] md:h-[550px] md:w-[400px] 
  hover:scale-[1.02] transition-all duration-300 flex flex-col">
    <div className="bg-red-200 border w-full h-[140px] md:h-[160px] mb-3 rounded-lg flex-shrink-0"></div>
    <h1 className="text-2xl md:text-2xl font-bold px-1 py-1 flex-shrink-0">{project.title}</h1>
    <ul className="flex flex-wrap justify-start gap-2 mb-3 flex-shrink-0">
      {project.tags.map((tag, i) => (
        <li key={i} className="border bg-cyan-800 text-sm font-medium rounded-md px-2 py-1">
          {tag}
        </li>
      ))}
    </ul>
    <p className="text-base px-1 pb-2 overflow-hidden text-ellipsis flex-grow">
      {project.description}
    </p>
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
      <div className="mb-8">
        <h1 className="text-3xl sm:text-4xl font-bold text-center hover:scale-105 transition-all duration-300 cursor-pointer">
          Projects
        </h1>
      </div>

      <div className="flex flex-wrap justify-center gap-6">
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </div>
  );
};

export default Project;