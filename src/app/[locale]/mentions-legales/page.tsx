import { buildMetadata } from '@/lib/seo';
import { webPageSchema, breadcrumbSchema } from '@/lib/structured-data';
import { JsonLdScript } from '@/components/shared/JsonLd';
import MentionsLegalesPageClient from './MentionsLegalesPageClient';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const loc: 'fr' | 'en' = locale === 'en' ? 'en' : 'fr';

  const title =
    loc === 'fr'
      ? 'Mentions Légales — Dakhla Aménagement et Développement | Ciment Maroc'
      : 'Legal Notice — Dakhla Aménagement et Développement | Morocco Cement';

  const description =
    loc === 'fr'
      ? 'Mentions légales de Dakhla Aménagement et Développement — éditeur du site ciment-dam.com. Informations légales, propriété intellectuelle, RGPD, gestion des cookies.'
      : 'Legal notice for Dakhla Aménagement et Développement — publisher of ciment-dam.com. Legal information, intellectual property, GDPR, cookie management.';

  // Minimal keywords for legal page (low priority SEO)
  const keywords =
    loc === 'fr'
      ? ['mentions légales', 'Dakhla Aménagement', 'ciment-dam.com']
      : ['legal notice', 'Dakhla Aménagement', 'ciment-dam.com'];

  return buildMetadata({
    locale: loc,
    path: '/mentions-legales',
    title,
    description,
    keywords,
    noIndex: false, // kept indexable but lower SEO priority
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
      ? 'Mentions Légales — Dakhla Aménagement et Développement'
      : 'Legal Notice — Dakhla Aménagement et Développement';
  const description =
    loc === 'fr'
      ? 'Mentions légales de Dakhla Aménagement et Développement — éditeur du site ciment-dam.com. Informations légales, propriété intellectuelle, RGPD, gestion des cookies.'
      : 'Legal notice for Dakhla Aménagement et Développement — publisher of ciment-dam.com. Legal information, intellectual property, GDPR, cookie management.';

  const breadcrumbs = [
    {
      name: loc === 'fr' ? 'Mentions Légales' : 'Legal Notice',
      path: '/mentions-legales',
    },
  ];

  const schemas = [
    webPageSchema({
      name,
      description,
      path: '/mentions-legales',
      locale: loc,
    }),
    breadcrumbSchema(breadcrumbs, loc),
  ];

  return (
    <>
      <JsonLdScript schema={schemas} />
      <MentionsLegalesPageClient />
    </>
  );
}
