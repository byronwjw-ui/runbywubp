import { EN } from '@/content/en';
import { Button } from '@/components/ui/Button';

export function Hero() {
  return (
    <section className="hero">
      <div className="container">
        <div className="kicker">
          <span className="eyebrow">RBW — AI Experience Engine</span>
        </div>
        <h1>{EN.hero.title}</h1>
        <p className="lead" style={{ marginTop: 16 }}>{EN.hero.subtitle}</p>
        <div className="cta-row">
          <Button href="/#products" variant="primary"
            trackEventName="cta_clicked" trackProps={{ cta: 'explore_products', location: 'hero' }}>
            {EN.hero.primaryCta}
          </Button>
          <Button href="/products/vibe-party"
            trackEventName="product_card_clicked" trackProps={{ product: 'vibe-party', location: 'hero' }}>
            {EN.hero.secondaryCta}
          </Button>
          <Button href="/products/rbw-meta" variant="ghost"
            trackEventName="product_card_clicked" trackProps={{ product: 'rbw-meta', location: 'hero' }}>
            {EN.hero.tertiaryCta}
          </Button>
        </div>
      </div>
    </section>
  );
}
