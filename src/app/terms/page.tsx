import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms of Service',
  description: 'Terms governing the use of RBW products.',
  alternates: { canonical: '/terms' },
};

export default function TermsPage() {
  return (
    <section className="section">
      <div className="container" style={{ maxWidth: 800 }}>
        <div className="kicker"><span className="eyebrow">Legal</span></div>
        <h1>Terms of Service</h1>
        <p>This is a phase-1 placeholder. The full terms will be published before the global launch.</p>
        <hr className="divider" />
        <h3>Acceptable use</h3>
        <p>You agree to use RBW products lawfully and respect other users and venues.</p>
        <h3>Content</h3>
        <p>AI-generated content is provided for entertainment, reflection, education, or skill learning purposes only.</p>
        <h3>No professional advice</h3>
        <p>Nothing in RBW products constitutes medical, financial, legal, or professional advice.</p>
        <h3>Payments</h3>
        <p>Phase-1 pricing is shown for reference. Paid subscriptions will be governed by additional terms at checkout.</p>
        <h3>Termination</h3>
        <p>We may suspend or terminate access for violations of these terms.</p>
        <h3>Disclaimers and liability</h3>
        <p>Services are provided “as is.” To the maximum extent permitted by law, RBW disclaims warranties and limits liability.</p>
      </div>
    </section>
  );
}
