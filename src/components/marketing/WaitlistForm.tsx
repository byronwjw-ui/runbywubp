'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/Button';
import { trackEvent } from '@/lib/analytics';
import { PRODUCTS } from '@/config/products';

const ROLES = [
  { value: 'user', label: 'User' },
  { value: 'investor', label: 'Investor' },
  { value: 'venue', label: 'Venue Owner' },
  { value: 'hr', label: 'HR / Team Leader' },
  { value: 'expert', label: 'TCM Expert' },
  { value: 'educator', label: 'Educator' },
  { value: 'partner', label: 'Partner' },
];

export function WaitlistForm({
  defaultRole,
  defaultProduct,
  defaultCampaign,
}: {
  defaultRole?: string;
  defaultProduct?: string;
  defaultCampaign?: string;
}) {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('submitting');
    setError(null);

    const fd = new FormData(e.currentTarget);
    const data = Object.fromEntries(fd.entries());

    trackEvent('waitlist_submitted', { ...data });

    try {
      const res = await fetch('/api/waitlist', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error('Request failed');
      trackEvent('waitlist_success', { ...data });
      setStatus('success');
      (e.target as HTMLFormElement).reset();
    } catch (err) {
      setError('Something went wrong. Please try again later.');
      setStatus('error');
    }
  };

  if (status === 'success') {
    return (
      <div className="note">
        <strong style={{ display: 'block', marginBottom: 4 }}>Thanks.</strong>
        The RBW team will contact you soon.
      </div>
    );
  }

  return (
    <form className="form" onSubmit={handleSubmit}>
      <div className="field">
        <label htmlFor="name">Name</label>
        <input id="name" name="name" required placeholder="Your name" />
      </div>
      <div className="field">
        <label htmlFor="email">Email</label>
        <input id="email" name="email" type="email" required placeholder="you@example.com" />
      </div>
      <div className="field">
        <label htmlFor="interestedProduct">Interested product</label>
        <select id="interestedProduct" name="interestedProduct" defaultValue={defaultProduct || ''}>
          <option value="">Any / Not sure</option>
          {PRODUCTS.map((p) => <option key={p.id} value={p.id}>{p.name}</option>)}
        </select>
      </div>
      <div className="field">
        <label htmlFor="role">Role</label>
        <select id="role" name="role" defaultValue={defaultRole || 'user'}>
          {ROLES.map((r) => <option key={r.value} value={r.value}>{r.label}</option>)}
        </select>
      </div>
      <div className="field">
        <label htmlFor="message">Message (optional)</label>
        <textarea id="message" name="message" placeholder="Tell us anything that helps." />
      </div>
      <input type="hidden" name="campaign" defaultValue={defaultCampaign || ''} />
      {error && <div className="note danger">{error}</div>}
      <Button type="submit" variant="primary" block
        trackEventName="cta_clicked" trackProps={{ cta: 'waitlist_submit' }}>
        {status === 'submitting' ? 'Submitting…' : 'Join Waitlist'}
      </Button>
      <p style={{ fontSize: 12, color: 'var(--fg-dim)', margin: 0 }}>
        By submitting, you agree to our <a href="/privacy" style={{ color: 'var(--fg-muted)', textDecoration: 'underline' }}>Privacy Policy</a>.
      </p>
    </form>
  );
}
