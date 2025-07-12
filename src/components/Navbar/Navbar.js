import React, { useState, useEffect } from 'react';
import './Navbar.css';
import { FaRocketchat, FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  /* ----------------------------------------
   * State to control the mobile menu toggle
   * -------------------------------------- */
  const [menuOpen, setMenuOpen] = useState(false);

  /* ------------------------------------------------------------------
   * Side‑effects:
   *  • Close the menu when you click outside of it
   *  • Close the menu on window resize (>768 px = desktop view)
   *  • Lock body scroll while the mobile menu is open
   * ----------------------------------------------------------------- */
  useEffect(() => {
    const handleClickOutside = (event) => {
      // if click happens outside the menu AND hamburger icon → close menu
      if (
        menuOpen &&
        !event.target.closest('.navbar-content') &&
        !event.target.closest('.navbar-menu')
      ) {
        setMenuOpen(false);
      }
    };

    const handleResize = () => {
      if (window.innerWidth > 768) {
        setMenuOpen(false);
      }
    };

    // Lock / unlock page scroll
    document.body.style.overflow = menuOpen ? 'hidden' : 'unset';

    document.addEventListener('mousedown', handleClickOutside);
    window.addEventListener('resize', handleResize);

    // Cleanup on unmount
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      window.removeEventListener('resize', handleResize);
      document.body.style.overflow = 'unset';
    };
  }, [menuOpen]);

  /* ------- Toggle hamburger menu ------- */
  const handleMenuToggle = () => setMenuOpen((prev) => !prev);

  /* ------- Close menu after clicking any link ------- */
  const handleLinkClick = () => setMenuOpen(false);

  return (
    <nav className="navbar">
      {/* Logo – simple PNG for now */}
      <div className="navbar-logo">
        <img src="/logo.png" alt="logo" />
      </div>

      <div className="navbar-content">
        {/* Hamburger for mobile layouts */}
        <button
          className="navbar-hamburger"
          onClick={handleMenuToggle}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>

        {/* Navigation links container – slides in/out on mobile */}
        <div className={`navbar-menu ${menuOpen ? 'open' : ''}`}>
          {menuOpen && (
            <button
              className="mobile-close-btn"
              onClick={handleMenuToggle}
              aria-label="Close menu"
            >
              <FaTimes />
            </button>
          )}

          {/* Anchor links scroll to page sections */}
          <a href="#home" onClick={handleLinkClick}>
            Home
          </a>
          <a href="#about" onClick={handleLinkClick}>
            About
          </a>
          <a href="#service" onClick={handleLinkClick}>
            Service
          </a>
          <a href="#skills" onClick={handleLinkClick}>
            Skills
          </a>
          <a href="#protfolio" onClick={handleLinkClick}>
            Portfolio
          </a>
        </div>

        {/* “Let’s Talk” CTA – always visible */}
        <div className="navbar-talk">
          <a href="#contact" onClick={handleLinkClick}>
            Let's Talk <FaRocketchat />
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
