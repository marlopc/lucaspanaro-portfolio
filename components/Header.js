import React from 'react';
import Link from 'next/link';
import styles from '../styles/Header.module.css';
import useLocale from '../hooks/useLocale';
import { headerContent } from '../lib/translations';

const Header = () => {
  const { locale } = useLocale();
  const { greeting, scroll_text, paragraph_1, paragraph_2 } = headerContent[locale];

  return (
    <div className={styles.headerContainer}>
      <span className={styles.greeting}>{greeting}</span>
      <h1 className={styles.name}>Lucas Panaro</h1>
      <h2 className={styles.dev}>
        Web developer
        <span className={styles.devDot}>.</span>
      </h2>

      <p className={styles.paragraph}>
        {paragraph_1}<br/><br/>
        {paragraph_2}
      </p>
      <div className={styles.scrollDown}>
        <Link href="#bio">
          <a>{scroll_text}</a>
        </Link>
      </div>
    </div>
  )
};

export default Header;
