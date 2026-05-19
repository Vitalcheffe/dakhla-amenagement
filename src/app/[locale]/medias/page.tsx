'use client';

import { useTranslations } from 'next-intl';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import { PageHero } from '@/components/shared/PageHero';
import { ScrollReveal, StaggerContainer, StaggerItem } from '@/components/shared/Animations';
import { ArrowUpRight, Newspaper, Megaphone } from 'lucide-react';

export default function MediasPage() {
  const t = useTranslations('medias');
  const params = useParams();
  const locale = (params?.locale as string) || 'fr';

  const articles = ['article1', 'article2', 'article3'] as const;
  const pressItems = ['press1', 'press2'] as const;

  return (
    <>
      <PageHero title={t('title')} subtitle={t('subtitle')} sectionCounter="/4.0" />

      {/* News Section */}
      <section className="py-20 md:py-32 bg-white">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <ScrollReveal>
            <span className="section-counter">/4.1</span>
          </ScrollReveal>
          <ScrollReveal delay={0.05}>
            <div className="flex items-center gap-3 mt-4 mb-10">
              <Newspaper className="w-5 h-5 text-black/30" />
              <h2 className="text-[clamp(1.5rem,3vw,2.25rem)] font-bold tracking-[-0.02em]">{t('newsTitle')}</h2>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {articles.map((article, i) => (
              <ScrollReveal key={article} delay={i * 0.1}>
                <div className="card-lift bg-[#F5F5F5] rounded-xl p-6 h-full flex flex-col">
                  <span className="text-xs font-mono text-black/30 mb-3">{t(`${article}.date`)}</span>
                  <h3 className="font-bold text-[#0A0A0A] text-lg leading-tight">{t(`${article}.title`)}</h3>
                  <p className="mt-3 text-sm text-black/50 leading-relaxed flex-1">{t(`${article}.excerpt`)}</p>
                  <Link href={`/${locale}/medias`} className="inline-flex items-center gap-1 mt-4 text-sm font-medium text-[#0A0A0A] hover:gap-2 transition-all">
                    {t('readMore')} <ArrowUpRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Press Releases Section */}
      <section className="py-20 md:py-32 bg-[#0A0A0A] text-white">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <ScrollReveal>
            <span className="section-counter text-white/20">/4.2</span>
          </ScrollReveal>
          <ScrollReveal delay={0.05}>
            <div className="flex items-center gap-3 mt-4 mb-10">
              <Megaphone className="w-5 h-5 text-white/30" />
              <h2 className="text-[clamp(1.5rem,3vw,2.25rem)] font-bold tracking-[-0.02em]">{t('pressTitle')}</h2>
            </div>
          </ScrollReveal>
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {pressItems.map((item) => (
              <StaggerItem key={item}>
                <div className="bg-white/5 border border-white/10 backdrop-blur-sm rounded-xl p-6 hover:border-white/20 transition-colors">
                  <span className="text-xs font-mono text-white/30 mb-3 block">{t(`${item}.date`)}</span>
                  <h3 className="font-bold text-lg text-white leading-tight">{t(`${item}.title`)}</h3>
                  <p className="mt-3 text-sm text-white/50 leading-relaxed">{t(`${item}.excerpt`)}</p>
                  <Link href={`/${locale}/medias`} className="inline-flex items-center gap-1 mt-4 text-sm font-medium text-white/70 hover:text-white transition-colors">
                    {t('readMore')} <ArrowUpRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>
    </>
  );
}
