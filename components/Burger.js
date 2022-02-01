import styles from '../styles/Burger.module.css';
import React from 'react';

const Burger = ({ toggleMenu, menuIsOpen }) => {

  return (
    <div className={styles.container} onClick={toggleMenu}>
      <div className={menuIsOpen ? styles.burger_icon : styles.burger_icon_close}>
        <div className={!menuIsOpen ? styles.burger_line_1 : styles.burger_line_1_close}/>
        <div className={!menuIsOpen ? styles.burger_line_2 : styles.burger_line_2_close}/>
        <div className={!menuIsOpen ? styles.burger_line_3 : styles.burger_line_3_close}/>
      </div>
    </div>
  )
}

export default Burger
