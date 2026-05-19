'use client';

import { useTranslations } from 'next-intl';
import { useParams } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { Leaf, Zap, Droplets, TreePine, Shield, FileText, CheckCircle, ArrowRight, Wind, Recycle, BarChart3 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ScrollReveal, CountUp } from '@/components/shared/Animations';
import { PageHero } from '@/components/shared/PageHero';

export default function DurabilitePage() {
  const t = useTranslations('sustainability');
  const params = useParams();
  const locale = (params?.locale as string) || 'fr';

  const engagements = [
    { key: 'co2', icon: Leaf, color: '#1B3A5C' },
    { key: 'energy', icon: Zap, color: '#E8B84B' },
    { key: 'circular', icon: Recycle, color: '#C1272D' },
    { key: 'biodiversity', icon: TreePine, color: '#1B3A5C' },
  ] as const;

  const stats = [
    { value: 15, statKey: 'stat1' as const, icon: Wind },
    { value: 2500, statKey: 'stat2' as const, icon: Zap },
    { value: 85, statKey: 'stat3' as const, icon: Droplets },
    { value: 500, statKey: 'stat4' as const, icon: BarChart3 },
  ] as const;

  const actions = [
    { key: 'grinding', image: '/images/process/step2-grinding.jpg' },
    { key: 'filtration', image: '/images/factory/factory-interior.jpg' },
    { key: 'water', image: '/images/factory/factory-silos.jpg' },
    { key: 'waste', image: '/images/factory/warehouse.jpg' },
    { key: 'additions', image: '/images/process/step3-dosing-lab.jpg' },
    { key: 'monitoring', image: '/images/factory/control-room.jpg' },
  ] as const;

  const complianceItems = [
    { key: 'marhp', icon: Shield },
    { key: 'moroccan', icon: FileText },
    { key: 'reports', icon: CheckCircle },
  ] as const;

  return (
    <>
      <PageHero title={t('title')} subtitle={t('subtitle')} sectionCounter="/09" />

      {/* Section 1: Engagement 2030 */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <ScrollReveal>
            <h2 className="text-2xl md:text-3xl font-bold text-[#1B3A5C] mb-4">
              {t('engagement.title')}
            </h2>
            <p className="text-[#1A1A2E]/70 leading-relaxed max-w-3xl mb-12">
              {t('engagement.desc')}
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {engagements.map((item, i) => (
              <ScrollReveal key={item.key} delay={i * 0.1}>
                <div className="card-lift bg-white border border-[#E5E7EB] rounded-2xl p-6 h-full">
                  <div className="w-14 h-14 rounded-xl bg-[#1B3A5C]/10 flex items-center justify-center mb-5">
                    <item.icon className="w-7 h-7" style={{ color: item.color }} />
                  </div>
                  <h3 className="text-lg font-bold text-[#1B3A5C] mb-3">
                    {t(`engagement.${item.key}.title`)}
                  </h3>
                  <p className="text-[#6B7280] leading-relaxed text-sm">
                    {t(`engagement.${item.key}.desc`)}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Section 2: Environmental Numbers */}
      <section className="relative py-20 md:py-28 overflow-hidden">
        {/* Background image with overlay */}
        <div className="absolute inset-0">
          <Image
            src="/images/factory/factory-silos.jpg"
            alt="Dakhla Aménagement — Usine de Lassargua"
            fill
            quality={90}
            className="object-cover"
          />
          <div className="absolute inset-0 bg-[#1B3A5C]/90" />
        </div>

        <div className="relative max-w-[1400px] mx-auto px-6 md:px-12">
          <ScrollReveal>
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-16 text-center">
              {t('numbers.title')}
            </h2>
          </ScrollReveal>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {stats.map((stat, i) => (
              <ScrollReveal key={stat.statKey} delay={i * 0.1}>
                <div className="text-center p-6 md:p-8 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/10">
                  <div className="w-12 h-12 rounded-xl bg-[#E8B84B]/20 flex items-center justify-center mx-auto mb-4">
                    <stat.icon className="w-6 h-6 text-[#E8B84B]" />
                  </div>
                  <div className="text-3xl md:text-4xl font-bold text-white mb-2">
                    <CountUp end={stat.value} duration={2} />
                  </div>
                  <p className="text-white/70 text-sm">{t(`numbers.${stat.statKey}`)}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Section 3: Concrete Actions */}
      <section className="py-16 md:py-24 bg-[#F7F8FA]">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <ScrollReveal>
            <h2 className="text-2xl md:text-3xl font-bold text-[#1B3A5C] mb-3 text-center">
              {t('actions.title')}
            </h2>
            <p className="text-[#6B7280] text-center mb-12 max-w-2xl mx-auto">
              {t('actions.subtitle')}
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {actions.map((action, i) => (
              <ScrollReveal key={action.key} delay={i * 0.08}>
                <div className="card-lift bg-white border border-[#E5E7EB] rounded-2xl overflow-hidden h-full flex flex-col">
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={action.image}
                      alt={t(`actions.${action.key}.title`)}
                      fill
                      quality={90}
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#1B3A5C]/30 to-transparent" />
                  </div>
                  <div className="p-6 flex-1 flex flex-col">
                    <h3 className="text-lg font-bold text-[#1B3A5C] mb-3">
                      {t(`actions.${action.key}.title`)}
                    </h3>
                    <p className="text-[#6B7280] leading-relaxed text-sm flex-1">
                      {t(`actions.${action.key}.desc`)}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Section 4: Regulatory Compliance */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <ScrollReveal>
            <h2 className="text-2xl md:text-3xl font-bold text-[#1B3A5C] mb-3 text-center">
              {t('compliance.title')}
            </h2>
            <p className="text-[#6B7280] text-center mb-12 max-w-2xl mx-auto">
              {t('compliance.subtitle')}
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {complianceItems.map((item, i) => (
              <ScrollReveal key={item.key} delay={i * 0.1}>
                <div className="card-lift bg-[#F7F8FA] rounded-2xl p-6 h-full">
                  <div className="w-14 h-14 rounded-xl bg-[#1B3A5C]/10 flex items-center justify-center mb-5">
                    <item.icon className="w-7 h-7 text-[#1B3A5C]" />
                  </div>
                  <h3 className="text-lg font-bold text-[#1B3A5C] mb-3">
                    {t(`compliance.${item.key}.title`)}
                  </h3>
                  <p className="text-[#6B7280] leading-relaxed text-sm">
                    {t(`compliance.${item.key}.desc`)}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Section 5: CTA */}
      <section className="relative py-20 md:py-28 overflow-hidden">
        {/* Background image with overlay */}
        <div className="absolute inset-0">
          <Image
            src="/images/factory/factory-aerial.jpg"
            alt="Dakhla Aménagement — Vue aérienne"
            fill
            quality={90}
            className="object-cover"
          />
          <div className="absolute inset-0 bg-[#1B3A5C]/85" />
        </div>

        <div className="relative max-w-[1400px] mx-auto px-6 md:px-12 text-center">
          <ScrollReveal>
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
              {t('cta.title')}
            </h2>
            <p className="text-white/70 max-w-xl mx-auto mb-8">
              {t('cta.subtitle')}
            </p>
            <Link href={`/${locale}/contact`}>
              <Button className="bg-[#C1272D] text-white hover:bg-[#C1272D]/90 font-semibold rounded-full px-8 h-12 text-[15px]">
                {t('cta.button')} <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
