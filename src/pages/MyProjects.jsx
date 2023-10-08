import React from "react";
import ProjectCard from "../components/ProjectCard.jsx";

function MyProjects() {
  return (
    <div className="myProjects p-[40px] grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3">
      <ProjectCard />
      <ProjectCard />
      <ProjectCard />
      <ProjectCard />
      <ProjectCard />
    </div>
  );
}

export default MyProjects;
