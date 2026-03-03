import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <section className="footer-section">
      <div className="container">
        <div className="footer row flex-gap-small grid-center-v">
          <a href="#">
            <img className="header-logo" src="/img/obed-logo.png" alt="obed-logo" />
          </a>
          <div className="col flex-gap-tiny">
            <p className="copyright">
              Copyright &copy; <span className="year">{currentYear}</span> by Obed, All
              rights reserved.
            </p>
            <p className="copyright">
              Designed with passion using React and Vite.
            </p>
          </div>
          <div className="row flex-gap-small footer-links">
            <a
              className="icon-link"
              href="https://www.linkedin.com/in/obed-mogaka-23477a6a/"
              target="_blank"
              rel="noreferrer"
            >
              <ion-icon name="logo-linkedin"></ion-icon>
            </a>
            <a
              className="icon-link"
              href="https://github.com/mokweri"
              target="_blank"
              rel="noreferrer"
            >
              <ion-icon name="logo-github"></ion-icon>
            </a>
            <a
              className="icon-link"
              href="https://www.youtube.com/@EmbedSystems"
              target="_blank"
              rel="noreferrer"
            >
              <ion-icon name="logo-youtube"></ion-icon>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
