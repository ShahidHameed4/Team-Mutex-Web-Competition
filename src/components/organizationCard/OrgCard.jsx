import React from "react";
import check from "../../Assets/check.png";
import "./orgCard.css";
const OrgCard = () => {
  const orgProfiles = [
    {
      name: "MUTEX",
      bio: "The best org",
      location: "ISB",
      email: "bb@nu.edu.pk",
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
    },{
      name: "MUTEX",
      bio: "The best org",
      location: "ISB",
      email: "bb@nu.edu.pk",
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
    <section id="orgCards"><div>
      <h2>Organizations</h2>
      {orgProfiles.map((organization) => {
        return (
          <div className="container services__container">
            <article className="service">
              <div className="service__head">
                <h3>{organization.name}</h3>
              </div>

              <ul className="service__list">
                <li>
                  <img src={check} alt="" className="icon" />
                  <p>{organization.bio}</p>
                </li>
                <div className="jobs">
                  <h3>Job Name</h3>
                  <h3>Description</h3>
                  <h3>Posted on</h3>
                  <h3>Applicant Count</h3>
                </div>
                <button className="btn">Login to view Jobs</button>
              </ul>
            </article>
          </div>
        );
      })}</div>
    </section>
  );
};

export default OrgCard;
