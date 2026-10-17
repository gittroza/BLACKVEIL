# BLACKVEIL

Premium cinematic video discovery site — demo scaffold.

This repository contains a mobile-first React + Vite + TypeScript + Tailwind demo for "BLACKVEIL". It includes demo content, a modular integration layer for video providers, an 18+ age-gate, privacy/terms pages, a profile with favorites stored in localStorage, and basic pages: Home, Explore, Video detail, Live, Products, Profile.

NOTES
- All media in this demo are clearly labelled demo assets or public-domain samples (MDN CC0 sample video).
- This is a frontend-only scaffold. No server or scraping is performed.

Setup

1. Install dependencies

   npm install

2. Run in development

   npm run dev

3. Build for production

   npm run build

4. Preview production build

   npm run preview

Branding
- The site uses a black background, metallic silver typography and a premium violet glow to match the requested BLACKVEIL visual identity.

Integration
- See src/lib/api/mockAdapter.ts for the modular VideoProvider interface. Replace with real authorized adapters that implement the same interface.

Limitations
- Demo-only. Real providers require API keys and often a server-side proxy.
- No authentication or persistence beyond localStorage.

License
MIT
