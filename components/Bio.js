import React, { useRef } from 'react';
import styles from '../styles/Bio.module.css';
import useObserver from '../hooks/useObserver';
import useLocale from '../hooks/useLocale';
import { bioContent } from '../lib/translations';

const Bio = () => {
  const containerRef = useRef();
  const { locale } = useLocale();
  const [animation] = useObserver(containerRef, '-150px');

  const { title, about_1, about_2, about_3, about_4 } = bioContent[locale];

  return (
    <div className='sectionContainer'>
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
    </div>
  )
}

export default Bio
