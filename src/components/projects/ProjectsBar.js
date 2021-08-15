import React from "react";

// Styles
import styles from "./styles/projectsBar.module.css";

const ProjectBar = () => {
  return (
    <div className={styles.component}>
      <div className={styles.container}>
        <ul className={styles.lists}>
          <li className={styles.listActive}>Hello World</li>
          <li className={styles.list}>Hello World</li>
          <li className={styles.list}>Hello World</li>
          <li className={styles.list}>Hello World</li>
          <li className={styles.list}>Hello World</li>
        </ul>
      </div>
      <div className={styles.shadow}></div>
    </div>
  );
};

export default ProjectBar;
