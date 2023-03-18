import React from "react";
import "./about.css";
import ME from "../../Assets/me-about.jpg";
import about from "../../Assets/about.png";
import projects from "../../Assets/book.png";
import exp from "../../Assets/experience.png";

const About = () => {
  const orgProfiles = [
    {
      name: "MUTEX",
      bio: "The best org",
      location: "ISB",
      email: "bb@nu.edu.pk",
      image:
        "https://images.unsplash.com/photo-1621176302432-6d336647db89?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
      jobs: [
        {
          jobId: 1,
          name: "Program manager",
          description: "We need a full time ",
          postedOn: "17th March",
          applicantCount: 20,
        },
        {
          jobId: 3,
          name: "Software Engineer",
          description: "We need a full time ",
          postedOn: "17th March",
          applicantCount: 30,
        },
        {
          jobId: 2,
          name: "DevOps Engineer",
          description: "We need a full time ",
          postedOn: "17th March",
          applicantCount: 2,
        },
      ],
    },
    {
      name: "PLLSSLS",
      bio: "The sadsadasd org",
      location: "BEBBBESA",
      email: "bb@nu.edu.pk",
      image:
        "https://images.unsplash.com/photo-1621176302196-9ab38d681980?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",

      jobs: [
        {
          jobId: 1,
          name: "Program manager",
          description: "We need a full time ",
          postedOn: "17th March",
          applicantCount: 20,
        },
        {
          jobId: 3,
          name: "Software Engineer",
          description: "We need a full time ",
          postedOn: "17th March",
          applicantCount: 30,
        },
        {
          jobId: 2,
          name: "DevOps Engineer",
          description: "We need a full time ",
          postedOn: "17th March",
          applicantCount: 2,
        },
      ],
    },
  ];

  return (
    <div>
      {orgProfiles.map((org) => {
        return (
          <div id="about">
            <h1>{org.name}</h1>

            <h4 className="bio">Welcome </h4>

            <div className="container about__container">
              <div className="about__me">
                <div className="about__me-image">
                  <img src={ME} alt="ME" />
                </div>
              </div>
              <br />

              <div className="about__content">
                <div className="about__cards">
                  <article className="about__card">
                    <img alt="" src={about} className="about__icon" />
                    <h5>Jobs Openings</h5>
                    <small>20</small>
                    <br /> <br />
                    <button className="btn">Apply Now</button>
                  </article>

                  <article className="about__card">
                    <img alt="" src={exp} className="about__icon" />
                    <h5>Clients</h5>
                    <small>Just started</small>
                  </article>

                  <article className="about__card">
                    <img alt="" src={projects} className="about__icon" />
                    <h5>Projects Completed</h5> <small>20+</small>
                  </article>
                </div>
                <p>A junior software engineer</p>
                <a href="#contact" className="btn btn-primary">
                  {" "}
                  Let's Talk
                </a>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default About;
