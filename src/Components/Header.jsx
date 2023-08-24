import React from "react";

const scrollToSection = (sectionId) => {
  const section = document.getElementById(sectionId);
  if (section) {
    section.scrollIntoView({ behavior: "smooth" });
  }
};

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
      <a onClick={() => scrollToSection("Home")} href="#home">
        Home
      </a>
      <a onClick={() => scrollToSection("About")} href="#about">
        About
      </a>
      <a onClick={() => scrollToSection("Portfolio")} href="#portfolio">
        Portfolio
      </a>
      <a onClick={() => scrollToSection("Contact")} href="#footer">
        Contact
      </a>
    </div>
  );
};

export default Header;
