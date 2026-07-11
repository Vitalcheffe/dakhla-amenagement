import { buildMetadata, KEYWORDS } from '@/lib/seo';
import {
  webPageSchema,
  breadcrumbSchema,
  collectionPageSchema,
} from '@/lib/structured-data';
import { JsonLdScript } from '@/components/shared/JsonLd';
import RealisationsPageClient from './RealisationsPageClient';

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
      path: '/realisations',
      title: 'Projects & Realizations — DAM Cement in Morocco | Dakhla Aménagement',
      description:
        'Discover projects built with DAM cement: residential construction, road infrastructure, port, school, villa in Dakhla and Southern Morocco. Reinforced concrete and civil engineering.',
      keywords: [...KEYWORDS.application, ...KEYWORDS.regional, 'realizations projects'],
    });
  }

  return buildMetadata({
    locale: 'fr',
    path: '/realisations',
    title: 'Réalisations & Projets — Ciment DAM au Maroc | Dakhla Aménagement',
    description:
      'Découvrez les projets réalisés avec le ciment DAM : construction résidentielle, infrastructures routières, port, école, villa à Dakhla et au Sud Maroc. béton armé et génie civil.',
    keywords: [
      ...KEYWORDS.application,
      ...KEYWORDS.regional,
      'réalisations projets',
      'projets ciment Maroc',
      'construction Dakhla',
    ],
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
      ? 'Réalisations & Projets — Dakhla Aménagement'
      : 'Projects & Realizations — Dakhla Aménagement';
  const description =
    loc === 'fr'
      ? 'Découvrez les projets réalisés avec le ciment DAM : construction résidentielle, infrastructures routières, port, école, villa à Dakhla et au Sud Maroc. béton armé et génie civil.'
      : 'Discover projects built with DAM cement: residential construction, road infrastructure, port, school, villa in Dakhla and Southern Morocco. Reinforced concrete and civil engineering.';

  const projectItems =
    loc === 'fr'
      ? [
          { name: 'Construction résidentielle', url: `/fr/realisations#project1` },
          { name: 'Infrastructure routière', url: `/fr/realisations#project2` },
          { name: 'Construction portuaire', url: `/fr/realisations#project3` },
          { name: 'Construction scolaire', url: `/fr/realisations#project4` },
          { name: 'Villa moderne', url: `/fr/realisations#project5` },
        ]
      : [
          { name: 'Residential construction', url: `/en/realisations#project1` },
          { name: 'Road infrastructure', url: `/en/realisations#project2` },
          { name: 'Port construction', url: `/en/realisations#project3` },
          { name: 'School construction', url: `/en/realisations#project4` },
          { name: 'Modern villa', url: `/en/realisations#project5` },
        ];

  const schemas = [
    webPageSchema({
      name,
      description,
      path: '/realisations',
      locale: loc,
      breadcrumbs: [
        { name: loc === 'fr' ? 'Réalisations' : 'Projects', path: '/realisations' },
      ],
    }),
    breadcrumbSchema(
      [{ name: loc === 'fr' ? 'Réalisations' : 'Projects', path: '/realisations' }],
      loc,
    ),
    collectionPageSchema({
      name,
      description,
      path: '/realisations',
      locale: loc,
      items: projectItems,
    }),
  ];

  return (
    <>
      <JsonLdScript schema={schemas} />
      <RealisationsPageClient />
    </>
  );
}
