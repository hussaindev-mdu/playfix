import SectionTitle from '../components/SectionTitle';
import { faqItems } from '../data/siteContent';

const FaqSection = () => {
  return (
    <section id="faq" className="px-5 py-16 sm:px-8 sm:py-20">
      <div className="mx-auto max-w-6xl">
        <SectionTitle
          eyebrow="Questions"
          title="Frequently Asked Questions"
          description="Quick answers to common tailoring and consultation requests."
        />

        <div className="mt-10 grid gap-4 md:grid-cols-2">
          {faqItems.map((faq) => (
            <article key={faq.question} className="glass-panel rounded-2xl p-6">
              <h3 className="font-semibold text-ink">{faq.question}</h3>
              <p className="mt-2 text-sm leading-relaxed text-graphite/80">{faq.answer}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
