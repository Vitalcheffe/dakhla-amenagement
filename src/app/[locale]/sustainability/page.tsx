'use client';

import { useTranslations } from 'next-intl';
import Image from 'next/image';
import Link from 'next/link';
import { PageHero } from '@/components/shared/PageHero';
import { ScrollReveal, FadeIn, StaggerContainer, StaggerItem } from '@/components/shared/Animations';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight, Leaf, Shield, TrendingDown, Waves, Wind, Droplets, Recycle, Users, GraduationCap, MapPin, Heart, DollarSign, Building2 } from 'lucide-react';

export default function SustainabilityPage() {
  const t = useTranslations('sustainability');

  const envItems = [
    { key: 'emissions', icon: Wind },
    { key: 'energy', icon: Leaf },
    { key: 'water', icon: Droplets },
    { key: 'waste', icon: Recycle },
  ] as const;

  const socialItems = [
    { key: 'jobs', icon: Users },
    { key: 'training', icon: GraduationCap },
    { key: 'local', icon: MapPin },
    { key: 'community', icon: Heart },
  ] as const;

  const economicItems = [
    { key: 'jobs', icon: Users },
    { key: 'local', icon: MapPin },
    { key: 'development', icon: Building2 },
    { key: 'investment', icon: DollarSign },
  ] as const;

  const ecoFeatures = [
    { key: 'feature1', icon: TrendingDown, color: 'vert-energie' },
    { key: 'feature2', icon: Waves, color: 'bleu-ocean' },
    { key: 'feature3', icon: Recycle, color: 'vert-energie' },
    { key: 'feature4', icon: Shield, color: 'bleu-ocean' },
  ] as const;

  return (
    <>
      <PageHero title={t('title')} subtitle={t('subtitle')} image="/images/sustainability.png" />

      {/* Section 1: DAM ECOShield */}
      <section className="bg-anthracite py-20 lg:py-32 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle at 30% 70%, #2ECC71 0%, transparent 50%)' }} />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <h2 className="font-heading text-4xl sm:text-5xl font-bold heading-gradient">
              {t('ecoShield.title')}
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <p className="mt-3 text-lg text-white/60">{t('ecoShield.subtitle')}</p>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <p className="mt-6 text-white/50 leading-relaxed max-w-3xl">{t('ecoShield.desc')}</p>
          </ScrollReveal>

          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {ecoFeatures.map((feature, i) => {
              const Icon = feature.icon;
              const isGreen = feature.color === 'vert-energie';
              return (
                <ScrollReveal key={i} delay={i * 0.1}>
                  <div className={`bg-white/5 backdrop-blur-sm border rounded-xl p-6 text-center hover:shadow-lg transition-all duration-300 ${
                    isGreen ? 'border-vert-energie/20 hover:border-vert-energie/50' : 'border-bleu-ocean/20 hover:border-bleu-ocean/50'
                  }`}>
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-4 ${
                      isGreen ? 'bg-vert-energie/10' : 'bg-bleu-ocean/10'
                    }`}>
                      <Icon className={`w-6 h-6 ${isGreen ? 'text-vert-energie' : 'text-bleu-ocean'}`} />
                    </div>
                    <p className="text-sm text-white/50">{t(`ecoShield.feature${i + 1}Title`)}</p>
                    <p className={`font-heading text-2xl font-bold mt-2 ${isGreen ? 'text-vert-energie' : 'text-bleu-ocean'}`}>
                      {t(`ecoShield.feature${i + 1}Value`)}
                    </p>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>

          <ScrollReveal delay={0.3}>
            <div className="mt-12 relative aspect-[21/9] rounded-2xl overflow-hidden">
              <Image
                src="/images/sustainability.png"
                alt={t('ecoShield.title')}
                fill
                className="object-cover"
              />
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Section 2: Engagements Environnementaux */}
      <section className="bg-gris-clair py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <ScrollReveal>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-vert-energie/10 flex items-center justify-center">
                    <Leaf className="w-6 h-6 text-vert-energie" />
                  </div>
                  <h2 className="font-heading text-3xl font-bold text-anthracite tracking-tight">
                    {t('environment.title')}
                  </h2>
                </div>
              </ScrollReveal>
              <ScrollReveal delay={0.1}>
                <p className="text-acier leading-relaxed text-lg">{t('environment.text')}</p>
              </ScrollReveal>
            </div>
            <StaggerContainer className="space-y-4">
              {envItems.map((item, i) => {
                const Icon = item.icon;
                return (
                  <StaggerItem key={item.key}>
                    <Card className="border-anthracite/5 hover:border-vert-energie/20 transition-colors">
                      <CardContent className="p-4 flex items-center gap-4">
                        <div className="w-10 h-10 rounded-lg bg-vert-energie/10 flex items-center justify-center shrink-0">
                          <Icon className="w-5 h-5 text-vert-energie" />
                        </div>
                        <p className="text-sm font-medium text-anthracite/80">{t(`environment.${item.key}`)}</p>
                      </CardContent>
                    </Card>
                  </StaggerItem>
                );
              })}
            </StaggerContainer>
          </div>
        </div>
      </section>

      {/* Section 3: Responsabilité Sociétale */}
      <section className="bg-white py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <ScrollReveal>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-bleu-ocean/10 flex items-center justify-center">
                  <Users className="w-6 h-6 text-bleu-ocean" />
                </div>
                <h2 className="font-heading text-3xl font-bold text-anthracite tracking-tight">
                  {t('social.title')}
                </h2>
              </div>
              <p className="text-acier leading-relaxed text-lg">{t('social.text')}</p>
            </ScrollReveal>
            <StaggerContainer className="space-y-4">
              {socialItems.map((item, i) => {
                const Icon = item.icon;
                return (
                  <StaggerItem key={item.key}>
                    <Card className="border-anthracite/5 hover:border-bleu-ocean/20 transition-colors">
                      <CardContent className="p-4 flex items-center gap-4">
                        <div className="w-10 h-10 rounded-lg bg-bleu-ocean/10 flex items-center justify-center shrink-0">
                          <Icon className="w-5 h-5 text-bleu-ocean" />
                        </div>
                        <p className="text-sm font-medium text-anthracite/80">{t(`social.${item.key}`)}</p>
                      </CardContent>
                    </Card>
                  </StaggerItem>
                );
              })}
            </StaggerContainer>
          </div>
        </div>
      </section>

      {/* Section 4: Impact Économique */}
      <section className="bg-anthracite py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-bleu-ocean/10 flex items-center justify-center">
                <DollarSign className="w-6 h-6 text-bleu-ocean" />
              </div>
              <h2 className="font-heading text-3xl font-bold text-white tracking-tight">
                {t('economic.title')}
              </h2>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <p className="text-white/50 leading-relaxed text-lg max-w-2xl">{t('economic.text')}</p>
          </ScrollReveal>
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {economicItems.map((item, i) => {
              const Icon = item.icon;
              return (
                <ScrollReveal key={i} delay={i * 0.1}>
                  <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:border-bleu-ocean/30 transition-colors">
                    <Icon className="w-8 h-8 text-bleu-ocean mb-4" />
                    <p className="text-sm text-white/60">{t(`economic.${item.key}`)}</p>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
