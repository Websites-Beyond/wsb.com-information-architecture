// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
// Deployed to GitHub Pages as a *project* site, so it lives under a subpath.
// `site` + `base` make Astro emit correct absolute URLs for that subpath.
export default defineConfig({
  site: 'https://websites-beyond.github.io',
  base: '/wsb.com-information-architecture',
  vite: {
    plugins: [tailwindcss()],
  },
});
