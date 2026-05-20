'use client';

import Link from 'next/link';
import type { Product } from '@/config/products';
import { Badge } from '@/components/ui/Badge';
import { trackEvent } from '@/lib/analytics';

export function ProductCard({ product }: { product: Product }) {
  const onClick = () => trackEvent('product_card_clicked', { product: product.id, location: 'matrix' });
  return (
    <Link href={product.href} className="card product-card" onClick={onClick}>
      <div className="swatch" style={{ background: `linear-gradient(135deg, ${product.color.from}, ${product.color.to})` }} />
      <h3>
        {product.name}
        <Badge status={product.status}>{product.status}</Badge>
      </h3>
      <p className="desc">{product.description}</p>
      <div className="row">
        <div className="tags">
          {product.keywords.slice(0, 2).map((k) => (
            <span key={k} className="badge">{k}</span>
          ))}
        </div>
        <span style={{ color: 'var(--accent)', fontSize: 14, fontWeight: 600 }}>
          {product.ctaLabel} →
        </span>
      </div>
    </Link>
  );
}
