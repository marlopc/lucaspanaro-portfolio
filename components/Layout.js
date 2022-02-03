import React, { useState } from 'react';
import Head from 'next/head';
import useMediaQuery from '../hooks/useMediaQuery';
import ResponsiveMenu from './ResponsiveMenu';
import Footer from './Footer';
import Nav from './Nav';

const Layout = ({ children }) => {
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  const isMobileLikeScreen = useMediaQuery('(max-width: 950px)');

  const toggleMenu = () => {
    setMenuIsOpen(!menuIsOpen);
  };

  return (
    <>
      <Head>
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
        <meta name='keywords' content='developer, portfolio, job, projects, contact, information, about, software, web, development' />
        <meta charSet='utf-8' />
        <link rel='icon' href='/favicon.ico' />
        <title>Lucas Panaro</title>
      </Head>
      <Nav 
        toggleMenu={toggleMenu} 
        menuIsOpen={menuIsOpen}
      />
      {isMobileLikeScreen && (
        <ResponsiveMenu 
          toggleMenu={toggleMenu} 
          menuIsOpen={menuIsOpen}
        />
      )}
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
