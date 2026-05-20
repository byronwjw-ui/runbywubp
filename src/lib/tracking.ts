export type TrackingParams = {
  source?: string;
  campaign?: string;
  placement?: string;
  product?: string;
};

/**
 * Build a URL with tracking parameters appended.
 * - Works for both absolute (https://...) and relative (/products/...) URLs.
 * - Skips undefined values.
 */
export function buildTrackingUrl(baseUrl: string, params: TrackingParams = {}): string {
  const isAbsolute = /^https?:\/\//i.test(baseUrl);
  const url = isAbsolute
    ? new URL(baseUrl)
    : new URL(baseUrl, 'https://placeholder.local');

  Object.entries(params).forEach(([key, value]) => {
    if (value === undefined || value === null || value === '') return;
    url.searchParams.set(key, String(value));
  });

  if (isAbsolute) return url.toString();
  return url.pathname + (url.search ? url.search : '') + (url.hash || '');
}
