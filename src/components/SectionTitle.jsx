const SectionTitle = ({ eyebrow, title, description }) => {
  return (
    <div className="max-w-2xl">
      <p className="text-xs font-semibold uppercase tracking-[0.25em] text-copper">{eyebrow}</p>
      <h2 className="mt-3 font-heading text-3xl text-ink sm:text-4xl">{title}</h2>
      <p className="mt-4 text-sm leading-relaxed text-graphite/80 sm:text-base">{description}</p>
    </div>
  );
};

export default SectionTitle;
