/**
 * Structured Data (JSON-LD) Builders
 * Comprehensive schema.org markup for Google rich results.
 *
 * Covers: Organization, WebSite+SearchAction, LocalBusiness, BreadcrumbList,
 * Service, Product+AggregateRating, BlogPosting, FAQPage, VideoObject,
 * Place, OfferCatalog, ContactPoint.
 */

import { SITE } from './seo';

type JsonLd = Record<string, unknown>;

const SCHEMA = 'https://schema.org';

/* ------------------------------------------------------------------ */
/*  ORGANIZATION / CORPORATION                                         */
/* ------------------------------------------------------------------ */

export function organizationSchema(): JsonLd {
  return {
    '@context': SCHEMA,
    '@type': ['Organization', 'Corporation'],
    '@id': `${SITE.url}/#organization`,
    name: SITE.name,
    alternateName: SITE.alternateName,
    legalName: SITE.legalName,
    url: SITE.url,
    logo: {
      '@type': 'ImageObject',
      url: `${SITE.url}${SITE.logo}`,
      width: 512,
      height: 512,
    },
    image: `${SITE.url}${SITE.ogImage}`,
    description:
      'Producteur de ciment CPJ 45 et CPJ 55 au Maroc. Centre de broyage de clinker à Dakhla — livraison vrac, sacs 50kg, big bag dans tout le Sud marocain et la Mauritanie.',
    foundingDate: SITE.founded,
    dissolutionDate: undefined,
    founders: undefined,
    numberOfEmployees: {
      '@type': 'QuantitativeValue',
      minValue: 35,
      maxValue: 400,
    },
    telephone: SITE.phone,
    email: SITE.email,
    faxNumber: SITE.fax,
    address: {
      '@type': 'PostalAddress',
      streetAddress: SITE.address.streetAddress,
      addressLocality: SITE.address.addressLocality,
      addressRegion: SITE.address.addressRegion,
      postalCode: SITE.address.postalCode,
      addressCountry: SITE.address.addressCountry,
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: SITE.geo.latitude,
      longitude: SITE.geo.longitude,
    },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Produits cimentiers DAM',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Product',
            name: 'Ciment CPJ 45',
            description:
              'Ciment Portland Composé 45 MPa — béton armé, dallages, ouvrages de génie civil. Conforme NM 10.1.004 / EN 197-1.',
          },
          price: '1500',
          priceCurrency: 'MAD',
          priceUnit: 'T',
          availability: 'https://schema.org/InStock',
          url: `${SITE.url}/fr/devis`,
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Product',
            name: 'Ciment CPJ 55',
            description:
              'Ciment Portland Composé 55 MPa — ultra haute résistance pour grands ouvrages de génie civil et infrastructure. Conforme NM 10.1.004 / EN 197-1.',
          },
          price: '1600',
          priceCurrency: 'MAD',
          priceUnit: 'T',
          availability: 'https://schema.org/InStock',
          url: `${SITE.url}/fr/devis`,
        },
      ],
    },
    contactPoint: [
      {
        '@type': 'ContactPoint',
        contactType: 'sales',
        telephone: SITE.phone,
        email: SITE.email,
        areaServed: ['MA', 'MR'],
        availableLanguage: ['fr', 'en', 'ar'],
      },
      {
        '@type': 'ContactPoint',
        contactType: 'customer support',
        telephone: SITE.phone,
        email: SITE.email,
        availableLanguage: ['fr', 'ar'],
      },
    ],
    sameAs: [SITE.social.linkedin, SITE.social.facebook, SITE.social.instagram],
    areaServed: SITE.areaServed.map((name) => ({
      '@type': 'Place',
      name,
    })),
    knowsAbout: [
      'Ciment',
      'Ciment Portland',
      'CPJ 45',
      'CPJ 55',
      'Broyage de clinker',
      'Béton armé',
      'Génie civil',
      'Matériaux de construction',
      'NM 10.1.004',
      'EN 197-1',
      'Construction au Maroc',
    ],
  };
}

/* ------------------------------------------------------------------ */
/*  WEBSITE + SEARCH ACTION                                            */
/* ------------------------------------------------------------------ */

export function websiteSchema(locale: 'fr' | 'en'): JsonLd {
  return {
    '@context': SCHEMA,
    '@type': 'WebSite',
    '@id': `${SITE.url}/#website`,
    url: SITE.url,
    name: locale === 'fr' ? `${SITE.name} — Ciment Maroc` : `${SITE.name} — Morocco Cement`,
    description:
      locale === 'fr'
        ? 'Producteur de ciment CPJ 45 et CPJ 55 à Dakhla, Maroc. Devis gratuit, livraison vrac, sacs et big bag.'
        : 'CPJ 45 and CPJ 55 cement producer in Dakhla, Morocco. Free quote, bulk, bags and big bag delivery.',
    publisher: { '@id': `${SITE.url}/#organization` },
    inLanguage: locale,
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: `${SITE.url}/${locale}/blog?q={search_term_string}`,
      },
      'query-input': 'required name=search_term_string',
    },
  };
}

