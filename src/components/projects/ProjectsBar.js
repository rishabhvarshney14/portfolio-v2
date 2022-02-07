import React from "react";

// Styles
import styles from "./styles/projectsBar.module.css";

const ProjectBar = ({types, selected, setType}) => {
  return (
    <div className={styles.component}>
      <div className={styles.container}>
        <ul className={styles.lists}>
          <li 
            className={selected === "all" ? styles.listActive : styles.list}
            onClick={() => setType("all")}
            >All</li>
          {types.map((item, idx) => (
            <li 
              key={idx} 
              className={selected === item ? styles.listActive : styles.list}
              onClick={() => setType(item)}
              >{item}</li>
          ))}
        </ul>
      </div>
      <div className={styles.shadow}></div>
    </div>
  );
};

export default ProjectBar;
