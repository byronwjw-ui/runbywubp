export type CrossPromoPlacement =
  | 'game_start'
  | 'game_pause'
  | 'game_end'
  | 'landing_page'
  | 'result_card';

export type CrossPromotion = {
  id: string;
  sourceProduct: string;
  targetProduct: string;
  placement: CrossPromoPlacement;
  title: string;
  description: string;
  ctaLabel: string;
  image?: string;
  href: string;
  campaign: string;
};

export const CROSS_PROMOTIONS: CrossPromotion[] = [
  { id: 'vibe-to-meta-tarot', sourceProduct: 'vibe-party', targetProduct: 'rbw-meta', placement: 'game_start', title: "Tonight's Energy Reading", description: 'Try a quick AI tarot reading to set the mood for the night.', ctaLabel: 'Try AI Tarot', href: '/products/rbw-meta', campaign: 'game_start_tarot' },
  { id: 'vibe-to-acu-relax', sourceProduct: 'vibe-party', targetProduct: 'acu-map', placement: 'game_pause', title: 'Need a calm minute?', description: 'Learn one acupoint for relaxation between rounds.', ctaLabel: 'Explore Acu Map', href: '/products/acu-map', campaign: 'relax_acupoint_card' },
  { id: 'vibe-to-cube-challenge', sourceProduct: 'vibe-party', targetProduct: 'magic-cube', placement: 'game_end', title: 'Can you solve a 3x3 cube in 14 days?', description: 'Take the AI-coached beginner challenge after the party.', ctaLabel: 'Start Cube Challenge', href: '/products/magic-cube', campaign: 'cube_14_day_challenge' },
  { id: 'vibe-to-meta-annual', sourceProduct: 'vibe-party', targetProduct: 'rbw-meta', placement: 'result_card', title: 'Discover your social vibe', description: 'Unlock your annual fortune report with RBW Meta.', ctaLabel: 'Try RBW Meta', href: '/products/rbw-meta', campaign: 'annual_report_card' },
];

export const promosForSource = (sourceProduct: string) =>
  CROSS_PROMOTIONS.filter((p) => p.sourceProduct === sourceProduct);
