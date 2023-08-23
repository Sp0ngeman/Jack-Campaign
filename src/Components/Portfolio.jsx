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
import image from "../images/UN-Room.jpg";

const imageAltText = "UN General Assembly Room";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title: "Things to know about me😎",
    description:
      "I live for the game of Rugby and have been playing it for as long as I can remember. I also have a great passion for food as you can tell.",
    url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
  },
  {
    title: "What have I done?",
    description:
      "I have had the privlidge to work with so many great people in my time as a charity worker. I have been able to meet people and hear stories.",
    url: "https://www.sydneyfoodtrucks.com.au",
  },
  {
    title: "Charity Work",
    description:
      "I thrive in the enjoyment I get from helping the people who aren't as fortunate as I am, this is only one of the reasons I love charity work.",
    url: "https://www.redcross.org.au",
  },
  {
    title: "Sports",
    description:
      "Rugby, swimming, athletics. I love doing and supporting it all, so voice me your ideas and lets make something happen.",
    url: "https://www.world.rugby",
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
