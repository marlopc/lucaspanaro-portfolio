import { useRef } from 'react';
import useObserver from '../hooks/useObserver';
import styles from '../styles/Project.module.css';
import Tech from './Tech';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';


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
            <a href={project.link || '/'} target='_blank' rel='noopener noreferrer'>
              <FontAwesomeIcon icon={faExternalLinkAlt} />
              <span>Visit</span>
            </a>
          )}
          {project.repo && (
            <a href={project.repo || '/'} target='_blank' rel='noopener noreferrer'>
              <FontAwesomeIcon icon={faGithub} />
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
