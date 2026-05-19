'use client';

import { useTranslations } from 'next-intl';
import { useParams } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Award, Shield, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ScrollReveal } from '@/components/shared/Animations';
import { PageHero } from '@/components/shared/PageHero';

export default function AProposPage() {
  const t = useTranslations();
  const params = useParams();
  const locale = (params?.locale as string) || 'fr';

  const values = [
    { key: 'quality', icon: Award, color: '#E8B84B' },
    { key: 'reliability', icon: Shield, color: '#1B3A5C' },
    { key: 'commitment', icon: Users, color: '#C1272D' },
  ] as const;

  const timeline = [
    { year: t('about.history.timeline.t1Year'), text: t('about.history.timeline.t1Text') },
    { year: t('about.history.timeline.t2Year'), text: t('about.history.timeline.t2Text') },
    { year: t('about.history.timeline.t3Year'), text: t('about.history.timeline.t3Text') },
    { year: t('about.history.timeline.t4Year'), text: t('about.history.timeline.t4Text') },
  ];

  const certs = [
    { key: 'nm', statusColor: '#1B3A5C' },
    { key: 'en', statusColor: '#1B3A5C' },
    { key: 'iso', statusColor: '#E8B84B' },
  ] as const;

  return (
    <>
      <PageHero title={t('about.title')} subtitle={t('about.subtitle')} sectionCounter="/03" />

      {/* History Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <ScrollReveal>
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-[#1B3A5C] mb-6">{t('about.history.title')}</h2>
                <p className="text-[#1A1A2E]/70 leading-relaxed">{t('about.history.text')}</p>

                {/* Timeline */}
                <div className="mt-10 space-y-6">
                  {timeline.map((item, i) => (
                    <div key={i} className="flex gap-4">
                      <div className="flex flex-col items-center">
                        <div className="w-10 h-10 rounded-full bg-[#1B3A5C] flex items-center justify-center shrink-0">
                          <span className="text-xs font-bold text-white">{item.year}</span>
                        </div>
                        {i < timeline.length - 1 && <div className="w-[2px] h-8 bg-[#E5E7EB]" />}
                      </div>
                      <p className="text-[#6B7280] pt-2">{item.text}</p>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
                <Image
                  src="/images/factory-exterior.jpg"
                  alt={t('about.history.title')}
                  fill
                  className="object-cover"
                />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 md:py-24 bg-[#F7F8FA]">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <ScrollReveal>
            <h2 className="text-2xl md:text-3xl font-bold text-[#1B3A5C] mb-10 text-center">{t('about.values.title')}</h2>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((val, i) => (
              <ScrollReveal key={val.key} delay={i * 0.1}>
                <div className="card-lift bg-white rounded-2xl p-8 text-center">
                  <div className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6" style={{ backgroundColor: `${val.color}15` }}>
                    <val.icon className="w-7 h-7" style={{ color: val.color }} />
                  </div>
                  <h3 className="text-xl font-bold text-[#1B3A5C] mb-3">{t(`about.values.${val.key}.title`)}</h3>
                  <p className="text-[#6B7280] leading-relaxed">{t(`about.values.${val.key}.desc`)}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <ScrollReveal>
            <h2 className="text-2xl md:text-3xl font-bold text-[#1B3A5C] mb-10 text-center">{t('about.certifications.title')}</h2>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {certs.map((cert, i) => (
              <ScrollReveal key={cert.key} delay={i * 0.1}>
                <div className="card-lift bg-white border border-[#E5E7EB] rounded-2xl p-6 text-center">
                  <div className="w-16 h-16 rounded-full bg-[#1B3A5C]/5 flex items-center justify-center mx-auto mb-4">
                    <span className="font-bold text-sm text-[#1B3A5C]">{t(`about.certifications.${cert.key}.name`)}</span>
                  </div>
                  <p className="text-sm text-[#6B7280]">{t(`about.certifications.${cert.key}.desc`)}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-16 md:py-24 bg-[#F7F8FA]">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <ScrollReveal>
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-[#1B3A5C] mb-6">{t('about.team.title')}</h2>
                <p className="text-[#1A1A2E]/70 leading-relaxed">{t('about.team.text')}</p>
                <div className="mt-8 space-y-4">
                  <div className="flex items-center gap-3 bg-white rounded-xl p-4">
                    <div className="w-10 h-10 rounded-full bg-[#1B3A5C] flex items-center justify-center">
                      <Users className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <span className="text-sm font-semibold text-[#1B3A5C]">{t('about.team.board')}</span>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
                <Image
                  src="/images/sustainability.jpg"
                  alt={t('about.team.title')}
                  fill
                  className="object-cover"
                />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Company Info */}
      <section className="py-16 md:py-20 bg-[#1B3A5C]">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <ScrollReveal>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-white">
              <div>
                <p className="text-white/50 text-xs font-medium tracking-wider uppercase mb-2">{t('about.company.form')}</p>
                <p className="text-sm">{t('about.company.rc')}</p>
                <p className="text-sm mt-1">{t('about.company.ice')}</p>
                <p className="text-sm mt-1">{t('about.company.if')}</p>
              </div>
              <div>
                <p className="text-white/50 text-xs font-medium tracking-wider uppercase mb-2">{t('about.company.capital')}</p>
                <p className="text-sm">{t('about.company.investors')}</p>
              </div>
              <div>
                <p className="text-white/50 text-xs font-medium tracking-wider uppercase mb-2">{locale === 'fr' ? 'Siège social' : 'Headquarters'}</p>
                <p className="text-sm">{t('about.company.hq')}</p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-white">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 text-center">
          <ScrollReveal>
            <Link href={`/${locale}/devis`}>
              <Button className="bg-[#C1272D] text-white hover:bg-[#C1272D]/90 font-semibold rounded-full px-8 h-12 text-[15px]">
                {locale === 'fr' ? 'Demander un devis' : 'Request a quote'} <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
