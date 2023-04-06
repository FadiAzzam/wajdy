import React from "react";

import Hero from "../Sections/Hero";
import About from "../Sections/About";
import Projects from "../Sections/Projects";
import Expertise from "../Sections/Expertise";
import Experiences from "../Sections/Experiences";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";

const LandingPage = () => {
  return (
    <div>
      <Hero />
      <About />
      <Projects />
      <Expertise />
    </div>
  );
};

export default LandingPage;
