'use client';

import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { PageHero } from '@/components/shared/PageHero';
import { ScrollReveal, FadeIn } from '@/components/shared/Animations';
import { Timeline } from '@/components/shared/Timeline';
import { Card, CardContent } from '@/components/ui/card';
import { Building2, FileText, MapPin, Users, Shield, Heart, Lightbulb, Factory, Cog, Warehouse, FlaskConical } from 'lucide-react';

export default function AboutPage() {
  const t = useTranslations('about');

  const timelineItems = [
    { year: t('genesis.timeline.t1Year'), text: t('genesis.timeline.t1Text') },
    { year: t('genesis.timeline.t2Year'), text: t('genesis.timeline.t2Text') },
    { year: t('genesis.timeline.t3Year'), text: t('genesis.timeline.t3Text') },
    { year: t('genesis.timeline.t4Year'), text: t('genesis.timeline.t4Text') },
  ];

  const legalItems = [
    { icon: Building2, text: t('company.form') },
    { icon: FileText, text: t('company.rc') },
    { icon: FileText, text: t('company.ice') },
    { icon: FileText, text: t('company.if') },
    { icon: FileText, text: t('company.capital') },
    { icon: MapPin, text: t('company.hq') },
    { icon: Users, text: t('company.investors') },
  ];

  const governanceRoles = ['board', 'ceo', 'cfo', 'coo'] as const;

  const facilityItems = [
    { icon: Factory, text: t('facilities.capacity') },
    { icon: MapPin, text: t('facilities.location') },
    { icon: Building2, text: t('facilities.investment') },
    { icon: MapPin, text: t('facilities.area') },
  ];

  const equipmentItems = [
    { icon: Cog, text: t('facilities.mills') },
    { icon: Warehouse, text: t('facilities.silos') },
    { icon: Factory, text: t('facilities.packaging') },
    { icon: FlaskConical, text: t('facilities.lab') },
  ];

  return (
    <>
      <PageHero title={t('title')} subtitle={t('subtitle')} image="/images/factory-exterior.png" />

      {/* Section 1: Genèse — History Timeline */}
      <section className="bg-anthracite py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-white tracking-tight">
              {t('genesis.title')}
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <p className="mt-4 text-lg text-white/60 max-w-2xl leading-relaxed">
              {t('genesis.text')}
            </p>
          </ScrollReveal>
          <div className="mt-16">
            <Timeline items={timelineItems} />
          </div>
        </div>
      </section>

      {/* Section 2: Dakhla Aménagement — Company Description */}
      <section className="bg-gris-clair py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            <div>
              <ScrollReveal>
                <h2 className="font-heading text-3xl sm:text-4xl font-bold text-anthracite tracking-tight">
                  {t('company.title')}
                </h2>
              </ScrollReveal>
              <ScrollReveal delay={0.1}>
                <p className="mt-6 text-acier leading-relaxed text-lg">
                  {t('company.text')}
                </p>
              </ScrollReveal>
            </div>
            <ScrollReveal delay={0.2}>
              <Card className="bg-white border-anthracite/5 shadow-sm">
                <CardContent className="p-6 lg:p-8">
                  <h3 className="font-heading text-lg font-bold text-anthracite mb-6">{t('company.title')}</h3>
                  <div className="space-y-4">
                    {legalItems.map((item, i) => (
                      <div key={i} className="flex items-start gap-3">
                        <item.icon className="w-4 h-4 text-bleu-ocean shrink-0 mt-1" />
                        <p className="text-sm font-medium text-anthracite/80">{item.text}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Section 3: Gouvernance */}
      <section className="bg-white py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <ScrollReveal>
              <h2 className="font-heading text-3xl font-bold text-anthracite tracking-tight">
                {t('governance.title')}
              </h2>
              <p className="mt-6 text-acier leading-relaxed text-lg">
                {t('governance.text')}
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <Card className="bg-gris-clair border-anthracite/5">
                <CardContent className="p-6 space-y-4">
                  {governanceRoles.map((role) => (
                    <div key={role} className="flex items-center gap-3 p-3 rounded-lg bg-white">
                      <div className="w-10 h-10 rounded-lg bg-bleu-ocean/10 flex items-center justify-center shrink-0">
                        <Users className="w-5 h-5 text-bleu-ocean" />
                      </div>
                      <p className="text-sm font-medium text-anthracite">{t(`governance.${role}`)}</p>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Section 4: Installations */}
      <section className="bg-anthracite py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-white tracking-tight">
              {t('facilities.title')}
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <p className="mt-4 text-lg text-white/60 max-w-2xl leading-relaxed">
              {t('facilities.text')}
            </p>
          </ScrollReveal>

          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {facilityItems.map((item, i) => (
              <ScrollReveal key={i} delay={i * 0.1}>
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:border-bleu-ocean/40 transition-colors">
                  <item.icon className="w-8 h-8 text-bleu-ocean mb-4" />
                  <p className="text-sm font-medium text-white/80">{item.text}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {equipmentItems.map((item, i) => (
              <ScrollReveal key={i} delay={i * 0.1}>
                <div className="flex items-start gap-4 p-4 rounded-lg bg-white/5 border border-white/10 hover:border-vert-energie/30 transition-colors">
                  <item.icon className="w-6 h-6 text-vert-energie shrink-0 mt-0.5" />
                  <p className="text-sm text-white/70">{item.text}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal delay={0.3}>
            <div className="mt-12 relative aspect-[21/9] rounded-2xl overflow-hidden">
              <Image
                src="/images/factory-exterior.png"
                alt={t('facilities.title')}
                fill
                className="object-cover"
              />
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
