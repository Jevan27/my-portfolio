// src/components/ProjectsLogic.jsx
import React, { useState } from "react";
import { projectsData } from "../../data/Projects";

const ProjectsLogic = () => {
  const [visibleCount, setVisibleCount] = useState(2); // Show 2 initially

  const showMore = () => {
    setVisibleCount((prev) => prev + 2);
  };

  return {
    visibleProjects: projectsData.slice(0, visibleCount),
    hasMore: visibleCount < projectsData.length,
    showMore,
  };
};

export default ProjectsLogic;
