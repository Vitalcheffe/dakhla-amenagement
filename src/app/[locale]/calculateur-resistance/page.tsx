import { buildMetadata, KEYWORDS } from '@/lib/seo';
import { webPageSchema, breadcrumbSchema, faqSchema, serviceSchema } from '@/lib/structured-data';
import { JsonLdScript } from '@/components/shared/JsonLd';
import { Breadcrumbs } from '@/components/shared/Breadcrumbs';
import { CtaBanner } from '@/components/shared/RelatedLinks';
import CalculateurResistancePageClient from './CalculateurResistancePageClient';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const loc: 'fr' | 'en' | 'ar' = (locale === 'en' ? 'en' : locale === 'ar' ? 'ar' : 'fr') as 'fr' | 'en' | 'ar';

  return buildMetadata({
    locale: loc,
    path: '/calculateur-resistance',
    title: loc === 'fr'
      ? 'Calculateur Résistance Béton — Loi d\'Abrams | SDAD'
      : 'Concrete Strength Calculator — Abrams\' Law | SDAD',
    description: loc === 'fr'
      ? "Calculez la résistance à la compression du béton selon le ciment, dosage, rapport E/C et âge. Basé sur la loi d'Abrams. Outil gratuit d'ingénierie."
      : 'Calculate concrete compressive strength based on cement, dosage, W/C ratio and age. Based on Abrams\' law. Free engineering tool.',
    keywords: ['calculateur résistance béton', 'loi Abrams', 'résistance béton', 'calcul béton', ...KEYWORDS.core],
  });
}

const faqItems = [
  {
    question: 'Qu\'est-ce que la loi d\'Abrams ?',
    answer: 'La loi d\'Abrams (Duff Abrams, 1918) établit que la résistance du béton est inversement proportionnelle au rapport eau/ciment (E/C). Formule: fc = A / B^(E/C), où A et B sont des constantes dépendant du ciment.',
  },
  {
    question: 'Quel rapport E/C pour une bonne résistance ?',
    answer: 'Pour une résistance optimale, visez un rapport E/C entre 0.40 et 0.50. Plus le rapport est bas, plus la résistance est élevée, mais le béton devient plus difficile à mettre en œuvre.',
  },
  {
    question: 'Comment améliorer la résistance du béton ?',
    answer: 'Utilisez un ciment CPJ 55, réduisez le rapport E/C, augmentez le dosage (350-400 kg/m³), assurez une cure adéquate (7 jours minimum), et utilisez des adjuvants superplastifiants.',
  },
];

export default async function CalculateurResistancePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const loc: 'fr' | 'en' | 'ar' = (locale === 'en' ? 'en' : locale === 'ar' ? 'ar' : 'fr') as 'fr' | 'en' | 'ar';

  const schemas = [
    webPageSchema({ name: 'Calculateur Résistance Béton — SDAD', description: 'Outil de calcul de résistance béton', path: '/calculateur-resistance', locale: loc }),
    breadcrumbSchema([{ name: 'Calculateur Résistance', path: '/calculateur-resistance' }], loc),
    serviceSchema({ name: 'Calculateur résistance béton', description: 'Outil gratuit', path: '/calculateur-resistance', locale: loc }),
    faqSchema(faqItems),
  ];

  return (
    <>
      <JsonLdScript schema={schemas} />
      <Breadcrumbs items={[{ name: 'Calculateur Résistance', path: '/calculateur-resistance' }]} locale={locale} />
      <CalculateurResistancePageClient />
      <CtaBanner locale={locale} />
    </>
  );
}
