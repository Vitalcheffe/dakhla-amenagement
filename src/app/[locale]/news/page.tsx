'use client';

import { useTranslations } from 'next-intl';
import { PageHero } from '@/components/shared/PageHero';
import { StaggerContainer, StaggerItem } from '@/components/shared/Animations';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Calendar, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function NewsPage() {
  const t = useTranslations('news');

  const articles = ['article1', 'article2', 'article3'] as const;

  return (
    <>
      <PageHero title={t('title')} subtitle={t('subtitle')} />

      <section className="bg-white py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <StaggerContainer className="space-y-8">
            {articles.map((article) => (
              <StaggerItem key={article}>
                <Card className="border-border hover:shadow-lg transition-shadow overflow-hidden">
                  <CardContent className="p-0">
                    <div className="flex flex-col lg:flex-row">
                      {/* Image placeholder */}
                      <div className="lg:w-80 bg-light-gray flex items-center justify-center p-12 shrink-0">
                        <div className="w-16 h-16 rounded-full bg-navy/10 flex items-center justify-center">
                          <Calendar className="w-8 h-8 text-navy/30" />
                        </div>
                      </div>

                      {/* Content */}
                      <div className="flex-1 p-6 lg:p-8">
                        <Badge variant="secondary" className="bg-steel/10 text-steel text-xs mb-3">
                          {t(`${article}.date`)}
                        </Badge>
                        <h3 className="text-xl font-bold text-navy leading-tight">
                          {t(`${article}.title`)}
                        </h3>
                        <p className="mt-3 text-warm-gray leading-relaxed">
                          {t(`${article}.excerpt`)}
                        </p>
                        <Button variant="ghost" className="mt-4 text-steel hover:text-navy p-0 h-auto">
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
    </>
  );
}
