'use client';

import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { PageHero } from '@/components/shared/PageHero';
import { ScrollReveal } from '@/components/shared/Animations';
import { motion } from 'framer-motion';
import { Building2, FileText, MapPin, Users, Factory, Cog, Warehouse, FlaskConical } from 'lucide-react';

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
      <PageHero title={t('title')} subtitle={t('subtitle')} sectionCounter="/1.0" />

      {/* Section 1: Genèse — Timeline */}
      <section className="py-20 md:py-32 bg-white">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <ScrollReveal>
            <span className="section-counter">/1.1</span>
          </ScrollReveal>
          <ScrollReveal delay={0.05}>
            <h2 className="mt-4 text-[clamp(1.75rem,4vw,3rem)] font-bold tracking-[-0.02em] leading-[1.15]">
              {t('genesis.title')}
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <p className="mt-4 text-[clamp(1rem,1.5vw,1.25rem)] text-black/50 max-w-2xl leading-relaxed">
              {t('genesis.text')}
            </p>
          </ScrollReveal>

          {/* Timeline */}
          <div className="mt-16 relative">
            <div className="absolute left-4 lg:left-1/2 top-0 bottom-0 w-px bg-black/10" />
            <div className="space-y-12">
              {timelineItems.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className={`relative flex items-start gap-6 lg:gap-0 ${i % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}
                >
                  <div className="absolute left-4 lg:left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-[#0A0A0A] border-2 border-white z-10 mt-1.5" />
                  <div className={`ml-10 lg:ml-0 lg:w-1/2 ${i % 2 === 0 ? 'lg:pr-12 lg:text-right' : 'lg:pl-12'}`}>
                    <div className={`inline-block bg-[#F5F5F5] rounded-xl px-6 py-5 ${i % 2 === 0 ? 'lg:mr-8' : 'lg:ml-8'}`}>
                      <span className="font-mono text-2xl font-bold text-[#0A0A0A]">{item.year}</span>
                      <p className="mt-2 text-sm text-black/50 leading-relaxed">{item.text}</p>
                    </div>
                  </div>
                  <div className="hidden lg:block lg:w-1/2" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Company Description */}
      <section className="py-20 md:py-32 bg-[#F5F5F5]">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            <div>
              <ScrollReveal>
                <span className="section-counter">/1.2</span>
              </ScrollReveal>
              <ScrollReveal delay={0.05}>
                <h2 className="mt-4 text-[clamp(1.75rem,4vw,3rem)] font-bold tracking-[-0.02em] leading-[1.15]">
                  {t('company.title')}
                </h2>
              </ScrollReveal>
              <ScrollReveal delay={0.1}>
                <p className="mt-6 text-black/50 leading-relaxed text-lg">
                  {t('company.text')}
                </p>
              </ScrollReveal>
            </div>
            <ScrollReveal delay={0.2}>
              <div className="bg-white rounded-xl p-6 lg:p-8">
                <h3 className="font-bold text-lg text-[#0A0A0A] mb-6">{t('company.title')}</h3>
                <div className="space-y-4">
                  {legalItems.map((item, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <item.icon className="w-4 h-4 text-black/30 shrink-0 mt-1" />
                      <p className="text-sm font-medium text-black/60">{item.text}</p>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Section 3: Gouvernance */}
      <section className="py-20 md:py-32 bg-white">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <ScrollReveal>
              <span className="section-counter">/1.3</span>
              <h2 className="mt-4 text-[clamp(1.75rem,4vw,3rem)] font-bold tracking-[-0.02em] leading-[1.15]">
                {t('governance.title')}
              </h2>
              <p className="mt-6 text-black/50 leading-relaxed text-lg">
                {t('governance.text')}
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <div className="bg-[#F5F5F5] rounded-xl p-6 space-y-4">
                {governanceRoles.map((role) => (
                  <div key={role} className="flex items-center gap-3 p-3 rounded-lg bg-white">
                    <div className="w-10 h-10 rounded-lg bg-[#0A0A0A]/5 flex items-center justify-center shrink-0">
                      <Users className="w-5 h-5 text-black/40" />
                    </div>
                    <p className="text-sm font-medium text-[#0A0A0A]">{t(`governance.${role}`)}</p>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Section 4: Installations */}
      <section className="py-20 md:py-32 bg-[#0A0A0A] text-white">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <ScrollReveal>
            <span className="section-counter text-white/20">/1.4</span>
          </ScrollReveal>
          <ScrollReveal delay={0.05}>
            <h2 className="mt-4 text-[clamp(1.75rem,4vw,3rem)] font-bold tracking-[-0.02em] leading-[1.15]">
              {t('facilities.title')}
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <p className="mt-4 text-[clamp(1rem,1.5vw,1.25rem)] text-white/50 max-w-2xl leading-relaxed">
              {t('facilities.text')}
            </p>
          </ScrollReveal>

          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {facilityItems.map((item, i) => (
              <ScrollReveal key={i} delay={i * 0.1}>
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:border-white/20 transition-colors">
                  <item.icon className="w-8 h-8 text-white/40 mb-4" />
                  <p className="text-sm font-medium text-white/70">{item.text}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {equipmentItems.map((item, i) => (
              <ScrollReveal key={i} delay={i * 0.1}>
                <div className="flex items-start gap-4 p-4 rounded-lg bg-white/5 border border-white/10 hover:border-white/20 transition-colors">
                  <item.icon className="w-6 h-6 text-[#2ECC71] shrink-0 mt-0.5" />
                  <p className="text-sm text-white/60">{item.text}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal delay={0.3}>
            <div className="mt-12 relative aspect-[21/9] rounded-2xl overflow-hidden">
              <Image
                src="/images/factory-exterior.jpg"
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
