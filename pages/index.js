import React from 'react';
import { readFileSync } from 'fs';
import { join } from 'path';
import useLocale from '../hooks/useLocale';
import Header from '../components/Header';
import Divider from '../components/Divider';
import Projects from '../components/Projects';
import Bio from '../components/Bio';
import Contact from '../components/Contact';
import Stack from '../components/Stack';
import SEO from '../components/SEO';
import { sectionNames } from '../lib/translations';

const Home = ({ email_env, projects }) => {
  const { locale } = useLocale();

  const { t_bio, t_stack, t_projects, t_contact } = sectionNames[locale];

  return (
    <div>
      <SEO />
      <Header />
      <Divider section={t_bio} />
      <Bio />
      <Divider section={t_stack} />
      <Stack />
      <Divider section={t_projects} />
      <Projects projects={projects} />
      <Divider section={t_contact} />
      <Contact emailAddress={email_env} />
    </div>
  )
};

export const getStaticProps = async ({ locale }) => {
  const email_env = process.env.EMAIL;

  const projectsFilePath = join(process.cwd(), 'projects.json');

  const projects = readFileSync(projectsFilePath, { encoding: 'utf-8' });

  return {
    props: {
      locale,
      email_env,
      projects: JSON.parse(projects),
    }
  };
};

export default Home;
