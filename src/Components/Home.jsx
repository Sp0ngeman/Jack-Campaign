/**
 * Home component
 *
 * The section at the top of the page to display image of your
 * choice, name and title that describes your career focus.
 */

import React from "react";
import arrowSvg from "../images/down-arrow.svg";
import PropTypes from "prop-types";

import image from "../images/Jack-Field.png";

const Home = ({ name, title }) => {
  const handleArrowClick = () => {
    // Scroll to the 'about' section
    const aboutSection = document.getElementById("about");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    }
  };
  /**
   * Home background image
   *
   * Below is a sample image. Upload the image of your choice into the "images"
   * directory and import here for use. Then, set imageAltText to string that
   * represents what you see in that image.
   *
   *
   * Need an image? Check out https://unsplash.com to download a photo you
   * freely use on your site.
   */

  Home.defaultProps = {
    name: "",
    title: "",
  };

  Home.propTypes = {
    name: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  };

  const imageAltText = "Jack Fitch standing in a rugby stadium.";

  return (
    <section
      id="home"
      style={{ minWidth: "100vw", minHeight: "100vh", display: "flex", flexDirection: "column" }}
      className="min-height"
    >
      <img className="background" src={image} alt="" />
      <div style={{ position: "absolute", top: "5rem", left: "2rem", width: "17rem" }}>
        <h1>{name}</h1>
        <h2>{title}</h2>
      </div>
      <button
        style={{
          display: "flex",
          alignItems: "center",
          marginTop: "auto",
          marginLeft: "auto",
          marginRight: "auto",
          marginBottom: "3rem",
          cursor: "pointer",
          background: "transparent",
          border: "none",
        }}
        onClick={handleArrowClick}
      >
        <img src={arrowSvg} style={{ height: "3rem", width: "3rem" }} alt={imageAltText} />
      </button>
    </section>
  );
};

export default Home;
