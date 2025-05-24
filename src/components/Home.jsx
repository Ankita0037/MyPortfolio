import React from "react";
import Navbar from "./Navbar";
import Hero from "./Hero";
import Skills from "./Skills";
import Project from "./Project";
import Education from "./Education";
import Contact from "./Contact";
import About from './About';

const Home = () => {
  return (
    <div className="snap-y snap-mandatory scroll-smooth overflow-y-auto h-screen overflow-x-hidden">
      <Navbar />
      <section id="hero" className="snap-center h-screen">
        <Hero />
      </section>
      <section id="about" className="snap-center h-screen">
        <About />
      </section>
      <section id="skills" className="snap-center h-screen">
        <Skills />
      </section>
      <section id="project" className="snap-center h-screen">
        <Project />
      </section>
      <section id="education" className="snap-center h-screen">
        <Education />
      </section>
      <section id="contact" className="snap-center h-screen">
        <Contact />
      </section>
    </div>
  );
};

export default Home;