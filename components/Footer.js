import React from 'react';
import { useRouter } from 'next/router';
import styles from '../styles/Footer.module.css';
import GitHub from './icons/GitHub';
import Instagram from './icons/Instagram';
import LinkedIn from './icons/LinkedIn';
import { footerContent } from '../lib/translations';

const Footer = () => {
  const { locale } = useRouter();
  const { firstMessage, secondMessage } = footerContent[locale];

  return (
    <>
      <div className={styles.footer_info}>
        <div className={styles.footer_text}>
          <small>{firstMessage}</small>
          <p>{secondMessage}</p>
        </div>
        <div className={styles.footer_socials}>
          <div>
            <a
              href='https://www.github.com/marlopc'
              target='_blank'
              rel='noreferrer'
              aria-labelledby='footer-github'
            >
              <span id='footer-github'>Github</span>
              <GitHub size={40} />
            </a>
            <a
              href='https://www.linkedin.com/in/lucas-panaro'
              target='_blank'
              rel='noreferrer'
              aria-labelledby='footer-linkedin'
            >
              <span id='footer-linkedin'>LinkedIn</span>
              <LinkedIn size={40} />
            </a>
            <a
              href='https://www.instagram.com/lucaspanaro1'
              target='_blank'
              rel='noreferrer'
              aria-labelledby='footer-instagram'
            >
              <span id='footer-instagram'>Instagram</span>
              <Instagram size={40} />
            </a>
          </div>
        </div>
      </div>
    </>
  )
};

export default Footer;
