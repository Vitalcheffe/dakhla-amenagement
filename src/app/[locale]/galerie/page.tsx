'use client';

import { useState, useMemo, useCallback } from 'react';
import { useTranslations } from 'next-intl';
import { useParams } from 'next/navigation';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { Camera, Filter, X, Play } from 'lucide-react';
import { PageHero } from '@/components/shared/PageHero';
import { ScrollReveal, StaggerContainer, StaggerItem } from '@/components/shared/Animations';
import { Lightbox } from '@/components/shared/Lightbox';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

type Category = 'all' | 'factory' | 'lab' | 'products' | 'delivery' | 'projects' | 'team' | 'dakhla';

const categoryKeys: Category[] = ['all', 'factory', 'lab', 'products', 'delivery', 'projects', 'team', 'dakhla'];

interface GalleryPhoto {
  key: string;
  src: string;
  cat: Category;
  aspect: 'portrait' | 'landscape' | 'square';
}

const allPhotos: GalleryPhoto[] = [
  // ===== FACTORY - Real photos from DAM factory =====
  { key: 'p1', src: '/images/real/factory/factory-2.jpg', cat: 'factory', aspect: 'portrait' },
  { key: 'p2', src: '/images/real/factory/factory-1.jpg', cat: 'factory', aspect: 'landscape' },
  { key: 'p3', src: '/images/real/IMG_9420.jpg', cat: 'factory', aspect: 'portrait' },
  { key: 'p4', src: '/images/real/IMG_9421.jpg', cat: 'factory', aspect: 'portrait' },
  { key: 'p5', src: '/images/real/IMG_9429.jpg', cat: 'factory', aspect: 'portrait' },
  { key: 'p6', src: '/images/real/IMG_9430.jpg', cat: 'factory', aspect: 'portrait' },
  { key: 'p7', src: '/images/real/IMG_9431.jpg', cat: 'factory', aspect: 'portrait' },
  { key: 'p8', src: '/images/real/IMG_9432.jpg', cat: 'factory', aspect: 'portrait' },
  { key: 'p9', src: '/images/real/IMG_9433.jpg', cat: 'factory', aspect: 'portrait' },
  { key: 'p10', src: '/images/real/IMG_9434.jpg', cat: 'factory', aspect: 'portrait' },
  { key: 'p11', src: '/images/real/IMG_9435.jpg', cat: 'factory', aspect: 'portrait' },
  { key: 'p12', src: '/images/real/IMG_9436.jpg', cat: 'factory', aspect: 'portrait' },
  // ===== LAB - Real photos from DAM lab =====
  { key: 'p13', src: '/images/real/lab/lab-1.jpg', cat: 'lab', aspect: 'portrait' },
  { key: 'p14', src: '/images/real/lab/lab-2.jpg', cat: 'lab', aspect: 'landscape' },
  { key: 'p15', src: '/images/real/lab/lab-3.jpg', cat: 'lab', aspect: 'square' },
  { key: 'p16', src: '/images/real/lab/lab-4.jpg', cat: 'lab', aspect: 'portrait' },
  { key: 'p17', src: '/images/real/IMG_9587.jpg', cat: 'lab', aspect: 'portrait' },
  { key: 'p18', src: '/images/real/IMG_9588.jpg', cat: 'lab', aspect: 'portrait' },
  { key: 'p19', src: '/images/real/IMG_9589.jpg', cat: 'lab', aspect: 'portrait' },
  { key: 'p20', src: '/images/real/IMG_9590.jpg', cat: 'lab', aspect: 'portrait' },
  { key: 'p21', src: '/images/real/IMG_9591.jpg', cat: 'lab', aspect: 'portrait' },
  // ===== PRODUCTS - Real photos + Stock cement-specific =====
  { key: 'p22', src: '/images/real/IMG_9592.jpg', cat: 'products', aspect: 'portrait' },
  { key: 'p23', src: '/images/real/IMG_9593.jpg', cat: 'products', aspect: 'portrait' },
  { key: 'p24', src: '/images/real/IMG_9594.jpg', cat: 'products', aspect: 'portrait' },
  { key: 'p25', src: '/images/real/IMG_9595.jpg', cat: 'products', aspect: 'portrait' },
  { key: 'p26', src: '/images/real/IMG_9596.jpg', cat: 'products', aspect: 'portrait' },
  { key: 'p27', src: '/images/products/cpj45-bags.jpg', cat: 'products', aspect: 'portrait' },
  { key: 'p28', src: '/images/products/cpj55-bags.jpg', cat: 'products', aspect: 'portrait' },
  { key: 'p29', src: '/images/products/big-bag-cement.jpg', cat: 'products', aspect: 'landscape' },
  { key: 'p30', src: '/images/products/bulk-cement-truck.jpg', cat: 'products', aspect: 'landscape' },
  { key: 'p31', src: '/images/products/cement-powder-closeup.jpg', cat: 'products', aspect: 'square' },
  // ===== DELIVERY - Real photos =====
  { key: 'p32', src: '/images/real/delivery/delivery-1.jpg', cat: 'delivery', aspect: 'landscape' },
  { key: 'p33', src: '/images/real/IMG_9597.jpg', cat: 'delivery', aspect: 'portrait' },
  { key: 'p34', src: '/images/real/IMG_9598.jpg', cat: 'delivery', aspect: 'portrait' },
  { key: 'p35', src: '/images/real/IMG_9599.jpg', cat: 'delivery', aspect: 'portrait' },
  { key: 'p36', src: '/images/delivery/concrete-delivery.jpg', cat: 'delivery', aspect: 'portrait' },
  // ===== PROJECTS - Real photos + Stock construction =====
  { key: 'p37', src: '/images/real/construction/construction-1.jpg', cat: 'projects', aspect: 'landscape' },
  { key: 'p38', src: '/images/real/IMG_9600.jpg', cat: 'projects', aspect: 'portrait' },
  { key: 'p39', src: '/images/real/IMG_9601.jpg', cat: 'projects', aspect: 'portrait' },
  { key: 'p40', src: '/images/real/IMG_9602.jpg', cat: 'projects', aspect: 'portrait' },
  { key: 'p41', src: '/images/projects/villa-construction.jpg', cat: 'projects', aspect: 'portrait' },
  { key: 'p42', src: '/images/projects/infrastructure-road.jpg', cat: 'projects', aspect: 'landscape' },
  { key: 'p43', src: '/images/projects/port-construction.jpg', cat: 'projects', aspect: 'landscape' },
  // ===== TEAM - Real photos =====
  { key: 'p44', src: '/images/real/team/team-1.jpg', cat: 'team', aspect: 'landscape' },
  { key: 'p45', src: '/images/real/office/office-1.jpg', cat: 'team', aspect: 'landscape' },
  { key: 'p46', src: '/images/real/IMG_9603.jpg', cat: 'team', aspect: 'portrait' },
  { key: 'p47', src: '/images/real/IMG_9604.jpg', cat: 'team', aspect: 'portrait' },
  { key: 'p48', src: '/images/real/IMG_9605.jpg', cat: 'team', aspect: 'portrait' },
  { key: 'p49', src: '/images/real/IMG_9606.jpg', cat: 'team', aspect: 'portrait' },
  { key: 'p50', src: '/images/real/IMG_9617.jpg', cat: 'team', aspect: 'portrait' },
  // ===== DAKHLA =====
  { key: 'p51', src: '/images/real/IMG_9626.jpg', cat: 'dakhla', aspect: 'portrait' },
  { key: 'p52', src: '/images/real/IMG_9627.jpg', cat: 'dakhla', aspect: 'portrait' },
  { key: 'p53', src: '/images/dakhla-aerial.jpg', cat: 'dakhla', aspect: 'landscape' },
  { key: 'p54', src: '/images/sustainability.jpg', cat: 'dakhla', aspect: 'landscape' },
];

