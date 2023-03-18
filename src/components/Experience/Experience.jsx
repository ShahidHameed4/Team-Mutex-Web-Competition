import React from "react";
import skillIcon from "../../Assets/verified.png";
import "./experience.css";
const Experience = () => {
  return (
    <section id="experience">
     
      <h2>My Experience</h2>

      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Frontend Dev</h3>
          <div className="experience__content">
            <article className="experience__details">
              <img src={skillIcon} alt="" className="icon" />
              <div>
                <h4>HTML</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>

            <article className="experience__details">
              <img src={skillIcon} alt="" className="icon" />
              <div>
                <h4>React</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>

            <article className="experience__details">
              <img src={skillIcon} alt="" className="icon" />
              <div>
                <h4>Angular</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>

            <article className="experience__details">
              <img src={skillIcon} alt="" className="icon" />
              <div>
                <h4>php</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>

            <article className="experience__details">
              <img src={skillIcon} alt="" className="icon" />
              <div>
                <h4>Larawell</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
          </div>
        </div>

        <div className="experience__frontend">
          <h3>Backend Dev</h3>
          <div className="experience__content">
            <article className="experience__details">
              <img src={skillIcon} alt="" className="icon" />
              <div>
                <h4>Javascript</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>

            <article className="experience__details">
              <img src={skillIcon} alt="" className="icon" />
              <div>
                <h4>Express</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>

            <article className="experience__details">
              <img src={skillIcon} alt="" className="icon" />
              <div>
                <h4>Node</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>

            <article className="experience__details">
              <img src={skillIcon} alt="" className="icon" />
              <div>
                <h4>Python</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>

            <article className="experience__details">
              <img src={skillIcon} alt="" className="icon" />
              <div>
                <h4>MySQL</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
