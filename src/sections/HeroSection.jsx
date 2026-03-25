import { assetPath } from '../utils/assetPath';

const heroImages = [
  {
    src: assetPath('media/tailor-measuring-client.jpg'),
    alt: 'Tailor measuring a client for a bespoke suit',
    objectPosition: 'center'
  },
  {
    src: assetPath('assets/yasar_img_two.jpeg'),
    alt: 'Tailor model portrait',
    objectPosition: '15% center'
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

        <div className="grid grid-cols-2 gap-4 md:justify-self-end">
          {heroImages.map((image, index) => (
            <div
              key={image.src}
              className="overflow-hidden rounded-[1.5rem] shadow-soft"
              style={{ animationDelay: `${index * 120}ms` }}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="h-72 w-full animate-float object-cover"
                style={{ objectPosition: image.objectPosition }}
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
