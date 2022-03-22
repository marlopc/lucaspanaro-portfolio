const bioContent = {
  en: {
    title: 'A little bit about me.',
    firstParagraph: 'I\'m a 22 years old web developer student from Argentina.',
    secondParagraph: `I started learning about 1 year ago, Javascript, HTML and CSS.
    After doing it by myself, I began a bootcamp course for 4 months, where 
    I learned about ReactJS, SQL, NodeJS and more. I made several projects there, 
    including a team project as the final project, where with 7 more students 
    we developed an e-commerce.`,
    thirdParagraph: `When I finished the course I continued learning about other technologies, 
    and practicing more.`,
    fourthParagraph: `Currently, I am searching for my first IT job, expecting to learn more, and 
    work in real-world projects!`
  },
  es: {
    title: 'Un poco sobre mi.',
    firstParagraph: 'Soy un estudiante de desarrollo web de 22 años, de Argentina.',
    secondParagraph: `Empecé a aprender hace aproximadamente un año, Javascript, HTML
    y CSS, luego de aprender por mi cuenta, empecé un curso tipo bootcamp por 4 meses,
    donde aprendí sobre ReactJS, SQL, NodeJS, y más, e hice muchos proyectos, incluyendo
    un trabajo en grupo como proyecto final,
    donde con 7 estudiantes desarrollamos un e-commerce.`,
    thirdParagraph: `Cuando finalicé el curso continué aprendiendo sobre otras tecnologías,
    y practicando más.`,
    fourthParagraph: `Actualmente estoy buscando mi primer trabajo como desarrollador, esperando
    aprender más, y participar de proyectos reales.`
  }
};

const contactContent = {
  en: {
    title: 'Send me a message!',
    name: 'Your name',
    email: 'Your email',
    message: 'Your message',
    send: 'Send',
    sendLoad: 'Sending',
    sendFinish: 'Message sent!',
    finalMessage: 'Thanks, I\'ll be reading it soon!',
    nameEmptyError: 'I need to know who you are.',
    nameTooShortError: 'I don\'t think your name is that...',
    emailEmptyError: 'Leave me an email where to find you.',
    emailInvalidError: 'This email does not appear to be real.',
    messageEmptyError: 'At least write me a greeting.',
    messageTooShortError: 'Tell me something more.',
  },
  es: {
    title: 'Envíame un mensaje!',
    name: 'Tu nombre',
    email: 'Tu email',
    message: 'Tu mensaje',
    send: 'Enviar',
    sendLoad: 'Enviando',
    sendFinish: 'Mensaje enviado!',
    finalMessage: 'Gracias, lo estaré leyendo pronto!',
    nameEmptyError: 'Necesito saber quién eres.',
    nameTooShortError: 'No creo que te llames así...',
    emailEmptyError: 'Déjame un email donde responder.',
    emailInvalidError: 'Este email no parece ser real.',
    messageEmptyError: 'Al menos escríbeme un saludo.',
    messageTooShortError: 'Dime algo más.',
  }
};

const custom404Content = {
  en: {
    heading: 'Are you lost?',
    subheading: 'This page doesn\'t exist (●﹏●)',
    link: 'Go to homepage',
  },
  es: {
    heading: '¿Cómo has llegado aquí?',
    subheading: 'Esta página no existe (●﹏●)',
    link: 'Volver al inicio',
  },
};

const custom500Content = {
  en: {
    heading: 'Uhm... we have a problem.',
    subheading: 'An unexpected error has occurred (’へ ’)',
    link: 'Go to homepage',
  },
  es: {
    heading: 'Uhm... tenemos un problema.',
    subheading: 'Ocurrió un error inesperado (’へ ’)',
    link: 'Volver al inicio',
  }
};

const footerContent = {
  en: {
    firstMessage: 'Made with NextJS and CSS',
    secondMessage: 'Thanks for your visit!',
  },
  es: {
    firstMessage: 'Hecho con NextJS y CSS',
    secondMessage: 'Gracias por tu visita!',
  }
};

const headerContent = {
  en: {
    greeting: 'Hey! I\'m',
    scrollText: 'Scroll down to see more!',
    firstParagraph: `I enjoy creating solutions, and learning 
    about new technologies and best practices.`,
    secondParagraph: `I'm looking for new experiences 
    that allow me to grow professionally, feel free to send me a message!`
  },
  es: {
    greeting: 'Hola! soy',
    scrollText: 'Baja para ver más!',
    firstParagraph: `Disfruto crear soluciones, y aprender constantemente
    sobre nuevas tecnologías y buenas prácticas.`,
    secondParagraph: `Busco nuevas experiencias que me permitan crecer 
    profesionalmente, sientete libre de contactarme si quieres!`
  }
};

const navContent = {
  en: {
    home: 'Home',
    bio: 'About me',
    stack: 'Stack',
    projects: 'Projects',
    contact: 'Contact',
    resume: 'My resume',
    open: 'Open menu',
    close: 'Close menu',
  },
  es: {
    home: 'Inicio',
    bio: 'Sobre mi',
    stack: 'Tecnologías',
    projects: 'Proyectos',
    contact: 'Contacto',
    resume: 'Mi CV',
    open: 'Abrir menu',
    close: 'Cerrar menu',
  }
};

const projectContent = {
  en: {
    visit: 'Visit',
  },
  es: {
    visit: 'Visita'
  }
};

const sectionNames = {
  en: {
    home: 'Home',
    bio: 'Bio',
    stack: 'Stack',
    projects: 'Projects',
    contact: 'Contact',
  },
  es: {
    home: 'Inicio',
    bio: 'Bio',
    stack: 'Tecnologías',
    projects: 'Proyectos',
    contact: 'Contacto',
  },
};

const seoContent = {
  en: {
    description: 'Lucas Panaro\'s personal portfolio, with contact info, and projects',
    title: 'Lucas Panaro\'s portfolio',
    keywords: 'dev, Lucas, Panaro, portfolio, contact, developer, web, projects, information',
  },
  es: {
    description: 'Portfolio personal de Lucas Panaro, puedes ver sus proyectos y enviarle un mensaje!',
    title: 'Portfolio de Lucas Panaro',
    keywords: 'dev, Lucas, Panaro, portfolio, contacto, desarrollador, developer, web, projects, proyectos, information, información',
  },
};

const techIconContent = {
  en: {
    goto: (label) => `Visit ${label}'s official website`,
  },
  es: {
    goto: (label) => `Ir al sitio oficial de ${label}`,
  },
};

export {
  bioContent,
  contactContent,
  custom404Content,
  custom500Content,
  footerContent,
  headerContent,
  navContent,
  projectContent,
  sectionNames,
  seoContent,
  techIconContent,
};
