import type { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.ciment-dam.com';
  const locales = ['fr', 'en'];

  const pages: { path: string; priority: number; changeFrequency: 'daily' | 'weekly' | 'monthly' | 'yearly' }[] = [
    { path: '', priority: 1.0, changeFrequency: 'weekly' },
    { path: '/produits', priority: 0.9, changeFrequency: 'monthly' },
    { path: '/devis', priority: 0.9, changeFrequency: 'monthly' },
    { path: '/blog', priority: 0.9, changeFrequency: 'daily' },
    { path: '/processus', priority: 0.8, changeFrequency: 'monthly' },
    { path: '/a-propos', priority: 0.8, changeFrequency: 'monthly' },
    { path: '/contact', priority: 0.8, changeFrequency: 'monthly' },
    { path: '/realisations', priority: 0.7, changeFrequency: 'monthly' },
    { path: '/faq', priority: 0.7, changeFrequency: 'monthly' },
    { path: '/durabilite', priority: 0.7, changeFrequency: 'monthly' },
    { path: '/temoignages', priority: 0.6, changeFrequency: 'monthly' },
    { path: '/galerie', priority: 0.6, changeFrequency: 'monthly' },
    { path: '/carrieres', priority: 0.5, changeFrequency: 'monthly' },
    { path: '/presse', priority: 0.5, changeFrequency: 'monthly' },
    { path: '/investisseurs', priority: 0.4, changeFrequency: 'yearly' },
    { path: '/documents', priority: 0.4, changeFrequency: 'monthly' },
    { path: '/mentions-legales', priority: 0.2, changeFrequency: 'yearly' },
  ];

  const entries: MetadataRoute.Sitemap = [];

  for (const locale of locales) {
    for (const page of pages) {
      entries.push({
        url: `${baseUrl}/${locale}${page.path}`,
        lastModified: new Date(),
        changeFrequency: page.changeFrequency,
        priority: page.priority,
        alternates: {
          languages: {
            fr: `${baseUrl}/fr${page.path}`,
            en: `${baseUrl}/en${page.path}`,
          },
        },
      });
    }
  }

  return entries;
}
