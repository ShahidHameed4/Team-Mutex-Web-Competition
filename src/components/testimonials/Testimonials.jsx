import React from "react";
import img from "../../Assets/avatar2.jpg";
import fav from "../../Assets/fav.png";
import Icon from "../Icon/Icon";
import "./testimonials.css";
const Testimonials = () => {
  return (
    <section id="testimonials">
      <h2>Jobs</h2>
      <h4>Explore and apply for jobs</h4>
      <h5 className="tp"></h5>
      <div className="outer__container">
        <div className="inner__container">
          <img
            src="https://images.unsplash.com/photo-1586281380349-632531db7ed4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
            alt=""
            className="Product_image"
          />
          <div className="job_desc">
            <div className="product_attributes">
              <h3>Job Name: </h3>
              <h3>Org Name: </h3>
              <h5>Description:</h5>
              <h4>Starting from: $1199</h4>
            </div>

            <div className="inner_c_buttons">
              <button className="btn btn-primary"> Apply now</button>
              <Icon src={fav} onClick={() => alert("Added to WishList")} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
