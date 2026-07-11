import { buildMetadata, KEYWORDS } from '@/lib/seo';
import { webPageSchema, breadcrumbSchema } from '@/lib/structured-data';
import { JsonLdScript } from '@/components/shared/JsonLd';
import InvestisseursPageClient from './InvestisseursPageClient';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const loc: 'fr' | 'en' = locale === 'en' ? 'en' : 'fr';

  const title =
    loc === 'fr'
      ? 'Investisseurs — Dakhla Aménagement S.A. | Ciment Maroc, Croissance BTP'
      : 'Investors — Dakhla Aménagement S.A. | Morocco Cement, BTP Growth';

  const description =
    loc === 'fr'
      ? 'Information investisseurs de Dakhla Aménagement. Marché du ciment au Maroc, croissance BTP Sud Maroc, performance financière, opportunités d\'investissement cimenterie.'
      : 'Investor information for Dakhla Aménagement. Morocco cement market, Southern Morocco BTP growth, financial performance, cement investment opportunities.';

  const keywords =
    loc === 'fr'
      ? [
          'investissement ciment Maroc',
          'BTP Maroc',
          ...KEYWORDS.business,
          'action ciment Maroc',
          'marché ciment Maroc',
        ]
      : [
          'cement investment Morocco',
          'BTP Morocco',
          ...KEYWORDS.business,
          'cement stock Morocco',
          'Morocco cement market',
        ];

  return buildMetadata({
    locale: loc,
    path: '/investisseurs',
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

  const name =
    loc === 'fr'
      ? 'Investisseurs — Dakhla Aménagement S.A.'
      : 'Investors — Dakhla Aménagement S.A.';
  const description =
    loc === 'fr'
      ? 'Information investisseurs : marché du ciment au Maroc, croissance BTP Sud Maroc, performance financière, opportunités d\'investissement cimenterie.'
      : 'Investor information: Morocco cement market, Southern Morocco BTP growth, financial performance, cement investment opportunities.';

  const breadcrumbs = [
    { name: loc === 'fr' ? 'Investisseurs' : 'Investors', path: '/investisseurs' },
  ];

  const schemas = [
    webPageSchema({
      name,
      description,
      path: '/investisseurs',
      locale: loc,
    }),
    breadcrumbSchema(breadcrumbs, loc),
  ];

  return (
    <>
      <JsonLdScript schema={schemas} />
      <InvestisseursPageClient />
    </>
  );
}