// Category badge colors matching the design system
const categoryColors: Record<string, string> = {
  factory: 'bg-[#1B3A5C]',
  lab: 'bg-emerald-600',
  products: 'bg-[#C1272D]',
  delivery: 'bg-[#E8B84B] text-[#1A1A2E]',
  projects: 'bg-amber-700',
  team: 'bg-violet-700',
  dakhla: 'bg-cyan-700',
};

// Aspect ratio classes for masonry variety
const aspectClasses: Record<string, string> = {
  portrait: 'aspect-[3/4]',
  landscape: 'aspect-[4/3]',
  square: 'aspect-square',
};

export default function GaleriePage() {
  const t = useTranslations('gallery');
  const params = useParams();
  const locale = (params?.locale as string) || 'fr';
  const [activeCategory, setActiveCategory] = useState<Category>('all');
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  // Build photos array with translations
  const translatedPhotos = useMemo(
    () =>
      allPhotos.map((photo) => ({
        ...photo,
        alt: t(`photos.${photo.key}.alt`),
      })),
    [t]
  );

  const filteredPhotos =
    activeCategory === 'all'
      ? translatedPhotos
      : translatedPhotos.filter((p) => p.cat === activeCategory);

  // Lightbox images (filtered set)
  const lightboxImages = filteredPhotos.map((p) => ({
    src: p.src,
    alt: p.alt,
  }));

  const openLightbox = useCallback((index: number) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
  }, []);

  const closeLightbox = useCallback(() => {
    setLightboxOpen(false);
  }, []);

  // Count photos per category
  const photoCount = useMemo(() => {
    const counts: Record<string, number> = { all: allPhotos.length };
    allPhotos.forEach((p) => {
      counts[p.cat] = (counts[p.cat] || 0) + 1;
    });
    return counts;
  }, []);

  return (
    <>
      <PageHero title={t('title')} subtitle={t('subtitle')} sectionCounter="/09" />

      {/* Gallery Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          {/* Filter Bar */}
          <ScrollReveal>
            <div className="flex items-center gap-3 overflow-x-auto pb-4 mb-10 scrollbar-hide -mx-6 px-6 md:mx-0 md:px-0">
              <Filter className="w-4 h-4 text-[#6B7280] shrink-0 hidden md:block" />
              {categoryKeys.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`group flex items-center gap-2 px-5 py-2.5 text-sm font-medium rounded-full whitespace-nowrap transition-all duration-300 ${
                    activeCategory === cat
                      ? 'bg-[#1B3A5C] text-white shadow-lg shadow-[#1B3A5C]/20'
                      : 'bg-[#F7F8FA] text-[#1B3A5C] hover:bg-[#1B3A5C]/10'
                  }`}
                >
                  {t(`filters.${cat}`)}
                  <span
                    className={`text-[11px] px-1.5 py-0.5 rounded-full ${
                      activeCategory === cat
                        ? 'bg-white/20 text-white'
                        : 'bg-[#1B3A5C]/10 text-[#1B3A5C]'
                    }`}
                  >
                    {photoCount[cat] || 0}
                  </span>
                </button>
              ))}
            </div>
          </ScrollReveal>

          {/* Photo count indicator */}
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-2 text-sm text-[#6B7280]">
              <Camera className="w-4 h-4" />
              <span>
                {filteredPhotos.length} {t('photoCount')}
              </span>
            </div>
            {activeCategory !== 'all' && (
              <button
                onClick={() => setActiveCategory('all')}
                className="text-sm text-[#C1272D] hover:underline flex items-center gap-1"
              >
                <X className="w-3 h-3" />
                {t('clearFilter')}
              </button>
            )}
          </div>

          {/* Masonry Grid */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.35, ease: 'easeOut' }}
              className="columns-1 md:columns-2 lg:columns-3 gap-4 space-y-4"
            >
              {filteredPhotos.map((photo, index) => (
                <motion.div
                  key={photo.key}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: Math.min(index * 0.04, 0.6) }}
                  className="break-inside-avoid"
                >
                  <div
                    className={`group relative rounded-xl overflow-hidden cursor-pointer ${aspectClasses[photo.aspect]}`}
                    onClick={() => openLightbox(index)}
                  >
                    <Image
                      src={photo.src}
                      alt={photo.alt}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />

                    {/* Overlay on hover */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400" />

                    {/* Category badge */}
                    <span
                      className={`absolute top-3 left-3 px-3 py-1 text-[11px] font-semibold rounded-full text-white opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300 ${
                        categoryColors[photo.cat] || 'bg-[#1B3A5C]'
                      }`}
                    >
                      {t(`filters.${photo.cat}`)}
                    </span>

                    {/* Caption on hover */}
                    <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-400">
                      <p className="text-white text-sm font-medium drop-shadow-lg">{photo.alt}</p>
                    </div>

                    {/* Zoom icon */}
                    <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <Camera className="w-3.5 h-3.5 text-white" />
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>

          {/* Empty state */}
          {filteredPhotos.length === 0 && (
            <div className="text-center py-20">
              <Camera className="w-12 h-12 text-[#E5E7EB] mx-auto mb-4" />
              <p className="text-[#6B7280] text-lg">{t('emptyState')}</p>
            </div>
          )}
        </div>
      </section>

      {/* Video Section */}
      <section className="py-16 md:py-24 bg-[#F7F8FA]">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <ScrollReveal>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-[#C1272D]/10 flex items-center justify-center">
                <Play className="w-5 h-5 text-[#C1272D]" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-[#1B3A5C]">{t('videoTitle')}</h2>
            </div>
            <p className="text-[#6B7280] text-base mb-12 max-w-2xl">{t('videoSubtitle')}</p>
          </ScrollReveal>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {['v1', 'v2', 'v3'].map((vKey) => (
              <StaggerItem key={vKey}>
                <div className="group relative rounded-xl overflow-hidden bg-[#1B3A5C] aspect-video cursor-pointer hover:shadow-xl transition-shadow duration-300">
                  <Image
                    src={t(`videos.${vKey}.thumbnail`)}
                    alt={t(`videos.${vKey}.title`)}
                    fill
                    className="object-cover opacity-70 group-hover:opacity-50 group-hover:scale-105 transition-all duration-500"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  {/* Play button overlay */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center group-hover:bg-white/30 group-hover:scale-110 transition-all duration-300">
                      <Play className="w-7 h-7 text-white ml-1" />
                    </div>
                  </div>
                  {/* Video info */}
                  <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
                    <p className="text-white text-sm font-semibold">{t(`videos.${vKey}.title`)}</p>
                    <p className="text-white/60 text-xs mt-1">{t(`videos.${vKey}.duration`)}</p>
                  </div>
                  {/* Coming soon badge */}
                  <span className="absolute top-3 right-3 px-2.5 py-1 bg-[#E8B84B] text-[#1A1A2E] text-[10px] font-bold rounded-full uppercase tracking-wider">
                    {t('videoComingSoon')}
                  </span>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20 md:py-28 overflow-hidden">
        <Image
          src="/images/factory/factory-aerial.jpg"
          alt="Factory aerial view"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-[#1B3A5C]/85" />
        <div className="relative max-w-[1400px] mx-auto px-6 md:px-12 text-center">
          <ScrollReveal>
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
              {t('cta.title')}
            </h2>
            <p className="text-white/80 mb-8 text-[15px] md:text-base leading-relaxed max-w-2xl mx-auto">
              {t('cta.subtitle')}
            </p>
            <Link href={`/${locale}/contact`}>
              <Button
                className="bg-[#C1272D] hover:bg-[#C1272D]/90 text-white px-8 py-3 text-sm font-semibold rounded-full h-auto"
                size="lg"
              >
                {t('cta.button')}
              </Button>
            </Link>
          </ScrollReveal>
        </div>
      </section>

      {/* Lightbox */}
      {lightboxOpen && (
        <Lightbox
          images={lightboxImages}
          initialIndex={lightboxIndex}
          onClose={closeLightbox}
          counterLabel={t('lightbox.of')}
          closeLabel={t('lightbox.close')}
          prevLabel={t('lightbox.prev')}
          nextLabel={t('lightbox.next')}
        />
      )}
    </>
  );
}
