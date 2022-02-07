import React from "react";

// Styles
import styles from "./styles/projectItem.module.css";

// Icons
import github from "../../data/icons/github.png";
import web from "../../data/icons/globe.png";

const ProjectItem = ({imgLink, name, githubLink, webLink}) => {
  return (
    <div>
      <div className={styles.container}>
        <div className={styles.imageContainer}>
          <img
            className={styles.image}
            src={imgLink}
            alt="project-img"
          />
        </div>
        <div className={styles.textField}>
          <p>{name}</p>
          <div className={styles.icons}>
            <a href={githubLink}>
              <img src={github} alt="github-link" />
            </a>
            {webLink && <a  href={webLink}>
              <img src={web} alt="web-link"/>
            </a>}
          </div>
        </div>
      </div>

      <div className={styles.shadow}></div>
    </div>
  );
};

export default ProjectItem;
