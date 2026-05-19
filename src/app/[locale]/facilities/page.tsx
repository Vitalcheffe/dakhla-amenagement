'use client';

import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { PageHero } from '@/components/shared/PageHero';
import { FadeIn, StaggerContainer, StaggerItem } from '@/components/shared/Animations';
import { Card, CardContent } from '@/components/ui/card';
import { Factory, MapPin, TrendingUp, Maximize, Cog, Warehouse, Package, Microscope } from 'lucide-react';

export default function FacilitiesPage() {
  const t = useTranslations('facilities');

  const equipmentItems = ['mills', 'silos', 'packaging', 'lab'] as const;
  const equipmentIcons = [Cog, Warehouse, Package, Microscope];

  const galleryImages = [
    { src: '/images/factory-exterior.png', key: 'factory' },
    { src: '/images/grinding-process.png', key: 'grinding' },
    { src: '/images/quality-lab.png', key: 'lab' },
    { src: '/images/cement-bags.png', key: 'bags' },
  ] as const;

  return (
    <>
      <PageHero title={t('title')} subtitle={t('subtitle')} image="/images/factory-exterior.png" />

      {/* Production Center */}
      <section className="bg-white py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            <FadeIn>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-navy/10 flex items-center justify-center">
                  <Factory className="w-6 h-6 text-steel" />
                </div>
                <h2 className="text-3xl font-bold text-navy tracking-tight">
                  {t('production.title')}
                </h2>
              </div>
              <p className="text-warm-gray leading-relaxed text-lg">{t('production.text')}</p>
            </FadeIn>
            <FadeIn delay={0.2}>
              <div className="grid grid-cols-2 gap-4">
                <Card className="border-border">
                  <CardContent className="p-4 flex items-start gap-3">
                    <TrendingUp className="w-5 h-5 text-steel shrink-0 mt-0.5" />
                    <div>
                      <p className="text-sm font-medium text-navy">{t('production.capacity')}</p>
                    </div>
                  </CardContent>
                </Card>
                <Card className="border-border">
                  <CardContent className="p-4 flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-steel shrink-0 mt-0.5" />
                    <div>
                      <p className="text-sm font-medium text-navy">{t('production.location')}</p>
                    </div>
                  </CardContent>
                </Card>
                <Card className="border-border">
                  <CardContent className="p-4 flex items-start gap-3">
                    <TrendingUp className="w-5 h-5 text-steel shrink-0 mt-0.5" />
                    <div>
                      <p className="text-sm font-medium text-navy">{t('production.investment')}</p>
                    </div>
                  </CardContent>
                </Card>
                <Card className="border-border">
                  <CardContent className="p-4 flex items-start gap-3">
                    <Maximize className="w-5 h-5 text-steel shrink-0 mt-0.5" />
                    <div>
                      <p className="text-sm font-medium text-navy">{t('production.area')}</p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Equipment */}
      <section className="bg-light-gray py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <h2 className="text-3xl font-bold text-navy tracking-tight text-center">
              {t('equipment.title')}
            </h2>
          </FadeIn>
          <StaggerContainer className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {equipmentItems.map((item, i) => {
              const Icon = equipmentIcons[i];
              return (
                <StaggerItem key={item}>
                  <Card className="h-full border-border hover:shadow-lg transition-shadow">
                    <CardContent className="p-6 text-center">
                      <div className="w-14 h-14 rounded-xl bg-navy/10 flex items-center justify-center mx-auto mb-4">
                        <Icon className="w-7 h-7 text-steel" />
                      </div>
                      <h3 className="text-lg font-semibold text-navy">{t(`equipment.${item}.name`)}</h3>
                      <p className="mt-2 text-sm text-warm-gray leading-relaxed">
                        {t(`equipment.${item}.desc`)}
                      </p>
                    </CardContent>
                  </Card>
                </StaggerItem>
              );
            })}
          </StaggerContainer>
        </div>
      </section>

      {/* Gallery */}
      <section className="bg-white py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <h2 className="text-3xl font-bold text-navy tracking-tight text-center">
              {t('gallery.title')}
            </h2>
          </FadeIn>
          <StaggerContainer className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {galleryImages.map((img) => (
              <StaggerItem key={img.key}>
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden group">
                  <Image
                    src={img.src}
                    alt={t(`gallery.${img.key}`)}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy/60 to-transparent" />
                  <p className="absolute bottom-4 left-4 text-sm font-medium text-white">
                    {t(`gallery.${img.key}`)}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Location */}
      <section className="bg-light-gray py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="max-w-2xl mx-auto text-center">
              <div className="flex items-center justify-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-navy/10 flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-steel" />
                </div>
                <h2 className="text-3xl font-bold text-navy tracking-tight">
                  {t('location.title')}
                </h2>
              </div>
              <div className="bg-white rounded-2xl p-8 border border-border mt-6">
                <h3 className="text-lg font-semibold text-navy mb-4">{t('location.address')}</h3>
                <p className="text-warm-gray">{t('location.line1')}</p>
                <p className="text-warm-gray">{t('location.line2')}</p>
                <p className="mt-4 text-sm text-warm-gray">{t('location.access')}</p>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
