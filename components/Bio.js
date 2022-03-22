import React, { useRef } from 'react';
import { useRouter } from 'next/router';
import styles from '../styles/Bio.module.css';
import useObserver from '../hooks/useObserver';
import { bioContent } from '../lib/translations';

const Bio = () => {
  const containerRef = useRef();
  const { locale } = useRouter();
  const [animation] = useObserver(
    containerRef,
    150,
    { disableIf: '(max-height: 300px)' },
  );

  const {
    title,
    firstParagraph,
    secondParagraph,
    thirdParagraph,
    fourthParagraph
  } = bioContent[locale];

  return (
    <section>
      <div className={styles.container}>
        <div className={`${styles.bio_background} ${animation ? 'fade_in_up' : ''}`} ref={containerRef}>
          <div className={styles.bio_paragraph}>
            <h2>{title}</h2>
            <p>
              <br/>
              {firstParagraph} <br/><br/>
              {secondParagraph} <br/><br/>
              {thirdParagraph} <br/><br/>
              {fourthParagraph} <br/>
            </p>
          </div>
          <img
            className={styles.bio_image}
            src='/assets/images/lucas.webp'
            alt='Lucas Panaro'
          />
        </div>
      </div>
    </section>
  )
};

export default Bio;
