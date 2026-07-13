import { BLOG_ARTICLES } from '@/lib/blog-data';
import { SITE } from '@/lib/seo';

/**
 * Priority sitemap — only the most important pages.
 * Submit this FIRST in Google Search Console for faster indexing.
 */
export const dynamic = 'force-static';

interface PriorityPage {
  path: string;
  priority: string;
  changeFreq: string;
}

const PRIORITY_PAGES: PriorityPage[] = [
  { path: '', priority: '1.0', changeFreq: 'weekly' },
  { path: '/produits', priority: '0.9', changeFreq: 'monthly' },
  { path: '/ciment-maroc', priority: '0.95', changeFreq: 'weekly' },
  { path: '/prix-ciment', priority: '0.9', changeFreq: 'weekly' },
  { path: '/cpj-45', priority: '0.9', changeFreq: 'monthly' },
  { path: '/cpj-55', priority: '0.9', changeFreq: 'monthly' },
  { path: '/ciment-vrac', priority: '0.85', changeFreq: 'monthly' },
  { path: '/ciment-sacs', priority: '0.85', changeFreq: 'monthly' },
  { path: '/ciment-big-bag', priority: '0.85', changeFreq: 'monthly' },
  { path: '/livraison-ciment', priority: '0.85', changeFreq: 'monthly' },
  { path: '/calculateur-ciment', priority: '0.9', changeFreq: 'monthly' },
  { path: '/beton-pret-emploi', priority: '0.9', changeFreq: 'monthly' },
  { path: '/calculateur-resistance', priority: '0.9', changeFreq: 'monthly' },
  { path: '/expertise-certifications', priority: '0.85', changeFreq: 'monthly' },
  { path: '/cpj-35', priority: '0.9', changeFreq: 'monthly' },
  { path: '/ciment-portland-maroc', priority: '0.8', changeFreq: 'monthly' },
  { path: '/ciment-blanc-maroc', priority: '0.75', changeFreq: 'monthly' },
  { path: '/ciment-hydrofuge-maroc', priority: '0.75', changeFreq: 'monthly' },
  { path: '/mortier-ciment-maroc', priority: '0.75', changeFreq: 'monthly' },
  { path: '/prix-ciment-cpj35', priority: '0.9', changeFreq: 'monthly' },
  { path: '/prix-ciment-cpj45', priority: '0.9', changeFreq: 'monthly' },
  { path: '/prix-ciment-cpj55', priority: '0.9', changeFreq: 'monthly' },
  { path: '/prix-mortier-ciment', priority: '0.8', changeFreq: 'monthly' },
  { path: '/devis', priority: '0.9', changeFreq: 'monthly' },
  { path: '/contact', priority: '0.8', changeFreq: 'monthly' },
  { path: '/a-propos', priority: '0.8', changeFreq: 'monthly' },
  { path: '/processus', priority: '0.8', changeFreq: 'monthly' },
  { path: '/realisations', priority: '0.7', changeFreq: 'monthly' },
  { path: '/faq', priority: '0.7', changeFreq: 'monthly' },
  { path: '/temoignages', priority: '0.7', changeFreq: 'monthly' },
  { path: '/blog', priority: '0.9', changeFreq: 'daily' },
  { path: '/lexique-ciment', priority: '0.7', changeFreq: 'monthly' },
  { path: '/beton-arme-maroc', priority: '0.8', changeFreq: 'monthly' },
  { path: '/genie-civil-ciment', priority: '0.8', changeFreq: 'monthly' },
  { path: '/construction-dakhla', priority: '0.8', changeFreq: 'monthly' },
  { path: '/fournisseur-ciment-maroc', priority: '0.8', changeFreq: 'monthly' },
  { path: '/ciment-dakhla', priority: '0.85', changeFreq: 'monthly' },
  { path: '/ciment-sud-maroc', priority: '0.8', changeFreq: 'monthly' },
];

export function GET() {
  const today = new Date().toISOString().split('T')[0];
  const urls: string[] = [];

  // Static pages — both locales
  for (const locale of SITE.locales) {
    for (const page of PRIORITY_PAGES) {
      const url = `${SITE.url}/${locale}${page.path}`;
      urls.push(`  <url>
    <loc>${url}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${page.changeFreq}</changefreq>
    <priority>${page.priority}</priority>
    <xhtml:link rel="alternate" hreflang="fr" href="${SITE.url}/fr${page.path}" />
    <xhtml:link rel="alternate" hreflang="en" href="${SITE.url}/en${page.path}" />
    <xhtml:link rel="alternate" hreflang="x-default" href="${SITE.url}/fr${page.path}" />
  </url>`);
    }
  }

  // Blog articles — both locales
  for (const locale of SITE.locales) {
    for (const article of BLOG_ARTICLES) {
      const url = `${SITE.url}/${locale}/blog/${article.slug}`;
      urls.push(`  <url>
    <loc>${url}</loc>
    <lastmod>${article.dateModified}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
    <xhtml:link rel="alternate" hreflang="fr" href="${SITE.url}/fr/blog/${article.slug}" />
    <xhtml:link rel="alternate" hreflang="en" href="${SITE.url}/en/blog/${article.slug}" />
    <xhtml:link rel="alternate" hreflang="x-default" href="${SITE.url}/fr/blog/${article.slug}" />
  </url>`);
    }
  }

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml">
${urls.join('\n')}
</urlset>`;

  return new Response(xml, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
      'Cache-Control': 'public, max-age=3600, s-maxage=3600',
    },
  });
}
