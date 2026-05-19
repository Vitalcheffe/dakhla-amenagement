'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import { useParams } from 'next/navigation';
import { Star, Quote, ArrowRight, Building2, Home, Truck, User, Filter } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { PageHero } from '@/components/shared/PageHero';
import { ScrollReveal, CountUp } from '@/components/shared/Animations';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

type FilterType = 'all' | 'promoteur' | 'entrepreneur' | 'revendeur' | 'particulier';

const filterKeys: FilterType[] = ['all', 'promoteur', 'entrepreneur', 'revendeur', 'particulier'];
const testimonialKeys = ['t1', 't2', 't3', 't4', 't5', 't6', 't7', 't8', 't9', 't10'];

const typeColors: Record<string, string> = {
  promoteur: 'bg-[#1B3A5C]/10 text-[#1B3A5C]',
  entrepreneur: 'bg-[#C1272D]/10 text-[#C1272D]',
  revendeur: 'bg-[#E8B84B]/15 text-[#B8960D]',
  particulier: 'bg-emerald-500/10 text-emerald-700',
};

const typeIcons: Record<string, React.ReactNode> = {
  promoteur: <Building2 className="w-3.5 h-3.5" />,
  entrepreneur: <Truck className="w-3.5 h-3.5" />,
  revendeur: <Home className="w-3.5 h-3.5" />,
  particulier: <User className="w-3.5 h-3.5" />,
};

