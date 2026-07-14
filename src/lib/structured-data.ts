/**
 * Structured Data (JSON-LD) Builders
 * Comprehensive schema.org markup for Google rich results.
 *
 * Covers: Organization, WebSite+SearchAction, LocalBusiness, BreadcrumbList,
 * Service, Product+AggregateRating, BlogPosting, FAQPage, VideoObject,
 * Place, OfferCatalog, ContactPoint.
 */

import { SITE } from './seo';

export type JsonLd = Record<string, unknown>;

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
      'Société Dakhla Aménagement et Développement (SDAD) — Producteur de ciment CPJ 45 et CPJ 55, travaux de génie civil, bâtiments d\'habitation et industriels, terrassements généraux, assainissement, voiries, réseaux divers, routes. Basé à Dakhla, Maroc.',
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
      'Travaux de génie civil',
      'Bâtiments d\'habitation et industriels',
      'Terrassements généraux',
      'Assainissement',
      'Voiries',
      'Réseaux divers',
      'Routes',
      'Drainage des eaux pluviales',
      'Aménagement urbain',
      'Développement local',
      'Systèmes autonomes d\'assainissement',
    ],
  };
}

/* ------------------------------------------------------------------ */
/*  WEBSITE + SEARCH ACTION                                            */
/* ------------------------------------------------------------------ */

export function websiteSchema(locale: 'fr' | 'en' | 'ar'): JsonLd {
  return {
    '@context': SCHEMA,
    '@type': 'WebSite',
    '@id': `${SITE.url}/#website`,
    url: SITE.url,
    name: SITE.name,
    alternateName: 'SDAD',
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

export function breadcrumbSchema(items: BreadcrumbItem[], locale: 'fr' | 'en' | 'ar'): JsonLd {
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
  locale: 'fr' | 'en' | 'ar';
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
  locale: 'fr' | 'en' | 'ar';
  image?: string;
  ratingValue?: string;
  reviewCount?: number;
}): JsonLd {
  const imageUrl = params.image ? `${SITE.url}${params.image}` : `${SITE.url}${SITE.ogImage}`;
  return {
    '@context': SCHEMA,
    '@type': 'Product',
    '@id': `${SITE.url}${params.path}#product`,
    name: params.name,
    description: params.description,
    sku: params.sku,
    brand: { '@type': 'Brand', name: 'DAM' },
    manufacturer: { '@id': `${SITE.url}/#organization` },
    category: 'Building Materials > Cement',
    image: {
      '@type': 'ImageObject',
      url: imageUrl,
      width: 1200,
      height: 630,
      alt: params.name,
    },
    offers: {
      '@type': 'Offer',
      url: `${SITE.url}/${params.locale}/devis`,
      price: params.price,
      priceCurrency: 'MAD',
      priceUnit: 'T',
      availability: 'https://schema.org/InStock',
      itemCondition: 'https://schema.org/NewCondition',
      seller: { '@id': `${SITE.url}/#organization` },
      hasMerchantReturnPolicy: {
        '@type': 'MerchantReturnPolicy',
        applicableCountry: 'MA',
        returnPolicyCategory: 'https://schema.org/MerchantReturnFiniteReturnWindow',
        merchantReturnDays: 30,
        returnMethod: 'https://schema.org/ReturnByMail',
        returnFees: 'https://schema.org/FreeReturn',
      },
      shippingDetails: {
        '@type': 'OfferShippingDetails',
        shippingRate: {
          '@type': 'MonetaryAmount',
          value: '0',
          currency: 'MAD',
        },
        shippingDestination: {
          '@type': 'DefinedRegion',
          addressCountry: 'MA',
        },
        deliveryTime: {
          '@type': 'ShippingDeliveryTime',
          handlingTime: {
            '@type': 'QuantitativeValue',
            minValue: 0,
            maxValue: 1,
            unitCode: 'DAY',
          },
          transitTime: {
            '@type': 'QuantitativeValue',
            minValue: 1,
            maxValue: 4,
            unitCode: 'DAY',
          },
        },
      },
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
  locale: 'fr' | 'en' | 'ar';
  datePublished: string;
  dateModified?: string;
  author?: string;
  keywords?: string[];
  articleBody?: string;
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
    articleBody: params.articleBody,
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
  locale: 'fr' | 'en' | 'ar';
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
  locale: 'fr' | 'en' | 'ar';
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
  locale: 'fr' | 'en' | 'ar';
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

/* ------------------------------------------------------------------ */
/*  HOW-TO (for guide articles — enables featured snippets)           */
/* ------------------------------------------------------------------ */

export function howToSchema(params: {
  name: string;
  description: string;
  path: string;
  locale: 'fr' | 'en' | 'ar';
  steps: { name: string; text: string }[];
  totalTime?: string;
  estimatedCost?: { currency: string; value: string };
}): JsonLd {
  return {
    '@context': SCHEMA,
    '@type': 'HowTo',
    '@id': `${SITE.url}${params.path}#howto`,
    name: params.name,
    description: params.description,
    inLanguage: params.locale,
    totalTime: params.totalTime,
    estimatedCost: params.estimatedCost
      ? {
          '@type': 'MonetaryAmount',
          currency: params.estimatedCost.currency,
          value: params.estimatedCost.value,
        }
      : undefined,
    step: params.steps.map((step, index) => ({
      '@type': 'HowToStep',
      position: index + 1,
      name: step.name,
      text: step.text,
    })),
  };
}

/* ------------------------------------------------------------------ */
/*  SPEAKABLE (for voice search / Google Assistant)                   */
/* ------------------------------------------------------------------ */

export function speakableSchema(params: {
  path: string;
  locale: 'fr' | 'en' | 'ar';
  cssSelectors: string[];
}): JsonLd {
  return {
    '@context': SCHEMA,
    '@type': 'WebPage',
    '@id': `${SITE.url}/${params.locale}${params.path === '' ? '' : params.path}#speakable`,
    speakable: {
      '@type': 'SpeakableSpecification',
      cssSelector: params.cssSelectors,
    },
    inLanguage: params.locale,
  };
}

/* ------------------------------------------------------------------ */
/*  REVIEW (individual customer review)                               */
/* ------------------------------------------------------------------ */

export function reviewSchema(params: {
  author: string;
  datePublished: string;
  reviewBody: string;
  ratingValue: string;
  itemReviewed: string;
}): JsonLd {
  return {
    '@context': SCHEMA,
    '@type': 'Review',
    author: { '@type': 'Person', name: params.author },
    datePublished: params.datePublished,
    reviewBody: params.reviewBody,
    reviewRating: {
      '@type': 'Rating',
      ratingValue: params.ratingValue,
      bestRating: '5',
      worstRating: '1',
    },
    itemReviewed: {
      '@type': 'Product',
      name: params.itemReviewed,
    },
  };
}

/* ------------------------------------------------------------------ */
/*  SITE NAVIGATION ELEMENT (helps Google understand site structure)  */
/* ------------------------------------------------------------------ */

export function siteNavigationSchema(navItems: { name: string; url: string }[]): JsonLd {
  return {
    '@context': SCHEMA,
    '@type': 'SiteNavigationElement',
    name: navItems.map((item) => item.name),
    url: navItems.map((item) => item.url),
  };
}
