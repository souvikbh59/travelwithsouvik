import { Link } from "react-router-dom";
import "./AboutContentStyles.css";
import React from "react";
import Img1 from "../assets/kanchenjangha2.jpeg";
import Img2 from "../assets/Hero.jpeg";

const AboutContent = () => {
  return (
    <div className="about">
      <div className="left">
        <h1>Who am I ?</h1>
        <p>
          I am a full stack developer and also a traveller. I love to travel
          different places around the world. <br /> <br />
          I have developed this website to provide all the informations of the
          destinations where I have recently visited and also the whole costing
          of the trip.
          <br /> <br />
          P.S. ** This is a rough estimation of the costing that can be required
          for the listed tours,actual amount may varry depending on different
          circumstances **
        </p>

        <Link to="/travelwithsouvik/Contact">
          <button className="btn">Contact</button>
        </Link>
      </div>
      <div className="right">
        <div className="image-container">
          <div className="image-stack top">
            <img src={Img1} className="img" alt="img1" />
          </div>

          <div className="image-stack bottom">
            <img src={Img2} className="img" alt="img2" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutContent;
