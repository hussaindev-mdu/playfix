import emailjs from '@emailjs/browser';

const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

const validateEmailJsConfig = () => {
  if (!serviceId || !templateId || !publicKey) {
    const error = new Error('Missing EmailJS environment variables.');
    error.code = 'EMAILJS_CONFIG_MISSING';
    throw error;
  }
};

export const sendLeadEmail = async (lead) => {
  validateEmailJsConfig();

  return emailjs.send(
    serviceId,
    templateId,
    {
      to_email: lead.email,
      customer_name: lead.name,
      customer_email: lead.email,
      customer_phone: lead.phone,
      required_service: lead.service,
      requirement_message: lead.message,
      submitted_at: lead.submittedAt
    },
    {
      publicKey
    }
  );
};
