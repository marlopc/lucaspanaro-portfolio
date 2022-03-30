import React from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import Link from "next/link";
import styles from "../styles/ErrorPage.module.css";
import ArrowRight from "../components/icons/ArrowRight";
import PageHead from "../components/PageHead";
import { custom404Content } from "../lib/translations";

const Custom404 = () => {
  const { locale } = useRouter();
  const { heading, subheading, link } = custom404Content[locale];

  return (
    <>
      <PageHead title="No encontrado - Lucas Panaro" />
      <Head>
        <meta name="googlebot" content="noindex" />
      </Head>
      <div className={styles.container}>
        <h1 className="fade_in_up">{heading}</h1>
        <div className="fade_in_up_200">
          <p dangerouslySetInnerHTML={{ __html: subheading }} />
          <Link href="/">
            <a className={styles.link}>
              {link}
              <span>
                <ArrowRight />
              </span>
            </a>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Custom404;
