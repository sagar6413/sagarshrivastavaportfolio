import React from "react";
import "./Projects.css";
import project1 from "../../Assets/project1.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode, faCloud } from "@fortawesome/free-solid-svg-icons";

function Projexts() {
  return (
    <section id="projects" className="projects">
      <h1>More of my works</h1>

      <ul className="projects-cards">
        <li>
          <div className="card">
            <img src={project1} className="card__image" alt="" />
            <div className="card__overlay">
              <div className="card__header">
                {/* <svg className="card__arc" xmlns="http://www.w3.org/2000/svg">
                  <path />
                </svg> */}
                {/* <img
                  className="card__thumb"
                  src="https://i.imgur.com/7D7I6dI.png"
                  alt=""
                /> */}
                <div className="card__header-text">
                  <h3 className="card__title">Amazon Clone 1</h3>
                  <span className="card__status">1 hour ago</span>
                </div>
              </div>
              <p className="card__description">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Asperiores, blanditiis?
              </p>
              {/* <div className="card__footer">
                <a href="#" className="btn btn-primary"></a>
            </div> */}
              <p className="card__description-flex">
                <a href="#" className="card-description">
                  <FontAwesomeIcon icon={faCode} />
                </a>
                <a href="#" className="card-description">
                  <FontAwesomeIcon icon={faCloud} />
                </a>
              </p>
            </div>
          </div>
        </li>
        <li>
          <div className="card">
            <img src={project1} className="card__image" alt="" />
            <div className="card__overlay">
              <div className="card__header">
                {/* <svg className="card__arc" xmlns="http://www.w3.org/2000/svg">
                  <path />
                </svg> */}
                {/* <img
                  className="card__thumb"
                  src="https://i.imgur.com/7D7I6dI.png"
                  alt=""
                /> */}
                <div className="card__header-text">
                  <h3 className="card__title">Amazon Clone 2</h3>
                  <span className="card__status">1 hour ago</span>
                </div>
              </div>
              <p className="card__description">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Asperiores, blanditiis?
              </p>
              {/* <div className="card__footer">
                <a href="#" className="btn btn-primary"></a>
            </div> */}
              <p className="card__description-flex">
                <a href="#" className="card-description">
                  <FontAwesomeIcon icon={faCode} />
                </a>
                <a href="#" className="card-description">
                  <FontAwesomeIcon icon={faCloud} />
                </a>
              </p>
            </div>
          </div>
        </li>
        <li>
          <div className="card">
            <img src={project1} className="card__image" alt="" />
            <div className="card__overlay">
              <div className="card__header">
                {/* <svg className="card__arc" xmlns="http://www.w3.org/2000/svg">
                  <path />
                </svg> */}
                {/* <img
                  className="card__thumb"
                  src="https://i.imgur.com/7D7I6dI.png"
                  alt=""
                /> */}
                <div className="card__header-text">
                  <h3 className="card__title">Amazon Clone3</h3>
                  <span className="card__status">1 hour ago</span>
                </div>
              </div>
              <p className="card__description">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Asperiores, blanditiis?
              </p>
              {/* <div className="card__footer">
                <a href="#" className="btn btn-primary"></a>
            </div> */}
              <p className="card__description-flex">
                <a href="#" className="card-description">
                  <FontAwesomeIcon icon={faCode} />
                </a>
                <a href="#" className="card-description">
                  <FontAwesomeIcon icon={faCloud} />
                </a>
              </p>
            </div>
          </div>
        </li>{" "}
        <li>
          <div className="card">
            <img src={project1} className="card__image" alt="" />
            <div className="card__overlay">
              <div className="card__header">
                {/* <svg className="card__arc" xmlns="http://www.w3.org/2000/svg">
                  <path />
                </svg> */}
                {/* <img
                  className="card__thumb"
                  src="https://i.imgur.com/7D7I6dI.png"
                  alt=""
                /> */}
                <div className="card__header-text">
                  <h3 className="card__title">Amazon Clone</h3>
                  <span className="card__status">1 hour ago</span>
                </div>
              </div>
              <p className="card__description">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Asperiores, blanditiis?
              </p>
              {/* <div className="card__footer">
                <a href="#" className="btn btn-primary"></a>
            </div> */}
              <p className="card__description-flex">
                <a href="#" className="card-description">
                  <FontAwesomeIcon icon={faCode} />
                </a>
                <a href="#" className="card-description">
                  <FontAwesomeIcon icon={faCloud} />
                </a>
              </p>
            </div>
          </div>
        </li>{" "}
        <li>
          <div className="card">
            <img src={project1} className="card__image" alt="" />
            <div className="card__overlay">
              <div className="card__header">
                {/* <svg className="card__arc" xmlns="http://www.w3.org/2000/svg">
                  <path />
                </svg> */}
                {/* <img
                  className="card__thumb"
                  src="https://i.imgur.com/7D7I6dI.png"
                  alt=""
                /> */}
                <div className="card__header-text">
                  <h3 className="card__title">Amazon Clone</h3>
                  <span className="card__status">1 hour ago</span>
                </div>
              </div>
              <p className="card__description">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Asperiores, blanditiis?
              </p>
              {/* <div className="card__footer">
                <a href="#" className="btn btn-primary"></a>
            </div> */}
              <p className="card__description-flex">
                <a href="#" className="card-description">
                  <FontAwesomeIcon icon={faCode} />
                </a>
                <a href="#" className="card-description">
                  <FontAwesomeIcon icon={faCloud} />
                </a>
              </p>
            </div>
          </div>
        </li>{" "}
        <li>
          <div className="card">
            <img src={project1} className="card__image" alt="" />
            <div className="card__overlay">
              <div className="card__header">
                {/* <svg className="card__arc" xmlns="http://www.w3.org/2000/svg">
                  <path />
                </svg> */}
                {/* <img
                  className="card__thumb"
                  src="https://i.imgur.com/7D7I6dI.png"
                  alt=""
                /> */}
                <div className="card__header-text">
                  <h3 className="card__title">Amazon Clone</h3>
                  <span className="card__status">1 hour ago</span>
                </div>
              </div>
              <p className="card__description">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Asperiores, blanditiis?
              </p>
              {/* <div className="card__footer">
                <a href="#" className="btn btn-primary"></a>
            </div> */}
              <p className="card__description-flex">
                <a href="#" className="card-description">
                  <FontAwesomeIcon icon={faCode} />
                </a>
                <a href="#" className="card-description">
                  <FontAwesomeIcon icon={faCloud} />
                </a>
              </p>
            </div>
          </div>
        </li>
      </ul>
    </section>
  );
}

export default Projexts;
