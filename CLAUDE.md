# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev        # Start Vite dev server at localhost:5173
npm run build      # Production build (also generates 404.html for GH Pages SPA routing)
npm run preview    # Preview the production build locally
npm run lint       # ESLint — zero warnings enforced
npm run deploy     # Build + publish dist/ to GitHub Pages via gh-pages
```

No test framework is configured. ESLint is the only automated quality check.

## Environment Variables

Copy `.env.example` to `.env` and fill in the three EmailJS credentials:

```
VITE_EMAILJS_SERVICE_ID
VITE_EMAILJS_TEMPLATE_ID
VITE_EMAILJS_PUBLIC_KEY
```

Without these the lead form degrades gracefully (leads still save to `localStorage`).

## Architecture

**Stack:** React 18 + Vite 6 + Tailwind CSS 3 + React Router v6 + EmailJS

**Source layout:**

| Directory | Role |
|-----------|------|
| `src/pages/` | Routed page components (`HomePage`, `AboutPage`, `ServicesPage`, `GalleryPage`, `ContactPage`) |
| `src/sections/` | Composable sub-sections assembled inside pages (e.g. `LeadFormSection`, `HeroSection`) |
| `src/components/` | Shared UI (`Navbar`, `Footer`, `SectionTitle`) |
| `src/data/siteContent.js` | Single source of truth for nav items, services list, highlights, and FAQs |
| `src/utils/` | `emailjs.js` (EmailJS integration), `validators.js` (form validation), `assetPath.js` (GitHub Pages path helper) |
| `src/hooks/useTheme.js` | Theme logic — auto mode uses geolocation + sunrise-sunset.org API |

**Routing** is defined in `src/App.jsx`. All routes render inside the shared `Navbar` / `Footer` shell.

**Static content** lives in `src/data/siteContent.js` — update copy there, not inside components.

## Theme System

Three modes: `auto` (geo-aware light/dark via sunrise-sunset.org), `light`, `dark`. The active mode is stored in `localStorage` and applied as a `theme-light` / `theme-dark` class on `<html>`. Tailwind uses CSS custom properties (`--color-ink`, `--color-graphite`, `--color-copper`, etc.) defined in `src/styles.css` rather than Tailwind's built-in dark mode.

## Lead Form Flow

`LeadFormSection` (used on `HomePage` and `ContactPage`) validates input with `src/utils/validators.js`, saves the submission to `localStorage` under key `playfixLeads`, then sends an email via EmailJS. Both steps are attempted independently so a missing EmailJS config doesn't lose the lead.

## Deployment

The site deploys to `https://hussaindev-mdu.github.io/playfix/`. The Vite base path is set dynamically in `vite.config.js` based on the `GITHUB_PAGES` env var. The `npm run build` script creates `dist/404.html` as a copy of `index.html` so React Router handles unknown routes on GitHub Pages. Deployment is automated via `.github/workflows/deploy.yml` on every push to `main`.

## Tailwind Custom Tokens

Custom colors (`ink`, `graphite`, `copper`, `sand`, `cream`), fonts (`Playfair Display`, `Manrope`), and animations (`rise`, `float`, `glow`) are defined in `tailwind.config.js`. Glassmorphism utility classes (`glass-nav`, `glass-panel`, `glass-input`) are defined in `src/styles.css`.
