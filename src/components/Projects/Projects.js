import React from 'react';
import { projectsData } from '../../assets/ProjectsData';
import ProjectCard from './ProjectCard';

import './Projects.css';


const INTRODUCTION =
`
In past few years, I have worked a few little and A collection of my recent development work. 
Each project represents different skills and technologies I've worked with.
`

const Projects = () => {
  return (
    <div className="projects-container">
      <p className="projects-subtitle">
        {INTRODUCTION}
      </p>
      
      <div className="projects-grid">
        {projectsData.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
};

export default Projects; 