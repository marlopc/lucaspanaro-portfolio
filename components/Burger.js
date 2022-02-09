import React from 'react';
import styles from '../styles/Burger.module.css';

const Burger = React.forwardRef(({  closeMenu, openMenu, menuIsOpen, handleKeyDown }, ref) => {

  return (
    <button
      onKeyDown={handleKeyDown}
      className={styles.container}
      onClick={menuIsOpen ? closeMenu : openMenu}
      ref={ref}
      aria-label={menuIsOpen ? 'Close menu' : 'Open menu'}
      aria-expanded={menuIsOpen}
    >
      <div className={menuIsOpen ? styles.burger_icon_close : styles.burger_icon}>
        <div className={!menuIsOpen ? styles.burger_line_1 : styles.burger_line_1_close}/>
        <div className={!menuIsOpen ? styles.burger_line_2 : styles.burger_line_2_close}/>
        <div className={!menuIsOpen ? styles.burger_line_3 : styles.burger_line_3_close}/>
      </div>
    </button>
  )
});

export default Burger;
