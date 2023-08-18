import React from "react";
import Footer from "../components/Footer";
import HeroRest from "../components/HeroRest";
import Navbar from "../components/Navbar";
import AboutContent from "../components/AboutContent";

const About = () => {
  return (
    <div>
      <Navbar />
      <HeroRest
        heading="ABOUT"
        text="I am a Traveller who loves to explore the world"
        text2="Scroll Down a bit.."
      />
      <AboutContent />
      <Footer />
    </div>
  );
};

export default About;
