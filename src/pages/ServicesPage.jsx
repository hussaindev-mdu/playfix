import { Link } from 'react-router-dom';
import SectionTitle from '../components/SectionTitle';
import { services, highlights } from '../data/siteContent';
import { assetPath } from '../utils/assetPath';

const serviceVideos = [assetPath('media/playfix-reel.mp4'), assetPath('media/playfix-reel-2.mp4')];

const ServicesPage = () => {
  return (
    <>
      <section className="px-5 pb-10 pt-16 sm:px-8 sm:pt-20">
        <div className="mx-auto max-w-6xl">
          <SectionTitle
            eyebrow="Services"
            title="Tailoring Solutions for Every Occasion"
            description="Discover premium stitching, precise fitting, and dependable finishing crafted for comfort and style."
          />
        </div>
      </section>

      <section className="px-5 pb-16 sm:px-8 sm:pb-20">
        <div className="mx-auto grid max-w-6xl gap-5 md:grid-cols-3">
          {services.map((service) => (
            <article key={service.title} className="glass-panel rounded-3xl p-6">
              <h3 className="font-heading text-2xl text-ink">{service.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-graphite/85">{service.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="px-5 py-16 sm:px-8 sm:py-20">
        <div className="mx-auto max-w-6xl">
          <h2 className="font-heading text-3xl text-ink sm:text-4xl">Process In Motion</h2>
          <div className="mt-8 grid gap-5 md:grid-cols-2">
            {serviceVideos.map((videoSrc) => (
              <video
                key={videoSrc}
                src={videoSrc}
                className="h-80 w-full rounded-3xl object-cover shadow-soft"
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
              />
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 py-16 sm:px-8 sm:py-20">
        <div className="mx-auto max-w-6xl rounded-3xl bg-ink p-8 text-cream shadow-soft">
          <h3 className="font-heading text-3xl">Why Clients Choose Playfix</h3>
          <ul className="mt-5 grid gap-3 text-sm sm:grid-cols-2 sm:text-base">
            {highlights.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <Link
            to="/contact"
            className="mt-8 inline-flex rounded-full bg-copper px-6 py-3 text-sm font-semibold text-cream transition hover:bg-[#9b5f2f]"
          >
            Book Consultation
          </Link>
        </div>
      </section>
    </>
  );
};

export default ServicesPage;
