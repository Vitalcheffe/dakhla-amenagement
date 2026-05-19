'use client';

import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { PageHero } from '@/components/shared/PageHero';
import { FadeIn, StaggerContainer, StaggerItem } from '@/components/shared/Animations';
import { Card, CardContent } from '@/components/ui/card';
import { Leaf, Users, Wind, Droplets, Recycle, GraduationCap, MapPin, Heart } from 'lucide-react';

export default function SustainabilityPage() {
  const t = useTranslations('sustainability');

  const envItems = ['emissions', 'energy', 'water', 'waste'] as const;
  const envIcons = [Wind, Leaf, Droplets, Recycle];
  const socialItems = ['jobs', 'training', 'local', 'community'] as const;
  const socialIcons = [Users, GraduationCap, MapPin, Heart];

  return (
    <>
      <PageHero title={t('title')} subtitle={t('subtitle')} image="/images/sustainability.png" />

      {/* Environment */}
      <section className="bg-white py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <FadeIn>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-navy/10 flex items-center justify-center">
                    <Leaf className="w-6 h-6 text-steel" />
                  </div>
                  <h2 className="text-3xl font-bold text-navy tracking-tight">
                    {t('environment.title')}
                  </h2>
                </div>
              </FadeIn>
              <FadeIn delay={0.1}>
                <p className="text-warm-gray leading-relaxed text-lg">{t('environment.text')}</p>
              </FadeIn>
              <FadeIn delay={0.2}>
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden mt-8">
                  <Image
                    src="/images/sustainability.png"
                    alt={t('environment.title')}
                    fill
                    className="object-cover"
                  />
                </div>
              </FadeIn>
            </div>
            <StaggerContainer className="space-y-4">
              {envItems.map((item, i) => (
                <StaggerItem key={item}>
                  <Card className="border-border">
                    <CardContent className="p-4 flex items-center gap-4">
                      <div className="w-10 h-10 rounded-lg bg-navy/10 flex items-center justify-center shrink-0">
                        {(() => {
                          const Icon = envIcons[i];
                          return <Icon className="w-5 h-5 text-steel" />;
                        })()}
                      </div>
                      <p className="text-sm font-medium text-navy">{t(`environment.items.${item}`)}</p>
                    </CardContent>
                  </Card>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </div>
      </section>

      {/* Social */}
      <section className="bg-light-gray py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <FadeIn>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-navy/10 flex items-center justify-center">
                  <Users className="w-6 h-6 text-steel" />
                </div>
                <h2 className="text-3xl font-bold text-navy tracking-tight">
                  {t('social.title')}
                </h2>
              </div>
              <p className="text-warm-gray leading-relaxed text-lg">{t('social.text')}</p>
            </FadeIn>
            <StaggerContainer className="space-y-4">
              {socialItems.map((item, i) => (
                <StaggerItem key={item}>
                  <Card className="border-border bg-white">
                    <CardContent className="p-4 flex items-center gap-4">
                      <div className="w-10 h-10 rounded-lg bg-navy/10 flex items-center justify-center shrink-0">
                        {(() => {
                          const Icon = socialIcons[i];
                          return <Icon className="w-5 h-5 text-steel" />;
                        })()}
                      </div>
                      <p className="text-sm font-medium text-navy">{t(`social.items.${item}`)}</p>
                    </CardContent>
                  </Card>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </div>
      </section>
    </>
  );
}
