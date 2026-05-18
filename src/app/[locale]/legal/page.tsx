'use client';

import { useTranslations } from 'next-intl';
import { PageHero } from '@/components/shared/PageHero';
import { FadeIn } from '@/components/shared/Animations';
import { Separator } from '@/components/ui/separator';
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
      <PageHero title={t('title')} subtitle="" />

      <section className="bg-white py-16 lg:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {sections.map((section, i) => (
              <FadeIn key={section.key} delay={i * 0.05}>
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-lg bg-navy/10 flex items-center justify-center shrink-0">
                      <section.icon className="w-5 h-5 text-steel" />
                    </div>
                    <h2 className="text-xl font-bold text-navy">
                      {t(`${section.key}.title`)}
                    </h2>
                  </div>

                  {section.key === 'company' ? (
                    <div className="ml-13 space-y-2 pl-13">
                      <p className="text-warm-gray">{t('company.name')}</p>
                      <p className="text-warm-gray">{t('company.form')}</p>
                      <p className="text-warm-gray">{t('company.rc')}</p>
                      <p className="text-warm-gray">{t('company.ice')}</p>
                      <p className="text-warm-gray">{t('company.if')}</p>
                      <p className="text-warm-gray">{t('company.hq')}</p>
                    </div>
                  ) : (
                    <p className="text-warm-gray leading-relaxed pl-13">
                      {t(`${section.key}.text`)}
                    </p>
                  )}
                </div>
                {i < sections.length - 1 && <Separator className="mt-8" />}
              </FadeIn>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
