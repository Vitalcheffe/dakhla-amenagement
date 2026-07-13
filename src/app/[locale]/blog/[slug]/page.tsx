import Link from 'next/link';
import Image from 'next/image';
import { getTranslations } from 'next-intl/server';
import { buildMetadata, KEYWORDS, SITE } from '@/lib/seo';
import {
  webPageSchema,
  breadcrumbSchema,
  blogPostingSchema,
  howToSchema,
} from '@/lib/structured-data';
import { JsonLdScript } from '@/components/shared/JsonLd';
import { Breadcrumbs } from '@/components/shared/Breadcrumbs';
import { CtaBanner } from '@/components/shared/RelatedLinks';
import { ReadingProgress } from '@/components/shared/ReadingProgress';
import { RelatedProducts } from '@/components/shared/RelatedProducts';
import { CalculatorCta } from '@/components/shared/CalculatorCta';
import { BLOG_ARTICLES, ARTICLE_KEYWORDS, ARTICLE_HOWTO, ARTICLE_INTERNAL_LINKS, ARTICLE_PRODUCTS, getArticle } from '@/lib/blog-data';
import { ArrowRight, Clock, Calendar, Tag, Share2, ListChecks, Link2, TrendingUp } from 'lucide-react';
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
  const loc: 'fr' | 'en' | 'ar' = (locale === 'en' ? 'en' : locale === 'ar' ? 'ar' : 'fr') as 'fr' | 'en' | 'ar';
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
    modifiedTime: article ? new Date(article.dateModified).toISOString() : undefined,
    author: SITE.name,
  });
}

