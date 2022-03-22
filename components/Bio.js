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
    { disableIf: '(max-height: 300px)' }
  );

  const { title, about_1, about_2, about_3, about_4 } = bioContent[locale];

  return (
    <section>
      <div className={styles.container}>
        <div className={`${styles.bio_background} ${animation ? 'fade_in_up' : ""}`} ref={containerRef}>
          <div className={styles.bio_paragraph}>
            <h2>{title}</h2>
            <p>
              <br/>
              {about_1} <br/><br/> 
              {about_2} <br/><br/>
              {about_3} <br/><br/>
              {about_4} <br/>
            </p>
          </div>
          <img
            className={styles.bio_image}
            src='/assets/images/lucas.jpg'
            alt='Lucas Panaro'
          />
        </div>
      </div>
    </section>
  )
};

export default Bio;
