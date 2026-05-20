import type { Metadata } from 'next';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { FeatureGrid } from '@/components/marketing/FeatureGrid';
import { PricingCards } from '@/components/marketing/PricingCards';
import { DisclaimerBlock } from '@/components/marketing/DisclaimerBlock';
import { PageView } from '@/components/marketing/PageView';
import { getProduct } from '@/config/products';

const PRODUCT_ID = 'acu-map';
const product = getProduct(PRODUCT_ID)!;

export const metadata: Metadata = {
  title: 'Acu Map | Learn Acupoints, Meridians and Traditional Chinese Wellness',
  description:
    'Acu Map helps users learn acupoint locations, meridian concepts, and traditional Chinese wellness knowledge through visual maps and AI-guided explanations.',
  keywords: product.keywords,
  alternates: { canonical: '/products/acu-map' },
  openGraph: {
    title: 'Acu Map | Traditional Chinese Wellness Education',
    description: 'Learn acupoints and meridians with AI guidance. Educational only — not medical advice.',
    url: '/products/acu-map',
    images: ['/og.svg'],
  },
};

export default function AcuMapPage() {
  return (
    <>
      <PageView event="product_landing_viewed" properties={{ product: PRODUCT_ID }} />

      <section className="hero" id="start">
        <div className="container">
          <div className="kicker">
            <span className="eyebrow">Acu Map</span>
            <Badge status={product.status}>{product.status}</Badge>
          </div>
          <h1>Explore Acupoints and Traditional Chinese Wellness</h1>
          <p className="lead" style={{ marginTop: 16 }}>
            Acu Map helps users learn acupoint locations, meridian concepts, and traditional Chinese wellness knowledge through visual maps and AI-guided explanations.
          </p>
          <div className="cta-row">
            <Button href="#features" variant="primary"
              trackEventName="acu_map_cta_clicked" trackProps={{ location: 'hero', cta: 'explore' }}>
              Explore Acu Map
            </Button>
            <Button href="#features"
              trackEventName="acu_map_cta_clicked" trackProps={{ location: 'hero', cta: 'learn_acupoints' }}>
              Learn About Acupoints
            </Button>
          </div>
        </div>
      </section>

      <section className="section-sm">
        <div className="container">
          <DisclaimerBlock variant="danger" title="Medical disclaimer">
            Acu Map is for educational and wellness learning purposes only. It is not medical advice, diagnosis, or treatment.
            Users should consult qualified healthcare professionals for medical conditions.
          </DisclaimerBlock>
        </div>
      </section>

      <section className="section" id="features">
        <div className="container">
          <div className="kicker"><span className="eyebrow">Features</span></div>
          <h2>An educational map of the body</h2>
          <FeatureGrid items={[
            { title: 'Acupoint Map', body: 'Visual locations of common acupoints.' },
            { title: 'Meridian Learning', body: 'Foundational meridian concepts.' },
            { title: 'AI Explanations', body: 'Plain-language educational descriptions.' },
            { title: 'Wellness Education', body: 'Cultural and historical context.' },
            { title: 'Expert-Reviewed (Roadmap)', body: 'Scholar review for future content.' },
            { title: 'Herbal Wellness (Roadmap)', body: 'Traditional herbal culture, educational only.' },
          ]} />
        </div>
      </section>

      <section className="section" id="expert" style={{ borderTop: '1px solid var(--border)' }}>
        <div className="container">
          <div className="kicker"><span className="eyebrow">Expert Collaboration</span></div>
          <h2>Built with traditional knowledge in mind</h2>
          <p className="lead">
            RBW plans to collaborate with experienced TCM scholars and practitioners to create expert-reviewed educational content for global users.
          </p>
          <DisclaimerBlock>
            We never describe acupoints, meridians, or herbal traditions as treatment for disease.
            All content is positioned as cultural and wellness education.
          </DisclaimerBlock>
        </div>
      </section>

      <section className="section" id="herbal">
        <div className="container">
          <div className="kicker"><span className="eyebrow">Herbal Knowledge (Future)</span></div>
          <h2>Traditional culture, not medical advice</h2>
          <p className="lead">
            Future content may include traditional herbal culture, food therapy concepts, and wellness routines for educational purposes.
          </p>
        </div>
      </section>

      <PricingCards productId={PRODUCT_ID} />

      <section className="section-sm">
        <div className="container">
          <DisclaimerBlock variant="danger" title="Important">
            Acu Map is for educational and wellness learning purposes only. It is not medical advice, diagnosis, or treatment.
          </DisclaimerBlock>
        </div>
      </section>
    </>
  );
}
