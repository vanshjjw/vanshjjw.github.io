import React from 'react';
import { projectsData } from '../../assets/ProjectsData';
import ProjectCard from './ProjectCard';

import './Projects.css';


const INTRODUCTION =
`Sometimes, I build stuff. Most of the stuff I build is not ready for presentation and I have often do not build for
for others. I am trying to get better at showing my projects. This page is a work in progress. I am trying to be better!`;

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