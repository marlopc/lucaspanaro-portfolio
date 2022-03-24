import React from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import styles from '../styles/Header.module.css';
import { headerContent } from '../lib/translations';

const Header = ({ isLoading }) => {
  const { locale } = useRouter();
  const { greeting, scrollText, paragraph } = headerContent[locale];

  return (
    <div className={styles.headerContainer}>
      <span className={`${styles.greeting} ${!isLoading ? styles.greeting_appear : ''}`}>{greeting}</span>
      <h1 className={`${styles.name} ${!isLoading ? styles.name_appear : ''}`}>
        Lucas Panaro
      </h1>
      <div className={`${styles.intro} ${!isLoading ? styles.intro_appear : ''}`}>
        <p className={styles.dev}>
          Web developer
          <span className={styles.devDot}>.</span>
        </p>
        <p className={styles.paragraph} dangerouslySetInnerHTML={{ __html: paragraph }} />
      </div>
      <div className={`${styles.scrollDown} ${!isLoading ? styles.scrollDown_appear : ''}`}>
        <Link href='#bio'>
          <a>{scrollText}</a>
        </Link>
      </div>
    </div>
  )
};

export default Header;
