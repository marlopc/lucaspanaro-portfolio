import Header from '../components/Header';
import Divider from '../components/Divider';
import Projects from '../components/Projects';
import Bio from '../components/Bio';
import Contact from '../components/Contact';
import Stack from '../components/Stack';

const sectionNames = {
  'en-US': {
    home_anchor: 'home',
    t_bio: 'Bio',
    t_stack: 'Stack',
    t_projects: 'Projects',
    t_contact: 'Contact'
  },
  'es-ES': {
    home_anchor: 'inicio',
    t_bio: 'Bio',
    t_stack: 'Tecnologías',
    t_projects: 'Proyectos',
    t_contact: 'Contacto'
  }
};

const Home = ({ context, email_env }) => {
  const { locale } = context;
  const { home_anchor, t_bio, t_stack, t_projects, t_contact } = sectionNames[locale];

  return (
    <div>
      <a name={home_anchor}/>
      <Header context={context}/>
      <Divider section={t_bio} />
      <Bio context={context} />
      <Divider section={t_stack} />
      <Stack context={context} />
      <Divider section={t_projects} />
      <Projects context={context}/>
      <Divider section={t_contact} />
      <Contact context={context} email_env={email_env} />
    </div>
  )
};

export const getStaticProps = async (context) => {
  const email_env = process.env.EMAIL;

  return {
    props: {
      context,
      email_env
    }
  };
};

export default Home;
