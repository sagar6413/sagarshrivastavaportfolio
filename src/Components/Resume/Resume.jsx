import React from "react";
import "./Resume.css";
import ResumeBody from "./ResumeBody";
function Resume() {
  return (
    <div className="resume" id="resume">
      <div className="resume-header">
        <h1>Resume</h1>
        <p>Get to know me better</p>
      </div>
      <div className="resume-header-line">
        <div className="resume-header-subLine"></div>
      </div>
      <ResumeBody />
    </div>
  );
}

export default Resume;
