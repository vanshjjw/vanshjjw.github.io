import React, { useState } from 'react';
import { personalInfo, projects, experience, socialLinks, influences } from '../../data/siteData';

const Hero = () => {
  const [showEasterEgg, setShowEasterEgg] = useState(false);

  const handleHelloClick = () => {
    setShowEasterEgg(true);
    setTimeout(() => setShowEasterEgg(false), 2000);
  };

  return (
    <section className="mb-16">
      {showEasterEgg && (
        <div className="fixed top-8 left-1/2 -translate-x-1/2 bg-primary text-white px-4 py-2 rounded-lg shadow-lg text-sm z-50">
          General Kenobi
        </div>
      )}

      <h1 className="text-3xl md:text-4xl font-serif text-ink-title mb-4">
        <span 
          onClick={handleHelloClick}
          className="text-primary cursor-pointer hover:text-primary-dark transition-colors duration-200"
          title="Click me!"
        >
          Hello There
        </span>
        <span>, I'm {personalInfo.name}</span>
      </h1>

      <div className="text-ink-muted text-sm mb-8 flex items-center gap-2">
        {personalInfo.locations.map((loc, index) => (
          <span key={loc.city} className="flex items-center gap-2">
            <span className={loc.current ? "text-ink" : "line-through opacity-60"}>
              {loc.city}
            </span>
            {index < personalInfo.locations.length - 1 && <span>→</span>}
          </span>
        ))}
      </div>

      <div className="text-ink-light text-base leading-relaxed max-w-2xl space-y-4">
        {personalInfo.bio.split('\n\n').map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
      </div>
    </section>
  );
};

const ProjectRow = ({ project }) => {
  const linkEntries = Object.entries(project.links);
  
  return (
    <div className="py-4 border-b border-ink/10 last:border-b-0 flex justify-between gap-4">
      <div className="flex-1">
        <h3 className="font-medium text-ink-title">{project.title}</h3>
        <p className="text-ink-light text-sm mt-1">{project.description}</p>
      </div>
      <div className="flex items-start gap-3 text-sm flex-shrink-0 pt-1">
        {linkEntries.map(([label, url]) => (
          <a
            key={label}
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:text-primary-dark hover:underline transition-colors capitalize"
          >
            {label} ↗
          </a>
        ))}
      </div>
    </div>
  );
};

const Projects = () => (
  <section className="mb-16">
    <h2 className="text-xl font-serif text-ink-title mb-6 pb-2 border-b-2 border-primary/30">
      Projects
    </h2>
    <div>
      {projects.map((project) => (
        <ProjectRow key={project.id} project={project} />
      ))}
    </div>
  </section>
);


const ExperienceRow = ({ item }) => {
  const roleLines = item.role.split('\n');
  
  return (
    <div className="py-3 border-b border-ink/10 last:border-b-0 flex justify-between gap-4">
      <div className="flex-1">
        <a 
          href={item.url}
          target="_blank"
          rel="noopener noreferrer"
          className="font-medium text-ink-title hover:text-primary transition-colors"
        >
          {item.title}
        </a>
        <div className="text-ink-light text-sm mt-1">
          {roleLines.map((line, index) => (
            <div key={index}>{line}</div>
          ))}
        </div>
      </div>
      <span className="text-ink-muted text-sm flex-shrink-0">{item.period}</span>
    </div>
  );
};

const Experience = () => (
  <section className="mb-16">
    <h2 className="text-xl font-serif text-ink-title mb-6 pb-2 border-b-2 border-primary/30">
      Work
    </h2>
    <div>
      {experience.map((item) => (
        <ExperienceRow key={item.id} item={item} />
      ))}
    </div>
  </section>
);

const Influences = () => (
  <section className="mb-16">
    <h2 className="text-xl font-serif text-ink-title mb-6 pb-2 border-b-2 border-primary/30">
      Ideas That Made Me Think
    </h2>
    <div>
      {influences.map((item, index) => (
        <div key={index} className="py-3 border-b border-ink/10 last:border-b-0 flex justify-between gap-4">
          <div className="flex-1">
            <a 
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-ink-title hover:text-primary transition-colors"
            >
              {item.title}
            </a>
            <span className="text-ink-muted text-sm ml-2">— {item.author}</span>
          </div>
          <span className="text-ink-muted text-xs uppercase tracking-wide flex-shrink-0">{item.type}</span>
        </div>
      ))}
    </div>
  </section>
);

const Footer = () => (
  <footer className="pt-8 border-t border-ink/10">
    <div className="flex flex-wrap justify-center gap-6 text-ink-muted">
      {socialLinks.map((link) => (
        <a
          key={link.name}
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-primary transition-colors"
        >
          {link.name}
        </a>
      ))}
      <a
        href={personalInfo.resumeUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-primary transition-colors"
      >
        Resume
      </a>
    </div>
  </footer>
);

const Home = () => {
  return (
    <div className="min-h-screen bg-warm-page">
      <main className="max-w-[720px] mx-auto px-6 py-16 md:py-24">
        <Hero />
        <Experience />
        <Projects />
        <Influences />
        <Footer />
      </main>
    </div>
  );
};

export default Home;
