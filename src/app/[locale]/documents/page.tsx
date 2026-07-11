import { buildMetadata, KEYWORDS } from '@/lib/seo';
import { webPageSchema, breadcrumbSchema } from '@/lib/structured-data';
import { JsonLdScript } from '@/components/shared/JsonLd';
import DocumentsPageClient from './DocumentsPageClient';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const loc: 'fr' | 'en' = locale === 'en' ? 'en' : 'fr';

  const title =
    loc === 'fr'
      ? 'Documents & Téléchargements — Fiches Techniques, Certifications | DAM'
      : 'Documents & Downloads — Tech Sheets, Certifications | DAM';

  const description =
    loc === 'fr'
      ? 'Téléchargez fiches techniques ciment CPJ 45/CPJ 55, certificats NM 10.1.004/EN 197-1, fiches de sécurité, catalogues Dakhla Aménagement. Documentation technique ciment Maroc.'
      : 'Download CPJ 45/CPJ 55 cement technical data sheets, NM 10.1.004/EN 197-1 certificates, safety sheets, Dakhla Aménagement catalogs. Cement technical documentation Morocco.';

  const keywords =
    loc === 'fr'
      ? [
          'fiche technique ciment',
          'certificat',
          'documentation',
          ...KEYWORDS.products,
          'fiche sécurité ciment',
          'NM 10.1.004',
          'EN 197-1',
        ]
      : [
          'cement technical data sheet',
          'certificate',
          'documentation',
          ...KEYWORDS.products,
          'cement safety sheet',
          'NM 10.1.004',
          'EN 197-1',
        ];

  return buildMetadata({
    locale: loc,
    path: '/documents',
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
      ? 'Documents & Téléchargements — Dakhla Aménagement'
      : 'Documents & Downloads — Dakhla Aménagement';
  const description =
    loc === 'fr'
      ? 'Fiches techniques ciment CPJ 45/CPJ 55, certificats NM 10.1.004/EN 197-1, fiches de sécurité, catalogues Dakhla Aménagement.'
      : 'CPJ 45/CPJ 55 cement technical data sheets, NM 10.1.004/EN 197-1 certificates, safety sheets, Dakhla Aménagement catalogs.';

  const breadcrumbs = [
    { name: loc === 'fr' ? 'Documents' : 'Documents', path: '/documents' },
  ];

  const schemas = [
    webPageSchema({
      name,
      description,
      path: '/documents',
      locale: loc,
    }),
    breadcrumbSchema(breadcrumbs, loc),
  ];

  return (
    <>
      <JsonLdScript schema={schemas} />
      <DocumentsPageClient />
    </>
  );
}
