/**
 * Portfolio component
 *
 * Highlights some of  your creations. These can be designs, websites,
 * open source contributions, articles you've written and more.
 *
 * This is a great area for you to to continually add to and refine
 * as you continue to learn and create.
 */

import React from "react";

/**
 * Desk image
 *
 * Below is a sample desk image. Feel free to update this to an image of your choice,
 * updating below imageAltText to string that represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
import image from "../images/rose in my book.jpg";

const imageAltText = "rose in my book";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title: "Pani Puri Website template🎉",
    description:
      "I create a pani puri website template in a learning journey of HTML & CSS. I choosed pani puri as my content because of it's popurality and uniqueness.",
    url: "https://asmitaojha.github.io/PaniPuri_website/index.html",
  },
  {
    title: "Clone-of-Spotify🎶",
    description:
      "Taking reference from youtube I tried to make a clone of spotify using HTML,CSS & Javascript",
    url: "https://github.com/AsmitaOjha/Clone-of-Spotify",
  },
  {
    title: "Combine Project 'TeenSathi🎓' ",
    description:
      "Created a Teensathi website template with my friend Rohit. It is based on the idea to provide all information a teenage needs about their mental and physical health.",
    url: "https://github.com/AsmitaOjha/Combined_Project_TeenSathi",
  },
  {
    title: "Bank System💵",
    description:
      "I tried to make a bank system using HTML,CSS and php. The idea of making this project was given by our Teacher. This system has facility to create account, deposit, withdraw and transer.",
    url: "https://github.com/AsmitaOjha/SAD_project_Bank_system",
  },
];

const Portfolio = () => {
  return (
    <section className="padding" id="portfolio">
      <h2 style={{ textAlign: "center" }}>Portfolio</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
          <img
            src={image}
            style={{ height: "90%", width: "100%", objectFit: "cover" }}
            alt={imageAltText}
          />
        </div>
        <div className="container">
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
              </a>
              <p className="small">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
