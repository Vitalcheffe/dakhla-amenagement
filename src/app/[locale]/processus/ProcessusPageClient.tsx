'use client';

import { useTranslations } from 'next-intl';
import { useParams } from 'next/navigation';
import Image from 'next/image';
import { Factory, Beaker, Package, Truck } from 'lucide-react';
import { ScrollReveal } from '@/components/shared/Animations';
import { PageHero } from '@/components/shared/PageHero';

const stepImages = [
  '/images/process/step1-clinker-reception.jpg',
  '/images/process/step2-grinding.jpg',
  '/images/process/step3-dosing-lab.jpg',
  '/images/process/step4-packaging.jpg',
];

const stepIcons = [Factory, Beaker, Package, Truck];

export default function ProcessusPageClient() {
  const t = useTranslations();
  const params = useParams();
  const locale = (params?.locale as string) || 'fr';

  const steps = [
    { title: t('process.step1.title'), desc: t('process.step1.desc') },
    { title: t('process.step2.title'), desc: t('process.step2.desc') },
    { title: t('process.step3.title'), desc: t('process.step3.desc') },
    { title: t('process.step4.title'), desc: t('process.step4.desc') },
  ];

  return (
    <>
      <PageHero title={t('process.title')} subtitle={t('process.subtitle')} sectionCounter="/02" />

      {/* Timeline */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <div className="space-y-16 md:space-y-24">
            {steps.map((step, i) => {
              const Icon = stepIcons[i];
              const isEven = i % 2 === 0;
              return (
                <ScrollReveal key={i} delay={0.05}>
                  <div className={`grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center`}>
                    <div className={!isEven ? 'lg:order-2' : ''}>
                      <div className="flex items-center gap-4 mb-4">
                        <div className="w-12 h-12 rounded-xl bg-[#1B3A5C] flex items-center justify-center shrink-0">
                          <Icon className="w-5 h-5 text-white" />
                        </div>
                        <div>
                          <span className="text-xs font-bold text-[#E8B84B] tracking-wider">ÉTAPE {String(i + 1).padStart(2, '0')}</span>
                          <h3 className="text-xl md:text-2xl font-bold text-[#1B3A5C]">{step.title}</h3>
                        </div>
                      </div>
                      <p className="text-[#6B7280] leading-relaxed ml-0 lg:ml-16">{step.desc}</p>
                    </div>
                    <div className={!isEven ? 'lg:order-1' : ''}>
                      <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
                        <Image
                          src={stepImages[i]}
                          alt={step.title}
                          fill
                          quality={90}
                          className="object-cover"
                        />
                      </div>
                    </div>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-16 bg-[#F7F8FA]">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 text-center">
          <ScrollReveal>
            <p className="text-lg text-[#6B7280] mb-4">{locale === 'fr' ? 'Vous avez des questions sur notre processus ?' : 'Questions about our process?'}</p>
            <a href={`/${locale}/contact`} className="inline-flex items-center gap-2 text-[#1B3A5C] font-semibold hover:gap-3 transition-all">
              {locale === 'fr' ? 'Contactez notre équipe technique' : 'Contact our technical team'} →
            </a>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
