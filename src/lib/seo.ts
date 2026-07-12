/**
 * SEO Configuration & Metadata Helpers
 * Centralized SEO infrastructure for Dakhla Aménagement (DAM) — ciment-dam.com
 *
 * This module provides:
 *  - Site-wide constants (URL, contact, geo, social profiles)
 *  - buildMetadata(): generates per-page Next.js Metadata with canonical, OG, Twitter, hreflang
 *  - buildAlternates(): generates hreflang alternate links
 *  - Keyword banks for semantic SEO coverage
 */

import type { Metadata } from 'next';

/* ------------------------------------------------------------------ */
/*  SITE CONSTANTS                                                     */
/* ------------------------------------------------------------------ */

export const SITE = {
  name: 'Dakhla Aménagement et Développement',
  shortName: 'DAD',
  legalName: 'Société Dakhla Aménagement et Développement S.A.',
  alternateName: 'Dakhla Aménagement et Développement — SDAD',
  url: 'https://www.ciment-dam.com',
  defaultLocale: 'fr' as const,
  locales: ['fr', 'en'] as const,
  phone: '+212658265685',
  phoneDisplay: '+212 658-265685',
  whatsapp: '+212658265685',
  email: 'contact@ciment-dam.com',
  fax: '+212528000000',
  founded: '2015',
  logo: '/images/logo-dam-512.png',
  ogImage: '/images/og-banner.jpg',
  address: {
    streetAddress: 'Quartier Lassargua, 1 et 1 angle rue Lagouira, Avenue El Walae',
    addressLocality: 'Dakhla',
    addressRegion: 'Dakhla-Oued Ed-Dahab',
    postalCode: '73000',
    addressCountry: 'MA',
  },
  geo: {
    latitude: 23.6847,
    longitude: -15.9580,
  },
  areaServed: [
    'Dakhla',
    'Laâyoune',
    'Boujdour',
    'Es-Semara',
    'Aousserd',
    'Guelmim',
    'Tan-Tan',
    'Tarfaya',
    'Sud Maroc',
    'Maroc',
    'Mauritanie',
    'Nouakchott',
  ],
  social: {
    linkedin: 'https://www.linkedin.com/company/dakhla-amenagement',
    facebook: 'https://www.facebook.com/dakhlaamenagement',
    instagram: 'https://www.instagram.com/dakhlaamenagement',
  },
} as const;

/* ------------------------------------------------------------------ */
/*  KEYWORD BANKS — broad semantic coverage                            */
/* ------------------------------------------------------------------ */

export const KEYWORDS = {
  core: [
    'Dakhla Aménagement et Développement',
    'SDAD',
    'Société Dakhla Aménagement et Développement',
    'ciment Maroc',
    'ciment',
    'cimenterie Maroc',
    'ciment Dakhla',
    'Dakhla Aménagement',
    'DAD ciment',
    'producteur ciment Maroc',
    'fabricant ciment Maroc',
    'fournisseur ciment Maroc',
    'centre de broyage Maroc',
    'broyage clinker Maroc',
    'usine ciment Maroc',
    'génie civil Dakhla',
    'construction Dakhla',
    'aménagement urbain Dakhla',
    'développement local Dakhla',
    'assainissement Dakhla',
    'voirie Dakhla',
    'terrassement Dakhla',
  ],
  products: [
    'CPJ 45 Maroc',
    'CPJ 55 Maroc',
    'ciment CPJ 45',
    'ciment CPJ 55',
    'ciment Portland composé',
    'ciment 45 MPa',
    'ciment 55 MPa',
    'ciment sacs 50kg Maroc',
    'ciment vrac Maroc',
    'ciment big bag Maroc',
    'ciment en vrac',
    'clinker Maroc',
  ],
  pricing: [
    'prix ciment Maroc',
    'prix ciment CPJ 45',
    'prix ciment CPJ 55',
    'prix sac ciment 50kg Maroc',
    'prix ciment vrac Maroc',
    'prix tonne ciment Maroc',
    'ciment pas cher Maroc',
    'tarif ciment Maroc',
    'devis ciment Maroc',
    'ciment 1500 DH',
    'ciment 1600 DH',
  ],
  buying: [
    'achat ciment Maroc',
    'acheter ciment Maroc',
    'commander ciment Maroc',
    'ciment en ligne Maroc',
    'fournisseur ciment Dakhla',
    'grossiste ciment Maroc',
    'distributeur ciment Maroc',
    'revendeur ciment Maroc',
    'ciment livraison Maroc',
  ],
  application: [
    'béton Maroc',
    'béton armé Maroc',
    'matériaux construction Maroc',
    'matériaux de construction Dakhla',
    'construction Maroc',
    'construction Dakhla',
    'génie civil Maroc',
    'infrastructure Maroc',
    'dallage ciment',
    'fondation ciment',
    'maçonnerie ciment Maroc',
    'béton prêt à l emploi Maroc',
  ],
  regional: [
    'ciment Dakhla',
    'ciment Laâyoune',
    'ciment Boujdour',
    'ciment Sud Maroc',
    'ciment Mauritanie',
    'ciment Nouakchott',
    'ciment Sahara',
    'ciment Dakhla-Oued Ed-Dahab',
    'matériaux construction Dakhla',
    'construction Dakhla',
    'immobilier Dakhla',
    'travaux Dakhla',
  ],
  business: [
    'entreprise ciment Maroc',
    'société ciment Maroc',
    'industrie cimentière Maroc',
    'secteur construction Maroc',
    'BTP Maroc',
    'BTP Dakhla',
    'business Maroc construction',
    'investissement Maroc',
    'partenariat ciment Maroc',
    'business ciment',
  ],
} as const;

