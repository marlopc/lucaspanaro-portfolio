import React from 'react';
import { useRouter } from 'next/router';
import allProjects from '../projects.json';
import Bio from '../components/Bio';
import Contact from '../components/Contact';
import Divider from '../components/Divider';
import Header from '../components/Header';
import PageHead from '../components/PageHead';
import Projects from '../components/Projects';
import SEO from '../components/SEO';
import Stack from '../components/Stack';
import { sectionNames } from '../lib/translations';
import { Loader } from '../components/Loader';

const Home = () => {
  const { locale } = useRouter();

  const { bio, stack, projects, contact } = sectionNames[locale];

  return (
    <>
      <PageHead title='Lucas Panaro' />
      <SEO />
      <Loader />
      <Header />
      <Divider section={bio} />
      <Bio />
      <Divider section={stack} />
      <Stack />
      <Divider section={projects} />
      <Projects projects={allProjects} />
      <Divider section={contact} />
      <Contact />
    </>
  )
};

export default Home;
