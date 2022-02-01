import styles from '../styles/Divider.module.css';

const Divider = ({ section }) => {
  return (
    <div className={styles.container} name={section.toLowerCase()}>
      <div className={styles.divider_wing}/>
      <div className={styles.sign}>
        <span>{'<'}{section}{'/>'}</span>
      </div>
      <div className={styles.divider_wing}/>
    </div>
    )
}

export default Divider
