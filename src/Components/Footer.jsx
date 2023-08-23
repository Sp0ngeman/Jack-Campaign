/**
 * Footer component
 *
 * Displays avenues to contact you.
 * Contact information is passed in from the App component that
 * renders the Footer.
 *
 * If a social value has an empty string it will not be displayed.
 */
import React from "react";
import PropTypes from "prop-types";
const primaryColor = "#4E567E";
import envelopeIcon from "../images/socials/envelope.svg";

/**
 * 💡 Learning resources
 *
 *  HTML hyperlinks: https://www.w3schools.com/html/html_links.asp
 *  Opening links in new tabs: https://www.freecodecamp.org/news/how-to-use-html-to-open-link-in-new-tab/
 */

const Footer = ({ email }) => {
  return (
    <div
      id="footer"
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "2.5rem",
        padding: "5rem 0 3rem",
        backgroundColor: primaryColor,
        width: "100vw",
      }}
    >
      {email && (
        <a
          href={`mailto:jack.fitch@sydstu.catholic.edu.au?subject=SendMail&body=Description`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            style={{ cursor: "pointer" }}
            src={envelopeIcon}
            alt="email"
            className="socialIcon"
          />
        </a>
      )}
      {/* Add other social icons here */}
    </div>
  );
};

Footer.defaultProps = {
  email: "",
  primaryColor: "", // Add a default value for primaryColor
};

Footer.propTypes = {
  email: PropTypes.string,
  primaryColor: PropTypes.string,
};

export default Footer;
