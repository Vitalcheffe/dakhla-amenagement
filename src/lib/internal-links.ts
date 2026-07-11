/**
 * Internal linking data — reusable related-links configurations.
 * Used by RelatedLinks component across all pages to build a strong internal link graph.
 */

import type { RelatedLink } from '@/components/shared/RelatedLinks';

/** Links for product-related pages */
export const PRODUCT_RELATED: RelatedLink[] = [
  {
    title: 'Ciment CPJ 45',
    description: 'Ciment Portland Composé 45 MPa — béton armé, dallages, fondations. Dès 1 500 DH/T.',
    href: '/cpj-45',
  },
  {
    title: 'Ciment CPJ 55',
    description: 'Ciment Portland Composé 55 MPa — génie civil, infrastructure, zone côtière. Dès 1 600 DH/T.',
    href: '/cpj-55',
  },
  {
    title: 'Ciment en Vrac',
    description: 'Livraison par camion-citerne avec pompage direct en silo. Idéal gros chantiers.',
    href: '/ciment-vrac',
  },
  {
    title: 'Sacs 50kg',
    description: 'Conditionnement classique pour maçonnerie et petits chantiers. Palettes 1T.',
    href: '/ciment-sacs',
  },
  {
    title: 'Big Bag 1T',
    description: 'Manutention facile par grue ou chariot. Parfait pour chantiers moyens.',
    href: '/ciment-big-bag',
  },
  {
    title: 'Comparer CPJ 45 vs CPJ 55',
    description: 'Guide comparatif complet pour choisir le bon ciment selon votre projet.',
    href: '/blog/cpj45-vs-cpj55-guide',
  },
];

/** Links for regional/local SEO pages */
export const REGIONAL_RELATED: RelatedLink[] = [
  {
    title: 'Ciment Dakhla',
    description: 'Producteur de ciment à Dakhla. Livraison 24h sur tout le sud de la ville.',
    href: '/ciment-dakhla',
  },
  {
    title: 'Ciment Laâyoune',
    description: 'Livraison de ciment CPJ 45 et CPJ 55 à Laâyoune et région.',
    href: '/ciment-laayoune',
  },
  {
    title: 'Ciment Boujdour',
    description: 'Approvisionnement ciment pour les chantiers de Boujdour.',
    href: '/ciment-boujdour',
  },
  {
    title: 'Ciment Sud Maroc',
    description: 'Couverture complète du Sud marocain : Dakhla, Laâyoune, Tan-Tan, Guelmim.',
    href: '/ciment-sud-maroc',
  },
  {
    title: 'Ciment Mauritanie',
    description: 'Export de ciment vers la Mauritanie : Nouadhibou, Nouakchott.',
    href: '/ciment-mauritanie',
  },
];

/** Links for application/use-case pages */
export const APPLICATION_RELATED: RelatedLink[] = [
  {
    title: 'Béton Armé au Maroc',
    description: 'Ciment DAM pour béton armé : résistance, dosage, bonnes pratiques.',
    href: '/beton-arme-maroc',
  },
  {
    title: 'Génie Civil & Infrastructure',
    description: 'Ciment CPJ 55 pour grands ouvrages : ponts, barrages, ports.',
    href: '/genie-civil-ciment',
  },
  {
    title: 'Construction à Dakhla',
    description: 'Guide construction à Dakhla : choix du ciment, zone côtière, salinité.',
    href: '/construction-dakhla',
  },
  {
    title: 'Construction Zone Côtière',
    description: 'Résister à la corrosion marine : choisir le bon ciment et dosage.',
    href: '/blog/construction-zone-cotiere',
  },
];

/** Links for business/B2B pages */
export const BUSINESS_RELATED: RelatedLink[] = [
  {
    title: 'Fournisseur Ciment Maroc',
    description: 'Fournisseur de ciment CPJ 45 et CPJ 55 pour professionnels au Maroc.',
    href: '/fournisseur-ciment-maroc',
  },
  {
    title: 'Devenir Revendeur DAM',
    description: 'Programme revendeur ciment : partenariat, marges, zones exclusives.',
    href: '/blog/devenir-revendeur',
  },
  {
    title: 'Grossiste Ciment',
    description: 'Tarifs grossistes pour volumes importants. Dégressif selon quantité.',
    href: '/devis',
  },
  {
    title: 'Ciment pour Entreprises BTP',
    description: 'Solutions ciment pour entreprises BTP : compte pro, livraison récurrente.',
    href: '/devis',
  },
];

/** Links for technical/regulation pages */
export const TECHNICAL_RELATED: RelatedLink[] = [
  {
    title: 'Normes Ciment Maroc (NM 10.1.004)',
    description: 'Tout savoir sur la norme marocaine du ciment et la conformité EN 197-1.',
    href: '/blog/normes-ciment-maroc',
  },
  {
    title: 'Essais de Résistance du Ciment',
    description: 'Comment tester la résistance du ciment : compression, flexion, délais.',
    href: '/blog/essais-resistance-ciment',
  },
  {
    title: 'Stockage du Ciment sur Chantier',
    description: 'Bonnes pratiques de stockage pour préserver la qualité du ciment.',
    href: '/blog/stockage-ciment-chantier',
  },
  {
    title: 'Calculer la Quantité de Ciment',
    description: 'Méthode de calcul du dosage ciment selon le type d\'ouvrage.',
    href: '/blog/calculer-quantite-ciment',
  },
];

/** Links for pricing pages */
export const PRICING_RELATED: RelatedLink[] = [
  {
    title: 'Prix Ciment Maroc 2025',
    description: 'Tableau complet des prix CPJ 45 et CPJ 55 par conditionnement.',
    href: '/prix-ciment',
  },
  {
    title: 'Ciment Maroc — Guide Complet',
    description: 'Tout savoir sur le ciment au Maroc : types, prix, normes, fournisseurs.',
    href: '/ciment-maroc',
  },
  {
    title: 'Livraison Ciment',
    description: 'Zones de livraison, délais et logistique ciment au Maroc.',
    href: '/livraison-ciment',
  },
  {
    title: 'Demander un Devis',
    description: 'Devis gratuit personnalisé sous 24h. Tarifs dégressifs volume.',
    href: '/devis',
  },
];

/** All landing pages (for sitemap + navigation) */
export const ALL_LANDING_PAGES = [
  '/ciment-maroc',
  '/prix-ciment',
  '/livraison-ciment',
  '/cpj-45',
  '/cpj-55',
  '/ciment-vrac',
  '/ciment-sacs',
  '/ciment-big-bag',
  '/beton-arme-maroc',
  '/genie-civil-ciment',
  '/construction-dakhla',
  '/fournisseur-ciment-maroc',
  '/ciment-dakhla',
  '/ciment-laayoune',
  '/ciment-boujdour',
  '/ciment-sud-maroc',
  '/ciment-mauritanie',
];
