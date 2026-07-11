'use client';

import { useTranslations } from 'next-intl';
import { useParams } from 'next/navigation';
import {
  TrendingUp,
  Building2,
  Users,
  BarChart3,
  FileText,
  Download,
  Shield,
  Award,
  ArrowRight,
  Mail,
  Phone,
  MapPin,
  Clock,
  Landmark,
} from 'lucide-react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { PageHero } from '@/components/shared/PageHero';
import { ScrollReveal, CountUp } from '@/components/shared/Animations';
import { Button } from '@/components/ui/button';

/* ──────────────── Key Figures Config ──────────────── */
const figureKeys = ['capital', 'capacity', 'clients', 'creation'] as const;

const figureIcons = {
  capital: Landmark,
  capacity: TrendingUp,
  clients: Users,
  creation: Clock,
};

const figureColors = {
  capital: 'bg-[#E8B84B]/20 text-[#E8B84B]',
  capacity: 'bg-[#C1272D]/20 text-[#C1272D]',
  clients: 'bg-white/20 text-white',
  creation: 'bg-emerald-400/20 text-emerald-400',
};

/* ──────────────── Governance Config ──────────────── */
const governanceKeys = ['pdg', 'dg', 'df', 'dc'] as const;

const governanceIcons = {
  pdg: Award,
  dg: Building2,
  df: BarChart3,
  dc: TrendingUp,
};

/* ──────────────── Documents Config ──────────────── */
const documentKeys = ['rapport2025', 'rapport2024', 'financiers2025'] as const;

const documentIcons = {
  rapport2025: FileText,
  rapport2024: FileText,
  financiers2025: Shield,
};

