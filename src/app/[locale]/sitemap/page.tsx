'use client';

import { useTranslations } from 'next-intl';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import { PageHero } from '@/components/shared/PageHero';
import { ScrollReveal } from '@/components/shared/Animations';
import { Card, CardContent } from '@/components/ui/card';
import { Building2, Package, Heart, HelpCircle } from 'lucide-react';

export default function SitemapPage() {
  const t = useTranslations('sitemap');
  const tNav = useTranslations('nav');
  const params = useParams();
  const locale = (params?.locale as string) || 'fr';

  const sections = [
    {
      key: 'main',
      icon: Building2,
      hrefs: {
        home: `/${locale}`,
        medias: `/${locale}/medias`,
        contact: `/${locale}/contact`,
        about: `/${locale}/about`,
        solutions: `/${locale}/solutions`,
        investors: `/${locale}/investors`,
        sustainability: `/${locale}/sustainability`,
        careers: `/${locale}/careers`,
      },
    },
    {
      key: 'legal',
      icon: HelpCircle,
      hrefs: {
        legal: `/${locale}/legal`,
        sitemap: `/${locale}/sitemap`,
      },
    },
  ] as const;

  return (
    <>
      <PageHero title={t('title')} subtitle={t('subtitle')} />

      <section className="bg-gris-clair py-16 lg:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {sections.map((section, i) => {
              const Icon = section.icon;
              return (
                <ScrollReveal key={section.key} delay={i * 0.1}>
                  <Card className="h-full border-anthracite/5 hover:shadow-lg transition-shadow">
                    <CardContent className="p-6">
                      <div className="flex items-center gap-3 mb-5">
                        <div className="w-10 h-10 rounded-lg bg-bleu-ocean/10 flex items-center justify-center">
                          <Icon className="w-5 h-5 text-bleu-ocean" />
                        </div>
                        <h3 className="font-heading text-lg font-bold text-anthracite">
                          {t(`${section.key}.title`)}
                        </h3>
                      </div>
                      <ul className="space-y-2.5">
                        {Object.entries(section.hrefs).map(([pageKey, href]) => (
                          <li key={pageKey}>
                            <Link
                              href={href}
                              className="text-sm text-acier hover:text-anthracite transition-colors flex items-center gap-2"
                            >
                              <span className="w-1 h-1 rounded-full bg-bleu-ocean shrink-0" />
                              {tNav(pageKey as 'home' | 'medias' | 'contact' | 'about' | 'solutions' | 'investors' | 'sustainability' | 'careers' | 'legal' | 'sitemap')}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
