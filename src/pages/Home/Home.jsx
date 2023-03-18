import React from "react";
import { OrgCard } from "../../components";
import "./home.css";
const Home = () => {
  return (
    <div className="home">
      <section id="uni">
      <h1>
        Explore Different Profiles 
      </h1>
      <div className="org_cards">
       <OrgCard/>
      </div>
      </section>
      <section id="researchOrgs">

      </section>
    </div>
  );
};

export default Home;
