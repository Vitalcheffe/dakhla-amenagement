'use client';

import { useTranslations } from 'next-intl';
import { useParams } from 'next/navigation';
import Image from 'next/image';
import {
  Shield,
  GraduationCap,
  Heart,
  Users,
  Settings,
  Wrench,
  Microscope,
  Truck,
  Briefcase,
  Calculator,
  Mail,
  Sun,
  Waves,
  Wallet,
  ArrowRight,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ScrollReveal } from '@/components/shared/Animations';
import { PageHero } from '@/components/shared/PageHero';

export default function CarrieresPage() {
  const t = useTranslations('careers');
  const params = useParams();
  const locale = (params?.locale as string) || 'fr';

  const whyItems = [
    { key: 'stability', icon: Shield, color: '#1B3A5C' },
    { key: 'training', icon: GraduationCap, color: '#E8B84B' },
    { key: 'benefits', icon: Heart, color: '#C1272D' },
    { key: 'impact', icon: Users, color: '#1B3A5C' },
  ] as const;

  const jobItems = [
    { key: 'operator', icon: Settings },
    { key: 'technician', icon: Wrench },
    { key: 'engineer', icon: Microscope },
    { key: 'driver', icon: Truck },
    { key: 'sales', icon: Briefcase },
    { key: 'admin', icon: Calculator },
  ] as const;

  const lifeHighlights = [
    { key: 'sun', icon: Sun },
    { key: 'ocean', icon: Waves },
    { key: 'cost', icon: Wallet },
    { key: 'community', icon: Users },
  ] as const;

  return (
    <>
      <PageHero title={t('title')} subtitle={t('subtitle')} sectionCounter="/11" />

      {/* Section 1: Why Join Us */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <ScrollReveal>
            <h2 className="text-2xl md:text-3xl font-bold text-[#1B3A5C] mb-10 text-center">
              {t('why.title')}
            </h2>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {whyItems.map((item, i) => (
              <ScrollReveal key={item.key} delay={i * 0.1}>
                <div className="card-lift bg-white border border-[#E5E7EB] rounded-2xl p-8">
                  <div
                    className="w-14 h-14 rounded-2xl flex items-center justify-center mb-5"
                    style={{ backgroundColor: `${item.color}15` }}
                  >
                    <item.icon className="w-7 h-7" style={{ color: item.color }} />
                  </div>
                  <h3 className="text-xl font-bold text-[#1B3A5C] mb-3">
                    {t(`why.${item.key}.title`)}
                  </h3>
                  <p className="text-[#6B7280] leading-relaxed">
                    {t(`why.${item.key}.desc`)}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Section 2: Our Jobs */}
      <section className="py-16 md:py-24 bg-[#F7F8FA]">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <ScrollReveal>
            <h2 className="text-2xl md:text-3xl font-bold text-[#1B3A5C] mb-2 text-center">
              {t('jobs.title')}
            </h2>
            <p className="text-[#6B7280] text-center mb-10 max-w-2xl mx-auto">
              {t('jobs.subtitle')}
            </p>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {jobItems.map((item, i) => (
              <ScrollReveal key={item.key} delay={i * 0.08}>
                <div className="card-lift bg-[#F7F8FA] border border-[#E5E7EB] rounded-2xl p-6 h-full flex flex-col">
                  <div className="w-12 h-12 rounded-xl bg-[#1B3A5C]/10 flex items-center justify-center mb-5">
                    <item.icon className="w-6 h-6 text-[#1B3A5C]" />
                  </div>
                  <h3 className="text-lg font-bold text-[#1B3A5C] mb-3">
                    {t(`jobs.${item.key}.title`)}
                  </h3>
                  <p className="text-[#6B7280] leading-relaxed mb-4 flex-1">
                    {t(`jobs.${item.key}.desc`)}
                  </p>
                  <p className="text-sm italic text-[#1B3A5C]/60 border-t border-[#E5E7EB] pt-3">
                    {t(`jobs.${item.key}.skills`)}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Section 3: Job Openings */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <ScrollReveal>
            <h2 className="text-2xl md:text-3xl font-bold text-[#1B3A5C] mb-2 text-center">
              {t('openings.title')}
            </h2>
            <p className="text-[#6B7280] text-center mb-10 max-w-2xl mx-auto">
              {t('openings.subtitle')}
            </p>
          </ScrollReveal>

          {/* No openings state */}
          <ScrollReveal>
            <div className="max-w-2xl mx-auto">
              {/* No openings message */}
              <div className="bg-[#F7F8FA] border border-[#E5E7EB] rounded-2xl p-6 text-center mb-8">
                <p className="text-[#6B7280]">{t('openings.noOpenings')}</p>
              </div>

              {/* Spontaneous application card */}
              <div className="card-lift bg-white border border-[#E5E7EB] rounded-2xl p-8 text-center">
                <div className="w-16 h-16 rounded-2xl bg-[#1B3A5C]/10 flex items-center justify-center mx-auto mb-5">
                  <Mail className="w-8 h-8 text-[#1B3A5C]" />
                </div>
                <h3 className="text-xl font-bold text-[#1B3A5C] mb-3">
                  {t('openings.spontaneous')}
                </h3>
                <p className="text-[#6B7280] leading-relaxed mb-6">
                  {t('openings.spontaneousDesc')}
                </p>
                <a href="mailto:recrutement@ciment-dam.com">
                  <Button className="bg-[#C1272D] text-white hover:bg-[#C1272D]/90 font-semibold rounded-full px-8 h-12 text-[15px]">
                    {t('openings.sendCv')} <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </a>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Section 4: Life in Dakhla */}
      <section className="relative py-16 md:py-24 overflow-hidden">
        {/* Background image with overlay */}
        <Image
          src="/images/dakhla-aerial.jpg"
          alt="Dakhla aerial view"
          fill
          quality={90}
          className="object-cover"
        />
        <div className="absolute inset-0 bg-[#1B3A5C]/85" />

        <div className="relative max-w-[1400px] mx-auto px-6 md:px-12 text-white">
          <ScrollReveal>
            <h2 className="text-2xl md:text-3xl font-bold mb-2 text-center">
              {t('life.title')}
            </h2>
            <p className="text-white/70 text-center mb-6 max-w-2xl mx-auto">
              {t('life.subtitle')}
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <p className="text-white/80 leading-relaxed max-w-3xl mx-auto text-center mb-10">
              {t('life.desc')}
            </p>
          </ScrollReveal>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
            {lifeHighlights.map((item, i) => (
              <ScrollReveal key={item.key} delay={i * 0.1}>
                <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-4 text-center">
                  <item.icon className="w-6 h-6 text-[#E8B84B] mx-auto mb-2" />
                  <p className="text-sm font-medium text-white">
                    {t(`life.highlights.${item.key}`)}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Section 5: CTA */}
      <section className="relative py-16 md:py-20 overflow-hidden">
        <Image
          src="/images/factory/factory-aerial.jpg"
          alt="Dakhla Aménagement factory"
          fill
          quality={90}
          className="object-cover"
        />
        <div className="absolute inset-0 bg-[#1B3A5C]/90" />

        <div className="relative max-w-[1400px] mx-auto px-6 md:px-12 text-center">
          <ScrollReveal>
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">
              {t('cta.title')}
            </h2>
            <p className="text-white/70 mb-8 max-w-xl mx-auto">
              {t('cta.subtitle')}
            </p>
            <a href="mailto:recrutement@ciment-dam.com">
              <Button className="bg-[#E8B84B] text-[#1B3A5C] hover:bg-[#E8B84B]/90 font-semibold rounded-full px-8 h-12 text-[15px]">
                {t('cta.button')} <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </a>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
