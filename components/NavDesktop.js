import React from 'react';
import useLocale from '../hooks/useLocale';
import { navContent, sectionNames } from '../lib/translations';
import styles from '../styles/Nav.module.css';
import Link from 'next/link';
import { encodeLower } from '../lib/encode';

const NavDesktop = () => {
  const { locale } = useLocale();
  const navNames = navContent[locale];
  const sections = sectionNames[locale];

  return (
    <nav className={styles.nav}>
      <ul>
        <li>
          <Link href={`/#${encodeLower(sections.home)}`}>
            <a>
              {navNames.home}
            </a>
          </Link>
        </li>
        <li>
          <Link href={`/#${encodeLower(sections.bio)}`}>
            <a>
              {navNames.bio}
            </a>
          </Link>
        </li>
        <li>
          <Link href={`/#${encodeLower(sections.stack)}`}>
            <a>
              {navNames.stack}
            </a>
          </Link>
        </li>
        <li>
          <Link href={`/#${encodeLower(sections.projects)}`}>
            <a>
              {navNames.projects}
            </a>
          </Link>
        </li>
        <li>
          <Link href={`/#${encodeLower(sections.contact)}`}>
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
