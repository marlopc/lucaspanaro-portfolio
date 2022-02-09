import React from 'react';
import useLocale from '../hooks/useLocale';
import { navContent } from '../lib/translations';
import styles from '../styles/Nav.module.css';
import Link from 'next/link';

const NavDesktop = () => {
  const { locale } = useLocale();
  const navNames = navContent[locale];

  return (
    <nav className={styles.nav}>
      <ul>
        <li>
          <Link href={`/#${navNames.home.toLowerCase()}`}>
            <a>
              {navNames.home}
            </a>
          </Link>
        </li>
        <li>
          <Link href={`/#${navNames.projects.toLowerCase()}`}>
            <a>
              {navNames.projects}
            </a>
          </Link>
        </li>
        <li>
          <Link href={`/#${navNames.contact.toLowerCase()}`}>
            <a>
              {navNames.contact}
            </a>
          </Link>
        </li>
        <li>
          <a 
            href={process.env.NEXT_PUBLIC_CV_DRIVE}
            target='_blank'
            rel='noopener noreferrer'
          >
            {navNames.resume}
          </a>
        </li>     
      </ul>
    </nav>
  );
};

export default NavDesktop;
