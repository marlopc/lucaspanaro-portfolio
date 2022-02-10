import React from 'react';
import { encodeLower } from '../lib/encode';
import styles from '../styles/Divider.module.css';

const Divider = ({ section }) => {
  return (
    <div className={styles.container} name={encodeLower(section)}>
      <span><span className={styles.jsxComponent}>{section}</span></span>
    </div>
  )
};

export default Divider;
