import { Link } from 'react-router-dom';
import { assetPath } from '../utils/assetPath';

const milestones = [
  { value: '50+', label: 'Years of Experience' },
  { value: '30k+', label: 'Happy Grooms' },
  { value: '100%', label: 'Fit Focused Craftsmanship' }
];

const AboutPage = () => {
  return (
    <>
      <section className="px-5 pb-10 pt-16 sm:px-8 sm:pt-20">
        <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-2 md:items-center">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-copper">Our Journey</p>
            <h1 className="mt-3 font-heading text-4xl text-ink sm:text-5xl">Crafted with Purpose</h1>
            <p className="mt-4 text-sm leading-relaxed text-graphite/80 sm:text-base">
              Playfix is founded on one commitment: every garment should feel custom-made, be worn with confidence,
              and deliver a flawless fit.
            </p>
          </div>
          <div className="overflow-hidden rounded-[1.8rem] shadow-soft">
            <img
              src={assetPath('media/bespoke-suit-dummy.jpg')}
              alt="Bespoke suit displayed on a tailoring mannequin"
              className="h-80 w-full object-cover"
            />
          </div>
        </div>
      </section>

      <section className="px-5 pb-14 sm:px-8 sm:pb-20">
        <div className="mx-auto grid max-w-6xl gap-4 sm:grid-cols-3">
          {milestones.map((item) => (
            <article key={item.value} className="glass-panel rounded-3xl p-6">
              <p className="font-heading text-4xl text-copper">{item.value}</p>
              <p className="mt-2 text-sm font-semibold text-graphite/85">{item.label}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="px-5 py-16 sm:px-8 sm:py-20">
        <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-[1.1fr_1fr] md:items-center">
          <div className="overflow-hidden rounded-[1.8rem] shadow-soft">
            <img
              src={assetPath('media/tailor-adjusting-suit.jpg')}
              alt="Tailor refining the fit of a formal jacket"
              className="h-80 w-full object-cover"
            />
          </div>
          <div>
            <h2 className="font-heading text-3xl text-ink sm:text-4xl">How Playfix Started</h2>
            <p className="mt-4 text-sm leading-relaxed text-graphite/80 sm:text-base">
              We started as a small local tailoring studio with one clear goal: every customer should leave looking
              and feeling their very best.
            </p>
            <p className="mt-3 text-sm leading-relaxed text-graphite/80 sm:text-base">
              Over time, we expanded through referrals and returning clients who valued our consistency, precision,
              and finishing standards.
            </p>
          </div>
        </div>
      </section>

      <section className="px-5 py-16 sm:px-8 sm:py-20">
        <div className="mx-auto max-w-6xl rounded-[2rem] bg-ink p-8 text-cream shadow-soft sm:p-10">
          <h2 className="font-heading text-3xl sm:text-4xl">Where Craft and Care Converge</h2>
          <p className="mt-4 text-sm leading-relaxed text-cream/90 sm:text-base">
            “Fix” is more than a part of our name, it represents our method. We refine fabric choices, style details,
            and construction techniques to address the most common issue in clothing: imperfect fit.
          </p>
          <p className="mt-3 text-sm leading-relaxed text-cream/90 sm:text-base">
            As we evolve, Playfix remains committed to its tailoring heritage while embracing contemporary design and
            modern materials.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              to="/contact"
              className="rounded-full bg-copper px-6 py-3 text-sm font-semibold text-cream transition hover:bg-[#9b5f2f]"
            >
              Book Your Consultation
            </Link>
            <Link
              to="/services"
              className="rounded-full border border-cream/30 px-6 py-3 text-sm font-semibold text-cream transition hover:border-copper"
            >
              View Services
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutPage;
