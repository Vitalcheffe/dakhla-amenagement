import { buildMetadata, KEYWORDS } from '@/lib/seo';
import {
  webPageSchema,
  breadcrumbSchema,
  organizationSchema,
} from '@/lib/structured-data';
import { JsonLdScript } from '@/components/shared/JsonLd';
import AProposPageClient from './AProposPageClient';

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
      path: '/a-propos',
      title: 'About — Dakhla Aménagement S.A. | Morocco Cement Since 2015',
      description:
        'Dakhla Aménagement S.A., CPJ 45 and CPJ 55 cement producer in Dakhla since 2015. Modern clinker grinding plant, 500K tons/year capacity. NM 10.1.004, EN 197-1, ISO 9001 certified.',
      keywords: [...KEYWORDS.core, ...KEYWORDS.business],
    });
  }

  return buildMetadata({
    locale: 'fr',
    path: '/a-propos',
    title: 'À Propos — Dakhla Aménagement S.A. | Cimenterie Maroc Depuis 2015',
    description:
      'Dakhla Aménagement S.A., producteur de ciment CPJ 45 et CPJ 55 à Dakhla depuis 2015. Centre de broyage de clinker moderne, capacité 500K tonnes/an. Certifications NM 10.1.004, EN 197-1, ISO 9001.',
    keywords: [...KEYWORDS.core, ...KEYWORDS.business],
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
      ? 'À Propos — Dakhla Aménagement S.A.'
      : 'About — Dakhla Aménagement S.A.';
  const description =
    loc === 'fr'
      ? 'Dakhla Aménagement S.A., producteur de ciment CPJ 45 et CPJ 55 à Dakhla depuis 2015. Centre de broyage de clinker moderne, capacité 500K tonnes/an. Certifications NM 10.1.004, EN 197-1, ISO 9001.'
      : 'Dakhla Aménagement S.A., CPJ 45 and CPJ 55 cement producer in Dakhla since 2015. Modern clinker grinding plant, 500K tons/year capacity. NM 10.1.004, EN 197-1, ISO 9001 certified.';

  const schemas = [
    organizationSchema(),
    webPageSchema({
      name,
      description,
      path: '/a-propos',
      locale: loc,
      breadcrumbs: [{ name: loc === 'fr' ? 'À Propos' : 'About', path: '/a-propos' }],
    }),
    breadcrumbSchema(
      [{ name: loc === 'fr' ? 'À Propos' : 'About', path: '/a-propos' }],
      loc,
    ),
  ];

  return (
    <>
      <JsonLdScript schema={schemas} />
      <AProposPageClient />
    </>
  );
}
