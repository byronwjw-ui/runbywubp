import type { Metadata } from 'next';
import './globals.css';
import { SITE } from '@/config/site';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: 'RBW | AI-Guided Experiences for Play, Wellness, Self-Discovery and Learning',
    template: '%s | RBW',
  },
  description: SITE.brand.mission,
  keywords: [
    'RBW',
    'AI experiences',
    'AI tarot',
    'party games',
    'rubiks cube',
    'acupoint',
    'traditional Chinese wellness',
    'self-discovery',
  ],
  openGraph: {
    type: 'website',
    siteName: 'RBW',
    title: 'RBW | AI-Guided Experiences',
    description: SITE.brand.mission,
    url: SITE.url,
    images: ['/og.svg'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'RBW | AI-Guided Experiences',
    description: SITE.brand.mission,
    images: ['/og.svg'],
  },
  alternates: { canonical: SITE.url },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
