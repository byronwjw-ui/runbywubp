import type { Metadata } from 'next';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { FeatureGrid } from '@/components/marketing/FeatureGrid';
import { SponsoredCardsSection } from '@/components/marketing/SponsoredCardsSection';
import { PricingCards } from '@/components/marketing/PricingCards';
import { DisclaimerBlock } from '@/components/marketing/DisclaimerBlock';
import { PageView } from '@/components/marketing/PageView';
import { getProduct } from '@/config/products';

const PRODUCT_ID = 'vibe-party';
const product = getProduct(PRODUCT_ID)!;

export const metadata: Metadata = {
  title: 'Vibe Party | Free AI-Powered Party Games and Icebreakers',
  description:
    'Vibe Party offers 32 creative party games for house parties, bars, team building, student clubs, and online communities. Free to use with sponsored interactive cards.',
  keywords: product.keywords,
  alternates: { canonical: '/products/vibe-party' },
  openGraph: {
    title: 'Vibe Party | Free AI-Powered Party Games',
    description: 'Turn any room into an interactive game night with 32 AI-powered party games.',
    url: '/products/vibe-party',
    images: ['/og.svg'],
  },
};

export default function VibePartyPage() {
  return (
    <>
      <PageView event="product_landing_viewed" properties={{ product: PRODUCT_ID }} />

      <section className="hero" id="start">
        <div className="container">
          <div className="kicker">
            <span className="eyebrow">Vibe Party</span>
            <Badge status={product.status}>{product.status}</Badge>
          </div>
          <h1>Turn Any Party Into an Interactive Game Night</h1>
          <p className="lead" style={{ marginTop: 16 }}>
            Vibe Party offers 32 creative party games for house parties, bars, team building, student clubs, and online communities.
          </p>
          <div className="cta-row">
            <Button href="#pricing" variant="primary"
              trackEventName="vibe_party_started" trackProps={{ location: 'hero' }}>
              Start a Free Party
            </Button>
            <Button href="#features"
              trackEventName="cta_clicked" trackProps={{ cta: 'view_game_modes', product: PRODUCT_ID }}>
              View Game Modes
            </Button>
          </div>
        </div>
      </section>

      <section className="section" id="use-cases">
        <div className="container">
          <div className="kicker"><span className="eyebrow">Use Cases</span></div>
          <h2>Built for every kind of gathering</h2>
          <div className="use-cases" style={{ marginTop: 24 }}>
            {[
              ['House Party', 'Friends, drinks, and laughter.'],
              ['Bar Event', 'Big-screen mode for venues.'],
              ['Team Building', 'Icebreakers that actually work.'],
              ['Birthday Party', 'Memorable moments on demand.'],
              ['Student Club', 'Campus-friendly content packs.'],
              ['Online Community', 'Remote-friendly room codes.'],
              ['Dating Event', 'Light, structured social play.'],
              ['Corporate Icebreaker', 'HR-approved prompt packs.'],
            ].map(([title, body]) => (
              <div className="use-case" key={title}>
                <strong>{title}</strong>
                <span>{body}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section" id="features" style={{ borderTop: '1px solid var(--border)' }}>
        <div className="container">
          <div className="kicker"><span className="eyebrow">Game Features</span></div>
          <h2>Everything a great host needs</h2>
          <FeatureGrid items={[
            { title: 'Room Code', body: 'Friends join with a 4-letter code.' },
            { title: 'QR Join', body: 'One scan, instant entry.' },
            { title: 'Host Mode', body: 'Control prompts, scoring, and pace.' },
            { title: 'Big Screen Mode', body: 'Optimized for TVs and projectors.' },
            { title: 'Scoreboard', body: 'Team and individual scoring.' },
            { title: 'Random Prompts', body: 'AI-generated, never-repeating.' },
            { title: 'Team Mode', body: 'Mix groups dynamically.' },
            { title: 'Sponsored Interactive Cards', body: 'Cross-product content from the RBW family.' },
          ]} />
        </div>
      </section>

      <SponsoredCardsSection source={PRODUCT_ID} />

      <section className="section" id="b2b" style={{ borderTop: '1px solid var(--border)' }}>
        <div className="container">
          <div className="kicker"><span className="eyebrow">For Business</span></div>
          <h2>For Bars, HR Teams, Event Organizers, and Entertainment Venues</h2>
          <FeatureGrid items={[
            { title: 'Custom Games', body: 'Tailor prompt packs for your audience.' },
            { title: 'Branded Room', body: 'Your colors, your logo.' },
            { title: 'Company Logo', body: 'Branded host UI.' },
            { title: 'Event Dashboard', body: 'Track attendance and engagement.' },
            { title: 'Private Game Packs', body: 'NDA-friendly content.' },
            { title: 'Team-Building Templates', body: 'HR-ready sessions.' },
          ]} />
        </div>
      </section>

      <PricingCards productId={PRODUCT_ID} />

      <section className="section-sm">
        <div className="container">
          <DisclaimerBlock title="User responsibility">
            Vibe Party is intended for adult social entertainment. Hosts and venues are responsible for following local laws and venue rules.
          </DisclaimerBlock>
        </div>
      </section>
    </>
  );
}
