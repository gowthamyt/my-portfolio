import { ExternalLink, Rocket } from 'lucide-react';
import SectionHeading from '../SectionHeading';
import { projects } from '../../data/portfolioData';

function ProjectsSection() {
  return (
    <section className="section projects-section reveal" id="work">
      <SectionHeading
        eyebrow={<p className="eyebrow"><Rocket size={16} /> Project Showcase</p>}
        title="Projects that reflect my full stack development work across Python, Django, React, and JavaScript."
        action={
          <a className="section-link" href="https://github.com/gowthamyt?tab=repositories" target="_blank" rel="noreferrer">
            View All Works <ExternalLink size={17} />
          </a>
        }
      />

      <div className="projects-shell" data-stagger>
        {projects.map((project, index) => (
          <article className={`project-row${index % 2 === 1 ? ' reverse' : ''}`} key={project.title}>
            <div className="project-preview">
              <div className="project-frame">
                <div className="browser-bar">
                  <strong>{project.title}</strong>
                  <span />
                  <span />
                  <span />
                </div>
                <img src={project.image} alt={`${project.title} preview`} />
              </div>
            </div>
            <div className="project-copy">
              <span className="project-label">Featured Project</span>
              <h3>{project.title}</h3>
              <p>
                <strong>{project.metric}</strong> | {project.result}
              </p>
              <p>{project.text}</p>
              <div className="project-stack">
                {project.stack.map((item) => <span key={item}>{item}</span>)}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default ProjectsSection;
