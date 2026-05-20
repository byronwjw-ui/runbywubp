import { EN } from '@/content/en';

export function EngineSection() {
  return (
    <section className="section" id="engine" style={{ borderTop: '1px solid var(--border)' }}>
      <div className="container">
        <div className="kicker"><span className="eyebrow">{EN.engine.eyebrow}</span></div>
        <h2>{EN.engine.title}</h2>
        <p className="lead">{EN.engine.subtitle}</p>
        <div className="engine-grid" style={{ marginTop: 32 }}>
          {EN.engine.capabilities.map((c) => (
            <div className="engine-cell" key={c.title}>
              <h4>{c.title}</h4>
              <p>{c.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
