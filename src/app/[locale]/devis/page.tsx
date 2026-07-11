import { buildMetadata, KEYWORDS } from '@/lib/seo';
import {
  webPageSchema,
  breadcrumbSchema,
} from '@/lib/structured-data';
import { JsonLdScript } from '@/components/shared/JsonLd';
import DevisPageClient from './DevisPageClient';

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
      path: '/devis',
      title: 'Request a Cement Quote — CPJ 45 / CPJ 55 | Dakhla Aménagement Morocco',
      description:
        'Get a free quote for CPJ 45 or CPJ 55 cement in Morocco. Prices from 1,500 DH/T. Bulk, 50kg bags, big bag delivery across Southern Morocco. 24h response.',
      keywords: [
        ...KEYWORDS.pricing,
        ...KEYWORDS.buying,
        'cement quote Morocco',
        'request cement quote',
        'free cement quote Morocco',
        'cement price Morocco',
        'buy cement Morocco',
        'CPJ 45 quote',
        'CPJ 55 quote',
        'cement delivery Morocco',
      ],
    });
  }

  return buildMetadata({
    locale: 'fr',
    path: '/devis',
    title: 'Demander un Devis Ciment — CPJ 45 / CPJ 55 | Dakhla Aménagement Maroc',
    description:
      'Obtenez un devis gratuit pour du ciment CPJ 45 ou CPJ 55 au Maroc. Prix dès 1 500 DH/T. Livraison vrac, sacs 50kg, big bag dans tout le Sud marocain. Réponse sous 24h.',
    keywords: [
      ...KEYWORDS.pricing,
      ...KEYWORDS.buying,
      'devis ciment Maroc',
      'demander devis ciment',
      'devis gratuit ciment Maroc',
      'prix ciment Maroc',
      'acheter ciment Maroc',
      'devis CPJ 45',
      'devis CPJ 55',
      'livraison ciment Maroc',
    ],
  });
}

export default async function DevisPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const loc: 'fr' | 'en' = locale === 'en' ? 'en' : 'fr';

  const breadcrumbs = [
    { name: loc === 'fr' ? 'Devis' : 'Quote', path: '/devis' },
  ];

  const schemas = [
    webPageSchema({
      name:
        loc === 'fr'
          ? 'Demander un Devis Ciment — Dakhla Aménagement'
          : 'Request a Cement Quote — Dakhla Aménagement',
      description:
        loc === 'fr'
          ? 'Obtenez un devis gratuit pour du ciment CPJ 45 ou CPJ 55 au Maroc. Prix dès 1 500 DH/T. Livraison vrac, sacs 50kg, big bag dans tout le Sud marocain. Réponse sous 24h.'
          : 'Get a free quote for CPJ 45 or CPJ 55 cement in Morocco. Prices from 1,500 DH/T. Bulk, 50kg bags, big bag delivery across Southern Morocco. 24h response.',
      path: '/devis',
      locale: loc,
      breadcrumbs,
    }),
    breadcrumbSchema(breadcrumbs, loc),
  ];

  return (
    <>
      <JsonLdScript schema={schemas} />
      <DevisPageClient />
    </>
  );
}
