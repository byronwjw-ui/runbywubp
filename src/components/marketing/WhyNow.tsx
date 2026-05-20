import { EN } from '@/content/en';

export function WhyNow() {
  return (
    <section className="section" id="why">
      <div className="container">
        <div className="kicker"><span className="eyebrow">{EN.why.eyebrow}</span></div>
        <h2>{EN.why.title}</h2>
        <ul className="checklist" style={{ marginTop: 24, maxWidth: 760 }}>
          {EN.why.points.map((p) => <li key={p}>{p}</li>)}
        </ul>
      </div>
    </section>
  );
}
