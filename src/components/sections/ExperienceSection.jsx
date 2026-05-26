import { CheckCircle2, Server } from 'lucide-react';
import SectionHeading from '../SectionHeading';
import { experienceItems } from '../../data/portfolioData';

function ExperienceSection() {
  return (
    <section className="section experience-section reveal">
      <SectionHeading
        eyebrow={<p className="eyebrow"><Server size={16} /> Experience / Approach</p>}
        title="What I Build"
        description="Applications and systems focused on usability, responsiveness, backend reliability, and real-world business needs."
      />

      <div className="experience-grid">
        <article className="experience-card">
          <img src="/assets/img-4.jpg" alt="Coding workspace showing development and implementation work" />
          <h3>Full stack solutions with practical product focus</h3>
          <p>
            I build modern applications that combine frontend clarity, backend logic, and business-focused workflows.
          </p>
          <div className="experience-meta">
            <span>Responsive UI</span>
            <span>Scalable Backend</span>
          </div>
        </article>
        <article className="experience-card experience-copy">
          <h3>Development areas I focus on</h3>
          <div className="experience-meta">
            {experienceItems.map((item) => (
              <span key={item}><CheckCircle2 size={15} /> {item}</span>
            ))}
          </div>
        </article>
      </div>
    </section>
  );
}

export default ExperienceSection;
