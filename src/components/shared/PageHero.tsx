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
    <section className="relative bg-white text-[#0A0A0A] pt-24 md:pt-32 pb-16 md:pb-20 overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        {/* Section counter */}
        {sectionCounter && (
          <span className="section-counter mb-6 block">{sectionCounter}</span>
        )}
        <ScrollReveal>
          <h1 className="text-[clamp(2rem,5vw,3.5rem)] font-bold tracking-[-0.02em] leading-[1.1] max-w-4xl">
            {title}
          </h1>
        </ScrollReveal>
        {subtitle && (
          <ScrollReveal delay={0.1}>
            <p className="mt-6 text-[clamp(1rem,1.5vw,1.25rem)] text-black/50 max-w-2xl leading-relaxed">
              {subtitle}
            </p>
          </ScrollReveal>
        )}
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: 64 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-8 h-[2px] bg-[#0A0A0A] rounded-full"
        />
      </div>
    </section>
  );
}
