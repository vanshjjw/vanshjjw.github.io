import React from 'react';
import { GithubIcon, ExternalLinkIcon } from '../../assets/Icons';

const ProjectCard = ({ project }) => {
  const renderButton = (label, url, index) => {
    const isGithub = index === 0;
    return (
      <a 
        key={index}
        href={url} 
        target="_blank" 
        rel="noopener noreferrer"
        className={`project-btn ${isGithub ? 'github-btn' : 'demo-btn'}`}
      >
        {isGithub ? <GithubIcon width={16} height={16} /> : <ExternalLinkIcon width={16} height={16} />} 
        {isGithub ? 'View Code' : label}
      </a>
    );
  };
 
  return (
    <div className="project-card">
      <div className="project-image-container">
        <img src={project.image} alt={project.name} className="project-image"/>
        
        {/* Hover overlay with buttons */}
        <div className="project-overlay">
          {project.buttons && Object.entries(project.buttons).map(([label, url], index) => (
            renderButton(label, url, index)
          ))}
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