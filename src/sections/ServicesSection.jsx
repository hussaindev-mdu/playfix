import SectionTitle from '../components/SectionTitle';
import { services } from '../data/siteContent';

const ServicesSection = () => {
  return (
    <section id="services" className="px-5 py-16 sm:px-8 sm:py-20">
      <div className="mx-auto max-w-6xl">
        <SectionTitle
          eyebrow="What We Stitch"
          title="Tailoring Services"
          description="From bridal outfits to everyday alteration support, every stitch is made to improve comfort, movement, and confidence."
        />

        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {services.map((service) => (
            <article
              key={service.title}
              className="glass-panel rounded-3xl p-6 transition hover:-translate-y-1"
            >
              <h3 className="font-heading text-2xl text-ink">{service.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-graphite/85">{service.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
