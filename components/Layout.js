import React from 'react';
import Head from 'next/head';
import Footer from './Footer';
import Nav from './Nav';

const Layout = ({ children }) => {

  return (
    <>
      <Head>
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
        <meta name='keywords' content='developer, portfolio, job, projects, contact, information, about, software, web, development' />
        <meta charSet='utf-8' />
        <link rel='icon' href='/favicon.ico' />
        <title>Lucas Panaro</title>
      </Head>
      <Nav />
      <main>{children}</main>
      <Footer />
    </>
  )
};

export default Layout;
