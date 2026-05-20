'use client';

export type AnalyticsEvent =
  | 'homepage_viewed'
  | 'product_card_clicked'
  | 'product_landing_viewed'
  | 'vibe_party_started'
  | 'sponsored_card_viewed'
  | 'sponsored_card_clicked'
  | 'pricing_cta_clicked'
  | 'report_cta_clicked'
  | 'cube_challenge_clicked'
  | 'acu_map_cta_clicked'
  | 'waitlist_submitted'
  | 'waitlist_success'
  | 'cta_clicked';

export type AnalyticsProperties = Record<string, unknown>;

function hasProvider(name: 'gtag' | 'plausible' | 'posthog'): boolean {
  if (typeof window === 'undefined') return false;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return Boolean((window as any)[name]);
}

/**
 * trackEvent — phase 1 logs to console.
 * Wire any provider here without touching call sites.
 */
export function trackEvent(
  eventName: AnalyticsEvent | string,
  properties: AnalyticsProperties = {},
): void {
  const payload = { event: eventName, ts: Date.now(), ...properties };

  if (typeof window === 'undefined') {
    return;
  }

  if (process.env.NODE_ENV !== 'production') {
    // eslint-disable-next-line no-console
    console.log('[analytics]', payload);
  }

  try {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const w = window as any;
    if (hasProvider('gtag')) w.gtag('event', eventName, properties);
    if (hasProvider('plausible')) w.plausible(eventName, { props: properties });
    if (hasProvider('posthog')) w.posthog.capture(eventName, properties);
  } catch {
    /* ignore analytics failures */
  }
}

export function pageView(name: string, properties: AnalyticsProperties = {}) {
  trackEvent(name, { ...properties, page: typeof window !== 'undefined' ? window.location.pathname : '' });
}
