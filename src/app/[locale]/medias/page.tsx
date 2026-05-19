'use client';

import { useTranslations } from 'next-intl';
import { PageHero } from '@/components/shared/PageHero';
import { ScrollReveal, StaggerContainer, StaggerItem } from '@/components/shared/Animations';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Calendar, ArrowRight, Newspaper, Megaphone } from 'lucide-react';

export default function MediasPage() {
  const t = useTranslations('medias');

  const articles = ['article1', 'article2', 'article3'] as const;
  const pressItems = ['press1', 'press2'] as const;

  return (
    <>
      <PageHero title={t('title')} subtitle={t('subtitle')} />

      {/* News Section */}
      <section className="bg-gris-clair py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="flex items-center gap-3 mb-10">
              <Newspaper className="w-6 h-6 text-bleu-ocean" />
              <h2 className="font-heading text-2xl font-bold text-anthracite">{t('newsTitle')}</h2>
            </div>
          </ScrollReveal>
          <StaggerContainer className="space-y-8">
            {articles.map((article) => (
              <StaggerItem key={article}>
                <Card className="border-anthracite/5 hover:shadow-lg transition-shadow overflow-hidden">
                  <CardContent className="p-0">
                    <div className="flex flex-col lg:flex-row">
                      {/* Image placeholder */}
                      <div className="lg:w-72 bg-anthracite/5 flex items-center justify-center p-12 shrink-0">
                        <div className="w-16 h-16 rounded-full bg-bleu-ocean/10 flex items-center justify-center">
                          <Calendar className="w-8 h-8 text-bleu-ocean/30" />
                        </div>
                      </div>

                      {/* Content */}
                      <div className="flex-1 p-6 lg:p-8">
                        <Badge variant="secondary" className="bg-bleu-ocean/10 text-bleu-ocean text-xs mb-3">
                          {t(`${article}.date`)}
                        </Badge>
                        <h3 className="font-heading text-xl font-bold text-anthracite leading-tight">
                          {t(`${article}.title`)}
                        </h3>
                        <p className="mt-3 text-acier leading-relaxed">
                          {t(`${article}.excerpt`)}
                        </p>
                        <Button variant="ghost" className="mt-4 text-bleu-ocean hover:text-anthracite p-0 h-auto">
                          {t('readMore')}
                          <ArrowRight className="ml-1 h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Press Releases Section */}
      <section className="bg-anthracite py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="flex items-center gap-3 mb-10">
              <Megaphone className="w-6 h-6 text-bleu-ocean" />
              <h2 className="font-heading text-2xl font-bold text-white">{t('pressTitle')}</h2>
            </div>
          </ScrollReveal>
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {pressItems.map((item) => (
              <StaggerItem key={item}>
                <Card className="bg-white/5 border-white/10 backdrop-blur-sm hover:border-bleu-ocean/30 transition-colors">
                  <CardContent className="p-6">
                    <Badge variant="secondary" className="bg-bleu-ocean/10 text-bleu-ocean text-xs mb-3">
                      {t(`${item}.date`)}
                    </Badge>
                    <h3 className="font-heading text-lg font-bold text-white leading-tight">
                      {t(`${item}.title`)}
                    </h3>
                    <p className="mt-3 text-sm text-white/50 leading-relaxed">
                      {t(`${item}.excerpt`)}
                    </p>
                    <Button variant="ghost" className="mt-4 text-bleu-ocean hover:text-white p-0 h-auto">
                      {t('readMore')}
                      <ArrowRight className="ml-1 h-4 w-4" />
                    </Button>
                  </CardContent>
                </Card>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>
    </>
  );
}
