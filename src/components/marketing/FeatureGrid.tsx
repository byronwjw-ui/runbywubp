import * as React from 'react';

export function FeatureGrid({ items }: { items: { title: string; body?: string }[] }) {
  return (
    <div className="engine-grid">
      {items.map((i) => (
        <div key={i.title} className="engine-cell">
          <h4>{i.title}</h4>
          {i.body && <p>{i.body}</p>}
        </div>
      ))}
    </div>
  );
}
