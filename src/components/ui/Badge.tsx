import * as React from 'react';
import type { ProductStatus } from '@/config/products';

export function Badge({
  children,
  status,
  className = '',
}: {
  children: React.ReactNode;
  status?: ProductStatus;
  className?: string;
}) {
  const cls =
    status === 'live' ? 'badge badge-live'
    : status === 'beta' ? 'badge badge-beta'
    : status === 'coming-soon' ? 'badge badge-soon'
    : 'badge';
  return <span className={`${cls} ${className}`}>{children}</span>;
}
