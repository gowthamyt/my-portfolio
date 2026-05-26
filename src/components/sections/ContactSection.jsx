import { ExternalLink, Globe, Mail, Phone, Send } from 'lucide-react';
import { contactLinks } from '../../data/portfolioData';

const iconsByType = {
  external: ExternalLink,
  mail: Mail,
  phone: Phone,
};

function ContactSection() {
  return (
    <section className="section contact-section reveal" id="contact">
      <div className="contact-shell">
        <div className="contact-copy">
          <p className="eyebrow"><Mail size={16} /> Contact</p>
          <h2>Let&apos;s shape a website that feels thoughtful, useful, and confidently built.</h2>
          <p>
            Send a message for freelance work, job opportunities, project help, or collaboration.
          </p>
          <span className="availability-badge">Available for Python full stack roles, freelance work, and internships</span>
          <div className="contact-links">
            {contactLinks.map((link) => {
              const Icon = iconsByType[link.type];
              return (
                <a
                  key={link.label}
                  href={link.href}
                  target={link.type === 'external' ? '_blank' : undefined}
                  rel={link.type === 'external' ? 'noreferrer' : undefined}
                >
                  <Icon size={18} /> {link.label}
                </a>
              );
            })}
          </div>
          <div className="social-links" aria-label="Social links">
            <a href="https://www.linkedin.com/in/gowtham-s72655a352/" target="_blank" rel="noreferrer" aria-label="LinkedIn">
              <ExternalLink size={18} />
            </a>
            <a href="https://github.com/gowthamyt?tab=repositories" target="_blank" rel="noreferrer" aria-label="GitHub">
              <Globe size={18} />
            </a>
            <a href="mailto:gowthams0842@gmail.com" aria-label="Email">
              <Mail size={18} />
            </a>
          </div>
        </div>
        <div className="contact-form-wrap">
          <form className="contact-form" action="https://formspree.io/f/mredydnj" method="POST">
            <input type="text" name="name" placeholder="Your name" aria-label="Your name" />
            <input type="email" name="email" placeholder="Email address" aria-label="Email address" />
            <textarea name="message" placeholder="Tell me about the website or product you want to build" aria-label="Project details" />
            <button className="button primary" type="submit">
              <Send size={18} /> Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default ContactSection;
