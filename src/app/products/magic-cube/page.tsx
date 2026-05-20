import type { Metadata } from 'next';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { FeatureGrid } from '@/components/marketing/FeatureGrid';
import { PricingCards } from '@/components/marketing/PricingCards';
import { DisclaimerBlock } from '@/components/marketing/DisclaimerBlock';
import { PageView } from '@/components/marketing/PageView';
import { getProduct } from '@/config/products';

const PRODUCT_ID = 'magic-cube';
const product = getProduct(PRODUCT_ID)!;

export const metadata: Metadata = {
  title: 'Magic Cube | AI Cube Coach for Beginners',
  description:
    'Magic Cube helps beginners learn 2x2 and 3x3 cube formulas, track practice, and complete structured learning challenges with an AI coach.',
  keywords: product.keywords,
  alternates: { canonical: '/products/magic-cube' },
  openGraph: {
    title: 'Magic Cube | AI Cube Coach',
    description: 'Learn the cube step by step with an AI coach.',
    url: '/products/magic-cube',
    images: ['/og.svg'],
  },
};

export default function MagicCubePage() {
  return (
    <>
      <PageView event="product_landing_viewed" properties={{ product: PRODUCT_ID }} />

      <section className="hero" id="start">
        <div className="container">
          <div className="kicker">
            <span className="eyebrow">Magic Cube</span>
            <Badge status={product.status}>{product.status}</Badge>
          </div>
          <h1>Learn the Cube Step by Step with an AI Coach</h1>
          <p className="lead" style={{ marginTop: 16 }}>
            Magic Cube helps beginners learn 2x2 and 3x3 cube formulas, track practice, and complete structured learning challenges.
          </p>
          <div className="cta-row">
            <Button href="#pricing" variant="primary"
              trackEventName="cube_challenge_clicked" trackProps={{ location: 'hero', cta: '14_day_challenge' }}>
              Start 14-Day Challenge
            </Button>
            <Button href="#features"
              trackEventName="cta_clicked" trackProps={{ cta: 'view_formula_library', product: PRODUCT_ID }}>
              View Formula Library
            </Button>
          </div>
        </div>
      </section>

      <section className="section" id="features">
        <div className="container">
          <div className="kicker"><span className="eyebrow">Features</span></div>
          <h2>From first solve to lifelong practice</h2>
          <FeatureGrid items={[
            { title: '2x2 · 12 formulas', body: 'Complete beginner-friendly starter set.' },
            { title: '3x3 · 78 formulas', body: 'Full library for intermediate progression.' },
            { title: 'Practice Tracker', body: 'See progress, streaks, and weak spots.' },
            { title: 'Timer', body: 'Speedcube-style timer with history.' },
            { title: 'Formula Cards', body: 'Visual cards you can review anywhere.' },
            { title: 'Progress Dashboard', body: 'Personal stats and milestones.' },
            { title: 'Parent-Child Learning', body: 'Family mode for kids and parents.' },
            { title: 'Beginner Challenge', body: '14-day structured starter path.' },
          ]} />
        </div>
      </section>

      <PricingCards productId={PRODUCT_ID} />

      <section className="section-sm">
        <div className="container">
          <DisclaimerBlock title="Educational use">
            Magic Cube is an educational tool. Always practice safely and take breaks during long sessions.
          </DisclaimerBlock>
        </div>
      </section>
    </>
  );
}
