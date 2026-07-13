import { buildMetadata, KEYWORDS } from '@/lib/seo';
import {
  webPageSchema,
  breadcrumbSchema,
} from '@/lib/structured-data';
import { JsonLdScript } from '@/components/shared/JsonLd';
import DurabilitePageClient from './DurabilitePageClient';

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
      path: '/durabilite',
      title:
        'Sustainability & CSR — Eco-friendly Cement | Dakhla Aménagement Morocco',
      description:
        "Dakhla Aménagement's sustainability commitment: industrial solar energy, CO2 reduction, recycling, community CSR program in Dakhla. Certified eco-friendly cement in Morocco.",
      keywords: [
        'eco-friendly cement Morocco',
        'sustainable cement Morocco',
        'CSR Morocco',
        'green cement Dakhla',
        'solar cement plant',
        'CO2 reduction cement',
        ...KEYWORDS.core,
      ],
    });
  }

  return buildMetadata({
    locale: 'fr',
    path: '/durabilite',
    title: 'Durabilité & RSE — Ciment Éco-responsable | Dakhla Aménagement Maroc',
    description:
      "Engagement durable de Dakhla Aménagement : énergie solaire industrielle, réduction CO2, recyclage, programme RSE communautaire à Dakhla. Ciment éco-responsable certifié au Maroc.",
    keywords: [
      'ciment durable',
      'RSE Maroc',
      'construction durable',
      'ciment éco-responsable',
      'ciment vert Maroc',
      'énergie solaire cimenterie',
      'réduction CO2 ciment',
      ...KEYWORDS.core,
    ],
  });
}

export default async function Page({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const loc: 'fr' | 'en' | 'ar' = (locale === 'en' ? 'en' : locale === 'ar' ? 'ar' : 'fr') as 'fr' | 'en' | 'ar';

  const name =
    loc === 'fr'
      ? 'Durabilité & RSE — Dakhla Aménagement'
      : 'Sustainability & CSR — Dakhla Aménagement';
  const description =
    loc === 'fr'
      ? "Engagement durable de Dakhla Aménagement : énergie solaire industrielle, réduction CO2, recyclage, programme RSE communautaire à Dakhla. Ciment éco-responsable certifié au Maroc."
      : "Dakhla Aménagement's sustainability commitment: industrial solar energy, CO2 reduction, recycling, community CSR program in Dakhla. Certified eco-friendly cement in Morocco.";

  const schemas = [
    webPageSchema({
      name,
      description,
      path: '/durabilite',
      locale: loc,
      breadcrumbs: [
        { name: loc === 'fr' ? 'Durabilité' : 'Sustainability', path: '/durabilite' },
      ],
    }),
    breadcrumbSchema(
      [{ name: loc === 'fr' ? 'Durabilité' : 'Sustainability', path: '/durabilite' }],
      loc,
    ),
  ];

  return (
    <>
      <JsonLdScript schema={schemas} />
      <DurabilitePageClient />
    </>
  );
}
