import React from "react";
import Navbar from "./Navbar";
import Hero from "./Hero";
import Skills from "./Skills";
import Project from "./Project";
import Experience from "./Experience";
import Education from "./Education";
import Contact from "./Contact";
import About from "./About";
import Footer from "./Footer";
import TopScroll from "./TopScroll";

const Home = () => {
  return (
    <div className="snap-y snap-mandatory scroll-smooth overflow-y-auto h-screen overflow-x-hidden [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
      <Navbar />
      <TopScroll />
      <section id="home" className="snap-center min-h-screen h-auto">
        <Hero />
      </section>
      <section id="about" className="snap-center min-h-screen h-auto">
        <About />
      </section>
      <section id="skills" className="snap-center min-h-screen h-auto">
        <Skills />
      </section>
      <section id="projects" className="snap-center min-h-screen h-auto">
        <Project />
      </section>
      <section id="experience" className="snap-center min-h-screen h-auto">
        <Experience />
      </section>
      <section id="education" className="snap-center min-h-screen h-auto">
        <Education />
      </section>
      <section id="contact" className="snap-center min-h-screen h-auto">
        <Contact />
      </section>
      <section className="h-60 snap-center">
        <Footer />
      </section>

    </div>
  );
};

export default Home;
