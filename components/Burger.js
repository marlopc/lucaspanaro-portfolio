import React from "react";
import clsx from "clsx";
import styles from "~/styles/Burger.module.css";

const Burger = ({ isOpen }) => {
  return (
    <div
      className={clsx(styles.container, {
        [styles.close]: isOpen,
      })}
    >
      <div className={styles.line_1} />
      <div className={styles.line_2} />
      <div className={styles.line_3} />
    </div>
  );
};

export default Burger;
