import styles from '../styles/Footer.module.css';
import { useRouter } from 'next/dist/client/router';
import GitHub from './icons/GitHub';
import Instagram from './icons/Instagram';
import LinkedIn from './icons/LinkedIn';

const footerContent = {
  'en-US': {
    message_1: 'Made by myself using',
    message_2: 'and',
    message_3: 'Thanks for your visit!'
  },
  'es-ES': {
    message_1: 'Hecho por mí usando',
    message_2: 'y',
    message_3: 'Gracias por tu visita!'
  }
};

const Footer = () => {
  const router = useRouter();
  const { message_1, message_2, message_3 } = footerContent[router?.locale || 'en-US']; 

  return (
    <>
      <div className={styles.footer_info}>
        <div className={styles.footer_text}>
          <p>{message_1} <span name='tech'>NextJS</span> {message_2} <span name='tech'>CSS</span></p>
          <p>{message_3}</p>
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
