'use client';

import { useTranslations } from 'next-intl';
import { PageHero } from '@/components/shared/PageHero';
import { FadeIn, StaggerContainer, StaggerItem } from '@/components/shared/Animations';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ShieldCheck, Award, FileCheck, FlaskConical, ClipboardCheck } from 'lucide-react';

export default function CertificationsPage() {
  const t = useTranslations('certifications');

  const activeCerts = ['nm', 'en'] as const;
  const testingSteps = ['sampling', 'analysis', 'validation', 'certification'] as const;
  const testingIcons = [FlaskConical, ClipboardCheck, FileCheck, Award];

  return (
    <>
      <PageHero title={t('title')} subtitle={t('subtitle')} image="/images/quality-lab.png" />

      {/* Active Certifications */}
      <section className="bg-white py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <h2 className="text-3xl font-bold text-navy tracking-tight text-center">
              {t('active.title')}
            </h2>
          </FadeIn>
          <StaggerContainer className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {activeCerts.map((cert) => (
              <StaggerItem key={cert}>
                <Card className="h-full border-border hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-12 h-12 rounded-xl bg-navy/10 flex items-center justify-center">
                        <ShieldCheck className="w-6 h-6 text-steel" />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-navy">{t(`active.${cert}.name`)}</h3>
                        <Badge variant="secondary" className="bg-green-100 text-green-700 font-medium">
                          {t(`active.${cert}.status`)}
                        </Badge>
                      </div>
                    </div>
                    <p className="text-sm text-warm-gray leading-relaxed">
                      {t(`active.${cert}.desc`)}
                    </p>
                  </CardContent>
                </Card>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* In Progress */}
      <section className="bg-light-gray py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <h2 className="text-3xl font-bold text-navy tracking-tight text-center">
              {t('inProgress.title')}
            </h2>
          </FadeIn>
          <FadeIn delay={0.2}>
            <div className="mt-10 max-w-2xl mx-auto">
              <Card className="border-border hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-xl bg-amber-100 flex items-center justify-center">
                      <Award className="w-6 h-6 text-amber-600" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-navy">{t('inProgress.iso.name')}</h3>
                      <Badge variant="secondary" className="bg-amber-100 text-amber-700 font-medium">
                        {t('inProgress.iso.status')}
                      </Badge>
                    </div>
                  </div>
                  <p className="text-sm text-warm-gray leading-relaxed">
                    {t('inProgress.iso.desc')}
                  </p>
                  {/* Progress bar */}
                  <div className="mt-4">
                    <div className="h-2 bg-amber-100 rounded-full overflow-hidden">
                      <div className="h-full bg-amber-500 rounded-full" style={{ width: '70%' }} />
                    </div>
                    <p className="mt-2 text-xs text-warm-gray">70%</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Testing Process */}
      <section className="bg-white py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <h2 className="text-3xl font-bold text-navy tracking-tight text-center">
              {t('testing.title')}
            </h2>
            <p className="mt-4 text-warm-gray leading-relaxed text-lg text-center max-w-3xl mx-auto">
              {t('testing.desc')}
            </p>
          </FadeIn>
          <StaggerContainer className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {testingSteps.map((step, i) => {
              const Icon = testingIcons[i];
              return (
                <StaggerItem key={step}>
                  <Card className="h-full border-border hover:shadow-lg transition-shadow">
                    <CardContent className="p-6 text-center">
                      <div className="w-14 h-14 rounded-xl bg-navy/10 flex items-center justify-center mx-auto mb-4">
                        <Icon className="w-7 h-7 text-steel" />
                      </div>
                      <div className="font-mono text-xs text-steel font-medium mb-2">0{i + 1}</div>
                      <p className="text-sm font-medium text-navy">{t(`testing.steps.${step}`)}</p>
                    </CardContent>
                  </Card>
                </StaggerItem>
              );
            })}
          </StaggerContainer>
        </div>
      </section>

      {/* Quality Commitment */}
      <section className="bg-navy py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold text-white tracking-tight">
                {t('commitment.title')}
              </h2>
              <p className="mt-6 text-lg text-white/70 leading-relaxed">
                {t('commitment.text')}
              </p>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
