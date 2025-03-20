import React, { useState, useEffect } from 'react';
import Markdown from 'react-markdown';
import { projectsData } from '../../assets/ProjectsData';
import { GithubIcon, ExternalLinkIcon } from '../../assets/Icons';
import './Projects.css';

// Custom renderers for Markdown components
const MarkdownRenderers = {
  // Custom link renderer
  a: ({ node, ...props }) => (
    <a 
      {...props} 
      className="inline-link"
      target="_blank"
      rel="noopener noreferrer"
    />
  ),
  // Custom paragraph renderer
  p: ({ node, ...props }) => (
    <p {...props} className="modal-paragraph" />
  ),
  // Custom heading renderers
  h1: ({ node, ...props }) => (
    <h1 {...props} className="markdown-heading markdown-h1" />
  ),
  h2: ({ node, ...props }) => (
    <h2 {...props} className="markdown-heading markdown-h2" />
  ),
  h3: ({ node, ...props }) => (
    <h3 {...props} className="markdown-heading markdown-h3" />
  ),
  // Custom list renderers
  ul: ({ node, ...props }) => (
    <ul {...props} className="modal-list" />
  ),
  li: ({ node, ...props }) => (
    <li {...props} className="modal-list-item" />
  ),
  // Custom code renderer
  code: ({ node, ...props }) => (
    <code {...props} className="modal-code" />
  ),
  pre: ({ node, ...props }) => (
    <pre {...props} className="modal-code-block" />
  ),
  // Custom strong/bold renderer
  strong: ({ node, ...props }) => (
    <strong {...props} className="markdown-bold" />
  ),
  // Custom emphasis/italic renderer
  em: ({ node, ...props }) => (
    <em {...props} className="markdown-emphasis" />
  ),
};



const Introduction =
`
In past few years, I have worked a few little and A collection of my recent development work. 
Each project represents different skills and technologies I've worked with.
`



const ProjectModal = ({ project, isOpen, onClose }) => {
  if (!isOpen) return null;

  // Determine image to show (alternate or original)
  const displayImage = project.alternateImage || project.image;
  
  return (
    <div className="project-modal-overlay" onClick={onClose}>
      <div className="project-modal" onClick={e => e.stopPropagation()}>
        <button className="modal-close-btn" onClick={onClose}>×</button>
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
          
          <div className="modal-description markdown-content">
            <Markdown components={MarkdownRenderers}>{project.description}</Markdown>
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
                <GithubIcon width={20} height={20} /> View Code
              </a>
            )}
            
            {project.demo && (
              <a 
                href={project.demo} 
                target="_blank" 
                rel="noopener noreferrer"
                className="modal-link demo-link"
              >
                <ExternalLinkIcon width={20} height={20} /> Try it out
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
        {Introduction}
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