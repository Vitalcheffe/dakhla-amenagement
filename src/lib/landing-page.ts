/**
 * Landing page builder helpers — shared metadata + schema for keyword landing pages.
 * Reduces boilerplate across the 15+ landing pages.
 */

import { buildMetadata } from '@/lib/seo';
import {
  webPageSchema,
  breadcrumbSchema,
  serviceSchema,
  productSchema,
  faqSchema,
} from '@/lib/structured-data';
import type { JsonLd } from '@/lib/structured-data';
import type { BreadcrumbItem } from '@/components/shared/Breadcrumbs';
import type { RelatedLink } from '@/components/shared/RelatedLinks';

export interface LandingPageConfig {
  path: string;
  breadcrumbName: string;
  titleFr: string;
  titleEn: string;
  descriptionFr: string;
  descriptionEn: string;
  keywordsFr: string[];
  keywordsEn?: string[];
  /** Optional FAQ items for FAQPage schema */
  faq?: { question: string; answer: string }[];
  /** Optional product schema params */
  product?: {
    name: string;
    description: string;
    sku: string;
    price: string;
    image: string;
  };
  /** Related links section */
  related?: RelatedLink[];
  relatedTitle?: string;
}

/** Build metadata for a landing page (FR + EN) */
export function buildLandingMetadata(config: LandingPageConfig, locale: 'fr' | 'en') {
  return buildMetadata({
    locale,
    path: config.path,
    title: locale === 'fr' ? config.titleFr : config.titleEn,
    description: locale === 'fr' ? config.descriptionFr : config.descriptionEn,
    keywords: locale === 'fr' ? config.keywordsFr : (config.keywordsEn ?? config.keywordsFr),
    image: config.product?.image ?? '/images/og-banner.jpg',
  });
}

/** Build JSON-LD schemas for a landing page */
export function buildLandingSchemas(config: LandingPageConfig, locale: 'fr' | 'en') {
  const breadcrumbs: BreadcrumbItem[] = [
    { name: config.breadcrumbName, path: config.path },
  ];

  const schemas: JsonLd[] = [
    webPageSchema({
      name: locale === 'fr' ? config.titleFr : config.titleEn,
      description: locale === 'fr' ? config.descriptionFr : config.descriptionEn,
      path: config.path,
      locale,
    }),
    breadcrumbSchema(breadcrumbs, locale),
    serviceSchema({
      name: locale === 'fr' ? config.titleFr : config.titleEn,
      description: locale === 'fr' ? config.descriptionFr : config.descriptionEn,
      path: config.path,
      locale,
      serviceType: 'Cement manufacturing and supply',
    }),
  ];

  if (config.product) {
    schemas.push(
      productSchema({
        name: config.product.name,
        description: config.product.description,
        sku: config.product.sku,
        price: config.product.price,
        path: config.path,
        locale,
        image: config.product.image,
        ratingValue: '4.9',
        reviewCount: 50,
      }),
    );
  }

  if (config.faq && config.faq.length > 0) {
    schemas.push(faqSchema(config.faq));
  }

  return schemas;
}
