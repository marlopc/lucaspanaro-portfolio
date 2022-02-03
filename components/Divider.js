import styles from '../styles/Divider.module.css';

const Divider = ({ section }) => {
  return (
    <div className={styles.container} name={section.toLowerCase()}>
      <span>{'<'}{section}{'/>'}</span>
    </div>
  )
}

export default Divider
