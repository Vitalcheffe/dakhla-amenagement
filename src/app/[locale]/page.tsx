'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import { useParams } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, ArrowUpRight, ChevronDown, Play } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ScrollReveal, CountUp, VideoModal } from '@/components/shared/Animations';
import { HeroVideo } from '@/components/shared/HeroVideo';
import { motion } from 'framer-motion';

export default function HomePage() {
  const t = useTranslations();
  const params = useParams();
  const locale = (params?.locale as string) || 'fr';
  const [videoOpen, setVideoOpen] = useState(false);
  const [activePill, setActivePill] = useState(0);

  const pillTabs = [
    t('homePill.tabProducts'),
    t('homePill.tabProcess'),
    t('homePill.tabEco'),
    t('homePill.tabQuality'),
  ];

  const stats = [
    { value: 100000, suffix: '', label: t('homeAnchor.stat1'), display: '100K' },
    { value: 200, suffix: '+', label: t('homeAnchor.stat2'), display: '200+' },
    { value: 85, suffix: '+', label: t('homeAnchor.stat3'), display: '85+' },
    { value: 2018, suffix: '', label: t('homeAnchor.stat4'), display: '2018' },
  ];

  const contentBlocks = [
    {
      title: t('homeStories.story1Title'),
      desc: t('homeStories.story1Desc'),
      image: '/images/cement-bags.jpg',
      href: `/${locale}/solutions`,
    },
    {
      title: t('homeStories.story2Title'),
      desc: t('homeStories.story2Desc'),
      image: '/images/quality-lab.jpg',
      href: `/${locale}/careers`,
    },
    {
      title: t('homeStories.story3Title'),
      desc: t('homeStories.story3Desc'),
      image: '/images/sustainability.jpg',
      href: `/${locale}/sustainability`,
    },
    {
      title: t('homeStories.story4Title'),
      desc: t('homeStories.story4Desc'),
      image: '/images/construction-site.jpg',
      href: `/${locale}/solutions`,
    },
  ];

  const newsItems = [
    {
      date: t('medias.article1.date'),
      title: t('medias.article1.title'),
      excerpt: t('medias.article1.excerpt'),
    },
    {
      date: t('medias.article2.date'),
      title: t('medias.article2.title'),
      excerpt: t('medias.article2.excerpt'),
    },
    {
      date: t('medias.article3.date'),
      title: t('medias.article3.title'),
      excerpt: t('medias.article3.excerpt'),
    },
  ];

  return (
    <>
      {/* ====== HERO — Palantir-style Full-Screen Background Video ====== */}
      <HeroVideo
        src="/videos/hero.mp4"
        poster="/images/factory-exterior.jpg"
        overlay="dark"
        height="h-[100dvh]"
        parallax={true}
      >
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 h-full flex flex-col items-center justify-center text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-[clamp(2.5rem,7vw,6rem)] font-bold text-white leading-[1.05] tracking-[-0.03em] mb-6 max-w-4xl"
          >
            {t('hero.title')}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-[clamp(1rem,2vw,1.35rem)] font-normal text-white/60 max-w-2xl leading-relaxed mb-10"
          >
            {t('hero.subtitle')}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col sm:flex-row items-center gap-4"
          >
            <Link href={`/${locale}/solutions`}>
              <Button
                size="lg"
                className="bg-white text-[#0A0A0A] hover:bg-white/90 font-semibold px-8 h-12 text-[15px] rounded-full"
              >
                {t('hero.cta')}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            <Button
              size="lg"
              variant="outline"
              className="border-white/30 text-white hover:bg-white/10 font-medium px-8 h-12 text-[15px] rounded-full bg-transparent"
              onClick={() => setVideoOpen(true)}
            >
              <Play className="mr-2 h-4 w-4" />
              {t('hero.ctaSecondary')}
            </Button>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
        >
          <ChevronDown className="w-6 h-6 text-white/40 scroll-bounce" />
        </motion.div>
      </HeroVideo>

      {/* ====== SECTION 2: Pill Tab Categories ====== */}
      <section className="py-20 md:py-32 bg-white">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <ScrollReveal>
            <span className="section-counter">/0.1</span>
          </ScrollReveal>
          <ScrollReveal delay={0.05}>
            <h2 className="mt-4 text-[clamp(1.75rem,4vw,3rem)] font-bold tracking-[-0.02em] leading-[1.15] max-w-3xl">
              {t('homePill.title')}
            </h2>
          </ScrollReveal>

          {/* Pill buttons */}
          <ScrollReveal delay={0.1}>
            <div className="mt-10 flex flex-wrap gap-3">
              {pillTabs.map((tab, i) => (
                <button
                  key={i}
                  onClick={() => setActivePill(i)}
                  className={`pill-btn ${activePill === i ? 'pill-btn-active' : 'pill-btn-inactive'}`}
                >
                  {tab}
                </button>
              ))}
            </div>
          </ScrollReveal>

          {/* Tab content */}
          <motion.div
            key={activePill}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="mt-12"
          >
            {activePill === 0 && (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {['cpj35', 'cpj45', 'cpa42_5', 'cpj55', 'ecoShield'].map((key) => (
                  <div key={key} className="card-lift bg-[#F5F5F5] rounded-xl p-6 lg:p-8">
                    <div className="flex items-center justify-between mb-4">
                      <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${key === 'ecoShield' ? 'bg-[#2ECC71]/10' : 'bg-[#0A0A0A]/5'}`}>
                        <span className={`font-mono text-xs font-bold ${key === 'ecoShield' ? 'text-[#2ECC71]' : 'text-[#0A0A0A]'}`}>
                          {t(`solutions.products.${key}.name`)}
                        </span>
                      </div>
                    </div>
                    <h3 className="font-bold text-[#0A0A0A] text-lg">{t(`solutions.products.${key}.full`)}</h3>
                    <p className="mt-3 text-sm text-black/50 leading-relaxed">{t(`solutions.products.${key}.desc`)}</p>
                    <Link href={`/${locale}/solutions`} className="inline-flex items-center gap-1 mt-4 text-sm font-medium text-[#0A0A0A] hover:gap-2 transition-all">
                      {locale === 'fr' ? 'En savoir plus' : 'Learn more'} <ArrowUpRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                ))}
              </div>
            )}
            {activePill === 1 && (
              <div className="space-y-8">
                {['step1', 'step2', 'step3', 'step4'].map((step, i) => (
                  <div key={step} className="flex flex-col lg:flex-row gap-8 items-start">
                    <div className="flex-1">
                      <div className="flex items-center gap-4 mb-4">
                        <div className="w-10 h-10 rounded-full bg-[#0A0A0A] flex items-center justify-center shrink-0">
                          <span className="font-mono text-sm font-bold text-white">{String(i + 1).padStart(2, '0')}</span>
                        </div>
                        <h3 className="font-bold text-xl text-[#0A0A0A]">{t(`solutions.process.${step}.title`)}</h3>
                      </div>
                      <p className="text-black/50 leading-relaxed ml-14">{t(`solutions.process.${step}.desc`)}</p>
                    </div>
                    <div className="lg:w-72 shrink-0">
                      <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-[#F5F5F5]">
                        <Image
                          src={
                            i === 0 ? '/images/factory-exterior.jpg' :
                            i === 1 ? '/images/grinding-process.jpg' :
                            i === 2 ? '/images/quality-lab.jpg' :
                            '/images/cement-bags.jpg'
                          }
                          alt={t(`solutions.process.${step}.title`)}
                          fill
                          className="object-cover"
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
            {activePill === 2 && (
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="bg-[#0A0A0A] rounded-xl p-8 lg:p-10">
                  <div className="w-14 h-14 rounded-xl bg-[#2ECC71]/10 flex items-center justify-center mb-6">
                    <span className="font-mono text-2xl font-bold text-[#2ECC71]">CO2</span>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-3">{t('homeEco.card1Title')}</h3>
                  <div className="font-mono text-4xl lg:text-5xl font-bold text-[#2ECC71] mb-4">{t('homeEco.card1Value')}</div>
                  <p className="text-white/50 leading-relaxed text-sm">{t('homeEco.card1Desc')}</p>
                </div>
                <div className="bg-[#0A0A0A] rounded-xl p-8 lg:p-10">
                  <div className="w-14 h-14 rounded-xl bg-[#0F4C75]/20 flex items-center justify-center mb-6">
                    <span className="font-mono text-2xl font-bold text-[#0F4C75]">H2O</span>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-3">{t('homeEco.card2Title')}</h3>
                  <div className="font-mono text-4xl lg:text-5xl font-bold text-[#0F4C75] mb-4">{t('homeEco.card2Value')}</div>
                  <p className="text-white/50 leading-relaxed text-sm">{t('homeEco.card2Desc')}</p>
                </div>
              </div>
            )}
            {activePill === 3 && (
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                {['nm', 'en', 'iso'].map((key) => (
                  <div key={key} className="card-lift bg-[#F5F5F5] rounded-xl p-6 lg:p-8">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 rounded-full bg-[#0A0A0A] flex items-center justify-center">
                        <span className="font-mono text-xs font-bold text-white">{key === 'iso' ? 'ISO' : key.toUpperCase()}</span>
                      </div>
                      <span className={`text-xs font-medium px-2.5 py-1 rounded-full ${key === 'iso' ? 'bg-[#2ECC71]/10 text-[#2ECC71]' : 'bg-[#0A0A0A]/5 text-[#0A0A0A]'}`}>
                        {t(`solutions.quality.standards.${key}.status`)}
                      </span>
                    </div>
                    <h3 className="font-bold text-[#0A0A0A] text-lg">{t(`solutions.quality.standards.${key}.name`)}</h3>
                    <p className="mt-2 text-sm text-black/50">{t(`solutions.quality.standards.${key}.desc`)}</p>
                  </div>
                ))}
              </div>
            )}
          </motion.div>
        </div>
      </section>

      {/* ====== VIDEO BREAK — Process Fabrication (Harch Corp pattern) ====== */}
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
              <span className="font-mono text-sm text-white/40">{locale === 'fr' ? 'Notre Savoir-Faire' : 'Our Expertise'}</span>
              <h2 className="mt-2 text-[clamp(1.5rem,3.5vw,2.5rem)] font-bold text-white/90 tracking-[-0.02em] leading-tight max-w-xl">
                {locale === 'fr' ? 'De la matiere premiere au produit fini' : 'From raw material to finished product'}
              </h2>
            </div>
          </ScrollReveal>
        </div>
      </HeroVideo>

      {/* ====== SECTION 3: Stats / Impact Statement (Palantir style) ====== */}
      <section className="py-20 md:py-32 bg-[#F5F5F5]">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <ScrollReveal>
            <span className="section-counter">/0.2</span>
          </ScrollReveal>
          <ScrollReveal delay={0.05}>
            <p className="mt-6 text-[clamp(1.75rem,4vw,3rem)] font-semibold text-black/90 leading-[1.2] max-w-4xl">
              {t('homeAnchor.title')}
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <p className="mt-6 text-[clamp(1rem,1.5vw,1.25rem)] text-black/50 max-w-2xl leading-relaxed">
              {t('homeAnchor.text')}
            </p>
          </ScrollReveal>

          <div className="mt-16 grid grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, i) => (
              <ScrollReveal key={i} delay={i * 0.1}>
                <div className="bg-white rounded-xl p-6 lg:p-8 text-center card-lift">
                  <div className="font-mono text-3xl sm:text-4xl font-bold text-[#0A0A0A]">
                    {stat.value === 100000 ? (
                      <CountUp end={stat.value} suffix={stat.suffix} />
                    ) : stat.value === 2018 ? (
                      <CountUp end={stat.value} />
                    ) : (
                      <CountUp end={stat.value} suffix={stat.suffix} />
                    )}
                  </div>
                  <p className="mt-2 text-sm text-black/40 font-medium">{stat.label}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ====== SECTION 4: Content Grid (Palantir "Impact Study" style) ====== */}
      <section className="py-20 md:py-32 bg-white">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <ScrollReveal>
            <span className="section-counter">/0.3</span>
          </ScrollReveal>
          <ScrollReveal delay={0.05}>
            <h2 className="mt-4 text-[clamp(1.75rem,4vw,3rem)] font-bold tracking-[-0.02em] leading-[1.15]">
              {t('homeStories.title')}
            </h2>
          </ScrollReveal>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
            {contentBlocks.map((block, i) => (
              <ScrollReveal key={i} delay={i * 0.1}>
                <Link href={block.href} className="group block relative aspect-[16/10] rounded-xl overflow-hidden">
                  <Image
                    src={block.image}
                    alt={block.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A]/90 via-[#0A0A0A]/40 to-[#0A0A0A]/20 group-hover:from-[#0A0A0A]/95 group-hover:via-[#0A0A0A]/50 group-hover:to-[#0A0A0A]/30 transition-all duration-300" />
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="font-bold text-xl text-white group-hover:text-white/90 transition-colors">
                      {block.title}
                    </h3>
                    <p className="mt-1 text-sm text-white/60 group-hover:text-white/80 transition-colors">
                      {block.desc}
                    </p>
                    <span className="inline-flex items-center gap-1 mt-3 text-sm font-medium text-white/80 group-hover:text-white transition-colors">
                      {locale === 'fr' ? 'En savoir plus' : 'Learn more'} <ArrowUpRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ====== SECTION 5: News / Press ====== */}
      <section className="py-20 md:py-32 bg-[#F5F5F5]">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <div className="flex items-start justify-between">
            <div>
              <ScrollReveal>
                <span className="section-counter">/0.4</span>
              </ScrollReveal>
              <ScrollReveal delay={0.05}>
                <h2 className="mt-4 text-[clamp(1.75rem,4vw,3rem)] font-bold tracking-[-0.02em] leading-[1.15]">
                  {t('medias.newsTitle')}
                </h2>
              </ScrollReveal>
            </div>
            <Link href={`/${locale}/medias`} className="hidden md:inline-flex items-center gap-2 px-5 py-2.5 text-[13px] font-semibold rounded-full bg-[#0A0A0A] text-white hover:bg-[#0A0A0A]/90 shrink-0 mt-8">
              {locale === 'fr' ? 'Voir tout' : 'View all'}
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
            {newsItems.map((item, i) => (
              <ScrollReveal key={i} delay={i * 0.1}>
                <div className="card-lift bg-white rounded-xl p-6 h-full flex flex-col">
                  <span className="text-xs font-mono text-black/30 mb-3">{item.date}</span>
                  <h3 className="font-bold text-[#0A0A0A] text-lg leading-tight">{item.title}</h3>
                  <p className="mt-3 text-sm text-black/50 leading-relaxed flex-1">{item.excerpt}</p>
                  <Link href={`/${locale}/medias`} className="inline-flex items-center gap-1 mt-4 text-sm font-medium text-[#0A0A0A] hover:gap-2 transition-all">
                    {t('medias.readMore')} <ArrowUpRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <div className="mt-8 md:hidden text-center">
            <Link href={`/${locale}/medias`} className="inline-flex items-center gap-2 px-5 py-2.5 text-[13px] font-semibold rounded-full bg-[#0A0A0A] text-white">
              {locale === 'fr' ? 'Voir tout' : 'View all'}
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </section>

      {/* ====== CTA Section ====== */}
      <section className="bg-[#0A0A0A] py-20 md:py-28 relative overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 text-center">
          <ScrollReveal>
            <h2 className="text-[clamp(2rem,5vw,3.5rem)] font-bold text-white tracking-[-0.02em] leading-[1.1]">
              {t('homeCta.title')}
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <p className="mt-6 text-[clamp(1rem,1.5vw,1.25rem)] text-white/50 max-w-xl mx-auto leading-relaxed">
              {t('homeCta.subtitle')}
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <div className="mt-10">
              <Link href={`/${locale}/contact`}>
                <Button
                  size="lg"
                  className="bg-white text-[#0A0A0A] hover:bg-white/90 font-semibold px-10 h-12 text-[15px] rounded-full"
                >
                  {t('homeCta.cta')}
                  <ArrowUpRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Video Modal */}
      <VideoModal isOpen={videoOpen} onClose={() => setVideoOpen(false)} />
    </>
  );
}
