'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import { useParams } from 'next/navigation';
import {
  Newspaper,
  Download,
  FileText,
  Camera,
  Calendar,
  ExternalLink,
  Mail,
  Phone,
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { PageHero } from '@/components/shared/PageHero';
import { ScrollReveal } from '@/components/shared/Animations';
import { Lightbox } from '@/components/shared/Lightbox';
import { Button } from '@/components/ui/button';

const releaseKeys = ['r1', 'r2', 'r3', 'r4', 'r5'] as const;
const kitKeys = ['pressKit', 'logoPack', 'photoGallery'] as const;

const galleryImages = [
  {
    src: '/images/factory/factory-exterior.jpg',
    altKey: 'gallery.img1',
  },
  {
    src: '/images/factory/factory-interior.jpg',
    altKey: 'gallery.img2',
  },
  {
    src: '/images/products/cpj45-bags.jpg',
    altKey: 'gallery.img3',
  },
  {
    src: '/images/quality-lab.jpg',
    altKey: 'gallery.img4',
  },
  {
    src: '/images/factory/factory-aerial.jpg',
    altKey: 'gallery.img5',
  },
  {
    src: '/images/real/team/team-1.jpg',
    altKey: 'gallery.img6',
  },
];

export default function PressePage() {
  const t = useTranslations('press');
  const params = useParams();
  const locale = (params?.locale as string) || 'fr';

  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

  const kitIcons: Record<string, React.ReactNode> = {
    pressKit: <FileText className="w-7 h-7 text-[#1B3A5C]" />,
    logoPack: <Newspaper className="w-7 h-7 text-[#1B3A5C]" />,
    photoGallery: <Camera className="w-7 h-7 text-[#1B3A5C]" />,
  };

  return (
    <>
      <PageHero
        title={t('title')}
        subtitle={t('subtitle')}
        sectionCounter="/12"
      />

      {/* ── Press Releases ── */}
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
                      <p className="text-[#6B7280] leading-relaxed text-[15px] mb-3">
                        {t(`releases.${key}.excerpt`)}
                      </p>
                      <span className="inline-flex items-center gap-1.5 text-sm font-medium text-[#C1272D] hover:text-[#C1272D]/80 transition-colors cursor-pointer">
                        {t('releases.readMore')}
                        <ExternalLink className="w-3.5 h-3.5" />
                      </span>
                    </div>
                  </div>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Press Kit ── */}
      <section className="py-16 md:py-24 bg-[#F7F8FA]">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <ScrollReveal>
            <h2 className="text-2xl md:text-3xl font-bold text-[#1B3A5C] mb-2">
              {t('kit.title')}
            </h2>
            <p className="text-[#6B7280] mb-4 text-[15px]">
              {t('kit.subtitle')}
            </p>
            <div className="w-16 h-[3px] bg-[#E8B84B] rounded-full mb-10" />
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {kitKeys.map((key, i) => (
              <ScrollReveal key={key} delay={i * 0.08}>
                <motion.div
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.2 }}
                  className="bg-white border border-[#E5E7EB] rounded-xl p-6 md:p-8 hover:border-[#E8B84B]/50 hover:shadow-md transition-all duration-300 text-center"
                >
                  <div className="w-16 h-16 rounded-full bg-[#1B3A5C]/10 flex items-center justify-center mx-auto mb-5">
                    {kitIcons[key]}
                  </div>
                  <h3 className="font-semibold text-[#1B3A5C] text-base mb-2">
                    {t(`kit.${key}.name`)}
                  </h3>
                  <p className="text-[#6B7280] text-sm mb-4 leading-relaxed">
                    {t(`kit.${key}.desc`)}
                  </p>
                  <span className="inline-block text-xs text-[#6B7280]/70 mb-4">
                    {t(`kit.${key}.size`)}
                  </span>
                  <br />
                  <button className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-medium text-white bg-[#1B3A5C] rounded-full hover:bg-[#1B3A5C]/90 transition-colors">
                    <Download className="w-4 h-4" />
                    {t('kit.download')}
                  </button>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── HD Photo Gallery ── */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <ScrollReveal>
            <h2 className="text-2xl md:text-3xl font-bold text-[#1B3A5C] mb-2">
              {t('gallery.title')}
            </h2>
            <p className="text-[#6B7280] mb-4 text-[15px]">
              {t('gallery.subtitle')}
            </p>
            <div className="w-16 h-[3px] bg-[#E8B84B] rounded-full mb-10" />
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {galleryImages.map((img, i) => (
              <ScrollReveal key={img.src} delay={i * 0.07}>
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                  className="group relative aspect-[4/3] rounded-xl overflow-hidden border border-[#E5E7EB] cursor-pointer hover:border-[#E8B84B]/50 hover:shadow-lg transition-all duration-300"
                  onClick={() => openLightbox(i)}
                >
                  <Image
                    src={img.src}
                    alt={t(img.altKey)}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1B3A5C]/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                    <p className="text-white text-sm font-medium mb-2">
                      {t(img.altKey)}
                    </p>
                    <button
                      className="inline-flex items-center gap-1.5 self-start px-3 py-1.5 text-xs font-medium text-white bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-colors"
                      onClick={(e) => {
                        e.stopPropagation();
                        openLightbox(i);
                      }}
                    >
                      <ExternalLink className="w-3 h-3" />
                      {t('gallery.view')}
                    </button>
                  </div>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal delay={0.3}>
            <p className="text-center text-sm text-[#6B7280] mt-8">
              {t('gallery.note')}
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* ── Press Contact ── */}
      <section className="py-16 md:py-24 bg-[#F7F8FA]">
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
                <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-6">
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
                <p className="text-white/60 text-sm mb-8">
                  {t('contact.availability')}
                </p>
                <Link href={`/${locale}/contact`}>
                  <Button className="bg-[#E8B84B] hover:bg-[#E8B84B]/90 text-[#1B3A5C] px-8 py-3 text-sm font-semibold rounded-full h-auto">
                    {t('contact.cta')}
                  </Button>
                </Link>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ── Lightbox ── */}
      <AnimatePresence>
        {lightboxOpen && (
          <Lightbox
            images={galleryImages.map((img) => ({
              src: img.src,
              alt: t(img.altKey),
            }))}
            initialIndex={lightboxIndex}
            onClose={() => setLightboxOpen(false)}
            counterLabel={locale === 'fr' ? 'sur' : 'of'}
            closeLabel={locale === 'fr' ? 'Fermer' : 'Close'}
            prevLabel={locale === 'fr' ? 'Précédent' : 'Previous'}
            nextLabel={locale === 'fr' ? 'Suivant' : 'Next'}
          />
        )}
      </AnimatePresence>
    </>
  );
}
