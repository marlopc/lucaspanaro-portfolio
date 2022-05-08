import { useRouter } from "next/router";
import React, { useRef } from "react";
import useObserver from "~/hooks/useObserver";
import { bioContent } from "~/lib/translations";
import styles from "~/styles/Bio.module.css";

const Bio = () => {
  const containerRef = useRef();
  const { locale } = useRouter();
  const [animation] = useObserver(containerRef, 150, {
    disableIf: "(max-height: 300px)",
  });

  const { title, paragraph } = bioContent[locale];

  return (
    <section>
      <div className={styles.container}>
        <div
          className={`${styles.bio_background} ${
            animation ? "fade_in_up" : ""
          }`}
          ref={containerRef}
        >
          <div className={styles.bio_paragraph}>
            <h2>{title}</h2>
            <p dangerouslySetInnerHTML={{ __html: paragraph }} />
          </div>
          <img
            className={styles.bio_image}
            src="/assets/images/lucas.webp"
            alt="Lucas Panaro"
          />
        </div>
      </div>
    </section>
  );
};

export default Bio;
