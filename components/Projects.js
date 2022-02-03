import style from '../styles/Projects.module.css';
import Project from './Project';

const Projects = ({ projects }) => {

  return (
    <div className='sectionContainer'>
      <div className={style.projects_wrapper}>
        {projects.map((project) => <Project project={project} key={project.id}/>)}
      </div>
    </div>
  )
};

export default Projects
