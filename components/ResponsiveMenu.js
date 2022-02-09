import React from 'react';
import Link from 'next/link';
import styles from '../styles/Menu.module.css';
import useLocale from '../hooks/useLocale';
import PortfolioLogo from './icons/PortfolioLogo';
import { navContent } from '../lib/translations';

const ResponsiveMenu = ({ menuIsOpen, closeMenu, addItemToRefs, handleKeyDown }) => {
  const { locale } = useLocale();

  const navNames = navContent[locale];

  const handleClick = () => { closeMenu({ focusBurger: false }) }

  return (
    <>
      <nav className={`${styles.menu} ${menuIsOpen ? styles.show_menu : ''}`}>
        <header>
          <PortfolioLogo />
        </header>
        <ul className={styles.menuLinksUl} onKeyDown={handleKeyDown}>
          <li>
            <Link href={`/#${navNames.home.toLowerCase()}`}>
              <a
                onClick={handleClick}
                tabIndex={menuIsOpen ? '0' : '-1'}
                ref={addItemToRefs}
              >
                <div>
                  {navNames.home}
                </div>
              </a>
            </Link>
          </li>
          <li>
            <Link href={`/#${navNames.projects.toLowerCase()}`}>
              <a
                onClick={handleClick}
                tabIndex={menuIsOpen ? '0' : '-1'}
                ref={addItemToRefs}
              >
                <div>
                  {navNames.projects}
                </div>
              </a>
            </Link>
          </li>
          <li>
            <Link href={`/#${navNames.contact.toLowerCase()}`}>
              <a
                onClick={handleClick}
                tabIndex={menuIsOpen ? '0' : '-1'}
                ref={addItemToRefs}
              >
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
              rel='noopener noreferrer'
              tabIndex={menuIsOpen ? '0' : '-1'}
              ref={addItemToRefs}
              onClick={closeMenu}
            >
              <div>
                {navNames.resume}
              </div>
            </a>
          </li>
        </ul>
      </nav>
    </>
  )
};

export default ResponsiveMenu;
