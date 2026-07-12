// Single source of truth for the primary navigation.
// A link with `children` renders as a dropdown; if it has no `href`,
// the top-level label is a menu heading only (not itself a page).
export interface NavLink {
  label: string;
  href?: string;
  children?: NavLink[];
}

export const navLinks: NavLink[] = [
  { label: 'Home', href: '/' },
  { label: 'Mission', href: '/mission' },
  {
    label: 'Solutions',
    children: [
      { label: 'Local Service Companies', href: '/solutions/local-service-companies' },
      { label: 'Digital Agencies', href: '/solutions/digital-agencies' },
    ],
  },
  { label: 'Projects', href: '/projects' },
  { label: 'Resources', href: '/resources' },
  { label: 'Connect', href: '/connect' },
];
