import { ArrowRight, BriefcaseBusiness } from 'lucide-react';
import SectionHeading from '../SectionHeading';
import { services } from '../../data/portfolioData';

function ServicesSection({ onNavigate }) {
  return (
    <section className="section services-section reveal" id="services">
      <SectionHeading
        eyebrow={<p className="eyebrow"><BriefcaseBusiness size={16} /> Services</p>}
        title="Purpose-driven design and practical engineering for modern web work."
        action={<a className="section-link" href="#contact" onClick={() => onNavigate('contact')}>Start a Project <ArrowRight size={17} /></a>}
      />

      <div className="services-grid" data-stagger>
        {services.map((service) => {
          const Icon = service.icon;

          return (
            <article className="service-card" key={service.title}>
              <div className="service-card-icon">
                <Icon size={22} />
              </div>
              <span>{service.tag}</span>
              <h3>{service.title}</h3>
              <p>{service.text}</p>
              <a href="#contact" onClick={() => onNavigate('contact')}>Discuss Service <ArrowRight size={16} /></a>
            </article>
          );
        })}
      </div>
    </section>
  );
}

export default ServicesSection;
