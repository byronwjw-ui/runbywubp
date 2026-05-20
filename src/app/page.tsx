import { Hero } from '@/components/marketing/Hero';
import { ProductMatrix } from '@/components/marketing/ProductMatrix';
import { EngineSection } from '@/components/marketing/EngineSection';
import { WhyNow } from '@/components/marketing/WhyNow';
import { GrowthLoop } from '@/components/marketing/GrowthLoop';
import { InvestorSection } from '@/components/marketing/InvestorSection';
import { PageView } from '@/components/marketing/PageView';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'RBW | AI-Guided Experiences for Play, Wellness, Self-Discovery and Learning',
  description:
    'RBW builds AI-guided experiences across play, self-discovery, wellness education, and skill learning. Separate products, unified engine.',
  alternates: { canonical: '/' },
};

export default function HomePage() {
  return (
    <>
      <PageView event="homepage_viewed" />
      <Hero />
      <ProductMatrix />
      <EngineSection />
      <WhyNow />
      <GrowthLoop />
      <InvestorSection />
    </>
  );
}
