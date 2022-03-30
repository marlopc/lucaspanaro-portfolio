import React from "react";
import { useRouter } from "next/router";
import styles from "../styles/Burger.module.css";
import { navContent } from "../lib/translations";

const Burger = React.forwardRef(function Burger(
  { closeMenu, openMenu, menuIsOpen, handleKeyDown },
  ref
) {
  const { locale } = useRouter();
  const { open, close } = navContent[locale];

  return (
    <button
      onKeyDown={handleKeyDown}
      className={styles.container}
      onClick={menuIsOpen ? closeMenu : openMenu}
      ref={ref}
      aria-label={menuIsOpen ? close : open}
      aria-expanded={menuIsOpen}
    >
      <div
        className={menuIsOpen ? styles.burger_icon_close : styles.burger_icon}
      >
        <div
          className={
            !menuIsOpen ? styles.burger_line_1 : styles.burger_line_1_close
          }
        />
        <div
          className={
            !menuIsOpen ? styles.burger_line_2 : styles.burger_line_2_close
          }
        />
        <div
          className={
            !menuIsOpen ? styles.burger_line_3 : styles.burger_line_3_close
          }
        />
      </div>
    </button>
  );
});

export default Burger;
