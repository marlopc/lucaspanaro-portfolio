import { useRouter } from "next/router";
import React, { useRef } from "react";
import useContactAnimation from "~/hooks/useContactAnimation";
import useContactForm from "~/hooks/useContactForm";
import useObserver from "~/hooks/useObserver";
import { contactContent } from "~/lib/translations";
import styles from "~/styles/Contact.module.css";

const ErrorAlert = ({ error, message }) => {
  return <div>{error && <small role="alert">{message}</small>}</div>;
};

const Contact = () => {
  const { locale } = useRouter();

  const { title, name, email, message, finalMessage, ...errorMessages } =
    contactContent[locale];

  const containerRef = useRef();

  const [animation] = useObserver(containerRef, 150, {
    disableIf: "(max-height: 300px)",
  });

  const {
    handleBlur,
    handleChange,
    handleFocus,
    handleSend,
    isSending,
    isFocused,
    resetAll,
    form,
    errors,
  } = useContactForm();

  const animations = useContactAnimation(isSending, resetAll);

  return (
    <section>
      <div className={styles.container}>
        <div
          className={`${styles.contact_background} ${
            animation ? "fade_in_up" : ""
          } ${animations.loaderSend ? styles.rounded : ""}`}
          ref={containerRef}
        >
          <form
            className={`${styles.contact_form} ${
              animations.showFinalMessage ? styles.move_up : ""
            }`}
            id="contact-form"
            onSubmit={(e) => e.preventDefault()}
            noValidate
          >
            <h2>{title}</h2>
            <div className={styles.field_container}>
              <label
                htmlFor="name"
                id={isFocused.name || form.name ? styles.lift_label : ""}
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
                className={errors.name ? styles.error : ""}
                aria-invalid={!!errors.email}
                required
              />
              <ErrorAlert
                error={errors.name}
                message={errorMessages[errors.name]}
              />
            </div>
            <div className={styles.field_container}>
              <label
                htmlFor="email"
                id={isFocused.email || form.email ? styles.lift_label : ""}
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
                className={errors.email ? styles.error : ""}
                aria-invalid={!!errors.email}
                required
              />
              <ErrorAlert
                error={errors.email}
                message={errorMessages[errors.email]}
              />
            </div>
            <div className={styles.field_container}>
              <label
                htmlFor="message"
                id={isFocused.message || form.message ? styles.lift_label : ""}
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
                className={errors.message ? styles.error : ""}
                aria-invalid={!!errors.message}
                required
              />
              <ErrorAlert
                error={errors.message}
                message={errorMessages[errors.message]}
              />
            </div>
            <div>
              <button
                onClick={handleSend}
                disabled={animations.loaderSend}
                className={animations.loaderSend ? styles.rounded : ""}
              >
                <div
                  className={animations.loaderSend ? styles.send_load : ""}
                ></div>
                <span>{animations.loaderText}</span>
              </button>
            </div>
          </form>
          {animations.showFinalMessage && <h2>{finalMessage}</h2>}
        </div>
      </div>
    </section>
  );
};

export default Contact;
