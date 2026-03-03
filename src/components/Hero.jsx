import React, { useEffect, useRef } from 'react';

const Hero = () => {
  const sectionHeroRef = useRef(null);

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        const ent = entries[0];
        if (ent.isIntersecting === false) {
          document.body.classList.add('sticky');
        }
        if (ent.isIntersecting) {
          document.body.classList.remove('sticky');
        }
      },
      {
        // In the viewport
        root: null,
        threshold: 0,
        rootMargin: '-80px',
      }
    );

    if (sectionHeroRef.current) {
      obs.observe(sectionHeroRef.current);
    }

    return () => {
      // Cleanup observer on unmount
      if (sectionHeroRef.current) {
        obs.unobserve(sectionHeroRef.current);
      }
      document.body.classList.remove('sticky');
    };
  }, []);

  return (
    <section className="profile-hero slant-section" ref={sectionHeroRef}>
      <div className="container">
        <div className="hero-content">
          <div className="hero-top">
            <p className="subtitle text-color-white hero-salute">
              EXPLORE TECHNICAL FRONTIERS WITH
            </p>
            <h1 className="hero-title bottom-space-small">
              Mogaka Obed, <br />the <span>Embedded Systems</span> Engineer.
            </h1>
          </div>
          <div className="hero-description">
            <p className="profile-intro">
              "Transforming visionary concepts into tangible human-centered
              solutions with the power of cutting-edge technology is my
              passion."
            </p>

            <p className="subtitle text-color-white hero-contact">FIND ME ON</p>
            <div className="row flex-gap-small bottom-space-small hero-socials">
              <a
                className="icon-link"
                href="https://www.linkedin.com/in/obed-mogaka-23477a6a/"
                target="_blank"
                rel="noreferrer"
              >
                <ion-icon name="logo-linkedin"></ion-icon>
              </a>
              <a className="icon-link" href="https://github.com/mokweri">
                <ion-icon name="logo-github"></ion-icon>
              </a>
              <a
                className="icon-link"
                href="https://www.youtube.com/@EmbedSystems"
              >
                <ion-icon name="logo-youtube"></ion-icon>
              </a>
            </div>
          </div>
          <div className="hero-image">
            <img className="profile-image" src="/img/obed-hero.png" alt="Obed profile" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
