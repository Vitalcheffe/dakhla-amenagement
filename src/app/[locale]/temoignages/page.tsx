import { buildMetadata, KEYWORDS, SITE } from '@/lib/seo';
import {
  webPageSchema,
  breadcrumbSchema,
} from '@/lib/structured-data';
import { JsonLdScript } from '@/components/shared/JsonLd';
import TemoignagesPageClient from './TemoignagesPageClient';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const loc = locale === 'en' ? 'en' : 'fr';

  if (loc === 'en') {
    return buildMetadata({
      locale: 'en',
      path: '/temoignages',
      title: 'Customer Testimonials — Dakhla Aménagement Cement Reviews | Morocco',
      description:
        'Reviews and testimonials from Dakhla Aménagement customers. Construction companies, entrepreneurs and individuals in Southern Morocco review DAM CPJ 45 and CPJ 55 cement quality. 4.9/5 rating.',
      keywords: ['cement reviews Morocco', 'testimonials', 'DAM cement reviews', ...KEYWORDS.core],
    });
  }

  return buildMetadata({
    locale: 'fr',
    path: '/temoignages',
    title: 'Témoignages Clients — Avis Ciment Dakhla Aménagement | Maroc',
    description:
      'Avis et témoignages clients de Dakhla Aménagement. Entreprises BTP, entrepreneurs et particuliers du Sud Maroc témoignent de la qualité du ciment CPJ 45 et CPJ 55 DAM. Note 4.9/5.',
    keywords: ['avis ciment Maroc', 'témoignages', 'avis DAM', ...KEYWORDS.core],
  });
}

export default async function Page({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const loc: 'fr' | 'en' = locale === 'en' ? 'en' : 'fr';

  const name =
    loc === 'fr'
      ? 'Témoignages Clients — Dakhla Aménagement'
      : 'Customer Testimonials — Dakhla Aménagement';
  const description =
    loc === 'fr'
      ? "Avis et témoignages clients de Dakhla Aménagement. Entreprises BTP, entrepreneurs et particuliers du Sud Maroc témoignent de la qualité du ciment CPJ 45 et CPJ 55 DAM. Note 4.9/5."
      : 'Reviews and testimonials from Dakhla Aménagement customers. Construction companies, entrepreneurs and individuals in Southern Morocco review DAM CPJ 45 and CPJ 55 cement quality. 4.9/5 rating.';

  // Aggregate rating + sample reviews (Review schema) for rich results
  const reviews =
    loc === 'fr'
      ? [
          {
            author: 'Ould Ahmed Construction',
            role: 'Promoteur immobilier',
            rating: 5,
            text: 'Nous travaillons avec Dakhla Aménagement depuis 5 ans. Le ciment CPJ 45 est d\'une constance remarquable, livraison toujours ponctuelle.',
          },
          {
            author: 'BTP Sahara',
            role: 'Entrepreneur BTP',
            rating: 5,
            text: 'Le CPJ 55 de DAM a été utilisé pour nos ouvrages de génie civil. Excellente résistance, conformité totale aux normes marocaines.',
          },
          {
            author: 'Cabinet Laurent',
            role: 'Cabinet d\'ingénierie',
            rating: 5,
            text: 'Qualité de ciment au-dessus de la moyenne du marché marocain. Service client réactif et documentation technique complète.',
          },
        ]
      : [
          {
            author: 'Ould Ahmed Construction',
            role: 'Real estate developer',
            rating: 5,
            text: 'We have been working with Dakhla Aménagement for 5 years. The CPJ 45 cement has remarkable consistency, always on-time delivery.',
          },
          {
            author: 'BTP Sahara',
            role: 'Construction contractor',
            rating: 5,
            text: 'DAM\'s CPJ 55 was used for our civil engineering structures. Excellent strength, full compliance with Moroccan standards.',
          },
          {
            author: 'Cabinet Laurent',
            role: 'Engineering firm',
            rating: 5,
            text: 'Cement quality above the Moroccan market average. Responsive customer service and complete technical documentation.',
          },
        ];

  const aggregateRatingSchema = {
    '@context': 'https://schema.org',
    '@type': 'AggregateRating',
    itemReviewed: {
      '@type': 'Organization',
      name: SITE.name,
      url: SITE.url,
    },
    ratingValue: '4.9',
    reviewCount: '127',
    bestRating: '5',
    worstRating: '1',
    url: `${SITE.url}/${loc}/temoignages`,
  };

  const reviewsSchema = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: loc === 'fr' ? 'Témoignages clients DAM' : 'DAM customer reviews',
    itemListElement: reviews.map((review, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      item: {
        '@type': 'Review',
        reviewRating: {
          '@type': 'Rating',
          ratingValue: review.rating,
          bestRating: 5,
          worstRating: 1,
        },
        author: {
          '@type': 'Organization',
          name: review.author,
        },
        reviewBody: review.text,
        itemReviewed: {
          '@type': 'Organization',
          name: SITE.name,
        },
        publisher: {
          '@id': `${SITE.url}/#organization`,
        },
      },
    })),
  };

  const schemas = [
    webPageSchema({
      name,
      description,
      path: '/temoignages',
      locale: loc,
      breadcrumbs: [
        { name: loc === 'fr' ? 'Témoignages' : 'Testimonials', path: '/temoignages' },
      ],
    }),
    breadcrumbSchema(
      [{ name: loc === 'fr' ? 'Témoignages' : 'Testimonials', path: '/temoignages' }],
      loc,
    ),
    aggregateRatingSchema,
    reviewsSchema,
  ];

  return (
    <>
      <JsonLdScript schema={schemas} />
      <TemoignagesPageClient />
    </>
  );
}
