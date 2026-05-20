import type { Metadata } from 'next';
import { Suspense } from 'react';
import { WaitlistClient } from './WaitlistClient';

export const metadata: Metadata = {
  title: 'Join the RBW Waitlist',
  description: 'Get early access, partner with RBW, or contact the team.',
  alternates: { canonical: '/waitlist' },
  robots: { index: false, follow: true },
};

export default function WaitlistPage() {
  return (
    <section className="section">
      <div className="container" style={{ maxWidth: 760 }}>
        <div className="kicker"><span className="eyebrow">Waitlist · Contact</span></div>
        <h1>Get early access. Or just say hi.</h1>
        <p className="lead">
          Users, investors, venues, HR teams, TCM experts, educators, and partners — we’d love to hear from you.
        </p>
        <div style={{ marginTop: 32 }}>
          <Suspense fallback={null}>
            <WaitlistClient />
          </Suspense>
        </div>
      </div>
    </section>
  );
}
