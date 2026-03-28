import { assetPath } from '../utils/assetPath';

const heroImages = [
  {
    src: assetPath('assets/mujibmama1.jpeg'),
    alt: 'Mujibmama series image one',
    mobileClassName: 'h-auto object-contain sm:object-center'
  },
  {
    src: assetPath('assets/mujibmama2.jpg'),
    alt: 'Mujibmama series image two',
    mobileClassName: 'h-auto object-contain sm:object-center'
  }
];

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden px-5 pb-16 pt-14 sm:px-8 sm:pt-20">
      <div className="pointer-events-none absolute -left-24 top-12 h-52 w-52 rounded-full bg-copper/20 blur-3xl" />
      <div className="pointer-events-none absolute -right-24 bottom-0 h-64 w-64 rounded-full bg-ink/15 blur-3xl" />

      <div className="mx-auto grid max-w-6xl items-center gap-10 md:grid-cols-2">
        <div className="animate-rise">
          <p className="inline-flex rounded-full border border-ink/35 px-4 py-1 text-xs font-semibold uppercase tracking-[0.25em] text-ink">
            Since 1976
          </p>
          <h1 className="mt-6 font-heading text-3xl leading-tight text-ink sm:text-6xl">
            Premium Fabric Selection, Bespoke Tailoring, and Precision Alterations.
          </h1>
          <p className="mt-5 max-w-xl text-sm leading-relaxed text-graphite/80 sm:text-base">
            Playfix is a dedicated tailoring and stitching house offering curated fabric sales, made-to-measure
            craftsmanship, and meticulous alteration services.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#book-consultation"
              className="rounded-full bg-ink px-6 py-3 text-sm font-semibold text-cream transition hover:bg-copper"
            >
              Book Consultation
            </a>
            <a
              href="#services"
              className="rounded-full border border-ink/20 px-6 py-3 text-sm font-semibold text-ink transition hover:border-copper hover:text-copper"
            >
              Explore Services
            </a>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:justify-self-end">
          {heroImages.map((image, index) => (
            <div
              key={image.src}
              className="mx-auto w-full max-w-sm overflow-hidden rounded-[1.5rem] bg-cream p-2 shadow-soft sm:max-w-none sm:p-0"
              style={{ animationDelay: `${index * 120}ms` }}
            >
              <img
                src={image.src}
                alt={image.alt}
                className={`${image.mobileClassName} mx-auto block w-full sm:h-72 sm:animate-float sm:object-cover`}
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
