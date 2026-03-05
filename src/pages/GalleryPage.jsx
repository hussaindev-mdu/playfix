import { useEffect, useState } from 'react';

const sliderImages = [
  { src: '/assets/imageOne.webp', alt: 'Playfix gallery image 1' },
  { src: '/assets/imageTwo.webp', alt: 'Playfix gallery image 2' },
  { src: '/assets/imageThree.gif', alt: 'Playfix gallery image 3' },
  { src: '/assets/imageFour.gif', alt: 'Playfix gallery image 4' },
  { src: '/assets/imageFive.webp', alt: 'Playfix gallery image 5' }
];

const GalleryPage = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const intervalId = window.setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % sliderImages.length);
    }, 3000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <>
      <section className="px-5 pb-8 pt-16 sm:px-8 sm:pt-20">
        <div className="mx-auto max-w-6xl">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-copper">Gallery</p>
          <h1 className="mt-3 font-heading text-4xl text-ink sm:text-5xl">Playfix Media Showcase</h1>
          <p className="mt-4 max-w-3xl text-sm leading-relaxed text-graphite/80 sm:text-base">
            A collection of tailoring visuals and process reels from Playfix.
          </p>
        </div>
      </section>

      <section className="px-5 pb-10 sm:px-8">
        <div className="glass-panel mx-auto max-w-6xl overflow-hidden rounded-[2rem] p-4 sm:p-6">
          <div className="relative overflow-hidden rounded-3xl">
            <img
              key={sliderImages[activeIndex].src}
              src={sliderImages[activeIndex].src}
              alt={sliderImages[activeIndex].alt}
              className="h-[420px] w-full animate-rise object-cover sm:h-[520px]"
            />

            <div className="absolute bottom-4 left-4 rounded-full bg-black/55 px-4 py-1 text-xs font-semibold text-white">
              {activeIndex + 1} / {sliderImages.length}
            </div>
          </div>
          <div className="mt-5 flex justify-center gap-2">
            {sliderImages.map((item, index) => (
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
    </>
  );
};

export default GalleryPage;
