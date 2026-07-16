'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import { useParams } from 'next/navigation';
import { ChevronDown, HelpCircle, MessageCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { PageHero } from '@/components/shared/PageHero';
import { ScrollReveal } from '@/components/shared/Animations';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

type Category = 'general' | 'products' | 'delivery' | 'technical' | 'certifications';

const categoryKeys: Category[] = ['general', 'products', 'delivery', 'technical', 'certifications'];

const categoryItems: Record<Category, string[]> = {
  general: ['g1', 'g2', 'g3'],
  products: ['p1', 'p2', 'p3', 'p4'],
  delivery: ['d1', 'd2', 'd3', 'd4'],
  technical: ['t1', 't2', 't3'],
  certifications: ['c1', 'c2', 'c3'],
};

export default function FAQPageClient() {
  const t = useTranslations('faq');
  const params = useParams();
  const locale = (params?.locale as string) || 'fr';
  const [activeCategory, setActiveCategory] = useState<Category>('general');
  const [openItem, setOpenItem] = useState<string | null>(null);

  const currentItems = categoryItems[activeCategory];

  // JSON-LD structured data for FAQ
  const allItems = Object.values(categoryItems).flat();
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: allItems.map((key) => ({
      '@type': 'Question',
      name: t(`items.${key}.q`),
      acceptedAnswer: {
        '@type': 'Answer',
        text: t(`items.${key}.a`),
      },
    })),
  };

  // Render answer with optional highlighted prices
  const renderAnswer = (key: string, answer: string) => {
    if (key === 'p2') {
      // Highlight prices with red text
      const parts = answer.split(/(1[\s,\u202F]?500 DH|1[\s,\u202F]?600 DH|1,500 DH|1,600 DH|1 500 DH|1 600 DH)/g);
      return parts.map((part, i) => {
        if (/1[\s,\u202F]?[56]00 DH/.test(part)) {
          return <span key={i} className="text-[#C1272D] font-bold">{part}</span>;
        }
        return <span key={i}>{part}</span>;
      });
    }
    return answer;
  };

  return (
    <>
      <PageHero title={t('title')} subtitle={t('subtitle')} sectionCounter="/06" />

      {/* Category Tabs + FAQ Accordion */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          {/* Category Tabs - horizontal scrollable on mobile */}
          <ScrollReveal>
            <div className="flex gap-1 overflow-x-auto pb-2 mb-12 scrollbar-hide -mx-6 px-6 md:mx-0 md:px-0 md:gap-2 border-b border-[#E5E7EB]">
              {categoryKeys.map((cat) => (
                <button
                  key={cat}
                  onClick={() => { setActiveCategory(cat); setOpenItem(null); }}
                  className={`relative px-4 py-3 text-sm font-semibold whitespace-nowrap transition-colors flex items-center gap-2 shrink-0 ${
                    activeCategory === cat
                      ? 'text-[#1B3A5C]'
                      : 'text-[#6B7280] hover:text-[#1B3A5C]'
                  }`}
                >
                  {cat === 'general' && <HelpCircle className="w-4 h-4" />}
                  {cat === 'products' && <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/></svg>}
                  {cat === 'delivery' && <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="1" y="3" width="15" height="13"/><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/></svg>}
                  {cat === 'technical' && <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></svg>}
                  {cat === 'certifications' && <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>}
                  {t(`categories.${cat}`)}
                  {/* Active tab bottom border */}
                  {activeCategory === cat && (
                    <motion.div
                      layoutId="activeTab"
                      className="absolute bottom-0 left-0 right-0 h-[3px] bg-[#E8B84B] rounded-full"
                      transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                    />
                  )}
                </button>
              ))}
            </div>
          </ScrollReveal>

          {/* FAQ Accordion */}
          <div className="max-w-4xl mx-auto">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeCategory}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.3 }}
                className="space-y-4"
              >
                {currentItems.map((key, index) => (
                  <ScrollReveal key={key} delay={index * 0.05}>
                    <div
                      className={`bg-[#F7F8FA] border border-[#E5E7EB] rounded-xl overflow-hidden transition-all duration-300 ${
                        openItem === key ? 'border-l-4 border-l-[#E8B84B]' : 'border-l-4 border-l-transparent'
                      }`}
                    >
                      <button
                        onClick={() => setOpenItem(openItem === key ? null : key)}
                        className="w-full flex items-center justify-between p-5 md:p-6 text-left gap-4 group"
                        aria-expanded={openItem === key}
                      >
                        <span className="font-semibold text-[#1B3A5C] text-[15px] md:text-base leading-snug group-hover:text-[#C1272D] transition-colors">
                          {t(`items.${key}.q`)}
                        </span>
                        <motion.span
                          animate={{ rotate: openItem === key ? 180 : 0 }}
                          transition={{ duration: 0.3, ease: 'easeInOut' }}
                          className="shrink-0"
                        >
                          <ChevronDown className="w-5 h-5 text-[#6B7280]" />
                        </motion.span>
                      </button>
                      <AnimatePresence initial={false}>
                        {openItem === key && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3, ease: 'easeInOut' }}
                            className="overflow-hidden"
                          >
                            <div className="px-5 md:px-6 pb-5 md:pb-6 pt-0 border-l-4 border-l-[#E8B84B] ml-5 md:ml-6 pl-4">
                              <p className="text-[#1A1A2E]/70 leading-relaxed text-sm md:text-[15px]">
                                {renderAnswer(key, t(`items.${key}.a`))}
                              </p>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  </ScrollReveal>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Category indicator - show count */}
          <ScrollReveal delay={0.2}>
            <p className="text-center text-[#6B7280] text-sm mt-10">
              {t('showing')} {currentItems.length} {t('questions')}
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* CTA Section - Navy background */}
      <section className="py-16 md:py-24 bg-[#1B3A5C]">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <ScrollReveal>
            <div className="max-w-2xl mx-auto text-center">
              <div className="w-14 h-14 rounded-full bg-[#E8B84B]/20 flex items-center justify-center mx-auto mb-6">
                <MessageCircle className="w-7 h-7 text-[#E8B84B]" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                {t('cta.title')}
              </h2>
              <p className="text-white/70 mb-8 text-[15px] md:text-base leading-relaxed">
                {t('cta.subtitle')}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href={`/${locale}/contact`}>
                  <Button
                    className="bg-[#C1272D] hover:bg-[#C1272D]/90 text-white px-8 py-3 text-sm font-semibold rounded-full h-auto"
                    size="lg"
                  >
                    {t('cta.button')}
                  </Button>
                </Link>
                <a href="tel:+212658265685">
                  <Button
                    variant="outline"
                    className="border-white/30 text-white hover:bg-white/10 px-8 py-3 text-sm font-semibold rounded-full h-auto"
                    size="lg"
                  >
                    +212 658-265685
                  </Button>
                </a>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </>
  );
}
