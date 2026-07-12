import { buildMetadata, KEYWORDS } from '@/lib/seo';
import { webPageSchema, breadcrumbSchema } from '@/lib/structured-data';
import { JsonLdScript } from '@/components/shared/JsonLd';
import PressePageClient from './PressePageClient';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const loc: 'fr' | 'en' = locale === 'en' ? 'en' : 'fr';

  const title =
    loc === 'fr'
      ? 'Espace Presse — Dakhla Aménagement Ciment Maroc | Communiqués & Médias'
      : 'Press Room — Dakhla Aménagement Cement Morocco | News & Media';

  const description =
    loc === 'fr'
      ? 'Communiqués de presse, kit média, contacts presse de Dakhla Aménagement et Développement Actualités de la cimenterie au Maroc, croissance, investissements, RSE.'
      : 'Press releases, media kit, press contacts for Dakhla Aménagement et Développement Cement industry news in Morocco, growth, investments, CSR.';

  const keywords =
    loc === 'fr'
      ? [
          'presse ciment Maroc',
          'communiqué',
          'média',
          'actualité ciment Maroc',
          'Dakhla Aménagement presse',
          ...KEYWORDS.business,
        ]
      : [
          'cement press Morocco',
          'press release',
          'media',
          'cement news Morocco',
          'Dakhla Aménagement press',
        ];

  return buildMetadata({
    locale: loc,
    path: '/presse',
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
      ? 'Espace Presse — Dakhla Aménagement'
      : 'Press Room — Dakhla Aménagement';
  const description =
    loc === 'fr'
      ? 'Communiqués de presse, kit média, contacts presse de Dakhla Aménagement et Développement Actualités de la cimenterie au Maroc.'
      : 'Press releases, media kit, press contacts for Dakhla Aménagement et Développement Cement industry news in Morocco.';

  const breadcrumbs = [
    { name: loc === 'fr' ? 'Presse' : 'Press', path: '/presse' },
  ];

  const schemas = [
    webPageSchema({
      name,
      description,
      path: '/presse',
      locale: loc,
    }),
    breadcrumbSchema(breadcrumbs, loc),
  ];

  return (
    <>
      <JsonLdScript schema={schemas} />
      <PressePageClient />
    </>
  );
}
