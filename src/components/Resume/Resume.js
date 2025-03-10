import React, { useState } from 'react';
import { education, experience, projects, skills } from './ResumeData';
import './Resume.css';

// Icon components
const ChevronDown = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
        <path fillRule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/>
    </svg>
);

const GithubIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
        <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
    </svg>
);

const LinkIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
        <path d="M4.715 6.542 3.343 7.914a3 3 0 1 0 4.243 4.243l1.828-1.829A3 3 0 0 0 8.586 5.5L8 6.086a1.002 1.002 0 0 0-.154.199 2 2 0 0 1 .861 3.337L6.88 11.45a2 2 0 1 1-2.83-2.83l.793-.792a4.018 4.018 0 0 1-.128-1.287z"/>
        <path d="M6.586 4.672A3 3 0 0 0 7.414 9.5l.775-.776a2 2 0 0 1-.896-3.346L9.12 3.55a2 2 0 1 1 2.83 2.83l-.793.792c.112.42.155.855.128 1.287l1.372-1.372a3 3 0 1 0-4.243-4.243L6.586 4.672z"/>
    </svg>
);

// ExpandableSection component for interactive sections
const ExpandableSection = ({ title, children, initialExpanded = false }) => {
    const [expanded, setExpanded] = useState(initialExpanded);
    
    return (
        <div>
            <button className="expand-details" onClick={() => setExpanded(!expanded)}>
                <span className={`toggle-icon ${expanded ? 'expanded' : ''}`}><ChevronDown /></span>
                <span>{expanded ? 'Hide' : 'Show'} {title}</span>
            </button>
            <div className={`details-content ${expanded ? 'expanded' : ''}`}>
                {children}
            </div>
        </div>
    );
};

// Education Section
const EducationSection = () => {
    return (
        <div className="resume-section">
            <h2 className="section-title">Education</h2>
            
            {education.map((edu) => (
                <div key={edu.id} className="resume-card">
                    <div className="card-header">
                        <div>
                            <h3 className="card-title">{edu.degree}</h3>
                            <h4 className="card-subtitle">{edu.institution}</h4>
                        </div>
                        <span className="card-dates">{edu.dates}</span>
                    </div>
                    
                    <div className="card-location">{edu.location}</div>
                    
                    <p className="card-description">{edu.description}</p>
                    
                    {edu.gpa && <p><strong>GPA:</strong> {edu.gpa}</p>}
                    
                    {edu.awards && edu.awards.length > 0 && (
                        <ExpandableSection title="Awards">
                            <ul className="card-list">
                                {edu.awards.map((award, index) => (
                                    <li key={index}>{award}</li>
                                ))}
                            </ul>
                        </ExpandableSection>
                    )}
                    
                    {edu.highlights && edu.highlights.length > 0 && (
                        <ExpandableSection title="Highlights">
                            <ul className="card-list">
                                {edu.highlights.map((highlight, index) => (
                                    <li key={index}>{highlight}</li>
                                ))}
                            </ul>
                        </ExpandableSection>
                    )}
                </div>
            ))}
        </div>
    );
};

// Experience Section
const ExperienceSection = () => {
    return (
        <div className="resume-section">
            <h2 className="section-title">Experience</h2>
            
            {experience.map((exp) => (
                <div key={exp.id} className="resume-card">
                    <div className="card-header">
                        <div>
                            <h3 className="card-title">{exp.role}</h3>
                            <h4 className="card-subtitle">{exp.company}</h4>
                        </div>
                        <span className="card-dates">{exp.dates}</span>
                    </div>
                    
                    <div className="card-location">{exp.location}</div>
                    
                    <p className="card-description">{exp.description}</p>
                    
                    <ExpandableSection title="Responsibilities" initialExpanded={true}>
                        <ul className="card-list">
                            {exp.responsibilities.map((resp, index) => (
                                <li key={index}>{resp}</li>
                            ))}
                        </ul>
                    </ExpandableSection>
                    
                    {exp.technologies && exp.technologies.length > 0 && (
                        <div className="tech-tags">
                            {exp.technologies.map((tech, index) => (
                                <span key={index} className="tech-tag">{tech}</span>
                            ))}
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
};

// Projects Section
const ProjectsSection = () => {
    return (
        <div className="resume-section">
            <h2 className="section-title">Projects</h2>
            
            {projects.map((project) => (
                <div key={project.id} className="resume-card">
                    <div className="card-header">
                        <h3 className="card-title">{project.title}</h3>
                        <span className="card-dates">{project.dates}</span>
                    </div>
                    
                    <p className="card-description">{project.description}</p>
                    
                    <div className="project-links">
                        {project.github && (
                            <a href={project.github} className="project-link" target="_blank" rel="noopener noreferrer">
                                <GithubIcon /><span>GitHub</span>
                            </a>
                        )}
                        {project.link && (
                            <a href={project.link} className="project-link" target="_blank" rel="noopener noreferrer">
                                <LinkIcon /><span>Live Demo</span>
                            </a>
                        )}
                    </div>
                    
                    <ExpandableSection title="Highlights">
                        <ul className="card-list">
                            {project.highlights.map((highlight, index) => (
                                <li key={index}>{highlight}</li>
                            ))}
                        </ul>
                    </ExpandableSection>
                    
                    {project.technologies && project.technologies.length > 0 && (
                        <div className="tech-tags">
                            {project.technologies.map((tech, index) => (
                                <span key={index} className="tech-tag">{tech}</span>
                            ))}
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
};

// Skills Section
const SkillsSection = () => {
    return (
        <div className="resume-section">
            <h2 className="section-title">Skills</h2>
            
            <div className="skills-container">
                {skills.technical.map((category, index) => (
                    <div key={index} className="skill-category">
                        <h3 className="skill-category-title">{category.category}</h3>
                        <div className="skill-list">
                            {category.items.map((skill, idx) => (
                                <span key={idx} className="tech-tag">{skill}</span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

// Main Resume Component
const Resume = () => {
    return (
        <div className="resume-container">
            <div className="resume-header">
                <h1 className="resume-name">Vansh Jhunjhunwala</h1>
            </div>
            
            <EducationSection />
            <ExperienceSection />
            <ProjectsSection />
            <SkillsSection />
        </div>
    );
};

export default Resume; 