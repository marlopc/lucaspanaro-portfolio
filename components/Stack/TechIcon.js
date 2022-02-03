import React from 'react';
import styles from '../../styles/Stack.module.css';
import useLocale from '../../hooks/useLocale';
import ExternalLink from '../icons/ExternalLink';
import { techIconContent } from '../../lib/translations';

const TechIcon = ({ label, href = false, icon }) => {
  const { locale } = useLocale();

  const { goto } = techIconContent[locale];

  return (
    <div className={styles.icon_container}>
      {href ? (
        <a
          href={href}
          rel='noopener noreferrer'
          target='_blank'
          className={styles.tech_link}
          title={goto(label)}
        >
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
