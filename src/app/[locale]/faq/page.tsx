'use client';

import { useState, useEffect } from 'react';
import { useTranslations } from 'next-intl';
import { useParams } from 'next/navigation';
import { ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { PageHero } from '@/components/shared/PageHero';
import { ScrollReveal } from '@/components/shared/Animations';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

type Category = 'all' | 'products' | 'pricing' | 'delivery' | 'technical' | 'company';

const categoryKeys: Category[] = ['all', 'products', 'pricing', 'delivery', 'technical', 'company'];
const faqKeys = ['q1', 'q2', 'q3', 'q4', 'q5', 'q6', 'q7', 'q8', 'q9', 'q10', 'q11', 'q12', 'q13', 'q14', 'q15'];

export default function FAQPage() {
  const t = useTranslations('faq');
  const params = useParams();
  const locale = (params?.locale as string) || 'fr';
  const [activeCategory, setActiveCategory] = useState<Category>('all');
  const [openItem, setOpenItem] = useState<string | null>(null);

  // Build FAQ items from translations
  const faqItems = faqKeys.map((key) => ({
    key,
    question: t(`items.${key}.q`),
    answer: t(`items.${key}.a`),
    category: t(`items.${key}.cat`) as string,
  }));

  const filteredItems = activeCategory === 'all'
    ? faqItems
    : faqItems.filter((item) => item.category === activeCategory);

  // JSON-LD structured data for FAQ
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqItems.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  };

  // Highlight prices in q2 answer
  const renderAnswer = (key: string, answer: string) => {
    if (key === 'q2') {
      // Highlight prices with red text
      const parts = answer.split(/(1[\s,]?500 DH|1[\s,]?600 DH|1,500 DH|1,600 DH|1 500 DH|1 600 DH|1\u202F500 DH|1\u202F600 DH)/g);
      return parts.map((part, i) => {
        if (/1[\s,\u202F]?[56]00 DH/.test(part)) {
          return <span key={i} className="text-[#C1272D] font-bold">{part}</span>;
        }
        return part;
      });
    }
    return answer;
  };

  // Reset open item when category changes
  useEffect(() => {
    setOpenItem(null);
  }, [activeCategory]);

  return (
    <>
      <PageHero title={t('title')} subtitle={t('subtitle')} sectionCounter="/08" />

      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          {/* Category Tabs */}
          <ScrollReveal>
            <div className="flex gap-3 overflow-x-auto pb-4 mb-12 scrollbar-hide -mx-6 px-6 md:mx-0 md:px-0">
              {categoryKeys.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-5 py-2.5 text-sm font-medium rounded-full whitespace-nowrap transition-colors ${
                    activeCategory === cat
                      ? 'bg-[#1B3A5C] text-white'
                      : 'bg-[#F7F8FA] text-[#1B3A5C] hover:bg-[#1B3A5C] hover:text-white'
                  }`}
                >
                  {cat === 'all'
                    ? locale === 'fr' ? 'Toutes' : 'All'
                    : t(`categories.${cat}`)}
                </button>
              ))}
            </div>
          </ScrollReveal>

          {/* FAQ Accordion */}
          <div className="max-w-4xl mx-auto space-y-4">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeCategory}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="space-y-4"
              >
                {filteredItems.map((item, index) => (
                  <ScrollReveal key={item.key} delay={index * 0.03}>
                    <div
                      className={`bg-[#F7F8FA] border border-[#E5E7EB] rounded-xl overflow-hidden transition-all duration-300 ${
                        openItem === item.key ? 'border-l-4 border-l-[#E8B84B]' : 'border-l-4 border-l-transparent'
                      }`}
                    >
                      <button
                        onClick={() => setOpenItem(openItem === item.key ? null : item.key)}
                        className="w-full flex items-center justify-between p-5 md:p-6 text-left gap-4"
                        aria-expanded={openItem === item.key}
                      >
                        <span className="font-semibold text-[#1B3A5C] text-[15px] md:text-base leading-snug">
                          {item.question}
                        </span>
                        <motion.span
                          animate={{ rotate: openItem === item.key ? 180 : 0 }}
                          transition={{ duration: 0.3 }}
                          className="shrink-0"
                        >
                          <ChevronDown className="w-5 h-5 text-[#6B7280]" />
                        </motion.span>
                      </button>
                      <AnimatePresence initial={false}>
                        {openItem === item.key && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3, ease: 'easeInOut' }}
                            className="overflow-hidden"
                          >
                            <div className="px-5 md:px-6 pb-5 md:pb-6 pt-0">
                              <p className="text-[#1A1A2E]/70 leading-relaxed text-sm md:text-[15px]">
                                {renderAnswer(item.key, item.answer)}
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
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-[#F7F8FA]">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <ScrollReveal>
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-2xl md:text-3xl font-bold text-[#1B3A5C] mb-4">
                {t('cta.title')}
              </h2>
              <p className="text-[#6B7280] mb-8 text-[15px] md:text-base leading-relaxed">
                {t('cta.subtitle')}
              </p>
              <Link href={`/${locale}/contact`}>
                <Button
                  className="bg-[#C1272D] hover:bg-[#C1272D]/90 text-white px-8 py-3 text-sm font-semibold rounded-full h-auto"
                  size="lg"
                >
                  {t('cta.button')}
                </Button>
              </Link>
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
