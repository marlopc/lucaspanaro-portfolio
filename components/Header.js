import styles from "../styles/Header.module.css";
import Link from "next/link";

const headerContent = {
  "en-US": {
    greeting: "Hey! i'm",
    scroll_text: "Scroll down to see more!",
    paragraph_1: `I like creating solutions, and constantly learning 
    about new technologies and best practices.`,
    paragraph_2: `I am looking for new experiences 
    that allow me to grow professionally, feel free to send me a message!`
  },
  "es-ES": {
    greeting: "Hola! soy",
    scroll_text: "Baja para ver más!",
    paragraph_1: `Disfruto crear soluciones, y aprender constantemente
    sobre nuevas tecnologías y buenas prácticas.`,
    paragraph_2: `Busco nuevas experiencias que me permitan crecer 
    profesionalmente, sientete libre de contactarme si quieres!`
  }
};

const Header = ({ context }) => {
  const { locale } = context;
  const { greeting, scroll_text, paragraph_1, paragraph_2 } = headerContent[locale];

  return (
    <div className={styles.headerContainer}>
      <span className={styles.greeting}>{greeting}</span>
      <h1 className={styles.name}>Lucas Panaro</h1>
      <h2 className={styles.dev}>
        Web developer
        <span className={styles.devDot}>.</span>
      </h2>

      <p className={styles.paragraph}>
        {paragraph_1}<br/><br/>
        {paragraph_2}
      </p>
      <div className={styles.scrollDown}>
        <Link href="#bio">
          <span>{scroll_text}</span>
        </Link>
      </div>
    </div>
  )
}

export default Header