const partnerLogos = [
  { name: 'Ould Ahmed Construction', short: 'OAC' },
  { name: 'Promo Dakhla', short: 'PD' },
  { name: 'BTP Sahara', short: 'BTP' },
  { name: 'Dia & Fils', short: 'DF' },
  { name: 'Cabinet Laurent', short: 'CL' },
  { name: 'Mokhtar BTP', short: 'MB' },
  { name: 'Taleb Construction', short: 'TC' },
  { name: 'Khatri Matériaux', short: 'KM' },
  { name: 'Ba & Associés', short: 'BA' },
  { name: 'PROVUD SA', short: 'PRV' },
  { name: 'El Amrani BTP', short: 'EA' },
  { name: 'Bensaid Ingénierie', short: 'BI' },
];

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

  return (
    <>
      <PageHero title={t('title')} subtitle={t('subtitle')} sectionCounter="/11" />

      {/* Stats Bar */}
      <section className="py-12 md:py-16 bg-[#1B3A5C]">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <ScrollReveal>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
              {/* Stat 1: Clients actifs */}
              <div className="text-center">
                <div className="text-[#E8B84B] text-3xl md:text-4xl font-bold mb-1">
                  +<CountUp end={120} duration={2} />
                </div>
                <p className="text-white/70 text-sm md:text-[15px]">{t('stats.clients')}</p>
              </div>
              {/* Stat 2: Note moyenne */}
              <div className="text-center">
                <div className="text-[#E8B84B] text-3xl md:text-4xl font-bold mb-1">
                  <CountUp end={4} duration={1.5} /><span className="text-[#E8B84B]">.8</span><span className="text-white/50 text-lg md:text-xl">/5</span>
                </div>
                <p className="text-white/70 text-sm md:text-[15px]">{t('stats.rating')}</p>
              </div>
              {/* Stat 3: Taux de satisfaction */}
              <div className="text-center">
                <div className="text-[#E8B84B] text-3xl md:text-4xl font-bold mb-1">
                  <CountUp end={98} duration={2} /><span className="text-[#E8B84B]">%</span>
                </div>
                <p className="text-white/70 text-sm md:text-[15px]">{t('stats.satisfaction')}</p>
              </div>
              {/* Stat 4: Années de confiance */}
              <div className="text-center">
                <div className="text-[#E8B84B] text-3xl md:text-4xl font-bold mb-1">
                  <CountUp end={10} duration={1.5} /><span className="text-[#E8B84B]">+</span>
                </div>
                <p className="text-white/70 text-sm md:text-[15px]">{t('stats.trust')}</p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Featured Testimonial */}
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
                        i < allItems[0].stars
                          ? 'text-[#E8B84B] fill-[#E8B84B]'
                          : 'text-white/20 fill-white/10'
                      }`}
                    />
                  ))}
                </div>

                {/* Quote text */}
                <blockquote className="text-lg md:text-xl lg:text-2xl leading-relaxed font-light italic mb-8 text-white/90">
                  &ldquo;{allItems[0].text}&rdquo;
                </blockquote>

                {/* Divider */}
                <div className="w-16 h-[2px] bg-[#E8B84B] mx-auto mb-6" />

                {/* Author info */}
                <div>
                  <p className="text-lg font-semibold text-white">{allItems[0].name}</p>
                  <p className="text-white/70 text-sm mt-1">{allItems[0].role}</p>
                  {allItems[0].company && (
                    <p className="text-[#E8B84B] text-sm mt-1 font-medium">{allItems[0].company}</p>
                  )}
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Filter & Testimonials Grid */}
      <section className="py-16 md:py-24 bg-[#F7F8FA]">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          {/* Section heading */}
          <ScrollReveal>
            <div className="flex items-center gap-3 mb-8">
              <Filter className="w-5 h-5 text-[#1B3A5C]" />
              <h2 className="text-xl md:text-2xl font-bold text-[#1B3A5C]">{t('filterTitle')}</h2>
            </div>
          </ScrollReveal>

          {/* Filter Tabs */}
          <ScrollReveal>
            <div className="flex gap-3 overflow-x-auto pb-4 mb-12 scrollbar-hide -mx-6 px-6 md:mx-0 md:px-0">
              {filterKeys.map((filter) => (
                <button
                  key={filter}
                  onClick={() => setActiveFilter(filter)}
                  className={`px-5 py-2.5 text-sm font-medium rounded-full whitespace-nowrap transition-all duration-200 ${
                    activeFilter === filter
                      ? 'bg-[#1B3A5C] text-white shadow-md'
                      : 'bg-white text-[#1B3A5C] hover:bg-[#1B3A5C]/5 border border-[#E5E7EB]'
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
              className="grid grid-cols-1 md:grid-cols-2 gap-6"
            >
              {filteredItems.map((item, index) => (
                <ScrollReveal key={item.key} delay={index * 0.05}>
                  <div className="bg-white border border-[#E5E7EB] rounded-2xl p-6 card-lift h-full flex flex-col relative overflow-hidden">
                    {/* Large quote mark */}
                    <Quote className="absolute top-4 right-4 w-10 h-10 text-[#E8B84B]/10 fill-[#E8B84B]/5" />

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
                    <p className="text-[#1A1A2E]/70 italic text-sm md:text-[15px] leading-relaxed flex-1 mb-5 relative z-10">
                      &ldquo;{item.text}&rdquo;
                    </p>

                    {/* Divider */}
                    <div className="w-full h-px bg-[#E5E7EB] mb-4" />

                    {/* Author info */}
                    <div className="flex items-start justify-between gap-3">
                      <div className="min-w-0">
                        <p className="font-semibold text-[#1B3A5C] text-sm">{item.name}</p>
                        <p className="text-[#6B7280] text-xs mt-0.5">{item.role}</p>
                        {item.company && (
                          <p className="text-[#6B7280] text-xs mt-0.5">{item.company}</p>
                        )}
                      </div>
                      {/* Type badge */}
                      <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium whitespace-nowrap ${typeColors[item.type] || 'bg-gray-100 text-gray-600'}`}>
                        {typeIcons[item.type]}
                        {t(`filters.${item.type}`)}
                      </span>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </motion.div>
          </AnimatePresence>

          {/* Empty state */}
          {filteredItems.length === 0 && (
            <div className="text-center py-16">
              <p className="text-[#6B7280] text-lg">{t('noResults')}</p>
            </div>
          )}
        </div>
      </section>

      {/* Client Logos Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <ScrollReveal>
            <div className="text-center mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-[#1B3A5C] mb-3">{t('logos.title')}</h2>
              <p className="text-[#6B7280] text-[15px] md:text-base max-w-2xl mx-auto">{t('logos.subtitle')}</p>
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-4 md:gap-6">
              {partnerLogos.map((logo, index) => (
                <motion.div
                  key={logo.short}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.04 }}
                  className="flex flex-col items-center justify-center p-4 md:p-6 rounded-xl border border-[#E5E7EB] bg-[#F7F8FA] hover:border-[#1B3A5C]/20 hover:shadow-md transition-all duration-200 min-h-[80px] md:min-h-[100px]"
                >
                  <div className="w-10 h-10 md:w-12 md:h-12 rounded-lg bg-[#1B3A5C]/5 flex items-center justify-center mb-2">
                    <span className="text-[#1B3A5C] font-bold text-xs md:text-sm">{logo.short}</span>
                  </div>
                  <span className="text-[#6B7280] text-[10px] md:text-xs text-center leading-tight font-medium">{logo.name}</span>
                </motion.div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* CTA Section */}
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
