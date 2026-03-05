const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const phoneRegex = /^[0-9]{10}$/;

export const validateLeadForm = (values) => {
  const errors = {};

  if (!values.name.trim()) {
    errors.name = 'Name is required.';
  }

  if (!emailRegex.test(values.email)) {
    errors.email = 'Enter a valid email address.';
  }

  if (!phoneRegex.test(values.phone)) {
    errors.phone = 'Enter a valid 10-digit phone number.';
  }

  if (!values.service) {
    errors.service = 'Please choose a service.';
  }

  if (!values.message.trim()) {
    errors.message = 'Please share your tailoring requirement.';
  }

  return errors;
};
