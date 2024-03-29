import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { headerContent } from "~/lib/translations";
import styles from "~/styles/Header.module.css";

const Header = ({ isLoading }) => {
  const { locale } = useRouter();
  const { greeting, scrollText, paragraph } = headerContent[locale];

  return (
    <div className={styles.headerContainer}>
      <h1 className="clipped" aria-hidden>
        Lucas Panaro | <span lang="en">Web developer</span>
      </h1>
      <span
        className={`${styles.greeting} ${
          !isLoading ? styles.greeting_appear : ""
        }`}
      >
        {greeting}
      </span>
      <h2 className={`${styles.name} ${!isLoading ? styles.name_appear : ""}`}>
        Lucas Panaro
      </h2>
      <div
        className={`${styles.intro} ${!isLoading ? styles.intro_appear : ""}`}
      >
        <p className={styles.dev} lang="en">
          Web developer
          <span className={styles.devDot}>.</span>
        </p>
        <p
          className={styles.paragraph}
          dangerouslySetInnerHTML={{ __html: paragraph }}
        />
      </div>
      <div
        className={`${styles.scrollDown} ${
          !isLoading ? styles.scrollDown_appear : ""
        }`}
      >
        <Link href="#bio">
          <a>{scrollText}</a>
        </Link>
      </div>
    </div>
  );
};

export default Header;
