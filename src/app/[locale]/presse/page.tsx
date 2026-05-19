'use client';

import { useTranslations } from 'next-intl';
import { useParams } from 'next/navigation';
import { FileText, Download, Mail, Phone, Calendar } from 'lucide-react';
import { motion } from 'framer-motion';
import { PageHero } from '@/components/shared/PageHero';
import { ScrollReveal } from '@/components/shared/Animations';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

const releaseKeys = ['r1', 'r2', 'r3', 'r4'] as const;
const kitKeys = ['logo', 'photos', 'charte', 'fiche'] as const;

export default function PressePage() {
  const t = useTranslations('press');
  const params = useParams();
  const locale = (params?.locale as string) || 'fr';

  return (
    <>
      <PageHero title={t('title')} subtitle={t('subtitle')} sectionCounter="/13" />

      {/* Communiqués de Presse */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <ScrollReveal>
            <h2 className="text-2xl md:text-3xl font-bold text-[#1B3A5C] mb-2">
              {t('releases.title')}
            </h2>
            <div className="w-16 h-[3px] bg-[#E8B84B] rounded-full mb-10" />
          </ScrollReveal>

          <div className="grid gap-6 md:gap-8">
            {releaseKeys.map((key, i) => (
              <ScrollReveal key={key} delay={i * 0.08}>
                <motion.div
                  whileHover={{ y: -2 }}
                  transition={{ duration: 0.2 }}
                  className="bg-[#F7F8FA] border border-[#E5E7EB] rounded-xl p-6 md:p-8 hover:border-[#E8B84B]/50 hover:shadow-md transition-all duration-300"
                >
                  <div className="flex flex-col md:flex-row md:items-start gap-4 md:gap-6">
                    {/* Date badge */}
                    <div className="flex items-center gap-2 md:flex-col md:items-center md:min-w-[140px]">
                      <Calendar className="w-4 h-4 text-[#E8B84B] md:hidden" />
                      <span className="inline-flex items-center gap-2 px-4 py-2 bg-[#1B3A5C] text-white text-sm font-medium rounded-full whitespace-nowrap">
                        <Calendar className="w-3.5 h-3.5 hidden md:block" />
                        {t(`releases.${key}.date`)}
                      </span>
                    </div>
                    {/* Content */}
                    <div className="flex-1">
                      <h3 className="text-lg md:text-xl font-bold text-[#1B3A5C] mb-2 leading-snug">
                        {t(`releases.${key}.title`)}
                      </h3>
                      <p className="text-[#6B7280] leading-relaxed text-[15px]">
                        {t(`releases.${key}.excerpt`)}
                      </p>
                    </div>
                  </div>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Kit Presse */}
      <section className="py-16 md:py-24 bg-[#F7F8FA]">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <ScrollReveal>
            <h2 className="text-2xl md:text-3xl font-bold text-[#1B3A5C] mb-2">
              {t('kit.title')}
            </h2>
            <p className="text-[#6B7280] mb-10 text-[15px]">
              {t('kit.subtitle')}
            </p>
            <div className="w-16 h-[3px] bg-[#E8B84B] rounded-full mb-10" />
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {kitKeys.map((key, i) => (
              <ScrollReveal key={key} delay={i * 0.08}>
                <motion.div
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.2 }}
                  className="bg-white border border-[#E5E7EB] rounded-xl p-6 hover:border-[#E8B84B]/50 hover:shadow-md transition-all duration-300 text-center"
                >
                  <div className="w-14 h-14 rounded-full bg-[#1B3A5C]/10 flex items-center justify-center mx-auto mb-4">
                    <FileText className="w-6 h-6 text-[#1B3A5C]" />
                  </div>
                  <p className="font-semibold text-[#1B3A5C] text-sm mb-4">
                    {t(`kit.${key}`)}
                  </p>
                  <button className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-[#6B7280] bg-[#F7F8FA] rounded-full hover:bg-[#1B3A5C]/5 transition-colors cursor-not-allowed opacity-70">
                    <Download className="w-3.5 h-3.5" />
                    {locale === 'fr' ? 'Bientôt disponible' : 'Coming soon'}
                  </button>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Presse */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <ScrollReveal>
            <div className="max-w-2xl mx-auto">
              <div className="bg-[#1B3A5C] rounded-2xl p-8 md:p-12 text-center">
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
                  {t('contact.title')}
                </h2>
                <div className="w-16 h-[3px] bg-[#E8B84B] rounded-full mx-auto mb-8" />
                <p className="text-white/90 text-lg font-medium mb-6">
                  {t('contact.name')}
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                  <a
                    href={`mailto:${t('contact.email')}`}
                    className="inline-flex items-center gap-2 text-white/80 hover:text-white transition-colors"
                  >
                    <Mail className="w-4 h-4" />
                    <span className="text-sm">{t('contact.email')}</span>
                  </a>
                  <a
                    href={`tel:${t('contact.phone')}`}
                    className="inline-flex items-center gap-2 text-white/80 hover:text-white transition-colors"
                  >
                    <Phone className="w-4 h-4" />
                    <span className="text-sm">{t('contact.phone')}</span>
                  </a>
                </div>
                <div className="mt-8">
                  <Link href={`/${locale}/contact`}>
                    <Button className="bg-[#E8B84B] hover:bg-[#E8B84B]/90 text-[#1B3A5C] px-8 py-3 text-sm font-semibold rounded-full h-auto">
                      {locale === 'fr' ? 'Nous contacter' : 'Contact us'}
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
