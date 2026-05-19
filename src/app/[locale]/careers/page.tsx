'use client';

import { useTranslations } from 'next-intl';
import { PageHero } from '@/components/shared/PageHero';
import { ScrollReveal, StaggerContainer, StaggerItem } from '@/components/shared/Animations';
import { Heart, GraduationCap, TrendingUp, Shield, MapPin, Briefcase, Target, Lightbulb, Rocket, ArrowUpRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function CareersPage() {
  const t = useTranslations('careers');
  const benefits = ['health', 'training', 'career', 'environment'] as const;
  const benefitIcons = [Heart, GraduationCap, TrendingUp, Shield];
  const jobs = ['job1', 'job2', 'job3', 'job4'] as const;
  const whyJoinReasons = [
    { key: 'reason1', icon: Target },
    { key: 'reason2', icon: Lightbulb },
    { key: 'reason3', icon: Rocket },
    { key: 'reason4', icon: Heart },
  ] as const;

  return (
    <>
      <PageHero title={t('title')} subtitle={t('subtitle')} sectionCounter="/7.0" />

      {/* Why Join Us */}
      <section className="py-20 md:py-32 bg-[#0A0A0A] text-white">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <ScrollReveal>
            <span className="section-counter text-white/20">/7.1</span>
            <h2 className="mt-4 text-[clamp(1.75rem,4vw,3rem)] font-bold tracking-[-0.02em] leading-[1.15] text-center">
              {t('whyJoin.title')}
            </h2>
          </ScrollReveal>
          <StaggerContainer className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyJoinReasons.map((reason) => {
              const Icon = reason.icon;
              return (
                <StaggerItem key={reason.key}>
                  <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 text-center hover:border-white/20 transition-colors">
                    <div className="w-14 h-14 rounded-xl bg-white/5 flex items-center justify-center mx-auto mb-4">
                      <Icon className="w-7 h-7 text-white/60" />
                    </div>
                    <h3 className="font-bold text-base text-white">
                      {t(`whyJoin.${reason.key}Title`)}
                    </h3>
                    <p className="mt-2 text-sm text-white/50 leading-relaxed">
                      {t(`whyJoin.${reason.key}Desc`)}
                    </p>
                  </div>
                </StaggerItem>
              );
            })}
          </StaggerContainer>
        </div>
      </section>

      {/* Culture */}
      <section className="py-20 md:py-32 bg-white">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <ScrollReveal>
            <span className="section-counter">/7.2</span>
            <div className="max-w-3xl mt-4">
              <h2 className="text-[clamp(1.75rem,4vw,3rem)] font-bold tracking-[-0.02em] leading-[1.15]">{t('culture.title')}</h2>
              <p className="mt-6 text-black/50 leading-relaxed text-lg">{t('culture.text')}</p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 md:py-32 bg-[#F5F5F5]">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <ScrollReveal>
            <span className="section-counter">/7.3</span>
            <h2 className="mt-4 text-[clamp(1.75rem,4vw,3rem)] font-bold tracking-[-0.02em] leading-[1.15] text-center">{t('benefits.title')}</h2>
          </ScrollReveal>
          <StaggerContainer className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((b, i) => (
              <StaggerItem key={b}>
                <div className="h-full bg-white rounded-xl p-6 text-center card-lift">
                  <div className="w-14 h-14 rounded-xl bg-[#0A0A0A]/5 flex items-center justify-center mx-auto mb-4">
                    {(() => {
                      const Icon = benefitIcons[i];
                      return <Icon className="w-7 h-7 text-black/40" />;
                    })()}
                  </div>
                  <h3 className="text-base font-semibold text-[#0A0A0A]">{t(`benefits.${b}`)}</h3>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-20 md:py-32 bg-white">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <ScrollReveal>
            <span className="section-counter">/7.4</span>
            <h2 className="mt-4 text-[clamp(1.75rem,4vw,3rem)] font-bold tracking-[-0.02em] leading-[1.15]">{t('openings.title')}</h2>
          </ScrollReveal>
          <StaggerContainer className="mt-8 space-y-4">
            {jobs.map((job) => (
              <StaggerItem key={job}>
                <div className="bg-[#F5F5F5] rounded-xl p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 hover:shadow-sm transition-shadow">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-lg bg-[#0A0A0A]/5 flex items-center justify-center shrink-0">
                      <Briefcase className="w-5 h-5 text-black/40" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-[#0A0A0A]">{t(`openings.${job}.title`)}</h3>
                      <div className="flex items-center gap-3 mt-1">
                        <span className="text-[11px] font-medium px-2.5 py-1 rounded-full bg-[#0A0A0A]/5 text-black/60">
                          {t(`openings.${job}.type`)}
                        </span>
                        <span className="text-xs text-black/40 flex items-center gap-1">
                          <MapPin className="w-3 h-3" />
                          {t(`openings.${job}.location`)}
                        </span>
                      </div>
                    </div>
                  </div>
                  <Button size="sm" className="bg-[#0A0A0A] hover:bg-[#0A0A0A]/90 text-white shrink-0 rounded-full px-5">
                    {t('apply')}
                    <ArrowUpRight className="ml-1 h-3 w-3" />
                  </Button>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
          <ScrollReveal delay={0.3}>
            <p className="mt-8 text-center text-black/40">{t('sendCv')}</p>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