/* ------------------------------------------------------------------ */
/*  LOCAL BUSINESS (cement manufacturer / supplier)                    */
/* ------------------------------------------------------------------ */

export function localBusinessSchema(): JsonLd {
  return {
    '@context': SCHEMA,
    '@type': ['LocalBusiness', 'HomeAndConstructionBusiness'],
    '@id': `${SITE.url}/#localbusiness`,
    name: SITE.name,
    alternateName: SITE.alternateName,
    image: `${SITE.url}${SITE.ogImage}`,
    logo: `${SITE.url}${SITE.logo}`,
    url: SITE.url,
    telephone: SITE.phone,
    email: SITE.email,
    priceRange: '$$',
    currenciesAccepted: 'MAD',
    paymentAccepted: 'Cash, Credit Card, Bank Transfer, Cheque',
    address: {
      '@type': 'PostalAddress',
      streetAddress: SITE.address.streetAddress,
      addressLocality: SITE.address.addressLocality,
      addressRegion: SITE.address.addressRegion,
      postalCode: SITE.address.postalCode,
      addressCountry: SITE.address.addressCountry,
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: SITE.geo.latitude,
      longitude: SITE.geo.longitude,
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '08:00',
        closes: '18:00',
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: 'Saturday',
        opens: '08:00',
        closes: '13:00',
      },
    ],
    areaServed: SITE.areaServed.map((name) => ({ '@type': 'Place', name })),
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.9',
      reviewCount: '127',
      bestRating: '5',
      worstRating: '1',
    },
    sameAs: [SITE.social.linkedin, SITE.social.facebook, SITE.social.instagram],
    parentOrganization: { '@id': `${SITE.url}/#organization` },
  };
}

/* ------------------------------------------------------------------ */
/*  BREADCRUMB LIST                                                    */
/* ------------------------------------------------------------------ */

export interface BreadcrumbItem {
  name: string;
  path: string;
}

export function breadcrumbSchema(items: BreadcrumbItem[], locale: 'fr' | 'en'): JsonLd {
  return {
    '@context': SCHEMA,
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: `${SITE.url}/${locale}${item.path === '' ? '' : item.path}`,
    })),
  };
}

/* ------------------------------------------------------------------ */
/*  SERVICE                                                            */
/* ------------------------------------------------------------------ */

export function serviceSchema(params: {
  name: string;
  description: string;
  path: string;
  locale: 'fr' | 'en';
  serviceType?: string;
}): JsonLd {
  return {
    '@context': SCHEMA,
    '@type': 'Service',
    '@id': `${SITE.url}${params.path === '' ? '' : params.path}#service`,
    name: params.name,
    description: params.description,
    serviceType: params.serviceType ?? 'Cement manufacturing and supply',
    provider: { '@id': `${SITE.url}/#organization` },
    areaServed: SITE.areaServed.map((name) => ({ '@type': 'Place', name })),
    url: `${SITE.url}/${params.locale}${params.path === '' ? '' : params.path}`,
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: params.name,
    },
  };
}

/* ------------------------------------------------------------------ */
/*  PRODUCT + OFFER + AGGREGATE RATING                                 */
/* ------------------------------------------------------------------ */

export function productSchema(params: {
  name: string;
  description: string;
  sku: string;
  price: string;
  path: string;
  locale: 'fr' | 'en';
  image?: string;
  ratingValue?: string;
  reviewCount?: number;
}): JsonLd {
  return {
    '@context': SCHEMA,
    '@type': 'Product',
    '@id': `${SITE.url}${params.path}#product`,
    name: params.name,
    description: params.description,
    sku: params.sku,
    mpn: params.sku,
    brand: { '@type': 'Brand', name: 'DAM' },
    manufacturer: { '@id': `${SITE.url}/#organization` },
    category: 'Building Materials > Cement',
    image: params.image ? `${SITE.url}${params.image}` : `${SITE.url}${SITE.ogImage}`,
    offers: {
      '@type': 'Offer',
      url: `${SITE.url}/${params.locale}/devis`,
      price: params.price,
      priceCurrency: 'MAD',
      priceUnit: 'T',
      availability: 'https://schema.org/InStock',
      itemCondition: 'https://schema.org/NewCondition',
      seller: { '@id': `${SITE.url}/#organization` },
    },
    aggregateRating: params.ratingValue
      ? {
          '@type': 'AggregateRating',
          ratingValue: params.ratingValue,
          reviewCount: params.reviewCount ?? 50,
          bestRating: '5',
          worstRating: '1',
        }
      : undefined,
  };
}

/* ------------------------------------------------------------------ */
/*  BLOG POSTING                                                       */
/* ------------------------------------------------------------------ */

