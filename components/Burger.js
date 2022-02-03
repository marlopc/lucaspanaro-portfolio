import React from 'react';
import styles from '../styles/Burger.module.css';

const Burger = ({ toggleMenu, menuIsOpen }) => {

  return (
    <button className={styles.container} onClick={toggleMenu}>
      <div className={menuIsOpen ? styles.burger_icon : styles.burger_icon_close}>
        <div className={!menuIsOpen ? styles.burger_line_1 : styles.burger_line_1_close}/>
        <div className={!menuIsOpen ? styles.burger_line_2 : styles.burger_line_2_close}/>
        <div className={!menuIsOpen ? styles.burger_line_3 : styles.burger_line_3_close}/>
      </div>
    </button>
  )
}

export default Burger
