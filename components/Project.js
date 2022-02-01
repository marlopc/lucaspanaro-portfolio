import { useRef } from 'react';
import useObserver from '../hooks/useObserver';
import styles from '../styles/Project.module.css';
import Tech from './Tech';
import Image from 'next/image';
import ExternalLink from './icons/ExternalLink';
import GitHub from './icons/GitHub';


const Project = ({ project }) => {
  const containerRef = useRef();
  const [animation] = useObserver(containerRef, '-150px');

  return (
    <div className={`${styles.container} ${animation ? 'fade_in_up' : null}`} ref={containerRef}>
      <div className={styles.name}>
        <span>| {project.name}</span>
      </div>
      <div className={styles.overflow}>
        <div className={styles.image}>
          <Image
            src={project.image}
            layout='fill'
            alt={project.name}
          />
        </div>
        <div className={styles.links}>
          {project.link && (
            <a href={project.link} target='_blank' rel='noopener noreferrer'>
              <ExternalLink size={34}/>
              <span>Visit</span>
            </a>
          )}
          {project.repo && (
            <a href={project.repo} target='_blank' rel='noopener noreferrer'>
              <GitHub size={34}/>
              <span>Repo</span>
            </a>
          )}
        </div>
      </div>
      <div className={styles.stackContainer}>
        {project.tech.map(tech => <Tech tech={tech} key={tech}/>)}
      </div>
    </div>
  )
};

export default Project
