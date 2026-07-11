import Link from 'next/link';
import Image from 'next/image';
import { getTranslations } from 'next-intl/server';
import { getArticle } from '@/lib/blog-data';
import { ArrowRight, BookOpen } from 'lucide-react';

interface RelatedArticlesProps {
  articleSlugs: string[];
  locale: string;
  title?: string;
}

/**
 * Related blog articles section for landing pages.
 * Creates bidirectional internal links from landing pages to blog articles.
 * Improves PageRank distribution and topical authority.
 */
export async function RelatedArticles({
  articleSlugs,
  locale,
  title,
}: RelatedArticlesProps) {
  if (articleSlugs.length === 0) return null;

  const loc: 'fr' | 'en' = locale === 'en' ? 'en' : 'fr';
  const t = await getTranslations({ locale: loc });
  const isFr = loc === 'fr';
  const defaultTitle = isFr ? 'Articles de blog liés' : 'Related blog articles';

  const articles = articleSlugs
    .map((slug) => getArticle(slug))
    .filter((a): a is NonNullable<typeof a> => a !== undefined);

  if (articles.length === 0) return null;

  return (
    <section className="py-16 md:py-20 bg-[#F7F8FA]">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        <div className="flex items-center gap-3 mb-8">
          <div className="w-10 h-10 rounded-full bg-[#1B3A5C]/5 flex items-center justify-center">
            <BookOpen className="w-5 h-5 text-[#1B3A5C]" />
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-[#1B3A5C]">
            {title ?? defaultTitle}
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {articles.map((article) => {
            const articleTitle = t(`blog.articles.article${article.number}.title`);
            const articleExcerpt = t(`blog.articles.article${article.number}.excerpt`);
            return (
              <Link
                key={article.slug}
                href={`/${locale}/blog/${article.slug}`}
                className="group block bg-white border border-[#E5E7EB] rounded-xl overflow-hidden hover:shadow-lg hover:border-[#E8B84B] transition-all duration-300 h-full"
              >
                <div className="relative h-40">
                  <Image
                    src={article.image}
                    alt={articleTitle}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                  <span className="absolute top-3 left-3 bg-[#1B3A5C]/80 text-white text-xs font-medium px-2.5 py-1 rounded-full backdrop-blur-sm">
                    {article.category}
                  </span>
                </div>
                <div className="p-5">
                  <p className="text-xs text-[#6B7280] mb-2">{article.dateDisplay}</p>
                  <h3 className="font-bold text-[#1B3A5C] text-base leading-tight group-hover:text-[#C1272D] transition-colors line-clamp-2">
                    {articleTitle}
                  </h3>
                  <p className="mt-2 text-sm text-[#6B7280] leading-relaxed line-clamp-2">
                    {articleExcerpt}
                  </p>
                  <span className="inline-flex items-center gap-1 mt-3 text-sm font-medium text-[#C1272D] group-hover:gap-2 transition-all">
                    {isFr ? 'Lire' : 'Read'} <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
