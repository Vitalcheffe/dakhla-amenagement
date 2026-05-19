'use client';

import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { PageHero } from '@/components/shared/PageHero';
import { ScrollReveal, StaggerContainer, StaggerItem } from '@/components/shared/Animations';
import { Leaf, Shield, TrendingDown, Waves, Wind, Droplets, Recycle, Users, GraduationCap, MapPin, Heart, DollarSign, Building2 } from 'lucide-react';

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
    { key: 'feature1', icon: TrendingDown, isGreen: true },
    { key: 'feature2', icon: Waves, isGreen: false },
    { key: 'feature3', icon: Recycle, isGreen: true },
    { key: 'feature4', icon: Shield, isGreen: false },
  ] as const;

  return (
    <>
      <PageHero title={t('title')} subtitle={t('subtitle')} sectionCounter="/3.0" />

      {/* Section 1: DAM ECOShield */}
      <section className="py-20 md:py-32 bg-[#0A0A0A] text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle at 30% 70%, #2ECC71 0%, transparent 50%)' }} />
        </div>

        <div className="relative max-w-[1400px] mx-auto px-6 md:px-12">
          <ScrollReveal>
            <span className="section-counter text-white/20">/3.1</span>
          </ScrollReveal>
          <ScrollReveal delay={0.05}>
            <h2 className="mt-4 text-[clamp(1.75rem,4vw,3rem)] font-bold heading-gradient">
              {t('ecoShield.title')}
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <p className="mt-3 text-lg text-white/60">{t('ecoShield.subtitle')}</p>
          </ScrollReveal>
          <ScrollReveal delay={0.15}>
            <p className="mt-6 text-white/50 leading-relaxed max-w-3xl">{t('ecoShield.desc')}</p>
          </ScrollReveal>

          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {ecoFeatures.map((feature, i) => {
              const Icon = feature.icon;
              return (
                <ScrollReveal key={i} delay={i * 0.1}>
                  <div className={`bg-white/5 backdrop-blur-sm border rounded-xl p-6 text-center hover:shadow-lg transition-all duration-300 ${
                    feature.isGreen ? 'border-[#2ECC71]/20 hover:border-[#2ECC71]/50' : 'border-[#0F4C75]/20 hover:border-[#0F4C75]/50'
                  }`}>
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-4 ${
                      feature.isGreen ? 'bg-[#2ECC71]/10' : 'bg-[#0F4C75]/10'
                    }`}>
                      <Icon className={`w-6 h-6 ${feature.isGreen ? 'text-[#2ECC71]' : 'text-[#0F4C75]'}`} />
                    </div>
                    <p className="text-sm text-white/50">{t(`ecoShield.feature${i + 1}Title`)}</p>
                    <p className={`font-mono text-2xl font-bold mt-2 ${feature.isGreen ? 'text-[#2ECC71]' : 'text-[#0F4C75]'}`}>
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

      {/* Section 2: Environment */}
      <section className="py-20 md:py-32 bg-[#F5F5F5]">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <ScrollReveal>
                <span className="section-counter">/3.2</span>
              </ScrollReveal>
              <ScrollReveal delay={0.05}>
                <div className="flex items-center gap-3 mt-4">
                  <div className="w-12 h-12 rounded-xl bg-[#2ECC71]/10 flex items-center justify-center">
                    <Leaf className="w-6 h-6 text-[#2ECC71]" />
                  </div>
                  <h2 className="text-[clamp(1.75rem,4vw,3rem)] font-bold tracking-[-0.02em] leading-[1.15]">
                    {t('environment.title')}
                  </h2>
                </div>
              </ScrollReveal>
              <ScrollReveal delay={0.1}>
                <p className="text-black/50 leading-relaxed text-lg mt-6">{t('environment.text')}</p>
              </ScrollReveal>
            </div>
            <StaggerContainer className="space-y-4">
              {envItems.map((item) => {
                const Icon = item.icon;
                return (
                  <StaggerItem key={item.key}>
                    <div className="bg-white rounded-xl p-4 flex items-center gap-4 hover:shadow-sm transition-shadow">
                      <div className="w-10 h-10 rounded-lg bg-[#2ECC71]/10 flex items-center justify-center shrink-0">
                        <Icon className="w-5 h-5 text-[#2ECC71]" />
                      </div>
                      <p className="text-sm font-medium text-black/60">{t(`environment.${item.key}`)}</p>
                    </div>
                  </StaggerItem>
                );
              })}
            </StaggerContainer>
          </div>
        </div>
      </section>

      {/* Section 3: Social */}
      <section className="py-20 md:py-32 bg-white">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <ScrollReveal>
              <span className="section-counter">/3.3</span>
              <div className="flex items-center gap-3 mt-4">
                <div className="w-12 h-12 rounded-xl bg-[#0A0A0A]/5 flex items-center justify-center">
                  <Users className="w-6 h-6 text-black/40" />
                </div>
                <h2 className="text-[clamp(1.75rem,4vw,3rem)] font-bold tracking-[-0.02em] leading-[1.15]">
                  {t('social.title')}
                </h2>
              </div>
              <p className="text-black/50 leading-relaxed text-lg mt-6">{t('social.text')}</p>
            </ScrollReveal>
            <StaggerContainer className="space-y-4">
              {socialItems.map((item) => {
                const Icon = item.icon;
                return (
                  <StaggerItem key={item.key}>
                    <div className="bg-[#F5F5F5] rounded-xl p-4 flex items-center gap-4 hover:shadow-sm transition-shadow">
                      <div className="w-10 h-10 rounded-lg bg-[#0A0A0A]/5 flex items-center justify-center shrink-0">
                        <Icon className="w-5 h-5 text-black/40" />
                      </div>
                      <p className="text-sm font-medium text-black/60">{t(`social.${item.key}`)}</p>
                    </div>
                  </StaggerItem>
                );
              })}
            </StaggerContainer>
          </div>
        </div>
      </section>

      {/* Section 4: Economic Impact */}
      <section className="py-20 md:py-32 bg-[#0A0A0A] text-white">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <ScrollReveal>
            <span className="section-counter text-white/20">/3.4</span>
            <div className="flex items-center gap-3 mt-4">
              <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center">
                <DollarSign className="w-6 h-6 text-white/40" />
              </div>
              <h2 className="text-[clamp(1.75rem,4vw,3rem)] font-bold tracking-[-0.02em] leading-[1.15]">
                {t('economic.title')}
              </h2>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <p className="text-white/50 leading-relaxed text-lg max-w-2xl mt-6">{t('economic.text')}</p>
          </ScrollReveal>
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {economicItems.map((item, i) => {
              const Icon = item.icon;
              return (
                <ScrollReveal key={i} delay={i * 0.1}>
                  <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:border-white/20 transition-colors">
                    <Icon className="w-8 h-8 text-white/40 mb-4" />
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
