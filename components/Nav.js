import React, { useState } from 'react';
import Link from 'next/link';
import styles from '../styles/Nav.module.css';
import useLocale from '../hooks/useLocale';
import useMediaQuery from '../hooks/useMediaQuery';
import useScrollEvent from '../hooks/useScrollEvent';
import NavDesktop from './NavDesktop';
import NavResponsive from './NavResponsive';
import PortfolioLogo from './icons/PortfolioLogo';
import { navContent } from '../lib/translations';

const Nav = () => {
  const [isHidden, setIsHidden] = useState(false);

  useScrollEvent({
    scrollUpCb: () => setIsHidden(false),
    scrollDownCb: () => setIsHidden(true),
  });

  const isDesktopLikeScreen = useMediaQuery('(min-width: 950px)');

  const { locale } = useLocale();
  const { home } = navContent[locale];

  return (
    <>
      <div className={styles.navHold} name={home.toLowerCase()} />
      <header
        className={(isHidden && isDesktopLikeScreen) ? styles.navContainerHidden : styles.navContainer}
        onFocus={() => setIsHidden(false)}
      >
        <Link href={`/#${home.toLowerCase()}`}>
          <a aria-label={home.toLowerCase()}>
            <PortfolioLogo />
          </a>
        </Link>
        {isDesktopLikeScreen ? <NavDesktop /> :  <NavResponsive />}
      </header>
    </>
  )
};

export default Nav;
