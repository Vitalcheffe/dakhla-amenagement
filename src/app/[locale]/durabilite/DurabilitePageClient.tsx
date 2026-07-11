'use client';

import { useTranslations } from 'next-intl';
import { useParams } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import {
  Leaf,
  Zap,
  Recycle,
  Shield,
  Droplets,
  Wind,
  Sun,
  TreePine,
  Target,
  TrendingDown,
  ArrowRight,
  CheckCircle,
  Award,
  FileCheck,
  Users,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ScrollReveal, CountUp } from '@/components/shared/Animations';
import { PageHero } from '@/components/shared/PageHero';

export default function DurabilitePageClient() {
  const t = useTranslations('sustainability');
  const params = useParams();
  const locale = (params?.locale as string) || 'fr';

  // ─── Engagement Cards ───
  const engagements = [
    {
      key: 'co2',
      icon: TrendingDown,
      color: '#C1272D',
      bg: 'bg-[#C1272D]/10',
    },
    {
      key: 'energy',
      icon: Zap,
      color: '#E8B84B',
      bg: 'bg-[#E8B84B]/10',
    },
    {
      key: 'circular',
      icon: Recycle,
      color: '#1B3A5C',
      bg: 'bg-[#1B3A5C]/10',
    },
    {
      key: 'biodiversity',
      icon: TreePine,
      color: '#1B3A5C',
      bg: 'bg-[#1B3A5C]/10',
    },
  ] as const;

  // ─── Environmental Counters ───
  const counters = [
    {
      value: 30,
      suffix: '%',
      labelKey: 'co2',
      icon: TrendingDown,
      color: '#C1272D',
    },
    {
      value: 40,
      suffix: '%',
      labelKey: 'renewable',
      icon: Sun,
      color: '#E8B84B',
    },
    {
      value: 95,
      suffix: '%',
      labelKey: 'waste',
      icon: Recycle,
      color: '#1B3A5C',
    },
    {
      value: 100,
      suffix: '%',
      labelKey: 'water',
      icon: Droplets,
      color: '#1B3A5C',
    },
  ] as const;

  // ─── Action Cards ───
  const actions = [
    {
      key: 'solar',
      icon: Sun,
      image: '/images/solar-industrial.jpg',
      color: '#E8B84B',
    },
    {
      key: 'clinker',
      icon: Leaf,
      image: '/images/process/step3-dosing-lab.jpg',
      color: '#1B3A5C',
    },
    {
      key: 'water',
      icon: Droplets,
      image: '/images/factory/factory-silos.jpg',
      color: '#1B3A5C',
    },
    {
      key: 'dust',
      icon: Wind,
      image: '/images/factory/factory-interior.jpg',
      color: '#6B7280',
    },
    {
      key: 'sourcing',
      icon: Target,
      image: '/images/factory/factory-exterior.jpg',
      color: '#1B3A5C',
    },
    {
      key: 'training',
      icon: Users,
      image: '/images/factory/control-room.jpg',
      color: '#C1272D',
    },
  ] as const;

  // ─── Compliance Badges ───
  const complianceItems = [
    {
      key: 'nm',
      icon: FileCheck,
      status: 'certified',
    },
    {
      key: 'iso',
      icon: Award,
      status: 'inProgress',
    },
    {
      key: 'law',
      icon: Shield,
      status: 'certified',
    },
  ] as const;

  return (
    <>
      {/* ─── Hero ─── */}
      <PageHero
        title={t('title')}
        subtitle={t('subtitle')}
        sectionCounter="/08"
      />

      {/* ─── Section 1: Engagement 2030 ─── */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          {/* Mission Statement */}
          <ScrollReveal>
            <div className="relative overflow-hidden rounded-3xl mb-16">
              <div className="absolute inset-0">
                <Image
                  src="/images/sustainability.jpg"
                  alt="Dakhla Aménagement — Durabilité"
                  fill
                  quality={90}
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-[#1B3A5C]/85" />
              </div>
              <div className="relative p-8 md:p-14">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-[#E8B84B]/20 flex items-center justify-center">
                    <Leaf className="w-6 h-6 text-[#E8B84B]" />
                  </div>
                  <span className="text-[#E8B84B] font-semibold text-sm tracking-widest uppercase">
                    2030
                  </span>
                </div>
                <h2 className="text-2xl md:text-4xl font-bold text-white mb-6 leading-tight max-w-3xl">
                  {t('engagement.title')}
                </h2>
                <p className="text-white/80 leading-relaxed max-w-3xl text-lg">
                  {t('engagement.desc')}
                </p>
              </div>
            </div>
          </ScrollReveal>

          {/* 4 Engagement Cards (2x2) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {engagements.map((item, i) => (
              <ScrollReveal key={item.key} delay={i * 0.1}>
                <div className="card-lift bg-white border border-[#E5E7EB] rounded-2xl p-6 md:p-8 h-full group hover:border-[#1B3A5C]/30 transition-colors">
                  <div className="flex items-start gap-5">
                    <div
                      className={`w-14 h-14 rounded-xl ${item.bg} flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform`}
                    >
                      <item.icon className="w-7 h-7" style={{ color: item.color }} />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-[#1B3A5C] mb-2">
                        {t(`engagement.${item.key}.title`)}
                      </h3>
                      <p className="text-[#6B7280] leading-relaxed text-sm">
                        {t(`engagement.${item.key}.desc`)}
                      </p>
                      {item.key === 'co2' && (
                        <Badge className="mt-3 bg-[#C1272D]/10 text-[#C1272D] border-0 hover:bg-[#C1272D]/15 text-xs font-semibold">
                          <Target className="w-3 h-3 mr-1" />
                          {t('engagement.co2.target')}
                        </Badge>
                      )}
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Section 2: Environmental Counters ─── */}
      <section className="relative py-20 md:py-28 overflow-hidden">
        {/* Background with overlay */}
        <div className="absolute inset-0">
          <Image
            src="/images/factory/factory-aerial.jpg"
            alt="Dakhla Aménagement — Usine de Lassargua"
            fill
            quality={90}
            className="object-cover"
          />
          <div className="absolute inset-0 bg-[#1B3A5C]/90" />
        </div>

        <div className="relative max-w-[1400px] mx-auto px-6 md:px-12">
          <ScrollReveal>
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4 text-center">
              {t('counters.title')}
            </h2>
            <p className="text-white/60 text-center mb-16 max-w-2xl mx-auto">
              {t('counters.subtitle')}
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {counters.map((counter, i) => (
              <ScrollReveal key={counter.labelKey} delay={i * 0.1}>
                <div className="text-center p-6 md:p-8 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/10 hover:bg-white/15 transition-colors">
                  <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center mx-auto mb-4">
                    <counter.icon className="w-6 h-6" style={{ color: counter.color === '#C1272D' ? '#F87171' : counter.color === '#E8B84B' ? '#E8B84B' : '#93C5FD' }} />
                  </div>
                  <div className="text-3xl md:text-5xl font-bold text-white mb-2">
                    <CountUp end={counter.value} duration={2} suffix={counter.suffix} />
                  </div>
                  <p className="text-white/70 text-sm font-medium">
                    {t(`counters.${counter.labelKey}`)}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Section 3: 6 Action Cards (3x2) ─── */}
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
                <div className="card-lift bg-white border border-[#E5E7EB] rounded-2xl overflow-hidden h-full flex flex-col group">
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={action.image}
                      alt={t(`actions.${action.key}.title`)}
                      fill
                      quality={90}
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#1B3A5C]/40 to-transparent" />
                    <div className="absolute bottom-4 left-4">
                      <div
                        className="w-10 h-10 rounded-lg flex items-center justify-center"
                        style={{ backgroundColor: `${action.color}20` }}
                      >
                        <action.icon
                          className="w-5 h-5"
                          style={{ color: action.color }}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="p-6 flex-1 flex flex-col">
                    <h3 className="text-lg font-bold text-[#1B3A5C] mb-2">
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

      {/* ─── Section 4: Regulatory Compliance Badges ─── */}
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
                <div className="card-lift bg-[#F7F8FA] rounded-2xl p-8 h-full text-center border border-[#E5E7EB] hover:border-[#1B3A5C]/30 transition-colors">
                  <div className="w-16 h-16 rounded-2xl bg-[#1B3A5C]/10 flex items-center justify-center mx-auto mb-5">
                    <item.icon className="w-8 h-8 text-[#1B3A5C]" />
                  </div>
                  <h3 className="text-lg font-bold text-[#1B3A5C] mb-2">
                    {t(`compliance.${item.key}.title`)}
                  </h3>
                  <p className="text-[#6B7280] leading-relaxed text-sm mb-4">
                    {t(`compliance.${item.key}.desc`)}
                  </p>
                  <Badge
                    className={`${
                      item.status === 'certified'
                        ? 'bg-green-50 text-green-700 border-green-200'
                        : 'bg-[#E8B84B]/10 text-[#E8B84B] border-[#E8B84B]/30'
                    } border text-xs font-semibold`}
                  >
                    {item.status === 'certified' ? (
                      <CheckCircle className="w-3 h-3 mr-1" />
                    ) : null}
                    {t(`compliance.${item.key}.status`)}
                  </Badge>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Section 5: CTA ─── */}
      <section className="relative py-20 md:py-28 overflow-hidden">
        {/* Background image with overlay */}
        <div className="absolute inset-0">
          <Image
            src="/images/dakhla-aerial.jpg"
            alt="Dakhla Aménagement — Vue aérienne"
            fill
            quality={90}
            className="object-cover"
          />
          <div className="absolute inset-0 bg-[#1B3A5C]/85" />
        </div>

        <div className="relative max-w-[1400px] mx-auto px-6 md:px-12 text-center">
          <ScrollReveal>
            <div className="w-14 h-14 rounded-2xl bg-[#E8B84B]/20 flex items-center justify-center mx-auto mb-6">
              <Leaf className="w-7 h-7 text-[#E8B84B]" />
            </div>
            <h2 className="text-2xl md:text-4xl font-bold text-white mb-4">
              {t('cta.title')}
            </h2>
            <p className="text-white/70 max-w-xl mx-auto mb-8 text-lg">
              {t('cta.subtitle')}
            </p>
            <Link href={`/${locale}/contact`}>
              <Button className="bg-[#C1272D] text-white hover:bg-[#C1272D]/90 font-semibold rounded-full px-8 h-12 text-[15px] shadow-lg hover:shadow-xl transition-all">
                {t('cta.button')} <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
