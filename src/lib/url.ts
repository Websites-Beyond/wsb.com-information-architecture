// Prefix an internal path with the site's base path (set in astro.config.mjs).
// Use for every internal link/asset so the site works when served from a
// subpath (GitHub Pages project site) or from root — change `base` in one
// place and nothing else needs touching.
//
// Pass root-relative paths like "/connect" or "/". External URLs and anchors
// are returned unchanged.
export function url(path: string): string {
  if (/^(https?:)?\/\//.test(path) || path.startsWith('#')) return path;
  const base = import.meta.env.BASE_URL.replace(/\/$/, ''); // strip trailing slash
  const clean = path.startsWith('/') ? path : `/${path}`;
  return `${base}${clean}` || '/';
}
