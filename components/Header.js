import React from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import styles from '../styles/Header.module.css';
import { headerContent } from '../lib/translations';

const Header = () => {
  const { locale } = useRouter();
  const { greeting, scroll_text, paragraph_1, paragraph_2 } = headerContent[locale];

  return (
    <div className={styles.headerContainer}>
      <span className={styles.greeting}>{greeting}</span>
      <h1 className={styles.name}>Lucas Panaro</h1>
      <p className={styles.dev}>
        Web developer
        <span className={styles.devDot}>.</span>
      </p>
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
