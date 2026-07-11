import Link from 'next/link';
import Image from 'next/image';
import { getTranslations } from 'next-intl/server';
import { buildMetadata, KEYWORDS, SITE } from '@/lib/seo';
import {
  webPageSchema,
  breadcrumbSchema,
  blogPostingSchema,
} from '@/lib/structured-data';
import { JsonLdScript } from '@/components/shared/JsonLd';
import { Breadcrumbs } from '@/components/shared/Breadcrumbs';
import { CtaBanner } from '@/components/shared/RelatedLinks';
import { BLOG_ARTICLES, ARTICLE_KEYWORDS, getArticle } from '@/lib/blog-data';
import { ArrowRight } from 'lucide-react';
import BlogArticlePageClient from './BlogArticlePageClient';

/** Pre-generate all blog article pages for both locales (SSG for SEO) */
export function generateStaticParams() {
  return SITE.locales.flatMap((locale) =>
    BLOG_ARTICLES.map((article) => ({
      locale,
      slug: article.slug,
    })),
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  const loc: 'fr' | 'en' = locale === 'en' ? 'en' : 'fr';
  const article = getArticle(slug);

  const t = await getTranslations({ locale: loc });
  const articleNum = article?.number ?? 1;
  const title = t(`blog.articles.article${articleNum}.title`);
  const excerpt = t(`blog.articles.article${articleNum}.excerpt`);

  return buildMetadata({
    locale: loc,
    path: `/blog/${slug}`,
    title,
    description: excerpt,
    keywords: [
      ...(ARTICLE_KEYWORDS[slug] ?? []),
      ...KEYWORDS.core,
    ],
    image: article?.image ?? '/images/og-banner.jpg',
    type: 'article',
    publishedTime: article ? new Date(article.datePublished).toISOString() : undefined,
    modifiedTime: article ? new Date(article.datePublished).toISOString() : undefined,
    author: SITE.name,
  });
}

export default async function BlogArticlePage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  const loc: 'fr' | 'en' = locale === 'en' ? 'en' : 'fr';
  const article = getArticle(slug) ?? BLOG_ARTICLES[0];
  const t = await getTranslations({ locale: loc });

  const title = t(`blog.articles.article${article.number}.title`);
  const excerpt = t(`blog.articles.article${article.number}.excerpt`);

  // Related articles: pick 3 others (next 3 in the list, wrapping)
  const relatedArticles = [1, 2, 3].map((offset) => {
    const idx = (article.number - 1 + offset) % BLOG_ARTICLES.length;
    return BLOG_ARTICLES[idx];
  });

  const schemas = [
    webPageSchema({
      name: title,
      description: excerpt,
      path: `/blog/${slug}`,
      locale: loc,
    }),
    breadcrumbSchema(
      [
        { name: 'Blog', path: '/blog' },
        { name: title, path: `/blog/${slug}` },
      ],
      loc,
    ),
    blogPostingSchema({
      title,
      description: excerpt,
      image: article.image,
      path: `/blog/${slug}`,
      locale: loc,
      datePublished: new Date(article.datePublished).toISOString(),
      keywords: ARTICLE_KEYWORDS[slug] ?? [],
    }),
  ];

  return (
    <>
      <JsonLdScript schema={schemas} />
      <Breadcrumbs
        items={[
          { name: 'Blog', path: '/blog' },
          { name: title, path: `/blog/${slug}` },
        ]}
        locale={locale}
      />
      <BlogArticlePageClient />

      {/* Related Articles Section — improves internal linking + reduces bounce */}
      <section className="py-16 md:py-20 bg-[#F7F8FA]">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <h2 className="text-2xl md:text-3xl font-bold text-[#1B3A5C] mb-8">
            {loc === 'fr' ? 'Articles liés' : 'Related articles'}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {relatedArticles.map((rel) => {
              const relTitle = t(`blog.articles.article${rel.number}.title`);
              const relExcerpt = t(`blog.articles.article${rel.number}.excerpt`);
              return (
                <Link
                  key={rel.slug}
                  href={`/${locale}/blog/${rel.slug}`}
                  className="group block bg-white border border-[#E5E7EB] rounded-2xl overflow-hidden hover:shadow-lg hover:border-[#E8B84B] transition-all duration-300"
                >
                  <div className="relative h-48">
                    <Image
                      src={rel.image}
                      alt={relTitle}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-6">
                    <span className="text-xs font-medium text-[#1B3A5C] bg-[#1B3A5C]/5 px-2.5 py-1 rounded-full">
                      {rel.category}
                    </span>
                    <h3 className="font-bold text-[#1B3A5C] text-lg leading-tight mt-3 group-hover:text-[#C1272D] transition-colors">
                      {relTitle}
                    </h3>
                    <p className="mt-3 text-sm text-[#6B7280] leading-relaxed line-clamp-2">
                      {relExcerpt}
                    </p>
                    <span className="inline-flex items-center gap-1 mt-4 text-sm font-medium text-[#C1272D] group-hover:gap-2 transition-all">
                      {loc === 'fr' ? 'Lire l\'article' : 'Read article'} <ArrowRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <CtaBanner locale={locale} />
    </>
  );
}
