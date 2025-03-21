import React from 'react';
import { GithubIcon, ExternalLinkIcon } from '../../assets/Icons';

const ProjectCard = ({ project }) => {
 
  return (
    <div className="project-card">
      <div className="project-image-container">
        <img src={project.image} alt={project.name} className="project-image"/>
        
        {/* Hover overlay with buttons */}
        <div className="project-overlay">
          {project.link && (
            <a 
              href={project.link} 
              target="_blank" 
              rel="noopener noreferrer"
              className="project-btn github-btn"
            >
              <GithubIcon width={16} height={16} /> View Code
            </a>
          )}
          
          {project.demo && (
            <a 
              href={project.demo} 
              target="_blank" 
              rel="noopener noreferrer"
              className="project-btn demo-btn"
            >
              <ExternalLinkIcon width={16} height={16} /> Try it out
            </a>
          )}
        </div>
      </div>

      <div className="project-content">
        <h3 className="project-title">{project.name}</h3>
        <p className="project-description">
          {project.shortDescription}
        </p>
        
        <div className="project-technologies">
          {project.tags.map((tag, index) => (
            <span key={index} className="project-tech-tag">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard; 