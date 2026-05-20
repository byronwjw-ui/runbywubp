import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'How RBW collects, uses, and protects your information.',
  alternates: { canonical: '/privacy' },
};

export default function PrivacyPage() {
  return (
    <section className="section">
      <div className="container" style={{ maxWidth: 800 }}>
        <div className="kicker"><span className="eyebrow">Legal</span></div>
        <h1>Privacy Policy</h1>
        <p>This is a phase-1 placeholder. The full RBW privacy policy will be published before the global launch.</p>
        <hr className="divider" />
        <h3>What we collect</h3>
        <p>Information you submit (e.g. waitlist form), basic device data, and product usage analytics necessary to operate and improve our products.</p>
        <h3>How we use it</h3>
        <p>To operate, secure, and improve RBW products, to communicate with you, and to comply with applicable law.</p>
        <h3>Your choices</h3>
        <p>You can request access, deletion, or correction of your data by contacting <a href="/waitlist" style={{ textDecoration: 'underline' }}>the RBW team</a>.</p>
        <h3>Children</h3>
        <p>RBW services are not directed to children under 13 (or the equivalent age in your jurisdiction).</p>
        <h3>Contact</h3>
        <p>Privacy questions: please reach out through the waitlist contact page.</p>
      </div>
    </section>
  );
}
