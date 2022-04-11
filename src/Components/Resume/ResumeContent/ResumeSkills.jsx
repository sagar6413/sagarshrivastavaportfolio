import React from "react";
import "./ResumeSkills.css";

import javalogo from "../../../Assets/java_logo.png";
import jslogo from "../../../Assets/js_logo.png";
import htmllogo from "../../../Assets/html_logo.png";
import csslogo from "../../../Assets/css_logo.png";
import reactlogo from "../../../Assets/react_logo.png";
import reduxlogo from "../../../Assets/redux_logo.png";
import nodelogo from "../../../Assets/node_logo.png";
import expresslogo from "../../../Assets/express_logo.png";
import restlogo from "../../../Assets/rest_logo.png";
import mysqllogo from "../../../Assets/mysql_logo.png";
import mongologo from "../../../Assets/mongo_logo.png";
import firebaseelogo from "../../../Assets/firebase_logo.png";

function ResumeSkills() {
  return (
    <section className="resumeSkills">
      <div className="resumeSkills-ProgrammingLanguages">
        <h2>Programming Languages</h2>
        <div className="resumeSkills-ProgrammingLanguagesIcons">
          <img src={javalogo} alt="JAVA" />
          <img src={jslogo} alt="JAVASCRIPT" />
        </div>
      </div>

      <div className="resumeSkills-ProgrammingLanguages">
        <h2>Frontend</h2>
        <div className="resumeSkills-ProgrammingLanguagesIcons">
          <img src={htmllogo} alt="" />
          <img src={csslogo} alt="" />
          <img src={reactlogo} alt="" />
          <img src={reduxlogo} alt="" />
        </div>
      </div>

      <div className="resumeSkills-ProgrammingLanguages">
        <h2>Backend</h2>
        <div className="resumeSkills-ProgrammingLanguagesIcons">
          <img src={nodelogo} alt="" />
          <img src={expresslogo} alt="" />
          <img src={restlogo} alt="" />
        </div>

        <div className="resumeSkills-ProgrammingLanguages">
          <h2>Database</h2>
          <div className="resumeSkills-ProgrammingLanguagesIcons">
            <img src={mysqllogo} alt="" />
            <img src={mongologo} alt="" />
            <img src={firebaseelogo} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default ResumeSkills;
