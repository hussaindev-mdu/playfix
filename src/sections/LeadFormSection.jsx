import { useMemo, useState } from 'react';
import SectionTitle from '../components/SectionTitle';
import { sendLeadEmail } from '../utils/emailjs';
import { validateLeadForm } from '../utils/validators';

const initialValues = {
  name: '',
  email: '',
  phone: '',
  service: '',
  message: ''
};

const services = ['Groom Stitching', 'Office Wear Shirts & Pants', 'Alteration', 'General Consultation'];

const LeadFormSection = () => {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('idle');
  const [statusMessage, setStatusMessage] = useState('');

  const isSubmitting = useMemo(() => status === 'submitting', [status]);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setValues((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: '' }));
    setStatusMessage('');
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const validationErrors = validateLeadForm(values);

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setStatus('submitting');
    setStatusMessage('');

    try {
      const stored = JSON.parse(localStorage.getItem('playfixLeads') || '[]');
      const payload = { ...values, submittedAt: new Date().toISOString() };

      localStorage.setItem('playfixLeads', JSON.stringify([payload, ...stored]));
      await sendLeadEmail(payload);
      setValues(initialValues);
      setStatus('success');
      setStatusMessage('Thanks. Your request has been submitted and emailed successfully.');
    } catch (error) {
      if (error?.code === 'EMAILJS_CONFIG_MISSING') {
        setStatus('error');
        setStatusMessage(
          'Email service is not configured yet. Lead is saved locally. Add EmailJS keys in .env and restart dev server.'
        );
        return;
      }

      setStatus('error');
      setStatusMessage(
        'Email sending failed. Lead is saved locally. Check EmailJS Service ID, Template ID, Public Key, and template variable names.'
      );
    }
  };

  return (
    <section id="book-consultation" className="px-5 py-16 sm:px-8 sm:py-20">
      <div className="glass-panel mx-auto grid max-w-6xl gap-8 rounded-[2rem] p-6 md:grid-cols-[1fr_1.2fr] md:p-10">
        <SectionTitle
          eyebrow="Get Started"
          title="Book Your Tailoring Consultation"
          description="Share your details and requirement. We will contact you to confirm design and fitting schedule."
        />

        <form className="grid gap-4" onSubmit={handleSubmit} noValidate>
          <label className="text-sm text-graphite/80" htmlFor="name">
            Full Name
          </label>
          <input
            id="name"
            name="name"
            value={values.name}
            onChange={handleChange}
            className="glass-input rounded-xl px-4 py-3 text-sm outline-none ring-copper/40 transition focus:ring"
            placeholder="Your full name"
          />
          {errors.name ? <p className="text-xs text-red-600">{errors.name}</p> : null}

          <label className="text-sm text-graphite/80" htmlFor="email">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            value={values.email}
            onChange={handleChange}
            className="glass-input rounded-xl px-4 py-3 text-sm outline-none ring-copper/40 transition focus:ring"
            placeholder="you@example.com"
          />
          {errors.email ? <p className="text-xs text-red-600">{errors.email}</p> : null}

          <label className="text-sm text-graphite/80" htmlFor="phone">
            Phone Number
          </label>
          <input
            id="phone"
            name="phone"
            value={values.phone}
            onChange={handleChange}
            className="glass-input rounded-xl px-4 py-3 text-sm outline-none ring-copper/40 transition focus:ring"
            placeholder="10-digit mobile number"
          />
          {errors.phone ? <p className="text-xs text-red-600">{errors.phone}</p> : null}

          <label className="text-sm text-graphite/80" htmlFor="service">
            Service Required
          </label>
          <select
            id="service"
            name="service"
            value={values.service}
            onChange={handleChange}
            className="glass-input rounded-xl px-4 py-3 text-sm outline-none ring-copper/40 transition focus:ring"
          >
            <option value="">Select a service</option>
            {services.map((service) => (
              <option key={service} value={service}>
                {service}
              </option>
            ))}
          </select>
          {errors.service ? <p className="text-xs text-red-600">{errors.service}</p> : null}

          <label className="text-sm text-graphite/80" htmlFor="message">
            Requirement Details
          </label>
          <textarea
            id="message"
            name="message"
            rows="4"
            value={values.message}
            onChange={handleChange}
            className="glass-input rounded-xl px-4 py-3 text-sm outline-none ring-copper/40 transition focus:ring"
            placeholder="Event date, dress type, and any custom requirement"
          />
          {errors.message ? <p className="text-xs text-red-600">{errors.message}</p> : null}

          <button
            type="submit"
            disabled={isSubmitting}
            className="mt-2 rounded-full bg-ink px-6 py-3 text-sm font-semibold text-cream transition hover:bg-copper disabled:cursor-not-allowed disabled:opacity-70"
          >
            {isSubmitting ? 'Submitting...' : 'Submit Request'}
          </button>

          {status === 'success' ? <p className="text-sm font-semibold text-emerald-700">{statusMessage}</p> : null}
          {status === 'error' ? <p className="text-sm font-semibold text-amber-700">{statusMessage}</p> : null}
        </form>
      </div>
    </section>
  );
};

export default LeadFormSection;
