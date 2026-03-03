import React from 'react';

const Resume = () => {
  return (
    <section className="resume-section" id="resume">
      <div className="container">
        <h1 className="section-title bottom-space-medium text-center">Résumé</h1>
        <div className="grid grid-2-col">
          <div className="subsection">
            <p className="subtitle text-color-primary">Experience</p>
            <div className="resume-list">
              <div className="resume-single-list">
                <div className="resume-inner">
                  <div className="resume-inner-header">
                    <h2 className="resume-inner-title">
                      Electronics/Electrical Engineer-Space Systems
                    </h2>
                    <p className="resume-inner-institutuion">
                      Sayarilabs, Nairobi, Kenya
                    </p>
                    <p className="resume-inner-date">Nov 2020 &ndash; Jan 2022</p>
                  </div>
                  <ul className="resume-inner-list">
                    <li>
                      Spearheaded the development of advanced satellite
                      systems, including the Sayarilabs Payload Processor.
                    </li>
                    <li>
                      Procured, qualified, and optimized Commercial
                      Off-The-Shelf (COTS) electronics for space missions.
                    </li>
                    <li>
                      Directed meticulous electrical testing campaigns to
                      ensure the reliability and functionality of critical
                      systems.
                    </li>
                  </ul>
                  <ul className="row flex-gap-tiny resume-inner-highlights">
                    <li>Space Systems</li>
                    <li>Electronics</li>
                  </ul>
                </div>
              </div>
              <div className="resume-single-list">
                <div className="resume-inner">
                  <div className="resume-inner-header">
                    <h2 className="resume-inner-title">
                      Junior Embedded Hardware Engineer
                    </h2>
                    <p className="resume-inner-institutuion">
                      8teq Solutions LTD, Nairobi, Kenya
                    </p>
                    <p className="resume-inner-date">Sep 2019 &ndash; Oct 2020</p>
                  </div>
                  <ul className="resume-inner-list">
                    <li>
                      Led the design and implementation of innovative embedded
                      device systems.
                    </li>
                    <li>
                      Played a pivotal role in analyzing and enhancing the
                      efficiency, stability, and scalability of embedded IoT
                      systems.
                    </li>
                    <li>
                      Demonstrated expertise in hardware design, debugging,
                      and test automation for optimal results.
                    </li>
                  </ul>
                  <ul className="row flex-gap-tiny resume-inner-highlights">
                    <li>Embedded Systems</li>
                    <li>IoT</li>
                    <li>Research</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="subsection">
            <p className="subtitle text-color-primary">Education</p>
            <div className="resume-list">
              <div className="resume-single-list">
                <div className="resume-inner">
                  <div className="resume-inner-header">
                    <h2 className="resume-inner-title">
                      MSc. Electronics and Communication Engineering
                    </h2>
                    <p className="resume-inner-institutuion">
                      Egypy-Japan University of Science and Technology
                      (E-JUST)
                    </p>
                    <p>Alexandria, 21934 , Egypt.</p>
                    <p className="resume-inner-date">March 2022 &ndash; Present</p>
                  </div>
                  <ul className="resume-inner-list">
                    <li>
                      <strong>Research Thesis:</strong> An FPGA-Based Deep
                      Learning Accelerator for Remote Sensing Applications.
                    </li>
                    <li>
                      <strong>Research Interests:</strong> FPGA Design,
                      Embedded Machine Learning, Deep Learning, Image
                      Processing and Computer Vision
                    </li>
                  </ul>
                  <ul className="row flex-gap-tiny resume-inner-highlights">
                    <li>Research</li>
                    <li>MSc</li>
                  </ul>
                </div>
              </div>
              <div className="resume-single-list">
                <div className="resume-inner">
                  <div className="resume-inner-header">
                    <h2 className="resume-inner-title">
                      BSc. Electrical and Electronic Engineering
                    </h2>
                    <p className="resume-inner-institutuion">
                      Jomo Kenyatta University of Agriculture and Technology
                      (JKUAT)
                    </p>
                    <p>Nairobi, 62000, Kenya.</p>
                    <p className="resume-inner-date">
                      Sept 2014 &ndash; Sept 2019
                    </p>
                  </div>
                  <ul className="resume-inner-list">
                    <li>
                      <strong>Graduation Project:</strong> A Moderm
                      Microcontroller Training Kit for JKUAT Microprocessor
                      labs.
                    </li>
                  </ul>
                  <ul className="row flex-gap-tiny resume-inner-highlights">
                    <li>Second Class, Upper Division</li>
                    <li>Power</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row cv">
          <a className="link" href="#" target="_top">Download Detailed CV &rarr;</a>
        </div>
      </div>
    </section>
  );
};

export default Resume;
