import React, { useEffect, useState } from 'react';
import PortfolioLogo from '../components/icons/PortfolioLogo';
import styles from '../styles/Loader.module.css';

const LOADER_SHOW_TIME = 1500;

export const Loader = () => {
  const [isShowing, setIsShowing] = useState(true);

  useEffect(() => {
    document.documentElement.style.overflow = 'hidden';
    const loaderTimeout = setTimeout(() => {
      setIsShowing(false);
      document.documentElement.style.overflow = 'auto';
    }, LOADER_SHOW_TIME);

    return () => {
      clearTimeout(loaderTimeout);
    };
  }, []);

  return (
    <div className={`${styles.container} ${!isShowing ? styles.hide : ''}`}>
      <PortfolioLogo className={styles.logo} />
    </div>
  )
}
