'use client';

import { useTranslations } from 'next-intl';
import { PageHero } from '@/components/shared/PageHero';
import { ScrollReveal, FadeIn, StaggerContainer, StaggerItem } from '@/components/shared/Animations';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Heart, GraduationCap, TrendingUp, Shield, MapPin, Briefcase, Send, Target, Lightbulb, Rocket, Users } from 'lucide-react';

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
      <PageHero title={t('title')} subtitle={t('subtitle')} />

      {/* Why Join Us */}
      <section className="bg-anthracite py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <h2 className="font-heading text-3xl font-bold text-white tracking-tight text-center">
              {t('whyJoin.title')}
            </h2>
          </ScrollReveal>
          <StaggerContainer className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyJoinReasons.map((reason, i) => {
              const Icon = reason.icon;
              return (
                <StaggerItem key={reason.key}>
                  <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 text-center hover:border-bleu-ocean/40 transition-colors">
                    <div className="w-14 h-14 rounded-xl bg-bleu-ocean/10 flex items-center justify-center mx-auto mb-4">
                      <Icon className="w-7 h-7 text-bleu-ocean" />
                    </div>
                    <h3 className="font-heading text-base font-bold text-white">
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
      <section className="bg-gris-clair py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="max-w-3xl">
              <h2 className="font-heading text-3xl font-bold text-anthracite tracking-tight">{t('culture.title')}</h2>
              <p className="mt-6 text-acier leading-relaxed text-lg">{t('culture.text')}</p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Benefits */}
      <section className="bg-white py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <h2 className="font-heading text-3xl font-bold text-anthracite tracking-tight text-center">{t('benefits.title')}</h2>
          </ScrollReveal>
          <StaggerContainer className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((b, i) => (
              <StaggerItem key={b}>
                <Card className="h-full border-anthracite/5 hover:shadow-lg transition-shadow text-center">
                  <CardContent className="p-6">
                    <div className="w-14 h-14 rounded-xl bg-bleu-ocean/10 flex items-center justify-center mx-auto mb-4">
                      {(() => {
                        const Icon = benefitIcons[i];
                        return <Icon className="w-7 h-7 text-bleu-ocean" />;
                      })()}
                    </div>
                    <h3 className="text-base font-semibold text-anthracite">{t(`benefits.${b}`)}</h3>
                  </CardContent>
                </Card>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Open Positions */}
      <section className="bg-gris-clair py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <h2 className="font-heading text-3xl font-bold text-anthracite tracking-tight">{t('openings.title')}</h2>
          </ScrollReveal>
          <StaggerContainer className="mt-8 space-y-4">
            {jobs.map((job) => (
              <StaggerItem key={job}>
                <Card className="border-anthracite/5 hover:shadow-lg transition-shadow">
                  <CardContent className="p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-lg bg-bleu-ocean/10 flex items-center justify-center shrink-0">
                        <Briefcase className="w-5 h-5 text-bleu-ocean" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-anthracite">{t(`openings.${job}.title`)}</h3>
                        <div className="flex items-center gap-3 mt-1">
                          <Badge variant="secondary" className="bg-bleu-ocean/10 text-bleu-ocean text-xs">
                            {t(`openings.${job}.type`)}
                          </Badge>
                          <span className="text-xs text-acier flex items-center gap-1">
                            <MapPin className="w-3 h-3" />
                            {t(`openings.${job}.location`)}
                          </span>
                        </div>
                      </div>
                    </div>
                    <Button size="sm" className="bg-bleu-ocean hover:bg-bleu-ocean/90 text-white shrink-0">
                      {t('apply')}
                      <Send className="ml-2 h-3 w-3" />
                    </Button>
                  </CardContent>
                </Card>
              </StaggerItem>
            ))}
          </StaggerContainer>
          <ScrollReveal delay={0.3}>
            <p className="mt-8 text-center text-acier">{t('sendCv')}</p>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
