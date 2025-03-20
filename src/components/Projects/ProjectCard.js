import React, { useState, useEffect } from 'react';
import ProjectModal from './ProjectModal';

const ProjectCard = ({ project }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <div className="project-card" onClick={() => setIsModalOpen(true)}>
        <div className="project-image-container">
          <img src={project.image} alt={project.name} className="project-image"/>
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

export default ProjectCard; 