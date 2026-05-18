'use client';

import { useTranslations } from 'next-intl';
import { useParams } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Factory, Truck, Shield, Leaf } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { FadeIn, StaggerContainer, StaggerItem } from '@/components/shared/Animations';

export default function HomePage() {
  const t = useTranslations();
  const params = useParams();
  const locale = (params?.locale as string) || 'fr';

  const productKeys = ['cpj35', 'cpj45', 'cpa42_5', 'cpj55'] as const;

  const stats = [
    { value: t('stats.capacity'), unit: t('stats.capacityUnit'), label: t('stats.capacityLabel') },
    { value: t('stats.since'), unit: '', label: t('stats.sinceLabel') },
    { value: t('stats.capital'), unit: t('stats.capitalUnit'), label: t('stats.capitalLabel') },
    { value: t('stats.employees'), unit: '', label: t('stats.employeesLabel') },
  ];

  const features = [
    { icon: Factory, title: t('nav.process'), desc: t('process.step2.title'), href: `/${locale}/process` },
    { icon: Shield, title: t('nav.quality'), desc: t('quality.lab.title'), href: `/${locale}/quality` },
    { icon: Leaf, title: t('nav.sustainability'), desc: t('sustainability.environment.title'), href: `/${locale}/sustainability` },
    { icon: Truck, title: t('products.packaging'), desc: t('process.step4.title'), href: `/${locale}/products` },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-navy text-white overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/factory-exterior.png"
            alt="Dakhla Aménagement Factory"
            fill
            className="object-cover opacity-30"
            priority
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-br from-navy/90 via-navy/80 to-steel/70" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
          <FadeIn>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight max-w-3xl leading-tight">
              {t('hero.title')}
            </h1>
          </FadeIn>
          <FadeIn delay={0.15}>
            <p className="mt-6 text-lg lg:text-xl text-white/80 max-w-2xl leading-relaxed">
              {t('hero.subtitle')}
            </p>
          </FadeIn>
          <FadeIn delay={0.3}>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Button
                asChild
                size="lg"
                className="bg-steel hover:bg-steel/90 text-white font-medium px-8"
              >
                <Link href={`/${locale}/products`}>
                  {t('hero.cta')}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-white/30 text-white hover:bg-white/10 font-medium px-8"
              >
                <Link href={`/${locale}/process`}>
                  {t('hero.ctaSecondary')}
                </Link>
              </Button>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-white py-12 lg:py-16 border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <StaggerContainer className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {stats.map((stat, i) => (
              <StaggerItem key={i} className="text-center">
                <div className="font-mono text-3xl sm:text-4xl lg:text-5xl font-bold text-navy">
                  {stat.value}
                  {stat.unit && (
                    <span className="text-lg sm:text-xl font-medium text-warm-gray ml-1">
                      {stat.unit}
                    </span>
                  )}
                </div>
                <p className="mt-2 text-sm text-warm-gray font-medium">{stat.label}</p>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Products Overview */}
      <section className="bg-light-gray py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <h2 className="text-3xl lg:text-4xl font-bold text-navy tracking-tight">
              {t('homeProducts.title')}
            </h2>
            <p className="mt-3 text-lg text-warm-gray max-w-2xl">
              {t('homeProducts.subtitle')}
            </p>
          </FadeIn>
          <StaggerContainer className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {productKeys.map((key) => (
              <StaggerItem key={key}>
                <Card className="h-full border-border hover:shadow-lg transition-shadow duration-300 bg-white">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 rounded-lg bg-navy/10 flex items-center justify-center mb-4">
                      <span className="font-mono text-sm font-bold text-navy">
                        {t(`homeProducts.${key}.name`)}
                      </span>
                    </div>
                    <h3 className="text-lg font-semibold text-navy">
                      {t(`homeProducts.${key}.name`)}
                    </h3>
                    <p className="mt-2 text-sm text-warm-gray leading-relaxed">
                      {t(`homeProducts.${key}.desc`)}
                    </p>
                  </CardContent>
                </Card>
              </StaggerItem>
            ))}
          </StaggerContainer>
          <FadeIn delay={0.3}>
            <div className="mt-8 text-center">
              <Button asChild variant="outline" className="border-navy text-navy hover:bg-navy hover:text-white">
                <Link href={`/${locale}/products`}>
                  {t('hero.cta')}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-white py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, i) => (
              <StaggerItem key={i}>
                <Link href={feature.href} className="group block">
                  <div className="w-14 h-14 rounded-xl bg-light-gray group-hover:bg-navy/10 flex items-center justify-center mb-4 transition-colors">
                    <feature.icon className="w-7 h-7 text-steel" />
                  </div>
                  <h3 className="text-lg font-semibold text-navy group-hover:text-steel transition-colors">
                    {feature.title}
                  </h3>
                  <p className="mt-1 text-sm text-warm-gray">{feature.desc}</p>
                  <span className="mt-3 inline-flex items-center text-sm font-medium text-steel">
                    <ArrowRight className="ml-1 h-3 w-3" />
                  </span>
                </Link>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Dakhla Section */}
      <section className="bg-light-gray py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <FadeIn>
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
                <Image
                  src="/images/dakhla-aerial.png"
                  alt="Dakhla, Maroc"
                  fill
                  className="object-cover"
                />
              </div>
            </FadeIn>
            <FadeIn delay={0.2}>
              <h2 className="text-3xl lg:text-4xl font-bold text-navy tracking-tight">
                Dakhla, Maroc
              </h2>
              <p className="mt-4 text-warm-gray leading-relaxed text-lg">
                {locale === 'fr'
                  ? 'Stratégiquement positionnée au carrefour du Maroc et de la Mauritanie, Dakhla est une ville en pleine expansion. Notre centre de broyage à Lassargua alimente les projets de construction de toute la région de Dakhla-Oued Ed-Dahab et au-delà.'
                  : 'Strategically positioned at the crossroads of Morocco and Mauritania, Dakhla is a rapidly growing city. Our grinding center in Lassargua supplies construction projects throughout the Dakhla-Oued Ed-Dahab region and beyond.'}
              </p>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-navy py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeIn>
            <h2 className="text-3xl lg:text-4xl font-bold text-white tracking-tight">
              {t('cta.title')}
            </h2>
            <p className="mt-4 text-lg text-white/70 max-w-xl mx-auto">
              {t('cta.subtitle')}
            </p>
            <div className="mt-8">
              <Button
                asChild
                size="lg"
                className="bg-steel hover:bg-steel/90 text-white font-medium px-10"
              >
                <Link href={`/${locale}/contact`}>
                  {t('cta.button')}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
