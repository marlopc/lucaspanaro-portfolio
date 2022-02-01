import React from 'react';
import styles from '../../styles/Stack.module.css';
import ExternalLink from '../icons/ExternalLink';

const TechIcon = ({ label, href = false, icon } = {}) => {
  return (
    <div className={styles.icon_container}>
      {href ? (
        <a href={href} rel='noopener noreferrer' target='_blank' className={styles.tech_link}>
          {label}
          <span>
            <ExternalLink size={16} />
          </span>
        </a>
      ) : (
        <p>{label}</p>
      )}
      {icon}
    </div>
  );
};

export default TechIcon;
