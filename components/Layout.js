import { useEffect, useState } from 'react';
import ResponsiveMenu from './ResponsiveMenu';
import Footer from './Footer';
import Head from 'next/head';
import Nav from './Nav';
import { useRouter } from 'next/dist/client/router';

const navContent = {
  'en-US': {
    home: 'HOME',
    projects: 'PROJECTS',
    contact: 'CONTACT',
    resume: 'MY RESUME'
  },
  'es-ES': {
    home: 'INICIO',
    projects: 'PROYECTOS',
    contact: 'CONTACTO',
    resume: 'MI CV'
  }
};

const Layout = ({ children }) => {
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  const [locale, setLocale] = useState('en-US');
  const navNames = navContent[locale];
  const router = useRouter();

  useEffect(() => {
    setLocale(router.locale);
  }, [router]);


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
        navNames={navNames}
      />
      <ResponsiveMenu 
        toggleMenu={toggleMenu} 
        menuIsOpen={menuIsOpen}
        navNames={navNames}
      />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
