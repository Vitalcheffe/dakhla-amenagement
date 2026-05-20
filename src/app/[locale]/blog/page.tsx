'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import { useParams } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { ScrollReveal } from '@/components/shared/Animations';
import { PageHero } from '@/components/shared/PageHero';

const articleImages = [
  '/images/cement-bags.jpg',
  '/images/factory-exterior.jpg',
  '/images/quality-lab.jpg',
  '/images/sustainability.jpg',
  '/images/construction-site.jpg',
  '/images/grinding-process.jpg',
  '/images/products/cpj45-bags.jpg',
  '/images/construction-site.jpg',
  '/images/projects/villa-construction.jpg',
  '/images/dakhla-aerial.jpg',
  '/images/process/step2-grinding.jpg',
  '/images/products/bulk-cement-truck.jpg',
  '/images/projects/port-construction.jpg',
  '/images/factory/factory-exterior.jpg',
  '/images/products/big-bag-cement.jpg',
  '/images/delivery/concrete-delivery.jpg',
  '/images/sustainability.jpg',
  '/images/lab/lab-compression-test.jpg',
  '/images/products/cpj55-bags.jpg',
  '/images/cement-bags.jpg',
];

const articleSlugs = [
  'choisir-ciment-projet',
  'capacite-500k-tonnes',
  'normes-ciment-maroc',
  'construction-durable-ciment',
  'projet-infrastructure-dakhla',
  'stockage-ciment-chantier',
  'cpj45-vs-cpj55-guide',
  'calculer-quantite-ciment',
  'beton-arme-maroc',
  'dakhla-pole-developpement',
  'role-gypse-ciment',
  'conditionnement-vrac',
  'construction-zone-cotiere',
  '10-ans-excellence',
  'devenir-revendeur',
  'transport-ciment-logistique',
  'rse-communaute-dakhla',
  'essais-resistance-ciment',
  'big-bag-vs-sacs',
  '5-erreurs-ciment',
];

export default function BlogPage() {
  const t = useTranslations();
  const params = useParams();
  const locale = (params?.locale as string) || 'fr';
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = ['all', 'technical', 'news', 'projects', 'regulation', 'sustainability'];

  const articleNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

  const filteredArticles = activeCategory === 'all'
    ? articleNumbers
    : articleNumbers.filter(
        (i) => t(`blog.articles.article${i}.category`) === t(`blog.categories.${activeCategory}`)
      );

  return (
    <>
      <PageHero title={t('blog.title')} subtitle={t('blog.subtitle')} sectionCounter="/05" />

      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          {/* Categories */}
          <ScrollReveal>
            <div className="flex flex-wrap gap-3 mb-12">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-4 py-2 text-sm font-medium rounded-full cursor-pointer transition-colors ${
                    activeCategory === cat
                      ? 'bg-[#1B3A5C] text-white'
                      : 'bg-[#F7F8FA] text-[#1B3A5C] hover:bg-[#1B3A5C] hover:text-white'
                  }`}
                >
                  {t(`blog.categories.${cat}`)}
                </button>
              ))}
            </div>
          </ScrollReveal>

          {/* Articles Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredArticles.map((i) => {
              const slug = articleSlugs[i - 1];
              return (
                <ScrollReveal key={i} delay={(i - 1) * 0.05}>
                  <Link href={`/${locale}/blog/${slug}`} className="group block">
                    <div className="card-lift bg-white border border-[#E5E7EB] rounded-2xl overflow-hidden">
                      <div className="relative h-48">
                        <Image
                          src={articleImages[i - 1]}
                          alt={t(`blog.articles.article${i}.title`)}
                          fill
                          className="object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                      </div>
                      <div className="p-6">
                        <div className="flex items-center gap-2 mb-3">
                          <span className="text-xs font-medium text-[#1B3A5C] bg-[#1B3A5C]/5 px-2.5 py-1 rounded-full">
                            {t(`blog.articles.article${i}.category`)}
                          </span>
                          <span className="text-xs text-[#6B7280]">{t(`blog.articles.article${i}.date`)}</span>
                        </div>
                        <h3 className="font-bold text-[#1B3A5C] text-lg leading-tight group-hover:text-[#1B3A5C]/80 transition-colors">
                          {t(`blog.articles.article${i}.title`)}
                        </h3>
                        <p className="mt-3 text-sm text-[#6B7280] leading-relaxed line-clamp-3">
                          {t(`blog.articles.article${i}.excerpt`)}
                        </p>
                        <span className="inline-flex items-center gap-1 mt-4 text-sm font-medium text-[#C1272D] group-hover:gap-2 transition-all">
                          {t('blog.readMore')} <ArrowRight className="w-3.5 h-3.5" />
                        </span>
                      </div>
                    </div>
                  </Link>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
