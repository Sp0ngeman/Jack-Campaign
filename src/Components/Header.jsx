import React from "react";

const Header = () => {
  const scrollToRef = (ref) => {
    ref.current.scrollIntoView({ behavior: "smooth" });
  };

  const homeRef = React.useRef(null);
  const aboutRef = React.useRef(null);
  const portfolioRef = React.useRef(null);
  const contactRef = React.useRef(null);

  return (
    <div
      style={{
        position: "fixed",
        display: "flex",
        justifyContent: "center",
        gap: "2rem",
        background: "rgba(255,255,255,0.75)",
        padding: "1rem",
        top: 0,
        width: "100%",
        zIndex: 10,
      }}
    >
      <a href="#home" onClick={() => scrollToRef(homeRef)}>
        Home
      </a>
      <a href="#about" onClick={() => scrollToRef(aboutRef)}>
        About
      </a>
      <a href="#portfolio" onClick={() => scrollToRef(portfolioRef)}>
        Portfolio
      </a>
      <a href="#footer" onClick={() => scrollToRef(contactRef)}>
        Contact
      </a>

      {/* Invisible anchor points for smooth scrolling */}
      <div id="home" ref={homeRef}></div>
      <div id="about" ref={aboutRef}></div>
      <div id="portfolio" ref={portfolioRef}></div>
      <div id="footer" ref={contactRef}></div>
    </div>
  );
};

export default Header;
