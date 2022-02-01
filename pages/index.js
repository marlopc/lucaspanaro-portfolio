import Header from '../components/Header';
import Divider from '../components/Divider';
import Projects from '../components/Projects';
import Bio from '../components/Bio';
import Contact from '../components/Contact';
import Stack from '../components/Stack';
import SEO from '../components/SEO';

const sectionNames = {
  'en-US': {
    t_bio: 'Bio',
    t_stack: 'Stack',
    t_projects: 'Projects',
    t_contact: 'Contact',
    description: 'Lucas Panaro\'s personal portfolio, with contact info, and projects',
    title: 'Lucas Panaro\'s portfolio',
  },
  'es-ES': {
    t_bio: 'Bio',
    t_stack: 'Tecnologías',
    t_projects: 'Proyectos',
    t_contact: 'Contacto',
    description: 'Portfolio personal de Lucas Panaro, puedes ver sus proyectos y enviarle un mensaje!',
    title: 'Portfolio de Lucas Panaro',
  }
};

const Home = ({ context, email_env }) => {
  const { locale } = context;
  const { t_bio, t_stack, t_projects, t_contact, description, title } = sectionNames[locale];


  return (
    <div>
      <SEO locale={locale} description={description} title={title}/>
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
      email_env,
    }
  };
};

export default Home;
