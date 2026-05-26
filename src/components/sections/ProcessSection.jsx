import { processItems } from '../../data/portfolioData';

function ProcessSection() {
  return (
    <section className="process-strip reveal" aria-label="Development workflow" data-stagger>
      {processItems.map(({ title, text, icon: Icon }) => (
        <article className="process-card" key={title}>
          <Icon size={22} />
          <h3>{title}</h3>
          <p>{text}</p>
        </article>
      ))}
    </section>
  );
}

export default ProcessSection;
