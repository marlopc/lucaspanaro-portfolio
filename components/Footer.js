import styles from '../styles/Footer.module.css';
import GitHub from './icons/GitHub';
import Instagram from './icons/Instagram';
import LinkedIn from './icons/LinkedIn';
import useLocale from '../hooks/useLocale';
import { footerContent } from '../lib/translations';

const Footer = () => {
  const { locale } = useLocale();
  const { message_1, message_2 } = footerContent[locale]; 

  return (
    <>
      <div className={styles.footer_info}>
        <div className={styles.footer_text}>
          <small>{message_1}</small>
          <p>{message_2}</p>
        </div>
        <div className={styles.footer_socials}>
          <div>
            <a 
              href='https://www.github.com/marlopc'
              target='_blank'
              rel='noreferrer'
            >
              <span>Github</span>
              <span>
                <GitHub size={40} />
              </span>
            </a>
            <a 
              href='https://www.linkedin.com/in/lucas-panaro'
              target='_blank'
              rel='noreferrer'
            >
              <span>LinkedIn</span>
              <span>
                <LinkedIn size={40} />
              </span>
            </a>
            <a 
              href='https://www.instagram.com/lucaspanaro1'
              target='_blank'
              rel='noreferrer'
            >
              <span>Instagram</span>
              <span>
                <Instagram size={40} />
              </span>
            </a>
          </div>
        </div>
      </div>
    </>
  )
}

export default Footer
