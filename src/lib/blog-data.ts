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
  /** ISO 8601 date of last update for schema.org dateModified */
  dateModified: string;
  /** Human-readable date (FR) */
  dateDisplay: string;
  /** Human-readable last updated date (FR) */
  dateModifiedDisplay: string;
  category: string;
}

const RAW_ARTICLES: Omit<BlogArticle, 'number'>[] = [
  { slug: 'choisir-ciment-projet', image: '/images/cement-bags.jpg', datePublished: '2026-01-15', dateModified: '2026-02-10', dateDisplay: '15 Janvier 2026', dateModifiedDisplay: '10 Février 2026', category: 'Conseils techniques' },
  { slug: 'capacite-500k-tonnes', image: '/images/factory-exterior.jpg', datePublished: '2025-12-20', dateModified: '2026-01-08', dateDisplay: '20 Décembre 2025', dateModifiedDisplay: '8 Janvier 2026', category: 'Actualités' },
  { slug: 'normes-ciment-maroc', image: '/images/quality-lab.jpg', datePublished: '2025-11-05', dateModified: '2025-12-01', dateDisplay: '5 Novembre 2025', dateModifiedDisplay: '1 Décembre 2025', category: 'Réglementation' },
  { slug: 'construction-durable-ciment', image: '/images/sustainability.jpg', datePublished: '2025-10-10', dateModified: '2025-11-05', dateDisplay: '10 Octobre 2025', dateModifiedDisplay: '5 Novembre 2025', category: 'Durabilité' },
  { slug: 'projet-infrastructure-dakhla', image: '/images/construction-site.jpg', datePublished: '2025-09-25', dateModified: '2025-10-20', dateDisplay: '25 Septembre 2025', dateModifiedDisplay: '20 Octobre 2025', category: 'Projets' },
  { slug: 'stockage-ciment-chantier', image: '/images/grinding-process.jpg', datePublished: '2025-08-12', dateModified: '2025-09-10', dateDisplay: '12 Août 2025', dateModifiedDisplay: '10 Septembre 2025', category: 'Conseils techniques' },
  { slug: 'cpj45-vs-cpj55-guide', image: '/images/products/cpj45-bags.jpg', datePublished: '2025-07-01', dateModified: '2025-08-05', dateDisplay: '1 Juillet 2025', dateModifiedDisplay: '5 Août 2025', category: 'Conseils techniques' },
  { slug: 'calculer-quantite-ciment', image: '/images/construction-site.jpg', datePublished: '2025-06-15', dateModified: '2025-07-10', dateDisplay: '15 Juin 2025', dateModifiedDisplay: '10 Juillet 2025', category: 'Conseils techniques' },
  { slug: 'beton-arme-maroc', image: '/images/projects/villa-construction.jpg', datePublished: '2025-06-01', dateModified: '2025-06-28', dateDisplay: '1 Juin 2025', dateModifiedDisplay: '28 Juin 2025', category: 'Conseils techniques' },
  { slug: 'dakhla-pole-developpement', image: '/images/dakhla-aerial.jpg', datePublished: '2025-05-20', dateModified: '2025-06-15', dateDisplay: '20 Mai 2025', dateModifiedDisplay: '15 Juin 2025', category: 'Actualités' },
  { slug: 'role-gypse-ciment', image: '/images/process/step2-grinding.jpg', datePublished: '2025-05-05', dateModified: '2025-06-01', dateDisplay: '5 Mai 2025', dateModifiedDisplay: '1 Juin 2025', category: 'Conseils techniques' },
  { slug: 'conditionnement-vrac', image: '/images/products/bulk-cement-truck.jpg', datePublished: '2025-04-15', dateModified: '2025-05-10', dateDisplay: '15 Avril 2025', dateModifiedDisplay: '10 Mai 2025', category: 'Conseils techniques' },
  { slug: 'construction-zone-cotiere', image: '/images/projects/port-construction.jpg', datePublished: '2025-04-01', dateModified: '2025-04-28', dateDisplay: '1 Avril 2025', dateModifiedDisplay: '28 Avril 2025', category: 'Conseils techniques' },
  { slug: '10-ans-excellence', image: '/images/factory/factory-exterior.jpg', datePublished: '2025-03-15', dateModified: '2025-04-10', dateDisplay: '15 Mars 2025', dateModifiedDisplay: '10 Avril 2025', category: 'Actualités' },
  { slug: 'devenir-revendeur', image: '/images/products/big-bag-cement.jpg', datePublished: '2025-03-01', dateModified: '2025-03-28', dateDisplay: '1 Mars 2025', dateModifiedDisplay: '28 Mars 2025', category: 'Actualités' },
  { slug: 'transport-ciment-logistique', image: '/images/delivery/concrete-delivery.jpg', datePublished: '2025-02-15', dateModified: '2025-03-10', dateDisplay: '15 Février 2025', dateModifiedDisplay: '10 Mars 2025', category: 'Conseils techniques' },
  { slug: 'rse-communaute-dakhla', image: '/images/sustainability.jpg', datePublished: '2025-02-01', dateModified: '2025-02-25', dateDisplay: '1 Février 2025', dateModifiedDisplay: '25 Février 2025', category: 'Durabilité' },
  { slug: 'essais-resistance-ciment', image: '/images/lab/lab-compression-test.jpg', datePublished: '2025-01-15', dateModified: '2025-02-05', dateDisplay: '15 Janvier 2025', dateModifiedDisplay: '5 Février 2025', category: 'Conseils techniques' },
  { slug: 'big-bag-vs-sacs', image: '/images/products/cpj55-bags.jpg', datePublished: '2025-01-01', dateModified: '2025-01-20', dateDisplay: '1 Janvier 2025', dateModifiedDisplay: '20 Janvier 2025', category: 'Conseils techniques' },
  { slug: '5-erreurs-ciment', image: '/images/cement-bags.jpg', datePublished: '2024-12-15', dateModified: '2025-01-05', dateDisplay: '15 Décembre 2024', dateModifiedDisplay: '5 Janvier 2025', category: 'Conseils techniques' },
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

/**
 * HowTo steps for guide articles — enables Google featured snippets.
 * Only guide-type articles have HowTo data.
 */
export const ARTICLE_HOWTO: Record<string, { name: string; text: string }[]> = {
  'choisir-ciment-projet': [
    { name: 'Identifier le type de projet', text: 'Déterminez si votre projet est du béton armé courant, un dallage, une fondation, ou un ouvrage de génie civil exigeant.' },
    { name: 'Choisir la classe de résistance', text: 'Sélectionnez CPJ 45 (45 MPa) pour le courant, ou CPJ 55 (55 MPa) pour les ouvrages exigeants et zones côtières.' },
    { name: 'Vérifier la conformité aux normes', text: 'Assurez-vous que le ciment est conforme à NM 10.1.004 et EN 197-1. Demandez les fiches techniques.' },
    { name: 'Choisir le conditionnement', text: 'Vrac pour gros chantiers (min. 30T), sacs 50kg pour la maçonnerie, big bag 1T pour chantiers moyens.' },
    { name: 'Demander un devis', text: 'Contactez le producteur pour un devis personnalisé incluant prix et livraison.' },
  ],
  'calculer-quantite-ciment': [
    { name: 'Déterminer le volume de béton', text: 'Calculez le volume en m³ : longueur × largeur × épaisseur de l\'ouvrage à couler.' },
    { name: 'Appliquer le dosage', text: 'Utilisez 350 kg/m³ pour du béton armé courant, 400 kg/m³ pour haute résistance, 300 kg/m³ pour fondations.' },
    { name: 'Calculer la quantité de ciment', text: 'Multipliez le volume par le dosage : Quantité (kg) = Volume (m³) × Dosage (kg/m³).' },
    { name: 'Convertir en tonnes', text: 'Divisez par 1000 pour obtenir des tonnes. Ajoutez 5-10% de marge pour les pertes.' },
    { name: 'Commander le ciment', text: 'Commandez la quantité arrondie à la tonne supérieure auprès de Dakhla Aménagement.' },
  ],
  'stockage-ciment-chantier': [
    { name: 'Choisir un local sec', text: 'Stockez le ciment dans un local fermé, sec et ventilé, à l\'abri de l\'humidité et de la pluie.' },
    { name: 'Surélever les sacs', text: 'Placez les sacs sur des palettes en bois, à au moins 10 cm du sol et 30 cm des murs.' },
    { name: 'Empiler correctement', text: 'Empilez les sacs à plat, maximum 10 couches, pour éviter l\'écrasement et faciliter la manutention.' },
    { name: 'Respecter le FIFO', text: 'Utilisez le ciment selon le principe Premier Entré, Premier Sorti pour respecter la date de péremption (3 mois).' },
    { name: 'Vérifier avant usage', text: 'Avant utilisation, vérifiez l\'absence de grumeaux. Un ciment pris en masse doit être rejeté.' },
  ],
  'cpj45-vs-cpj55-guide': [
    { name: 'Comparer la résistance', text: 'CPJ 45 offre 45 MPa, idéal pour béton armé courant. CPJ 55 offre 55 MPa, pour ouvrages exigeants.' },
    { name: 'Évaluer l\'usage', text: 'CPJ 45 : dallages, fondations, maçonnerie. CPJ 55 : génie civil, infrastructure, zone côtière.' },
    { name: 'Considérer le prix', text: 'CPJ 45 : dès 1 500 DH/T. CPJ 55 : dès 1 600 DH/T. Le surcoût est justifié pour les ouvrages exigeants.' },
    { name: 'Vérifier les normes', text: 'Les deux sont conformes NM 10.1.004 et EN 197-1, testés en laboratoire.' },
    { name: 'Choisir selon l\'environnement', text: 'Zone côtière ou agressive : CPJ 55. Construction courante : CPJ 45 suffit.' },
  ],
  'conditionnement-vrac': [
    { name: 'Évaluer le volume nécessaire', text: 'Le vrac nécessite un minimum de 30 tonnes. Calculez votre besoin total pour optimiser le coût.' },
    { name: 'Vérifier la présence d\'un silo', text: 'Le vrac nécessite un silo de stockage sur chantier. Vérifiez sa capacité et son accessibilité.' },
    { name: 'Préparer l\'accès camion', text: 'Assurez que le camion-citerne (30T) puisse accéder au silo : aire de manœuvre, solidité du sol.' },
    { name: 'Planifier la livraison', text: 'Contactez DAM au +212 658-265685 pour planifier. Délai 24h à Dakhla, 72h dans le Sud marocain.' },
    { name: 'Pomper le ciment', text: 'Le chauffeur connecte le tuyau de pompage au silo. Le ciment est transféré automatiquement en 20-30 min.' },
  ],
  'big-bag-vs-sacs': [
    { name: 'Évaluer le volume', text: 'Moins de 5T : sacs 50kg. 5-30T sans silo : big bag. Plus de 30T avec silo : vrac.' },
    { name: 'Vérifier la manutention', text: 'Big bag nécessite grue ou chariot élévateur. Sacs : manutention manuelle possible.' },
    { name: 'Considérer le stockage', text: 'Big bag : protection humidité intégrée, stockage extérieur possible. Sacs : local sec obligatoire.' },
    { name: 'Comparer les prix', text: 'Vrac 1500 DH/T < Sacs 1550 DH/T < Big bag 1580 DH/T. Le vrac est le plus économique.' },
    { name: 'Choisir selon le chantier', text: 'Gros chantier avec silo : vrac. Chantier moyen avec grue : big bag. Petit chantier : sacs.' },
  ],
  '5-erreurs-ciment': [
    { name: 'Ajouter trop d\'eau', text: 'Erreur n°1 : excès d\'eau réduit la résistance. Respectez le rapport E/C (0.45 à 0.55).' },
    { name: 'Stocker mal le ciment', text: 'Erreur n°2 : humidité = prise prématurée. Stockez en local sec sur palettes, max 3 mois.' },
    { name: 'Mélanger les ciments', text: 'Erreur n°3 : ne jamais mélanger CPJ 45 et CPJ 55 sur un même ouvrage. Cohérence indispensable.' },
    { name: 'Négliger la cure', text: 'Erreur n°4 : sans cure (maintien humidité 7 jours), le béton fissure et perd 30% de résistance.' },
    { name: 'Ignorer les normes', text: 'Erreur n°5 : exigez la conformité NM 10.1.004. Un ciment non conforme compromet l\'ouvrage.' },
  ],
  'essais-resistance-ciment': [
    { name: 'Préparer les éprouvettes', text: 'Confectionnez 3 éprouvettes 16×32 cm par échéance (7j, 28j) selon EN 196-1.' },
    { name: 'Respecter la cure', text: 'Stockez les éprouvettes en chambre humide (20°C, 95% HR) jusqu\'aux essais.' },
    { name: 'Tester à 7 jours', text: 'Cassez 3 éprouvettes à 7j en compression. Résistance attendue : ~70% de la classe.' },
    { name: 'Tester à 28 jours', text: 'Cassez 3 éprouvettes à 28j. C\'est la résistance de référence (45 ou 55 MPa).' },
    { name: 'Analyser les résultats', text: 'Calculez la moyenne. Si < 90% de la classe : lot non conforme. Contactez le producteur.' },
  ],
  'beton-arme-maroc': [
    { name: 'Choisir le ciment', text: 'Utilisez CPJ 45 (béton courant) ou CPJ 55 (ouvrages exigeants). Conforme NM 10.1.004.' },
    { name: 'Calculer le dosage', text: 'Béton armé courant : 350 kg/m³. Haute résistance : 400 kg/m³. Fondations : 300 kg/m³.' },
    { name: 'Préparer les armatures', text: 'Utilisez des aciers HA (haute adhérence). Enrobage minimum 3-5 cm selon environnement.' },
    { name: 'Couler le béton', text: 'Malaxez 1-2 min, versez par couches de 30cm, vibrez pour éliminer l\'air. Évitez la ségrégation.' },
    { name: 'Curer le béton', text: 'Maintenez l\'humidité 7 jours minimum (arrosage, film, géotextile). Essentiel pour la résistance.' },
  ],
  'construction-zone-cotiere': [
    { name: 'Choisir le bon ciment', text: 'En zone côtière, utilisez CPJ 55 (55 MPa) pour sa meilleure résistance aux agressions.' },
    { name: 'Augmenter l\'enrobage', text: 'Enrobage minimum 5 cm en zone côtière (vs 3 cm standard) pour protéger les armatures.' },
    { name: 'Réduire le rapport E/C', text: 'Visez E/C ≤ 0.45 pour limiter la porosité et la pénétration des chlorures.' },
    { name: 'Soigner la cure', text: 'Cure prolongée 10-14 jours en zone côtière pour maximiser l\'étanchéité du béton.' },
    { name: 'Vérifier les normes', text: 'Conformité NM 10.1.004 obligatoire. Demandez les fiches techniques et certificats.' },
  ],
};

/**
 * Internal links from blog articles to relevant landing pages.
 * Maps article slug → array of { label, href } for contextual internal linking.
 * Improves PageRank distribution and topical authority.
 */
export const ARTICLE_INTERNAL_LINKS: Record<string, { label: string; href: string }[]> = {
  'choisir-ciment-projet': [
    { label: 'Ciment CPJ 45', href: '/cpj-45' },
    { label: 'Ciment CPJ 55', href: '/cpj-55' },
    { label: 'Comparer CPJ 45 vs CPJ 55', href: '/produits' },
    { label: 'Demander un devis', href: '/devis' },
  ],
  'capacite-500k-tonnes': [
    { label: 'Notre processus de fabrication', href: '/processus' },
    { label: 'À propos de Dakhla Aménagement', href: '/a-propos' },
    { label: 'Nos réalisations', href: '/realisations' },
  ],
  'normes-ciment-maroc': [
    { label: 'Ciment Maroc — Guide complet', href: '/ciment-maroc' },
    { label: 'Nos produits CPJ 45 & CPJ 55', href: '/produits' },
    { label: 'Documents & certifications', href: '/documents' },
  ],
  'construction-durable-ciment': [
    { label: 'Durabilité & RSE', href: '/durabilite' },
    { label: 'Ciment Maroc — Guide complet', href: '/ciment-maroc' },
  ],
  'projet-infrastructure-dakhla': [
    { label: 'Génie civil & ciment', href: '/genie-civil-ciment' },
    { label: 'Nos réalisations', href: '/realisations' },
    { label: 'Ciment Dakhla', href: '/ciment-dakhla' },
  ],
  'stockage-ciment-chantier': [
    { label: 'Ciment en sacs 50kg', href: '/ciment-sacs' },
    { label: 'Ciment Big Bag 1T', href: '/ciment-big-bag' },
    { label: 'Nos produits', href: '/produits' },
  ],
  'cpj45-vs-cpj55-guide': [
    { label: 'Ciment CPJ 45', href: '/cpj-45' },
    { label: 'Ciment CPJ 55', href: '/cpj-55' },
    { label: 'Prix du ciment', href: '/prix-ciment' },
    { label: 'Demander un devis', href: '/devis' },
  ],
  'calculer-quantite-ciment': [
    { label: 'Béton armé au Maroc', href: '/beton-arme-maroc' },
    { label: 'Prix du ciment', href: '/prix-ciment' },
    { label: 'Demander un devis', href: '/devis' },
  ],
  'beton-arme-maroc': [
    { label: 'Béton armé — Guide complet', href: '/beton-arme-maroc' },
    { label: 'Ciment CPJ 45', href: '/cpj-45' },
    { label: 'Ciment CPJ 55', href: '/cpj-55' },
  ],
  'dakhla-pole-developpement': [
    { label: 'Ciment Dakhla', href: '/ciment-dakhla' },
    { label: 'Construction à Dakhla', href: '/construction-dakhla' },
    { label: 'Ciment Sud Maroc', href: '/ciment-sud-maroc' },
  ],
  'role-gypse-ciment': [
    { label: 'Notre processus de fabrication', href: '/processus' },
    { label: 'Lexique du ciment', href: '/lexique-ciment' },
  ],
  'conditionnement-vrac': [
    { label: 'Ciment en vrac', href: '/ciment-vrac' },
    { label: 'Ciment en sacs', href: '/ciment-sacs' },
    { label: 'Ciment Big Bag', href: '/ciment-big-bag' },
    { label: 'Livraison ciment', href: '/livraison-ciment' },
  ],
  'construction-zone-cotiere': [
    { label: 'Construction à Dakhla', href: '/construction-dakhla' },
    { label: 'Ciment CPJ 55', href: '/cpj-55' },
    { label: 'Génie civil & ciment', href: '/genie-civil-ciment' },
  ],
  '10-ans-excellence': [
    { label: 'À propos de Dakhla Aménagement', href: '/a-propos' },
    { label: 'Nos réalisations', href: '/realisations' },
  ],
  'devenir-revendeur': [
    { label: 'Fournisseur ciment Maroc', href: '/fournisseur-ciment-maroc' },
    { label: 'Contactez-nous', href: '/contact' },
  ],
  'transport-ciment-logistique': [
    { label: 'Livraison ciment', href: '/livraison-ciment' },
    { label: 'Ciment en vrac', href: '/ciment-vrac' },
    { label: 'Zones de livraison', href: '/ciment-sud-maroc' },
  ],
  'rse-communaute-dakhla': [
    { label: 'Durabilité & RSE', href: '/durabilite' },
    { label: 'Ciment Dakhla', href: '/ciment-dakhla' },
  ],
  'essais-resistance-ciment': [
    { label: 'Notre processus de fabrication', href: '/processus' },
    { label: 'Documents & certifications', href: '/documents' },
    { label: 'Lexique du ciment', href: '/lexique-ciment' },
  ],
  'big-bag-vs-sacs': [
    { label: 'Ciment en sacs 50kg', href: '/ciment-sacs' },
    { label: 'Ciment Big Bag 1T', href: '/ciment-big-bag' },
    { label: 'Ciment en vrac', href: '/ciment-vrac' },
    { label: 'Prix du ciment', href: '/prix-ciment' },
  ],
  '5-erreurs-ciment': [
    { label: 'Stockage du ciment', href: '/blog/stockage-ciment-chantier' },
    { label: 'CPJ 45 vs CPJ 55', href: '/blog/cpj45-vs-cpj55-guide' },
    { label: 'Lexique du ciment', href: '/lexique-ciment' },
  ],
};

/**
 * Reverse mapping: landing page path → relevant blog article slugs.
 * Used for bidirectional internal linking from landing pages back to blog articles.
 */
export const LANDING_PAGE_ARTICLES: Record<string, string[]> = {
  '/cpj-45': ['choisir-ciment-projet', 'cpj45-vs-cpj55-guide', 'calculer-quantite-ciment', 'beton-arme-maroc'],
  '/cpj-55': ['choisir-ciment-projet', 'cpj45-vs-cpj55-guide', 'construction-zone-cotiere', 'essais-resistance-ciment'],
  '/ciment-vrac': ['conditionnement-vrac', 'transport-ciment-logistique', 'big-bag-vs-sacs'],
  '/ciment-sacs': ['stockage-ciment-chantier', 'big-bag-vs-sacs', 'conditionnement-vrac'],
  '/ciment-big-bag': ['big-bag-vs-sacs', 'stockage-ciment-chantier', 'conditionnement-vrac'],
  '/ciment-maroc': ['choisir-ciment-projet', 'normes-ciment-maroc', 'cpj45-vs-cpj55-guide', 'dakhla-pole-developpement'],
  '/prix-ciment': ['cpj45-vs-cpj55-guide', 'big-bag-vs-sacs', 'calculer-quantite-ciment'],
  '/livraison-ciment': ['transport-ciment-logistique', 'conditionnement-vrac', 'dakhla-pole-developpement'],
  '/beton-arme-maroc': ['beton-arme-maroc', 'calculer-quantite-ciment', '5-erreurs-ciment'],
  '/genie-civil-ciment': ['projet-infrastructure-dakhla', 'construction-zone-cotiere', 'essais-resistance-ciment'],
  '/construction-dakhla': ['construction-zone-cotiere', 'dakhla-pole-developpement', 'projet-infrastructure-dakhla'],
  '/fournisseur-ciment-maroc': ['devenir-revendeur', 'capacite-500k-tonnes', 'transport-ciment-logistique'],
  '/ciment-dakhla': ['dakhla-pole-developpement', 'projet-infrastructure-dakhla', 'rse-communaute-dakhla'],
  '/ciment-sud-maroc': ['dakhla-pole-developpement', 'transport-ciment-logistique', 'projet-infrastructure-dakhla'],
  '/ciment-mauritanie': ['transport-ciment-logistique', 'dakhla-pole-developpement'],
};

/**
 * Product links with icons and descriptions for blog article "Related Products" section.
 * Maps article slug → array of product links (styled cards).
 * Reverse of RelatedArticles: shows landing page cards on blog articles.
 */
export const ARTICLE_PRODUCTS: Record<string, { label: string; href: string; description: string; icon: 'cement' | 'package' | 'truck' | 'price' | 'building'; badge?: string }[]> = {
  'choisir-ciment-projet': [
    { label: 'Ciment CPJ 45', href: '/cpj-45', description: '45 MPa — béton armé, dallages, fondations. Dès 1 500 DH/T.', icon: 'cement', badge: '1 500 DH/T' },
    { label: 'Ciment CPJ 55', href: '/cpj-55', description: '55 MPa — génie civil, infrastructure, zone côtière. Dès 1 600 DH/T.', icon: 'cement', badge: '1 600 DH/T' },
    { label: 'Prix du Ciment', href: '/prix-ciment', description: 'Tableau complet des prix par conditionnement.', icon: 'price' },
    { label: 'Demander un Devis', href: '/devis', description: 'Devis gratuit personnalisé sous 24h.', icon: 'package' },
  ],
  'cpj45-vs-cpj55-guide': [
    { label: 'Ciment CPJ 45', href: '/cpj-45', description: '45 MPa pour béton armé courant.', icon: 'cement', badge: '1 500 DH/T' },
    { label: 'Ciment CPJ 55', href: '/cpj-55', description: '55 MPa pour ouvrages exigeants.', icon: 'cement', badge: '1 600 DH/T' },
    { label: 'Prix du Ciment', href: '/prix-ciment', description: 'Comparez les prix CPJ 45 et CPJ 55.', icon: 'price' },
  ],
  'calculer-quantite-ciment': [
    { label: 'Demander un Devis', href: '/devis', description: 'Calcul du prix selon votre quantité.', icon: 'package' },
    { label: 'Prix du Ciment', href: '/prix-ciment', description: 'Tarifs par tonne et conditionnement.', icon: 'price' },
  ],
  'conditionnement-vrac': [
    { label: 'Ciment en Vrac', href: '/ciment-vrac', description: 'Livraison camion-citerne, min. 30T.', icon: 'truck' },
    { label: 'Ciment en Sacs', href: '/ciment-sacs', description: 'Sacs 50kg, palettes 1T.', icon: 'package' },
    { label: 'Big Bag 1T', href: '/ciment-big-bag', description: 'Manutention par grue ou chariot.', icon: 'package' },
  ],
  'big-bag-vs-sacs': [
    { label: 'Ciment en Sacs', href: '/ciment-sacs', description: 'Sacs 50kg pour maçonnerie.', icon: 'package' },
    { label: 'Big Bag 1T', href: '/ciment-big-bag', description: 'Pour chantiers moyens.', icon: 'package' },
    { label: 'Ciment en Vrac', href: '/ciment-vrac', description: 'Pour gros chantiers.', icon: 'truck' },
  ],
  'stockage-ciment-chantier': [
    { label: 'Ciment en Sacs', href: '/ciment-sacs', description: 'Sacs 50kg avec palettes.', icon: 'package' },
    { label: 'Big Bag 1T', href: '/ciment-big-bag', description: 'Protection humidité intégrée.', icon: 'package' },
  ],
  'beton-arme-maroc': [
    { label: 'Ciment CPJ 45', href: '/cpj-45', description: 'Idéal pour béton armé courant.', icon: 'cement', badge: '1 500 DH/T' },
    { label: 'Ciment CPJ 55', href: '/cpj-55', description: 'Pour béton haute résistance.', icon: 'cement', badge: '1 600 DH/T' },
    { label: 'Béton Armé Maroc', href: '/beton-arme-maroc', description: 'Guide complet béton armé.', icon: 'building' },
  ],
  'construction-zone-cotiere': [
    { label: 'Ciment CPJ 55', href: '/cpj-55', description: 'Recommandé pour zone côtière.', icon: 'cement', badge: '1 600 DH/T' },
    { label: 'Construction Dakhla', href: '/construction-dakhla', description: 'Guide construction côtière.', icon: 'building' },
  ],
  'transport-ciment-logistique': [
    { label: 'Livraison Ciment', href: '/livraison-ciment', description: 'Zones et délais de livraison.', icon: 'truck' },
    { label: 'Ciment en Vrac', href: '/ciment-vrac', description: 'Camion-citerne avec pompage.', icon: 'truck' },
  ],
  'dakhla-pole-developpement': [
    { label: 'Ciment Dakhla', href: '/ciment-dakhla', description: 'Producteur local à Dakhla.', icon: 'cement' },
    { label: 'Construction Dakhla', href: '/construction-dakhla', description: 'Guide construction locale.', icon: 'building' },
  ],
  'normes-ciment-maroc': [
    { label: 'Ciment Maroc', href: '/ciment-maroc', description: 'Guide complet du ciment au Maroc.', icon: 'cement' },
    { label: 'Nos Produits', href: '/produits', description: 'CPJ 45 et CPJ 55 conformes.', icon: 'package' },
  ],
  'devenir-revendeur': [
    { label: 'Fournisseur Ciment', href: '/fournisseur-ciment-maroc', description: 'Solutions B2B et comptes pro.', icon: 'building' },
    { label: 'Contact', href: '/contact', description: 'Contactez notre équipe commerciale.', icon: 'package' },
  ],
  'essais-resistance-ciment': [
    { label: 'Notre Processus', href: '/processus', description: 'Fabrication et contrôle qualité.', icon: 'cement' },
    { label: 'Documents', href: '/documents', description: 'Fiches techniques et certificats.', icon: 'package' },
  ],
  'projet-infrastructure-dakhla': [
    { label: 'Génie Civil', href: '/genie-civil-ciment', description: 'Ciment pour grands ouvrages.', icon: 'building' },
    { label: 'Nos Réalisations', href: '/realisations', description: 'Projets infrastructure.', icon: 'building' },
  ],
  'capacite-500k-tonnes': [
    { label: 'Notre Processus', href: '/processus', description: 'Centre de broyage 500K T/an.', icon: 'cement' },
    { label: 'À Propos', href: '/a-propos', description: 'Dakhla Aménagement depuis 2015.', icon: 'building' },
  ],
  'construction-durable-ciment': [
    { label: 'Durabilité', href: '/durabilite', description: 'Engagement RSE et éco-responsable.', icon: 'building' },
    { label: 'Ciment Maroc', href: '/ciment-maroc', description: 'Guide complet du ciment.', icon: 'cement' },
  ],
  'role-gypse-ciment': [
    { label: 'Notre Processus', href: '/processus', description: 'Broyage clinker et additions.', icon: 'cement' },
    { label: 'Lexique', href: '/lexique-ciment', description: 'Définitions techniques.', icon: 'package' },
  ],
  'rse-communaute-dakhla': [
    { label: 'Durabilité', href: '/durabilite', description: 'Engagement RSE communautaire.', icon: 'building' },
    { label: 'Ciment Dakhla', href: '/ciment-dakhla', description: 'Présence locale à Dakhla.', icon: 'cement' },
  ],
  '5-erreurs-ciment': [
    { label: 'CPJ 45 vs CPJ 55', href: '/blog/cpj45-vs-cpj55-guide', description: 'Guide comparatif complet.', icon: 'cement' },
    { label: 'Stockage du Ciment', href: '/blog/stockage-ciment-chantier', description: 'Bonnes pratiques stockage.', icon: 'package' },
    { label: 'Lexique', href: '/lexique-ciment', description: 'Termes techniques.', icon: 'package' },
  ],
  '10-ans-excellence': [
    { label: 'À Propos', href: '/a-propos', description: 'Notre histoire depuis 2015.', icon: 'building' },
    { label: 'Réalisations', href: '/realisations', description: 'Nos projets marquants.', icon: 'building' },
  ],
};
