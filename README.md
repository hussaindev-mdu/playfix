# Playfix Tailoring Website (React + Vite + Tailwind)

Modern lead-generation website for **Playfix**, built with React, Vite, and Tailwind CSS.

## Tech Stack

- React 18
- React Router
- Vite 5
- Tailwind CSS 3
- ESLint

## Project Structure

```
.
├── public
│   └── media
├── src
│   ├── components
│   ├── data
│   ├── pages
│   ├── sections
│   ├── utils
│   ├── App.jsx
│   ├── main.jsx
│   └── styles.css
├── index.html
├── package.json
├── postcss.config.js
├── tailwind.config.js
└── vite.config.js
```

## Setup

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
npm run preview
```

## Routes

- `/` Home
- `/about` About Our Story page
- `/services` Services and process videos
- `/gallery` Media gallery with image/video carousel
- `/contact` Consultation and lead form

## Theme System

- Navbar includes a `Dark/Light` toggle button.
- Default on each load is `Auto`, which switches theme by sunrise/sunset using browser location.
- Toggle button overrides current session theme to light/dark instantly.

## Lead Collection

The consultation form validates user input, sends it through EmailJS, and stores a local backup in browser `localStorage` under key `playfixLeads`.

### EmailJS Setup

1. Create `.env` from `.env.example`.
2. Fill these values from your EmailJS dashboard:
   - `VITE_EMAILJS_SERVICE_ID`
   - `VITE_EMAILJS_TEMPLATE_ID`
   - `VITE_EMAILJS_PUBLIC_KEY`
3. In your EmailJS template, map these variables:
   - `to_email` (set to `hussaindev07@gmail.com`)
   - `customer_name`
   - `customer_email`
   - `customer_phone`
   - `required_service`
   - `requirement_message`
   - `submitted_at`
