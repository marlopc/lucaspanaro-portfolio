import React, { useEffect, useRef, useState } from 'react';
import { useRouter } from 'next/router';
import styles from '../../styles/Stack.module.css';
import useMediaQuery from '../../hooks/useMediaQuery';
import ExternalLink from '../icons/ExternalLink';
import { techIconContent } from '../../lib/translations';

const ResponsiveIcon = ({ label, href = false, icon }) => {
  const [isActive, setIsActive] = useState(false);
  const { locale } = useRouter();
  const { goto } = techIconContent[locale];
  const linkRef = useRef(null);

  useEffect(() => {
    if (isActive) linkRef.current.focus();
  }, [isActive])

  const handleSetActive = () => {
    setIsActive(true);
  };

  const handleSetUnactive = (e) => {
    if (e.relatedTarget === linkRef.current) return;
    setIsActive(false);
  };

  return (
    <div className={styles.icon_container} onBlur={handleSetUnactive}>
      {isActive && (
        href
          ? <a
            href={href}
            rel='noopener noreferrer'
            target='_blank'
            className={styles.tech_link}
            title={goto(label)}
            ref={linkRef}
          >
            {label}
            <span>
              <ExternalLink size={16} />
            </span>
          </a>
          : <p ref={linkRef} tabIndex='0'>{label}</p>
      )}
      <button
        onFocus={handleSetActive}
        tabIndex={isActive ? '-1' : '0'}
      >
        {icon}
      </button>
    </div>
  )
};

const NormalIcon = ({ label, href = false, icon }) => {
  const { locale } = useRouter();
  const { goto } = techIconContent[locale];

  return (
    <div className={styles.icon_container}>
      {href
        ? <a
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
        : <p tabIndex='0'>{label}</p>
      }
      {icon}
    </div>
  )
};

const TechIcon = (props) => {
  const isSmallScreen = useMediaQuery('(max-width: 860px)');

  if (isSmallScreen) return <ResponsiveIcon {...props} />

  return <NormalIcon {...props} />;
};

export default TechIcon;
