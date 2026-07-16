'use client';

import { useTranslations } from 'next-intl';
import { ScrollReveal } from '@/components/shared/Animations';
import { PageHero } from '@/components/shared/PageHero';

export default function MentionsLegalesPageClient() {
  const t = useTranslations();

  const sections = [
    { key: 'company', title: t('legal.company.title') },
    { key: 'director', title: t('legal.director.title') },
    { key: 'hosting', title: t('legal.hosting.title') },
    { key: 'ip', title: t('legal.ip.title') },
    { key: 'privacy', title: t('legal.privacy.title') },
    { key: 'cookies', title: t('legal.cookies.title') },
  ] as const;

  return (
    <>
      <PageHero title={t('legal.title')} subtitle="" sectionCounter="/08" />

      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-3xl mx-auto px-6 md:px-12">
          {sections.map((section, i) => (
            <ScrollReveal key={section.key} delay={i * 0.05}>
              <div className="mb-10">
                <h2 className="text-xl font-bold text-[#1B3A5C] mb-4">{section.title}</h2>
                {section.key === 'company' ? (
                  <div className="space-y-2 text-sm text-[#6B7280]">
                    <p><strong className="text-[#1A1A2E]">{t('legal.company.name')}</strong></p>
                    <p>{t('legal.company.form')}</p>
                    <p>{t('legal.company.rc')}</p>
                    <p>{t('legal.company.ice')}</p>
                    <p>{t('legal.company.if')}</p>
                    <p>{t('legal.company.hq')}</p>
                  </div>
                ) : (
                  <p className="text-[#6B7280] leading-relaxed">{t(`legal.${section.key}.text`)}</p>
                )}
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>
    </>
  );
}
