import { buildMetadata, KEYWORDS } from '@/lib/seo';
import { webPageSchema, breadcrumbSchema } from '@/lib/structured-data';
import { JsonLdScript } from '@/components/shared/JsonLd';
import FaqPageClient from './FaqPageClient';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const loc: 'fr' | 'en' = locale === 'en' ? 'en' : 'fr';

  const title =
    loc === 'fr'
      ? 'FAQ Ciment Maroc — Prix, Livraison, CPJ 45, CPJ 55 | Dakhla Aménagement'
      : 'Cement Morocco FAQ — Prices, Delivery, CPJ 45, CPJ 55 | Dakhla Aménagement';

  const description =
    loc === 'fr'
      ? 'Questions fréquentes sur le ciment au Maroc : prix CPJ 45/CPJ 55, livraison vrac et sacs, normes NM 10.1.004, zones de livraison. Toutes vos réponses sur le ciment DAM.'
      : 'Frequently asked questions about cement in Morocco: CPJ 45/CPJ 55 prices, bulk and bag delivery, NM 10.1.004 standards, delivery zones. All your DAM cement answers.';

  const keywords = [
    ...(loc === 'fr' ? KEYWORDS.pricing : ['cement price Morocco', 'CPJ 45 price', 'CPJ 55 price']),
    ...(loc === 'fr' ? KEYWORDS.products : ['CPJ 45 Morocco', 'CPJ 55 Morocco']),
    loc === 'fr' ? 'faq ciment' : 'cement FAQ',
  ];

  return buildMetadata({
    locale: loc,
    path: '/faq',
    title,
    description,
    keywords,
  });
}

export default async function Page({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const loc: 'fr' | 'en' = locale === 'en' ? 'en' : 'fr';

  const name = loc === 'fr' ? 'FAQ — Ciment Maroc' : 'FAQ — Cement Morocco';
  const description =
    loc === 'fr'
      ? 'Questions fréquentes sur le ciment au Maroc : prix CPJ 45/CPJ 55, livraison vrac et sacs, normes NM 10.1.004, zones de livraison.'
      : 'Frequently asked questions about cement in Morocco: CPJ 45/CPJ 55 prices, bulk and bag delivery, NM 10.1.004 standards, delivery zones.';

  const breadcrumbs = [{ name: loc === 'fr' ? 'FAQ' : 'FAQ', path: '/faq' }];

  const schemas = [
    webPageSchema({
      name,
      description,
      path: '/faq',
      locale: loc,
    }),
    breadcrumbSchema(breadcrumbs, loc),
  ];

  return (
    <>
      <JsonLdScript schema={schemas} />
      <FaqPageClient />
    </>
  );
}
