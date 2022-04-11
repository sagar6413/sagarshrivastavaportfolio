import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import Typical from "react-typical";
import "./AboutText.css";

function AboutText() {
  return (
    <div className="aboutText">
      <div className="aboutText-Social">
        <a href="https://twitter.com/tweetofsagar">
          <FontAwesomeIcon className="socialIcon" icon={faTwitter} />
        </a>
        <a href="https://www.instagram.com/insta4sagar/">
          <FontAwesomeIcon className="socialIcon" icon={faInstagram} />
        </a>
        <a href="https://www.linkedin.com/in/linktosagar/">
          <FontAwesomeIcon className="socialIcon" icon={faLinkedin} />
        </a>
      </div>
      <div className="aboutText-Name">
        <span className="primary-text">
          Hello, I'M <span className="highlighted-text">Sagar</span>
        </span>
      </div>
      <div className="aboutText-Role">
        <span className="primary-text">
          <h1>
            <Typical
              loop={Infinity}
              steps={[
                "Full Stack Developer",
                1000,
                "Front End Developer",
                1000,
                "Back End Developer",
                1000,
              ]}
            />
          </h1>
          <span className="profile_details-RoleTagLine">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </span>
        </span>
      </div>
      <div className="aboutText-Options">
        <button className="btn btn-primary">Hire Me</button>
        <a href="../../Assets/SagarResume.pdf" download>
          <button className="btn  highlighted-btn">Get Resume</button>
        </a>
      </div>
    </div>
  );
}

export default AboutText;
