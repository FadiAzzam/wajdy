import React from "react";

import Hero from "../Sections/Hero";
import About from "../Sections/About";
import Projects from "../Sections/Projects";
import Expertise from "../Sections/Expertise";
import Experiences from "../Sections/Experiences";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";

import ProfileHero from "../Sections/ProfileHero";
import ProfileDescription from "../Sections/ProfileDescription";
import ProfileArticles from "../Sections/ProfileArticles";

const LandingPage = () => {
  return (
    <div>
      <div className="bg-gray-950/50 pb-6">
        <ProfileHero />
        <div className="container flex flex-col md:flex-row gap-6 ">
          <ProfileDescription />
          <ProfileArticles />
        </div>
      </div>
      {/* <Hero />
      <About />
      <Projects />
      <Expertise /> */}
    </div>
  );
};

export default LandingPage;
