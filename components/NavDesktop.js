import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import styles from '../styles/Nav.module.css';
import { encodeLower } from '../lib/encode';
import { navContent, sectionNames } from '../lib/translations';

const NavDesktop = () => {
  const { pathname, locale } = useRouter();
  const navNames = navContent[locale];
  const sections = sectionNames[locale];

  const mainPageNavigation = (
    <>
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
    </>
  );

  return (
    <nav className={styles.nav}>
      <ul>
        <li>
          <Link href={pathname === '/' ? `/#${encodeLower(sections.home)}` : '/'}>
            <a>
              {navNames.home}
            </a>
          </Link>
        </li>
        {pathname === '/' && mainPageNavigation}
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
