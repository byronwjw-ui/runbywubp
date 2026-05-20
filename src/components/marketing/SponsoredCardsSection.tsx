import { promosForSource } from '@/config/crossPromotions';
import { CrossPromoCard } from './CrossPromoCard';

export function SponsoredCardsSection({ source }: { source: string }) {
  const promos = promosForSource(source);
  if (!promos.length) return null;
  return (
    <section className="section" id="sponsored" style={{ borderTop: '1px solid var(--border)' }}>
      <div className="container">
        <div className="kicker"><span className="eyebrow">Sponsored Cards</span></div>
        <h2>Free to play. Powered by the RBW family.</h2>
        <p className="lead">
          Vibe Party can be used for free with interactive sponsored cards from the RBW product family.
          These cards are designed as part of the experience, not disruptive ads.
        </p>
        <div className="grid grid-2" style={{ marginTop: 32 }}>
          {promos.map((p) => <CrossPromoCard key={p.id} promo={p} />)}
        </div>
      </div>
    </section>
  );
}
