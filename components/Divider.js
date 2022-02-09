import React from 'react';
import styles from '../styles/Divider.module.css';

const Divider = ({ section }) => {
  return (
    <div className={styles.container} name={section.toLowerCase()}>
      <span><span className={styles.jsxComponent}>{section}</span></span>
    </div>
  )
};

export default Divider;
