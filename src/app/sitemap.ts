import type { MetadataRoute } from 'next';
import { SITE } from '@/config/site';
import { PRODUCTS } from '@/config/products';

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const base = SITE.url;
  const staticPaths = ['/', '/privacy', '/terms', '/disclaimer'];
  const productPaths = PRODUCTS.map((p) => p.href);
  return [...staticPaths, ...productPaths].map((path) => ({
    url: `${base}${path}`,
    lastModified: now,
    changeFrequency: 'weekly' as const,
    priority: path === '/' ? 1 : 0.7,
  }));
}
