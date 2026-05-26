import React from 'react';

export function useActiveSection(navItems) {
  const [activeSection, setActiveSection] = React.useState('home');

  React.useEffect(() => {
    const updateHomeAtTop = () => {
      if (window.scrollY <= 120) {
        setActiveSection('home');
      }
    };

    const sections = navItems
      .map((item) => document.getElementById(item.toLowerCase()))
      .filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntry = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visibleEntry) {
          setActiveSection(visibleEntry.target.id);
        }
      },
      {
        rootMargin: '-35% 0px -50% 0px',
        threshold: [0.1, 0.35, 0.6],
      }
    );

    sections.forEach((section) => observer.observe(section));
    updateHomeAtTop();
    window.addEventListener('scroll', updateHomeAtTop, { passive: true });

    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', updateHomeAtTop);
    };
  }, [navItems]);

  return [activeSection, setActiveSection];
}
