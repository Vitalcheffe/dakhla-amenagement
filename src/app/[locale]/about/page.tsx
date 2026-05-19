'use client';

import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { PageHero } from '@/components/shared/PageHero';
import { FadeIn } from '@/components/shared/Animations';
import { Card, CardContent } from '@/components/ui/card';
import { Building2, FileText, MapPin, Users, Shield, Heart, Lightbulb } from 'lucide-react';

export default function AboutPage() {
  const t = useTranslations('about');

  const values = [
    { icon: Shield, key: 'quality' },
    { icon: Heart, key: 'integrity' },
    { icon: Lightbulb, key: 'innovation' },
    { icon: Users, key: 'community' },
  ] as const;

  return (
    <>
      <PageHero title={t('title')} subtitle={t('subtitle')} image="/images/factory-exterior.png" />

      {/* History */}
      <section className="bg-white py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            <FadeIn>
              <h2 className="text-3xl font-bold text-navy tracking-tight">{t('history.title')}</h2>
              <div className="mt-6 space-y-4 text-warm-gray leading-relaxed">
                <p>{t('history.p1')}</p>
                <p>{t('history.p2')}</p>
              </div>
            </FadeIn>
            <FadeIn delay={0.2}>
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
                <Image
                  src="/images/factory-exterior.png"
                  alt="Dakhla Aménagement Factory"
                  fill
                  className="object-cover"
                />
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="bg-light-gray py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold text-navy tracking-tight">{t('mission.title')}</h2>
              <p className="mt-6 text-lg text-warm-gray leading-relaxed">{t('mission.text')}</p>
              <div className="mt-8 grid grid-cols-2 gap-6 max-w-md mx-auto">
                <div>
                  <div className="font-mono text-3xl font-bold text-navy">2015</div>
                  <p className="mt-1 text-sm text-warm-gray">{t('mission.creation')}</p>
                </div>
                <div>
                  <div className="font-mono text-3xl font-bold text-navy">2018</div>
                  <p className="mt-1 text-sm text-warm-gray">{t('mission.startup')}</p>
                </div>
                <div>
                  <div className="font-mono text-3xl font-bold text-navy">100K</div>
                  <p className="mt-1 text-sm text-warm-gray">{t('mission.tonnage')}</p>
                </div>
                <div>
                  <div className="font-mono text-3xl font-bold text-navy">85+</div>
                  <p className="mt-1 text-sm text-warm-gray">{t('mission.team')}</p>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Values */}
      <section className="bg-white py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <h2 className="text-3xl font-bold text-navy tracking-tight text-center">{t('values.title')}</h2>
          </FadeIn>
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v, i) => (
              <FadeIn key={v.key} delay={i * 0.1}>
                <Card className="h-full border-border hover:shadow-lg transition-shadow">
                  <CardContent className="p-6 text-center">
                    <div className="w-14 h-14 rounded-xl bg-navy/10 flex items-center justify-center mx-auto mb-4">
                      <v.icon className="w-7 h-7 text-steel" />
                    </div>
                    <h3 className="text-lg font-semibold text-navy">{t(`values.${v.key}.name`)}</h3>
                    <p className="mt-2 text-sm text-warm-gray leading-relaxed">
                      {t(`values.${v.key}.desc`)}
                    </p>
                  </CardContent>
                </Card>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Legal Info */}
      <section className="bg-light-gray py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <h2 className="text-3xl font-bold text-navy tracking-tight">{t('legal.title')}</h2>
          </FadeIn>
          <FadeIn delay={0.15}>
            <div className="mt-8 bg-white rounded-2xl p-8 border border-border">
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="flex items-start gap-3">
                  <Building2 className="w-5 h-5 text-steel shrink-0 mt-0.5" />
                  <p className="text-sm font-medium text-navy">{t('legal.form')}</p>
                </div>
                <div className="flex items-start gap-3">
                  <FileText className="w-5 h-5 text-steel shrink-0 mt-0.5" />
                  <p className="text-sm font-medium text-navy">{t('legal.rc')}</p>
                </div>
                <div className="flex items-start gap-3">
                  <FileText className="w-5 h-5 text-steel shrink-0 mt-0.5" />
                  <p className="text-sm font-medium text-navy">{t('legal.ice')}</p>
                </div>
                <div className="flex items-start gap-3">
                  <FileText className="w-5 h-5 text-steel shrink-0 mt-0.5" />
                  <p className="text-sm font-medium text-navy">{t('legal.if')}</p>
                </div>
                <div className="flex items-start gap-3">
                  <FileText className="w-5 h-5 text-steel shrink-0 mt-0.5" />
                  <p className="text-sm font-medium text-navy">{t('legal.capital')}</p>
                </div>
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-steel shrink-0 mt-0.5" />
                  <p className="text-sm font-medium text-navy">{t('legal.hq')}</p>
                </div>
                <div className="flex items-start gap-3 sm:col-span-2">
                  <Users className="w-5 h-5 text-steel shrink-0 mt-0.5" />
                  <p className="text-sm font-medium text-navy">{t('legal.investors')}</p>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
