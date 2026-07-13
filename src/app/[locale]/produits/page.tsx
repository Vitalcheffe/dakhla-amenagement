import { buildMetadata, KEYWORDS } from '@/lib/seo';
import {
  webPageSchema,
  breadcrumbSchema,
  productSchema,
  serviceSchema,
} from '@/lib/structured-data';
import { JsonLdScript } from '@/components/shared/JsonLd';
import ProduitsPageClient from './ProduitsPageClient';

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
      path: '/produits',
      title: 'CPJ 35, 45, 55 Cement Morocco — Prices & Specs | SDAD',
      description:
        'CPJ 35, 45, 55 cement in Morocco. Prices from 70 DH/bag. Bulk, bags, big bag. NM 10.1.004 compliant. SDAD — free quote.',
      keywords: [
        ...KEYWORDS.products,
        ...KEYWORDS.pricing,
        'cement Morocco',
        'CPJ 45 Morocco',
        'CPJ 55 Morocco',
        'cement price Morocco',
        'cement specifications Morocco',
      ],
    });
  }

  return buildMetadata({
    locale: 'fr',
    path: '/produits',
    title: 'Ciment CPJ 35, 45, 55 Maroc — Prix & Specs | SDAD',
    description:
      'Ciment CPJ 35, 45, 55 au Maroc. Prix dès 70 DH/sac. Vrac, sacs, big bag. Conforme NM 10.1.004. SDAD — devis gratuit.',
    keywords: [
      ...KEYWORDS.products,
      ...KEYWORDS.pricing,
      'ciment CPJ 45 Maroc',
      'ciment CPJ 55 Maroc',
      'prix ciment CPJ 45',
      'prix ciment CPJ 55',
      'caractéristiques ciment Maroc',
      'ciment Portland composé Maroc',
    ],
  });
}

export default async function ProduitsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const loc: 'fr' | 'en' = locale === 'en' ? 'en' : 'fr';

  const breadcrumbs = [{ name: loc === 'fr' ? 'Produits' : 'Products', path: '/produits' }];

  const schemas = [
    webPageSchema({
      name:
        loc === 'fr'
          ? 'Ciment CPJ 45 & CPJ 55 Maroc — Prix & Caractéristiques'
          : 'CPJ 45 & CPJ 55 Cement Morocco — Prices & Specs',
      description:
        loc === 'fr'
          ? 'Découvrez le ciment CPJ 45 (1 500 DH/T) et CPJ 55 (1 600 DH/T) de Dakhla Aménagement. Résistance, finesse, conditionnement vrac/sacs/big bag. Conforme NM 10.1.004.'
          : 'Discover CPJ 45 (1,500 DH/T) and CPJ 55 (1,600 DH/T) cement from Dakhla Aménagement. Resistance, fineness, bulk/bags/big bag packaging. NM 10.1.004 compliant.',
      path: '/produits',
      locale: loc,
      breadcrumbs,
    }),
    breadcrumbSchema(breadcrumbs, loc),
    productSchema({
      name: 'Ciment CPJ 45 — Dakhla Aménagement',
      description:
        loc === 'fr'
          ? 'Ciment Portland Composé 45 MPa. Résistance 45 MPa à 28 jours, finesse Blaine 320 m²/kg, conditionnement vrac / sacs 50kg / big bag. Conforme NM 10.1.004 / EN 197-1. Idéal béton armé, dallages, fondations.'
          : 'Composite Portland Cement 45 MPa. 28-day strength 45 MPa, Blaine fineness 320 m²/kg, bulk / 50kg bags / big bag packaging. NM 10.1.004 / EN 197-1 compliant. Ideal for reinforced concrete, slabs, foundations.',
      sku: 'DAM-CPJ45',
      price: '1500',
      path: '/produits',
      locale: loc,
      image: '/images/products/cpj45-bags.jpg',
      ratingValue: '4.9',
      reviewCount: 87,
    }),
    productSchema({
      name: 'Ciment CPJ 55 — Dakhla Aménagement',
      description:
        loc === 'fr'
          ? 'Ciment Portland Composé 55 MPa. Ultra haute résistance pour grands ouvrages de génie civil, infrastructures et environnements agressifs (zone côtière). Finesse Blaine 380 m²/kg. Conforme NM 10.1.004 / EN 197-1.'
          : 'Composite Portland Cement 55 MPa. Ultra high strength for major civil engineering works, infrastructure and aggressive environments (coastal). Blaine fineness 380 m²/kg. NM 10.1.004 / EN 197-1 compliant.',
      sku: 'DAM-CPJ55',
      price: '1600',
      path: '/produits',
      locale: loc,
      image: '/images/products/cpj55-bags.jpg',
      ratingValue: '4.9',
      reviewCount: 64,
    }),
    serviceSchema({
      name:
        loc === 'fr'
          ? 'Production et vente de ciment CPJ 45 et CPJ 55 au Maroc'
          : 'CPJ 45 and CPJ 55 cement production and supply in Morocco',
      description:
        loc === 'fr'
          ? 'Dakhla Aménagement produit et livre du ciment CPJ 45 et CPJ 55 dans tout le Sud marocain et la Mauritanie. Centre de broyage moderne à Dakhla, capacité 500K tonnes/an. Conditionnement vrac, sacs 50kg, big bag.'
          : 'Dakhla Aménagement produces and delivers CPJ 45 and CPJ 55 cement across Southern Morocco and Mauritania. Modern grinding plant in Dakhla, 500K tons/year capacity. Bulk, 50kg bags, big bag packaging.',
      path: '/produits',
      locale: loc,
      serviceType: loc === 'fr' ? 'Fabrication et fourniture de ciment' : 'Cement manufacturing and supply',
    }),
  ];

  return (
    <>
      <JsonLdScript schema={schemas} />
      <ProduitsPageClient />
    </>
  );
}
