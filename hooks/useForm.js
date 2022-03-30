const validate = (errors, fieldOrForm, { fullValidation = false } = {}) => {
  const newErrors = { ...errors };

  if (fullValidation || fieldOrForm.name === "name") {
    const value = fullValidation ? fieldOrForm.name : fieldOrForm.value;
    if (value === "") {
      newErrors.name = "nameEmptyError";
    } else if (value.length <= 2) {
      newErrors.name = "nameTooShortError";
    } else {
      delete newErrors.name;
    }
  }

  if (fullValidation || fieldOrForm.name === "email") {
    const value = fullValidation ? fieldOrForm.email : fieldOrForm.value;
    if (value === "") {
      newErrors.email = "emailEmptyError";
    } else if (!value.includes("@") || !value.includes(".")) {
      newErrors.email = "emailInvalidError";
    } else {
      delete newErrors.email;
    }
  }

  if (fullValidation || fieldOrForm.name === "message") {
    const value = fullValidation ? fieldOrForm.message : fieldOrForm.value;
    if (value === "") {
      newErrors.message = "messageEmptyError";
    } else if (value.length < 5) {
      newErrors.message = "messageTooShortError";
    } else {
      delete newErrors.message;
    }
  }

  return newErrors;
};

const useForm = () => {
  const validateField = (field, errors) => validate(errors, field);

  const validateForm = (form, errors) =>
    validate(errors, form, { fullValidation: true });

  return {
    validateField,
    validateForm,
  };
};

export default useForm;
