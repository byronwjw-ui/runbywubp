export type Market = 'global' | 'china';

export const SITE = {
  name: 'RBW',
  legalName: 'RBW Inc.',
  url: process.env.NEXT_PUBLIC_SITE_URL || 'https://rbw.example.com',
  market: (process.env.NEXT_PUBLIC_MARKET as Market) || 'global',
  defaultLocale: 'en',
  locales: ['en', 'zh'] as const,
  contactEmail: 'hello@rbw.example.com',
  brand: {
    tagline: 'AI-Guided Experiences for Play, Self-Discovery, Wellness, and Learning',
    mission:
      'RBW builds AI-guided experiences across play, self-discovery, wellness education, and skill learning.',
    positioning: 'Separate products, unified engine.',
  },
} as const;

export type SiteConfig = typeof SITE;
