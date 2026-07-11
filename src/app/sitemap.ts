import type { MetadataRoute } from 'next';
import { BLOG_ARTICLES } from '@/lib/blog-data';
import { SITE } from '@/lib/seo';

type ChangeFreq = 'daily' | 'weekly' | 'monthly' | 'yearly';

interface PageEntry {
  path: string;
  priority: number;
  changeFrequency: ChangeFreq;
  images?: string[];
}

const STATIC_PAGES: PageEntry[] = [
  {
    path: '',
    priority: 1.0,
    changeFrequency: 'weekly',
    images: [
      '/images/og-banner.jpg',
      '/images/dakhla-aerial.jpg',
      '/images/factory-exterior.jpg',
    ],
  },
  {
    path: '/produits',
    priority: 0.9,
    changeFrequency: 'monthly',
    images: [
      '/images/products/cpj45-bags.jpg',
      '/images/products/cpj55-bags.jpg',
      '/images/products/bulk-cement-truck.jpg',
      '/images/products/big-bag-cement.jpg',
    ],
  },
  { path: '/ciment-maroc', priority: 0.95, changeFrequency: 'weekly', images: ['/images/dakhla-aerial.jpg'] },
  { path: '/prix-ciment', priority: 0.9, changeFrequency: 'weekly', images: ['/images/cement-bags.jpg'] },
  { path: '/livraison-ciment', priority: 0.85, changeFrequency: 'monthly', images: ['/images/delivery/delivery-fleet.jpg'] },
  // Product landing pages
  { path: '/cpj-45', priority: 0.9, changeFrequency: 'monthly', images: ['/images/products/cpj45-bags.jpg'] },
  { path: '/cpj-55', priority: 0.9, changeFrequency: 'monthly', images: ['/images/products/cpj55-bags.jpg'] },
  { path: '/ciment-vrac', priority: 0.85, changeFrequency: 'monthly', images: ['/images/products/bulk-cement-truck.jpg'] },
  { path: '/ciment-sacs', priority: 0.85, changeFrequency: 'monthly', images: ['/images/products/cpj45-bags.jpg'] },
  { path: '/ciment-big-bag', priority: 0.85, changeFrequency: 'monthly', images: ['/images/products/big-bag-cement.jpg'] },
  // Application landing pages
  { path: '/beton-arme-maroc', priority: 0.8, changeFrequency: 'monthly', images: ['/images/projects/residential-construction.jpg'] },
  { path: '/genie-civil-ciment', priority: 0.8, changeFrequency: 'monthly', images: ['/images/projects/port-construction.jpg'] },
  { path: '/construction-dakhla', priority: 0.8, changeFrequency: 'monthly', images: ['/images/dakhla-aerial.jpg'] },
  { path: '/fournisseur-ciment-maroc', priority: 0.8, changeFrequency: 'monthly', images: ['/images/factory-exterior.jpg'] },
  // Regional landing pages (local SEO)
  { path: '/ciment-dakhla', priority: 0.85, changeFrequency: 'monthly', images: ['/images/dakhla-aerial.jpg'] },
  { path: '/ciment-laayoune', priority: 0.75, changeFrequency: 'monthly' },
  { path: '/ciment-boujdour', priority: 0.75, changeFrequency: 'monthly' },
  { path: '/ciment-sud-maroc', priority: 0.8, changeFrequency: 'monthly' },
  { path: '/ciment-mauritanie', priority: 0.75, changeFrequency: 'monthly' },
  { path: '/lexique-ciment', priority: 0.7, changeFrequency: 'monthly' },
  { path: '/calculateur-ciment', priority: 0.9, changeFrequency: 'monthly' },
  { path: '/devis', priority: 0.9, changeFrequency: 'monthly', images: ['/images/cement-bags.jpg'] },
  {
    path: '/blog',
    priority: 0.9,
    changeFrequency: 'daily',
    images: BLOG_ARTICLES.slice(0, 6).map((a) => a.image),
  },
  { path: '/processus', priority: 0.8, changeFrequency: 'monthly', images: ['/images/grinding-process.jpg'] },
  { path: '/a-propos', priority: 0.8, changeFrequency: 'monthly', images: ['/images/factory/factory-aerial.jpg'] },
  { path: '/contact', priority: 0.8, changeFrequency: 'monthly' },
  { path: '/realisations', priority: 0.7, changeFrequency: 'monthly', images: ['/images/projects/residential-construction.jpg'] },
  { path: '/faq', priority: 0.7, changeFrequency: 'monthly' },
  { path: '/durabilite', priority: 0.7, changeFrequency: 'monthly', images: ['/images/solar-industrial.jpg'] },
  { path: '/temoignages', priority: 0.6, changeFrequency: 'monthly' },
  { path: '/galerie', priority: 0.6, changeFrequency: 'monthly', images: ['/images/factory/factory-interior.jpg'] },
  { path: '/carrieres', priority: 0.5, changeFrequency: 'monthly' },
  { path: '/presse', priority: 0.5, changeFrequency: 'monthly' },
  { path: '/investisseurs', priority: 0.4, changeFrequency: 'yearly' },
  { path: '/documents', priority: 0.4, changeFrequency: 'monthly' },
  { path: '/mentions-legales', priority: 0.2, changeFrequency: 'yearly' },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const entries: MetadataRoute.Sitemap = [];

  // Static pages — for each locale
  for (const locale of SITE.locales) {
    for (const page of STATIC_PAGES) {
      const url = `${SITE.url}/${locale}${page.path}`;
      const lastMod = page.path === '/blog' ? new Date() : new Date('2026-01-15');

      entries.push({
        url,
        lastModified: lastMod,
        changeFrequency: page.changeFrequency,
        priority: page.priority,
        alternates: {
          languages: {
            fr: `${SITE.url}/fr${page.path}`,
            en: `${SITE.url}/en${page.path}`,
            'x-default': `${SITE.url}/fr${page.path}`,
          },
        },
        images: page.images?.map((img) => `${SITE.url}${img}`),
      });
    }
  }

  // Blog articles — for each locale
  for (const locale of SITE.locales) {
    for (const article of BLOG_ARTICLES) {
      const url = `${SITE.url}/${locale}/blog/${article.slug}`;
      entries.push({
        url,
        lastModified: new Date(article.datePublished),
        changeFrequency: 'monthly' as ChangeFreq,
        priority: 0.6,
        alternates: {
          languages: {
            fr: `${SITE.url}/fr/blog/${article.slug}`,
            en: `${SITE.url}/en/blog/${article.slug}`,
            'x-default': `${SITE.url}/fr/blog/${article.slug}`,
          },
        },
        images: [`${SITE.url}${article.image}`],
      });
    }
  }

  // Blog category pages — for each locale
  const BLOG_CATEGORIES = ['technical', 'news', 'projects', 'regulation', 'sustainability'];
  for (const locale of SITE.locales) {
    for (const category of BLOG_CATEGORIES) {
      entries.push({
        url: `${SITE.url}/${locale}/blog/categorie/${category}`,
        lastModified: new Date(),
        changeFrequency: 'weekly' as ChangeFreq,
        priority: 0.65,
        alternates: {
          languages: {
            fr: `${SITE.url}/fr/blog/categorie/${category}`,
            en: `${SITE.url}/en/blog/categorie/${category}`,
            'x-default': `${SITE.url}/fr/blog/categorie/${category}`,
          },
        },
      });
    }
  }

  return entries;
}
