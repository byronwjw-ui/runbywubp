import { EN } from '@/content/en';

export function GrowthLoop() {
  return (
    <section className="section" id="gtm" style={{ borderTop: '1px solid var(--border)' }}>
      <div className="container">
        <div className="kicker"><span className="eyebrow">{EN.gtm.eyebrow}</span></div>
        <h2>{EN.gtm.title}</h2>
        <p className="lead">A multi-product flywheel: group distribution → self-discovery monetization → wellness trust → subscription learning.</p>
        <div className="loop" style={{ marginTop: 32 }}>
          {EN.gtm.steps.map((s, i) => (
            <div className="loop-step" key={s}>
              <span className="num">{i + 1}</span>
              <span>{s}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
