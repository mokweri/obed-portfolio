import React from 'react';

const Contact = () => {
  return (
    <section className="contact-section slant-section" id="contact">
      <div className="container">
        <div className="row row-center">
          <div className="contact">
            <div
              className="contact-image-box"
              role="img"
              aria-label="Obed on a discussion"
            >
              <div className="contact-details">
                <h2 className="contact-title">Reach out for Collaborations !</h2>
                <p>
                  I welcome collaboration and am excited about the prospect of
                  working together on innovative projects. <br />Whether it's
                  a shared vision or a fresh idea, I'm open to exploring
                  opportunities to combine our expertise and skills.
                </p>
                <ul className="contact-details-list">
                  <li className="list-item">
                    <ion-icon
                      className="list-icon"
                      name="logo-whatsapp"
                    ></ion-icon>
                    <span>+254 795983642</span>
                  </li>
                  <li className="list-item">
                    <ion-icon
                      className="list-icon"
                      name="mail-outline"
                    ></ion-icon>
                    <span>mogsobd[at]gmail.com</span>
                  </li>
                  <li className="list-item">
                    <ion-icon
                      className="list-icon"
                      name="location-outline"
                    ></ion-icon>
                    <span>Nairobi, Kenya.</span>
                  </li>
                </ul>
                <p>Fill out the details and I will reach out to you.</p>

                <div className="cta-social row flex-gap-tiny bottom-space-small">
                  <a
                    className="icon-link"
                    href="https://www.linkedin.com/in/obed-mogaka-23477a6a/"
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
            </div>
            <div className="contact-form">
              <form className="cta-form" action="#">
                <div>
                  <label htmlFor="first-name">First Name</label>
                  <input
                    id="first-name"
                    type="text"
                    placeholder="John"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="second-name">Second Name</label>
                  <input
                    id="second-name"
                    type="text"
                    placeholder="Smith"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="phone-number">Phone Number</label>
                  <input
                    id="phone-number"
                    type="text"
                    placeholder="+(code) xxxxxxx"
                  />
                </div>
                <div>
                  <label htmlFor="email">Email address</label>
                  <input
                    id="email"
                    type="email"
                    placeholder="me@example.com"
                    required
                  />
                </div>
                <div className="message-box">
                  <label htmlFor="message">Message</label>
                  <textarea
                    id="message"
                    type="text"
                    rows="4"
                    placeholder="How can we collaborate?"
                  ></textarea>
                </div>
                <button className="btn btn--form" type="submit">Submit</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
