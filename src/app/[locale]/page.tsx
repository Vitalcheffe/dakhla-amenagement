import { buildMetadata, KEYWORDS } from '@/lib/seo';
import {
  organizationSchema,
  websiteSchema,
  localBusinessSchema,
  webPageSchema,
  productSchema,
  faqSchema,
} from '@/lib/structured-data';
import { JsonLdScript } from '@/components/shared/JsonLd';
import HomePageClient from './HomePageClient';

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
      path: '',
      title: 'Cement Morocco — CPJ 45 & CPJ 55 | Dakhla Aménagement | South Morocco Delivery',
      description:
        'Dakhla Aménagement S.A. — leading CPJ 45 and CPJ 55 cement producer in Morocco. Clinker grinding plant in Dakhla. Bulk, 50kg bags, big bag delivery across Southern Morocco and Mauritania. Free quote.',
      keywords: [
        'cement Morocco',
        'CPJ 45 Morocco',
        'CPJ 55 Morocco',
        'cement Dakhla',
        'cement manufacturer Morocco',
        'buy cement Morocco',
        'cement price Morocco',
        'bulk cement Morocco',
        'Dakhla Aménagement',
      ],
    });
  }

  return buildMetadata({
    locale: 'fr',
    path: '',
    title: 'Ciment Maroc — CPJ 45 & CPJ 55 | Dakhla Aménagement | Livraison Sud Maroc',
    description:
      'Dakhla Aménagement S.A. — producteur de ciment CPJ 45 et CPJ 55 au Maroc. Centre de broyage de clinker à Dakhla. Livraison vrac, sacs 50kg, big bag dans tout le Sud marocain et la Mauritanie. Prix ciment Maroc dès 1 500 DH/T. Devis gratuit.',
    keywords: [
      ...KEYWORDS.core,
      ...KEYWORDS.products,
      ...KEYWORDS.pricing,
      'ciment Maroc',
      'ciment Dakhla',
      'prix ciment Maroc',
    ],
  });
}

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const loc: 'fr' | 'en' = locale === 'en' ? 'en' : 'fr';

  const faqItems = [
    {
      question: 'Quel est le prix du ciment CPJ 45 au Maroc ?',
      answer:
        'Le ciment CPJ 45 de Dakhla Aménagement est disponible à partir de 1 500 DH la tonne. Le prix varie selon la quantité, le conditionnement (vrac, sacs 50kg, big bag) et la zone de livraison. Demandez un devis gratuit pour un tarif personnalisé.',
    },
    {
      question: 'Où acheter du ciment au Maroc ?',
      answer:
        "Dakhla Aménagement produit et livre du ciment CPJ 45 et CPJ 55 dans tout le Sud marocain (Dakhla, Laâyoune, Boujdour) et en Mauritanie. Commandez en ligne via ciment-dam.com ou contactez-nous au +212 658-265685.",
    },
    {
      question: 'Quelle différence entre CPJ 45 et CPJ 55 ?',
      answer:
        'Le CPJ 45 offre une résistance de 45 MPa, idéal pour le béton armé courant, les dallages et les fondations. Le CPJ 55 atteint 55 MPa, recommandé pour les grands ouvrages de génie civil, les infrastructures et les environnements agressifs (zone côtière).',
    },
    {
      question: 'Comment commander du ciment en vrac au Maroc ?',
      answer:
        "Contactez Dakhla Aménagement au +212 658-265685 ou via le formulaire de devis sur ciment-dam.com. Nous livrons en vrac par camion-citerne avec pompage direct en silo dans tout le Sud marocain.",
    },
    {
      question: 'Quelles normes le ciment DAM respecte-t-il ?',
      answer:
        'Les ciments CPJ 45 et CPJ 55 de Dakhla Aménagement sont conformes à la norme marocaine NM 10.1.004 et à la norme européenne EN 197-1. Chaque lot est testé en laboratoire avant expédition.',
    },
  ];

  const schemas = [
    organizationSchema(),
    websiteSchema(loc),
    localBusinessSchema(),
    webPageSchema({
      name: loc === 'fr' ? 'Ciment Maroc — Dakhla Aménagement' : 'Cement Morocco — Dakhla Aménagement',
      description:
        loc === 'fr'
          ? 'Producteur de ciment CPJ 45 et CPJ 55 au Maroc. Centre de broyage à Dakhla. Devis gratuit.'
          : 'CPJ 45 and CPJ 55 cement producer in Morocco. Grinding plant in Dakhla. Free quote.',
      path: '',
      locale: loc,
      breadcrumbs: [],
    }),
    productSchema({
      name: 'Ciment CPJ 45 — Dakhla Aménagement',
      description:
        'Ciment Portland Composé 45 MPa. Haute résistance pour béton armé, dallages, ouvrages de génie civil. Conforme NM 10.1.004 / EN 197-1.',
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
        'Ciment Portland Composé 55 MPa. Ultra haute résistance pour grands ouvrages de génie civil et infrastructure. Conforme NM 10.1.004 / EN 197-1.',
      sku: 'DAM-CPJ55',
      price: '1600',
      path: '/produits',
      locale: loc,
      image: '/images/products/cpj55-bags.jpg',
      ratingValue: '4.9',
      reviewCount: 64,
    }),
    faqSchema(faqItems),
  ];

  return (
    <>
      <JsonLdScript schema={schemas} />
      <HomePageClient />
    </>
  );
}
