export type PricingTier = {
  id: string;
  name: string;
  price: string;
  period?: string;
  description: string;
  features: string[];
  ctaLabel: string;
  ctaHref: string;
  highlighted?: boolean;
  comingSoon?: boolean;
};

export type ProductPricing = {
  productId: string;
  note?: string;
  tiers: PricingTier[];
};

const waitlist = (campaign: string) => `/waitlist?campaign=${campaign}`;

export const PRICING: Record<string, ProductPricing> = {
  'rbw-meta': {
    productId: 'rbw-meta',
    note: 'Payments coming soon. Pricing structure shown for reference.',
    tiers: [
      { id: 'free', name: 'Free', price: '$0', description: 'Daily quick ask and limited oracle previews.', features: ['1 free quick ask / day', 'Sample tarot card', 'Email summary'], ctaLabel: 'Join Waitlist', ctaHref: waitlist('meta_free') },
      { id: 'reading', name: 'One Reading', price: '$4.99', description: 'A single structured AI-guided reading.', features: ['Tarot / Xiao Liu Ren / quick oracle', 'Shareable summary', 'Follow-up questions'], ctaLabel: 'Join Waitlist', ctaHref: waitlist('meta_reading') },
      { id: 'deep', name: 'Deep Report', price: '$19', description: 'In-depth report: relationship, career, annual.', features: ['Structured PDF report', 'Personal archive', 'Re-ask within 14 days'], ctaLabel: 'Join Waitlist', ctaHref: waitlist('meta_deep'), highlighted: true },
      { id: 'annual', name: 'Annual', price: '$59', period: '/ year', description: 'All reports + Zi Wei Dou Shu deep profile.', features: ['Unlimited quick asks', '4 deep reports', 'Annual fortune report'], ctaLabel: 'Join Waitlist', ctaHref: waitlist('meta_annual') },
    ],
  },
  'vibe-party': {
    productId: 'vibe-party',
    note: 'Vibe Party is free for users. Paid tiers are for hosts and venues.',
    tiers: [
      { id: 'free', name: 'Free', price: '$0', description: 'All 32 games with sponsored interactive cards.', features: ['Room code + QR join', 'All 32 game modes', 'Sponsored cards from RBW family'], ctaLabel: 'Start a Free Party', ctaHref: '/products/vibe-party#start' },
      { id: 'host-pro', name: 'Host Pro', price: '$6.99', period: '/ month', description: 'No sponsored cards, private rooms, custom prompts.', features: ['Ad-free experience', 'Private room mode', 'Custom prompt packs'], ctaLabel: 'Join Waitlist', ctaHref: waitlist('vibe_host_pro'), highlighted: true },
      { id: 'venue', name: 'Venue', price: 'From $49', period: '/ month', description: 'For bars, cafes, and event spaces.', features: ['Branded room', 'Big screen mode', 'Event dashboard'], ctaLabel: 'Contact Sales', ctaHref: waitlist('vibe_venue') },
      { id: 'enterprise', name: 'Enterprise', price: 'Custom', description: 'For HR teams, schools, large events.', features: ['Company logo branding', 'Private game packs', 'Team-building templates'], ctaLabel: 'Contact Sales', ctaHref: waitlist('vibe_enterprise') },
    ],
  },
  'magic-cube': {
    productId: 'magic-cube',
    note: 'Subscription model. Payments coming soon.',
    tiers: [
      { id: 'free', name: 'Free Starter', price: '$0', description: 'Beginner path + timer + a few formulas.', features: ['Beginner learning path', 'Timer', '2x2 starter formulas'], ctaLabel: 'Start Free', ctaHref: '/products/magic-cube#start' },
      { id: 'pro', name: 'Pro', price: '$9.99', period: '/ year', description: 'Full 2x2 + 3x3 formula library and tracking.', features: ['All 12 + 78 formulas', 'Practice tracking', '14-day challenge'], ctaLabel: 'Join Waitlist', ctaHref: waitlist('cube_pro'), highlighted: true },
      { id: 'family', name: 'Family', price: '$19', period: '/ year', description: 'Up to 5 members, parent-child mode.', features: ['5 family members', 'Parent-child dashboard', 'Shared challenges'], ctaLabel: 'Join Waitlist', ctaHref: waitlist('cube_family') },
      { id: 'school', name: 'School', price: 'Custom', description: 'Classroom plans and educator dashboards.', features: ['Classroom dashboard', 'Educator tools', 'Bulk seats'], ctaLabel: 'Contact Sales', ctaHref: waitlist('cube_school') },
    ],
  },
  'acu-map': {
    productId: 'acu-map',
    note: 'Acu Map is educational. Premium and expert content are on the roadmap.',
    tiers: [
      { id: 'free', name: 'Free Learning', price: '$0', description: 'Browse acupoint maps and meridian basics.', features: ['Acupoint map', 'Meridian overview', 'AI-guided basics'], ctaLabel: 'Explore Free', ctaHref: '/products/acu-map#start' },
      { id: 'premium', name: 'Premium Course', price: 'TBD', description: 'Structured wellness learning paths.', features: ['Curated learning modules', 'Progress tracking', 'Quizzes'], ctaLabel: 'Join Waitlist', ctaHref: waitlist('acu_premium'), comingSoon: true, highlighted: true },
      { id: 'expert', name: 'Expert Content', price: 'TBD', description: 'Expert-reviewed TCM wellness education.', features: ['Scholar-reviewed lessons', 'Cultural context', 'Educational only'], ctaLabel: 'Join Waitlist', ctaHref: waitlist('acu_expert'), comingSoon: true },
    ],
  },
};
