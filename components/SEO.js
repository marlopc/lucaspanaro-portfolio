import React from 'react';
import Head from 'next/head';

const SEO = ({ title, description, locale }) => {
  const openGraphLocale = locale.replace('-', '_').toLowerCase();

  return (
    <Head>
      <meta name="description" content={description} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content="/assets/logos/logo-large.png" />
      <meta property="og:url" content="https://lucaspanaro.ga" />
      <meta property="og:locale" content={openGraphLocale} />
      <meta property="twitter:card" content="summary" />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:url" content="https://lucaspanaro.ga" />
      <meta property="twitter:image" content="/assets/logos/logo-large.png" />
    </Head>
  );
};

export default SEO;