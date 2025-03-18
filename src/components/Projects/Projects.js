import React, { useState, useEffect } from 'react';
import { projects } from './ProjectsData';
import './Projects.css';

// Icons for project links
const GithubIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
  </svg>
);

const ExternalLinkIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
    <polyline points="15 3 21 3 21 9"></polyline>
    <line x1="10" y1="14" x2="21" y2="3"></line>
  </svg>
);

const ProjectCard = ({ project }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imgSrc, setImgSrc] = useState('/images/projects/placeholder.jpg');
  
  // Handle image loading
  useEffect(() => {
    const img = new Image();
    img.onload = () => {
      setImgSrc(project.image);
      setImageLoaded(true);
    };
    img.onerror = () => {
      setImgSrc('/images/projects/placeholder.jpg');
      setImageLoaded(true);
    };
    img.src = project.image;
  }, [project.image]);
  
  return (
    <div 
      className="project-card"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="project-image-container">
        <div className={`project-image-overlay ${isHovered ? 'hovered' : ''}`}>
          <div className="project-links">
            <a 
              href={project.link} 
              target="_blank" 
              rel="noopener noreferrer"
              className="project-link"
              aria-label={`View code for ${project.name}`}
            >
              <GithubIcon /> View Code
            </a>
            {project.demo && (
              <a 
                href={project.demo} 
                target="_blank" 
                rel="noopener noreferrer"
                className="project-link demo-link"
                aria-label={`Try out ${project.name}`}
              >
                <ExternalLinkIcon /> Try it out
              </a>
            )}
          </div>
        </div>
        {imageLoaded && (
          <img 
            src={imgSrc} 
            alt={project.name} 
            className="project-image"
          />
        )}
      </div>
      
      <div className="project-content">
        <h3 className="project-title">{project.name}</h3>
        <p className="project-description">{project.description}</p>
        
        <div className="project-technologies">
          {project.technologies.map((tech, index) => (
            <span key={index} className="project-tech-tag">
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

const Projects = () => {
  return (
    <div className="projects-container">
      <p className="projects-subtitle">
        A collection of my recent development work. Each project represents different skills and technologies I've worked with.
      </p>
      
      <div className="projects-grid">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
};

export default Projects; 