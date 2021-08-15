import React from "react";

// Styles
import styles from "./styles/projectItem.module.css";

// Icons
import github from "../../data/icons/github.png";
import web from "../../data/icons/globe.png";

const ProjectItem = () => {
  return (
    <div>
      <div className={styles.container}>
        <div className={styles.imageContainer}>
          <img
            className={styles.image}
            src="https://gsurma.github.io/images/icons/rocks_icon_web.png"
          />
        </div>
        <div className={styles.textField}>
          <p>Project Name</p>
          <div className={styles.icons}>
            <a href="/">
              <img src={github} />
            </a>
            <a href="/">
              <img src={web} />
            </a>
          </div>
        </div>
      </div>

      <div className={styles.shadow}></div>
    </div>
  );
};

export default ProjectItem;
