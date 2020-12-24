import React from "react";
import "../styles/Cards.css";

export const Card = ({
  title,
  link,
  button,
  subheading,
  image,
  description,
  tags,
}) => {
  return (
    <>
      <div class="card">
        <div class="card-image-container">
          <img class="card-image" alt="" src={image}></img>
        </div>
        <div class="content-container">
          <div class="card-content">
            <h1 className="card-title">{title}</h1>
            <p class="card-subheading">{subheading}</p>
            <a className="card-link" href={link}>
              <b>{button}</b>
            </a>
            <br />
            <p class="card-description">{description}</p>
            <div class="techstack-container">
              {tags.map((tag) => (
                <div class="tag-container">
                  <a href={tag.link} class="tag">
                    {tag.title}
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export const ShortCard = ({
  title,
  link,
  button,
  subheading,
  image,
  description,
  tags,
}) => {
  return (
    <>
      <div class="short-card" style={{ height: "100%" }}>
        <div class="card-image-container" style={{ width: "50%" }}>
          <img
            class="card-image"
            alt=""
            src={image}
            style={{ paddingTop: "5px" }}
          ></img>
        </div>
        <div
          class="content-container"
          style={{ width: "100%", height: "100%" }}
        >
          <div
            class="card-content"
            style={{
              paddingLeft: "20px",
              paddingRight: "20px",
              height: "100%",
            }}
          >
            <h1 className="card-title">{title}</h1>
            <p class="card-subheading">{subheading}</p>
            <a className="card-link" href={link}>
              <b>{button}</b>
            </a>
            <br />
            <p class="card-description">{description}</p>
            <div class="techstack-container">
              {tags.map((tag) => (
                <div class="tag-container">
                  <a href={tag.link} class="tag">
                    {tag.title}
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
