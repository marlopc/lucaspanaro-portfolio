import { useCallback, useState } from 'react';
import useForm from './useForm';
import sendMail from '../lib/sendMail';

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

const useContactForm = (emailAddress) => {
  const [isSending, setIsSending] = useState(false);
  const [isFocused, setIsFocused] = useState(initialFocused);
  
  const { validateForm, validateField } = useForm();
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});

  const resetAll = useCallback(() => {
    setErrors({});
    setForm(initialForm);
    setIsFocused(initialFocused);
    setIsSending(false);
  }, []);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSend = async () => {
    const sendFormErrors = validateForm(form);

    if(Object.keys(sendFormErrors).length > 0) {
      setErrors({});
      setErrors(sendFormErrors);
      return;
    }

    setIsSending(true);

    await sendMail(form, emailAddress);
  };

  const handleFocus = (e) => {
    delete errors[e.target.name];
    setErrors(errors);

    setIsFocused({
      ...isFocused,
      [e.target.name]: true,
    });
  };

  const handleBlur = (e) => {
    setErrors(validateField(e.target, errors));

    setIsFocused({
      ...isFocused,
      [e.target.name]: false,
    });
  };
  
  return {
    handleBlur,
    handleChange,
    handleFocus,
    handleSend,
    isSending,
    isFocused,
    resetAll,
    form,
    errors,
  };
}

export default useContactForm