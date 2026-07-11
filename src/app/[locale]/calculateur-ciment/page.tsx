import { buildMetadata, KEYWORDS } from '@/lib/seo';
import {
  webPageSchema,
  breadcrumbSchema,
  faqSchema,
  serviceSchema,
} from '@/lib/structured-data';
import { JsonLdScript } from '@/components/shared/JsonLd';
import { Breadcrumbs } from '@/components/shared/Breadcrumbs';
import { CtaBanner } from '@/components/shared/RelatedLinks';
import CalculateurCimentPageClient from './CalculateurCimentPageClient';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const loc: 'fr' | 'en' = locale === 'en' ? 'en' : 'fr';

  if (loc === 'en') {
    return buildMetadata({
      locale: 'en',
      path: '/calculateur-ciment',
      title: 'Cement Dosage Calculator — Free Online Tool | Dakhla Aménagement',
      description:
        'Free cement dosage calculator. Enter dimensions, choose structure type, get exact cement quantity in tons, cost estimate and packaging suggestions. CPJ 45 & CPJ 55 Morocco.',
      keywords: ['cement calculator', 'cement dosage', 'concrete calculator', 'cement quantity', ...KEYWORDS.core],
    });
  }

  return buildMetadata({
    locale: 'fr',
    path: '/calculateur-ciment',
    title: 'Calculateur de Dosage Ciment — Outil Gratuit | Dakhla Aménagement',
    description:
      "Calculateur de dosage ciment gratuit. Entrez les dimensions, choisissez le type d'ouvrage, obtenez la quantité exacte en tonnes, l'estimation du coût et les conditionnements suggérés. CPJ 45 & CPJ 55 Maroc.",
    keywords: ['calculateur ciment', 'dosage ciment', 'calcul quantité ciment', 'calculateur béton', ...KEYWORDS.core, ...KEYWORDS.application],
  });
}

const faqItems = [
  {
    question: 'Comment calculer la quantité de ciment pour mon chantier ?',
    answer:
      "Utilisez notre calculateur : entrez les dimensions (longueur × largeur × hauteur), choisissez le type d'ouvrage (fondation, dallage, poteau...). Le calculateur applique le dosage recommandé (300-400 kg/m³) et inclut une marge de sécurité de 5% pour les pertes.",
  },
  {
    question: 'Quel dosage de ciment pour le béton armé ?',
    answer:
      'Le dosage standard pour le béton armé courant est de 350 kg/m³. Pour les fondations, 300 kg/m³ suffisent. Pour les ouvrages de génie civil exigeants, utilisez 400 kg/m³ avec du ciment CPJ 55.',
  },
  {
    question: 'Quelle marge de sécurité prévoir pour le ciment ?',
    answer:
      "Une marge de 5 à 10% est recommandée pour couvrir les pertes (rebuts, résidus de malaxage, irrégularités). Notre calculateur inclut 5% par défaut, ajustable jusqu'à 15%.",
  },
  {
    question: 'Quel conditionnement choisir selon la quantité ?',
    answer:
      'Vrac (camion-citerne) pour plus de 30 tonnes avec silo sur chantier. Big Bag 1T pour les chantiers moyens (manutention par grue). Sacs 50kg pour la maçonnerie et petits chantiers.',
  },
  {
    question: 'Le calculateur donne-t-il une estimation de prix ?',
    answer:
      "Oui, le calculateur estime le coût basé sur les prix CPJ 45 (1 500 DH/T) et CPJ 55 (1 600 DH/T). Pour un prix précis incluant la livraison, demandez un devis gratuit.",
  },
];

export default async function CalculateurCimentPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const loc: 'fr' | 'en' = locale === 'en' ? 'en' : 'fr';

  const schemas = [
    webPageSchema({
      name: loc === 'fr' ? 'Calculateur de Dosage Ciment — DAM' : 'Cement Dosage Calculator — DAM',
      description: loc === 'fr'
        ? "Outil gratuit de calcul du dosage ciment selon le type d'ouvrage."
        : 'Free cement dosage calculation tool by structure type.',
      path: '/calculateur-ciment',
      locale: loc,
    }),
    breadcrumbSchema([{ name: loc === 'fr' ? 'Calculateur' : 'Calculator', path: '/calculateur-ciment' }], loc),
    serviceSchema({
      name: loc === 'fr' ? 'Calculateur de dosage ciment' : 'Cement dosage calculator',
      description: loc === 'fr'
        ? "Service gratuit de calcul de la quantité de ciment nécessaire pour tout type d'ouvrage."
        : 'Free service to calculate the cement quantity needed for any structure type.',
      path: '/calculateur-ciment',
      locale: loc,
      serviceType: 'Cement dosage calculation tool',
    }),
    faqSchema(faqItems),
  ];

  return (
    <>
      <JsonLdScript schema={schemas} />
      <Breadcrumbs items={[{ name: loc === 'fr' ? 'Calculateur' : 'Calculator', path: '/calculateur-ciment' }]} locale={locale} />
      <CalculateurCimentPageClient />
      <CtaBanner locale={locale} />
    </>
  );
}
