'use client';

import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { PageHero } from '@/components/shared/PageHero';
import { FadeIn } from '@/components/shared/Animations';
import { Truck, Cog, Microscope, Package } from 'lucide-react';

export default function ProcessPage() {
  const t = useTranslations('process');

  const steps = [
    { icon: Truck, key: 'step1', num: '01' },
    { icon: Cog, key: 'step2', num: '02' },
    { icon: Microscope, key: 'step3', num: '03' },
    { icon: Package, key: 'step4', num: '04' },
  ] as const;

  const stepImages = [
    '/images/factory-exterior.png',
    '/images/grinding-process.png',
    '/images/quality-lab.png',
    '/images/cement-bags.png',
  ];

  return (
    <>
      <PageHero title={t('title')} subtitle={t('subtitle')} />

      <section className="bg-white py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {steps.map((step, i) => (
              <FadeIn key={step.key} delay={i * 0.1}>
                <div className={`flex flex-col lg:flex-row gap-8 lg:gap-16 items-start ${
                  i % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}>
                  {/* Content */}
                  <div className="flex-1">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-14 h-14 rounded-xl bg-navy flex items-center justify-center shrink-0">
                        <step.icon className="w-7 h-7 text-white" />
                      </div>
                      <div>
                        <span className="font-mono text-sm text-steel font-medium">Étape {step.num}</span>
                        <h3 className="text-2xl font-bold text-navy">{t(`${step.key}.title`)}</h3>
                      </div>
                    </div>
                    <p className="text-warm-gray leading-relaxed text-lg">
                      {t(`${step.key}.desc`)}
                    </p>
                  </div>

                  {/* Visual */}
                  <div className="flex-1 w-full">
                    <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
                      <Image
                        src={stepImages[i]}
                        alt={t(`${step.key}.title`)}
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>
                </div>

                {/* Connector line */}
                {i < steps.length - 1 && (
                  <div className="hidden lg:flex justify-center mt-8">
                    <div className="w-0.5 h-12 bg-border" />
                  </div>
                )}
              </FadeIn>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
