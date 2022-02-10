const validate = (errors, fieldOrForm, { fullValidation = false } = {}) => {
  const newErrors = {...errors};

  if(fullValidation || fieldOrForm.name === 'name') {
    const value = fullValidation ? fieldOrForm.name : fieldOrForm.value;
    if (value === '') {
      newErrors.name = 'name_empty_error';
    } else if (value.length <= 2) {
      newErrors.name = 'name_tooshort_error';
    } else {
      delete newErrors.name;
    }
  }

  if (fullValidation || fieldOrForm.name === 'email') {
    const value = fullValidation ? fieldOrForm.email : fieldOrForm.value;
    if (value === '') {
      newErrors.email = 'email_empty_error';
    } else if (!value.includes('@') || !value.includes('.')) {
      newErrors.email = 'email_invalid_error';
    } else {
      delete newErrors.email;
    }
  }
  
  if (fullValidation || fieldOrForm.name === 'message') {
    const value = fullValidation ? fieldOrForm.message : fieldOrForm.value;
    if (value === '') {
      newErrors.message = 'message_empty_error';
    } else if (value.length < 5) {
      newErrors.message = 'message_tooshort_error';
    } else {
      delete newErrors.message;
    }
  }

  return newErrors;
};

const useForm = () => {

  const validateField = (field, errors) => validate(errors, field);

  const validateForm = (form, errors) => validate(errors, form, { fullValidation: true });

  return {
    validateField,
    validateForm,
  };
};

export default useForm;
