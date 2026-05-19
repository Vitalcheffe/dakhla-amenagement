'use client';

import { useTranslations } from 'next-intl';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import { PageHero } from '@/components/shared/PageHero';
import { FadeIn } from '@/components/shared/Animations';
import { Card, CardContent } from '@/components/ui/card';
import { Building2, Package, Heart, HelpCircle } from 'lucide-react';

export default function SitemapPage() {
  const t = useTranslations('sitemap');
  const params = useParams();
  const locale = (params?.locale as string) || 'fr';

  const sections = [
    {
      key: 'company',
      icon: Building2,
      hrefs: {
        home: `/${locale}`,
        about: `/${locale}/about`,
        investors: `/${locale}/investors`,
        news: `/${locale}/news`,
      },
    },
    {
      key: 'productsServices',
      icon: Package,
      hrefs: {
        products: `/${locale}/products`,
        process: `/${locale}/process`,
        quality: `/${locale}/quality`,
        facilities: `/${locale}/facilities`,
        certifications: `/${locale}/certifications`,
        quote: `/${locale}/quote`,
      },
    },
    {
      key: 'rseCareers',
      icon: Heart,
      hrefs: {
        rse: `/${locale}/rse`,
        sustainability: `/${locale}/sustainability`,
        careers: `/${locale}/careers`,
      },
    },
    {
      key: 'help',
      icon: HelpCircle,
      hrefs: {
        faq: `/${locale}/faq`,
        contact: `/${locale}/contact`,
        legal: `/${locale}/legal`,
      },
    },
  ] as const;

  return (
    <>
      <PageHero title={t('title')} subtitle={t('subtitle')} />

      <section className="bg-white py-16 lg:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {sections.map((section, i) => {
              const Icon = section.icon;
              return (
                <FadeIn key={section.key} delay={i * 0.1}>
                  <Card className="h-full border-border hover:shadow-lg transition-shadow">
                    <CardContent className="p-6">
                      <div className="flex items-center gap-3 mb-5">
                        <div className="w-10 h-10 rounded-lg bg-navy/10 flex items-center justify-center">
                          <Icon className="w-5 h-5 text-steel" />
                        </div>
                        <h3 className="text-lg font-bold text-navy">
                          {t(`${section.key}.title`)}
                        </h3>
                      </div>
                      <ul className="space-y-2.5">
                        {Object.entries(section.hrefs).map(([pageKey, href]) => (
                          <li key={pageKey}>
                            <Link
                              href={href}
                              className="text-sm text-warm-gray hover:text-navy transition-colors flex items-center gap-2"
                            >
                              <span className="w-1 h-1 rounded-full bg-steel shrink-0" />
                              {t(`${section.key}.pages.${pageKey}`)}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </FadeIn>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
