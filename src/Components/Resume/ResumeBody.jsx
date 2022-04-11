import React from "react";
import "./ResumeBody.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import resumeSections from "./ResumeSections";
import ResumeEducation from "./ResumeContent/ResumeEducation";
import ResumeSkills from "./ResumeContent/ResumeSkills";
import ResumeProjects from "./ResumeContent/ResumeProjects";
import ResumeInterests from "./ResumeContent/ResumeInterests";
import ResumeOtherWorks from "./ResumeContent/ResumeOtherWorks";

function ResumeBody() {
  const [activeTab, setActiveTab] = useState("education");
  return (
    <section className="resumeBody-Container">
      <div className="resumeBody">
        <div className="resumeBody-sidebar">
          {resumeSections.map((item) => {
            return (
              <div
                onClick={() => setActiveTab(item.id)}
                className={
                  activeTab === item.id
                    ? `${item.class} active`
                    : `${item.class}`
                }
              >
                <div className="resumeBody-sidebar-Icon">
                  <FontAwesomeIcon
                    icon={item.icon}
                    className={item.icon_class}
                  />
                </div>
                <div className="resumeBody-sidebar-Text">
                  <h2>{item.title}</h2>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="resumeBody-content">
        {activeTab === "education" ? (
          <ResumeEducation />
        ) : activeTab === "skills" ? (
          <ResumeSkills />
        ) : activeTab === "projects" ? (
          <ResumeProjects />
        ) : activeTab === "interests" ? (
          <ResumeInterests />
        ) : activeTab === "activities" ? (
          <ResumeOtherWorks />
        ) : (
          <p></p>
        )}
      </div>
    </section>
  );
}

export default ResumeBody;
