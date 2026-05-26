import { CheckCircle2 } from 'lucide-react';
import SectionHeading from '../SectionHeading';
import { aboutMetrics } from '../../data/portfolioData';

function AboutSection() {
  return (
    <section className="section about-section reveal" id="about">
      <SectionHeading
        eyebrow={<p className="eyebrow"><CheckCircle2 size={16} /> About Gowtham</p>}
        title="Hi, I’m Gowtham - a Full Stack Developer who enjoys turning ideas into modern web applications."
        description="My experience includes building expense tracking platforms, eCommerce systems, React applications, and business-focused digital solutions."
      />

      <div className="about-grid">
        <div className="about-card featured">
          <span className="intro-kicker">Python full stack developer with a product mindset.</span>
          <h3 className="intro-title">I focus on delivering applications that are scalable, responsive, and user-friendly.</h3>
          <p>
            My work is centered on clean UI, reliable backend architecture, and practical business solutions that are easier to use and maintain.
          </p>
        </div>
        <div className="metric-stack">
          {aboutMetrics.map((metric) => (
            <article key={metric.label}>
              <strong>{metric.value}</strong>
              <span>{metric.label}</span>
            </article>
          ))}
        </div>
        <div className="about-card image-backed">
          <h3>Backend thinking supported by product awareness</h3>
          <p>Experience that helps me think beyond code: user flow, data structure, testing, process, delivery, clarity, and trust.</p>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
