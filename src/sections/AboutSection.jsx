import SectionTitle from '../components/SectionTitle';
import { highlights } from '../data/siteContent';

const AboutSection = () => {
  return (
    <section id="why-playfix" className="px-5 py-16 sm:px-8 sm:py-20">
      <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-[1.2fr_1fr] md:items-center">
        <SectionTitle
          eyebrow="About Playfix"
          title="Built On Craftsmanship, Guided By Fit"
          description="Playfix is a tailoring destination known for trusted workmanship, personalized fitting, and durable finishing that keeps garments elegant and comfortable."
        />

        <div className="rounded-3xl bg-ink p-7 text-cream shadow-soft">
          <ul className="space-y-4 text-sm leading-relaxed sm:text-base">
            {highlights.map((item) => (
              <li key={item} className="border-b border-white/15 pb-3 last:border-b-0 last:pb-0">
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
