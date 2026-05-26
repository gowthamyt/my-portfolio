import { MessageCircle } from 'lucide-react';
import SectionHeading from '../SectionHeading';
import { testimonials } from '../../data/portfolioData';

function TestimonialsSection() {
  return (
    <section className="section testimonials-section reveal" aria-label="Client feedback">
      <SectionHeading
        eyebrow={<p className="eyebrow"><MessageCircle size={16} /> Testimonials</p>}
        title="Feedback that reflects both the visual polish and the practical thinking behind the work."
      />

      <div className="testimonial-track">
        {testimonials.map((item) => (
          <article className="testimonial-card" key={`${item.brand}-${item.name}`}>
            <span>{item.brand}</span>
            <p>{item.text}</p>
            <strong>{item.name}</strong>
          </article>
        ))}
      </div>
    </section>
  );
}

export default TestimonialsSection;
