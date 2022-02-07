import React from "react";

// Icons
import githubIcon from "../../data/icons/github.png";
import linkedinIcon from "../../data/icons/linkedin.png";
import emailIcon from "../../data/icons/email.png";

// Styles
import styles from "./styles/footer.module.css";

const Footer = () => {
  return (
    <div className={styles.container} id="contact-me">
      <hr />
      <div className={styles.contactLine}>
        <p>Contact Me / Hire Me : </p>
        <div className={styles.icons}>
          <a href="https://github.com/rishabhvarshney14" target="_blank" rel="noopener noreferrer"> 
            <img src={githubIcon} alt="github-icon" />
          </a>
          <a href="https://www.linkedin.com/in/rishabhvarshney14/" target="_blank" rel="noopener noreferrer">
            <img src={linkedinIcon} alt="linkedin-icon" />
          </a>
          <a href="mailto:rishabhvarshney14@gmail.com">
            <img src={emailIcon} alt="mail-icon" />
          </a>
        </div>
      </div>
      <p>Rishabh Varshney | 2021</p>
    </div>
  );
};

export default Footer;
