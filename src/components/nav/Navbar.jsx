import React from "react";
import "./navbar.css";

const Navbar = () => {
  return (
    <div className="nav__div">
      <nav>
        <div id="logo">Logo</div>
        <div className="nav__items">
          <a href="home">Home</a>
          <a href="explore">Explore</a>
          <a href="experience">Opportunities</a>
          <a href="services">Jobs</a>
          <a href="portfolio">Articles</a>
          <a href="contact">Institutes</a> 
          <a href="about">About</a>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
