import React from "react";
import aboutimage from "../assets/about.png";

const About = () => {
  return (
    <div id="about">
      <div className="about-image">
        <img src={aboutimage} alt="About" />
      </div>
      <div className="about-text">
        <h1>Learn More About Us</h1>
        <p className="details">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro nemo
          eum, repellat vero soluta amet voluptate nulla odio harum velit
          mollitia corporis odit atque omnis quo iusto voluptatibus esse! Vitae.
        </p>
        <button>Read More..</button>
      </div>
    </div>
  );
};

export default About;
