'use client';

import { motion } from 'framer-motion';
import { ScrollReveal } from './Animations';

interface PageHeroProps {
  title: string;
  subtitle: string;
  sectionCounter?: string;
}

export function PageHero({ title, subtitle, sectionCounter }: PageHeroProps) {
  return (
    <section className="relative bg-white text-[#1A1A2E] pt-24 md:pt-32 pb-16 md:pb-20 overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: `radial-gradient(circle at 1px 1px, #1B3A5C 1px, transparent 0)`,
        backgroundSize: '40px 40px'
      }} />
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 relative z-10">
        {/* Section counter */}
        {sectionCounter && (
          <span className="section-counter mb-6 block">{sectionCounter}</span>
        )}
        <ScrollReveal>
          <h1 className="text-[clamp(2rem,5vw,3.5rem)] font-bold tracking-[-0.02em] leading-[1.1] max-w-4xl text-[#1B3A5C] heading-accent">
            {title}
          </h1>
        </ScrollReveal>
        {subtitle && (
          <ScrollReveal delay={0.1}>
            <p className="mt-8 text-[clamp(1rem,1.5vw,1.25rem)] text-[#6B7280] max-w-2xl leading-relaxed">
              {subtitle}
            </p>
          </ScrollReveal>
        )}
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: 80 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-8 h-[3px] bg-gradient-to-r from-[#1B3A5C] via-[#E8B84B] to-[#C1272D] rounded-full"
        />
      </div>
    </section>
  );
}
