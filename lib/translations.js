const bioContent = {
  "en": {
    title: "A little bit about me.",
    about_1: `I'm 22 years old web developer student from Argentina.`,
    about_2: `I started to learn about 1 year ago, with Javascript, HTML
    and CSS, after learning for myself, I began a bootcamp course for 4 months, 
    where I learned about ReactJS, SQL, NodeJS and more, and made several 
    projects there, including a team project as the final project, 
    where with 7 more students we developed an e-commerce.`,
    about_3: `When I finished the course I continued learning about other technologies, 
    and practicing more.`,
    about_4: `Currently I'm searching for my first IT job, expecting to learn more, and 
    work in real-world projects!`  
  },
  "es": {
    title: `Un poco sobre mi.`,
    about_1: `Soy un estudiante de desarrollo web de 22 años, de Argentina.`,
    about_2: `Empecé a aprender hace aproximadamente un año, Javascript, HTML
    y CSS, luego de aprender por mi cuenta, empecé un curso tipo bootcamp por 4 meses,
    donde aprendí sobre ReactJS, SQL, NodeJS, y más, e hice muchos proyectos, incluyendo
    un trabajo en grupo como proyecto final,
    donde con 7 estudiantes desarrollamos un e-commerce.`,
    about_3: `Cuando finalicé el curso continué aprendiendo sobre otras tecnologías,
    y practicando más.`,
    about_4: `Actualmente estoy buscando mi primer trabajo como desarrollador, esperando
    aprender más, y participar de proyectos reales.`
  }
};

const contactContent = {
  "en": {
    title: "Send me a message!",
    name: "Your name",
    email: "Your email",
    message: "Your message",
    send: "Send",
    send_load: "Sending",
    send_finish: "Message sent!",
    final_message: "Thanks, I'll be reading it soon!",
    name_empty_error: "I need to know who you are.",
    name_tooshort_error: "I don't think your name is that...",
    email_empty_error: "Leave me an email where to find you.",
    email_invalid_error: "This email does not appear to be real.",
    message_empty_error: "At least write me a greeting.",
    message_tooshort_error: "Tell me something more.",
  },
  "es": {
    title: "Envíame un mensaje!",
    name: "Tu nombre",
    email: "Tu email",
    message: "Tu mensaje",
    send: "Enviar",
    send_load: "Enviando",
    send_finish: "Mensaje enviado!",
    final_message: "Gracias, lo estaré leyendo pronto!",
    name_empty_error: "Necesito saber quién eres.",
    name_tooshort_error: "No creo que te llames así...",
    email_empty_error: "Déjame un email donde responder.",
    email_invalid_error: "Este email no parece ser real.",
    message_empty_error: "Al menos escríbeme un saludo.",
    message_tooshort_error: "Dime algo más.",
  }
};

const custom404Content = {
  "en": {
    heading: "Are you lost?",
    subheading: "This page doesn\'t exist (●﹏●)",
    link: "Go to homepage",
  },
  "es": {
    heading: "¿Cómo has llegado aquí?",
    subheading: "Esta página no existe (●﹏●)",
    link: "Volver al inicio",
  },
};

const custom500Content = {
  "en": {
    heading: "Uhm... we have a problem.",
    subheading: "An unexpected error has occurred (’へ ’)",
    link: "Go to homepage",
  },
  "es": {
    heading: "Uhm... tenemos un problema.",
    subheading: "Ocurrió un error inesperado (’へ ’)",
    link: "Volver al inicio",
  }
};

const footerContent = {
  "en": {
    message_1: "Made with NextJS and CSS",
    message_2: "Thanks for your visit!",
  },
  "es": {
    message_1: "Hecho con NextJS y CSS",
    message_2: "Gracias por tu visita!",
  }
};

const headerContent = {
  "en": {
    greeting: "Hey! I'm",
    scroll_text: "Scroll down to see more!",
    paragraph_1: `I enjoy creating solutions, and learning 
    about new technologies and best practices.`,
    paragraph_2: `I'm looking for new experiences 
    that allow me to grow professionally, feel free to send me a message!`
  },
  "es": {
    greeting: "Hola! soy",
    scroll_text: "Baja para ver más!",
    paragraph_1: `Disfruto crear soluciones, y aprender constantemente
    sobre nuevas tecnologías y buenas prácticas.`,
    paragraph_2: `Busco nuevas experiencias que me permitan crecer 
    profesionalmente, sientete libre de contactarme si quieres!`
  }
};

const navContent = {
  "en": {
    home: "Home",
    bio: "About me",
    stack: "Stack",
    projects: "Projects",
    contact: "Contact",
    resume: "My resume",
    open: "Open menu",
    close: "Close menu",
  },
  "es": {
    home: "Inicio",
    bio: "Sobre mi",
    stack: "Tecnologías",
    projects: "Proyectos",
    contact: "Contacto",
    resume: "Mi CV",
    open: "Abrir menu",
    close: "Cerrar menu",
  }
};

const projectContent = {
  "en": {
    visit: "Visit",
  },
  "es": {
    visit: "Visita"
  }
};

const sectionNames = {
  "en": {
    home: "Home",
    bio: "Bio",
    stack: "Stack",
    projects: "Projects",
    contact: "Contact",
  },
  "es": {
    home: "Inicio",
    bio: "Bio",
    stack: "Tecnologías",
    projects: "Proyectos",
    contact: "Contacto",
  },
};

const seoContent = {
  "en": {
    description: "Lucas Panaro\'s personal portfolio, with contact info, and projects",
    title: "Lucas Panaro\'s portfolio",
    keywords: "dev, Lucas, Panaro, portfolio, contact, developer, web, projects, information",
  },
  "es": {
    description: "Portfolio personal de Lucas Panaro, puedes ver sus proyectos y enviarle un mensaje!",
    title: "Portfolio de Lucas Panaro",
    keywords: "dev, Lucas, Panaro, portfolio, contacto, desarrollador, developer, web, projects, proyectos, information, información",
  },
};

const techIconContent = {
  "en": {
    goto: (label) => `Visit ${label}'s official website`,
  },
  "es": {
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
