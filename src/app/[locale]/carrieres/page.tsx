'use client';

import { useTranslations } from 'next-intl';
import Image from 'next/image';
import {
  Users,
  Briefcase,
  Heart,
  GraduationCap,
  MapPin,
  ArrowRight,
  CheckCircle2,
  Settings,
  Microscope,
  Truck,
  Crown,
  Mail,
  Phone,
  Sun,
  Waves,
  Wallet,
  Building2,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ScrollReveal, CountUp } from '@/components/shared/Animations';
import { PageHero } from '@/components/shared/PageHero';

export default function CarrieresPage() {
  const t = useTranslations('careers');

  // --- Why Join DAM benefits ---
  const benefits = [
    {
      key: 'durable',
      icon: Users,
      color: '#1B3A5C',
      hasStats: true,
    },
    {
      key: 'training',
      icon: GraduationCap,
      color: '#E8B84B',
      hasStats: false,
    },
    {
      key: 'social',
      icon: Heart,
      color: '#C1272D',
      hasStats: false,
    },
    {
      key: 'impact',
      icon: Building2,
      color: '#1B3A5C',
      hasStats: true,
    },
  ] as const;

  // --- 5 Job Type Sections ---
  const jobTypes = [
    { key: 'production', icon: Settings, color: '#1B3A5C' },
    { key: 'quality', icon: Microscope, color: '#E8B84B' },
    { key: 'logistics', icon: Truck, color: '#C1272D' },
    { key: 'commercial', icon: Briefcase, color: '#1B3A5C' },
    { key: 'direction', icon: Crown, color: '#E8B84B' },
  ] as const;

  // --- Current Openings ---
  const openings = [
    { key: 'maintenance' },
    { key: 'teamLead' },
    { key: 'qualityManager' },
    { key: 'salesRep' },
    { key: 'processEngineer' },
  ] as const;

  // Number of role chips per job type
  const jobTypeRoleCounts: Record<string, number> = {
    production: 3,
    quality: 3,
    logistics: 3,
    commercial: 3,
    direction: 2,
  };

  // Number of requirements per opening
  const openingReqCounts: Record<string, number> = {
    maintenance: 3,
    teamLead: 3,
    qualityManager: 3,
    salesRep: 3,
    processEngineer: 3,
  };

  // --- Life in Dakhla highlights ---
  const lifeHighlights = [
    { key: 'cost', icon: Wallet },
    { key: 'climate', icon: Sun },
    { key: 'community', icon: Users },
    { key: 'outdoor', icon: Waves },
  ] as const;

  return (
    <>
      {/* ===== PageHero ===== */}
      <PageHero
        title={t('title')}
        subtitle={t('subtitle')}
        sectionCounter="/10"
      />

      {/* ===== Section 1: Why Join DAM ===== */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <ScrollReveal>
            <h2 className="text-2xl md:text-3xl font-bold text-[#1B3A5C] mb-4 text-center">
              {t('benefits.title')}
            </h2>
            <p className="text-[#6B7280] text-center mb-12 max-w-2xl mx-auto">
              {t('benefits.subtitle')}
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {benefits.map((item, i) => (
              <ScrollReveal key={item.key} delay={i * 0.1}>
                <div className="card-lift bg-white border border-[#E5E7EB] rounded-2xl p-8 h-full">
                  <div
                    className="w-14 h-14 rounded-2xl flex items-center justify-center mb-5"
                    style={{ backgroundColor: `${item.color}15` }}
                  >
                    <item.icon className="w-7 h-7" style={{ color: item.color }} />
                  </div>
                  <h3 className="text-xl font-bold text-[#1B3A5C] mb-3">
                    {t(`benefits.${item.key}.title`)}
                  </h3>
                  <p className="text-[#6B7280] leading-relaxed">
                    {t(`benefits.${item.key}.desc`)}
                  </p>
                  {item.hasStats && (
                    <div className="flex items-center gap-6 border-t border-[#E5E7EB] pt-4 mt-4">
                      <div>
                        <span className="text-2xl font-bold text-[#1B3A5C]">
                          <CountUp end={Number(t(`benefits.${item.key}.stat1Value`))} duration={2} />
                        </span>
                        <p className="text-xs text-[#6B7280] mt-0.5">
                          {t(`benefits.${item.key}.stat1Label`)}
                        </p>
                      </div>
                      {t(`benefits.${item.key}.stat2Value`) && (
                        <div>
                          <span className="text-2xl font-bold text-[#C1272D]">
                            <CountUp end={Number(t(`benefits.${item.key}.stat2Value`))} duration={2.5} />
                          </span>
                          <p className="text-xs text-[#6B7280] mt-0.5">
                            {t(`benefits.${item.key}.stat2Label`)}
                          </p>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ===== Section 2: Job Type Sections ===== */}
      <section className="py-16 md:py-24 bg-[#F7F8FA]">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <ScrollReveal>
            <h2 className="text-2xl md:text-3xl font-bold text-[#1B3A5C] mb-4 text-center">
              {t('jobTypes.title')}
            </h2>
            <p className="text-[#6B7280] text-center mb-12 max-w-2xl mx-auto">
              {t('jobTypes.subtitle')}
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {jobTypes.map((item, i) => {
              const roleCount = jobTypeRoleCounts[item.key] || 0;
              return (
                <ScrollReveal key={item.key} delay={i * 0.08}>
                  <div className="card-lift bg-white border border-[#E5E7EB] rounded-2xl p-8 h-full flex flex-col">
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center mb-5"
                      style={{ backgroundColor: `${item.color}12` }}
                    >
                      <item.icon className="w-6 h-6" style={{ color: item.color }} />
                    </div>
                    <h3 className="text-lg font-bold text-[#1B3A5C] mb-3">
                      {t(`jobTypes.${item.key}.title`)}
                    </h3>
                    <p className="text-[#6B7280] leading-relaxed flex-1">
                      {t(`jobTypes.${item.key}.desc`)}
                    </p>
                    <div className="mt-4 pt-4 border-t border-[#E5E7EB]">
                      <div className="flex flex-wrap gap-2">
                        {Array.from({ length: roleCount }).map((_, idx) => (
                          <span
                            key={idx}
                            className="text-xs font-medium px-3 py-1 rounded-full bg-[#F7F8FA] text-[#1B3A5C] border border-[#E5E7EB]"
                          >
                            {t(`jobTypes.${item.key}.role${idx}`)}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* ===== Section 3: Current Openings ===== */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <ScrollReveal>
            <h2 className="text-2xl md:text-3xl font-bold text-[#1B3A5C] mb-4 text-center">
              {t('openings.title')}
            </h2>
            <p className="text-[#6B7280] text-center mb-12 max-w-2xl mx-auto">
              {t('openings.subtitle')}
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {openings.map((item, i) => {
              const reqCount = openingReqCounts[item.key] || 0;
              return (
                <ScrollReveal key={item.key} delay={i * 0.08}>
                  <div className="card-lift bg-white border border-[#E5E7EB] rounded-2xl p-6 h-full flex flex-col">
                    {/* Header with tags */}
                    <div className="flex items-center gap-2 mb-4">
                      <span className="text-xs font-semibold px-3 py-1 rounded-full bg-[#1B3A5C] text-white">
                        {t(`openings.${item.key}.type`)}
                      </span>
                      <span className="text-xs font-medium px-3 py-1 rounded-full bg-[#F7F8FA] text-[#6B7280] border border-[#E5E7EB] flex items-center gap-1">
                        <MapPin className="w-3 h-3" />
                        {t(`openings.${item.key}.location`)}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="text-lg font-bold text-[#1B3A5C] mb-3">
                      {t(`openings.${item.key}.title`)}
                    </h3>

                    {/* Description */}
                    <p className="text-[#6B7280] leading-relaxed text-sm flex-1">
                      {t(`openings.${item.key}.desc`)}
                    </p>

                    {/* Requirements */}
                    <div className="mt-4 pt-4 border-t border-[#E5E7EB] space-y-2">
                      {Array.from({ length: reqCount }).map((_, idx) => (
                        <div key={idx} className="flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 text-[#1B3A5C] shrink-0 mt-0.5" />
                          <span className="text-xs text-[#6B7280]">
                            {t(`openings.${item.key}.req${idx}`)}
                          </span>
                        </div>
                      ))}
                    </div>

                    {/* Apply button */}
                    <a
                      href="mailto:contact@ciment-dam.com"
                      className="mt-4 block"
                    >
                      <Button
                        variant="outline"
                        className="w-full border-[#1B3A5C] text-[#1B3A5C] hover:bg-[#1B3A5C] hover:text-white rounded-full font-semibold text-sm h-10 transition-colors"
                      >
                        {t('openings.apply')} <ArrowRight className="ml-2 h-3.5 w-3.5" />
                      </Button>
                    </a>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>

          {/* Spontaneous application card */}
          <ScrollReveal delay={0.3}>
            <div className="mt-10 card-lift bg-[#F7F8FA] border border-[#E5E7EB] rounded-2xl p-8 text-center max-w-2xl mx-auto">
              <div className="w-16 h-16 rounded-2xl bg-[#1B3A5C]/10 flex items-center justify-center mx-auto mb-5">
                <Mail className="w-8 h-8 text-[#1B3A5C]" />
              </div>
              <h3 className="text-xl font-bold text-[#1B3A5C] mb-3">
                {t('openings.spontaneous')}
              </h3>
              <p className="text-[#6B7280] leading-relaxed mb-6">
                {t('openings.spontaneousDesc')}
              </p>
              <a href="mailto:contact@ciment-dam.com">
                <Button className="bg-[#C1272D] text-white hover:bg-[#C1272D]/90 font-semibold rounded-full px-8 h-12 text-[15px]">
                  {t('openings.sendCv')} <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ===== Section 4: Life in Dakhla ===== */}
      <section className="relative py-16 md:py-24 overflow-hidden">
        <Image
          src="/images/dakhla-aerial.jpg"
          alt="Dakhla — Vue aérienne"
          fill
          quality={90}
          className="object-cover"
        />
        <div className="absolute inset-0 bg-[#1B3A5C]/85" />

        <div className="relative max-w-[1400px] mx-auto px-6 md:px-12 text-white">
          <ScrollReveal>
            <h2 className="text-2xl md:text-3xl font-bold mb-2 text-center">
              {t('dakhla.title')}
            </h2>
            <p className="text-white/70 text-center mb-6 max-w-2xl mx-auto">
              {t('dakhla.subtitle')}
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <p className="text-white/80 leading-relaxed max-w-3xl mx-auto text-center mb-10">
              {t('dakhla.desc')}
            </p>
          </ScrollReveal>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
            {lifeHighlights.map((item, i) => (
              <ScrollReveal key={item.key} delay={i * 0.1}>
                <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-5 text-center h-full">
                  <item.icon className="w-6 h-6 text-[#E8B84B] mx-auto mb-3" />
                  <p className="text-sm font-medium text-white">
                    {t(`dakhla.highlights.${item.key}`)}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ===== Section 5: Application CTA ===== */}
      <section className="relative py-16 md:py-20 overflow-hidden">
        <Image
          src="/images/factory/factory-aerial.jpg"
          alt="Dakhla Aménagement — Usine"
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

            {/* Contact info */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-8">
              <a
                href="mailto:contact@ciment-dam.com"
                className="flex items-center gap-2 text-white/90 hover:text-white transition-colors"
              >
                <Mail className="w-5 h-5 text-[#E8B84B]" />
                <span className="text-sm font-medium">contact@ciment-dam.com</span>
              </a>
              <a
                href="tel:+212658265685"
                className="flex items-center gap-2 text-white/90 hover:text-white transition-colors"
              >
                <Phone className="w-5 h-5 text-[#E8B84B]" />
                <span className="text-sm font-medium">+212 658-265685</span>
              </a>
            </div>

            <a href="mailto:contact@ciment-dam.com">
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
