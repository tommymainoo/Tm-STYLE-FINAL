import React from "react";
import { Link } from "react-router-dom";

import NavBar from "./NavBar";

const HomePage = () => {
  return (
    <div className="homepage-container">
      <NavBar />
      {/* Background Video */}
      <div>
        <video className="bg-video" autoPlay muted loop playsInline>
          <source
            src="https://www.w3schools.com/howto/rain.mp4"
            type="video/mp4"
          />
          Your browser does not support HTML5 video.
        </video>
      </div>

      {/* Overlay Content */}
      <div className="overlay">
        <div className="content">
          <h1 className="title">Welcome to TM Style Housing</h1>
          <p className="subtitle">
            Discover your dream space — affordable, stylish, and designed for
            your lifestyle.
          </p>

          <div className="buttons">
            <Link to="/comp_five" className="btn btn-primary">
              Explore Houses
            </Link>
            <Link to="/aboutus" className="btn btn-secondary">
              About TM Style
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
