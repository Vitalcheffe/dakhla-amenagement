import { getTranslations } from 'next-intl/server';
import Image from 'next/image';
import Link from 'next/link';
import { buildMetadata, KEYWORDS, SITE } from '@/lib/seo';
import {
  webPageSchema,
  breadcrumbSchema,
  collectionPageSchema,
} from '@/lib/structured-data';
import { JsonLdScript } from '@/components/shared/JsonLd';
import { Breadcrumbs } from '@/components/shared/Breadcrumbs';
import { CtaBanner } from '@/components/shared/RelatedLinks';
import { ArrowRight } from 'lucide-react';
import { notFound } from 'next/navigation';

const CATEGORIES = ['technical', 'news', 'projects', 'regulation', 'sustainability'] as const;
type Category = (typeof CATEGORIES)[number];

export function generateStaticParams() {
  return SITE.locales.flatMap((locale) =>
    CATEGORIES.map((category) => ({ locale, category })),
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; category: string }>;
}) {
  const { locale, category } = await params;
  const loc: 'fr' | 'en' = locale === 'en' ? 'en' : 'fr';

  if (!CATEGORIES.includes(category as Category)) {
    return buildMetadata({
      locale: loc,
      path: '/blog',
      title: 'Blog — Dakhla Aménagement',
      description: 'Blog ciment Maroc',
      noIndex: true,
    });
  }

  const t = await getTranslations({ locale: loc, namespace: 'blog.categories' });
  const categoryName = t(category);

  return buildMetadata({
    locale: loc,
    path: `/blog/categorie/${category}`,
    title: loc === 'fr'
      ? `${categoryName} — Articles Blog Ciment | Dakhla Aménagement`
      : `${categoryName} — Cement Blog Articles | Dakhla Aménagement`,
    description: loc === 'fr'
      ? `Tous nos articles dans la catégorie ${categoryName}. Guides, conseils et actualités sur le ciment au Maroc.`
      : `All our articles in the ${categoryName} category. Guides, tips and news about cement in Morocco.`,
    keywords: [categoryName.toLowerCase(), ...KEYWORDS.core],
  });
}

