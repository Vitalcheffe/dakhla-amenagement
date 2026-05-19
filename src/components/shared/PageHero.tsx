'use client';

import Image from 'next/image';
import { FadeIn } from './Animations';

interface PageHeroProps {
  title: string;
  subtitle: string;
  image?: string;
}

export function PageHero({ title, subtitle, image }: PageHeroProps) {
  return (
    <section className="relative bg-navy text-white py-16 lg:py-24 overflow-hidden">
      {image ? (
        <>
          <div className="absolute inset-0">
            <Image
              src={image}
              alt=""
              fill
              className="object-cover opacity-30"
              aria-hidden="true"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-br from-navy/90 via-navy/80 to-steel/70" />
        </>
      ) : null}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">{title}</h1>
          <p className="mt-4 text-lg text-white/70 max-w-2xl">{subtitle}</p>
        </FadeIn>
        <div className="mt-6 w-16 h-1 bg-steel rounded-full" />
      </div>
    </section>
  );
}
