import React from "react";
import ProjectItem from "./ProjectItem";

// Styles
import styles from "./styles/projectList.module.css";

const ProjectList = () => {
  return (
    <div className={styles.container}>
      <ProjectItem />
      <ProjectItem />
      <ProjectItem />
      <ProjectItem />
      <ProjectItem />
      <ProjectItem />
      <ProjectItem />
      <ProjectItem />
      <ProjectItem />
    </div>
  );
};

export default ProjectList;
