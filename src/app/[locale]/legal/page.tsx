'use client';

import { useTranslations } from 'next-intl';
import { PageHero } from '@/components/shared/PageHero';
import { ScrollReveal } from '@/components/shared/Animations';
import { Building2, User, Server, FileText, Shield, Cookie } from 'lucide-react';

export default function LegalPage() {
  const t = useTranslations('legal');

  const sections = [
    { key: 'company', icon: Building2 },
    { key: 'director', icon: User },
    { key: 'hosting', icon: Server },
    { key: 'ip', icon: FileText },
    { key: 'privacy', icon: Shield },
    { key: 'cookies', icon: Cookie },
  ] as const;

  return (
    <>
      <PageHero title={t('title')} subtitle="" sectionCounter="/8.0" />

      <section className="py-20 md:py-32 bg-white">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <div className="max-w-3xl mx-auto space-y-12">
            {sections.map((section, i) => (
              <ScrollReveal key={section.key} delay={i * 0.05}>
                <div>
                  <span className="section-counter">/8.{i + 1}</span>
                  <div className="flex items-center gap-3 mb-4 mt-3">
                    <div className="w-10 h-10 rounded-lg bg-[#0A0A0A]/5 flex items-center justify-center shrink-0">
                      <section.icon className="w-5 h-5 text-black/40" />
                    </div>
                    <h2 className="font-bold text-xl text-[#0A0A0A]">
                      {t(`${section.key}.title`)}
                    </h2>
                  </div>

                  {section.key === 'company' ? (
                    <div className="ml-13 space-y-2 pl-[52px]">
                      <p className="text-black/50">{t('company.name')}</p>
                      <p className="text-black/50">{t('company.form')}</p>
                      <p className="text-black/50">{t('company.rc')}</p>
                      <p className="text-black/50">{t('company.ice')}</p>
                      <p className="text-black/50">{t('company.if')}</p>
                      <p className="text-black/50">{t('company.hq')}</p>
                    </div>
                  ) : (
                    <p className="text-black/50 leading-relaxed pl-[52px]">
                      {t(`${section.key}.text`)}
                    </p>
                  )}
                </div>
                {i < sections.length - 1 && <div className="h-px bg-black/5 mt-8" />}
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
