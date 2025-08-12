// src/components/Projects.jsx
import React from "react";
import ProjectsLogic from "./ProjectsLogic";

const Projects = () => {
  const { visibleProjects, hasMore, showMore } = ProjectsLogic();

  return (
    <section className="mt-40 px-6 font-poppins">
      <h1 className="text-4xl font-bold font-poppins text-center mb-10 text">
        Projects
      </h1>

      <div className="flex flex-col gap-8">
        {visibleProjects.map((project) => (
          <div
            key={project.id}
            className="flex flex-col md:flex-row items-center md:items-start gap-6 p-6 rounded-2xl backdrop-blur-md bg-white/10 border border-white/20 shadow-lg transition-transform hover:scale-[1.01]"
          >
            <img
              src={project.image}
              alt={project.name}
              className="w-full md:w-60 h-60 object-cover rounded-lg shadow-md"
            />
            <div className="text-center md:text-left">
              <h2 className="text-2xl font-semibold text">
                {project.name}
              </h2>
              <p className="text-white/80 mt-2">{project.description}</p>
              <button className="mt-4 px-5 py-2 bg-granite-green/80 text-dark font-bold rounded-lg hover:bg-dust-storm transition duration-500">
                See Details
              </button>
            </div>
          </div>
        ))}
      </div>

      {hasMore && (
        <div className="flex justify-center mt-8">
          <button
            onClick={showMore}
            className="px-6 py-2 border border-white/30 rounded-lg text-white hover:bg-white/20 transition"
          >
            See More
          </button>
        </div>
      )}
    </section>
  );
};

export default Projects;
