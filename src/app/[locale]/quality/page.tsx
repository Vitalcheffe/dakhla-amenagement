'use client';

import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { PageHero } from '@/components/shared/PageHero';
import { FadeIn, StaggerContainer, StaggerItem } from '@/components/shared/Animations';
import { Card, CardContent } from '@/components/ui/card';
import { Microscope, Award, CheckCircle2 } from 'lucide-react';

export default function QualityPage() {
  const t = useTranslations('quality');

  const standards = ['nm', 'en', 'iso'] as const;
  const tests = ['chemical', 'physical', 'fineness', 'setting', 'expansion', 'heat'] as const;

  return (
    <>
      <PageHero title={t('title')} subtitle={t('subtitle')} />

      {/* Lab Section */}
      <section className="bg-white py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <FadeIn>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-navy/10 flex items-center justify-center">
                  <Microscope className="w-6 h-6 text-steel" />
                </div>
                <h2 className="text-3xl font-bold text-navy tracking-tight">{t('lab.title')}</h2>
              </div>
              <p className="text-warm-gray leading-relaxed text-lg">{t('lab.text')}</p>
            </FadeIn>
            <FadeIn delay={0.2}>
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
                <Image
                  src="/images/quality-lab.png"
                  alt={t('lab.title')}
                  fill
                  className="object-cover"
                />
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Standards */}
      <section className="bg-light-gray py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <h2 className="text-3xl font-bold text-navy tracking-tight text-center">
              {t('standards.title')}
            </h2>
          </FadeIn>
          <StaggerContainer className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-6">
            {standards.map((s) => (
              <StaggerItem key={s}>
                <Card className="h-full border-border hover:shadow-lg transition-shadow text-center">
                  <CardContent className="p-6">
                    <div className="w-14 h-14 rounded-xl bg-navy/10 flex items-center justify-center mx-auto mb-4">
                      <Award className="w-7 h-7 text-steel" />
                    </div>
                    <h3 className="text-xl font-bold font-mono text-navy">{t(`standards.${s}.name`)}</h3>
                    <p className="mt-2 text-sm text-warm-gray">{t(`standards.${s}.desc`)}</p>
                  </CardContent>
                </Card>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Tests */}
      <section className="bg-white py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <h2 className="text-3xl font-bold text-navy tracking-tight">{t('tests.title')}</h2>
          </FadeIn>
          <StaggerContainer className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {tests.map((test) => (
              <StaggerItem key={test}>
                <div className="flex items-start gap-3 p-4 rounded-xl bg-light-gray">
                  <CheckCircle2 className="w-5 h-5 text-steel shrink-0 mt-0.5" />
                  <p className="text-sm font-medium text-navy">{t(`tests.${test}`)}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>
    </>
  );
}
