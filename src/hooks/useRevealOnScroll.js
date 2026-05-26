import React from 'react';

export function useRevealOnScroll() {
  React.useEffect(() => {
    const revealItems = document.querySelectorAll('.reveal');
    const staggerGroups = document.querySelectorAll('[data-stagger]');
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (prefersReducedMotion) {
      revealItems.forEach((item) => item.classList.add('is-visible'));
      staggerGroups.forEach((group) => {
        group.classList.add('is-visible');
        Array.from(group.children).forEach((child) => child.classList.add('is-visible'));
      });
      return undefined;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
          }
        });
      },
      { threshold: 0.16 }
    );

    revealItems.forEach((item) => observer.observe(item));
    staggerGroups.forEach((group) => {
      Array.from(group.children).forEach((child, index) => {
        child.style.setProperty('--stagger-delay', `${index * 110}ms`);
      });
      observer.observe(group);
    });

    const parallaxItems = document.querySelectorAll('[data-parallax]');

    const updateParallax = () => {
      const scrollY = window.scrollY;
      parallaxItems.forEach((item) => {
        const speed = Number(item.getAttribute('data-parallax')) || 0.08;
        const offset = Math.max(-36, Math.min(36, scrollY * speed * 0.12));
        item.style.setProperty('--parallax-offset', `${offset}px`);
      });
    };

    updateParallax();
    window.addEventListener('scroll', updateParallax, { passive: true });

    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', updateParallax);
    };
  }, []);
}
