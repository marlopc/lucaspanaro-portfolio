import React from 'react';
import style from '../styles/Projects.module.css';
import Project from './Project';

const Projects = ({ projects }) => {

  return (
    <section>
      <div className={style.projects_wrapper}>
        {projects.map((project) => <Project project={project} key={project.id}/>)}
      </div>
    </section>
  )
};

export default Projects;
