import React from 'react';
import styles from '../styles/Tech.module.css';

const Tech = ({ tech }) => {
  return (
    <span className={styles.techSpan}>
      {tech}
    </span>
  );
};

export default Tech;
