import { EN } from '@/content/en';
import { Button } from '@/components/ui/Button';

export function InvestorSection() {
  return (
    <section className="section" id="investor">
      <div className="container">
        <div className="kicker"><span className="eyebrow">{EN.investor.eyebrow}</span></div>
        <h2>{EN.investor.title}</h2>
        <div className="grid grid-2" style={{ marginTop: 24, alignItems: 'start' }}>
          <ul className="checklist">
            {EN.investor.points.map((p) => <li key={p}>{p}</li>)}
          </ul>
          <div className="card">
            <h3>Talk to RBW</h3>
            <p>Investor, partner, venue, expert, or educator — we want to hear from you.</p>
            <div className="cta-row" style={{ marginTop: 12 }}>
              <Button href="/waitlist?role=investor" variant="primary"
                trackEventName="cta_clicked" trackProps={{ cta: 'contact_rbw', location: 'investor' }}>
                {EN.investor.ctaPrimary}
              </Button>
              <Button href="/waitlist?role=partner"
                trackEventName="cta_clicked" trackProps={{ cta: 'partner', location: 'investor' }}>
                {EN.investor.ctaSecondary}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
