import { useState } from 'react';
import ResponsiveMenu from './ResponsiveMenu';
import Footer from './Footer';
import Head from 'next/head';
import Nav from './Nav';

const Layout = ({ children }) => {
  const [menuIsOpen, setMenuIsOpen] = useState(false);

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
      <ResponsiveMenu 
        toggleMenu={toggleMenu} 
        menuIsOpen={menuIsOpen}
      />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
