'use client';

import Link from 'next/link';
import { useEffect, useRef } from 'react';
import type { CrossPromotion } from '@/config/crossPromotions';
import { getProduct } from '@/config/products';
import { trackEvent } from '@/lib/analytics';
import { buildTrackingUrl } from '@/lib/tracking';

export function CrossPromoCard({ promo }: { promo: CrossPromotion }) {
  const ref = useRef<HTMLAnchorElement | null>(null);
  const target = getProduct(promo.targetProduct);

  const href = buildTrackingUrl(promo.href, {
    source: promo.sourceProduct,
    campaign: promo.campaign,
    placement: promo.placement,
    product: promo.targetProduct,
  });

  useEffect(() => {
    // "Viewed" event fires once on mount when the card enters the DOM.
    trackEvent('sponsored_card_viewed', {
      id: promo.id,
      source: promo.sourceProduct,
      target: promo.targetProduct,
      placement: promo.placement,
      campaign: promo.campaign,
    });
  }, [promo]);

  const onClick = () => {
    trackEvent('sponsored_card_clicked', {
      id: promo.id,
      source: promo.sourceProduct,
      target: promo.targetProduct,
      placement: promo.placement,
      campaign: promo.campaign,
    });
  };

  const bg = target
    ? `linear-gradient(135deg, ${target.color.from}, ${target.color.to})`
    : 'linear-gradient(135deg, #6D5BFF, #3A8DFF)';

  return (
    <Link ref={ref} href={href} className="promo" onClick={onClick}>
      <div className="icon" style={{ background: bg }} />
      <div className="meta">
        <h4>{promo.title}</h4>
        <p>{promo.description}</p>
        <span style={{ color: 'var(--accent)', fontWeight: 600, fontSize: 14 }}>
          {promo.ctaLabel} →
        </span>
      </div>
    </Link>
  );
}