/* ════════════════════════════════════════════════════ */
export default function InvestisseursPageClient() {
  const t = useTranslations('investors');
  const params = useParams();
  const locale = (params?.locale as string) || 'fr';

  return (
    <>
      {/* ───── Hero ───── */}
      <PageHero
        title={t('title')}
        subtitle={t('subtitle')}
        sectionCounter="/13"
      />

      {/* ───── Financial Key Figures (Navy BG) ───── */}
      <section className="py-16 md:py-24 bg-[#1B3A5C] relative overflow-hidden">
        {/* Decorative circles */}
        <div className="absolute -top-32 -right-32 w-64 h-64 rounded-full bg-[#E8B84B]/5" />
        <div className="absolute -bottom-20 -left-20 w-48 h-48 rounded-full bg-white/5" />

        <div className="relative max-w-[1400px] mx-auto px-6 md:px-12">
          <ScrollReveal>
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
              {t('keyFigures.title')}
            </h2>
            <div className="w-16 h-[3px] bg-[#E8B84B] rounded-full mb-10" />
          </ScrollReveal>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {figureKeys.map((key, i) => {
              const Icon = figureIcons[key];
              const colorClass = figureColors[key];
              return (
                <ScrollReveal key={key} delay={i * 0.1}>
                  <motion.div
                    whileHover={{ y: -4, scale: 1.02 }}
                    transition={{ duration: 0.2 }}
                    className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6 md:p-8 text-center hover:bg-white/15 transition-all duration-300"
                  >
                    <div
                      className={`w-14 h-14 rounded-full ${colorClass} flex items-center justify-center mx-auto mb-4`}
                    >
                      <Icon className="w-6 h-6" />
                    </div>
                    <p className="text-white/70 text-sm font-medium mb-2">
                      {t(`keyFigures.${key}.label`)}
                    </p>
                    <p className="text-2xl md:text-3xl font-bold text-white">
                      {key === 'capital' && (
                        <>
                          <CountUp end={30} duration={2} />.
                          <CountUp end={1} duration={2} />M DHS
                        </>
                      )}
                      {key === 'capacity' && (
                        <>
                          +<CountUp end={100} duration={2} />K{' '}
                          <span className="text-base font-normal text-white/70">
                            {t('keyFigures.capacity.unit')}
                          </span>
                        </>
                      )}
                      {key === 'clients' && (
                        <>
                          +<CountUp end={120} duration={2} />
                        </>
                      )}
                      {key === 'creation' && (
                        <CountUp end={2015} duration={2} />
                      )}
                    </p>
                  </motion.div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* ───── Company Overview ───── */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left — Text */}
            <div>
              <ScrollReveal>
                <h2 className="text-2xl md:text-3xl font-bold text-[#1B3A5C] mb-2">
                  {t('overview.title')}
                </h2>
                <div className="w-16 h-[3px] bg-[#E8B84B] rounded-full mb-8" />
              </ScrollReveal>

              <ScrollReveal delay={0.1}>
                <p className="text-[#6B7280] leading-relaxed mb-6">
                  {t('overview.text')}
                </p>
              </ScrollReveal>

              <ScrollReveal delay={0.2}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {(['ownership', 'location', 'market', 'facility'] as const).map(
                    (key) => (
                      <motion.div
                        key={key}
                        whileHover={{ x: 4 }}
                        className="flex items-start gap-3"
                      >
                        <div className="w-8 h-8 rounded-lg bg-[#1B3A5C]/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <Shield className="w-4 h-4 text-[#1B3A5C]" />
                        </div>
                        <div>
                          <p className="text-sm font-semibold text-[#1B3A5C]">
                            {t(`overview.${key}.title`)}
                          </p>
                          <p className="text-xs text-[#6B7280]">
                            {t(`overview.${key}.desc`)}
                          </p>
                        </div>
                      </motion.div>
                    )
                  )}
                </div>
              </ScrollReveal>
            </div>

            {/* Right — Highlights Card */}
            <ScrollReveal delay={0.2}>
              <div className="bg-[#F7F8FA] border border-[#E5E7EB] rounded-2xl p-8 md:p-10">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-full bg-[#1B3A5C] flex items-center justify-center">
                    <BarChart3 className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-[#1B3A5C]">
                    {t('overview.highlights.title')}
                  </h3>
                </div>
                <ul className="space-y-4">
                  {(
                    [
                      'h1',
                      'h2',
                      'h3',
                      'h4',
                    ] as const
                  ).map((key) => (
                    <li
                      key={key}
                      className="flex items-start gap-3 text-sm text-[#6B7280]"
                    >
                      <ArrowRight className="w-4 h-4 text-[#E8B84B] flex-shrink-0 mt-0.5" />
                      <span>{t(`overview.highlights.${key}`)}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ───── Governance ───── */}
      <section className="py-16 md:py-24 bg-[#F7F8FA]">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <ScrollReveal>
            <h2 className="text-2xl md:text-3xl font-bold text-[#1B3A5C] mb-2">
              {t('governance.title')}
            </h2>
            <p className="text-[#6B7280] mb-2 text-[15px]">
              {t('governance.subtitle')}
            </p>
            <div className="w-16 h-[3px] bg-[#E8B84B] rounded-full mb-10" />
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {governanceKeys.map((key, i) => {
              const Icon = governanceIcons[key];
              return (
                <ScrollReveal key={key} delay={i * 0.1}>
                  <motion.div
                    whileHover={{ y: -4 }}
                    transition={{ duration: 0.2 }}
                    className="bg-white border border-[#E5E7EB] rounded-xl p-6 md:p-8 text-center hover:border-[#E8B84B]/50 hover:shadow-lg transition-all duration-300"
                  >
                    <div className="w-14 h-14 rounded-full bg-[#1B3A5C]/10 flex items-center justify-center mx-auto mb-4">
                      <Icon className="w-6 h-6 text-[#1B3A5C]" />
                    </div>
                    <h3 className="text-base font-bold text-[#1B3A5C] mb-2">
                      {t(`governance.${key}.title`)}
                    </h3>
                    <p className="text-xs text-[#E8B84B] font-semibold mb-3">
                      {t(`governance.${key}.role`)}
                    </p>
                    <p className="text-sm text-[#6B7280] leading-relaxed">
                      {t(`governance.${key}.desc`)}
                    </p>
                  </motion.div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* ───── Financial Reports ───── */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <ScrollReveal>
            <h2 className="text-2xl md:text-3xl font-bold text-[#1B3A5C] mb-2">
              {t('documents.title')}
            </h2>
            <p className="text-[#6B7280] mb-2 text-[15px]">
              {t('documents.subtitle')}
            </p>
            <div className="w-16 h-[3px] bg-[#E8B84B] rounded-full mb-10" />
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {documentKeys.map((key, i) => {
              const Icon = documentIcons[key];
              return (
                <ScrollReveal key={key} delay={i * 0.1}>
                  <motion.div
                    whileHover={{ y: -4 }}
                    transition={{ duration: 0.2 }}
                    className="bg-[#F7F8FA] border border-[#E5E7EB] rounded-xl p-6 hover:border-[#E8B84B]/50 hover:shadow-md transition-all duration-300 group"
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-lg bg-[#C1272D]/10 flex items-center justify-center flex-shrink-0">
                        <Icon className="w-5 h-5 text-[#C1272D]" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="text-sm font-bold text-[#1B3A5C] mb-1">
                          {t(`documents.${key}.name`)}
                        </h3>
                        <p className="text-xs text-[#6B7280] mb-3">
                          {t(`documents.${key}.info`)}
                        </p>
                        <button className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#1B3A5C] hover:text-[#C1272D] transition-colors">
                          <Download className="w-3.5 h-3.5" />
                          {t('documents.download')}
                        </button>
                      </div>
                    </div>
                  </motion.div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* ───── Investor Contact ───── */}
      <section className="py-16 md:py-24 bg-[#1B3A5C] relative overflow-hidden">
        {/* Decorative */}
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-[#E8B84B]/5 -translate-y-1/2 translate-x-1/2" />

        <div className="relative max-w-[1400px] mx-auto px-6 md:px-12">
          <div className="max-w-2xl mx-auto">
            <ScrollReveal>
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8 md:p-10 text-center">
                <div className="w-16 h-16 rounded-full bg-[#E8B84B]/20 flex items-center justify-center mx-auto mb-6">
                  <Mail className="w-7 h-7 text-[#E8B84B]" />
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
                  {t('contact.title')}
                </h2>
                <p className="text-white/70 mb-8 text-sm leading-relaxed">
                  {t('contact.subtitle')}
                </p>

                <div className="space-y-4 mb-8">
                  <a
                    href={`mailto:${t('contact.email')}`}
                    className="flex items-center justify-center gap-3 text-white/90 hover:text-[#E8B84B] transition-colors group"
                  >
                    <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-[#E8B84B]/20 transition-colors">
                      <Mail className="w-4 h-4" />
                    </div>
                    <span className="font-medium">{t('contact.email')}</span>
                  </a>

                  <a
                    href="tel:+212658265685"
                    className="flex items-center justify-center gap-3 text-white/90 hover:text-[#E8B84B] transition-colors group"
                  >
                    <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-[#E8B84B]/20 transition-colors">
                      <Phone className="w-4 h-4" />
                    </div>
                    <span className="font-medium">{t('contact.phone')}</span>
                  </a>

                  <div className="flex items-center justify-center gap-3 text-white/90">
                    <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                      <MapPin className="w-4 h-4" />
                    </div>
                    <span className="font-medium">{t('contact.address')}</span>
                  </div>
                </div>

                <Link href={`/${locale}/contact`}>
                  <Button className="bg-[#E8B84B] hover:bg-[#E8B84B]/90 text-[#1B3A5C] px-8 py-3 text-sm font-bold rounded-full h-auto">
                    {t('contact.cta')}
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </Link>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </>
  );
}
