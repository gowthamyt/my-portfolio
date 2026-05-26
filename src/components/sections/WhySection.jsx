import { designPillars } from '../../data/portfolioData';

function WhySection() {
  return (
    <section className="section why-section reveal">
      <div className="why-copy">
        <p className="eyebrow">Why Work With Me</p>
        <h2>Design systems that feel considered,<br />not crowded.</h2>
      </div>
      <div className="pillar-grid" data-stagger>
        {designPillars.map(({ title, text, icon: Icon }) => (
          <article className="pillar-card" key={title}>
            <span><Icon size={24} /></span>
            <h3>{title}</h3>
            <p>{text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

export default WhySection;
