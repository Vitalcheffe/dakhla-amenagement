/**
 * Blog article data — shared across blog pages, sitemap, and metadata generation.
 * Centralizes slugs, images, dates, and categories for all 20 articles.
 */

export interface BlogArticle {
  slug: string;
  number: number;
  image: string;
  /** ISO 8601 date for schema.org / sitemap lastmod */
  datePublished: string;
  /** Human-readable date (FR) */
  dateDisplay: string;
  category: string;
}

const RAW_ARTICLES: Omit<BlogArticle, 'number'>[] = [
  { slug: 'choisir-ciment-projet', image: '/images/cement-bags.jpg', datePublished: '2026-01-15', dateDisplay: '15 Janvier 2026', category: 'Conseils techniques' },
  { slug: 'capacite-500k-tonnes', image: '/images/factory-exterior.jpg', datePublished: '2025-12-20', dateDisplay: '20 Décembre 2025', category: 'Actualités' },
  { slug: 'normes-ciment-maroc', image: '/images/quality-lab.jpg', datePublished: '2025-11-05', dateDisplay: '5 Novembre 2025', category: 'Réglementation' },
  { slug: 'construction-durable-ciment', image: '/images/sustainability.jpg', datePublished: '2025-10-10', dateDisplay: '10 Octobre 2025', category: 'Durabilité' },
  { slug: 'projet-infrastructure-dakhla', image: '/images/construction-site.jpg', datePublished: '2025-09-25', dateDisplay: '25 Septembre 2025', category: 'Projets' },
  { slug: 'stockage-ciment-chantier', image: '/images/grinding-process.jpg', datePublished: '2025-08-12', dateDisplay: '12 Août 2025', category: 'Conseils techniques' },
  { slug: 'cpj45-vs-cpj55-guide', image: '/images/products/cpj45-bags.jpg', datePublished: '2025-07-01', dateDisplay: '1 Juillet 2025', category: 'Conseils techniques' },
  { slug: 'calculer-quantite-ciment', image: '/images/construction-site.jpg', datePublished: '2025-06-15', dateDisplay: '15 Juin 2025', category: 'Conseils techniques' },
  { slug: 'beton-arme-maroc', image: '/images/projects/villa-construction.jpg', datePublished: '2025-06-01', dateDisplay: '1 Juin 2025', category: 'Conseils techniques' },
  { slug: 'dakhla-pole-developpement', image: '/images/dakhla-aerial.jpg', datePublished: '2025-05-20', dateDisplay: '20 Mai 2025', category: 'Actualités' },
  { slug: 'role-gypse-ciment', image: '/images/process/step2-grinding.jpg', datePublished: '2025-05-05', dateDisplay: '5 Mai 2025', category: 'Conseils techniques' },
  { slug: 'conditionnement-vrac', image: '/images/products/bulk-cement-truck.jpg', datePublished: '2025-04-15', dateDisplay: '15 Avril 2025', category: 'Conseils techniques' },
  { slug: 'construction-zone-cotiere', image: '/images/projects/port-construction.jpg', datePublished: '2025-04-01', dateDisplay: '1 Avril 2025', category: 'Conseils techniques' },
  { slug: '10-ans-excellence', image: '/images/factory/factory-exterior.jpg', datePublished: '2025-03-15', dateDisplay: '15 Mars 2025', category: 'Actualités' },
  { slug: 'devenir-revendeur', image: '/images/products/big-bag-cement.jpg', datePublished: '2025-03-01', dateDisplay: '1 Mars 2025', category: 'Actualités' },
  { slug: 'transport-ciment-logistique', image: '/images/delivery/concrete-delivery.jpg', datePublished: '2025-02-15', dateDisplay: '15 Février 2025', category: 'Conseils techniques' },
  { slug: 'rse-communaute-dakhla', image: '/images/sustainability.jpg', datePublished: '2025-02-01', dateDisplay: '1 Février 2025', category: 'Durabilité' },
  { slug: 'essais-resistance-ciment', image: '/images/lab/lab-compression-test.jpg', datePublished: '2025-01-15', dateDisplay: '15 Janvier 2025', category: 'Conseils techniques' },
  { slug: 'big-bag-vs-sacs', image: '/images/products/cpj55-bags.jpg', datePublished: '2025-01-01', dateDisplay: '1 Janvier 2025', category: 'Conseils techniques' },
  { slug: '5-erreurs-ciment', image: '/images/cement-bags.jpg', datePublished: '2024-12-15', dateDisplay: '15 Décembre 2024', category: 'Conseils techniques' },
];

