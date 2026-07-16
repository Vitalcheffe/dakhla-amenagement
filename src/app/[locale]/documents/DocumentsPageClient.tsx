'use client';

import { useTranslations } from 'next-intl';
import {
  FileText,
  Download,
  Shield,
  CheckCircle2,
  FileCheck,
  ClipboardList,
  AlertTriangle,
  Lock,
  Mail,
} from 'lucide-react';
import { motion } from 'framer-motion';
import { PageHero } from '@/components/shared/PageHero';
import { ScrollReveal } from '@/components/shared/Animations';
import { Button } from '@/components/ui/button';

/* ------------------------------------------------------------------ */
/*  Category section header                                            */
/* ------------------------------------------------------------------ */
function CategoryHeader({
  icon,
  title,
  accentColor = '#1B3A5C',
}: {
  icon: React.ReactNode;
  title: string;
  accentColor?: string;
}) {
  return (
    <ScrollReveal>
      <div className="flex items-center gap-3 mb-2">
        <div
          className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0"
          style={{ backgroundColor: `${accentColor}15` }}
        >
          {icon}
        </div>
        <h2 className="text-2xl md:text-3xl font-bold text-[#1B3A5C]">
          {title}
        </h2>
      </div>
      <div className="w-16 h-[3px] bg-[#E8B84B] rounded-full mb-8" />
    </ScrollReveal>
  );
}

