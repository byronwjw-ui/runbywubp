'use client';

import { useEffect } from 'react';
import { trackEvent, type AnalyticsEvent } from '@/lib/analytics';

export function PageView({
  event,
  properties,
}: {
  event: AnalyticsEvent | string;
  properties?: Record<string, unknown>;
}) {
  useEffect(() => {
    trackEvent(event, properties || {});
  }, [event, properties]);
  return null;
}
