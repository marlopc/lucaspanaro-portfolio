import { useRef } from 'react';
import styles from '../styles/Bio.module.css';
import useObserver from '../hooks/useObserver';

const bioContent = {
  'en-US': {
    title: 'A little bit about me.',
    about_1: `I'm 22 years old web developer student from Argentina.`,
    about_2: `I started to learn about 1 year ago, with Javascript, HTML
    and CSS, after learning for myself, I began a bootcamp course for 4 months, 
    where I learned about ReactJS, SQL, NodeJS and more, and made several 
    projects there, including a team project as the final project, 
    where with 7 more students develop an e-commerce.`,
    about_3: `When I finished the course I continued learning about other technologies, 
    and practicing more.`,
    about_4: `Currently i'm searching for my first IT job, expecting to learn more, and 
    work in real-world projects!`  
  },
  'es-ES': {
    title: `Un poco sobre mi.`,
    about_1: `Soy un estudiante de desarrollo web de 22 años, de Argentina.`,
    about_2: `Empecé a aprender hace aproximadamente un año, Javascript, HTML
    y CSS, luego de aprender por mi cuenta, empecé un curso tipo bootcamp por 4 meses,
    donde aprendí sobre ReactJS, SQL, NodeJS, y más, e hice muchos proyectos, incluyendo
    un trabajo en grupo como proyecto final,
    donde con 7 estudiantes desarrollamos un e-commerce.`,
    about_3: `Cuando finalicé el curso continué aprendiendo sobre otras tecnologías,
    y practicando más.`,
    about_4: `Actualmente estoy buscando mi primer trabajo como desarrollador, esperando
    aprender más, y participar de proyectos reales.`
  }
};

const Bio = ({ context }) => {
  const { locale } = context;
  const { title, about_1, about_2, about_3, about_4 } = bioContent[locale];
  const containerRef = useRef();
  const [animation] = useObserver(containerRef, '-150px');

  return (
    <div className='sectionContainer'>
      <div className={styles.container}>
        <div className={`${styles.bio_background} ${animation ? 'fade_in_up' : null}`} ref={containerRef}>
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