export default async function BlogArticlePage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  const loc: 'fr' | 'en' | 'ar' = (locale === 'en' ? 'en' : locale === 'ar' ? 'ar' : 'fr') as 'fr' | 'en' | 'ar';
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
      dateModified: new Date(article.dateModified).toISOString(),
      keywords: ARTICLE_KEYWORDS[slug] ?? [],
      articleBody: excerpt,
    }),
  ];

  // Add HowTo schema for guide-type articles (enables featured snippets)
  const howtoSteps = ARTICLE_HOWTO[slug];
  if (howtoSteps && howtoSteps.length > 0) {
    schemas.push(
      howToSchema({
        name: title,
        description: excerpt,
        path: `/blog/${slug}`,
        locale: loc,
        steps: howtoSteps,
      }),
    );
  }

  // Reading time estimate (based on excerpt length + average article body ~800 words)
  const readingTime = Math.max(3, Math.ceil((excerpt.split(/\s+/).length + 800) / 200));

  // Internal links for this article (contextual links to landing pages)
  const internalLinks = ARTICLE_INTERNAL_LINKS[slug] ?? [];

  // Product cards for this article (styled cards with icons + descriptions)
  const productLinks = ARTICLE_PRODUCTS[slug] ?? [];

  // Popular articles: pick 5 most recent (excluding current)
  const popularArticles = BLOG_ARTICLES
    .filter((a) => a.slug !== slug)
    .slice(0, 5);

  return (
    <>
      <ReadingProgress />
      <JsonLdScript schema={schemas} />
      <Breadcrumbs
        items={[
          { name: 'Blog', path: '/blog' },
          { name: title, path: `/blog/${slug}` },
        ]}
        locale={locale}
      />
      <BlogArticlePageClient />

      {/* HowTo Steps Visual Section — only for guide articles */}
      {howtoSteps && howtoSteps.length > 0 && (
        <section className="py-12 md:py-16 bg-white border-t border-[#E5E7EB]">
          <div className="max-w-6xl mx-auto px-6 md:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
              {/* TOC Sidebar */}
              <aside className="hidden lg:block">
                <div className="sticky top-24">
                  <div className="flex items-center gap-2 mb-4 pb-3 border-b border-[#E5E7EB]">
                    <ListChecks className="w-4 h-4 text-[#E8B84B]" />
                    <h3 className="text-sm font-semibold uppercase tracking-wider text-[#1B3A5C]">
                      {loc === 'fr' ? 'Sommaire' : 'Contents'}
                    </h3>
                  </div>
                  <nav>
                    <ol className="space-y-2">
                      {howtoSteps.map((step, index) => (
                        <li key={index}>
                          <a
                            href={`#step-${index + 1}`}
                            className="group flex items-start gap-2 text-sm text-[#6B7280] hover:text-[#1B3A5C] transition-colors"
                          >
                            <span className="shrink-0 w-5 h-5 rounded-full bg-[#F7F8FA] text-[#1B3A5C] text-xs font-bold flex items-center justify-center group-hover:bg-[#1B3A5C] group-hover:text-white transition-colors">
                              {index + 1}
                            </span>
                            <span className="leading-snug">{step.name}</span>
                          </a>
                        </li>
                      ))}
                    </ol>
                  </nav>
                </div>
              </aside>

              {/* Steps Content */}
              <div className="lg:col-span-3">
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-10 h-10 rounded-full bg-[#E8B84B]/15 flex items-center justify-center">
                    <ListChecks className="w-5 h-5 text-[#E8B84B]" />
                  </div>
                  <h2 className="text-xl md:text-2xl font-bold text-[#1B3A5C]">
                    {loc === 'fr' ? 'Étapes clés' : 'Key steps'}
                  </h2>
                </div>
                <ol className="space-y-4">
                  {howtoSteps.map((step, index) => (
                    <li
                      key={index}
                      id={`step-${index + 1}`}
                      className="flex gap-4 bg-[#F7F8FA] border border-[#E5E7EB] rounded-xl p-5 hover:border-[#E8B84B] transition-colors scroll-mt-24"
                    >
                      <span className="shrink-0 w-8 h-8 rounded-full bg-[#1B3A5C] text-white text-sm font-bold flex items-center justify-center">
                        {index + 1}
                      </span>
                      <div>
                        <h3 className="font-semibold text-[#1B3A5C] mb-1">{step.name}</h3>
                        <p className="text-sm text-[#6B7280] leading-relaxed">{step.text}</p>
                      </div>
                    </li>
                  ))}
                </ol>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Article Meta Bar — reading time, date, category, share */}
      <section className="py-6 bg-[#F7F8FA] border-y border-[#E5E7EB]">
        <div className="max-w-3xl mx-auto px-6 md:px-12 flex flex-wrap items-center justify-between gap-4">
          <div className="flex flex-wrap items-center gap-4 text-sm text-[#6B7280]">
            <span className="flex items-center gap-1.5">
              <Calendar className="w-4 h-4" />
              {article.dateDisplay}
            </span>
            <span className="flex items-center gap-1.5 text-[#E8B84B]">
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12a9 9 0 1 1-9-9c2.52 0 4.93 1 6.74 2.74L21 8"/><path d="M21 3v5h-5"/></svg>
              {loc === 'fr' ? `Mis à jour le ${article.dateModifiedDisplay}` : `Updated ${article.dateModifiedDisplay}`}
            </span>
            <span className="flex items-center gap-1.5">
              <Tag className="w-4 h-4" />
              {article.category}
            </span>
            <span className="flex items-center gap-1.5">
              <Clock className="w-4 h-4" />
              {loc === 'fr' ? `${readingTime} min de lecture` : `${readingTime} min read`}
            </span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-sm text-[#6B7280] mr-1">
              <Share2 className="w-4 h-4 inline mr-1" />
              {loc === 'fr' ? 'Partager' : 'Share'}
            </span>
            <button
              type="button"
              aria-label="WhatsApp"
              className="w-8 h-8 rounded-full bg-[#25D366]/10 hover:bg-[#25D366] hover:text-white text-[#25D366] flex items-center justify-center transition-colors"
              dangerouslySetInnerHTML={{
                __html: `<svg viewBox="0 0 24 24" fill="currentColor" class="w-4 h-4"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/></svg>`,
              }}
            />
            <button
              type="button"
              aria-label="LinkedIn"
              className="w-8 h-8 rounded-full bg-[#0A66C2]/10 hover:bg-[#0A66C2] hover:text-white text-[#0A66C2] flex items-center justify-center transition-colors"
              dangerouslySetInnerHTML={{
                __html: `<svg viewBox="0 0 24 24" fill="currentColor" class="w-4 h-4"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>`,
              }}
            />
            <button
              type="button"
              aria-label="Facebook"
              className="w-8 h-8 rounded-full bg-[#1877F2]/10 hover:bg-[#1877F2] hover:text-white text-[#1877F2] flex items-center justify-center transition-colors"
              dangerouslySetInnerHTML={{
                __html: `<svg viewBox="0 0 24 24" fill="currentColor" class="w-4 h-4"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>`,
              }}
            />
            <button
              type="button"
              aria-label="Twitter"
              className="w-8 h-8 rounded-full bg-black/5 hover:bg-black hover:text-white text-black flex items-center justify-center transition-colors"
              dangerouslySetInnerHTML={{
                __html: `<svg viewBox="0 0 24 24" fill="currentColor" class="w-4 h-4"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>`,
              }}
            />
          </div>
        </div>
      </section>

      {/* Calculator CTA — only on calculation/dosage-related articles */}
      {['calculer-quantite-ciment', 'beton-arme-maroc', 'cpj45-vs-cpj55-guide', 'choisir-ciment-projet', '5-erreurs-ciment', 'big-bag-vs-sacs'].includes(slug) && (
        <CalculatorCta locale={locale} />
      )}

      {/* Related Products — styled cards with icons, descriptions, badges */}
      {productLinks.length > 0 && (
        <RelatedProducts
          products={productLinks}
          locale={locale}
          title={loc === 'fr' ? 'Produits & Services liés' : 'Related Products & Services'}
        />
      )}

      {/* Internal Links + Popular Articles Sidebar — contextual linking for SEO */}
      {internalLinks.length > 0 && (
        <section className="py-12 md:py-16 bg-white border-t border-[#E5E7EB]">
          <div className="max-w-[1400px] mx-auto px-6 md:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Internal links to landing pages */}
              <div className="lg:col-span-2">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-full bg-[#1B3A5C]/5 flex items-center justify-center">
                    <Link2 className="w-5 h-5 text-[#1B3A5C]" />
                  </div>
                  <h2 className="text-xl md:text-2xl font-bold text-[#1B3A5C]">
                    {loc === 'fr' ? 'Ressources liées' : 'Related resources'}
                  </h2>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {internalLinks.map((link, i) => (
                    <Link
                      key={i}
                      href={`/${locale}${link.href}`}
                      className="group flex items-center gap-3 px-4 py-3 bg-[#F7F8FA] border border-[#E5E7EB] rounded-xl hover:border-[#E8B84B] hover:shadow-md transition-all"
                    >
                      <span className="w-2 h-2 rounded-full bg-[#E8B84B] group-hover:scale-150 transition-transform" />
                      <span className="text-sm font-medium text-[#1B3A5C] group-hover:text-[#C1272D] transition-colors">
                        {link.label}
                      </span>
                      <ArrowRight className="w-3.5 h-3.5 text-[#C1272D] ml-auto opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                    </Link>
                  ))}
                </div>
              </div>

              {/* Popular articles sidebar */}
              <aside>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-full bg-[#C1272D]/5 flex items-center justify-center">
                    <TrendingUp className="w-5 h-5 text-[#C1272D]" />
                  </div>
                  <h2 className="text-xl md:text-2xl font-bold text-[#1B3A5C]">
                    {loc === 'fr' ? 'Articles populaires' : 'Popular articles'}
                  </h2>
                </div>
                <div className="space-y-3">
                  {popularArticles.map((pop, i) => {
                    const popTitle = t(`blog.articles.article${pop.number}.title`);
                    return (
                      <Link
                        key={pop.slug}
                        href={`/${locale}/blog/${pop.slug}`}
                        className="group flex gap-3 items-start p-3 rounded-lg hover:bg-[#F7F8FA] transition-colors"
                      >
                        <span className="shrink-0 w-6 h-6 rounded-full bg-[#1B3A5C]/5 text-[#1B3A5C] text-xs font-bold flex items-center justify-center">
                          {i + 1}
                        </span>
                        <div className="flex-1 min-w-0">
                          <p className="text-sm font-medium text-[#1B3A5C] group-hover:text-[#C1272D] transition-colors line-clamp-2 leading-snug">
                            {popTitle}
                          </p>
                          <p className="text-xs text-[#6B7280] mt-1">{pop.dateDisplay}</p>
                        </div>
                      </Link>
                    );
                  })}
                </div>
              </aside>
            </div>
          </div>
        </section>
      )}

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
                      sizes="(max-width: 768px) 100vw, 33vw"
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
