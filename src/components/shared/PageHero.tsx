'use client';

import { FadeIn } from './Animations';

interface PageHeroProps {
  title: string;
  subtitle: string;
}

export function PageHero({ title, subtitle }: PageHeroProps) {
  return (
    <section className="bg-navy text-white py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">{title}</h1>
          <p className="mt-4 text-lg text-white/70 max-w-2xl">{subtitle}</p>
        </FadeIn>
        <div className="mt-6 w-16 h-1 bg-steel rounded-full" />
      </div>
    </section>
  );
}
