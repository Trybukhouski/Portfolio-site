import React from "react";
import "./style.css";

import picture02 from "../../assets/images/02-big.jpg";

const SingleProjectPage = () => {
  return (
    <main className="section">
      <div className="container">
        <div className="project-details">
          <h1 className="title-1">Video service</h1>

          <img src={picture02} alt="" className="project-details__cover" />

          <div className="project-details__desc">
            <p>Skills: React, Node.js, MongoDB</p>
          </div>

          <a href="#!" className="btn-outline">
            <img src="./img/icons/gitHub-black.svg" alt="" />
            GitHub repo
          </a>
        </div>
      </div>
    </main>
  );
};

export default SingleProjectPage;
