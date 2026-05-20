import type { Metadata } from 'next';
import { DisclaimerBlock } from '@/components/marketing/DisclaimerBlock';

export const metadata: Metadata = {
  title: 'Disclaimer',
  description: 'Important disclaimers for RBW Meta, Acu Map, Magic Cube, and Vibe Party.',
  alternates: { canonical: '/disclaimer' },
};

export default function DisclaimerPage() {
  return (
    <section className="section">
      <div className="container" style={{ maxWidth: 800 }}>
        <div className="kicker"><span className="eyebrow">Legal</span></div>
        <h1>Disclaimer</h1>
        <p className="lead">Each RBW product is purpose-built. Please review the disclaimer relevant to each product.</p>

        <div style={{ display: 'grid', gap: 16, marginTop: 24 }}>
          <DisclaimerBlock title="RBW Meta">
            RBW Meta is for entertainment, reflection, and self-discovery purposes only. It does not provide financial, legal, medical, or professional advice.
          </DisclaimerBlock>

          <DisclaimerBlock variant="danger" title="Acu Map">
            Acu Map is for educational and wellness learning purposes only. It is not medical advice, diagnosis, or treatment. Users should consult qualified healthcare professionals for medical conditions.
          </DisclaimerBlock>

          <DisclaimerBlock title="Magic Cube">
            Magic Cube is an educational tool only.
          </DisclaimerBlock>

          <DisclaimerBlock title="Vibe Party">
            User-generated event use should follow local laws and venue rules.
          </DisclaimerBlock>
        </div>
      </div>
    </section>
  );
}
