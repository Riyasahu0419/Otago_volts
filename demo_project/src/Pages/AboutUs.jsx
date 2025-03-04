import React from "react";
import Header from "../components/Header";

const AboutUs = () => {
  return (
    <div className="page-container">
     <h3>John Weak</h3>
      <div className="about-container">
        <h3 className="title">About Us</h3>
        <img
          className="about-image"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxctjU21pUENIsGN1F4qY21P7GfdEbhTMp2g&s"
          alt="About"
        />
        <p className="description">
          We are a team of dedicated professionals driven by creativity,
          innovation, and a passion for exceptional design...
        </p>
      </div>
    </div>
  );
};

export default AboutUs;
