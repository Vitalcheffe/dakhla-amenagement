'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { ScrollReveal } from './Animations';

interface PageHeroProps {
  title: string;
  subtitle: string;
  image?: string;
}

export function PageHero({ title, subtitle, image }: PageHeroProps) {
  return (
    <section className="relative bg-anthracite text-white py-20 lg:py-32 overflow-hidden">
      {image ? (
        <>
          <div className="absolute inset-0">
            <Image
              src={image}
              alt=""
              fill
              className="object-cover opacity-30 ken-burns"
              aria-hidden="true"
              priority
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-b from-anthracite/80 via-anthracite/60 to-anthracite/90" />
        </>
      ) : (
        <div className="absolute inset-0 bg-gradient-to-br from-anthracite via-anthracite/95 to-acier/80" />
      )}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-tight">
            {title}
          </h1>
          <p className="mt-6 text-lg lg:text-xl text-white/70 max-w-2xl leading-relaxed">
            {subtitle}
          </p>
        </ScrollReveal>
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: 64 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-8 h-1 bg-bleu-ocean rounded-full"
        />
      </div>
    </section>
  );
}
