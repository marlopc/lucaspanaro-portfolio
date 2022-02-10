import React from 'react';
import { readFileSync } from 'fs';
import { join } from 'path';
import { useRouter } from 'next/router';
import Bio from '../components/Bio';
import Contact from '../components/Contact';
import Divider from '../components/Divider';
import Header from '../components/Header';
import Projects from '../components/Projects';
import SEO from '../components/SEO';
import Stack from '../components/Stack';
import { sectionNames } from '../lib/translations';

const Home = ({ email, allProjects }) => {
  const { locale } = useRouter();

  const { bio, stack, projects, contact } = sectionNames[locale];

  return (
    <div>
      <SEO />
      <Header />
      <Divider section={bio} />
      <Bio />
      <Divider section={stack} />
      <Stack />
      <Divider section={projects} />
      <Projects projects={allProjects} />
      <Divider section={contact} />
      <Contact emailAddress={email} />
    </div>
  )
};

export const getStaticProps = async () => {
  const email = process.env.EMAIL;

  const projectsFilePath = join(process.cwd(), 'projects.json');

  const projects = readFileSync(projectsFilePath, { encoding: 'utf-8' });

  return {
    props: {
      email,
      allProjects: JSON.parse(projects),
    }
  };
};

export default Home;
