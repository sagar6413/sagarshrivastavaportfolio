import React from "react";
import "./ResumeEducation.css";

function ResumeEducation() {
  return (
    <div className="resumeEducation">
      <div className="resumeEducation-item">
        <div className="resumeEducation-item-text">
          <h1>B.Tech - Computer Science & Engineering </h1>
          <p>Neotia Institute Of Technology Management And Science</p>
          <em>9.22 CGPA</em>
        </div>
        <div className="resumeEducation-item-year">2018-2022</div>
      </div>
      <div className="resumeEducation-item">
        <div className="resumeEducation-item-text">
          <h1>
            (12<sup>th</sup>) Higher Secondary (ISC){" "}
          </h1>
          <p>Sunrise Eng. Med. School</p>
          <em>82.25%</em>
        </div>
        <div className="resumeEducation-item-year">2017-2018</div>
      </div>
      <div className="resumeEducation-item">
        <div className="resumeEducation-item-text">
          <h1>
            (10<sup>th</sup>) Secondary (ISC){" "}
          </h1>
          <p>Sunrise Eng. Med. School</p>
          <em>89.20%</em>
        </div>
        <div className="resumeEducation-item-year">2015-2016</div>
      </div>
    </div>
  );
}

export default ResumeEducation;
