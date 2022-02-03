import React from 'react';
import Link from 'next/link';
import styles from '../styles/Menu.module.css';
import useLocale from '../hooks/useLocale';
import { navContent } from '../lib/translations';

const ResponsiveMenu = ({ menuIsOpen, toggleMenu }) => {
  const { locale } = useLocale();

  const navNames = navContent[locale];

  return (
    <>
      <div 
        className={menuIsOpen ? styles.background : styles.background_hidden}
        onClick={toggleMenu}
      />
      <div className={menuIsOpen ? styles.menu : styles.menu_hidden}>
        <ul className={styles.menuLinksUl}>
          <li>
              <Link href={`/#${navNames.home.toLowerCase()}`}>
                <a onClick={toggleMenu}>
                  <div>
                    {navNames.home}
                  </div>
                </a>
              </Link>
            </li>
            <li>
              <Link href={`/#${navNames.projects.toLowerCase()}`}>
                <a onClick={toggleMenu}>
                  <div>
                    {navNames.projects}
                  </div>
                </a>
              </Link>
            </li>
            <li>
              <Link href={`/#${navNames.contact.toLowerCase()}`}>
                <a onClick={toggleMenu}>
                  <div>
                    {navNames.contact}
                  </div>
                </a>
              </Link>
            </li>
            <li>
              <a 
                href='https://drive.google.com/file/d/14gebX90Mmv1xyI5K0MpHqLdBidVGU2o7/view'
                target='_blank'
                rel='noreferrer'
              >
                <div>
                  {navNames.resume}
                </div>
              </a>
            </li>
        </ul>
      </div>
    </>
  )
}

export default ResponsiveMenu
