import React, { useState } from 'react';

const Navbar = () => {
  const [navOpen, setNavOpen] = useState(false);

  const toggleNav = () => {
    setNavOpen(!navOpen);
  };

  const closeNav = () => {
    setNavOpen(false);
  };

  return (
    <header className={`header ${navOpen ? 'nav-open' : ''}`}>
      <a href="#">
        <img className="header-logo" src="/img/obed-logo.png" alt="obed-logo" />
      </a>
      <nav className="main-nav">
        <ul className="main-nav-list">
          <li>
            <a className="main-nav-link" href="#skills" onClick={closeNav}>
              What I do
            </a>
          </li>
          <li>
            <a className="main-nav-link" href="#projects" onClick={closeNav}>
              Portfolio
            </a>
          </li>
          <li>
            <a className="main-nav-link" href="#resume" onClick={closeNav}>
              Resume
            </a>
          </li>
          <li>
            <a className="main-nav-link" href="#blog" onClick={closeNav}>
              Blog
            </a>
          </li>
          <li>
            <a className="main-nav-link" href="#contact" onClick={closeNav}>
              Contact Me
            </a>
          </li>
        </ul>
      </nav>
      <button className="btn-mobile-nav" onClick={toggleNav}>
        <ion-icon className="icon-mobile-nav" name="menu-outline"></ion-icon>
        <ion-icon className="icon-mobile-nav" name="close-outline"></ion-icon>
      </button>
    </header>
  );
};

export default Navbar;
