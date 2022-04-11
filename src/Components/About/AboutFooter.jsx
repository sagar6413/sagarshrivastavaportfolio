import React from "react";
import "./AboutFooter.css";
import backgroundimage from "../../Assets/shape-bg.png";

function AboutPic() {
  return (
    <div className="aboutFooter">
      <div className="aboutFooter-dp">
        <img src={backgroundimage} alt="backgroundimage" />
      </div>
    </div>
  );
}

export default AboutPic;
