import { buildMetadata, KEYWORDS } from '@/lib/seo';
import {
  webPageSchema,
  breadcrumbSchema,
  serviceSchema,
} from '@/lib/structured-data';
import { JsonLdScript } from '@/components/shared/JsonLd';
import ProcessusPageClient from './ProcessusPageClient';

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
      path: '/processus',
      title: 'Cement Manufacturing Process — Clinker Grinding | Dakhla Aménagement',
      description:
        'Discover the DAM cement manufacturing process: clinker reception, grinding, lab dosing, packaging. Modern grinding plant in Dakhla, Morocco. 500K tons/year capacity.',
      keywords: [
        ...KEYWORDS.core,
        'cement manufacturing process Morocco',
        'clinker grinding Morocco',
        'cement grinding plant Dakhla',
        'cement production Morocco',
        'how cement is made Morocco',
        'clinker reception',
        'cement laboratory Morocco',
      ],
    });
  }

  return buildMetadata({
    locale: 'fr',
    path: '/processus',
    title: 'Processus de Fabrication du Ciment — Broyage Clinker | Dakhla Aménagement',
    description:
      'Découvrez le processus de fabrication du ciment DAM : réception clinker, broyage, dosage laboratoire, conditionnement. Centre de broyage moderne à Dakhla, Maroc. Capacité 500K tonnes/an.',
    keywords: [
      ...KEYWORDS.core,
      'processus fabrication ciment Maroc',
      'broyage clinker Maroc',
      'centre de broyage Dakhla',
      'production ciment Maroc',
      'fabrication ciment Maroc',
      'réception clinker',
      'laboratoire ciment Maroc',
      'conditionnement ciment',
    ],
  });
}

export default async function ProcessusPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const loc: 'fr' | 'en' = locale === 'en' ? 'en' : 'fr';

  const breadcrumbs = [
    { name: loc === 'fr' ? 'Processus' : 'Process', path: '/processus' },
  ];

  const schemas = [
    webPageSchema({
      name:
        loc === 'fr'
          ? 'Processus de Fabrication du Ciment — Dakhla Aménagement'
          : 'Cement Manufacturing Process — Dakhla Aménagement',
      description:
        loc === 'fr'
          ? 'Découvrez le processus de fabrication du ciment DAM : réception clinker, broyage, dosage laboratoire, conditionnement. Centre de broyage moderne à Dakhla, Maroc. Capacité 500K tonnes/an.'
          : 'Discover the DAM cement manufacturing process: clinker reception, grinding, lab dosing, packaging. Modern grinding plant in Dakhla, Morocco. 500K tons/year capacity.',
      path: '/processus',
      locale: loc,
      breadcrumbs,
    }),
    breadcrumbSchema(breadcrumbs, loc),
    serviceSchema({
      name:
        loc === 'fr'
          ? 'Broyage et fabrication de ciment — Dakhla Aménagement'
          : 'Cement grinding and manufacturing — Dakhla Aménagement',
      description:
        loc === 'fr'
          ? 'Centre de broyage moderne à Dakhla, Maroc. Réception clinker, broyage à haute finesse, dosage laboratoire, conditionnement vrac/sacs/big bag. Capacité 500K tonnes/an. Conforme NM 10.1.004.'
          : 'Modern grinding plant in Dakhla, Morocco. Clinker reception, high-fineness grinding, lab dosing, bulk/bags/big bag packaging. 500K tons/year capacity. NM 10.1.004 compliant.',
      path: '/processus',
      locale: loc,
      serviceType:
        loc === 'fr'
          ? 'Broyage de clinker et fabrication de ciment'
          : 'Clinker grinding and cement manufacturing',
    }),
  ];

  return (
    <>
      <JsonLdScript schema={schemas} />
      <ProcessusPageClient />
    </>
  );
}
