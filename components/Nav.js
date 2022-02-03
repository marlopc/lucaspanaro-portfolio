import React, { useState } from 'react';
import styles from '../styles/Nav.module.css';
import Link from 'next/link';
import useWindowSize from '../hooks/useWindowSize';
import Burger from './Burger';
import useScrollDirection from '../hooks/useScrollDirection';
import useLocale from '../hooks/useLocale';
import { navContent } from '../lib/translations';

const Nav = ({ toggleMenu, menuIsOpen }) => {
  const [isHidden, setIsHidden] = useState(false);
  const { locale } = useLocale();
  const size = useWindowSize();
  const navNames = navContent[locale];

  useScrollDirection(setIsHidden);

  return (
    <>
      <div className={styles.navHold} name={navNames.home.toLowerCase()} />
      <div className={isHidden && (!menuIsOpen || size.width > 950) ? styles.navContainerHidden : styles.navContainer}>
        <Link href={`/#${navNames.home.toLowerCase()}`}>
          <a>
            <div className={styles.navLogo}>
              <h1>LP
                <span className={styles.navLogoDot}>.</span>
              </h1>
            </div>
          </a>
        </Link>
        {size.width > 950 ? (
          <ul className={styles.navLinksUl}>
            <li>
              <Link href={`/#${navNames.home.toLowerCase()}`}>
                <a>
                  <div>
                    {navNames.home}
                  </div>
                </a>
              </Link>
            </li>
            <li>
              <Link href={`/#${navNames.projects.toLowerCase()}`}>
                <a>
                  <div>
                    {navNames.projects}
                  </div>
                </a>
              </Link>
            </li>
            <li>
              <Link href={`/#${navNames.contact.toLowerCase()}`}>
                <a>
                  <div>
                    {navNames.contact}
                  </div>
                </a>
              </Link>
            </li>
            <li>
              <a 
                href={process.env.NEXT_PUBLIC_CV_DRIVE}
                target='_blank'
                rel='noreferrer'
              >
                <div>
                  {navNames.resume}
                </div>
              </a>
            </li>     
          </ul>
        ) : (
          <Burger
            toggleMenu={toggleMenu}
            menuIsOpen={menuIsOpen}
          />
        )}
      </div>
    </>
  )
}

export default Nav
