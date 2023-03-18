import React from "react";
import Icon from "../Icon/Icon";
import fb from "../../Assets/fb.png";
import twitter from "../../Assets/twitter.png";
import insta from "../../Assets/insta.png";
import "./footer.css";
const Footer = () => {
  return (
    <footer>
      {/* eslint-disable-next-line */}
      <a href="#" className="footer__logo">
        DANIYAL KHAN
      </a>

      <ul className="permalinks">
        <li>
          {/* eslint-disable-next-line */}
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#experience">Experience</a>
        </li>
        <li>
          <a href="#services">Services</a>
        </li>
        <li>
          <a href="#portfolio">Portfolio</a>
        </li>
        <li>
          <a href="#testimonials">Testimonials</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>

      <div className="footer__socials">
        <Icon href="https://facebook.com" src={fb} alt="" target="__blank"/>
        <Icon href="https://instagram.com" src={insta} alt="" target="__blank"/>
        <Icon href="https://twitter.com" src={twitter} alt="" target="__blank"/>
      </div>

      <div className="footer__copyright">
        <small>&copy;Daniyal Khan : All rights reserved</small>
      </div>
    </footer>
  );
};

export default Footer;
