import Link from 'next/link';
import { PRIMARY_NAV } from '@/config/navigation';

export function Header() {
  return (
    <header className="header">
      <div className="container header-inner">
        <Link href="/" className="logo" aria-label="RBW Home">
          <span className="logo-dot" />RBW
        </Link>
        <nav className="nav" aria-label="Primary">
          {PRIMARY_NAV.map((item) => (
            <Link key={item.href} href={item.href}>{item.label}</Link>
          ))}
        </nav>
        <Link href="/waitlist" className="btn btn-primary" style={{ padding: '8px 16px' }}>
          Get Updates
        </Link>
      </div>
    </header>
  );
}
