import { assetPath } from '../utils/assetPath';

const heroImages = [assetPath('media/playfix-hero-1.jpg'), assetPath('media/playfix-hero-2.jpg')];

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
          <h1 className="mt-6 font-heading text-4xl leading-tight text-ink sm:text-6xl">
            Custom Tailoring That Fits Your Story.
          </h1>
          <p className="mt-5 max-w-xl text-sm leading-relaxed text-graphite/80 sm:text-base">
            Playfix combines heritage craftsmanship with modern design sensibility for bridal wear, custom blouses,
            and precise alterations.
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

        <div className="grid grid-cols-2 gap-4 md:justify-self-end">
          {heroImages.map((src, index) => (
            <div
              key={src}
              className="overflow-hidden rounded-[1.5rem] shadow-soft"
              style={{ animationDelay: `${index * 120}ms` }}
            >
              <img
                src={src}
                alt="Playfix tailoring showcase"
                className="h-72 w-full animate-float object-cover"
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
