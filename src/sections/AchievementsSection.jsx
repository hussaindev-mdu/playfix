const achievements = [
  {
    title: 'Tailoring Facilities',
    value: '98%',
    description:
      'Our facilities use advanced technology and skilled artisans to ensure precision in every stitch.'
  },
  {
    title: 'Refined Styles',
    value: '100%',
    description:
      'This success rate reflects our ability to craft distinctive, fashionable looks by combining classic tailoring with the latest trends.'
  },
  {
    title: 'Satisfied Grooms',
    value: '100%',
    description:
      'Every groom is assured of walking down the aisle in a perfectly tailored outfit, feeling confident and comfortable on their special day.'
  }
];

const AchievementsSection = () => {
  return (
    <section className="px-5 py-16 sm:px-8 sm:py-20">
      <div className="mx-auto max-w-6xl">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-copper">Achievements</p>
          <h2 className="mt-3 font-heading text-3xl text-ink sm:text-4xl">Results That Define Playfix</h2>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {achievements.map((item) => (
            <article key={item.title} className="glass-panel rounded-3xl p-6">
              <p className="font-heading text-4xl text-copper">{item.value}</p>
              <h3 className="mt-2 text-lg font-semibold text-ink">{item.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-graphite/85">{item.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AchievementsSection;
