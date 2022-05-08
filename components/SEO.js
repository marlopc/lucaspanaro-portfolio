import Head from "next/head";
import { useRouter } from "next/router";
import React from "react";
import { seoContent } from "~/lib/translations";

const SEO = () => {
  const { locale } = useRouter();
  const { title, description, keywords } = seoContent[locale];
  const openGraphLocale = locale.replace("-", "_").toLowerCase();

  return (
    <Head>
      <meta name="keywords" content={keywords} />
      <meta name="description" content={description} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content="/assets/logos/logo-large.png" />
      <meta property="og:url" content={process.env.NEXT_PUBLIC_SITE_URL} />
      <meta property="og:locale" content={openGraphLocale} />
      <meta property="twitter:card" content="summary" />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:url" content={process.env.NEXT_PUBLIC_SITE_URL} />
      <meta property="twitter:image" content="/assets/logos/logo-large.png" />
    </Head>
  );
};

export default SEO;
