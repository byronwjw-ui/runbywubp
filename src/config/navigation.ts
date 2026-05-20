export const PRIMARY_NAV = [
  { label: 'Products', href: '/#products' },
  { label: 'Engine', href: '/#engine' },
  { label: 'Why RBW', href: '/#why' },
  { label: 'Contact', href: '/waitlist' },
] as const;

export const FOOTER_NAV = {
  company: [
    { label: 'About', href: '/#why' },
    { label: 'Contact', href: '/waitlist' },
    { label: 'Partner with Us', href: '/waitlist?role=partner' },
  ],
  products: [
    { label: 'RBW Meta', href: '/products/rbw-meta' },
    { label: 'Vibe Party', href: '/products/vibe-party' },
    { label: 'Magic Cube', href: '/products/magic-cube' },
    { label: 'Acu Map', href: '/products/acu-map' },
  ],
  legal: [
    { label: 'Privacy', href: '/privacy' },
    { label: 'Terms', href: '/terms' },
    { label: 'Disclaimer', href: '/disclaimer' },
  ],
} as const;
