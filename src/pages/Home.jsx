import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Skills from '../components/Skills';
import Resume from '../components/Resume';
import Projects from '../components/Projects';
import Blog from '../components/Blog';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <>
      <Navbar />
      <main>
        <div className="floating-link">
          <a className="academic-link" href="/academic" target="_parent">
            Academic Page
          </a>
        </div>
        <Hero />
        <Skills />
        <Resume />
        <Projects />
        <Blog />
        <Contact />
      </main>
      <Footer />
    </>
  );
};

export default Home;
