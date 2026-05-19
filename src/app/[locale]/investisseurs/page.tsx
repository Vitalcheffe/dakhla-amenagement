'use client';

import { useTranslations } from 'next-intl';
import { useParams } from 'next/navigation';
import { Building2, Users, Settings, Mail, Clock, TrendingUp, Landmark } from 'lucide-react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { PageHero } from '@/components/shared/PageHero';
import { ScrollReveal } from '@/components/shared/Animations';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

const figureKeys = ['capital', 'capacity', 'creation', 'shareholding'] as const;
const governanceKeys = ['board', 'management', 'orgchart'] as const;

const figureIcons = {
  capital: Landmark,
  capacity: TrendingUp,
  creation: Clock,
  shareholding: Users,
};

const figureColors = {
  capital: 'bg-[#1B3A5C]/10 text-[#1B3A5C]',
  capacity: 'bg-[#C1272D]/10 text-[#C1272D]',
  creation: 'bg-[#E8B84B]/10 text-[#E8B84B]',
  shareholding: 'bg-emerald-500/10 text-emerald-600',
};

const governanceIcons = {
  board: Building2,
  management: Users,
  orgchart: Settings,
};

export default function InvestisseursPage() {
  const t = useTranslations('investors');
  const params = useParams();
  const locale = (params?.locale as string) || 'fr';

  return (
    <>
      <PageHero title={t('title')} subtitle={t('subtitle')} sectionCounter="/14" />

      {/* Key Financial Figures */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <ScrollReveal>
            <h2 className="text-2xl md:text-3xl font-bold text-[#1B3A5C] mb-2">
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
                    whileHover={{ y: -4 }}
                    transition={{ duration: 0.2 }}
                    className="bg-[#F7F8FA] border border-[#E5E7EB] rounded-xl p-6 text-center hover:border-[#E8B84B]/50 hover:shadow-md transition-all duration-300"
                  >
                    <div className={`w-14 h-14 rounded-full ${colorClass} flex items-center justify-center mx-auto mb-4`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <p className="text-sm text-[#6B7280] mb-2 font-medium">
                      {t(`keyFigures.${key}.label`)}
                    </p>
                    <p className="text-xl md:text-2xl font-bold text-[#1B3A5C]">
                      {t(`keyFigures.${key}.value`)}
                    </p>
                  </motion.div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Governance */}
      <section className="py-16 md:py-24 relative overflow-hidden">
        {/* Factory background */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/factory/factory-exterior.jpg"
            alt=""
            fill
            className="object-cover"
            quality={90}
          />
          <div className="absolute inset-0 bg-[#1B3A5C]/92" />
        </div>

        <div className="relative z-10 max-w-[1400px] mx-auto px-6 md:px-12">
          <ScrollReveal>
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
              {t('governance.title')}
            </h2>
            <p className="text-white/70 mb-2 text-[15px]">
              {t('governance.subtitle')}
            </p>
            <div className="w-16 h-[3px] bg-[#E8B84B] rounded-full mb-10" />
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {governanceKeys.map((key, i) => {
              const Icon = governanceIcons[key];
              return (
                <ScrollReveal key={key} delay={i * 0.1}>
                  <motion.div
                    whileHover={{ y: -4 }}
                    transition={{ duration: 0.2 }}
                    className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6 md:p-8 hover:bg-white/15 transition-all duration-300"
                  >
                    <div className="w-12 h-12 rounded-full bg-[#E8B84B]/20 flex items-center justify-center mb-5">
                      <Icon className="w-5 h-5 text-[#E8B84B]" />
                    </div>
                    <h3 className="text-lg font-bold text-white mb-3">
                      {t(`governance.${key}.title`)}
                    </h3>
                    <p className="text-white/70 leading-relaxed text-sm">
                      {t(`governance.${key}.desc`)}
                    </p>
                  </motion.div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Financial Documents */}
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

          <ScrollReveal>
            <div className="bg-[#F7F8FA] border border-[#E5E7EB] rounded-xl p-8 md:p-12 text-center max-w-2xl mx-auto">
              <div className="w-16 h-16 rounded-full bg-[#1B3A5C]/10 flex items-center justify-center mx-auto mb-6">
                <Clock className="w-7 h-7 text-[#1B3A5C]" />
              </div>
              <p className="text-[#6B7280] leading-relaxed mb-6">
                {t('documents.comingSoon')}
              </p>
              <a
                href={`mailto:${t('contact.email')}`}
                className="inline-flex items-center gap-2 text-[#1B3A5C] font-medium text-sm hover:text-[#C1272D] transition-colors"
              >
                <Mail className="w-4 h-4" />
                {t('contact.email')}
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Contact Investisseurs */}
      <section className="py-16 md:py-24 bg-[#F7F8FA]">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <ScrollReveal>
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-2xl md:text-3xl font-bold text-[#1B3A5C] mb-2">
                {t('contact.title')}
              </h2>
              <div className="w-16 h-[3px] bg-[#E8B84B] rounded-full mx-auto mb-6" />
              <a
                href={`mailto:${t('contact.email')}`}
                className="inline-flex items-center gap-2 text-[#1B3A5C] font-medium text-lg hover:text-[#C1272D] transition-colors"
              >
                <Mail className="w-5 h-5" />
                {t('contact.email')}
              </a>
              <div className="mt-8">
                <Link href={`/${locale}/contact`}>
                  <Button className="bg-[#C1272D] hover:bg-[#C1272D]/90 text-white px-8 py-3 text-sm font-semibold rounded-full h-auto">
                    {locale === 'fr' ? 'Nous contacter' : 'Contact us'}
                  </Button>
                </Link>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
