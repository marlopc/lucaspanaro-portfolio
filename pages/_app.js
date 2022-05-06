import Head from "next/head";
import Script from "next/script";
import React from "react";
import Layout from "../components/Layout";
import "../public/assets/fonts/style.css";
import "../styles/globals.css";

const GoogleAnalytics = () => {
  const GOOGLE_ANALYTICS_ID = process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID;

  if (!GOOGLE_ANALYTICS_ID) return null;

  return (
    <>
      <Script
        async
        src={`https://www.googletagmanager.com/gtag/js?id=${GOOGLE_ANALYTICS_ID}`}
      ></Script>
      <Script
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
    
      gtag('config', '${GOOGLE_ANALYTICS_ID}')
      `,
        }}
      ></Script>
    </>
  );
};

const AppHead = () => {
  return (
    <Head>
      <link
        rel="preload"
        href="/assets/fonts/Poppins-SemiBold.ttf"
        as="font"
        type="font/ttf"
        crossOrigin="anonymous"
      />
      <link
        rel="preload"
        href="/assets/fonts/SpaceMono-Regular.ttf"
        as="font"
        type="font/ttf"
        crossOrigin="anonymous"
      />
    </Head>
  );
};

function MyApp({ Component, pageProps }) {
  return (
    <>
      <GoogleAnalytics />
      <AppHead />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default MyApp;
