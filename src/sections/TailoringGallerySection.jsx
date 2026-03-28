import { useEffect, useState } from 'react';
import { assetPath } from '../utils/assetPath';

const imageSlides = [
  {
    src: assetPath('assets/mujibmama1.jpeg'),
    alt: 'Mujibmama series image one'
  },
  {
    src: assetPath('assets/mujibmama2.jpg'),
    alt: 'Mujibmama series image two'
  },
  {
    src: assetPath('assets/mujibmama3.jpeg'),
    alt: 'Mujibmama series image three'
  },
  {
    src: assetPath('assets/mujibmama4.jpeg'),
    alt: 'Mujibmama series image four'
  }
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
      <div className="mx-auto max-w-5xl">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-copper">Our Studio Moments</p>
          <h2 className="mt-3 font-heading text-3xl text-ink sm:text-4xl">Tailoring In Motion</h2>
        </div>

        <div className="glass-panel mt-10 mx-auto max-w-4xl overflow-hidden rounded-3xl p-3 sm:p-4">
          <div
            className="flex transition-transform duration-700 ease-out"
            style={{ transform: `translateX(-${activeIndex * 100}%)` }}
          >
            {imageSlides.map((item) => (
              <article key={item.src} className="relative min-w-full overflow-hidden rounded-2xl bg-cream">
                <img
                  src={item.src}
                  alt={item.alt}
                  loading="lazy"
                  className="block w-full h-auto"
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
