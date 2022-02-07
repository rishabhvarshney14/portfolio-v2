import React, { useEffect, useState } from "react";
import { data } from "../../data/projectsData";

import ProjectsBar from "./ProjectsBar";
import ProjectsList from "./ProjectsList";

const Projects = () => {
  const [projects, setProjects] = useState(data);
  const [projectTypes, setProjectTypes] = useState([]);
  const [selectedType, setSelectedType] = useState("all");

  useEffect(() => {
    const createProjectTypes = () => {
      let types = new Set();
      data.forEach(item => {
        types.add(item.type);
      })
      types = Array.from(types)
      setProjectTypes(types);
    }

    createProjectTypes()
  }, [])

  useEffect(() => {
    const setNewProjects = () => {
      if (selectedType === 'all'){
        setProjects(data);
        return
      }
      const newProjects = data.filter(item => item.type === selectedType);
      setProjects(newProjects);
    }

    setNewProjects();
  }, [selectedType])

  return (
    <div id="projects">
      <ProjectsBar types={projectTypes} setType={setSelectedType} selected={selectedType} />
      <ProjectsList data={projects} />
    </div>
  );
};

export default Projects;