export const BLOG_ARTICLES: BlogArticle[] = RAW_ARTICLES.map((a, i) => ({
  ...a,
  number: i + 1,
}));

export const BLOG_SLUGS: string[] = BLOG_ARTICLES.map((a) => a.slug);

/** Map slug → article number */
export const ARTICLE_MAP: Record<string, number> = Object.fromEntries(
  BLOG_ARTICLES.map((a) => [a.slug, a.number]),
);

/** Map slug → image path */
export const ARTICLE_IMAGES: Record<string, string> = Object.fromEntries(
  BLOG_ARTICLES.map((a) => [a.slug, a.image]),
);

/** Get article by slug */
export function getArticle(slug: string): BlogArticle | undefined {
  return BLOG_ARTICLES.find((a) => a.slug === slug);
}

/** Get article by number */
export function getArticleByNumber(num: number): BlogArticle | undefined {
  return BLOG_ARTICLES.find((a) => a.number === num);
}

/** SEO keyword suggestions per article (for metadata + BlogPosting keywords) */
export const ARTICLE_KEYWORDS: Record<string, string[]> = {
  'choisir-ciment-projet': ['choisir ciment', 'ciment construction', 'CPJ 45 CPJ 55', 'ciment Maroc'],
  'capacite-500k-tonnes': ['capacité ciment', 'production ciment Maroc', 'broyage clinker Dakhla'],
  'normes-ciment-maroc': ['norme ciment Maroc', 'NM 10.1.004', 'EN 197-1', 'norme ciment'],
  'construction-durable-ciment': ['ciment durable', 'empreinte carbone ciment', 'construction écologique Maroc'],
  'projet-infrastructure-dakhla': ['infrastructure Dakhla', 'projet ciment', 'génie civil Maroc'],
  'stockage-ciment-chantier': ['stockage ciment', 'ciment chantier', 'conservation ciment'],
  'cpj45-vs-cpj55-guide': ['CPJ 45 vs CPJ 55', 'comparatif ciment', 'différence CPJ', 'ciment Maroc'],
  'calculer-quantite-ciment': ['calculer quantité ciment', 'dosage ciment', 'quantité béton'],
  'beton-arme-maroc': ['béton armé Maroc', 'béton Maroc', 'armature béton'],
  'dakhla-pole-developpement': ['Dakhla développement', 'Sud Maroc', 'investissement Dakhla'],
  'role-gypse-ciment': ['gypse ciment', 'fabrication ciment', 'composition ciment'],
  'conditionnement-vrac': ['ciment vrac', 'conditionnement ciment', 'ciment camion citerne'],
  'construction-zone-cotiere': ['construction zone côtière', 'ciment bord de mer', 'ciment Dakhla'],
  '10-ans-excellence': ['Dakhla Aménagement', '10 ans ciment', 'histoire cimenterie Maroc'],
  'devenir-revendeur': ['revendeur ciment', 'distributeur ciment Maroc', 'business ciment'],
  'transport-ciment-logistique': ['transport ciment', 'logistique ciment', 'livraison ciment Maroc'],
  'rse-communaute-dakhla': ['RSE ciment', 'responsabilité sociale', 'Dakhla communauté'],
  'essais-resistance-ciment': ['essai résistance ciment', 'test ciment', 'laboratoire ciment'],
  'big-bag-vs-sacs': ['big bag ciment', 'sacs ciment 50kg', 'conditionnement ciment Maroc'],
  '5-erreurs-ciment': ['erreurs ciment', 'utilisation ciment', 'conseils ciment'],
};
