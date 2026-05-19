'use client';

import { useState, useMemo } from 'react';
import { useTranslations } from 'next-intl';
import { useParams } from 'next/navigation';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { PageHero } from '@/components/shared/PageHero';
import { ScrollReveal } from '@/components/shared/Animations';
import { Lightbox } from '@/components/shared/Lightbox';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

type Category = 'all' | 'factory' | 'products' | 'delivery' | 'lab' | 'projects' | 'team';

const categoryKeys: Category[] = ['all', 'factory', 'products', 'delivery', 'lab', 'projects', 'team'];

const photoKeys = [
  'p1', 'p2', 'p3', 'p4', 'p5', 'p6', 'p7', 'p8', 'p9', 'p10',
  'p11', 'p12', 'p13', 'p14', 'p15', 'p16', 'p17', 'p18', 'p19', 'p20',
  'p21', 'p22', 'p23', 'p24',
];

const photoMap: Record<string, string> = {
  p1: '/images/factory/factory-aerial.jpg',
  p2: '/images/factory/factory-exterior.jpg',
  p3: '/images/factory/factory-silos.jpg',
  p4: '/images/factory/factory-interior.jpg',
  p5: '/images/factory/control-room.jpg',
  p6: '/images/factory/warehouse.jpg',
  p7: '/images/process/step1-clinker-reception.jpg',
  p8: '/images/process/step2-grinding.jpg',
  p9: '/images/process/step3-dosing-lab.jpg',
  p10: '/images/process/step4-packaging.jpg',
  p11: '/images/products/cpj45-bags.jpg',
  p12: '/images/products/cpj55-bags.jpg',
  p13: '/images/products/big-bag-cement.jpg',
  p14: '/images/products/bulk-cement-truck.jpg',
  p15: '/images/products/cement-powder-closeup.jpg',
  p16: '/images/delivery/delivery-fleet.jpg',
  p17: '/images/delivery/concrete-delivery.jpg',
  p18: '/images/lab/lab-compression-test.jpg',
  p19: '/images/projects/villa-construction.jpg',
  p20: '/images/projects/infrastructure-road.jpg',
  p21: '/images/projects/port-construction.jpg',
  p22: '/images/projects/school-construction.jpg',
  p23: '/images/projects/residential-construction.jpg',
  p24: '/images/dakhla-aerial.jpg',
};

// Varying heights for masonry-like effect
const heightMap: Record<string, string> = {
  p1: 'h-64', p2: 'h-48', p3: 'h-56', p4: 'h-64',
  p5: 'h-48', p6: 'h-56', p7: 'h-48', p8: 'h-64',
  p9: 'h-56', p10: 'h-48', p11: 'h-56', p12: 'h-64',
  p13: 'h-48', p14: 'h-56', p15: 'h-64', p16: 'h-48',
  p17: 'h-56', p18: 'h-64', p19: 'h-48', p20: 'h-56',
  p21: 'h-64', p22: 'h-48', p23: 'h-56', p24: 'h-64',
};

// Category badge colors
const categoryColors: Record<string, string> = {
  factory: 'bg-[#1B3A5C]',
  products: 'bg-[#C1272D]',
  delivery: 'bg-[#E8B84B] text-[#1A1A2E]',
  lab: 'bg-emerald-600',
  projects: 'bg-amber-700',
  team: 'bg-violet-700',
};

export default function GaleriePage() {
  const t = useTranslations('gallery');
  const params = useParams();
  const locale = (params?.locale as string) || 'fr';
  const [activeCategory, setActiveCategory] = useState<Category>('all');
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  // Build photos array from translations
  const allPhotos = useMemo(
    () =>
      photoKeys.map((key) => ({
        key,
        src: photoMap[key],
        alt: t(`photos.${key}.alt`),
        cat: t(`photos.${key}.cat`) as string,
      })),
    [t]
  );

  const filteredPhotos =
    activeCategory === 'all'
      ? allPhotos
      : allPhotos.filter((p) => p.cat === activeCategory);

  // Lightbox images (all photos for navigation, filtered order)
  const lightboxImages = filteredPhotos.map((p) => ({
    src: p.src,
    alt: p.alt,
  }));

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

  return (
    <>
      <PageHero title={t('title')} subtitle={t('subtitle')} sectionCounter="/10" />

      {/* Gallery Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          {/* Filter Tabs */}
          <ScrollReveal>
            <div className="flex gap-3 overflow-x-auto pb-4 mb-12 scrollbar-hide -mx-6 px-6 md:mx-0 md:px-0">
              {categoryKeys.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-5 py-2.5 text-sm font-medium rounded-full whitespace-nowrap transition-colors ${
                    activeCategory === cat
                      ? 'bg-[#1B3A5C] text-white'
                      : 'bg-[#F7F8FA] text-[#1B3A5C] hover:bg-[#1B3A5C] hover:text-white'
                  }`}
                >
                  {t(`filters.${cat}`)}
                </button>
              ))}
            </div>
          </ScrollReveal>

          {/* Photo count */}
          <div className="mb-8">
            <p className="text-sm text-[#6B7280]">
              {filteredPhotos.length} {locale === 'fr' ? 'photos' : 'photos'}
            </p>
          </div>

          {/* Masonry-style Grid */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="columns-1 md:columns-2 lg:columns-3 gap-4 space-y-4"
            >
              {filteredPhotos.map((photo, index) => (
                <motion.div
                  key={photo.key}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.03 }}
                  className="break-inside-avoid"
                >
                  <div
                    className={`group relative rounded-xl overflow-hidden cursor-pointer card-lift ${heightMap[photo.key]}`}
                    onClick={() => openLightbox(index)}
                  >
                    <Image
                      src={photo.src}
                      alt={photo.alt}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                    {/* Overlay on hover */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                    {/* Category badge */}
                    <span
                      className={`absolute top-3 left-3 px-3 py-1 text-[11px] font-semibold rounded-full text-white ${categoryColors[photo.cat] || 'bg-[#1B3A5C]'}`}
                    >
                      {t(`filters.${photo.cat}`)}
                    </span>

                    {/* Alt text on hover */}
                    <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                      <p className="text-white text-sm font-medium">{photo.alt}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>

          {/* Empty state */}
          {filteredPhotos.length === 0 && (
            <div className="text-center py-20">
              <p className="text-[#6B7280] text-lg">
                {locale === 'fr' ? 'Aucune photo dans cette catégorie' : 'No photos in this category'}
              </p>
            </div>
          )}
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
          onClose={() => setLightboxOpen(false)}
          counterLabel={t('lightbox.of')}
          closeLabel={t('lightbox.close')}
          prevLabel={t('lightbox.prev')}
          nextLabel={t('lightbox.next')}
        />
      )}
    </>
  );
}
