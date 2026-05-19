'use client';

import { useTranslations } from 'next-intl';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import { PageHero } from '@/components/shared/PageHero';
import { ScrollReveal } from '@/components/shared/Animations';
import { Building2, HelpCircle } from 'lucide-react';

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
      <PageHero title={t('title')} subtitle={t('subtitle')} sectionCounter="/9.0" />

      <section className="py-20 md:py-32 bg-white">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <div className="max-w-3xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
            {sections.map((section, i) => {
              const Icon = section.icon;
              return (
                <ScrollReveal key={section.key} delay={i * 0.1}>
                  <div className="bg-[#F5F5F5] rounded-xl p-6 h-full">
                    <div className="flex items-center gap-3 mb-5">
                      <div className="w-10 h-10 rounded-lg bg-[#0A0A0A]/5 flex items-center justify-center">
                        <Icon className="w-5 h-5 text-black/40" />
                      </div>
                      <h3 className="font-bold text-lg text-[#0A0A0A]">
                        {t(`${section.key}.title`)}
                      </h3>
                    </div>
                    <ul className="space-y-2.5">
                      {Object.entries(section.hrefs).map(([pageKey, href]) => (
                        <li key={pageKey}>
                          <Link
                            href={href}
                            className="text-sm text-black/50 hover:text-[#0A0A0A] transition-colors flex items-center gap-2"
                          >
                            <span className="w-1 h-1 rounded-full bg-black/20 shrink-0" />
                            {tNav(pageKey as 'home' | 'medias' | 'contact' | 'about' | 'solutions' | 'investors' | 'sustainability' | 'careers' | 'legal' | 'sitemap')}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
