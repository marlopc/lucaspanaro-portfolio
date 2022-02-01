import style from '../styles/Projects.module.css';
import Project from './Project';
import projects from '../projects'; 

const Projects = () => {

  return (
    <div className='sectionContainer'>
      <div className={style.projects_wrapper}>
        {projects.map(project => <Project project={project} key={project.name}/>)}
      </div>
    </div>
  )
};

export default Projects
