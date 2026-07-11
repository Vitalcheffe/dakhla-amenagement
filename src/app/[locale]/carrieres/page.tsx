import { buildMetadata, KEYWORDS } from '@/lib/seo';
import { webPageSchema, breadcrumbSchema } from '@/lib/structured-data';
import { JsonLdScript } from '@/components/shared/JsonLd';
import CarrieresPageClient from './CarrieresPageClient';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const loc: 'fr' | 'en' = locale === 'en' ? 'en' : 'fr';

  const title =
    loc === 'fr'
      ? 'Carrières & Emploi — Recrutement Cimenterie Maroc | Dakhla Aménagement'
      : 'Careers & Jobs — Cement Plant Recruitment Morocco | Dakhla Aménagement';

  const description =
    loc === 'fr'
      ? 'Rejoignez Dakhla Aménagement. Offres d\'emploi dans la cimenterie au Maroc : production, maintenance, qualité, logistique, commerce. Carrières BTP Dakhla. Postulez en ligne.'
      : 'Join Dakhla Aménagement. Job opportunities in cement manufacturing in Morocco: production, maintenance, quality, logistics, sales. BTP careers in Dakhla. Apply online.';

  const keywords =
    loc === 'fr'
      ? [
          'emploi ciment Maroc',
          'recrutement cimenterie',
          'carrière BTP Dakhla',
          'emploi Dakhla',
          'recrutement ciment Maroc',
          ...KEYWORDS.business,
        ]
      : [
          'cement jobs Morocco',
          'cement plant recruitment',
          'careers BTP Dakhla',
          'jobs Dakhla',
          'cement hiring Morocco',
        ];

  return buildMetadata({
    locale: loc,
    path: '/carrieres',
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
      ? 'Carrières & Emploi — Dakhla Aménagement'
      : 'Careers & Jobs — Dakhla Aménagement';
  const description =
    loc === 'fr'
      ? 'Offres d\'emploi dans la cimenterie au Maroc : production, maintenance, qualité, logistique, commerce. Carrières BTP Dakhla.'
      : 'Job opportunities in cement manufacturing in Morocco: production, maintenance, quality, logistics, sales. BTP careers in Dakhla.';

  const breadcrumbs = [
    { name: loc === 'fr' ? 'Carrières' : 'Careers', path: '/carrieres' },
  ];

  const schemas = [
    webPageSchema({
      name,
      description,
      path: '/carrieres',
      locale: loc,
    }),
    breadcrumbSchema(breadcrumbs, loc),
  ];

  return (
    <>
      <JsonLdScript schema={schemas} />
      <CarrieresPageClient />
    </>
  );
}
