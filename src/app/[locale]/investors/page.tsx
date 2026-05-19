'use client';

import { useTranslations } from 'next-intl';
import { PageHero } from '@/components/shared/PageHero';
import { ScrollReveal, StaggerContainer, StaggerItem } from '@/components/shared/Animations';
import { Users, DollarSign, BarChart3, TrendingUp, Building2, Globe, FileText, Download } from 'lucide-react';

export default function InvestorsPage() {
  const t = useTranslations('investors');

  const keyFigures = ['capacity', 'revenue', 'market', 'investment'] as const;
  const figureIcons = [BarChart3, TrendingUp, Globe, DollarSign];
  const reportKeys = ['r2024', 'r2023', 'r2022'] as const;

  return (
    <>
      <PageHero title={t('title')} subtitle={t('subtitle')} sectionCounter="/6.0" />

      {/* Governance */}
      <section className="py-20 md:py-32 bg-white">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <ScrollReveal>
              <span className="section-counter">/6.1</span>
              <h2 className="mt-4 text-[clamp(1.75rem,4vw,3rem)] font-bold tracking-[-0.02em] leading-[1.15]">{t('governance.title')}</h2>
              <p className="mt-6 text-black/50 leading-relaxed text-lg">{t('governance.text')}</p>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <div className="bg-[#F5F5F5] rounded-xl p-6 space-y-4">
                {['board', 'ceo', 'cfo', 'coo'].map((role) => (
                  <div key={role} className="flex items-center gap-3 p-3 bg-white rounded-lg">
                    <div className="w-10 h-10 rounded-lg bg-[#0A0A0A]/5 flex items-center justify-center shrink-0">
                      <Users className="w-5 h-5 text-black/40" />
                    </div>
                    <p className="text-sm font-medium text-[#0A0A0A]">{t(`governance.${role}`)}</p>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Financial Data */}
      <section className="py-20 md:py-32 bg-[#0A0A0A] text-white">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <ScrollReveal>
            <span className="section-counter text-white/20">/6.2</span>
            <h2 className="mt-4 text-[clamp(1.75rem,4vw,3rem)] font-bold tracking-[-0.02em] leading-[1.15]">{t('financial.title')}</h2>
          </ScrollReveal>
          <ScrollReveal delay={0.15}>
            <div className="mt-8 bg-white/5 border border-white/10 backdrop-blur-sm rounded-xl p-6 lg:p-8">
              <div className="grid sm:grid-cols-2 gap-6">
                {['capital', 'shares', 'parValue', 'ownership'].map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <Building2 className="w-5 h-5 text-white/30 shrink-0 mt-0.5" />
                    <p className="text-sm font-medium text-white/80">{t(`financial.${item}`)}</p>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Key Figures */}
      <section className="py-20 md:py-32 bg-[#F5F5F5]">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <ScrollReveal>
            <span className="section-counter">/6.3</span>
            <h2 className="mt-4 text-[clamp(1.75rem,4vw,3rem)] font-bold tracking-[-0.02em] leading-[1.15] text-center">{t('keyFigures.title')}</h2>
          </ScrollReveal>
          <StaggerContainer className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {keyFigures.map((fig, i) => (
              <StaggerItem key={fig}>
                <div className="h-full bg-white rounded-xl p-6 text-center card-lift">
                  <div className="w-14 h-14 rounded-xl bg-[#0A0A0A]/5 flex items-center justify-center mx-auto mb-4">
                    {(() => {
                      const Icon = figureIcons[i];
                      return <Icon className="w-7 h-7 text-black/40" />;
                    })()}
                  </div>
                  <p className="text-sm font-medium text-black/60">{t(`keyFigures.${fig}`)}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Financial Reports */}
      <section className="py-20 md:py-32 bg-white">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <ScrollReveal>
            <span className="section-counter">/6.4</span>
            <h2 className="mt-4 text-[clamp(1.75rem,4vw,3rem)] font-bold tracking-[-0.02em] leading-[1.15]">{t('reports.title')}</h2>
          </ScrollReveal>
          <StaggerContainer className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-6">
            {reportKeys.map((key) => (
              <StaggerItem key={key}>
                <div className="h-full bg-[#F5F5F5] rounded-xl p-6 card-lift">
                  <div className="w-12 h-12 rounded-xl bg-[#8B2252]/10 flex items-center justify-center mb-4">
                    <FileText className="w-6 h-6 text-[#8B2252]" />
                  </div>
                  <h3 className="font-bold text-lg text-[#0A0A0A]">{t(`reports.${key}.title`)}</h3>
                  <p className="mt-2 text-sm text-black/50 leading-relaxed">{t(`reports.${key}.desc`)}</p>
                  <button className="mt-4 inline-flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-full border border-[#8B2252]/20 text-[#8B2252] hover:bg-[#8B2252]/5 transition-colors">
                    <Download className="h-3 w-3" />
                    PDF
                  </button>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>
    </>
  );
}
