import React from "react";
import { Link } from "react-scroll";

const Header = () => {
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
      <Link to="home" smooth={true} duration={500}>
        Home
      </Link>
      <Link to="about" smooth={true} duration={500}>
        About
      </Link>
      <Link to="portfolio" smooth={true} duration={500}>
        Portfolio
      </Link>
      <Link to="footer" smooth={true} duration={500}>
        Contact
      </Link>
    </div>
  );
};

export default Header;