export default async function BlogCategoryPage({
  params,
}: {
  params: Promise<{ locale: string; category: string }>;
}) {
  const { locale, category } = await params;
  const loc: 'fr' | 'en' = locale === 'en' ? 'en' : 'fr';

  if (!CATEGORIES.includes(category as Category)) {
    notFound();
  }

  const cat = category as Category;
  const t = await getTranslations({ locale: loc });
  const isFr = loc === 'fr';

  const categoryName = t(`blog.categories.${cat}`);

  // Filter articles by category (using i18n category names)
  const categoryDisplayName = t(`blog.categories.${cat}`);

  // Article slugs and images from blog-data
  const { BLOG_ARTICLES } = await import('@/lib/blog-data');

  const categoryArticles = BLOG_ARTICLES.filter((a) => {
    const articleCategory = t(`blog.articles.article${a.number}.category`);
    return articleCategory === categoryDisplayName;
  });

  const schemas = [
    webPageSchema({
      name: isFr ? `${categoryName} — Blog DAM` : `${categoryName} — DAM Blog`,
      description: isFr
        ? `Articles dans la catégorie ${categoryName}`
        : `Articles in the ${categoryName} category`,
      path: `/blog/categorie/${cat}`,
      locale: loc,
    }),
    breadcrumbSchema(
      [
        { name: 'Blog', path: '/blog' },
        { name: categoryName, path: `/blog/categorie/${cat}` },
      ],
      loc,
    ),
    collectionPageSchema({
      name: isFr ? `${categoryName} — Blog DAM` : `${categoryName} — DAM Blog`,
      description: isFr
        ? `Collection d'articles: ${categoryName}`
        : `Article collection: ${categoryName}`,
      path: `/blog/categorie/${cat}`,
      locale: loc,
      items: categoryArticles.map((a) => ({
        name: t(`blog.articles.article${a.number}.title`),
        url: `${SITE.url}/${loc}/blog/${a.slug}`,
      })),
    }),
  ];

  return (
    <>
      <JsonLdScript schema={schemas} />
      <Breadcrumbs
        items={[
          { name: 'Blog', path: '/blog' },
          { name: categoryName, path: `/blog/categorie/${cat}` },
        ]}
        locale={locale}
      />

      {/* Hero */}
      <section className="bg-gradient-to-br from-[#1B3A5C] to-[#0f1f33] text-white py-20 md:py-28">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <span className="inline-block px-4 py-1.5 bg-[#E8B84B]/20 text-[#E8B84B] text-sm font-medium rounded-full mb-6">
            {isFr ? 'Catégorie' : 'Category'}
          </span>
          <h1 className="text-[clamp(2rem,5vw,3.5rem)] font-bold leading-[1.1] mb-4">
            {categoryName}
          </h1>
          <p className="text-lg md:text-xl text-white/80 leading-relaxed max-w-2xl">
            {isFr
              ? `${categoryArticles.length} article${categoryArticles.length > 1 ? 's' : ''} dans cette catégorie`
              : `${categoryArticles.length} article${categoryArticles.length > 1 ? 's' : ''} in this category`}
          </p>
        </div>
      </section>

      {/* Articles */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          {/* Back to blog */}
          <Link
            href={`/${locale}/blog`}
            className="inline-flex items-center gap-2 text-sm text-[#6B7280] hover:text-[#1B3A5C] transition-colors mb-8"
          >
            <ArrowRight className="w-4 h-4 rotate-180" />
            {isFr ? 'Tous les articles' : 'All articles'}
          </Link>

          {/* Category pills */}
          <div className="flex flex-wrap gap-2 mb-12">
            <Link
              href={`/${locale}/blog`}
              className="px-4 py-2 text-sm font-medium rounded-full bg-[#F7F8FA] text-[#1B3A5C] hover:bg-[#1B3A5C]/10 transition-colors"
            >
              {isFr ? 'Tous' : 'All'}
            </Link>
            {CATEGORIES.map((c) => (
              <Link
                key={c}
                href={`/${locale}/blog/categorie/${c}`}
                className={`px-4 py-2 text-sm font-medium rounded-full transition-colors ${
                  c === cat
                    ? 'bg-[#1B3A5C] text-white'
                    : 'bg-[#F7F8FA] text-[#1B3A5C] hover:bg-[#1B3A5C]/10'
                }`}
              >
                {t(`blog.categories.${c}`)}
              </Link>
            ))}
          </div>

          {/* Articles grid */}
          {categoryArticles.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {categoryArticles.map((article) => {
                const articleTitle = t(`blog.articles.article${article.number}.title`);
                const articleExcerpt = t(`blog.articles.article${article.number}.excerpt`);
                return (
                  <Link
                    key={article.slug}
                    href={`/${locale}/blog/${article.slug}`}
                    className="group block bg-white border border-[#E5E7EB] rounded-2xl overflow-hidden hover:shadow-lg hover:border-[#E8B84B] transition-all duration-300 h-full"
                  >
                    <div className="relative h-48">
                      <Image
                        src={article.image}
                        alt={articleTitle}
                        fill
                        sizes="(max-width: 768px) 100vw, 33vw"
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                    </div>
                    <div className="p-6">
                      <div className="flex items-center gap-2 mb-3">
                        <span className="text-xs font-medium text-[#1B3A5C] bg-[#1B3A5C]/5 px-2.5 py-1 rounded-full">
                          {article.category}
                        </span>
                        <span className="text-xs text-[#6B7280]">{article.dateDisplay}</span>
                      </div>
                      <h3 className="font-bold text-[#1B3A5C] text-lg leading-tight group-hover:text-[#C1272D] transition-colors">
                        {articleTitle}
                      </h3>
                      <p className="mt-3 text-sm text-[#6B7280] leading-relaxed line-clamp-3">
                        {articleExcerpt}
                      </p>
                      <span className="inline-flex items-center gap-1 mt-4 text-sm font-medium text-[#C1272D] group-hover:gap-2 transition-all">
                        {isFr ? 'Lire l\'article' : 'Read article'} <ArrowRight className="w-3.5 h-3.5" />
                      </span>
                    </div>
                  </Link>
                );
              })}
            </div>
          ) : (
            <p className="text-center text-[#6B7280] py-12">
              {isFr ? 'Aucun article dans cette catégorie.' : 'No articles in this category.'}
            </p>
          )}
        </div>
      </section>

      <CtaBanner locale={locale} />
    </>
  );
}
