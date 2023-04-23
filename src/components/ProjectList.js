import React from "react";
import ProjectItem from "./ProjectItem";

function ProjectList({ projects }) {
  const listProjects= projects.map((projectName)=>(
    <ProjectItem 
    key={projectName.id}
    name={projectName.name}
    about={projectName.about}
    technologies={projectName.technologies}
    />
  ))
  console.log(projects);
  return (
    <div id="projects">
      <h2>My Projects</h2>
      <div id="project-list">{/* render ProjectItem components here */}
      {listProjects}
      
      </div>
    </div>
  );
}

export default ProjectList;
