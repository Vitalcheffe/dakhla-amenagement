'use client';

import { useTranslations } from 'next-intl';
import { PageHero } from '@/components/shared/PageHero';
import { ScrollReveal, FadeIn, StaggerContainer, StaggerItem } from '@/components/shared/Animations';
import { Card, CardContent } from '@/components/ui/card';
import { Users, DollarSign, BarChart3, TrendingUp, Building2, Globe, FileText, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function InvestorsPage() {
  const t = useTranslations('investors');

  const keyFigures = ['capacity', 'revenue', 'market', 'investment'] as const;
  const figureIcons = [BarChart3, TrendingUp, Globe, DollarSign];
  const reportKeys = ['r2024', 'r2023', 'r2022'] as const;

  return (
    <>
      <PageHero title={t('title')} subtitle={t('subtitle')} />

      {/* Governance */}
      <section className="bg-gris-clair py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <ScrollReveal>
              <h2 className="font-heading text-3xl font-bold text-anthracite tracking-tight">{t('governance.title')}</h2>
              <p className="mt-6 text-acier leading-relaxed text-lg">{t('governance.text')}</p>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <Card className="border-anthracite/5 shadow-sm">
                <CardContent className="p-6 space-y-4">
                  {['board', 'ceo', 'cfo', 'coo'].map((role) => (
                    <div key={role} className="flex items-center gap-3 p-3 bg-gris-clair rounded-lg">
                      <div className="w-10 h-10 rounded-lg bg-bleu-ocean/10 flex items-center justify-center shrink-0">
                        <Users className="w-5 h-5 text-bleu-ocean" />
                      </div>
                      <p className="text-sm font-medium text-anthracite">{t(`governance.${role}`)}</p>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Financial Data */}
      <section className="bg-anthracite py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <h2 className="font-heading text-3xl font-bold text-white tracking-tight">{t('financial.title')}</h2>
          </ScrollReveal>
          <ScrollReveal delay={0.15}>
            <Card className="mt-8 bg-white/5 border-white/10 backdrop-blur-sm">
              <CardContent className="p-6 lg:p-8">
                <div className="grid sm:grid-cols-2 gap-6">
                  {['capital', 'shares', 'parValue', 'ownership'].map((item) => (
                    <div key={item} className="flex items-start gap-3">
                      <Building2 className="w-5 h-5 text-bleu-ocean shrink-0 mt-0.5" />
                      <p className="text-sm font-medium text-white/80">{t(`financial.${item}`)}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </ScrollReveal>
        </div>
      </section>

      {/* Key Figures */}
      <section className="bg-gris-clair py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <h2 className="font-heading text-3xl font-bold text-anthracite tracking-tight text-center">
              {t('keyFigures.title')}
            </h2>
          </ScrollReveal>
          <StaggerContainer className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {keyFigures.map((fig, i) => (
              <StaggerItem key={fig}>
                <Card className="h-full border-anthracite/5 hover:shadow-lg transition-shadow text-center">
                  <CardContent className="p-6">
                    <div className="w-14 h-14 rounded-xl bg-bleu-ocean/10 flex items-center justify-center mx-auto mb-4">
                      {(() => {
                        const Icon = figureIcons[i];
                        return <Icon className="w-7 h-7 text-bleu-ocean" />;
                      })()}
                    </div>
                    <p className="text-sm font-medium text-anthracite/80">{t(`keyFigures.${fig}`)}</p>
                  </CardContent>
                </Card>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Financial Reports */}
      <section className="bg-white py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <h2 className="font-heading text-3xl font-bold text-anthracite tracking-tight">
              {t('reports.title')}
            </h2>
          </ScrollReveal>
          <StaggerContainer className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-6">
            {reportKeys.map((key) => (
              <StaggerItem key={key}>
                <Card className="h-full border-anthracite/5 hover:shadow-lg transition-shadow hover:border-bleu-ocean/20">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 rounded-xl bg-bordeaux/10 flex items-center justify-center mb-4">
                      <FileText className="w-6 h-6 text-bordeaux" />
                    </div>
                    <h3 className="font-heading text-lg font-bold text-anthracite">
                      {t(`reports.${key}.title`)}
                    </h3>
                    <p className="mt-2 text-sm text-acier leading-relaxed">
                      {t(`reports.${key}.desc`)}
                    </p>
                    <Button variant="outline" size="sm" className="mt-4 border-bordeaux/20 text-bordeaux hover:bg-bordeaux/5">
                      <Download className="mr-2 h-3 w-3" />
                      PDF
                    </Button>
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
