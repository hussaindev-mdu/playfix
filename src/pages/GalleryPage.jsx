import { useEffect, useState } from 'react';
import { assetPath } from '../utils/assetPath';

const galleryImages = [
  { src: assetPath('assets/shopimage1.jpeg'), alt: 'Playfix shop image 1' },
  { src: assetPath('assets/shopimage2.jpeg'), alt: 'Playfix shop image 2' },
  { src: assetPath('assets/shopimage3.jpeg'), alt: 'Playfix shop image 3' },
  { src: assetPath('assets/shopimage4.jpeg'), alt: 'Playfix shop image 4' },
  { src: assetPath('assets/shopimage5.jpeg'), alt: 'Playfix shop image 5' },
  { src: assetPath('assets/shopimage7.jpeg'), alt: 'Playfix shop image 7' },
  { src: assetPath('assets/shopimage8.webp'), alt: 'Playfix shop image 8' }
];

const GalleryPage = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const intervalId = window.setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % galleryImages.length);
    }, 3200);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <>
      <section className="px-5 pb-8 pt-16 sm:px-8 sm:pt-20">
        <div className="mx-auto max-w-5xl">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-copper">Gallery</p>
          <h1 className="mt-3 font-heading text-4xl text-ink sm:text-5xl">Playfix Media Showcase</h1>
          <p className="mt-4 max-w-3xl text-sm leading-relaxed text-graphite/80 sm:text-base">
            A collection of tailoring visuals and process reels from Playfix.
          </p>
        </div>
      </section>

      <section className="px-5 pb-16 sm:px-8">
        <div className="glass-panel mx-auto max-w-4xl overflow-hidden rounded-3xl p-3 sm:p-4">
          <article className="relative overflow-hidden rounded-2xl bg-cream">
            <img
              key={galleryImages[activeIndex].src}
              src={galleryImages[activeIndex].src}
              alt={galleryImages[activeIndex].alt}
              loading="lazy"
              className="block w-full h-auto animate-rise"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink/35 via-transparent to-transparent" />
          </article>
        </div>

        <div className="mt-5 flex justify-center gap-2">
          {galleryImages.map((item, index) => (
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
      </section>
    </>
  );
};

export default GalleryPage;
