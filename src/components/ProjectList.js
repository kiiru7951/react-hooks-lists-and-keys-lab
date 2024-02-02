import React from "react";
import ProjectItem from "./ProjectItem";



function ProjectList({ projects }) {
  console.log(projects);

  const projectELement = projects.map((project) => {
    return <h1 key={project.id}>
      <ProjectItem name={project.name} about={project.about} technologies={project.technologies}/>
    </h1>
  })

  return (
    <div id="projects">
      <h2>My Projects</h2>
      <div id="project-list">
        {projectELement}
      </div>
    </div>
  );
}

export default ProjectList;
