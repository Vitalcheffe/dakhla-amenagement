'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { PageHero } from '@/components/shared/PageHero';
import { ScrollReveal, StaggerContainer, StaggerItem } from '@/components/shared/Animations';
import { CheckCircle2, Clock, FlaskConical, Cog, Truck, Package } from 'lucide-react';
import { motion } from 'framer-motion';

export default function SolutionsPage() {
  const t = useTranslations('solutions');
  const [activePill, setActivePill] = useState(0);

  const productKeys = ['cpj35', 'cpj45', 'cpa42_5', 'cpj55', 'ecoShield'] as const;
  const specKeys = ['resistance', 'fineness', 'setting', 'use'] as const;
  const processSteps = ['step1', 'step2', 'step3', 'step4'] as const;
  const processIcons = [Package, Cog, FlaskConical, Truck];
  const testKeys = ['chemical', 'physical', 'fineness', 'setting', 'expansion', 'heat'] as const;
  const standardKeys = ['nm', 'en', 'iso'] as const;

  const pillTabs = [
    t('tabProducts'),
    t('tabProcess'),
    t('tabQuality'),
  ];

  return (
    <>
      <PageHero title={t('title')} subtitle={t('subtitle')} sectionCounter="/2.0" />

      <section className="py-20 md:py-32 bg-white">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <ScrollReveal>
            <span className="section-counter">/2.1</span>
          </ScrollReveal>

          {/* Pill buttons */}
          <div className="mt-6 flex flex-wrap gap-3">
            {pillTabs.map((tab, i) => (
              <button
                key={i}
                onClick={() => setActivePill(i)}
                className={`pill-btn ${activePill === i ? 'pill-btn-active' : 'pill-btn-inactive'}`}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Tab content */}
          <motion.div
            key={activePill}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="mt-12"
          >
            {/* Tab 1: Products */}
            {activePill === 0 && (
              <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {productKeys.map((key) => (
                  <StaggerItem key={key}>
                    <div className={`card-lift rounded-xl p-6 lg:p-8 bg-[#F5F5F5] ${key === 'ecoShield' ? 'border border-[#2ECC71]/30' : ''}`}>
                      <div className="flex items-center justify-between mb-4">
                        <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${key === 'ecoShield' ? 'bg-[#2ECC71]/10' : 'bg-[#0A0A0A]/5'}`}>
                          <span className={`font-mono text-xs font-bold ${key === 'ecoShield' ? 'text-[#2ECC71]' : 'text-[#0A0A0A]'}`}>
                            {t(`products.${key}.name`)}
                          </span>
                        </div>
                        {key === 'ecoShield' && (
                          <span className="text-[11px] font-semibold px-2.5 py-1 rounded-full bg-[#2ECC71]/10 text-[#2ECC71]">
                            {t('products.ecoShield.badge')}
                          </span>
                        )}
                      </div>
                      <h3 className="font-bold text-lg text-[#0A0A0A]">
                        {t(`products.${key}.full`)}
                      </h3>
                      <p className="mt-3 text-sm text-black/50 leading-relaxed">
                        {t(`products.${key}.desc`)}
                      </p>
                      <div className="mt-6 space-y-2 border-t border-black/5 pt-4">
                        {specKeys.map((spec) => (
                          <div key={spec} className="flex justify-between text-xs">
                            <span className="text-black/30">{t(`products.specLabels.${spec}`)}</span>
                            <span className="text-black/60 font-medium">{t(`products.${key}.specs.${spec}`)}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </StaggerItem>
                ))}
              </StaggerContainer>
            )}

            {/* Tab 2: Process */}
            {activePill === 1 && (
              <div>
                <ScrollReveal>
                  <p className="text-lg text-black/50 max-w-2xl mb-12">{t('process.subtitle')}</p>
                </ScrollReveal>
                <div className="space-y-8">
                  {processSteps.map((step, i) => {
                    const Icon = processIcons[i];
                    return (
                      <ScrollReveal key={step} delay={i * 0.1}>
                        <div className={`flex flex-col lg:flex-row gap-8 items-start ${i % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                          <div className="flex-1">
                            <div className="flex items-center gap-4 mb-4">
                              <div className="w-10 h-10 rounded-full bg-[#0A0A0A] flex items-center justify-center shrink-0">
                                <Icon className="w-5 h-5 text-white" />
                              </div>
                              <div className="flex items-center gap-3">
                                <span className="font-mono text-4xl font-bold text-black/10">{String(i + 1).padStart(2, '0')}</span>
                                <h3 className="font-bold text-xl text-[#0A0A0A]">{t(`process.${step}.title`)}</h3>
                              </div>
                            </div>
                            <p className="text-black/50 leading-relaxed ml-14">{t(`process.${step}.desc`)}</p>
                          </div>
                          <div className="lg:w-80 shrink-0">
                            <div className="relative aspect-[4/3] rounded-xl overflow-hidden">
                              <Image
                                src={
                                  i === 0 ? '/images/factory-exterior.png' :
                                  i === 1 ? '/images/grinding-process.png' :
                                  i === 2 ? '/images/quality-lab.png' :
                                  '/images/cement-bags.png'
                                }
                                alt={t(`process.${step}.title`)}
                                fill
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
            )}

            {/* Tab 3: Quality */}
            {activePill === 2 && (
              <div>
                <ScrollReveal>
                  <h3 className="text-[clamp(1.25rem,2.5vw,2rem)] font-bold text-[#0A0A0A]">{t('quality.lab.title')}</h3>
                  <p className="mt-4 text-black/50 leading-relaxed max-w-2xl">{t('quality.lab.text')}</p>
                </ScrollReveal>

                <div className="mt-12 grid lg:grid-cols-2 gap-12">
                  <ScrollReveal delay={0.1}>
                    <h4 className="font-bold text-xl text-[#0A0A0A] mb-6">{t('quality.standards.title')}</h4>
                    <div className="space-y-4">
                      {standardKeys.map((key) => (
                        <div key={key} className="flex items-start gap-4 p-4 bg-[#F5F5F5] rounded-xl hover:bg-[#F5F5F5]/80 transition-colors">
                          {key === 'iso' ? (
                            <Clock className="w-5 h-5 text-[#2ECC71] shrink-0 mt-0.5" />
                          ) : (
                            <CheckCircle2 className="w-5 h-5 text-[#0A0A0A] shrink-0 mt-0.5" />
                          )}
                          <div>
                            <div className="flex items-center gap-2">
                              <p className="font-medium text-[#0A0A0A] text-sm">{t(`quality.standards.${key}.name`)}</p>
                              <span className={`text-[11px] font-medium px-2.5 py-1 rounded-full ${key === 'iso' ? 'bg-[#2ECC71]/10 text-[#2ECC71]' : 'bg-[#0A0A0A]/5 text-[#0A0A0A]'}`}>
                                {t(`quality.standards.${key}.status`)}
                              </span>
                            </div>
                            <p className="mt-1 text-xs text-black/40">{t(`quality.standards.${key}.desc`)}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </ScrollReveal>

                  <ScrollReveal delay={0.2}>
                    <h4 className="font-bold text-xl text-[#0A0A0A] mb-6">{t('quality.tests.title')}</h4>
                    <div className="space-y-3">
                      {testKeys.map((key) => (
                        <div key={key} className="flex items-center gap-3 p-3 bg-[#F5F5F5] rounded-lg">
                          <div className="w-2 h-2 rounded-full bg-[#0A0A0A] shrink-0" />
                          <p className="text-sm text-black/50">{t(`quality.tests.${key}`)}</p>
                        </div>
                      ))}
                    </div>
                    <div className="mt-6 relative aspect-[4/3] rounded-xl overflow-hidden">
                      <Image
                        src="/images/quality-lab.png"
                        alt={t('quality.lab.title')}
                        fill
                        className="object-cover"
                      />
                    </div>
                  </ScrollReveal>
                </div>
              </div>
            )}
          </motion.div>
        </div>
      </section>
    </>
  );
}
