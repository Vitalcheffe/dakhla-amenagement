'use client';

import { useTranslations } from 'next-intl';
import { PageHero } from '@/components/shared/PageHero';
import { FadeIn, StaggerContainer, StaggerItem } from '@/components/shared/Animations';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Heart, GraduationCap, TrendingUp, Shield, MapPin, Briefcase, Send } from 'lucide-react';

export default function CareersPage() {
  const t = useTranslations('careers');

  const benefits = ['health', 'training', 'career', 'environment'] as const;
  const benefitIcons = [Heart, GraduationCap, TrendingUp, Shield];
  const jobs = ['job1', 'job2', 'job3', 'job4'] as const;

  return (
    <>
      <PageHero title={t('title')} subtitle={t('subtitle')} />

      {/* Culture */}
      <section className="bg-white py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="max-w-3xl">
              <h2 className="text-3xl font-bold text-navy tracking-tight">{t('culture.title')}</h2>
              <p className="mt-6 text-warm-gray leading-relaxed text-lg">{t('culture.text')}</p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Benefits */}
      <section className="bg-light-gray py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <h2 className="text-3xl font-bold text-navy tracking-tight text-center">{t('benefits.title')}</h2>
          </FadeIn>
          <StaggerContainer className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((b, i) => (
              <StaggerItem key={b}>
                <Card className="h-full border-border hover:shadow-lg transition-shadow text-center">
                  <CardContent className="p-6">
                    <div className="w-14 h-14 rounded-xl bg-navy/10 flex items-center justify-center mx-auto mb-4">
                      {(() => {
                        const Icon = benefitIcons[i];
                        return <Icon className="w-7 h-7 text-steel" />;
                      })()}
                    </div>
                    <h3 className="text-base font-semibold text-navy">{t(`benefits.${b}`)}</h3>
                  </CardContent>
                </Card>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Open Positions */}
      <section className="bg-white py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <h2 className="text-3xl font-bold text-navy tracking-tight">{t('openings.title')}</h2>
          </FadeIn>
          <StaggerContainer className="mt-8 space-y-4">
            {jobs.map((job) => (
              <StaggerItem key={job}>
                <Card className="border-border hover:shadow-lg transition-shadow">
                  <CardContent className="p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-lg bg-navy/10 flex items-center justify-center shrink-0">
                        <Briefcase className="w-5 h-5 text-steel" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-navy">{t(`openings.${job}.title`)}</h3>
                        <div className="flex items-center gap-3 mt-1">
                          <Badge variant="secondary" className="bg-steel/10 text-steel text-xs">
                            {t(`openings.${job}.type`)}
                          </Badge>
                          <span className="text-xs text-warm-gray flex items-center gap-1">
                            <MapPin className="w-3 h-3" />
                            {t(`openings.${job}.location`)}
                          </span>
                        </div>
                      </div>
                    </div>
                    <Button size="sm" className="bg-navy hover:bg-navy/90 text-white shrink-0">
                      {t('apply')}
                      <Send className="ml-2 h-3 w-3" />
                    </Button>
                  </CardContent>
                </Card>
              </StaggerItem>
            ))}
          </StaggerContainer>
          <FadeIn delay={0.3}>
            <p className="mt-8 text-center text-warm-gray">{t('sendCv')}</p>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
