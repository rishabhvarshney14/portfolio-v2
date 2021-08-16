import React from "react";

// Icons
import githubIcon from "../../data/icons/github.png";
import linkedinIcon from "../../data/icons/linkedin.png";
import emailIcon from "../../data/icons/email.png";

// Styles
import styles from "./styles/footer.module.css";

const Footer = () => {
  return (
    <div className={styles.container}>
      <hr />
      <div className={styles.contactLine}>
        <p>Contact Me / Hire Me : </p>
        <div className={styles.icons}>
          <a href="/">
            <img src={githubIcon} />
          </a>
          <a href="/">
            <img src={linkedinIcon} />
          </a>
          <a href="/">
            <img src={emailIcon} />
          </a>
        </div>
      </div>
      <p>Rishabh Varshney | 2021</p>
    </div>
  );
};

export default Footer;
