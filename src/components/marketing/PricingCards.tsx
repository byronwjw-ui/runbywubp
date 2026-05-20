import { PRICING } from '@/config/pricing';
import { Button } from '@/components/ui/Button';

export function PricingCards({ productId }: { productId: string }) {
  const data = PRICING[productId];
  if (!data) return null;
  return (
    <section className="section" id="pricing">
      <div className="container">
        <div className="kicker"><span className="eyebrow">Pricing</span></div>
        <h2>Simple, scalable pricing</h2>
        {data.note && <p className="lead">{data.note}</p>}
        <div className="pricing-grid" style={{ marginTop: 32 }}>
          {data.tiers.map((t) => (
            <div key={t.id} className={`card tier ${t.highlighted ? 'highlighted' : ''}`}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <h3 style={{ margin: 0 }}>{t.name}</h3>
                {t.comingSoon && <span className="badge badge-soon">Soon</span>}
              </div>
              <div>
                <span className="price">{t.price}</span>
                {t.period && <span className="period">{t.period}</span>}
              </div>
              <p style={{ margin: '4px 0 0' }}>{t.description}</p>
              <ul>{t.features.map((f) => <li key={f}>{f}</li>)}</ul>
              <Button
                href={t.ctaHref}
                variant={t.highlighted ? 'primary' : 'default'}
                block
                trackEventName="pricing_cta_clicked"
                trackProps={{ product: productId, tier: t.id }}
              >
                {t.ctaLabel}
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
