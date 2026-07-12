import { BLOG_ARTICLES } from '@/lib/blog-data';
import { SITE } from '@/lib/seo';
import { getTranslations } from 'next-intl/server';

export const dynamic = 'force-static';

/**
 * RSS 2.0 feed for the DAM blog.
 * Helps with SEO (content syndication) and lets users subscribe.
 */
export async function GET() {
  const t = await getTranslations({ locale: 'fr', namespace: 'blog' });

  const items = BLOG_ARTICLES.map((article) => {
    const title = t(`articles.article${article.number}.title`);
    const excerpt = t(`articles.article${article.number}.excerpt`);
    const url = `${SITE.url}/fr/blog/${article.slug}`;
    const pubDate = new Date(article.datePublished).toUTCString();
    return `    <item>
      <title>${escapeXml(title)}</title>
      <link>${url}</link>
      <guid isPermaLink="true">${url}</guid>
      <description>${escapeXml(excerpt)}</description>
      <category>${escapeXml(article.category)}</category>
      <pubDate>${pubDate}</pubDate>
    </item>`;
  }).join('\n');

  const rss = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>${escapeXml(SITE.name)} — Blog Ciment Maroc</title>
    <link>${SITE.url}/fr/blog</link>
    <atom:link href="${SITE.url}/feed.xml" rel="self" type="application/rss+xml" />
    <description>Articles experts sur le ciment au Maroc : CPJ 45, CPJ 55, prix, normes, construction durable. Dakhla Aménagement et Développement</description>
    <language>fr</language>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
    <managingEditor>${SITE.email} (${SITE.name})</managingEditor>
    <webMaster>${SITE.email} (${SITE.name})</webMaster>
    <copyright>© ${new Date().getFullYear()} ${SITE.name}. Tous droits réservés.</copyright>
${items}
  </channel>
</rss>`;

  return new Response(rss, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
      'Cache-Control': 'public, max-age=3600, s-maxage=3600',
    },
  });
}

function escapeXml(str: string): string {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
}
