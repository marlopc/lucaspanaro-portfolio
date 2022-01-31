import styles from '../styles/Divider.module.css';

const Divider = ({ section }) => {
  return (
    <>
      <a name={section.toLowerCase()}></a>
      <div className={styles.container}>
        <div className={styles.divider_wing}/>
        <div className={styles.sign}>
          <span>{'<'}{section}{'/>'}</span>
        </div>
        <div className={styles.divider_wing}/>
      </div>
    </>
    )
}

export default Divider
