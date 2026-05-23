import { useState } from "react";
import "./header.css"
export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <>
      <nav>
        <a href="#hero" className="nav-logo">
          Adithyan<span>.</span>
        </a>

        <ul className="nav-links">
          <li><a href="#about">About</a></li>
          <li><a href="#resume">Experience</a></li>
          <li><a href="#portfolio">Projects</a></li>
          <li><a href="#services">Services</a></li>
          <li>
            <a href="#contact" className="nav-cta">
              Hire Me
            </a>
          </li>
        </ul>

        <button
          className={`hamburger ${menuOpen ? "active" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle Menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </nav>

      <div className={`mobile-menu ${menuOpen ? "open" : ""}`}>
        <a href="#about" onClick={closeMenu}>About</a>
        <a href="#resume" onClick={closeMenu}>Experience</a>
        <a href="#portfolio" onClick={closeMenu}>Projects</a>
        <a href="#services" onClick={closeMenu}>Services</a>

        <a
          href="#contact"
          className="mob-cta"
          onClick={closeMenu}
        >
          Hire Me →
        </a>
      </div>
    </>
  );
}