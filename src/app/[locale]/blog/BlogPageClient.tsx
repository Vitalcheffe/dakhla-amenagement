'use client';

import { useState, useMemo } from 'react';
import { useTranslations } from 'next-intl';
import { useParams } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Search, X, FileQuestion } from 'lucide-react';
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

const ARTICLE_NUMBERS = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

export default function BlogPageClient() {
  const t = useTranslations();
  const params = useParams();
  const locale = (params?.locale as string) || 'fr';
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = ['all', 'technical', 'news', 'projects', 'regulation', 'sustainability'];

  const isFr = locale === 'fr';

  // Combined filter: category + search query (title + excerpt)
  const filteredArticles = useMemo(() => {
    let result = ARTICLE_NUMBERS;

    // Category filter
    if (activeCategory !== 'all') {
      result = result.filter(
        (i) => t(`blog.articles.article${i}.category`) === t(`blog.categories.${activeCategory}`)
      );
    }

    // Search filter
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase().trim();
      result = result.filter((i) => {
        const title = t(`blog.articles.article${i}.title`).toLowerCase();
        const excerpt = t(`blog.articles.article${i}.excerpt`).toLowerCase();
        const category = t(`blog.articles.article${i}.category`).toLowerCase();
        return title.includes(query) || excerpt.includes(query) || category.includes(query);
      });
    }

    return result;
  }, [activeCategory, searchQuery, t]);

  const hasResults = filteredArticles.length > 0;
  const totalArticles = ARTICLE_NUMBERS.length;

  return (
    <>
      <PageHero title={t('blog.title')} subtitle={t('blog.subtitle')} sectionCounter="/05" />

      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          {/* Search Bar + Categories */}
          <ScrollReveal>
            <div className="mb-10 space-y-6">
              {/* Search input */}
              <div className="relative max-w-2xl mx-auto">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#6B7280] pointer-events-none" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder={isFr ? 'Rechercher un article... (ciment, CPJ, béton, Dakhla)' : 'Search an article... (cement, CPJ, concrete, Dakhla)'}
                  className="w-full pl-12 pr-12 py-3.5 rounded-full bg-[#F7F8FA] border border-[#E5E7EB] text-[#1A1A2E] text-sm focus:outline-none focus:ring-2 focus:ring-[#E8B84B] focus:border-transparent transition-all"
                  aria-label={isFr ? 'Rechercher dans le blog' : 'Search the blog'}
                />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery('')}
                    className="absolute right-4 top-1/2 -translate-y-1/2 w-6 h-6 rounded-full bg-[#E5E7EB] hover:bg-[#C1272D] hover:text-white text-[#6B7280] flex items-center justify-center transition-colors"
                    aria-label={isFr ? 'Effacer la recherche' : 'Clear search'}
                  >
                    <X className="w-3.5 h-3.5" />
                  </button>
                )}
              </div>

              {/* Category filters */}
              <div className="flex flex-wrap gap-2 justify-center">
                {categories.map((cat) => {
                  const count = cat === 'all'
                    ? totalArticles
                    : ARTICLE_NUMBERS.filter(
                        (i) => t(`blog.articles.article${i}.category`) === t(`blog.categories.${cat}`)
                      ).length;
                  return (
                    <button
                      key={cat}
                      onClick={() => setActiveCategory(cat)}
                      className={`px-4 py-2 text-sm font-medium rounded-full cursor-pointer transition-all ${
                        activeCategory === cat
                          ? 'bg-[#1B3A5C] text-white shadow-md'
                          : 'bg-[#F7F8FA] text-[#1B3A5C] hover:bg-[#1B3A5C]/10'
                      }`}
                    >
                      {t(`blog.categories.${cat}`)} <span className="opacity-60">({count})</span>
                    </button>
                  );
                })}
              </div>

              {/* Results count */}
              <p className="text-center text-sm text-[#6B7280]">
                {searchQuery || activeCategory !== 'all' ? (
                  <>
                    {isFr
                      ? `${filteredArticles.length} article${filteredArticles.length > 1 ? 's' : ''} trouvé${filteredArticles.length > 1 ? 's' : ''}`
                      : `${filteredArticles.length} article${filteredArticles.length > 1 ? 's' : ''} found`}
                    {searchQuery && (
                      <span className="ml-1">
                        {isFr ? 'pour' : 'for'} &laquo;<strong className="text-[#1B3A5C]">{searchQuery}</strong>&raquo;
                      </span>
                    )}
                  </>
                ) : (
                  <>
                    {isFr
                      ? `${totalArticles} articles experts sur le ciment au Maroc`
                      : `${totalArticles} expert articles on cement in Morocco`}
                  </>
                )}
              </p>
            </div>
          </ScrollReveal>

          {/* Articles Grid or Empty State */}
          {hasResults ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredArticles.map((i, idx) => {
                const slug = articleSlugs[i - 1];
                return (
                  <ScrollReveal key={i} delay={Math.min(idx, 6) * 0.05}>
                    <Link href={`/${locale}/blog/${slug}`} className="group block h-full">
                      <div className="card-lift bg-white border border-[#E5E7EB] rounded-2xl overflow-hidden h-full flex flex-col">
                        <div className="relative h-48">
                          <Image
                            src={articleImages[i - 1]}
                            alt={t(`blog.articles.article${i}.title`)}
                            fill
                            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                            className="object-cover transition-transform duration-500 group-hover:scale-105"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                        </div>
                        <div className="p-6 flex flex-col flex-1">
                          <div className="flex items-center gap-2 mb-3">
                            <span className="text-xs font-medium text-[#1B3A5C] bg-[#1B3A5C]/5 px-2.5 py-1 rounded-full">
                              {t(`blog.articles.article${i}.category`)}
                            </span>
                            <span className="text-xs text-[#6B7280]">{t(`blog.articles.article${i}.date`)}</span>
                          </div>
                          <h3 className="font-bold text-[#1B3A5C] text-lg leading-tight group-hover:text-[#C1272D] transition-colors">
                            {t(`blog.articles.article${i}.title`)}
                          </h3>
                          <p className="mt-3 text-sm text-[#6B7280] leading-relaxed line-clamp-3 flex-1">
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
          ) : (
            <div className="text-center py-16 max-w-md mx-auto">
              <div className="w-16 h-16 rounded-full bg-[#F7F8FA] flex items-center justify-center mx-auto mb-6">
                <FileQuestion className="w-8 h-8 text-[#6B7280]" />
              </div>
              <h3 className="text-xl font-bold text-[#1B3A5C] mb-2">
                {isFr ? 'Aucun article trouvé' : 'No articles found'}
              </h3>
              <p className="text-sm text-[#6B7280] mb-6">
                {isFr
                  ? "Essayez d'autres mots-clés ou parcourez toutes les catégories."
                  : 'Try other keywords or browse all categories.'}
              </p>
              <button
                onClick={() => {
                  setSearchQuery('');
                  setActiveCategory('all');
                }}
                className="inline-flex items-center gap-2 px-6 py-2.5 bg-[#1B3A5C] text-white text-sm font-medium rounded-full hover:bg-[#1B3A5C]/90 transition-colors"
              >
                <X className="w-4 h-4" />
                {isFr ? 'Réinitialiser les filtres' : 'Reset filters'}
              </button>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
