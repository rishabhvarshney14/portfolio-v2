import React from "react";

// Data
import ProfileImage from "../../data/images/profile.png";

// Styles
import styles from "./styles/about.module.css";

const About = () => {
  return (
    <div className={styles.container} id="abt-me">
      <div className={styles.imgContainer}>
        <img className={styles.profileImg} src={ProfileImage} alt="profile" />
      </div>
      <div className={styles.textField}>
        <h1 className={styles.heading}>About Me</h1>
        <p className={styles.textLine}>
          I am a passionate, curious programmer who never wants to stop
          learning.
        </p>
        <p className={styles.textLine}>
          I am currently an undergrad student majoring in Computer Science and
          Engineering.
        </p>
        <p className={styles.textLine}>
          I consider myself a curious and inquisitive person, so in my spare
          time, I like to work on side projects and try to constantly learn
          something new to improve my skillset.
        </p>
      </div>
    </div>
  );
};

export default About;
