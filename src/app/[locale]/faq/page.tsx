'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import { PageHero } from '@/components/shared/PageHero';
import { FadeIn } from '@/components/shared/Animations';
import { Card, CardContent } from '@/components/ui/card';
import { ChevronDown, ChevronUp } from 'lucide-react';

export default function FaqPage() {
  const t = useTranslations('faq');
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqItems = ['q1', 'q2', 'q3', 'q4', 'q5', 'q6', 'q7', 'q8', 'q9', 'q10'] as const;

  const toggleItem = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
      <PageHero title={t('title')} subtitle={t('subtitle')} />

      <section className="bg-white py-16 lg:py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-4">
            {faqItems.map((item, i) => {
              const isOpen = openIndex === i;
              return (
                <FadeIn key={item} delay={i * 0.05}>
                  <Card className="border-border hover:shadow-md transition-shadow">
                    <CardContent className="p-0">
                      <button
                        onClick={() => toggleItem(i)}
                        className="w-full flex items-center justify-between p-5 text-left hover:bg-light-gray/50 transition-colors rounded-lg"
                        aria-expanded={isOpen}
                      >
                        <span className="text-sm font-semibold text-navy pr-4">
                          {t(`${item}.question`)}
                        </span>
                        {isOpen ? (
                          <ChevronUp className="w-5 h-5 text-steel shrink-0" />
                        ) : (
                          <ChevronDown className="w-5 h-5 text-warm-gray shrink-0" />
                        )}
                      </button>
                      {isOpen && (
                        <div className="px-5 pb-5 pt-0">
                          <div className="border-t border-border pt-4">
                            <p className="text-sm text-warm-gray leading-relaxed">
                              {t(`${item}.answer`)}
                            </p>
                          </div>
                        </div>
                      )}
                    </CardContent>
                  </Card>
                </FadeIn>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
