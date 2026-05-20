import Link from 'next/link';
import { FOOTER_NAV } from '@/config/navigation';
import { SITE } from '@/config/site';

export function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div>
            <div className="logo" style={{ marginBottom: 12 }}>
              <span className="logo-dot" />RBW
            </div>
            <p style={{ maxWidth: 320 }}>{SITE.brand.mission}</p>
            <p style={{ marginTop: 12, color: 'var(--fg-dim)' }}>
              <em>{SITE.brand.positioning}</em>
            </p>
          </div>
          <div>
            <h4>Company</h4>
            <ul>
              {FOOTER_NAV.company.map((i) => (
                <li key={i.href}><Link href={i.href}>{i.label}</Link></li>
              ))}
            </ul>
          </div>
          <div>
            <h4>Products</h4>
            <ul>
              {FOOTER_NAV.products.map((i) => (
                <li key={i.href}><Link href={i.href}>{i.label}</Link></li>
              ))}
            </ul>
          </div>
          <div>
            <h4>Legal</h4>
            <ul>
              {FOOTER_NAV.legal.map((i) => (
                <li key={i.href}><Link href={i.href}>{i.label}</Link></li>
              ))}
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} {SITE.legalName}. All rights reserved.</span>
          <span>RBW Meta is for entertainment only. Acu Map is educational, not medical advice.</span>
        </div>
      </div>
    </footer>
  );
}
