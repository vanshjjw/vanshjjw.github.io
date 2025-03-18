import React, { useState, useEffect } from 'react';
import { projects } from './ProjectsData';
import './Projects.css';

// Icons for links
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

// Modal for displaying full project description
const ProjectModal = ({ project, isOpen, onClose }) => {
  if (!isOpen) return null;
  
  // Format description paragraphs
  const paragraphs = project.fullDescription.split('\n\n');

  // Determine image to show (alternate or original)
  const displayImage = project.alternateImage || project.image;
  
  // Handle close button click with stopPropagation
  const handleCloseClick = (e) => {
    e.stopPropagation();
    onClose();
  };
  
  return (
    <div className="project-modal-overlay" onClick={onClose}>
      <div className="project-modal" onClick={e => e.stopPropagation()}>
        <button className="modal-close-btn" onClick={handleCloseClick}>×</button>
        <h2 className="modal-title">{project.name}</h2>
        
        <div className="modal-content">
          <div className="modal-image-container">
            <img 
              src={displayImage} 
              alt={project.name} 
              className="modal-image"
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = '/images/projects/placeholder.jpg';
              }}
            />
          </div>
          
          <div className="modal-description">
            {paragraphs.map((paragraph, idx) => (
              <p key={idx}>{paragraph}</p>
            ))}
          </div>
          
          <div className="modal-tags">
            {project.tags.map((tag, index) => (
              <span key={index} className="project-tech-tag">
                {tag}
              </span>
            ))}
          </div>
          
          <div className="modal-actions">
            {project.link && (
              <a 
                href={project.link} 
                target="_blank" 
                rel="noopener noreferrer"
                className="modal-link github-link"
              >
                <GithubIcon /> View Code
              </a>
            )}
            
            {project.demo && (
              <a 
                href={project.demo} 
                target="_blank" 
                rel="noopener noreferrer"
                className="modal-link demo-link"
              >
                <ExternalLinkIcon /> Try it out
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

const ProjectCard = ({ project }) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imgSrc, setImgSrc] = useState('/images/projects/placeholder.jpg');
  const [isModalOpen, setIsModalOpen] = useState(false);
  
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
    <>
      <div 
        className="project-card"
        onClick={() => setIsModalOpen(true)}
      >
        <div className="project-image-container">
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
          <p className="project-description">
            {project.shortDescription}
          </p>
          
          <div className="project-technologies">
            {project.tags.slice(0, 3).map((tag, index) => (
              <span key={index} className="project-tech-tag">
                {tag}
              </span>
            ))}
            {project.tags.length > 3 && (
              <span className="project-tech-tag more-tag">+{project.tags.length - 3}</span>
            )}
          </div>
        </div>
      </div>
      
      <ProjectModal 
        project={project} 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
    </>
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