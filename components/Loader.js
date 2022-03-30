import React, { useEffect } from "react";
import PortfolioLogo from "../components/icons/PortfolioLogo";
import styles from "../styles/Loader.module.css";

const LOADER_SHOW_TIME = 1000;

export const Loader = ({ isLoading, setIsLoading }) => {
  useEffect(() => {
    document.documentElement.style.overflow = "hidden";
    const loaderTimeout = setTimeout(() => {
      setIsLoading(false);
      document.documentElement.style.overflow = "auto";
    }, LOADER_SHOW_TIME);

    return () => {
      clearTimeout(loaderTimeout);
    };
  }, []);

  return (
    <div className={`${styles.container} ${!isLoading ? styles.hide : ""}`}>
      <PortfolioLogo className={styles.logo} />
    </div>
  );
};
