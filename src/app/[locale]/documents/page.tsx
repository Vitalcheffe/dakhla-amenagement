'use client';

import { useTranslations } from 'next-intl';
import { useParams } from 'next/navigation';
import { FileText, Download, ShieldCheck, Scale } from 'lucide-react';
import { motion } from 'framer-motion';
import { PageHero } from '@/components/shared/PageHero';
import { ScrollReveal } from '@/components/shared/Animations';

const technicalKeys = ['f1', 'f2', 'f3'] as const;
const certificateKeys = ['c1', 'c2'] as const;
const legalKeys = ['l1', 'l2', 'l3'] as const;

interface DocumentItemProps {
  icon: React.ReactNode;
  name: string;
  desc: string;
  downloadLabel: string;
  comingSoonLabel: string;
  delay?: number;
}

function DocumentItem({ icon, name, desc, downloadLabel, comingSoonLabel, delay = 0 }: DocumentItemProps) {
  return (
    <ScrollReveal delay={delay}>
      <motion.div
        whileHover={{ y: -2 }}
        transition={{ duration: 0.2 }}
        className="flex items-start gap-4 bg-[#F7F8FA] border border-[#E5E7EB] rounded-xl p-5 md:p-6 hover:border-[#E8B84B]/50 hover:shadow-sm transition-all duration-300"
      >
        <div className="w-10 h-10 rounded-lg bg-[#1B3A5C]/10 flex items-center justify-center shrink-0 mt-0.5">
          {icon}
        </div>
        <div className="flex-1 min-w-0">
          <h4 className="font-semibold text-[#1B3A5C] text-[15px] mb-1">
            {name}
          </h4>
          <p className="text-[#6B7280] text-sm leading-relaxed mb-3">
            {desc}
          </p>
          <button
            className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-[#6B7280] bg-white border border-[#E5E7EB] rounded-full cursor-not-allowed opacity-60"
            disabled
          >
            <Download className="w-3 h-3" />
            {comingSoonLabel}
          </button>
        </div>
      </motion.div>
    </ScrollReveal>
  );
}

export default function DocumentsPage() {
  const t = useTranslations('documents');
  const params = useParams();
  const locale = (params?.locale as string) || 'fr';

  const comingSoonLabel = t('comingSoon');

  return (
    <>
      <PageHero title={t('title')} subtitle={t('subtitle')} sectionCounter="/15" />

      {/* Technical Data Sheets */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <ScrollReveal>
            <div className="flex items-center gap-3 mb-2">
              <div className="w-10 h-10 rounded-lg bg-[#1B3A5C]/10 flex items-center justify-center">
                <FileText className="w-5 h-5 text-[#1B3A5C]" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-[#1B3A5C]">
                {t('technical.title')}
              </h2>
            </div>
            <div className="w-16 h-[3px] bg-[#E8B84B] rounded-full mb-8" />
          </ScrollReveal>

          <div className="grid gap-4 max-w-3xl">
            {technicalKeys.map((key, i) => (
              <DocumentItem
                key={key}
                icon={<FileText className="w-5 h-5 text-[#1B3A5C]" />}
                name={t(`technical.${key}.name`)}
                desc={t(`technical.${key}.desc`)}
                downloadLabel={t('download')}
                comingSoonLabel={comingSoonLabel}
                delay={i * 0.06}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Certificates & Compliance */}
      <section className="py-16 md:py-24 bg-[#F7F8FA]">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <ScrollReveal>
            <div className="flex items-center gap-3 mb-2">
              <div className="w-10 h-10 rounded-lg bg-[#E8B84B]/15 flex items-center justify-center">
                <ShieldCheck className="w-5 h-5 text-[#E8B84B]" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-[#1B3A5C]">
                {t('certificates.title')}
              </h2>
            </div>
            <div className="w-16 h-[3px] bg-[#E8B84B] rounded-full mb-8" />
          </ScrollReveal>

          <div className="grid gap-4 max-w-3xl">
            {certificateKeys.map((key, i) => (
              <DocumentItem
                key={key}
                icon={<ShieldCheck className="w-5 h-5 text-[#E8B84B]" />}
                name={t(`certificates.${key}.name`)}
                desc={t(`certificates.${key}.desc`)}
                downloadLabel={t('download')}
                comingSoonLabel={comingSoonLabel}
                delay={i * 0.06}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Legal / Contractual Documents */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <ScrollReveal>
            <div className="flex items-center gap-3 mb-2">
              <div className="w-10 h-10 rounded-lg bg-[#C1272D]/10 flex items-center justify-center">
                <Scale className="w-5 h-5 text-[#C1272D]" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-[#1B3A5C]">
                {t('legal.title')}
              </h2>
            </div>
            <div className="w-16 h-[3px] bg-[#E8B84B] rounded-full mb-8" />
          </ScrollReveal>

          <div className="grid gap-4 max-w-3xl">
            {legalKeys.map((key, i) => (
              <DocumentItem
                key={key}
                icon={<Scale className="w-5 h-5 text-[#C1272D]" />}
                name={t(`legal.${key}.name`)}
                desc={t(`legal.${key}.desc`)}
                downloadLabel={t('download')}
                comingSoonLabel={comingSoonLabel}
                delay={i * 0.06}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
