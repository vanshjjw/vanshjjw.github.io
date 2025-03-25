import React from 'react';
import { ResearchProjects, CodingProjects } from '../../assets/ProjectsData';
import ProjectCard from './ProjectCard';
import { ResearchIcon, CodingIcon } from '../../assets/Icons';

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
      
      {/* Research Projects Section */}
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

      {/* Coding Projects Section */}
      <div className="projects-section">
        <h2 className="section-heading">
          <CodingIcon width={24} height={24} />
          <span>Code</span>
        </h2>
        <div className="projects-grid">
          {CodingProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects; 