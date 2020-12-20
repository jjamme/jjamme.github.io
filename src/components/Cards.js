import React from "react";
import "../styles/Cards.css";

const Card = ({ title, link, subheading, image, description }) => {
  return (
    <>
      <div class="card">
        <img class="gangnam" src={image}></img>
        <div class="card-content">
          <h1 className="card-title">{title}</h1>
          <p class="card-subheading">{subheading}</p>
          <a className="card-link" href={link}>
            <b>REPOSITORY</b>
          </a>
          <br />
          <p class="card-description">{description}</p>
        </div>
      </div>
    </>
  );
};

export default Card;
