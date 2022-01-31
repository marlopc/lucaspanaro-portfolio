import { useRef, useState } from "react";
import useForm from "../hooks/useForm";
import useObserver from "../hooks/useObserver";
import styles from "../styles/Contact.module.css";

const contactContent = {
  "en-US": {
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
    message_tooshort_error: "Tell me something more."
  },
  "es-ES": {
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
    message_tooshort_error: "Dime algo más."
  }
};

const initialForm = {
  name: "",
  email: "",
  message: ""
};

const initialFocused = {
  name: false,
  email: false,
  message: false
};

const Contact = ({ context, email_env }) => {
  const { locale } = context;
  const { 
    title, 
    name, 
    email, 
    message, 
    send, 
    send_load, 
    send_finish,
    final_message, 
    ...error_messages 
  } = contactContent[locale];

  const containerRef = useRef();
  const [animation] = useObserver(containerRef, "-150px");

  const [isFocused, setIsFocused] = useState(initialFocused);
  
  const { validateForm, validateField } = useForm();
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [loaderSend, setLoaderSend] = useState(false);
  const [loaderText, setLoaderText] = useState(send);
  const [showFinalMessage, setShowFinalMessage] = useState(false);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    })
  };

  const handleSend = async () => {
    const sendFormErrors = validateForm(form);

    if(Object.keys(sendFormErrors).length > 0) {
      setErrors(sendFormErrors);
      return;
    }

    setLoaderSend(true);
    setLoaderText(send_load);
    setTimeout(() => {
      setLoaderText(send_finish);
    }, 1500);
    setTimeout(() => {
      setShowFinalMessage(true);
    }, 2500);
    setTimeout(() => {
      setErrors({});
      setForm(initialForm);
      setIsFocused(initialFocused);
      setLoaderText(send);
      setLoaderSend(false);
      setShowFinalMessage(false);
    }, 8000);

    await fetch(`https://formsubmit.co/${email_env}`, {
      method: "POST",
      body: JSON.stringify(form),
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
    });
  };

  const handleFocus = (e) => {
    delete errors[e.target.name];
    setErrors(errors);

    setIsFocused({
      ...isFocused,
      [e.target.name]: true
    });
  };

  const handleBlur = (e) => {
    setErrors(validateField(e.target, errors));

    setIsFocused({
      ...isFocused,
      [e.target.name]: false
    });
  };

  return (
    <div className="sectionContainer">
      <div className={styles.container}>
        <div className={`
          ${styles.contact_background} ${animation ? "fade_in_up" : null} 
          ${loaderSend ? styles.rounded : undefined}
        `} ref={containerRef}>
          <form className={`${styles.contact_form} ${showFinalMessage ? styles.move_up : null}`} onSubmit={(e) => e.preventDefault()}>
            <h2>{title}</h2>
            <div className={styles.field_container}>
              <label 
                htmlFor="name"
                id={(isFocused.name || form.name) ? styles.lift_label : undefined}
              >
                {name}
              </label>
              <input 
                id="name" 
                type="text" 
                name="name" 
                value={form.name} 
                onChange={handleChange}
                onFocus={handleFocus}
                onBlur={handleBlur}
                className={errors["name"] ? styles.error : undefined}
              />
              <small>{errors["name"] ? error_messages[errors["name"]] : undefined}</small>
            </div>
            <div className={styles.field_container}>
              <label 
                htmlFor="email" 
                id={(isFocused.email || form.email) ? styles.lift_label : undefined}
              >
                {email}
              </label>
              <input 
                id="email" 
                type="email" 
                name="email" 
                value={form.email} 
                onChange={handleChange}
                onFocus={handleFocus}
                onBlur={handleBlur}
                className={errors["email"] ? styles.error : undefined}
              />
              <small>{errors["email"] ? error_messages[errors["email"]] : ""}</small>
            </div>
            <div className={styles.field_container}>
              <label 
                htmlFor="message"
                id={(isFocused.message || form.message) ? styles.lift_label : undefined}
              >
                {message}
              </label>
              <textarea 
                id="message"
                name="message" 
                value={form.message} 
                onChange={handleChange}
                onFocus={handleFocus}
                onBlur={handleBlur}
                className={errors["message"] ? styles.error : undefined}
              />
              <small>{errors["message"] ? error_messages[errors["message"]] : ""}</small>
            </div>
            <div>
              <button onClick={handleSend} disabled={loaderSend} className={loaderSend ? styles.rounded : undefined}>
                <div className={loaderSend ? styles.send_load : undefined}></div>
                <span>{loaderText}</span>
              </button>
            </div>
          </form>
          {
            showFinalMessage && (
              <h2>{final_message}</h2>
            )
          }
        </div>
      </div>
    </div>
  )
}

export default Contact
