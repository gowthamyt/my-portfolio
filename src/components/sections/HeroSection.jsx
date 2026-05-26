import { ArrowRight, BadgeCheck } from 'lucide-react';

const logoItems = ['Python', 'Django', 'React', 'AWS', 'JMeter', 'Figma'];

function HeroSection() {
  return (
    <section className="hero-shell reveal" id="home">
      <div className="hero">
        <div className="hero-content">
          <p className="eyebrow"><BadgeCheck size={16} /> Hero Section</p>
          <h1>
            Building scalable full stack web applications
          </h1>
          <p className="hero-summary">
            I develop responsive and production-ready applications using Python, Django, React,
            JavaScript, and MySQL with a focus on clean UI, reliable backend architecture,
            and real-world business solutions.
          </p>
          <div className="hero-metrics" aria-label="Portfolio highlights" data-stagger>
            <article>
              <strong>5+</strong>
              <span>live and portfolio projects</span>
            </article>
            <article>
              <strong>10+</strong>
              <span>technologies used</span>
            </article>
            <article>
              <strong>2025</strong>
              <span>B.Tech IT graduate</span>
            </article>
          </div>
          <div className="hero-actions">
            <a className="button primary" href="#work">
              View Projects <ArrowRight size={18} />
            </a>
            <a className="button secondary" href="#contact">
              Contact Me
            </a>
          </div>
        </div>
        <div className="hero-visual" aria-label="Selected project cards">
          <article className="preview-card preview-card-dark" data-parallax="0.24">
            <span>Selected Build</span>
            <strong>Expense Tracker Dashboard</strong>
            <img src="/assets/img-7.png" alt="Budget tracker project preview" />
          </article>
          <article className="preview-card preview-card-light" data-parallax="0.18">
            <span>Process Stack</span>
            <strong>React • Django • MySQL</strong>
            <img src="/assets/img-4.jpg" alt="Development and coding preview" />
          </article>
          <article className="preview-card preview-card-center" data-parallax="0.12">
            <span>Featured Work</span>
            <strong>Flight Booking App</strong>
            <img src="/assets/img2.jpg" alt="Portfolio and e-commerce project preview" />
          </article>
          <article className="preview-card preview-card-small" data-parallax="0.22">
            <span>Approach</span>
            <strong>Build -&gt; Test -&gt; Launch</strong>
          </article>
        </div>
      </div>
      <div className="logo-strip" aria-label="Core tools">
        {logoItems.map((item, index) => <span key={`${item}-${index}`}>{item}</span>)}
      </div>
    </section>
  );
}

export default HeroSection;
