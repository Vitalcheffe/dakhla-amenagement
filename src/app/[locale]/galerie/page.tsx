import { buildMetadata, KEYWORDS } from '@/lib/seo';
import {
  webPageSchema,
  breadcrumbSchema,
  collectionPageSchema,
} from '@/lib/structured-data';
import { JsonLdScript } from '@/components/shared/JsonLd';
import GaleriePageClient from './GaleriePageClient';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const loc: 'fr' | 'en' = locale === 'en' ? 'en' : 'fr';

  const title =
    loc === 'fr'
      ? 'Galerie Photos — Usine, Laboratoire, Chantier | Dakhla Aménagement Ciment'
      : 'Photo Gallery — Plant, Lab, Construction Site | Dakhla Aménagement Cement';

  const description =
    loc === 'fr'
      ? 'Galerie photos de Dakhla Aménagement : usine de broyage, laboratoire qualité, chantiers, livraison de ciment au Maroc. Découvrez nos installations en images.'
      : 'Photo gallery of Dakhla Aménagement: grinding plant, quality lab, construction sites, cement delivery in Morocco. Discover our facilities in pictures.';

  const keywords = [
    ...(loc === 'fr' ? KEYWORDS.core : ['cement Morocco', 'cement Dakhla', 'cement plant Morocco']),
    loc === 'fr' ? 'galerie photos usine' : 'cement plant photo gallery',
  ];

  return buildMetadata({
    locale: loc,
    path: '/galerie',
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
      ? 'Galerie Photos — Dakhla Aménagement'
      : 'Photo Gallery — Dakhla Aménagement';
  const description =
    loc === 'fr'
      ? 'Galerie photos de Dakhla Aménagement : usine de broyage, laboratoire qualité, chantiers, livraison de ciment au Maroc.'
      : 'Photo gallery of Dakhla Aménagement: grinding plant, quality lab, construction sites, cement delivery in Morocco.';

  const breadcrumbs = [
    { name: loc === 'fr' ? 'Galerie' : 'Gallery', path: '/galerie' },
  ];

  // Collection page items — main gallery categories
  const collectionItems = [
    {
      name: loc === 'fr' ? 'Usine de broyage' : 'Grinding plant',
      url: `https://www.ciment-dam.com/${loc}/galerie#factory`,
    },
    {
      name: loc === 'fr' ? 'Laboratoire qualité' : 'Quality lab',
      url: `https://www.ciment-dam.com/${loc}/galerie#lab`,
    },
    {
      name: loc === 'fr' ? 'Produits ciment' : 'Cement products',
      url: `https://www.ciment-dam.com/${loc}/galerie#products`,
    },
    {
      name: loc === 'fr' ? 'Livraison & logistique' : 'Delivery & logistics',
      url: `https://www.ciment-dam.com/${loc}/galerie#delivery`,
    },
    {
      name: loc === 'fr' ? 'Chantiers' : 'Construction sites',
      url: `https://www.ciment-dam.com/${loc}/galerie#projects`,
    },
    {
      name: loc === 'fr' ? 'Dakhla & région' : 'Dakhla & region',
      url: `https://www.ciment-dam.com/${loc}/galerie#dakhla`,
    },
  ];

  const schemas = [
    webPageSchema({
      name,
      description,
      path: '/galerie',
      locale: loc,
    }),
    breadcrumbSchema(breadcrumbs, loc),
    collectionPageSchema({
      name,
      description,
      path: '/galerie',
      locale: loc,
      items: collectionItems,
    }),
  ];

  return (
    <>
      <JsonLdScript schema={schemas} />
      <GaleriePageClient />
    </>
  );
}
