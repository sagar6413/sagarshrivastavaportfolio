import React from "react";
import "./About.css";
import AboutText from "./AboutText";
import AboutPic from "./AboutPic";
import AboutFooter from "./AboutFooter";

function About() {
  return (
    <div className="about" id="about">
      <div className="about-contents">
        <AboutText />
        <AboutPic />
      </div>
      <AboutFooter />
    </div>
  );
}

export default About;
