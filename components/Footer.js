import { useRouter } from "next/router";
import React from "react";
import GitHub from "~/components/icons/GitHub";
import LinkedIn from "~/components/icons/LinkedIn";
import { footerContent } from "~/lib/translations";
import styles from "~/styles/Footer.module.css";

const Footer = () => {
  const { locale } = useRouter();
  const { firstMessage, secondMessage } = footerContent[locale];

  return (
    <>
      <div className={styles.footer_info}>
        <div className={styles.footer_text}>
          <small dangerouslySetInnerHTML={{ __html: firstMessage }} />
          <p>{secondMessage}</p>
        </div>
        <div className={styles.footer_socials}>
          <div>
            <a
              href="https://www.github.com/marlopc"
              target="_blank"
              rel="noreferrer"
              aria-labelledby="footer-github"
            >
              <span id="footer-github">Github</span>
              <GitHub size={40} />
            </a>
            <a
              href="https://www.linkedin.com/in/lucas-panaro"
              target="_blank"
              rel="noreferrer"
              aria-labelledby="footer-linkedin"
            >
              <span id="footer-linkedin">LinkedIn</span>
              <LinkedIn size={40} />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
