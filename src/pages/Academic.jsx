import React from 'react';
import { Link } from 'react-router-dom';

const Academic = () => {
  const currentYear = new Date().getFullYear();

  return (
    <>
      <header className=""></header>
      <main>
        <div className="back">
          <Link className="back-icon-link" to="/">
            <ion-icon name="arrow-back-circle-outline"></ion-icon>
          </Link>
        </div>
        <section className="academic-header">
          <div className="academic-header-contents">
            <div className="row row-center grid-center-v col-gap-s">
              <img
                className="academic-passport"
                src="/img/academic/passport.jpg"
                alt="obed-passport"
              />
              <div className="academic-name">
                <h1>Obed Mokweri Mogaka</h1>
                <h2>Researcher, Electronics and Communication Engineering</h2>
                <h2>Engineer, Embedded Systems</h2>
              </div>
            </div>
          </div>
        </section>
        <section className="academic-body">
          <div className="container">
            <div className="academic-wrapper">
              <aside className="academic-left-aside">
                <div className="aside-card contact-container">
                  <div className="contact-icon">
                    <ion-icon name="id-card"></ion-icon>
                  </div>
                  <h2 className="academic-h2">Contact Information</h2>
                  <div className="contact-name-dept">
                    <p>Obed M. Mogaka</p>
                    <p>Electronics & Communication Engineering</p>
                  </div>
                  <div className="academic-address">
                    <p>P.O Box 440,</p>
                    <p>Kisii, 40200, Kenya.</p>
                    <p>Phone: +254 795983642</p>
                    <p>obed.mogaka[at]ejust.edu.eg</p>
                  </div>
                  <div className="row flex-gap-small bottom-space-small academic-socials">
                    <a
                      className="academic-icon-link"
                      href="https://www.linkedin.com/in/obed-mogaka-23477a6a/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <ion-icon name="logo-linkedin"></ion-icon>
                    </a>
                    <a
                      className="academic-icon-link"
                      href="https://github.com/mokweri"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <ion-icon name="logo-github"></ion-icon>
                    </a>
                    <a
                      className="academic-icon-link"
                      href="https://www.youtube.com/@EmbedSystems"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <ion-icon name="logo-youtube"></ion-icon>
                    </a>
                  </div>
                </div>
                <div className="aside-card">
                  <h2 className="academic-h2">Links</h2>
                  <ul className="links">
                    <li>
                      <Link className="link" to="/">
                        Portfolio website
                      </Link>
                    </li>
                    <li>
                      <a
                        className="link"
                        href="https://www.researchgate.net/profile/Obed-Mogaka-2"
                        target="_blank"
                        rel="noreferrer"
                      >
                        Research Gate
                      </a>
                    </li>
                    <li>
                      <a
                        className="link"
                        href="https://orcid.org/my-orcid?orcid=0009-0000-9110-7898"
                        target="_blank"
                        rel="noreferrer"
                      >
                        ORCID
                      </a>
                    </li>
                    <li>
                      <a className="link" href="#">
                        Top
                      </a>
                    </li>
                  </ul>
                </div>
              </aside>
              <div className="academic-main">
                <article className="academic-profile">
                  <h1 className="academic-h1">Bio</h1>
                  <span className="credentials">
                    <span className="school">
                      M.S Electronics and Communication Engineering, ECE, 2024
                    </span>
                    <span className="school">
                      B.S Electrical and Electronics Engineering, EEE, 2019
                    </span>
                  </span>
                  <blockquote className="quote">
                    <object
                      data="/img/academic/icon-corner.svg"
                      width="100"
                      height="100"
                    ></object>
                    <div>
                      <p>
                        "What we have before us are breathtaking opportunities
                        disguised as insoluble problems"
                      </p>
                    </div>
                  </blockquote>
                  <p className="profile-desc">
                    Eng. Obed received his BSc. Degree in Electrical and
                    Electronics engineering from Jomo Kenyatta University of
                    Science and Technology, Kenya, in 2019. He is currently
                    pursuing MSc. degree with the Department of Electronics and
                    Communication engineering, Egypt-Japan University of Science
                    and Technology, New Borg El-Arab, Egypt. His research
                    interests include computer vision, FPGA/digital design,
                    embedded systems and artificial intelligence.
                  </p>
                </article>
                <div className="interests row">
                  <div className="col-m">
                    <div className="interests-header">
                      <ion-icon
                        className="academic-icon"
                        name="telescope-outline"
                      ></ion-icon>
                      <h2 className="academic-h1">Research Interests</h2>
                    </div>
                    <ul className="items">
                      <li className="items-title">
                        Heterogeneous Computing: HW/SW Co-design.
                      </li>
                      <li className="items-title">FPGA-based accelerator design.</li>
                      <li className="items-title">
                        Efficient Deep Learning, TinyML.
                      </li>
                      <li className="items-title">Low-Power Design, IoT</li>
                      <li className="items-title">Embedded Systems</li>
                    </ul>
                  </div>
                </div>
                <div className="publications">
                  <div className="interests-header">
                    <ion-icon
                      className="academic-icon"
                      name="reader-outline"
                    ></ion-icon>
                    <h2 className="academic-h1">Selected Publications</h2>
                  </div>
                  <ul className="items">
                    <li className="items-title">
                      <span className="paper">
                        <a>
                          TinyEmergencyNet: A hardware-friendly ultra-lightweight
                          deep learning model for aerial image scene
                          classification, Journal of Real Time Image Processing,
                          2024
                          <em>(Accepted: February 2024)</em>
                        </a>
                      </span>
                      <span className="authers">
                        Obed Mogaka, Rami Zewail, Inoue Koji, Mohammed S. Sayed
                      </span>
                    </li>
                    <li className="items-title">
                      <span className="paper">
                        <a>
                          FPGA Implementation of CNN-Based Aerial Image Scene
                          Classification with Hardware Optimization, IEEE Embedded
                          Systems Letters, 2024
                          <em>(Under Review)</em>
                        </a>
                      </span>
                      <span className="authers">
                        Obed Mogaka, Rami Zewail, Inoue Koji, Mohammed S. Sayed
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
        <footer className="academic-footer">
          <div className="container">
            <div className="last-footer row row-center">
              Copyright &copy; <span className="year">{currentYear}</span> by Obed, All rights
              reserved.
            </div>
          </div>
        </footer>
      </main>
    </>
  );
};

export default Academic;
