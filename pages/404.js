import React from 'react';
import useLocale from '../hooks/useLocale';
import Link from 'next/link';
import styles from '../styles/ErrorPage.module.css';
import ArrowRight from '../components/icons/ArrowRight';
import { custom404Content } from '../lib/translations';

const Custom404 = () => {
  const { locale } = useLocale();
  const { heading, subheading, link } = custom404Content[locale];

  return (
    <div className={styles.container}>
      <h1 className='fade_in_up'>{heading}</h1>
      <div className='fade_in_up_200'>
        <p>{subheading}</p>
        <Link href='/'>
          <a className={styles.link}>
            {link}<span><ArrowRight /></span>   
          </a>
        </Link>
      </div>
    </div>
  );
};

export const getStaticProps = async ({ locale }) => {
  return {
    props: {
      locale: locale,
    }
  };
};

export default Custom404;
