import React from "react";
import ProjectItem from "./ProjectItem";
// Styles
import styles from "./styles/projectList.module.css";

const ProjectList = ({data}) => {
  return (
    <div className={styles.container}>
      {data.map(item => (
        <ProjectItem
          key={item.name} 
          name={item.name} 
          githubLink={item.github} 
          webLink={item?.web} 
          imgLink={item.img} />
      ))}
    </div>
  );
};

export default ProjectList;
