import React from 'react';
import Markdown from 'react-markdown';
import { GithubIcon, ExternalLinkIcon } from '../../assets/Icons';
import MarkdownRenderers from '../General/MarkdownRenderers';

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
            <img src={displayImage} className="modal-image"/>
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

export default ProjectModal; 