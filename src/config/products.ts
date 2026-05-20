export type ProductCategory = 'self-discovery' | 'party' | 'wellness' | 'learning';
export type ProductStatus = 'live' | 'beta' | 'coming-soon';
export type Market = 'global' | 'china';

export type Product = {
  id: string;
  name: string;
  shortName: string;
  tagline: string;
  description: string;
  category: ProductCategory;
  href: string;
  ctaLabel: string;
  status: ProductStatus;
  keywords: string[];
  pricing?: {
    free?: string;
    pro?: string;
    enterprise?: string;
  };
  trackingKey: string;
  color: { from: string; to: string; accent: string };
  markets: Market[];
};

export const PRODUCTS: Product[] = [
  {
    id: 'rbw-meta',
    name: 'RBW Meta',
    shortName: 'Meta',
    tagline: 'AI self-discovery and oracle reports.',
    description:
      'AI-guided tarot, Zi Wei Dou Shu, Xiao Liu Ren, relationship, career, and annual fortune reports for structured self-discovery.',
    category: 'self-discovery',
    href: '/products/rbw-meta',
    ctaLabel: 'Try a Reading',
    status: 'live',
    keywords: ['AI tarot', 'Zi Wei Dou Shu', 'Xiao Liu Ren', 'self-discovery report', 'relationship reading', 'career reading', 'annual fortune report'],
    pricing: { free: 'Free quick ask', pro: 'Deep report', enterprise: 'Annual plan' },
    trackingKey: 'rbw_meta',
    color: { from: '#6D5BFF', to: '#A56CFF', accent: '#C7B8FF' },
    markets: ['global', 'china'],
  },
  {
    id: 'vibe-party',
    name: 'Vibe Party',
    shortName: 'Vibe',
    tagline: 'AI-powered party games and icebreakers.',
    description:
      '32 creative party games for house parties, bars, team building, student clubs, and online communities. Free to use with sponsored interactive cards.',
    category: 'party',
    href: '/products/vibe-party',
    ctaLabel: 'Start a Free Party',
    status: 'live',
    keywords: ['party games', 'icebreakers', 'team building', 'bar games', 'group games'],
    pricing: { free: 'Free', pro: 'Host Pro', enterprise: 'Venue / Enterprise' },
    trackingKey: 'vibe_party',
    color: { from: '#FF5E8A', to: '#3A8DFF', accent: '#FFB199' },
    markets: ['global', 'china'],
  },
  {
    id: 'magic-cube',
    name: 'Magic Cube',
    shortName: 'Cube',
    tagline: 'AI cube coach for beginners.',
    description:
      'Learn 2x2 (12 formulas) and 3x3 (78 formulas) step by step with timer, practice tracking, and a 14-day beginner challenge.',
    category: 'learning',
    href: '/products/magic-cube',
    ctaLabel: 'Start 14-Day Challenge',
    status: 'live',
    keywords: ['rubiks cube', '2x2 cube', '3x3 cube', 'cube formulas', 'beginner cube coach'],
    pricing: { free: 'Free Starter', pro: 'Pro $9.99/yr', enterprise: 'Family / School' },
    trackingKey: 'magic_cube',
    color: { from: '#1FB6A6', to: '#3A8DFF', accent: '#7EE8C8' },
    markets: ['global', 'china'],
  },
  {
    id: 'acu-map',
    name: 'Acu Map',
    shortName: 'Acu',
    tagline: 'Learn acupoints and traditional Chinese wellness.',
    description:
      'Visual acupoint maps, meridian learning, and AI-guided explanations for traditional Chinese wellness education.',
    category: 'wellness',
    href: '/products/acu-map',
    ctaLabel: 'Explore Acu Map',
    status: 'beta',
    keywords: ['acupoint map', 'acupuncture points', 'meridian map', 'traditional Chinese wellness', 'acupressure learning', 'TCM education'],
    pricing: { free: 'Free learning', pro: 'Premium course (soon)', enterprise: 'Expert content (soon)' },
    trackingKey: 'acu_map',
    color: { from: '#2E8B7A', to: '#A8C9B6', accent: '#D8E8DA' },
    markets: ['global', 'china'],
  },
];

export const getProduct = (id: string): Product | undefined =>
  PRODUCTS.find((p) => p.id === id);
