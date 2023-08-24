import React from "react";
import arrowSvg from "../images/down-arrow.svg";

import image from "../images/motion-background.jpg";

const imageAltText = "purple and blue abstract background";

const About = () => {
  const handleArrowClick = () => {
    // Scroll to the 'portfolio' section
    const portfolioSection = document.getElementById("portfolio");
    if (portfolioSection) {
      portfolioSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const description =
    'I am a passionate sport advocate and Rugby enjoyer. I love the "Art" of food and do as much as I can to spread that sentiment to others.';

  const skillsList = [
    "Rugby Player",
    "Sports Enthusiast",
    "Charity Worker",
    "Food connoisseur",
    "Leader",
    "Chisolm Vice Captain Candidate",
  ];

  const detailOrQuote =
    "I love to work with people and help them achieve their goals. I am a firm believer in the power of positivity and the impact it can have on others.";

  return (
    <section className="padding" id="about">
      <img className="background" src={image} alt={imageAltText} />
      <div
        style={{
          backgroundColor: "white",
          width: "50%",
          padding: "4rem",
          margin: "3rem auto",
          textAlign: "center",
        }}
      >
        <h2>About Myself</h2>
        <p className="large">{description}</p>
        <hr />
        <ul
          style={{
            textAlign: "left",
            columns: 2,
            fontSize: "1.25rem",
            margin: "2rem 3rem",
            gap: "3rem",
            listStyle: "none",
            paddingInlineStart: 0,
          }}
        >
          {skillsList.map((skill) => (
            <li key={skill}>{skill}</li>
          ))}
        </ul>
        <hr />
        <p style={{ padding: "1rem 3rem 0", textAlign: "center" }}>{detailOrQuote}</p>
        <div
          style={{
            position: "absolute",
            bottom: "3rem",
            left: "50%",
            transform: "translateX(-50%)",
          }}
        >
          <button
            style={{
              border: "none",
              background: "transparent",
              cursor: "pointer",
              padding: "0",
              display: "block",
            }}
            onClick={handleArrowClick}
          >
            <img
              src={arrowSvg}
              style={{
                height: "3rem",
                width: "3rem",
                filter: "invert(100%)",
              }}
              alt="Arrow"
            />
          </button>
        </div>
      </div>
    </section>
  );
};

export default About;
