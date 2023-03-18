import React from "react";
import check from "../../Assets/check.png";
import "./services.css";
const Services = () => {
  return (
    <section id="services">
      <h2>Services</h2>
      <div className="container services__container">
        
        <article className="service">
          <div className="service__head">
            <h3>UI/UX Design</h3>
          </div>

          <ul className="service__list">
            <li>
              <img src={check} alt="" className="icon" />
              <p>Javascript Mastery</p>
            </li>
            <li>
              <img src={check} alt="" className="icon" />
              <p>Competitor Analysis</p>
            </li>
            <li>
              <img src={check} alt="" className="icon" />
              <p>Customer Analysis</p>
            </li>
            <li>
              <img src={check} alt="" className="icon" />
              <p>Prototyping and wireframing</p>
            </li>
            <li>
              <img src={check} alt="" className="icon" />
              <p>Testing and Iteration</p>
            </li>
          </ul>
        </article>

        <article className="service">
          <div className="service__head">
            <h3>MEAN / MERN</h3>
          </div>

          <ul className="service__list">
            <li>
              <img src={check} alt="" className="icon" />
              <p>Node Mastery</p>
            </li>
            <li>
              <img src={check} alt="" className="icon" />
              <p>Javascript Mastery</p>
            </li>
            <li>
              <img src={check} alt="" className="icon" />
              <p>Express Mastery</p>
            </li>
            <li>
              <img src={check} alt="" className="icon" />
              <p>Frontend Dev</p>
            </li>
            <li>
              <img src={check} alt="" className="icon" />
              <p>Backend Dev</p>
            </li>
          </ul>
        </article>

        <article className="service">
          <div className="service__head">
            <h3>Dev Ops</h3>
          </div>

          <ul className="service__list">
            <li>
              <img src={check} alt="" className="icon" />
              <p>Deployment</p>
            </li>
            <li>
              <img src={check} alt="" className="icon" />
              <p>Github Pages</p>
            </li>
            <li>
              <img src={check} alt="" className="icon" />
              <p>Microsoft Azure</p>
            </li>
            <li>
              <img src={check} alt="" className="icon" />
              <p>Amazon AWS</p>
            </li>
            <li>
              <img src={check} alt="" className="icon" />
              <p>Docker</p>
            </li>
          </ul>
        </article>

      </div>
    </section>
  );
};

export default Services;
