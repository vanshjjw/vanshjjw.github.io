import React, { useState } from 'react';
import { education, experience, projects, skills } from './ResumeData';
import './Resume.css';

// Icon components
const FlipIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
        <path d="M9.5 1.5a.5.5 0 0 0-1 0V9H3.5a.5.5 0 0 0 0 1h5V15.5a.5.5 0 0 0 1 0V10h5a.5.5 0 0 0 0-1h-5V1.5z"/>
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

const LocationIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
        <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"/>
    </svg>
);

// Section Icons
const EducationIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 10v6M2 10l10-5 10 5-10 5z"/>
        <path d="M6 12v5c3 3 9 3 12 0v-5"/>
    </svg>
);

const ExperienceIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="7" width="20" height="14" rx="2" ry="2"/>
        <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/>
    </svg>
);

const ProjectsIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="12 2 2 7 12 12 22 7 12 2"/>
        <polyline points="2 17 12 22 22 17"/>
        <polyline points="2 12 12 17 22 12"/>
    </svg>
);

const SkillsIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/>
    </svg>
);

// Card component for flippable resume items
const FlipCard = ({ frontContent, backContent }) => {
    const [isFlipped, setIsFlipped] = useState(false);
    
    return (
        <div className={`flip-card ${isFlipped ? 'flipped' : ''}`} onClick={() => setIsFlipped(!isFlipped)}>
            <div className="flip-card-inner">
                <div className="flip-card-front">
                    {frontContent}
                    <div className="card-hover-hint">
                        Click to see more <FlipIcon />
                    </div>
                </div>
                <div className="flip-card-back">
                    {backContent}
                </div>
            </div>
        </div>
    );
};

// Education Section
const EducationSection = () => {
    return (
        <div className="resume-section">
            <div className="section-header">
                <div className="section-icon">
                    <EducationIcon />
                </div>
                <h2 className="section-title">Education</h2>
            </div>
            
            <div className="cards-grid">
                {education.map((edu) => (
                    <FlipCard 
                        key={edu.id}
                        frontContent={
                            <>
                                <h3 className="card-title">{edu.institution}</h3>
                                <div className="card-subtitle">{edu.degree}</div>
                                <div className="card-location"><LocationIcon />{edu.location}</div>
                                <span className="card-dates">{edu.dates}</span>
                            </>
                        }
                        backContent={
                            <>
                                <h3 className="card-title">{edu.institution}</h3>
                                <p className="card-description">{edu.description}</p>
                                
                                {edu.gpa && <p><strong>GPA:</strong> {edu.gpa}</p>}
                                
                                {edu.awards && edu.awards.length > 0 && (
                                    <div>
                                        <h4>Awards</h4>
                                        <ul className="card-list">
                                            {edu.awards.map((award, index) => (
                                                <li key={index}>{award}</li>
                                            ))}
                                        </ul>
                                    </div>
                                )}
                                
                                {edu.highlights && edu.highlights.length > 0 && (
                                    <div>
                                        <h4>Highlights</h4>
                                        <ul className="card-list">
                                            {edu.highlights.map((highlight, index) => (
                                                <li key={index}>{highlight}</li>
                                            ))}
                                        </ul>
                                    </div>
                                )}
                            </>
                        }
                    />
                ))}
            </div>
        </div>
    );
};

// Experience Section
const ExperienceSection = () => {
    return (
        <div className="resume-section">
            <div className="section-header">
                <div className="section-icon">
                    <ExperienceIcon />
                </div>
                <h2 className="section-title">Experience</h2>
            </div>
            
            <div className="cards-grid">
                {experience.map((exp) => (
                    <FlipCard 
                        key={exp.id}
                        frontContent={
                            <>
                                <h3 className="card-title">{exp.company}</h3>
                                <div className="card-subtitle">{exp.role}</div>
                                <div className="card-location"><LocationIcon />{exp.location}</div>
                                <span className="card-dates">{exp.dates}</span>
                            </>
                        }
                        backContent={
                            <>
                                <h3 className="card-title">{exp.company}</h3>
                                <div className="card-subtitle">{exp.role}</div>
                                <p className="card-description">{exp.description}</p>
                                
                                <h4>Responsibilities</h4>
                                <ul className="card-list">
                                    {exp.responsibilities.map((resp, index) => (
                                        <li key={index}>{resp}</li>
                                    ))}
                                </ul>
                                
                                {exp.technologies && exp.technologies.length > 0 && (
                                    <div className="tech-tags">
                                        {exp.technologies.map((tech, index) => (
                                            <span key={index} className="tech-tag">{tech}</span>
                                        ))}
                                    </div>
                                )}
                            </>
                        }
                    />
                ))}
            </div>
        </div>
    );
};

// Projects Section
const ProjectsSection = () => {
    return (
        <div className="resume-section">
            <div className="section-header">
                <div className="section-icon">
                    <ProjectsIcon />
                </div>
                <h2 className="section-title">Projects</h2>
            </div>
            
            <div className="cards-grid">
                {projects.map((project) => (
                    <FlipCard 
                        key={project.id}
                        frontContent={
                            <>
                                <h3 className="card-title">{project.title}</h3>
                                <p className="card-description">{project.description}</p>
                                <span className="card-dates">{project.dates}</span>
                            </>
                        }
                        backContent={
                            <>
                                <h3 className="card-title">{project.title}</h3>
                                
                                <div className="project-links">
                                    {project.github && (
                                        <a href={project.github} className="project-link" target="_blank" rel="noopener noreferrer">
                                            <GithubIcon /> GitHub
                                        </a>
                                    )}
                                    {project.link && (
                                        <a href={project.link} className="project-link" target="_blank" rel="noopener noreferrer">
                                            <LinkIcon /> Live Demo
                                        </a>
                                    )}
                                </div>
                                
                                <h4>Highlights</h4>
                                <ul className="card-list">
                                    {project.highlights.map((highlight, index) => (
                                        <li key={index}>{highlight}</li>
                                    ))}
                                </ul>
                                
                                {project.technologies && project.technologies.length > 0 && (
                                    <div className="tech-tags">
                                        {project.technologies.map((tech, index) => (
                                            <span key={index} className="tech-tag">{tech}</span>
                                        ))}
                                    </div>
                                )}
                            </>
                        }
                    />
                ))}
            </div>
        </div>
    );
};

// Skills Section
const SkillsSection = () => {
    return (
        <div className="resume-section">
            <div className="section-header">
                <div className="section-icon">
                    <SkillsIcon />
                </div>
                <h2 className="section-title">Skills</h2>
            </div>
            
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
                
                {skills.extracurriculars && skills.extracurriculars.map((category, index) => (
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