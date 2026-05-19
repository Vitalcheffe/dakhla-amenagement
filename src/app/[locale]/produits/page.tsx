'use client';

import { useTranslations } from 'next-intl';
import { useParams } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ScrollReveal } from '@/components/shared/Animations';
import { PageHero } from '@/components/shared/PageHero';

export default function ProduitsPage() {
  const t = useTranslations();
  const params = useParams();
  const locale = (params?.locale as string) || 'fr';

  return (
    <>
      <PageHero title={t('products.title')} subtitle={t('products.subtitle')} sectionCounter="/01" />

      {/* CPJ 45 — Full detail */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <ScrollReveal>
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
                <Image
                  src="/images/cement-bags.jpg"
                  alt={t('products.cpj45.full')}
                  fill
                  className="object-cover"
                />
                <div className="absolute top-4 right-4 bg-[#E8B84B] text-[#1A1A2E] text-xs font-bold px-3 py-1 rounded-full">
                  {t('products.cpj45.badge')}
                </div>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-[#1B3A5C]">{t('products.cpj45.name')}</h2>
                <p className="text-[#6B7280] mt-1">{t('products.cpj45.full')}</p>
                <p className="mt-6 text-[#1A1A2E]/70 leading-relaxed">{t('products.cpj45.desc')}</p>

                {/* Specs Table */}
                <div className="mt-8 bg-[#F7F8FA] rounded-xl p-6">
                  <h3 className="font-semibold text-[#1B3A5C] mb-4">{t('products.specLabels.resistance')}</h3>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between border-b border-[#E5E7EB] pb-3">
                      <span className="text-sm text-[#6B7280]">{t('products.specLabels.resistance')}</span>
                      <span className="text-sm font-semibold text-[#1B3A5C]">{t('products.cpj45.specs.resistance')}</span>
                    </div>
                    <div className="flex items-center justify-between border-b border-[#E5E7EB] pb-3">
                      <span className="text-sm text-[#6B7280]">{t('products.specLabels.fineness')}</span>
                      <span className="text-sm font-semibold text-[#1B3A5C]">{t('products.cpj45.specs.fineness')}</span>
                    </div>
                    <div className="flex items-center justify-between border-b border-[#E5E7EB] pb-3">
                      <span className="text-sm text-[#6B7280]">{t('products.specLabels.setting')}</span>
                      <span className="text-sm font-semibold text-[#1B3A5C]">{t('products.cpj45.specs.setting')}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-[#6B7280]">{t('products.specLabels.use')}</span>
                      <span className="text-sm font-semibold text-[#1B3A5C]">{t('products.cpj45.specs.use')}</span>
                    </div>
                  </div>
                </div>

                <div className="mt-6 flex items-center gap-3">
                  <Link href={`/${locale}/devis`}>
                    <Button className="bg-[#C1272D] text-white hover:bg-[#C1272D]/90 font-semibold rounded-full px-6">
                      {t('products.requestQuote')} <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* CPJ 55 — Full detail */}
      <section className="py-16 md:py-24 bg-[#F7F8FA]">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <ScrollReveal delay={0.1}>
              <div className="order-2 lg:order-1">
                <h2 className="text-3xl md:text-4xl font-bold text-[#1B3A5C]">{t('products.cpj55.name')}</h2>
                <p className="text-[#6B7280] mt-1">{t('products.cpj55.full')}</p>
                <p className="mt-6 text-[#1A1A2E]/70 leading-relaxed">{t('products.cpj55.desc')}</p>

                <div className="mt-8 bg-white rounded-xl p-6">
                  <div className="space-y-3">
                    <div className="flex items-center justify-between border-b border-[#E5E7EB] pb-3">
                      <span className="text-sm text-[#6B7280]">{t('products.specLabels.resistance')}</span>
                      <span className="text-sm font-semibold text-[#1B3A5C]">{t('products.cpj55.specs.resistance')}</span>
                    </div>
                    <div className="flex items-center justify-between border-b border-[#E5E7EB] pb-3">
                      <span className="text-sm text-[#6B7280]">{t('products.specLabels.fineness')}</span>
                      <span className="text-sm font-semibold text-[#1B3A5C]">{t('products.cpj55.specs.fineness')}</span>
                    </div>
                    <div className="flex items-center justify-between border-b border-[#E5E7EB] pb-3">
                      <span className="text-sm text-[#6B7280]">{t('products.specLabels.setting')}</span>
                      <span className="text-sm font-semibold text-[#1B3A5C]">{t('products.cpj55.specs.setting')}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-[#6B7280]">{t('products.specLabels.use')}</span>
                      <span className="text-sm font-semibold text-[#1B3A5C]">{t('products.cpj55.specs.use')}</span>
                    </div>
                  </div>
                </div>

                <div className="mt-6 flex items-center gap-3">
                  <Link href={`/${locale}/devis`}>
                    <Button className="bg-[#C1272D] text-white hover:bg-[#C1272D]/90 font-semibold rounded-full px-6">
                      {t('products.requestQuote')} <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </div>
            </ScrollReveal>
            <ScrollReveal>
              <div className="order-1 lg:order-2 relative aspect-[4/3] rounded-2xl overflow-hidden">
                <Image
                  src="/images/factory-exterior.jpg"
                  alt={t('products.cpj55.full')}
                  fill
                  className="object-cover"
                />
                <div className="absolute top-4 right-4 bg-[#6B7280] text-white text-xs font-bold px-3 py-1 rounded-full">
                  {t('products.cpj55.badge')}
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Packaging & Standards */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <ScrollReveal>
            <div className="bg-[#1B3A5C] rounded-2xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8">
              <div>
                <h3 className="text-2xl font-bold text-white mb-2">{t('products.packaging')}</h3>
                <p className="text-white/60">{t('products.standards')}</p>
              </div>
              <div className="flex items-center gap-4 flex-wrap">
                <div className="flex items-center gap-2 bg-white/10 rounded-full px-4 py-2">
                  <CheckCircle className="w-4 h-4 text-[#E8B84B]" />
                  <span className="text-sm text-white">NM 10.1.004</span>
                </div>
                <div className="flex items-center gap-2 bg-white/10 rounded-full px-4 py-2">
                  <CheckCircle className="w-4 h-4 text-[#E8B84B]" />
                  <span className="text-sm text-white">EN 197-1</span>
                </div>
              </div>
              <Link href={`/${locale}/devis`}>
                <Button className="bg-[#C1272D] text-white hover:bg-[#C1272D]/90 font-semibold rounded-full px-6 shrink-0">
                  {t('products.requestQuote')}
                </Button>
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
