import Image from "next/image";
import { useRouter } from "next/router";
import React, { useRef } from "react";
import ExternalLink from "~/components/icons/ExternalLink";
import GitHub from "~/components/icons/GitHub";
import Tech from "~/components/Tech";
import useObserver from "~/hooks/useObserver";
import { projectContent } from "~/lib/translations";
import styles from "~/styles/Project.module.css";

const Project = ({ project }) => {
  const { locale } = useRouter();
  const { visit } = projectContent[locale];
  const containerRef = useRef();
  const [animation] = useObserver(containerRef, 150, {
    disableIf: "(max-height: 300px)",
  });

  return (
    <div
      className={`${styles.container} ${animation ? "fade_in_up" : ""}`}
      ref={containerRef}
    >
      <span id={`${project.name}_label`} className={styles.name}>
        {project.name}
      </span>
      <div className={styles.openHover}>
        <div className={styles.overflow}>
          <div className={styles.image}>
            <Image src={project.image} layout="fill" alt={project.name} />
          </div>
          <div className={styles.links}>
            {project.link && (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${visit} ${project.name}`}
              >
                <ExternalLink size={34} />
                <span>{visit}</span>
              </a>
            )}
            {project.repo && (
              <a
                href={project.repo}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${project.name} repo`}
              >
                <GitHub size={34} />
                <span>Repo</span>
              </a>
            )}
          </div>
        </div>
        <div className={styles.stackContainer}>
          {project.tech.map((tech) => (
            <Tech tech={tech} key={tech} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Project;
