import React from 'react';

const Projects = () => {
  return (
    <section className="projects-section" id="projects">
      <div className="container-wide">
        <div className="projects-grid">
          <div className="featured-intro">
            <h1 className="subsection-title bottom-space-medium">
              Featured Projects
            </h1>
            <p>
              I'm thrilled to showcase a selection of my personal projects...
            </p>

            <div className="row">
              <a className="link" href="https://github.com/mokweri">
                View more projects&rarr;
              </a>
            </div>
          </div>
          <div className="grid grid-2-col col-gap-s projects">
            <div className="project-card">
              <div className="project-overlay"></div>

              <div className="project-card-col">
                <img className="project-img" src="/img/projects/tk2560.jpg" alt="TK2560" />

                <p className="project-heading text-center">TK2560</p>

                <ul className="project-details-list">
                  <li className="list-item">
                    <ion-icon
                      className="list-icon"
                      name="checkmark-outline"
                    ></ion-icon>
                    <span>Based on Atmega2560 MCU.</span>
                  </li>
                  <li className="list-item">
                    <ion-icon
                      className="list-icon"
                      name="checkmark-outline"
                    ></ion-icon>
                    <span>PCB Design- Altium Designer.</span>
                  </li>
                  <li className="list-item">
                    <ion-icon
                      className="list-icon"
                      name="checkmark-outline"
                    ></ion-icon>
                    <span> Firmware - Embedded C. </span>
                  </li>
                  <li className="list-item">
                    <ion-icon
                      className="list-icon"
                      name="checkmark-outline"
                    ></ion-icon>
                    <span>Fabrication and assembly.</span>
                  </li>
                </ul>

                <div className="row flex-gap-small project-links bottom-space-small">
                  <a
                    className="icon-link"
                    href="https://github.com/mokweri/2560_TrainingKit"
                  >
                    <ion-icon name="logo-github"></ion-icon>
                  </a>
                  <a
                    className="icon-link"
                    href="https://www.youtube.com/watch?v=elDvMJ2Rfbs"
                  >
                    <ion-icon name="logo-youtube"></ion-icon>
                  </a>
                </div>
              </div>
            </div>
            <div className="project-card">
              <div className="project-overlay"></div>

              <div className="project-card-col">
                <img className="project-img" src="/img/projects/tinySpeech.JPG" alt="TinySpeech" />

                <p className="project-heading text-center">Embedded ML</p>

                <ul className="project-details-list">
                  <li className="list-item">
                    <ion-icon
                      className="list-icon"
                      name="checkmark-outline"
                    ></ion-icon>
                    <span>Edge Speech Recognition.</span>
                  </li>
                  <li className="list-item">
                    <ion-icon
                      className="list-icon"
                      name="checkmark-outline"
                    ></ion-icon>
                    <span>Using Arduino Nano RP2040.</span>
                  </li>
                  <li className="list-item">
                    <ion-icon
                      className="list-icon"
                      name="checkmark-outline"
                    ></ion-icon>
                    <span>Edge Impulse platform </span>
                  </li>
                  <li className="list-item">
                    <ion-icon
                      className="list-icon"
                      name="checkmark-outline"
                    ></ion-icon>
                    <span>Efficient Machine Learning at the edge.</span>
                  </li>
                </ul>

                <div className="row flex-gap-small project-links bottom-space-small">
                  <a className="icon-link" href="https://github.com/mokweri">
                    <ion-icon name="logo-github"></ion-icon>
                  </a>
                  <a
                    className="icon-link"
                    href="https://www.youtube.com/watch?v=myuRFESEWDQ&t=125s"
                  >
                    <ion-icon name="logo-youtube"></ion-icon>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="gallery">
            <div className="gallery-grid">
              <figure className="gallery-item">
                <img src="/img/gallery/pic1.jpg" alt="My photo at the lab" />
              </figure>
              <figure className="gallery-item">
                <img
                  src="/img/gallery/pic2.jpg"
                  alt="A photo of me in collaboration with my colleges on a project"
                />
              </figure>
              <figure className="gallery-item">
                <img
                  src="/img/gallery/pic3.jpg"
                  alt="A photo of jetson board"
                />
              </figure>
              <figure className="gallery-item">
                <img
                  src="/img/gallery/pic4.jpg"
                  alt="A photo of me with a raspberry pi board with a pcb background"
                />
              </figure>
              <figure className="gallery-item">
                <img
                  src="/img/gallery/pic5.jpg"
                  alt="A photo of me in the office coding"
                />
              </figure>
              <figure className="gallery-item">
                <img
                  src="/img/gallery/pic6.jpg"
                  alt="A photo of me coding out in the open"
                />
              </figure>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