/* ------------------------------------------------------------------ */
/*  Document card – General Conditions / Legal                         */
/* ------------------------------------------------------------------ */
function DocCard({
  icon,
  title,
  description,
  fileSize,
  updatedAt,
  comingSoonLabel,
  delay = 0,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
  fileSize?: string;
  updatedAt?: string;
  comingSoonLabel: string;
  delay?: number;
}) {
  return (
    <ScrollReveal delay={delay}>
      <motion.div
        whileHover={{ y: -3 }}
        transition={{ duration: 0.25 }}
        className="bg-white border border-[#E5E7EB] rounded-xl p-5 md:p-6 hover:border-[#E8B84B]/50 hover:shadow-md transition-all duration-300"
      >
        <div className="flex items-start gap-4">
          {/* PDF icon */}
          <div className="w-12 h-12 rounded-lg bg-[#C1272D]/10 flex items-center justify-center shrink-0">
            {icon}
          </div>
          <div className="flex-1 min-w-0">
            <h4 className="font-semibold text-[#1B3A5C] text-[15px] mb-1">
              {title}
            </h4>
            <p className="text-[#6B7280] text-sm leading-relaxed mb-3">
              {description}
            </p>
            <div className="flex items-center gap-4 text-xs text-[#6B7280] mb-4">
              {fileSize && (
                <span className="inline-flex items-center gap-1 bg-[#F7F8FA] border border-[#E5E7EB] rounded-full px-2.5 py-0.5">
                  <FileText className="w-3 h-3" />
                  {fileSize}
                </span>
              )}
              {updatedAt && <span>{updatedAt}</span>}
            </div>
            <button
              className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-medium text-[#6B7280] bg-[#F7F8FA] border border-[#E5E7EB] rounded-full cursor-not-allowed opacity-60 hover:opacity-80 transition-opacity"
              disabled
            >
              <Download className="w-3.5 h-3.5" />
              {comingSoonLabel}
            </button>
          </div>
        </div>
      </motion.div>
    </ScrollReveal>
  );
}

/* ------------------------------------------------------------------ */
/*  Technical data-sheet card                                          */
/* ------------------------------------------------------------------ */
function TechCard({
  icon,
  title,
  productBadge,
  composition,
  resistance,
  comingSoonLabel,
  delay = 0,
}: {
  icon: React.ReactNode;
  title: string;
  productBadge: string;
  composition: string;
  resistance: string;
  comingSoonLabel: string;
  delay?: number;
}) {
  return (
    <ScrollReveal delay={delay}>
      <motion.div
        whileHover={{ y: -3 }}
        transition={{ duration: 0.25 }}
        className="bg-white border border-[#E5E7EB] rounded-xl p-5 md:p-6 hover:border-[#E8B84B]/50 hover:shadow-md transition-all duration-300"
      >
        <div className="flex items-start gap-4">
          {/* PDF icon */}
          <div className="w-12 h-12 rounded-lg bg-[#1B3A5C]/10 flex items-center justify-center shrink-0">
            {icon}
          </div>
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2 mb-1 flex-wrap">
              <h4 className="font-semibold text-[#1B3A5C] text-[15px]">
                {title}
              </h4>
              <span className="inline-flex items-center gap-1 bg-[#1B3A5C]/10 text-[#1B3A5C] rounded-full px-2.5 py-0.5 text-[11px] font-semibold">
                {productBadge}
              </span>
            </div>
            <p className="text-[#6B7280] text-sm leading-relaxed mb-3">
              {composition}
            </p>
            <div className="flex items-center gap-3 text-xs text-[#6B7280] mb-4">
              <span className="inline-flex items-center gap-1 bg-[#E8B84B]/10 text-[#1B3A5C] rounded-full px-2.5 py-0.5 font-medium">
                <Shield className="w-3 h-3 text-[#E8B84B]" />
                {resistance}
              </span>
            </div>
            <button
              className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-medium text-[#6B7280] bg-[#F7F8FA] border border-[#E5E7EB] rounded-full cursor-not-allowed opacity-60 hover:opacity-80 transition-opacity"
              disabled
            >
              <Download className="w-3.5 h-3.5" />
              {comingSoonLabel}
            </button>
          </div>
        </div>
      </motion.div>
    </ScrollReveal>
  );
}

/* ------------------------------------------------------------------ */
/*  Certificate card                                                   */
/* ------------------------------------------------------------------ */
function CertCard({
  icon,
  title,
  badge,
  status,
  statusLabel,
  comingSoonLabel,
  delay = 0,
}: {
  icon: React.ReactNode;
  title: string;
  badge: string;
  status: 'certified' | 'pending';
  statusLabel: string;
  comingSoonLabel: string;
  delay?: number;
}) {
  const isCertified = status === 'certified';

  return (
    <ScrollReveal delay={delay}>
      <motion.div
        whileHover={{ y: -3 }}
        transition={{ duration: 0.25 }}
        className="bg-white border border-[#E5E7EB] rounded-xl p-5 md:p-6 hover:border-[#E8B84B]/50 hover:shadow-md transition-all duration-300"
      >
        <div className="flex items-start gap-4">
          {/* Shield icon */}
          <div
            className="w-12 h-12 rounded-lg flex items-center justify-center shrink-0"
            style={{
              backgroundColor: isCertified
                ? 'rgba(34,197,94,0.1)'
                : 'rgba(232,184,75,0.12)',
            }}
          >
            {icon}
          </div>
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2 mb-1 flex-wrap">
              <h4 className="font-semibold text-[#1B3A5C] text-[15px]">
                {title}
              </h4>
              <span
                className={`inline-flex items-center gap-1 rounded-full px-2.5 py-0.5 text-[11px] font-semibold ${
                  isCertified
                    ? 'bg-green-50 text-green-700'
                    : 'bg-[#E8B84B]/15 text-[#1B3A5C]'
                }`}
              >
                {isCertified ? (
                  <CheckCircle2 className="w-3 h-3" />
                ) : (
                  <Lock className="w-3 h-3" />
                )}
                {statusLabel}
              </span>
            </div>
            <p className="text-[#6B7280] text-sm leading-relaxed mb-4">
              {badge}
            </p>
            <button
              className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-medium text-[#6B7280] bg-[#F7F8FA] border border-[#E5E7EB] rounded-full cursor-not-allowed opacity-60 hover:opacity-80 transition-opacity"
              disabled
            >
              <Download className="w-3.5 h-3.5" />
              {comingSoonLabel}
            </button>
          </div>
        </div>
      </motion.div>
    </ScrollReveal>
  );
}

/* ------------------------------------------------------------------ */
/*  Safety / Environment card                                          */
/* ------------------------------------------------------------------ */
function SafetyCard({
  icon,
  title,
  description,
  comingSoonLabel,
  delay = 0,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
  comingSoonLabel: string;
  delay?: number;
}) {
  return (
    <ScrollReveal delay={delay}>
      <motion.div
        whileHover={{ y: -3 }}
        transition={{ duration: 0.25 }}
        className="bg-white border border-[#E5E7EB] rounded-xl p-5 md:p-6 hover:border-[#C1272D]/30 hover:shadow-md transition-all duration-300"
      >
        <div className="flex items-start gap-4">
          {/* Alert icon */}
          <div className="w-12 h-12 rounded-lg bg-[#C1272D]/10 flex items-center justify-center shrink-0">
            {icon}
          </div>
          <div className="flex-1 min-w-0">
            <h4 className="font-semibold text-[#1B3A5C] text-[15px] mb-1">
              {title}
            </h4>
            <p className="text-[#6B7280] text-sm leading-relaxed mb-4">
              {description}
            </p>
            <button
              className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-medium text-[#6B7280] bg-[#F7F8FA] border border-[#E5E7EB] rounded-full cursor-not-allowed opacity-60 hover:opacity-80 transition-opacity"
              disabled
            >
              <Download className="w-3.5 h-3.5" />
              {comingSoonLabel}
            </button>
          </div>
        </div>
      </motion.div>
    </ScrollReveal>
  );
}

/* ================================================================== */
/*  Main page                                                          */
/* ================================================================== */
export default function DocumentsPageClient() {
  const t = useTranslations('documents');

  const comingSoonLabel = t('comingSoon');

  return (
    <>
      {/* ── Hero ── */}
      <PageHero
        title={t('title')}
        subtitle={t('subtitle')}
        sectionCounter="/14"
      />

      {/* ── A. Conditions Générales ── */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <CategoryHeader
            icon={<ClipboardList className="w-5 h-5 text-[#1B3A5C]" />}
            title={t('generalConditions.title')}
          />

          <div className="grid gap-4 md:grid-cols-2 max-w-4xl">
            <DocCard
              icon={<FileText className="w-6 h-6 text-[#C1272D]" />}
              title={t('generalConditions.cgv.title')}
              description={t('generalConditions.cgv.desc')}
              fileSize={t('generalConditions.cgv.fileSize')}
              updatedAt={t('generalConditions.cgv.updatedAt')}
              comingSoonLabel={comingSoonLabel}
              delay={0}
            />
            <DocCard
              icon={<FileText className="w-6 h-6 text-[#C1272D]" />}
              title={t('generalConditions.cga.title')}
              description={t('generalConditions.cga.desc')}
              fileSize={t('generalConditions.cga.fileSize')}
              updatedAt={t('generalConditions.cga.updatedAt')}
              comingSoonLabel={comingSoonLabel}
              delay={0.06}
            />
          </div>
        </div>
      </section>

      {/* ── B. Fiches Techniques ── */}
      <section className="py-16 md:py-24 bg-[#F7F8FA]">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <CategoryHeader
            icon={<FileCheck className="w-5 h-5 text-[#E8B84B]" />}
            title={t('technicalSheets.title')}
            accentColor="#E8B84B"
          />

          <div className="grid gap-4 md:grid-cols-2 max-w-4xl">
            <TechCard
              icon={<FileText className="w-6 h-6 text-[#1B3A5C]" />}
              title={t('technicalSheets.cpj45.title')}
              productBadge={t('technicalSheets.cpj45.badge')}
              composition={t('technicalSheets.cpj45.composition')}
              resistance={t('technicalSheets.cpj45.resistance')}
              comingSoonLabel={comingSoonLabel}
              delay={0}
            />
            <TechCard
              icon={<FileText className="w-6 h-6 text-[#1B3A5C]" />}
              title={t('technicalSheets.cpj55.title')}
              productBadge={t('technicalSheets.cpj55.badge')}
              composition={t('technicalSheets.cpj55.composition')}
              resistance={t('technicalSheets.cpj55.resistance')}
              comingSoonLabel={comingSoonLabel}
              delay={0.06}
            />
          </div>
        </div>
      </section>

      {/* ── C. Certificats & Conformité ── */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <CategoryHeader
            icon={<Shield className="w-5 h-5 text-green-600" />}
            title={t('certificates.title')}
            accentColor="#22c55e"
          />

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 max-w-5xl">
            <CertCard
              icon={<Shield className="w-6 h-6 text-green-600" />}
              title={t('certificates.nm.title')}
              badge={t('certificates.nm.badge')}
              status="certified"
              statusLabel={t('certificates.statusCertified')}
              comingSoonLabel={comingSoonLabel}
              delay={0}
            />
            <CertCard
              icon={<Shield className="w-6 h-6 text-green-600" />}
              title={t('certificates.iso.title')}
              badge={t('certificates.iso.badge')}
              status="certified"
              statusLabel={t('certificates.statusCertified')}
              comingSoonLabel={comingSoonLabel}
              delay={0.06}
            />
            <CertCard
              icon={<Shield className="w-6 h-6 text-[#E8B84B]" />}
              title={t('certificates.conformity.title')}
              badge={t('certificates.conformity.badge')}
              status="pending"
              statusLabel={t('certificates.statusPending')}
              comingSoonLabel={comingSoonLabel}
              delay={0.12}
            />
          </div>
        </div>
      </section>

      {/* ── D. Sécurité & Environnement ── */}
      <section className="py-16 md:py-24 bg-[#F7F8FA]">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <CategoryHeader
            icon={<AlertTriangle className="w-5 h-5 text-[#C1272D]" />}
            title={t('safety.title')}
            accentColor="#C1272D"
          />

          <div className="grid gap-4 md:grid-cols-2 max-w-4xl">
            <SafetyCard
              icon={<AlertTriangle className="w-6 h-6 text-[#C1272D]" />}
              title={t('safety.fds.title')}
              description={t('safety.fds.desc')}
              comingSoonLabel={comingSoonLabel}
              delay={0}
            />
            <SafetyCard
              icon={<AlertTriangle className="w-6 h-6 text-[#C1272D]" />}
              title={t('safety.environmental.title')}
              description={t('safety.environmental.desc')}
              comingSoonLabel={comingSoonLabel}
              delay={0.06}
            />
          </div>
        </div>
      </section>

      {/* ── Important Notice ── */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <ScrollReveal>
            <div className="max-w-3xl mx-auto">
              <div className="bg-[#1B3A5C]/5 border border-[#1B3A5C]/15 rounded-xl p-6 md:p-8">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-[#1B3A5C]/10 flex items-center justify-center shrink-0 mt-0.5">
                    <Lock className="w-5 h-5 text-[#1B3A5C]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#1B3A5C] text-base mb-2">
                      {t('notice.title')}
                    </h3>
                    <p className="text-[#6B7280] text-sm leading-relaxed">
                      {t('notice.text')}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ── Request Documents CTA ── */}
      <section className="py-16 md:py-20 bg-[#1B3A5C]">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <ScrollReveal>
            <div className="max-w-2xl mx-auto text-center">
              <div className="w-14 h-14 rounded-full bg-[#E8B84B]/20 flex items-center justify-center mx-auto mb-6">
                <Mail className="w-7 h-7 text-[#E8B84B]" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                {t('request.title')}
              </h2>
              <p className="text-white/70 text-base leading-relaxed mb-8">
                {t('request.desc')}
              </p>
              <a href="mailto:contact@ciment-dam.com">
                <Button
                  size="lg"
                  className="bg-[#E8B84B] hover:bg-[#E8B84B]/90 text-[#1B3A5C] font-semibold rounded-full px-8"
                >
                  <Mail className="w-4 h-4 mr-2" />
                  {t('request.cta')}
                </Button>
              </a>
              <p className="text-white/50 text-sm mt-4">
                contact@ciment-dam.com
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
