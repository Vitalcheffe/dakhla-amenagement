'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import { useParams } from 'next/navigation';
import { Star, Quote, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { PageHero } from '@/components/shared/PageHero';
import { ScrollReveal } from '@/components/shared/Animations';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

type FilterType = 'all' | 'builder' | 'civil' | 'reseller' | 'architect' | 'individual';

const filterKeys: FilterType[] = ['all', 'builder', 'civil', 'reseller', 'architect', 'individual'];
const testimonialKeys = ['t1', 't2', 't3', 't4', 't5', 't6', 't7', 't8'];

const typeColors: Record<string, string> = {
  builder: 'bg-[#1B3A5C]/10 text-[#1B3A5C]',
  civil: 'bg-[#C1272D]/10 text-[#C1272D]',
  reseller: 'bg-[#E8B84B]/15 text-[#B8960D]',
  architect: 'bg-purple-500/10 text-purple-700',
  individual: 'bg-emerald-500/10 text-emerald-700',
};

export default function TestimonialsPage() {
  const t = useTranslations('testimonials');
  const params = useParams();
  const locale = (params?.locale as string) || 'fr';
  const [activeFilter, setActiveFilter] = useState<FilterType>('all');

  // Build testimonial items from translations
  const allItems = testimonialKeys.map((key) => ({
    key,
    name: t(`items.${key}.name`),
    role: t(`items.${key}.role`),
    company: t(`items.${key}.company`),
    type: t(`items.${key}.type`) as string,
    stars: Number(t(`items.${key}.stars`)),
    text: t(`items.${key}.text`),
  }));

  const filteredItems = activeFilter === 'all'
    ? allItems
    : allItems.filter((item) => item.type === activeFilter);

  const featured = allItems[0]; // First testimonial as featured

  return (
    <>
      <PageHero title={t('title')} subtitle={t('subtitle')} sectionCounter="/12" />

      {/* Section 1: Featured Testimonial */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <ScrollReveal>
            <div className="relative bg-[#1B3A5C] text-white rounded-2xl md:rounded-3xl p-8 md:p-12 lg:p-16 overflow-hidden">
              {/* Decorative quote marks */}
              <Quote className="absolute top-6 left-6 md:top-8 md:left-8 w-16 h-16 md:w-24 md:h-24 text-[#E8B84B]/20 fill-[#E8B84B]/10" />
              <Quote className="absolute bottom-6 right-6 md:bottom-8 md:right-8 w-16 h-16 md:w-24 md:h-24 text-[#E8B84B]/20 fill-[#E8B84B]/10 rotate-180" />

              {/* Decorative circles */}
              <div className="absolute -top-20 -right-20 w-60 h-60 bg-[#E8B84B]/5 rounded-full" />
              <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-[#E8B84B]/5 rounded-full" />

              <div className="relative z-10 max-w-3xl mx-auto text-center">
                {/* Large decorative gold quote */}
                <div className="mb-8">
                  <Quote className="w-12 h-12 md:w-16 md:h-16 text-[#E8B84B] mx-auto fill-[#E8B84B]" />
                </div>

                {/* Star rating */}
                <div className="flex justify-center gap-1 mb-6">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className={`w-5 h-5 md:w-6 md:h-6 ${
                        i < featured.stars
                          ? 'text-[#E8B84B] fill-[#E8B84B]'
                          : 'text-white/20 fill-white/10'
                      }`}
                    />
                  ))}
                </div>

                {/* Quote text */}
                <blockquote className="text-lg md:text-xl lg:text-2xl leading-relaxed font-light italic mb-8 text-white/90">
                  &ldquo;{featured.text}&rdquo;
                </blockquote>

                {/* Divider */}
                <div className="w-16 h-[2px] bg-[#E8B84B] mx-auto mb-6" />

                {/* Author info */}
                <div>
                  <p className="text-lg font-semibold text-white">{featured.name}</p>
                  <p className="text-white/70 text-sm mt-1">{featured.role}</p>
                  {featured.company && (
                    <p className="text-[#E8B84B] text-sm mt-1 font-medium">{featured.company}</p>
                  )}
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Section 2: All Testimonials with Filters */}
      <section className="py-16 md:py-24 bg-[#F7F8FA]">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          {/* Filter Tabs */}
          <ScrollReveal>
            <div className="flex gap-3 overflow-x-auto pb-4 mb-12 scrollbar-hide -mx-6 px-6 md:mx-0 md:px-0">
              {filterKeys.map((filter) => (
                <button
                  key={filter}
                  onClick={() => setActiveFilter(filter)}
                  className={`px-5 py-2.5 text-sm font-medium rounded-full whitespace-nowrap transition-colors ${
                    activeFilter === filter
                      ? 'bg-[#1B3A5C] text-white'
                      : 'bg-white text-[#1B3A5C] hover:bg-[#1B3A5C] hover:text-white border border-[#E5E7EB]'
                  }`}
                >
                  {t(`filters.${filter}`)}
                </button>
              ))}
            </div>
          </ScrollReveal>

          {/* Testimonial Cards Grid */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeFilter}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {filteredItems.map((item, index) => (
                <ScrollReveal key={item.key} delay={index * 0.05}>
                  <div className="bg-white border border-[#E5E7EB] rounded-2xl p-6 card-lift h-full flex flex-col">
                    {/* Star rating */}
                    <div className="flex gap-0.5 mb-4">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star
                          key={i}
                          className={`w-4 h-4 ${
                            i < item.stars
                              ? 'text-[#E8B84B] fill-[#E8B84B]'
                              : 'text-gray-200 fill-gray-100'
                          }`}
                        />
                      ))}
                    </div>

                    {/* Quote text */}
                    <p className="text-[#1A1A2E]/70 italic text-sm md:text-[15px] leading-relaxed flex-1 mb-5">
                      &ldquo;{item.text}&rdquo;
                    </p>

                    {/* Divider */}
                    <div className="w-full h-px bg-[#E5E7EB] mb-4" />

                    {/* Author info */}
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <p className="font-semibold text-[#1B3A5C] text-sm">{item.name}</p>
                        <p className="text-[#6B7280] text-xs mt-0.5">{item.role}</p>
                        {item.company && (
                          <p className="text-[#6B7280] text-xs mt-0.5">{item.company}</p>
                        )}
                      </div>
                      {/* Type badge */}
                      <span className={`px-3 py-1 rounded-full text-xs font-medium whitespace-nowrap ${typeColors[item.type] || 'bg-gray-100 text-gray-600'}`}>
                        {t(`filters.${item.type}`)}
                      </span>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* Section 3: CTA */}
      <section className="py-16 md:py-24 bg-[#C1272D]">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <ScrollReveal>
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                {t('cta.title')}
              </h2>
              <p className="text-white/80 mb-8 text-[15px] md:text-base leading-relaxed">
                {t('cta.subtitle')}
              </p>
              <Link href={`/${locale}/devis`}>
                <Button
                  className="bg-white text-[#C1272D] hover:bg-white/90 px-8 py-3 text-sm font-semibold rounded-full h-auto shadow-lg"
                  size="lg"
                >
                  {t('cta.button')}
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
