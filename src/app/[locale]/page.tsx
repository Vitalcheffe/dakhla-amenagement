'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import { useParams } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, ChevronDown, Play } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { FadeIn, CountUp, ScrollReveal, VideoModal } from '@/components/shared/Animations';
import { ECOShieldCard } from '@/components/shared/ECOShieldCard';
import { StoryGrid } from '@/components/shared/StoryGrid';
import { motion } from 'framer-motion';

export default function HomePage() {
  const t = useTranslations();
  const params = useParams();
  const locale = (params?.locale as string) || 'fr';
  const [videoOpen, setVideoOpen] = useState(false);

  const stats = [
    { value: 100000, suffix: '', label: t('homeAnchor.stat1'), display: '100 000' },
    { value: 200, suffix: '+', label: t('homeAnchor.stat2'), display: '200+' },
    { value: 85, suffix: '+', label: t('homeAnchor.stat3'), display: '85+' },
    { value: 2018, suffix: '', label: t('homeAnchor.stat4'), display: '2018' },
  ];

  const stories = [
    { title: t('homeStories.story1Title'), desc: t('homeStories.story1Desc'), image: '/images/cement-bags.png', href: `/${locale}/solutions` },
    { title: t('homeStories.story2Title'), desc: t('homeStories.story2Desc'), image: '/images/quality-lab.png', href: `/${locale}/careers` },
    { title: t('homeStories.story3Title'), desc: t('homeStories.story3Desc'), image: '/images/sustainability.png', href: `/${locale}/sustainability` },
    { title: t('homeStories.story4Title'), desc: t('homeStories.story4Desc'), image: '/images/grinding-process.png', href: `/${locale}/sustainability` },
  ];

  return (
    <>
      {/* A. Hero Header — Video Background with Scroll Reveal */}
      <section className="relative bg-anthracite text-white min-h-screen flex items-center overflow-hidden">
        {/* Background with Ken Burns */}
        <div className="absolute inset-0">
          <Image
            src="/images/dakhla-aerial.png"
            alt="Dakhla Aerial View"
            fill
            className="object-cover ken-burns"
            priority
          />
        </div>
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-anthracite/80 via-anthracite/60 to-anthracite/90" />

        {/* Content */}
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 lg:py-40">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-heading text-4xl sm:text-5xl lg:text-7xl font-bold tracking-tight max-w-4xl leading-[1.1]"
          >
            {t('hero.title')}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mt-6 text-lg lg:text-2xl text-white/70 max-w-2xl leading-relaxed font-light"
          >
            {t('hero.subtitle')}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="mt-10 flex flex-col sm:flex-row gap-4"
          >
            <Link href={`/${locale}/solutions`}>
              <Button
                size="lg"
                className="bg-bleu-ocean hover:bg-bleu-ocean/90 text-white font-medium px-8 h-12 text-base"
              >
                {t('hero.cta')}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            <Button
              size="lg"
              variant="outline"
              className="border-white/30 text-white hover:bg-white/10 font-medium px-8 h-12 text-base"
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
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <ChevronDown className="w-6 h-6 text-white/40 scroll-bounce" />
        </motion.div>
      </section>

      {/* B. Section Ancrage Régional */}
      <section className="relative bg-gris-clair py-20 lg:py-32 overflow-hidden">
        {/* Parallax background */}
        <div className="absolute inset-0 hidden lg:block">
          <Image
            src="/images/factory-exterior.png"
            alt=""
            fill
            className="object-cover opacity-5"
            aria-hidden="true"
          />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left - Text */}
            <div>
              <ScrollReveal>
                <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-anthracite tracking-tight">
                  {t('homeAnchor.title')}
                </h2>
              </ScrollReveal>
              <ScrollReveal delay={0.15}>
                <p className="mt-6 text-lg text-acier leading-relaxed max-w-xl">
                  {t('homeAnchor.text')}
                </p>
              </ScrollReveal>
              <ScrollReveal delay={0.25}>
                <div className="mt-8 flex flex-col sm:flex-row gap-4">
                  <Link href={`/${locale}/solutions`}>
                    <Button
                      size="lg"
                      className="bg-bleu-ocean hover:bg-bleu-ocean/90 text-white font-medium px-8"
                    >
                      {t('homeAnchor.cta')}
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-anthracite/20 text-anthracite hover:bg-anthracite/5 font-medium px-8"
                    onClick={() => setVideoOpen(true)}
                  >
                    {t('homeAnchor.ctaSecondary')}
                  </Button>
                </div>
              </ScrollReveal>
            </div>

            {/* Right - Stats counter */}
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, i) => (
                <ScrollReveal key={i} delay={i * 0.1}>
                  <div className="bg-white rounded-2xl p-6 lg:p-8 shadow-sm border border-anthracite/5 text-center hover:shadow-md transition-shadow">
                    <div className="font-heading text-3xl sm:text-4xl font-bold text-anthracite">
                      {stat.value === 100000 || stat.value === 2018 ? (
                        <CountUp end={stat.value} suffix={stat.suffix} />
                      ) : (
                        <CountUp end={stat.value} suffix={stat.suffix} />
                      )}
                    </div>
                    <p className="mt-2 text-sm text-acier font-medium">{stat.label}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* C. Section RSE & Innovation — DAM ECOShield */}
      <section className="bg-anthracite py-20 lg:py-32 relative overflow-hidden">
        {/* Subtle background texture */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle at 20% 80%, #2ECC71 0%, transparent 50%), radial-gradient(circle at 80% 20%, #0F4C75 0%, transparent 50%)' }} />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <h2 className="font-heading text-4xl sm:text-5xl lg:text-7xl font-bold text-center heading-gradient">
              {t('homeEco.title')}
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.15}>
            <p className="mt-4 text-center text-lg lg:text-xl text-white/60 max-w-2xl mx-auto">
              {t('homeEco.tagline')}
            </p>
          </ScrollReveal>

          <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-8">
            <ECOShieldCard
              title={t('homeEco.card1Title')}
              value={t('homeEco.card1Value')}
              desc={t('homeEco.card1Desc')}
              variant="carbon"
            />
            <ECOShieldCard
              title={t('homeEco.card2Title')}
              value={t('homeEco.card2Value')}
              desc={t('homeEco.card2Desc')}
              variant="maritime"
            />
          </div>

          <ScrollReveal delay={0.3}>
            <div className="mt-12 text-center">
              <Link href={`/${locale}/sustainability`}>
                <Button
                  size="lg"
                  className="bg-vert-energie hover:bg-vert-energie/90 text-anthracite font-medium px-8"
                >
                  {locale === 'fr' ? 'En savoir plus' : 'Learn more'}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* D. Section Grille "Nos Histoires" */}
      <section className="bg-gris-clair py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-anthracite tracking-tight">
              {t('homeStories.title')}
            </h2>
          </ScrollReveal>
          <div className="mt-12">
            <StoryGrid stories={stories} />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-anthracite py-16 lg:py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle at 50% 50%, #0F4C75 0%, transparent 70%)' }} />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal>
            <h2 className="font-heading text-3xl lg:text-4xl font-bold text-white tracking-tight">
              {locale === 'fr' ? 'Un projet ? Parlons-en.' : 'Have a project? Let\'s talk.'}
            </h2>
            <p className="mt-4 text-lg text-white/60 max-w-xl mx-auto">
              {locale === 'fr'
                ? 'Contactez notre équipe commerciale pour obtenir un devis personnalisé ou des conseils techniques.'
                : 'Contact our sales team for a custom quote or technical advice.'}
            </p>
            <div className="mt-8">
              <Link href={`/${locale}/contact`}>
                <Button
                  size="lg"
                  className="bg-bleu-ocean hover:bg-bleu-ocean/90 text-white font-medium px-10"
                >
                  {locale === 'fr' ? 'Nous contacter' : 'Contact us'}
                  <ArrowRight className="ml-2 h-4 w-4" />
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
