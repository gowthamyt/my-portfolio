import React from 'react';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import AboutSection from './components/sections/AboutSection';
import ContactSection from './components/sections/ContactSection';
import ExperienceSection from './components/sections/ExperienceSection';
import HeroSection from './components/sections/HeroSection';
import ProcessSection from './components/sections/ProcessSection';
import ProjectsSection from './components/sections/ProjectsSection';
import PricingSection from './components/sections/PricingSection';
import ServicesSection from './components/sections/ServicesSection';
import SkillsSection from './components/sections/SkillsSection';
import TestimonialsSection from './components/sections/TestimonialsSection';
import WhySection from './components/sections/WhySection';
import { navItems } from './data/portfolioData';
import { useActiveSection } from './hooks/useActiveSection';
import { useRevealOnScroll } from './hooks/useRevealOnScroll';

function App() {
  const [menuOpen, setMenuOpen] = React.useState(false);
  const [activeSection, setActiveSection] = useActiveSection(navItems);

  useRevealOnScroll();

  return (
    <>
      <Navbar
        activeSection={activeSection}
        menuOpen={menuOpen}
        navItems={navItems}
        onNavigate={setActiveSection}
        onToggleMenu={() => setMenuOpen((value) => !value)}
        onCloseMenu={() => setMenuOpen(false)}
      />

      <main>
        <HeroSection />
        <ProcessSection />
        <AboutSection />
        <ExperienceSection />
        <ServicesSection onNavigate={setActiveSection} />
        <SkillsSection />
        <WhySection />
        <ProjectsSection />
        <PricingSection onNavigate={setActiveSection} />
        <TestimonialsSection />
        <ContactSection />
      </main>

      <Footer />
    </>
  );
}

export default App;
