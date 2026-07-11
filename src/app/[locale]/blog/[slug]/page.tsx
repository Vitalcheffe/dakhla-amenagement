import { getTranslations } from 'next-intl/server';
import { buildMetadata, KEYWORDS, SITE } from '@/lib/seo';
import {
  webPageSchema,
  breadcrumbSchema,
  blogPostingSchema,
} from '@/lib/structured-data';
import { JsonLdScript } from '@/components/shared/JsonLd';
import { BLOG_ARTICLES, ARTICLE_KEYWORDS, getArticle } from '@/lib/blog-data';
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
      <BlogArticlePageClient />
    </>
  );
}
