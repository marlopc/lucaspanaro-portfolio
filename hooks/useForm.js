const useForm = () => {
  const validateField = (field, errors) => {
    const newErrors = {...errors};

    if(field.name === 'name') {
      if(field.value === '') {
        newErrors.name = 'name_empty_error';
      } else if(field.value.length <= 2) {
        newErrors.name = 'name_tooshort_error';
      } else {
        delete newErrors.name;
      }
    } else if(field.name === 'email') {
      if(field.value === '') {
        newErrors.email = 'email_empty_error';
      } else if(!field.value.includes('@') || !field.value.includes('.')) {
        newErrors.email = 'email_invalid_error';
      } else {
        delete newErrors.email;
      }
    } else if(field.name === 'message') {
      if(field.value === '') {
        newErrors.message = 'message_empty_error';
      } else if(field.value.length < 5) {
        newErrors.message = 'message_tooshort_error';
      } else {
        delete newErrors.message;
      }
    }

    return newErrors;
  };

  const validateForm = (form, errors) => {
    const newErrors = {...errors};

      if(form.name === '') {
        newErrors.name = 'name_empty_error';
      } else if(form.name.length <= 2) {
        newErrors.name = 'name_tooshort_error';
      } else {
        delete newErrors.name;
      }

      if(form.email === '') {
        newErrors.email = 'email_empty_error';
      } else if(!form.email.includes('@') || !form.email.includes('.')) {
        newErrors.email = 'email_invalid_error';
      } else {
        delete newErrors.email;
      }

      if(form.message === '') {
        newErrors.message = 'message_empty_error';
      } else if(form.message.length < 5) {
        newErrors.message = 'message_tooshort_error';
      } else {
        delete newErrors.message;
      }

    return newErrors;
  };

  return {
    validateField,
    validateForm
  };
}

export default useForm
