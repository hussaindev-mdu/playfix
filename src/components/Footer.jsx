import { assetPath } from '../utils/assetPath';

const Footer = () => {
  return (
    <footer className="glass-nav mt-8 border-t px-5 py-8 sm:px-8">
      <div className="mx-auto flex max-w-6xl flex-col gap-3 text-sm text-graphite/80 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-3">
          <img
            src={assetPath('media/playfix-logo.jpeg')}
            alt="Playfix logo"
            className="h-8 w-8 rounded-lg object-cover"
          />
          <p>Playfix Tailoring</p>
        </div>
        <p>Crafted for custom fit and comfort.</p>
      </div>
    </footer>
  );
};

export default Footer;
