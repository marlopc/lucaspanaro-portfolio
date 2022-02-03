import { useRef, useState } from "react";
import useForm from "../hooks/useForm";
import useLocale from "../hooks/useLocale";
import useObserver from "../hooks/useObserver";
import styles from "../styles/Contact.module.css";
import { contactContent } from "../lib/translations";

const initialForm = {
  name: "",
  email: "",
  message: "",
};

const initialFocused = {
  name: false,
  email: false,
  message: false,
};

const Contact = ({ emailAddress }) => {
  const { locale } = useLocale();
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

    await fetch(`https://formsubmit.co/${emailAddress}`, {
      method: "POST",
      body: JSON.stringify(form),
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
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
        <div
          className={`${styles.contact_background} ${animation ? "fade_in_up" : ""} ${loaderSend ? styles.rounded : ""}`}
          ref={containerRef}
        >
          <form
            className={`${styles.contact_form} ${showFinalMessage ? styles.move_up : ""}`}
            onSubmit={(e) => e.preventDefault()}
          >
            <h2>{title}</h2>
            <div className={styles.field_container}>
              <label 
                htmlFor="name"
                id={(isFocused.name || form.name) ? styles.lift_label : ""}
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
                className={errors["name"] ? styles.error : ""}
              />
              <small>{errors["name"] ? error_messages[errors["name"]] : ""}</small>
            </div>
            <div className={styles.field_container}>
              <label 
                htmlFor="email" 
                id={(isFocused.email || form.email) ? styles.lift_label : ""}
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
                className={errors["email"] ? styles.error : ""}
              />
              <small>{errors["email"] ? error_messages[errors["email"]] : ""}</small>
            </div>
            <div className={styles.field_container}>
              <label 
                htmlFor="message"
                id={(isFocused.message || form.message) ? styles.lift_label : ""}
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
                className={errors["message"] ? styles.error : ""}
              />
              <small>{errors["message"] ? error_messages[errors["message"]] : ""}</small>
            </div>
            <div>
              <button onClick={handleSend} disabled={loaderSend} className={loaderSend ? styles.rounded : ""}>
                <div className={loaderSend ? styles.send_load : ""}></div>
                <span>{loaderText}</span>
              </button>
            </div>
          </form>
          {showFinalMessage && <h2>{final_message}</h2>}
        </div>
      </div>
    </div>
  )
}

export default Contact
