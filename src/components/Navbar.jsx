import { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { useTheme } from '../hooks/useTheme';
import { assetPath } from '../utils/assetPath';

const pageLinks = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Services', to: '/services' },
  { label: 'Gallery', to: '/gallery' },
  { label: 'Contact', to: '/contact' }
];

const Navbar = () => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === 'dark';
  const toggleMenu = () => setIsMenuOpen((prev) => !prev);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  return (
    <header className="glass-nav sticky top-0 z-30 border-b">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 sm:px-8">
        <Link to="/" className="flex items-center gap-3">
          <img
            src={assetPath('media/playfix-logo.jpeg')}
            alt="Playfix logo"
            className="h-10 w-10 rounded-xl object-cover shadow-soft transition duration-500 hover:scale-110"
          />
          <span className="font-heading text-2xl text-ink">Playfix</span>
        </Link>

        <ul className="hidden items-center gap-6 text-sm font-semibold text-graphite/90 md:flex">
          {pageLinks.map((item) => (
            <li key={item.label}>
              <NavLink
                to={item.to}
                className={({ isActive }) => (isActive ? 'text-copper' : 'transition hover:text-copper')}
              >
                {item.label}
              </NavLink>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-2 md:flex">
          <button
            type="button"
            onClick={toggleTheme}
            className={`theme-switch ${isDark ? 'is-dark' : ''}`}
            aria-label="Toggle dark and light theme"
            title={`Current: ${isDark ? 'Dark' : 'Light'} mode`}
          >
            <span className="theme-switch-track">
              <span className="theme-switch-icon sun" aria-hidden="true">
                ☀
              </span>
              <span className="theme-switch-icon moon" aria-hidden="true">
                ☾
              </span>
            </span>
            <span className="theme-switch-thumb" />
          </button>
          <Link
            to="/contact"
            className="rounded-full bg-ink px-4 py-2 text-xs font-semibold uppercase tracking-wide text-cream transition hover:bg-graphite"
          >
            Consultation
          </Link>
        </div>

        <button
          type="button"
          onClick={toggleMenu}
          className="rounded-xl border border-white/60 bg-white/35 px-3 py-2 text-xs font-semibold uppercase tracking-wide text-ink transition md:hidden"
          aria-label="Toggle mobile navigation menu"
          aria-expanded={isMenuOpen}
        >
          {isMenuOpen ? 'Close' : 'Menu'}
        </button>
      </nav>

      {isMenuOpen ? (
        <div className="border-t border-white/40 px-5 pb-5 pt-4 sm:px-8 md:hidden">
          <div className="mx-auto flex max-w-6xl flex-col gap-4">
            <ul className="flex flex-col gap-3 text-sm font-semibold text-graphite/90">
              {pageLinks.map((item) => (
                <li key={item.label}>
                  <NavLink
                    to={item.to}
                    className={({ isActive }) =>
                      isActive ? 'text-copper' : 'transition hover:text-copper'
                    }
                  >
                    {item.label}
                  </NavLink>
                </li>
              ))}
            </ul>

            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={toggleTheme}
                className={`theme-switch ${isDark ? 'is-dark' : ''}`}
                aria-label="Toggle dark and light theme"
                title={`Current: ${isDark ? 'Dark' : 'Light'} mode`}
              >
                <span className="theme-switch-track">
                  <span className="theme-switch-icon sun" aria-hidden="true">
                    ☀
                  </span>
                  <span className="theme-switch-icon moon" aria-hidden="true">
                    ☾
                  </span>
                </span>
                <span className="theme-switch-thumb" />
              </button>

              <Link
                to="/contact"
                className="rounded-full bg-ink px-4 py-2 text-xs font-semibold uppercase tracking-wide text-cream transition hover:bg-graphite"
              >
                Consultation
              </Link>
            </div>
          </div>
        </div>
      ) : null}
    </header>
  );
};

export default Navbar;
