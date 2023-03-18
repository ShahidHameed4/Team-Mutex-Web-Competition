import React from "react";
import gh from "../../Assets/gh.png";
import fb from "../../Assets/fb.png";
import linkedin from "../../Assets/in.png";
import mail from "../../Assets/mail.png";

import "./contact.css";
const Contact = () => {


  

  return (
    <section id="contact">
      <h2>Contact me</h2>
      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact_option">
            <img alt="" src={mail} className="img" />
            <h4>Email</h4>
            <h5>dkwork0000@gmail.com</h5>
            <a href="mailto:dkwork0000@gmail.com" target="__blank">
              <u>Open email</u>
            </a>
          </article>

          <article className="contact_option">
            <img alt="" src={linkedin} className="img" />
            <h4>LinkedIn</h4>
            <h5> Daniyal Khan</h5>
            <a
              href="https://www.linkedin.com/in/daniyal-khan-6261b0254/"
              target="__blank"
            >
              Open LinkedIn
            </a>
          </article>

          <article className="contact_option">
            <img alt="" src={gh} className="img" />
            <h4>Github</h4>
            <h5>dkay7223</h5>
            <a href="https://github.com/dkay7223" target="__blank">
              Open Github
            </a>
          </article>

          <article className="contact_option">
            <img alt="" src={fb} className="img" />
            <h4>Facebook</h4>
            <h5>Daniyal Khan</h5>
            <a href="https://www.facebook.com" target="__blank">
              Message me on Facebook
            </a>
          </article>

          
        </div>

        
      </div>
    </section>
  );
};

export default Contact;
