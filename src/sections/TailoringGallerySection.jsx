import { useEffect, useState } from 'react';
import { assetPath } from '../utils/assetPath';

const imageSlides = [
  { src: assetPath('media/playfix-hero-1.jpg'), alt: 'Playfix tailoring style one' },
  { src: assetPath('media/playfix-hero-2.jpg'), alt: 'Playfix tailoring style two' },
  { src: assetPath('media/playfix-img-1.jpg'), alt: 'Playfix tailoring studio image one' },
  { src: assetPath('media/playfix-img-2.jpg'), alt: 'Playfix tailoring studio image two' }
];

const TailoringGallerySection = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const intervalId = window.setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % imageSlides.length);
    }, 3200);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <section id="gallery" className="px-5 py-16 sm:px-8 sm:py-20">
      <div className="mx-auto max-w-6xl">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-copper">Our Studio Moments</p>
          <h2 className="mt-3 font-heading text-3xl text-ink sm:text-4xl">Tailoring In Motion</h2>
        </div>

        <div className="glass-panel mt-10 overflow-hidden rounded-3xl p-3 sm:p-4">
          <div
            className="flex transition-transform duration-700 ease-out"
            style={{ transform: `translateX(-${activeIndex * 100}%)` }}
          >
            {imageSlides.map((item) => (
              <article key={item.src} className="relative min-w-full overflow-hidden rounded-2xl">
                <img
                  src={item.src}
                  alt={item.alt}
                  loading="lazy"
                  className="h-80 w-full object-cover sm:h-[440px]"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink/35 via-transparent to-transparent" />
              </article>
            ))}
          </div>
        </div>

        <div className="mt-5 flex justify-center gap-2">
          {imageSlides.map((item, index) => (
            <button
              key={item.src}
              type="button"
              onClick={() => setActiveIndex(index)}
              aria-label={`Go to slide ${index + 1}`}
              className={`h-2.5 rounded-full transition-all ${
                activeIndex === index ? 'w-8 bg-ink' : 'w-2.5 bg-graphite/40'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TailoringGallerySection;
