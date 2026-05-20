import Link from 'next/link';

export default function NotFound() {
  return (
    <section className="section">
      <div className="container" style={{ maxWidth: 640, textAlign: 'center' }}>
        <div className="kicker" style={{ justifyContent: 'center' }}>
          <span className="eyebrow">404</span>
        </div>
        <h1>Page not found</h1>
        <p className="lead" style={{ margin: '0 auto' }}>
          The page you’re looking for doesn’t exist. Try the homepage or one of our products.
        </p>
        <div className="cta-row" style={{ justifyContent: 'center', marginTop: 24 }}>
          <Link href="/" className="btn btn-primary">Go Home</Link>
          <Link href="/products/vibe-party" className="btn">Vibe Party</Link>
          <Link href="/products/rbw-meta" className="btn">RBW Meta</Link>
        </div>
      </div>
    </section>
  );
}
