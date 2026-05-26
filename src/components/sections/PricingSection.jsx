import { ArrowRight, CheckCircle2, CreditCard } from 'lucide-react';
import SectionHeading from '../SectionHeading';
import { packages } from '../../data/portfolioData';

function PricingSection({ onNavigate }) {
  return (
    <section className="section pricing-section reveal" id="pricing">
      <SectionHeading
        eyebrow={<p className="eyebrow"><CreditCard size={16} /> Engagement Models</p>}
        title="Flexible options for focused websites, richer brand experiences, and product builds."
      />

      <div className="pricing-grid">
        {packages.map((item) => (
          <article className={`pricing-card${item.featured ? ' featured' : ''}`} key={item.name}>
            {item.featured ? <span className="recommend-badge">Recommended</span> : null}
            <span className="pricing-kicker">{item.name}</span>
            <h3>{item.price}<small>/project</small></h3>
            <p>{item.text}</p>
            <div className="pricing-features">
              {item.features.map((feature) => (
                <span key={feature}><CheckCircle2 size={17} /> {feature}</span>
              ))}
            </div>
            <a className="button secondary" href="#contact" onClick={() => onNavigate('contact')}>
              Get in Touch <ArrowRight size={17} />
            </a>
          </article>
        ))}
      </div>
    </section>
  );
}

export default PricingSection;
