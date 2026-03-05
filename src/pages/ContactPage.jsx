import LeadFormSection from '../sections/LeadFormSection';
import { assetPath } from '../utils/assetPath';

const locations = [
  {
    name: 'Play Fix Tailoring',
    rating: '4.4 (30)',
    type: 'Clothing store',
    address:
      'Shop No: 4, Corporation Complex, Melur Main Rd, near Smart Fruit Market',
    phone: '098421 44688',
    hours: 'Closed · Opens 10:00 am',
    mapsUrl:
      'https://www.google.com/maps/search/?api=1&query=Shop+No+4+Corporation+Complex+Melur+Main+Rd+near+Smart+Fruit+Market'
  },
  {
    name: 'Play Fix Tailors',
    rating: '4.8 (43)',
    type: 'Tailor',
    address: '23a/b, N Avani Moola St',
    phone: '0452 437 3680',
    hours: 'Closed · Opens 10:00 am · On-site services',
    mapsUrl: 'https://www.google.com/maps/search/?api=1&query=23a%2Fb+N+Avani+Moola+St'
  },
  {
    name: 'Play Fix Tailoring',
    rating: '5.0 (4)',
    type: 'Clothing store',
    address: '138, South Masi St, (sait pallivasal 1st floor)',
    phone: '',
    hours: 'Closed · Opens 10:30 am',
    mapsUrl: 'https://www.google.com/maps/search/?api=1&query=138+South+Masi+St+sait+pallivasal+1st+floor'
  },
  {
    name: 'Play Fix Designer Studio',
    rating: '5.0 (4)',
    type: 'Clothing store',
    address: '49, Bypass Rd',
    phone: '+91 96005 97729',
    hours: '',
    mapsUrl: 'https://www.google.com/maps/search/?api=1&query=49+Bypass+Rd'
  }
];

const ContactPage = () => {
  return (
    <>
      <section className="px-5 pb-10 pt-16 sm:px-8 sm:pt-20">
        <div className="glass-panel mx-auto max-w-6xl rounded-3xl p-7 sm:p-10">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-copper">Contact</p>
          <h1 className="mt-3 font-heading text-4xl text-ink sm:text-5xl">Start Your Tailoring Request</h1>
          <p className="mt-4 max-w-3xl text-sm leading-relaxed text-graphite/80 sm:text-base">
            Share your requirement and preferred timeline. The Playfix team will reach out with fitting and design
            support.
          </p>
        </div>
      </section>

      <section className="px-5 pb-6 sm:px-8">
        <div className="mx-auto grid max-w-6xl gap-5 md:grid-cols-2">
          <video
            src={assetPath('media/playfix-reel.mp4')}
            className="h-72 w-full rounded-3xl object-cover shadow-soft"
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
          />
          <video
            src={assetPath('media/playfix-reel-2.mp4')}
            className="h-72 w-full rounded-3xl object-cover shadow-soft"
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
          />
        </div>
      </section>

      <section className="px-5 py-12 sm:px-8 sm:py-16">
        <div className="mx-auto max-w-6xl">
          <h2 className="font-heading text-3xl text-ink sm:text-4xl">Store Locations</h2>
          <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {locations.map((location, index) => (
              <article key={`${location.name}-${index}`} className="glass-panel flex h-full flex-col rounded-2xl p-6">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-copper">Branch {index + 1}</p>
                <div className="mt-3 flex flex-1 flex-col gap-3">
                  <h3 className="font-semibold text-ink">{location.name}</h3>
                  <p className="text-sm text-graphite/85">
                    {location.rating} · {location.type}
                  </p>
                  <p className="text-sm leading-relaxed text-graphite/85">{location.address}</p>
                  {location.phone ? (
                    <a className="block text-sm text-ink underline" href={`tel:${location.phone.replace(/\s+/g, '')}`}>
                      {location.phone}
                    </a>
                  ) : null}
                  {location.hours ? <p className="text-sm text-graphite/80">{location.hours}</p> : null}
                </div>
                <a
                  href={location.mapsUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-5 inline-flex w-fit self-start rounded-full bg-ink px-4 py-2 text-xs font-semibold uppercase tracking-wide text-cream transition hover:bg-graphite"
                >
                  Open In Google Maps
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <LeadFormSection />
    </>
  );
};

export default ContactPage;
