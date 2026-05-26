import React from 'react';
import { Menu, X } from 'lucide-react';

function Navbar({ activeSection, menuOpen, navItems, onNavigate, onToggleMenu, onCloseMenu }) {
  return (
    <header className="site-header">
      <a
        className="brand"
        href="#home"
        aria-label="Go to home"
        onClick={() => {
          onNavigate('home');
          onCloseMenu();
        }}
      >
        <span>G</span>
        <div className="brand-copy">
          <strong>Gowtham</strong>
          <em>Python Full Stack Developer</em>
        </div>
      </a>
      <nav className={menuOpen ? 'nav-links open' : 'nav-links'} aria-label="Primary navigation">
        {navItems.map((item) => (
          <a
            key={item}
            className={activeSection === item.toLowerCase() ? 'active' : ''}
            href={`#${item.toLowerCase()}`}
            onClick={() => {
              onNavigate(item.toLowerCase());
              onCloseMenu();
            }}
          >
            {item}
          </a>
        ))}
      </nav>
      <a
        className="nav-cta"
        href="#contact"
        onClick={() => {
          onNavigate('contact');
          onCloseMenu();
        }}
      >
        Start a Project
      </a>
      <button
        className="icon-button menu-button"
        aria-label={menuOpen ? 'Close menu' : 'Open menu'}
        onClick={onToggleMenu}
      >
        {menuOpen ? <X size={20} /> : <Menu size={20} />}
      </button>
    </header>
  );
}

export default Navbar;
