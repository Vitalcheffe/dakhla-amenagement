'use client';

import { useTranslations } from 'next-intl';
import { useParams } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, CheckCircle, Package, Truck, Container } from 'lucide-react';
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
                  src="/images/products/cpj45-bags.jpg"
                  alt={t('products.cpj45.full')}
                  fill
                  quality={90}
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
                  src="/images/products/cpj55-bags.jpg"
                  alt={t('products.cpj55.full')}
                  fill
                  quality={90}
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

      {/* Packaging & Delivery Options — Visual Cards */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <ScrollReveal>
            <div className="text-center mb-14">
              <h2 className="text-2xl md:text-3xl font-bold text-[#1B3A5C]">
                {locale === 'fr' ? 'Conditionnement & Livraison' : 'Packaging & Delivery'}
              </h2>
              <p className="mt-4 text-[#6B7280] max-w-2xl mx-auto">
                {locale === 'fr'
                  ? 'Des solutions de conditionnement adaptées à chaque type de chantier'
                  : 'Packaging solutions adapted to every type of construction site'}
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Vrac / Bulk */}
            <ScrollReveal delay={0.1}>
              <div className="card-lift bg-white border border-[#E5E7EB] rounded-2xl overflow-hidden">
                <div className="relative h-52">
                  <Image
                    src="/images/products/bulk-cement-truck.jpg"
                    alt="Bulk cement tanker truck for delivery"
                    fill
                    quality={90}
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-xl bg-[#1B3A5C]/10 flex items-center justify-center">
                      <Truck className="w-5 h-5 text-[#1B3A5C]" />
                    </div>
                    <h3 className="text-lg font-bold text-[#1B3A5C]">{t('quote.step2.vrac')}</h3>
                  </div>
                  <p className="text-sm text-[#6B7280] leading-relaxed">
                    {t('quote.step2.vracDesc')}
                  </p>
                  <div className="mt-4 flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-emerald-500" />
                    <span className="text-xs font-semibold text-emerald-600">
                      {t('quote.step3.free')}
                    </span>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            {/* Sacs 50kg */}
            <ScrollReveal delay={0.15}>
              <div className="card-lift bg-white border border-[#E5E7EB] rounded-2xl overflow-hidden">
                <div className="relative h-52">
                  <Image
                    src="/images/products/cpj45-bags.jpg"
                    alt="Cement bags 50 kg on pallets"
                    fill
                    quality={90}
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-xl bg-[#E8B84B]/15 flex items-center justify-center">
                      <Package className="w-5 h-5 text-[#E8B84B]" />
                    </div>
                    <h3 className="text-lg font-bold text-[#1B3A5C]">{t('quote.step2.sacs50')}</h3>
                  </div>
                  <p className="text-sm text-[#6B7280] leading-relaxed">
                    {t('quote.step2.sacs50Desc')}
                  </p>
                  <div className="mt-4 flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-[#1B3A5C]" />
                    <span className="text-xs font-semibold text-[#1B3A5C]">+30 MAD/T</span>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            {/* Big Bag */}
            <ScrollReveal delay={0.2}>
              <div className="card-lift bg-white border border-[#E5E7EB] rounded-2xl overflow-hidden">
                <div className="relative h-52">
                  <Image
                    src="/images/factory/warehouse.jpg"
                    alt="Big Bag industrial cement packaging"
                    fill
                    quality={90}
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-xl bg-[#C1272D]/10 flex items-center justify-center">
                      <Container className="w-5 h-5 text-[#C1272D]" />
                    </div>
                    <h3 className="text-lg font-bold text-[#1B3A5C]">{t('quote.step2.bigBag')}</h3>
                  </div>
                  <p className="text-sm text-[#6B7280] leading-relaxed">
                    {t('quote.step2.bigBagDesc')}
                  </p>
                  <div className="mt-4 flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-[#1B3A5C]" />
                    <span className="text-xs font-semibold text-[#1B3A5C]">+80 MAD/T</span>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Cement Quality Close-up */}
      <section className="py-16 md:py-24 bg-[#F7F8FA]">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <ScrollReveal>
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
                <Image
                  src="/images/products/cement-powder-closeup.jpg"
                  alt="Ciment Portland — Qualité et finesse du ciment DAM"
                  fill
                  quality={90}
                  className="object-cover"
                />
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-[#1B3A5C] mb-6">
                  {locale === 'fr' ? 'Qualité & Finesse Garanties' : 'Guaranteed Quality & Fineness'}
                </h2>
                <p className="text-[#1A1A2E]/70 leading-relaxed mb-6">
                  {locale === 'fr'
                    ? 'Chaque lot de ciment produit par Dakhla Aménagement est soumis à des contrôles qualité rigoureux. Notre laboratoire interne vérifie la finesse de broyage, la résistance mécanique et la régularité de chaque production.'
                    : 'Every batch of cement produced by Dakhla Aménagement undergoes rigorous quality controls. Our internal laboratory verifies the grinding fineness, mechanical resistance, and consistency of each production.'}
                </p>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-[#E8B84B] shrink-0 mt-0.5" />
                    <div>
                      <span className="text-sm font-semibold text-[#1B3A5C]">{locale === 'fr' ? 'Finesse de broyage' : 'Grinding fineness'}</span>
                      <p className="text-xs text-[#6B7280] mt-0.5">≥ 350 m²/kg (CPJ 45) / ≥ 400 m²/kg (CPJ 55)</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-[#E8B84B] shrink-0 mt-0.5" />
                    <div>
                      <span className="text-sm font-semibold text-[#1B3A5C]">{locale === 'fr' ? 'Résistance mécanique' : 'Mechanical resistance'}</span>
                      <p className="text-xs text-[#6B7280] mt-0.5">45–55 MPa à 28 jours</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-[#E8B84B] shrink-0 mt-0.5" />
                    <div>
                      <span className="text-sm font-semibold text-[#1B3A5C]">{locale === 'fr' ? 'Conformité normative' : 'Regulatory compliance'}</span>
                      <p className="text-xs text-[#6B7280] mt-0.5">NM 10.1.004 / EN 197-1</p>
                    </div>
                  </div>
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
