'use client';

import { useTranslations } from 'next-intl';
import { useParams } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { PageHero } from '@/components/shared/PageHero';
import { ScrollReveal, FadeIn, StaggerContainer, StaggerItem } from '@/components/shared/Animations';
import { TabSystem } from '@/components/shared/TabSystem';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ArrowRight, Leaf, Shield, TrendingDown, Waves, CheckCircle2, Clock, FlaskConical, BarChart3, Cog, Truck, Package } from 'lucide-react';

export default function SolutionsPage() {
  const t = useTranslations('solutions');
  const params = useParams();
  const locale = (params?.locale as string) || 'fr';

  const productKeys = ['cpj35', 'cpj45', 'cpa42_5', 'cpj55', 'ecoShield'] as const;
  const specKeys = ['resistance', 'fineness', 'setting', 'use'] as const;
  const processSteps = ['step1', 'step2', 'step3', 'step4'] as const;
  const processIcons = [Package, Cog, FlaskConical, Truck];
  const testKeys = ['chemical', 'physical', 'fineness', 'setting', 'expansion', 'heat'] as const;
  const standardKeys = ['nm', 'en', 'iso'] as const;

  const tabs = [
    { key: 'products', label: t('tabProducts') },
    { key: 'process', label: t('tabProcess') },
    { key: 'quality', label: t('tabQuality') },
  ];

  return (
    <>
      <PageHero title={t('title')} subtitle={t('subtitle')} image="/images/grinding-process.png" />

      <section className="bg-anthracite py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <TabSystem tabs={tabs}>
            {/* Tab 1: Notre Gamme */}
            <div>
              <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {productKeys.map((key) => (
                  <StaggerItem key={key}>
                    <Card className={`h-full bg-white/5 border-white/10 backdrop-blur-sm hover:shadow-lg transition-all duration-300 overflow-hidden ${
                      key === 'ecoShield' ? 'border-vert-energie/30 hover:border-vert-energie/60' : 'hover:border-bleu-ocean/30'
                    }`}>
                      <CardContent className="p-6 lg:p-8">
                        <div className="flex items-center justify-between mb-4">
                          <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                            key === 'ecoShield' ? 'bg-vert-energie/10 border border-vert-energie/20' : 'bg-bleu-ocean/10'
                          }`}>
                            <span className={`font-heading text-xs font-bold ${
                              key === 'ecoShield' ? 'text-vert-energie' : 'text-bleu-ocean'
                            }`}>
                              {t(`products.${key}.name`)}
                            </span>
                          </div>
                          {key === 'ecoShield' && (
                            <Badge className="bg-vert-energie/20 text-vert-energie border-vert-energie/30 text-xs">
                              {t('products.ecoShield.badge')}
                            </Badge>
                          )}
                        </div>
                        <h3 className="font-heading text-lg font-bold text-white">
                          {t(`products.${key}.full`)}
                        </h3>
                        <p className="mt-3 text-sm text-white/50 leading-relaxed">
                          {t(`products.${key}.desc`)}
                        </p>
                        <div className="mt-6 space-y-2 border-t border-white/10 pt-4">
                          {specKeys.map((spec) => (
                            <div key={spec} className="flex justify-between text-xs">
                              <span className="text-white/40">{t(`products.specLabels.${spec}`)}</span>
                              <span className="text-white/70 font-medium">{t(`products.${key}.specs.${spec}`)}</span>
                            </div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </StaggerItem>
                ))}
              </StaggerContainer>
              <ScrollReveal delay={0.3}>
                <div className="mt-8 text-center space-y-2">
                  <p className="text-sm text-white/40">{t('products.packaging')}</p>
                  <p className="text-sm text-white/40">{t('products.standards')}</p>
                </div>
              </ScrollReveal>
            </div>

            {/* Tab 2: Process de Broyage */}
            <div>
              <ScrollReveal>
                <p className="text-lg text-white/60 max-w-2xl mb-12">
                  {t('process.subtitle')}
                </p>
              </ScrollReveal>
              <div className="space-y-8">
                {processSteps.map((step, i) => {
                  const Icon = processIcons[i];
                  return (
                    <ScrollReveal key={step} delay={i * 0.1}>
                      <div className={`flex flex-col lg:flex-row gap-8 items-start ${i % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                        <div className="flex-1">
                          <div className="flex items-center gap-4 mb-4">
                            <div className="w-12 h-12 rounded-xl bg-bleu-ocean/10 border border-bleu-ocean/20 flex items-center justify-center shrink-0">
                              <Icon className="w-6 h-6 text-bleu-ocean" />
                            </div>
                            <div className="flex items-center gap-3">
                              <span className="font-heading text-4xl font-bold text-bleu-ocean/20">{String(i + 1).padStart(2, '0')}</span>
                              <h3 className="font-heading text-xl font-bold text-white">{t(`process.${step}.title`)}</h3>
                            </div>
                          </div>
                          <p className="text-white/50 leading-relaxed ml-16">
                            {t(`process.${step}.desc`)}
                          </p>
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

            {/* Tab 3: Qualité & Certifications */}
            <div>
              {/* Lab */}
              <ScrollReveal>
                <h3 className="font-heading text-2xl font-bold text-white">{t('quality.lab.title')}</h3>
                <p className="mt-4 text-white/50 leading-relaxed max-w-2xl">{t('quality.lab.text')}</p>
              </ScrollReveal>

              <div className="mt-12 grid lg:grid-cols-2 gap-12">
                {/* Standards */}
                <ScrollReveal delay={0.1}>
                  <h4 className="font-heading text-xl font-bold text-white mb-6">{t('quality.standards.title')}</h4>
                  <div className="space-y-4">
                    {standardKeys.map((key) => (
                      <div key={key} className="flex items-start gap-4 p-4 bg-white/5 rounded-xl border border-white/10 hover:border-bleu-ocean/30 transition-colors">
                        {key === 'iso' ? (
                          <Clock className="w-5 h-5 text-vert-energie shrink-0 mt-0.5" />
                        ) : (
                          <CheckCircle2 className="w-5 h-5 text-bleu-ocean shrink-0 mt-0.5" />
                        )}
                        <div>
                          <div className="flex items-center gap-2">
                            <p className="font-medium text-white text-sm">{t(`quality.standards.${key}.name`)}</p>
                            <Badge variant="secondary" className={`text-xs ${key === 'iso' ? 'bg-vert-energie/10 text-vert-energie' : 'bg-bleu-ocean/10 text-bleu-ocean'}`}>
                              {t(`quality.standards.${key}.status`)}
                            </Badge>
                          </div>
                          <p className="mt-1 text-xs text-white/40">{t(`quality.standards.${key}.desc`)}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </ScrollReveal>

                {/* Tests */}
                <ScrollReveal delay={0.2}>
                  <h4 className="font-heading text-xl font-bold text-white mb-6">{t('quality.tests.title')}</h4>
                  <div className="space-y-3">
                    {testKeys.map((key) => (
                      <div key={key} className="flex items-center gap-3 p-3 bg-white/5 rounded-lg border border-white/10">
                        <div className="w-2 h-2 rounded-full bg-bleu-ocean shrink-0" />
                        <p className="text-sm text-white/60">{t(`quality.tests.${key}`)}</p>
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
          </TabSystem>
        </div>
      </section>
    </>
  );
}