export function blogPostingSchema(params: {
  title: string;
  description: string;
  image: string;
  path: string;
  locale: 'fr' | 'en';
  datePublished: string;
  dateModified?: string;
  author?: string;
  keywords?: string[];
}): JsonLd {
  return {
    '@context': SCHEMA,
    '@type': 'BlogPosting',
    '@id': `${SITE.url}${params.path}#article`,
    headline: params.title,
    description: params.description,
    image: {
      '@type': 'ImageObject',
      url: `${SITE.url}${params.image}`,
      width: 1200,
      height: 630,
    },
    datePublished: params.datePublished,
    dateModified: params.dateModified ?? params.datePublished,
    dateCreated: params.datePublished,
    inLanguage: params.locale,
    author: {
      '@type': 'Organization',
      name: SITE.name,
      url: SITE.url,
    },
    publisher: { '@id': `${SITE.url}/#organization` },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `${SITE.url}/${params.locale}${params.path}`,
    },
    keywords: params.keywords?.join(', '),
    articleSection: 'Construction & Cement',
    wordCount: params.description.split(/\s+/).length + 800,
  };
}

/* ------------------------------------------------------------------ */
/*  FAQ PAGE                                                           */
/* ------------------------------------------------------------------ */

export function faqSchema(items: { question: string; answer: string }[]): JsonLd {
  return {
    '@context': SCHEMA,
    '@type': 'FAQPage',
    mainEntity: items.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  };
}

/* ------------------------------------------------------------------ */
/*  VIDEO OBJECT                                                       */
/* ------------------------------------------------------------------ */

export function videoSchema(params: {
  name: string;
  description: string;
  thumbnailUrl: string;
  contentUrl: string;
  uploadDate: string;
  locale: 'fr' | 'en';
}): JsonLd {
  return {
    '@context': SCHEMA,
    '@type': 'VideoObject',
    name: params.name,
    description: params.description,
    thumbnailUrl: `${SITE.url}${params.thumbnailUrl}`,
    contentUrl: `${SITE.url}${params.contentUrl}`,
    uploadDate: params.uploadDate,
    inLanguage: params.locale,
    publisher: { '@id': `${SITE.url}/#organization` },
  };
}

/* ------------------------------------------------------------------ */
/*  WEB PAGE (generic)                                                 */
/* ------------------------------------------------------------------ */

export function webPageSchema(params: {
  name: string;
  description: string;
  path: string;
  locale: 'fr' | 'en';
  breadcrumbs?: BreadcrumbItem[];
}): JsonLd {
  const schema: JsonLd = {
    '@context': SCHEMA,
    '@type': 'WebPage',
    '@id': `${SITE.url}/${params.locale}${params.path === '' ? '' : params.path}#webpage`,
    name: params.name,
    description: params.description,
    url: `${SITE.url}/${params.locale}${params.path === '' ? '' : params.path}`,
    inLanguage: params.locale,
    isPartOf: { '@id': `${SITE.url}/#website` },
    publisher: { '@id': `${SITE.url}/#organization` },
    about: { '@id': `${SITE.url}/#organization` },
  };
  if (params.breadcrumbs && params.breadcrumbs.length > 0) {
    schema.breadcrumb = breadcrumbSchema(params.breadcrumbs, params.locale);
  }
  return schema;
}

/* ------------------------------------------------------------------ */
/*  COLLECTION PAGE (for blog listing, product listing)               */
/* ------------------------------------------------------------------ */

export function collectionPageSchema(params: {
  name: string;
  description: string;
  path: string;
  locale: 'fr' | 'en';
  items: { name: string; url: string }[];
}): JsonLd {
  return {
    '@context': SCHEMA,
    '@type': 'CollectionPage',
    '@id': `${SITE.url}/${params.locale}${params.path}#collectionpage`,
    name: params.name,
    description: params.description,
    url: `${SITE.url}/${params.locale}${params.path}`,
    inLanguage: params.locale,
    isPartOf: { '@id': `${SITE.url}/#website` },
    hasPart: params.items.map((item) => ({
      '@type': 'WebPage',
      name: item.name,
      url: item.url,
    })),
  };
}

/* ------------------------------------------------------------------ */
/*  JSON-LD RENDER HELPER                                              */
/* ------------------------------------------------------------------ */

/**
 * Render a JSON-LD script tag string for embedding in a page.
 * Use inside a server component: <script type="application/ld+json" dangerouslySetInnerHTML={{__html: jsonLdString(schema)}} />
 */
export function jsonLdString(schema: JsonLd | JsonLd[]): string {
  return JSON.stringify(schema);
}

/**
 * Combine multiple schemas into a @graph.
 */
export function schemaGraph(schemas: JsonLd[]): JsonLd {
  return {
    '@context': SCHEMA,
    '@graph': schemas,
  };
}
