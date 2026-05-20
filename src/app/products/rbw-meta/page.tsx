import type { Metadata } from 'next';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { FeatureGrid } from '@/components/marketing/FeatureGrid';
import { PricingCards } from '@/components/marketing/PricingCards';
import { DisclaimerBlock } from '@/components/marketing/DisclaimerBlock';
import { PageView } from '@/components/marketing/PageView';
import { getProduct } from '@/config/products';

const PRODUCT_ID = 'rbw-meta';
const product = getProduct(PRODUCT_ID)!;

export const metadata: Metadata = {
  title: 'RBW Meta | AI Tarot, Zi Wei Dou Shu and Self-Discovery Reports',
  description:
    'AI-guided tarot, Eastern oracle wisdom, Zi Wei Dou Shu, relationship readings, career insights, and annual fortune reports for structured self-discovery.',
  keywords: product.keywords,
  alternates: { canonical: '/products/rbw-meta' },
  openGraph: {
    title: 'RBW Meta | AI Self-Discovery Reports',
    description: 'AI-guided readings for self-discovery.',
    url: '/products/rbw-meta',
    images: ['/og.svg'],
  },
};

export default function RbwMetaPage() {
  return (
    <>
      <PageView event="product_landing_viewed" properties={{ product: PRODUCT_ID }} />

      <section className="hero" id="start">
        <div className="container">
          <div className="kicker">
            <span className="eyebrow">RBW Meta</span>
            <Badge status={product.status}>{product.status}</Badge>
          </div>
          <h1>AI-Guided Readings for Self-Discovery</h1>
          <p className="lead" style={{ marginTop: 16 }}>
            Explore tarot, Eastern oracle wisdom, Zi Wei Dou Shu, relationship readings, career insights, and annual reports through structured AI-guided experiences.
          </p>
          <div className="cta-row">
            <Button href="#pricing" variant="primary"
              trackEventName="report_cta_clicked" trackProps={{ product: PRODUCT_ID, location: 'hero' }}>
              Try a Reading
            </Button>
            <Button href="#reports"
              trackEventName="cta_clicked" trackProps={{ cta: 'view_reports', product: PRODUCT_ID }}>
              View Reports
            </Button>
          </div>
        </div>
      </section>

      <section className="section" id="reports">
        <div className="container">
          <div className="kicker"><span className="eyebrow">Products</span></div>
          <h2>Six structured AI-guided experiences</h2>
          <FeatureGrid items={[
            { title: 'AI Tarot Reading', body: 'Card-by-card AI-guided interpretation.' },
            { title: 'Relationship Reading', body: 'Compatibility and communication insights.' },
            { title: 'Career Reading', body: 'Decision frameworks for work and direction.' },
            { title: 'Annual Fortune Report', body: 'Twelve-month structured outlook.' },
            { title: 'Zi Wei Dou Shu Report', body: 'Eastern astrology, modern AI explanations.' },
            { title: 'Eastern Oracle Quick Ask', body: 'One-question Xiao Liu Ren style answers.' },
          ]} />
        </div>
      </section>

      <section className="section" id="paid-reports" style={{ borderTop: '1px solid var(--border)' }}>
        <div className="container">
          <div className="kicker"><span className="eyebrow">Paid Reports</span></div>
          <h2>Not just chat. A real report.</h2>
          <FeatureGrid items={[
            { title: 'Beautiful Report', body: 'Design-led layout, not a chat log.' },
            { title: 'Save as PDF', body: 'Keep your reading forever.' },
            { title: 'Shareable Summary', body: 'Share insights, not raw chats.' },
            { title: 'Follow-up Questions', body: 'Ask deeper questions within the report.' },
            { title: 'Personal Archive', body: 'Revisit past readings anytime.' },
            { title: 'Multi-Tradition', body: 'Western tarot + Eastern oracle.' },
          ]} />
        </div>
      </section>

      <PricingCards productId={PRODUCT_ID} />

      <section className="section-sm">
        <div className="container">
          <DisclaimerBlock title="Disclaimer">
            RBW Meta is for entertainment, reflection, and self-discovery purposes only. It does not provide financial, legal, medical, or professional advice.
          </DisclaimerBlock>
        </div>
      </section>
    </>
  );
}