/** Flattened keyword list for global metadata */
export const ALL_KEYWORDS: string[] = [
  ...KEYWORDS.core,
  ...KEYWORDS.products,
  ...KEYWORDS.pricing,
  ...KEYWORDS.buying,
  ...KEYWORDS.application,
  ...KEYWORDS.regional,
  ...KEYWORDS.business,
];

/* ------------------------------------------------------------------ */
/*  METADATA BUILDER                                                   */
/* ------------------------------------------------------------------ */

export interface BuildMetadataParams {
  locale: 'fr' | 'en';
  /** path without locale prefix, e.g. '' for home, '/produits', '/blog/mon-article' */
  path: string;
  title: string;
  description: string;
  keywords?: string[];
  image?: string;
  type?: 'website' | 'article' | 'profile';
  noIndex?: boolean;
  publishedTime?: string;
  modifiedTime?: string;
  author?: string;
}

/**
 * Build a complete Next.js Metadata object for a page.
 * Includes title template, canonical, OpenGraph, Twitter, hreflang alternates.
 */
export function buildMetadata({
  locale,
  path,
  title,
  description,
  keywords = [],
  image = SITE.ogImage,
  type = 'website',
  noIndex = false,
  publishedTime,
  modifiedTime,
  author,
}: BuildMetadataParams): Metadata {
  const pathSegment = path === '' ? '' : path;
  const canonicalUrl = `${SITE.url}/${locale}${pathSegment}`;
  const imageUrl = image.startsWith('http') ? image : `${SITE.url}${image}`;

  const alternates: Record<string, string> = {};
  for (const loc of SITE.locales) {
    alternates[loc] = `${SITE.url}/${loc}${pathSegment}`;
  }
  alternates['x-default'] = `${SITE.url}/${SITE.defaultLocale}${pathSegment}`;

  const ogLocale = locale === 'fr' ? 'fr_MA' : 'en_US';

  const openGraph: Metadata['openGraph'] = {
    title,
    description,
    url: canonicalUrl,
    siteName: SITE.name,
    locale: ogLocale,
    type,
    images: [
      {
        url: imageUrl,
        width: 1200,
        height: 630,
        alt: title,
      },
    ],
    ...(type === 'article' && {
      publishedTime,
      modifiedTime,
      authors: author ? [author] : undefined,
    }),
  };

  return {
    title: { absolute: title },
    description,
    keywords: keywords.length > 0 ? keywords : undefined,
    alternates: {
      canonical: canonicalUrl,
      languages: alternates,
    },
    openGraph,
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [imageUrl],
    },
    robots: noIndex
      ? { index: false, follow: false }
      : {
          index: true,
          follow: true,
          googleBot: {
            index: true,
            follow: true,
            'max-video-preview': -1,
            'max-image-preview': 'large',
            'max-snippet': -1,
          },
        },
    other: {
      'format-detection': 'telephone=yes',
      'geo.region': 'MA-ODD',
      'geo.placename': 'Dakhla',
      'geo.position': `${SITE.geo.latitude};${SITE.geo.longitude}`,
      ICBM: `${SITE.geo.latitude}, ${SITE.geo.longitude}`,
    },
  };
}

/**
 * Build hreflang alternate links for a given path.
 */
export function buildAlternates(path: string) {
  const pathSegment = path === '' ? '' : path;
  const languages: Record<string, string> = {};
  for (const loc of SITE.locales) {
    languages[loc] = `${SITE.url}/${loc}${pathSegment}`;
  }
  languages['x-default'] = `${SITE.url}/${SITE.defaultLocale}${pathSegment}`;
  return languages;
}

/**
 * Resolve the full URL for a path + locale.
 */
export function pageUrl(locale: string, path: string = ''): string {
  return `${SITE.url}/${locale}${path === '' ? '' : path}`;
}
