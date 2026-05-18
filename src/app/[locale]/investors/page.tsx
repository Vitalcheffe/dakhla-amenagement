'use client';

import { useTranslations } from 'next-intl';
import { PageHero } from '@/components/shared/PageHero';
import { FadeIn, StaggerContainer, StaggerItem } from '@/components/shared/Animations';
import { Card, CardContent } from '@/components/ui/card';
import { Users, DollarSign, BarChart3, TrendingUp, Building2, Globe } from 'lucide-react';

export default function InvestorsPage() {
  const t = useTranslations('investors');

  const keyFigures = ['capacity', 'revenue', 'market', 'investment'] as const;
  const figureIcons = [BarChart3, TrendingUp, Globe, DollarSign];

  return (
    <>
      <PageHero title={t('title')} subtitle={t('subtitle')} />

      {/* Governance */}
      <section className="bg-white py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <FadeIn>
              <h2 className="text-3xl font-bold text-navy tracking-tight">{t('governance.title')}</h2>
              <p className="mt-6 text-warm-gray leading-relaxed text-lg">{t('governance.text')}</p>
            </FadeIn>
            <FadeIn delay={0.2}>
              <Card className="border-border">
                <CardContent className="p-6 space-y-4">
                  {['board', 'ceo', 'cfo', 'coo'].map((role) => (
                    <div key={role} className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-navy/10 flex items-center justify-center shrink-0">
                        <Users className="w-5 h-5 text-steel" />
                      </div>
                      <div>
                        <p className="text-sm font-medium text-navy">{t(`governance.${role}`)}</p>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Financial Data */}
      <section className="bg-light-gray py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <h2 className="text-3xl font-bold text-navy tracking-tight">{t('financial.title')}</h2>
          </FadeIn>
          <FadeIn delay={0.15}>
            <Card className="mt-8 border-border">
              <CardContent className="p-6 lg:p-8">
                <div className="grid sm:grid-cols-2 gap-6">
                  {['capital', 'shares', 'parValue', 'ownership'].map((item) => (
                    <div key={item} className="flex items-start gap-3">
                      <Building2 className="w-5 h-5 text-steel shrink-0 mt-0.5" />
                      <p className="text-sm font-medium text-navy">{t(`financial.${item}`)}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </FadeIn>
        </div>
      </section>

      {/* Key Figures */}
      <section className="bg-white py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <h2 className="text-3xl font-bold text-navy tracking-tight text-center">
              {t('keyFigures.title')}
            </h2>
          </FadeIn>
          <StaggerContainer className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {keyFigures.map((fig, i) => (
              <StaggerItem key={fig}>
                <Card className="h-full border-border hover:shadow-lg transition-shadow text-center">
                  <CardContent className="p-6">
                    <div className="w-14 h-14 rounded-xl bg-navy/10 flex items-center justify-center mx-auto mb-4">
                      {(() => {
                        const Icon = figureIcons[i];
                        return <Icon className="w-7 h-7 text-steel" />;
                      })()}
                    </div>
                    <p className="text-sm font-medium text-navy">{t(`keyFigures.${fig}`)}</p>
                  </CardContent>
                </Card>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>
    </>
  );
}
