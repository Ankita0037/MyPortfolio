import react from "react";
import Navbar from "./Navbar";
import Hero from "./Hero";
import Skills from "./Skills";
import Project from "./Project";
import Education from "./Education";
import Contact from "./Contact";
import About from './About';

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Skills />
      <Project />
      <Education />
      <Contact />
      
    </>
  );
};

export default Home;
