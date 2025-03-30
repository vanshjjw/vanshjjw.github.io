import React from 'react';

import { 
  ResearchProjects, 
  CodingProjects, 
  ProjectsIntroduction } from '../../assets/ProjectsData';



import { 
  ResearchIcon, 
  CodingIcon } from '../../assets/Icons';

import ProjectCard from './ProjectCard';
import './Projects.css';


const ResearchProjectsSection = () => {
  return (
    <div className="projects-section">
        <h2 className="section-heading">
          <ResearchIcon width={24} height={24} />
          <span>Research</span>
        </h2>
        <div className="projects-grid">
          {ResearchProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
  )
}

const CodingProjectsSection = () => {
  return (
    <div className="projects-section">
      <h2 className="section-heading">
        <CodingIcon width={24} height={24} />   
        <span>Coding</span>
      </h2>
      <div className="projects-grid">
        {CodingProjects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  )
}

const MixedRendering = () => {
  return (
    <div className="projects-grid">
      {ResearchProjects.map((project) => (
        <ProjectCard key={project.id} project={project} />
      ))}
      {CodingProjects.map((project) => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </div>
  )
}


const Projects = () => {
  return (
    <div className="projects-container">
      
      <p className="projects-subtitle">
        {ProjectsIntroduction}
      </p>
      
      {/* Rendering in sections */}
      {/* <ResearchProjectsSection /> */}
      {/* <CodingProjectsSection /> */}

      {/* Rendering all projects in a single grid */}
      <MixedRendering />
      
    </div>
  );
};

export default Projects; 