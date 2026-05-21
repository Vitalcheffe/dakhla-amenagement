'use client';

import { useTranslations } from 'next-intl';
import { useParams } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, ChevronDown, Truck, Factory, Beaker, Package, Building2, Home, Waves, Construction, Star, Leaf, Zap, Recycle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ScrollReveal, CountUp } from '@/components/shared/Animations';
import { HeroVideo } from '@/components/shared/HeroVideo';
import { motion } from 'framer-motion';

export default function HomePage() {
  const t = useTranslations();
  const params = useParams();
  const locale = (params?.locale as string) || 'fr';

  const stats = [
    { value: 2015, suffix: '', label: t('numbers.stat1') },
    { value: 100, suffix: 'K+', label: t('numbers.stat2') },
    { value: 120, suffix: '+', label: t('numbers.stat3') },
    { value: 35, suffix: '', label: t('numbers.stat4') },
  ];

  const processSteps = [
    {
      icon: Factory,
      title: t('process.step1.title'),
      desc: t('process.step1.desc'),
    },
    {
      icon: Beaker,
      title: t('process.step2.title'),
      desc: t('process.step2.desc'),
    },
    {
      icon: Package,
      title: t('process.step3.title'),
      desc: t('process.step3.desc'),
    },
    {
      icon: Truck,
      title: t('process.step4.title'),
      desc: t('process.step4.desc'),
    },
  ];

  const solutions = [
    { key: 'concrete', icon: Building2, color: '#1B3A5C' },
    { key: 'residential', icon: Home, color: '#C1272D' },
    { key: 'maritime', icon: Waves, color: '#0E7490' },
    { key: 'civil', icon: Construction, color: '#7C3AED' },
    { key: 'distribution', icon: Truck, color: '#E8B84B' },
  ];

  const previewTestimonials = ['t1', 't2', 't5'];

  const previewArticles = ['article1', 'article2', 'article5'];

  const galleryImages = [
    { src: '/images/factory/factory-exterior.jpg', alt: 'Usine Dakhla Aménagement' },
    { src: '/images/factory/factory-aerial.jpg', alt: 'Usine DAM - Vue aérienne' },
    { src: '/images/factory/factory-silos.jpg', alt: 'Silo de ciment DAM' },
    { src: '/images/quality-lab.jpg', alt: 'Laboratoire qualité' },
    { src: '/images/delivery/delivery-fleet.jpg', alt: 'Livraison ciment' },
    { src: '/images/factory/control-room.jpg', alt: 'Salle de contrôle' },
    { src: '/images/construction-site.jpg', alt: 'Chantier construction' },
    { src: '/images/products/cpj45-bags.jpg', alt: 'Sacs de ciment CPJ 45' },
    { src: '/images/projects/residential-construction.jpg', alt: 'Projet immobilier' },
  ];

  const articleImages: Record<string, string> = {
    article1: '/images/products/cpj45-bags.jpg',
    article2: '/images/factory/factory-aerial.jpg',
    article5: '/images/projects/infrastructure-road.jpg',
  };

  return (
    <>
      {/* ====== HERO — Full-Screen Background Video ====== */}
      <HeroVideo
        src="/videos/hero.mp4"
        overlay="dark"
        height="h-[100dvh]"
        parallax={true}
      >
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 h-full flex flex-col items-center justify-center text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-[clamp(2.5rem,7vw,5rem)] font-extrabold text-white leading-[1.05] tracking-[-0.03em] mb-6 max-w-4xl"
          >
            {t('hero.title')}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-[clamp(1rem,2vw,1.35rem)] font-normal text-white/70 max-w-2xl leading-relaxed mb-10"
          >
            {t('hero.subtitle')}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col sm:flex-row items-center gap-4"
          >
            <Link href={`/${locale}/devis`}>
              <Button
                size="lg"
                className="bg-[#C1272D] text-white hover:bg-[#C1272D]/90 font-semibold px-8 h-12 text-[15px] rounded-full"
              >
                {t('hero.ctaPrimary')}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            <Link href={`/${locale}/produits`}>
              <Button
                size="lg"
                variant="outline"
                className="border-white/40 text-white hover:bg-white/10 font-medium px-8 h-12 text-[15px] rounded-full bg-transparent"
              >
                {t('hero.ctaSecondary')}
              </Button>
            </Link>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
        >
          <ChevronDown className="w-6 h-6 text-white/50 scroll-bounce" />
        </motion.div>
      </HeroVideo>

      {/* ====== PRODUCTS SECTION (white bg) ====== */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <ScrollReveal>
            <div className="text-center mb-14">
              <span className="inline-block px-4 py-1.5 bg-[#1B3A5C]/5 text-[#1B3A5C] text-xs font-semibold rounded-full tracking-wide uppercase mb-4">{t('products.title')}</span>
              <h2 className="text-[clamp(1.75rem,4vw,3rem)] font-bold text-[#1B3A5C] tracking-[-0.02em] leading-[1.15] heading-accent heading-accent-center">
                {t('products.title')}
              </h2>
              <p className="mt-6 text-[#6B7280] text-[clamp(1rem,1.5vw,1.2rem)] max-w-2xl mx-auto">
                {t('products.subtitle')}
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* CPJ 45 */}
            <ScrollReveal delay={0.1}>
              <div className="card-lift bg-white border border-[#E5E7EB] rounded-2xl overflow-hidden group">
                <div className="relative h-56 md:h-64 overflow-hidden">
                  <Image
                    src="/images/products/cpj45-bags.jpg"
                    alt={t('products.cpj45.full')}
                    fill
                    quality={90}
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                  <div className="absolute top-4 right-4 bg-[#E8B84B] text-[#1A1A2E] text-xs font-bold px-3 py-1 rounded-full shadow-lg">
                    {t('products.cpj45.badge')}
                  </div>
                </div>
                <div className="p-6 md:p-8">
                  <h3 className="text-2xl font-bold text-[#1B3A5C]">{t('products.cpj45.name')}</h3>
                  <p className="text-sm text-[#6B7280] mt-1">{t('products.cpj45.full')}</p>
                  <p className="mt-4 text-[#1A1A2E]/70 leading-relaxed">{t('products.cpj45.desc')}</p>
                  <div className="mt-6 grid grid-cols-2 gap-3">
                    <div className="bg-[#F7F8FA] rounded-lg p-3">
                      <span className="text-xs text-[#6B7280]">{t('products.specLabels.resistance')}</span>
                      <p className="text-sm font-semibold text-[#1B3A5C]">{t('products.cpj45.specs.resistance')}</p>
                    </div>
                    <div className="bg-[#F7F8FA] rounded-lg p-3">
                      <span className="text-xs text-[#6B7280]">{t('products.specLabels.fineness')}</span>
                      <p className="text-sm font-semibold text-[#1B3A5C]">{t('products.cpj45.specs.fineness')}</p>
                    </div>
                    <div className="bg-[#F7F8FA] rounded-lg p-3">
                      <span className="text-xs text-[#6B7280]">{t('products.specLabels.setting')}</span>
                      <p className="text-sm font-semibold text-[#1B3A5C]">{t('products.cpj45.specs.setting')}</p>
                    </div>
                    <div className="bg-[#F7F8FA] rounded-lg p-3">
                      <span className="text-xs text-[#6B7280]">{t('products.specLabels.use')}</span>
                      <p className="text-sm font-semibold text-[#1B3A5C]">{t('products.cpj45.specs.use')}</p>
                    </div>
                  </div>
                  <div className="mt-5 flex items-center gap-2 bg-[#E8B84B]/15 border border-[#E8B84B]/30 rounded-xl px-4 py-3">
                    <span className="text-2xl font-bold text-[#1B3A5C]">1 500</span>
                    <span className="text-sm font-semibold text-[#1B3A5C]/70">DH/T</span>
                  </div>
                  <div className="mt-6 flex items-center gap-4">
                    <Link href={`/${locale}/produits`}>
                      <span className="inline-flex items-center gap-1 text-sm font-medium text-[#1B3A5C] hover:gap-2 transition-all">
                        {t('products.learnMore')} <ArrowRight className="w-3.5 h-3.5" />
                      </span>
                    </Link>
                    <Link href={`/${locale}/devis`}>
                      <span className="inline-flex items-center gap-1 text-sm font-medium text-[#C1272D] hover:gap-2 transition-all">
                        {t('products.requestQuote')} <ArrowRight className="w-3.5 h-3.5" />
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            {/* CPJ 55 */}
            <ScrollReveal delay={0.2}>
              <div className="card-lift bg-white border border-[#E5E7EB] rounded-2xl overflow-hidden group">
                <div className="relative h-56 md:h-64 overflow-hidden">
                  <Image
                    src="/images/products/cpj55-bags.jpg"
                    alt={t('products.cpj55.full')}
                    fill
                    quality={90}
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                  <div className="absolute top-4 right-4 bg-[#1B3A5C] text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg">
                    {t('products.cpj55.badge')}
                  </div>
                </div>
                <div className="p-6 md:p-8">
                  <h3 className="text-2xl font-bold text-[#1B3A5C]">{t('products.cpj55.name')}</h3>
                  <p className="text-sm text-[#6B7280] mt-1">{t('products.cpj55.full')}</p>
                  <p className="mt-4 text-[#1A1A2E]/70 leading-relaxed">{t('products.cpj55.desc')}</p>
                  <div className="mt-6 grid grid-cols-2 gap-3">
                    <div className="bg-[#F7F8FA] rounded-lg p-3">
                      <span className="text-xs text-[#6B7280]">{t('products.specLabels.resistance')}</span>
                      <p className="text-sm font-semibold text-[#1B3A5C]">{t('products.cpj55.specs.resistance')}</p>
                    </div>
                    <div className="bg-[#F7F8FA] rounded-lg p-3">
                      <span className="text-xs text-[#6B7280]">{t('products.specLabels.fineness')}</span>
                      <p className="text-sm font-semibold text-[#1B3A5C]">{t('products.cpj55.specs.fineness')}</p>
                    </div>
                    <div className="bg-[#F7F8FA] rounded-lg p-3">
                      <span className="text-xs text-[#6B7280]">{t('products.specLabels.setting')}</span>
                      <p className="text-sm font-semibold text-[#1B3A5C]">{t('products.cpj55.specs.setting')}</p>
                    </div>
                    <div className="bg-[#F7F8FA] rounded-lg p-3">
                      <span className="text-xs text-[#6B7280]">{t('products.specLabels.use')}</span>
                      <p className="text-sm font-semibold text-[#1B3A5C]">{t('products.cpj55.specs.use')}</p>
                    </div>
                  </div>
                  <div className="mt-5 flex items-center gap-2 bg-[#E8B84B]/15 border border-[#E8B84B]/30 rounded-xl px-4 py-3">
                    <span className="text-2xl font-bold text-[#1B3A5C]">1 600</span>
                    <span className="text-sm font-semibold text-[#1B3A5C]/70">DH/T</span>
                  </div>
                  <div className="mt-6 flex items-center gap-4">
                    <Link href={`/${locale}/produits`}>
                      <span className="inline-flex items-center gap-1 text-sm font-medium text-[#1B3A5C] hover:gap-2 transition-all">
                        {t('products.learnMore')} <ArrowRight className="w-3.5 h-3.5" />
                      </span>
                    </Link>
                    <Link href={`/${locale}/devis`}>
                      <span className="inline-flex items-center gap-1 text-sm font-medium text-[#C1272D] hover:gap-2 transition-all">
                        {t('products.requestQuote')} <ArrowRight className="w-3.5 h-3.5" />
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ====== PROCESS SECTION (light gray bg) ====== */}
      <section className="py-20 md:py-28 bg-[#F7F8FA]">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <ScrollReveal>
            <div className="text-center mb-14">
              <span className="inline-block px-4 py-1.5 bg-[#E8B84B]/10 text-[#1B3A5C] text-xs font-semibold rounded-full tracking-wide uppercase mb-4">{t('process.title')}</span>
              <h2 className="text-[clamp(1.75rem,4vw,3rem)] font-bold text-[#1B3A5C] tracking-[-0.02em] leading-[1.15] heading-accent heading-accent-center">
                {t('process.title')}
              </h2>
              <p className="mt-6 text-[#6B7280] text-[clamp(1rem,1.5vw,1.2rem)] max-w-2xl mx-auto">
                {t('process.subtitle')}
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {processSteps.map((step, i) => (
              <ScrollReveal key={i} delay={i * 0.1}>
                <div className="card-lift bg-white rounded-2xl p-6 md:p-8 text-center relative overflow-hidden">
                  <div className="absolute top-4 right-4 text-5xl font-bold text-[#1B3A5C]/[0.03]">
                    {String(i + 1).padStart(2, '0')}
                  </div>
                  {/* Step number badge */}
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#1B3A5C] to-[#1B3A5C]/80 text-white text-xs font-bold flex items-center justify-center mx-auto mb-4 shadow-md">
                    {i + 1}
                  </div>
                  <div className="w-14 h-14 rounded-xl bg-[#1B3A5C]/10 flex items-center justify-center mx-auto mb-5">
                    <step.icon className="w-6 h-6 text-[#1B3A5C]" />
                  </div>
                  <h3 className="text-lg font-bold text-[#1B3A5C] mb-3">{step.title}</h3>
                  <p className="text-sm text-[#6B7280] leading-relaxed">{step.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>

          {/* Process images */}
          <div className="mt-12 grid grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { src: '/images/process/step1-clinker-reception.jpg', alt: processSteps[0].title },
              { src: '/images/process/step2-grinding.jpg', alt: processSteps[1].title },
              { src: '/images/process/step3-dosing-lab.jpg', alt: processSteps[2].title },
              { src: '/images/process/step4-packaging.jpg', alt: processSteps[3].title },
            ].map((img, i) => (
              <ScrollReveal key={i} delay={i * 0.05}>
                <div className="relative aspect-[4/3] rounded-xl overflow-hidden">
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    quality={90}
                    className="object-cover"
                  />
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ====== KEY NUMBERS SECTION (with factory background) ====== */}
      <section className="py-20 md:py-28 relative overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/factory/factory-silos.jpg"
            alt="Dakhla Aménagement factory silos"
            fill
            quality={90}
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-white/95 via-white/90 to-[#F7F8FA]/85" />
        </div>
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 relative z-10">
          <ScrollReveal>
            <div className="text-center mb-14">
              <h2 className="text-[clamp(1.75rem,4vw,3rem)] font-bold text-[#1B3A5C] tracking-[-0.02em] heading-accent heading-accent-center">
                {t('numbers.title')}
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, i) => (
              <ScrollReveal key={i} delay={i * 0.1}>
                <div className="bg-white/80 backdrop-blur-sm border border-[#E5E7EB]/50 rounded-2xl p-6 lg:p-8 text-center card-lift">
                  <div className="text-3xl sm:text-4xl font-bold text-[#1B3A5C]">
                    <CountUp end={stat.value} suffix={stat.suffix} />
                  </div>
                  <p className="mt-2 text-sm text-[#6B7280] font-medium">{stat.label}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ====== NEW SECTION A: NOS SOLUTIONS ====== */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <ScrollReveal>
            <div className="text-center mb-14">
              <h2 className="text-[clamp(1.75rem,4vw,3rem)] font-bold text-[#1B3A5C] tracking-[-0.02em] leading-[1.15]">
                {t('solutions.title')}
              </h2>
              <p className="mt-4 text-[#6B7280] text-[clamp(1rem,1.5vw,1.2rem)] max-w-2xl mx-auto">
                {t('solutions.subtitle')}
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {solutions.map((sol, i) => (
              <ScrollReveal key={sol.key} delay={i * 0.08}>
                <div className="card-lift bg-white border border-[#E5E7EB] rounded-2xl p-6 md:p-8 relative">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center mb-5"
                    style={{ backgroundColor: `${sol.color}15` }}
                  >
                    <sol.icon className="w-6 h-6" style={{ color: sol.color }} />
                  </div>
                  <h3 className="text-lg font-bold text-[#1B3A5C] mb-3">
                    {t(`solutions.${sol.key}.title`)}
                  </h3>
                  <p className="text-sm text-[#6B7280] leading-relaxed">
                    {t(`solutions.${sol.key}.desc`)}
                  </p>
                  <div className="mt-4 inline-flex items-center bg-[#E8B84B]/15 border border-[#E8B84B]/30 rounded-full px-3 py-1">
                    <span className="text-xs font-bold text-[#1B3A5C]">
                      {t(`solutions.${sol.key}.product`)}
                    </span>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ====== NEW SECTION B: TESTIMONIALS PREVIEW ====== */}
      <section className="py-20 md:py-28 bg-[#F7F8FA]">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <ScrollReveal>
            <div className="text-center mb-14">
              <h2 className="text-[clamp(1.75rem,4vw,3rem)] font-bold text-[#1B3A5C] tracking-[-0.02em] leading-[1.15]">
                {t('homeExtras.testimonialsTitle')}
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {previewTestimonials.map((key, i) => (
              <ScrollReveal key={key} delay={i * 0.1}>
                <div className="card-lift bg-white border border-[#E5E7EB] rounded-2xl p-6 md:p-8">
                  <div className="flex gap-1 mb-4">
                    {Array.from({ length: Number(t(`testimonials.items.${key}.stars`)) }).map((_, si) => (
                      <Star key={si} className="w-4 h-4 fill-[#E8B84B] text-[#E8B84B]" />
                    ))}
                  </div>
                  <p className="text-sm text-[#1A1A2E]/70 leading-relaxed italic mb-6 line-clamp-4">
                    &ldquo;{t(`testimonials.items.${key}.text`)}&rdquo;
                  </p>
                  <div className="border-t border-[#E5E7EB] pt-4">
                    <p className="text-sm font-semibold text-[#1B3A5C]">
                      {t(`testimonials.items.${key}.name`)}
                    </p>
                    <p className="text-xs text-[#6B7280]">
                      {t(`testimonials.items.${key}.role`)}{t(`testimonials.items.${key}.company`) ? ` — ${t(`testimonials.items.${key}.company`)}` : ''}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal delay={0.3}>
            <div className="mt-10 text-center">
              <Link href={`/${locale}/temoignages`}>
                <span className="inline-flex items-center gap-2 text-sm font-semibold text-[#1B3A5C] hover:gap-3 transition-all">
                  {t('common.viewAll')} <ArrowRight className="w-4 h-4" />
                </span>
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ====== NEW SECTION C: BLOG PREVIEW ====== */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <ScrollReveal>
            <div className="text-center mb-14">
              <h2 className="text-[clamp(1.75rem,4vw,3rem)] font-bold text-[#1B3A5C] tracking-[-0.02em] leading-[1.15]">
                {t('homeExtras.blogTitle')}
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {previewArticles.map((key, i) => {
              const slugMap: Record<string, string> = {
                article1: 'choisir-ciment-projet',
                article2: 'capacite-500k-tonnes',
                article5: 'projet-infrastructure-dakhla',
              };
              return (
                <ScrollReveal key={key} delay={i * 0.1}>
                  <Link href={`/${locale}/blog/${slugMap[key]}`}>
                    <div className="card-lift bg-white border border-[#E5E7EB] rounded-2xl overflow-hidden group">
                      <div className="relative h-48">
                        <Image
                          src={articleImages[key] || '/images/factory/factory-exterior.jpg'}
                          alt={t(`blog.articles.${key}.title`)}
                          fill
                          quality={90}
                          className="object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute top-3 left-3 bg-[#1B3A5C]/80 text-white text-xs font-medium px-3 py-1 rounded-full backdrop-blur-sm">
                          {t(`blog.articles.${key}.category`)}
                        </div>
                      </div>
                      <div className="p-5">
                        <p className="text-xs text-[#6B7280] mb-2">{t(`blog.articles.${key}.date`)}</p>
                        <h3 className="text-sm font-bold text-[#1B3A5C] mb-2 line-clamp-2 group-hover:text-[#C1272D] transition-colors">
                          {t(`blog.articles.${key}.title`)}
                        </h3>
                        <p className="text-xs text-[#6B7280] leading-relaxed line-clamp-2">
                          {t(`blog.articles.${key}.excerpt`)}
                        </p>
                      </div>
                    </div>
                  </Link>
                </ScrollReveal>
              );
            })}
          </div>

          <ScrollReveal delay={0.3}>
            <div className="mt-10 text-center">
              <Link href={`/${locale}/blog`}>
                <span className="inline-flex items-center gap-2 text-sm font-semibold text-[#1B3A5C] hover:gap-3 transition-all">
                  {t('homeExtras.blogViewAll')} <ArrowRight className="w-4 h-4" />
                </span>
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ====== NEW SECTION D: GALLERY PREVIEW ====== */}
      <section className="py-20 md:py-28 bg-[#F7F8FA]">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <ScrollReveal>
            <div className="text-center mb-14">
              <h2 className="text-[clamp(1.75rem,4vw,3rem)] font-bold text-[#1B3A5C] tracking-[-0.02em] leading-[1.15]">
                {t('homeExtras.galleryTitle')}
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
            {galleryImages.map((img, i) => (
              <ScrollReveal key={i} delay={i * 0.04}>
                <Link href={`/${locale}/galerie`}>
                  <div className="relative aspect-[3/4] md:aspect-[4/3] rounded-xl overflow-hidden group cursor-pointer">
                    <Image
                      src={img.src}
                      alt={img.alt}
                      fill
                      quality={90}
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-[#1B3A5C]/0 group-hover:bg-[#1B3A5C]/20 transition-colors duration-300" />
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal delay={0.3}>
            <div className="mt-10 text-center">
              <Link href={`/${locale}/galerie`}>
                <span className="inline-flex items-center gap-2 text-sm font-semibold text-[#1B3A5C] hover:gap-3 transition-all">
                  {t('homeExtras.galleryViewAll')} <ArrowRight className="w-4 h-4" />
                </span>
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ====== NEW SECTION E: SUSTAINABILITY PREVIEW ====== */}
      <section className="py-20 md:py-28 relative overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/factory/factory-silos.jpg"
            alt="Factory silos"
            fill
            quality={90}
            className="object-cover"
          />
          <div className="absolute inset-0 bg-[#1B3A5C]/85" />
        </div>
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 relative z-10">
          <ScrollReveal>
            <div className="text-center mb-12">
              <h2 className="text-[clamp(1.75rem,4vw,3rem)] font-bold text-white tracking-[-0.02em] leading-[1.15]">
                {t('homeExtras.sustainabilityTitle')}
              </h2>
              <p className="mt-4 text-white/70 text-[clamp(1rem,1.5vw,1.15rem)] max-w-2xl mx-auto leading-relaxed">
                {t('homeExtras.sustainabilityDesc')}
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { icon: Leaf, label: locale === 'fr' ? 'Réduction CO₂' : 'CO₂ Reduction' },
              { icon: Zap, label: locale === 'fr' ? 'Efficacité Énergétique' : 'Energy Efficiency' },
              { icon: Recycle, label: locale === 'fr' ? 'Économie Circulaire' : 'Circular Economy' },
            ].map((item, i) => (
              <ScrollReveal key={i} delay={i * 0.1}>
                <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 text-center">
                  <div className="w-12 h-12 rounded-xl bg-white/15 flex items-center justify-center mx-auto mb-4">
                    <item.icon className="w-6 h-6 text-[#E8B84B]" />
                  </div>
                  <p className="text-sm font-semibold text-white">{item.label}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal delay={0.3}>
            <div className="mt-10 text-center">
              <Link href={`/${locale}/durabilite`}>
                <span className="inline-flex items-center gap-2 text-sm font-semibold text-[#E8B84B] hover:gap-3 transition-all">
                  {t('homeExtras.sustainabilityCta')} <ArrowRight className="w-4 h-4" />
                </span>
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ====== VIDEO BREAK ====== */}
      <HeroVideo
        src="/videos/process.mp4"
        poster="/images/grinding-process.jpg"
        overlay="gradient-left"
        height="h-[50vh] md:h-[60vh]"
        parallax={false}
      >
        <div className="h-full flex items-end pb-12 md:pb-16 max-w-[1400px] mx-auto px-6 md:px-12">
          <ScrollReveal>
            <div>
              <span className="text-sm text-white/50 font-medium">{t('videoBreak.label')}</span>
              <h2 className="mt-2 text-[clamp(1.5rem,3.5vw,2.5rem)] font-bold text-white tracking-[-0.02em] leading-tight max-w-xl">
                {t('videoBreak.title')}
              </h2>
            </div>
          </ScrollReveal>
        </div>
      </HeroVideo>

      {/* ====== CTA SECTION (navy bg with factory aerial) ====== */}
      <section className="bg-[#1B3A5C] py-20 md:py-28 relative overflow-hidden">
        {/* Background image */}
        <div className="absolute inset-0">
          <Image
            src="/images/factory/factory-aerial.jpg"
            alt="Aerial view of Dakhla Aménagement plant"
            fill
            quality={90}
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-[#1B3A5C]/90 via-[#1B3A5C]/85 to-[#0f2440]/90" />
        </div>
        {/* Decorative gold accent line */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-transparent via-[#E8B84B] to-transparent" />
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 text-center relative z-10">
          <ScrollReveal>
            <h2 className="text-[clamp(2rem,5vw,3.5rem)] font-bold text-white tracking-[-0.02em] leading-[1.1]">
              {t('cta.title')}
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <p className="mt-6 text-[clamp(1rem,1.5vw,1.25rem)] text-white/70 max-w-xl mx-auto leading-relaxed">
              {t('cta.subtitle')}
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href={`/${locale}/devis`}>
                <Button
                  size="lg"
                  className="glow-cta bg-[#C1272D] text-white hover:bg-[#C1272D]/90 font-semibold px-8 h-12 text-[15px] rounded-full shadow-lg shadow-[#C1272D]/25"
                >
                  {t('cta.primary')}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link href={`/${locale}/contact`}>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white/30 text-white hover:bg-white/10 hover:border-white/50 font-medium px-8 h-12 text-[15px] rounded-full bg-transparent transition-all duration-300"
                >
                  {t('cta.secondary')}
                </Button>
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
