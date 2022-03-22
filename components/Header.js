import React from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import styles from '../styles/Header.module.css';
import { headerContent } from '../lib/translations';

const Header = () => {
  const { locale } = useRouter();
  const { greeting, scrollText, firstParagraph, secondParagraph } = headerContent[locale];

  return (
    <div className={styles.headerContainer}>
      <span className={styles.greeting}>{greeting}</span>
      <h1 className={styles.name}>Lucas Panaro</h1>
      <p className={styles.dev}>
        Web developer
        <span className={styles.devDot}>.</span>
      </p>
      <p className={styles.paragraph}>
        {firstParagraph}<br/><br/>
        {secondParagraph}
      </p>
      <div className={styles.scrollDown}>
        <Link href='#bio'>
          <a>{scrollText}</a>
        </Link>
      </div>
    </div>
  )
};

export default Header;
