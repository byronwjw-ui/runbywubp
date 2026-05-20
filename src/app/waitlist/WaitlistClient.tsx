'use client';

import { useSearchParams } from 'next/navigation';
import { WaitlistForm } from '@/components/marketing/WaitlistForm';

export function WaitlistClient() {
  const params = useSearchParams();
  return (
    <WaitlistForm
      defaultRole={params.get('role') || undefined}
      defaultProduct={params.get('product') || undefined}
      defaultCampaign={params.get('campaign') || undefined}
    />
  );
}
