'use client';

import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { PageHero } from '@/components/shared/PageHero';
import { FadeIn, StaggerContainer, StaggerItem } from '@/components/shared/Animations';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';

export default function ProductsPage() {
  const t = useTranslations('products');
  const tSpec = useTranslations('products.specLabels');

  const products = ['cpj35', 'cpj45', 'cpa42_5', 'cpj55'] as const;

  return (
    <>
      <PageHero title={t('title')} subtitle={t('subtitle')} image="/images/cement-bags.png" />

      <section className="bg-white py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <StaggerContainer className="space-y-8">
            {products.map((key) => (
              <StaggerItem key={key}>
                <Card className="border-border hover:shadow-lg transition-shadow overflow-hidden">
                  <CardContent className="p-0">
                    <div className="flex flex-col lg:flex-row">
                      {/* Product image */}
                      <div className="lg:w-80 relative shrink-0">
                        <div className="relative w-full h-48 lg:h-full min-h-[200px]">
                          <Image
                            src="/images/cement-bags.png"
                            alt={t(`${key}.full`)}
                            fill
                            className="object-cover"
                          />
                          <div className="absolute inset-0 bg-navy/20 flex items-center justify-center">
                            <span className="font-mono text-4xl font-bold text-white/80">
                              {t(`${key}.name`)}
                            </span>
                          </div>
                        </div>
                      </div>

                      {/* Product details */}
                      <div className="flex-1 p-6 lg:p-8">
                        <div className="flex items-center gap-3 mb-2">
                          <Badge variant="secondary" className="bg-navy/10 text-navy font-mono">
                            {t(`${key}.name`)}
                          </Badge>
                        </div>
                        <h3 className="text-xl font-bold text-navy">{t(`${key}.full`)}</h3>
                        <p className="mt-3 text-warm-gray leading-relaxed">{t(`${key}.desc`)}</p>

                        <Separator className="my-4" />

                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                          {(['resistance', 'fineness', 'setting', 'use'] as const).map((spec) => (
                            <div key={spec}>
                              <p className="text-xs text-warm-gray uppercase tracking-wider font-medium">
                                {tSpec(spec)}
                              </p>
                              <p className="mt-1 text-sm font-medium text-navy">
                                {t(`${key}.specs.${spec}`)}
                              </p>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </StaggerItem>
            ))}
          </StaggerContainer>

          <FadeIn delay={0.3}>
            <div className="mt-12 bg-light-gray rounded-2xl p-8 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <p className="font-medium text-navy">{t('packaging')}</p>
                <p className="text-sm text-warm-gray mt-1">{t('standards')}</p>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
