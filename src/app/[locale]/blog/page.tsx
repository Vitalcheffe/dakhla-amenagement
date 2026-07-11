import { getTranslations } from 'next-intl/server';
import { buildMetadata, KEYWORDS, SITE } from '@/lib/seo';
import {
  webPageSchema,
  breadcrumbSchema,
  collectionPageSchema,
} from '@/lib/structured-data';
import { JsonLdScript } from '@/components/shared/JsonLd';
import { BLOG_ARTICLES } from '@/lib/blog-data';
import BlogPageClient from './BlogPageClient';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const loc: 'fr' | 'en' = locale === 'en' ? 'en' : 'fr';

  if (loc === 'en') {
    return buildMetadata({
      locale: 'en',
      path: '/blog',
      title: 'Cement Blog Morocco — News, Guides & Technical Tips | Dakhla Aménagement',
      description:
        'Expert articles on cement in Morocco: CPJ 45 vs CPJ 55, prices, standards NM 10.1.004, storage, dosage, coastal construction, sustainability. DAM cement blog.',
      keywords: [
        'cement blog Morocco',
        'cement guide',
        'CPJ 45 CPJ 55 guide',
        'cement price Morocco',
        'cement tips',
        ...KEYWORDS.core,
      ],
    });
  }

  return buildMetadata({
    locale: 'fr',
    path: '/blog',
    title: 'Blog Ciment Maroc — Guides, Conseils & Actualités | Dakhla Aménagement',
    description:
      "Articles experts sur le ciment au Maroc : CPJ 45 vs CPJ 55, prix, normes NM 10.1.004, stockage, dosage, construction en zone côtière, durabilité. Le blog ciment DAM.",
    keywords: [
      'blog ciment Maroc',
      'guide ciment',
      'conseils ciment',
      'CPJ 45 vs CPJ 55',
      'prix ciment Maroc',
      'norme ciment',
      ...KEYWORDS.core,
    ],
  });
}

export default async function BlogPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const loc: 'fr' | 'en' = locale === 'en' ? 'en' : 'fr';
  const t = await getTranslations({ locale: loc });

  const blogItems = BLOG_ARTICLES.map((a) => ({
    name: t(`blog.articles.article${a.number}.title`),
    url: `${SITE.url}/${loc}/blog/${a.slug}`,
  }));

  const schemas = [
    webPageSchema({
      name:
        loc === 'fr'
          ? 'Blog Ciment Maroc — Dakhla Aménagement'
          : 'Cement Blog Morocco — Dakhla Aménagement',
      description:
        loc === 'fr'
          ? "Articles experts sur le ciment au Maroc : guides, conseils techniques, actualités."
          : 'Expert articles on cement in Morocco: guides, technical tips, news.',
      path: '/blog',
      locale: loc,
    }),
    breadcrumbSchema([{ name: 'Blog', path: '/blog' }], loc),
    collectionPageSchema({
      name:
        loc === 'fr'
          ? 'Blog Ciment Maroc — Dakhla Aménagement'
          : 'Cement Blog Morocco — Dakhla Aménagement',
      description:
        loc === 'fr'
          ? 'Collection d\'articles sur le ciment, la construction et le BTP au Maroc.'
          : 'Collection of articles on cement, construction and BTP in Morocco.',
      path: '/blog',
      locale: loc,
      items: blogItems,
    }),
  ];

  return (
    <>
      <JsonLdScript schema={schemas} />
      <BlogPageClient />
    </>
  );
}
