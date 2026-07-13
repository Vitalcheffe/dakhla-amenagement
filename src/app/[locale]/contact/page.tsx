import { buildMetadata, KEYWORDS } from '@/lib/seo';
import {
  webPageSchema,
  breadcrumbSchema,
  localBusinessSchema,
  organizationSchema,
} from '@/lib/structured-data';
import { JsonLdScript } from '@/components/shared/JsonLd';
import ContactPageClient from './ContactPageClient';

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
      path: '/contact',
      title: 'Contact — Dakhla Aménagement Cement Morocco | Phone, Email, Address',
      description:
        'Contact Dakhla Aménagement et Développement in Dakhla, Morocco. Phone +212 658-265685, email contact@ciment-dam.com. Address: Quartier Lassargua, Avenue El Walae, Dakhla. Free cement quote.',
      keywords: [
        ...KEYWORDS.core,
        'contact Dakhla Aménagement',
        'contact cement Morocco',
        'cement supplier contact Morocco',
        'Dakhla cement phone',
        'ciment-dam.com contact',
        'Quartier Lassargua Dakhla',
        'Avenue El Walae Dakhla',
        'cement manufacturer Morocco contact',
      ],
    });
  }

  return buildMetadata({
    locale: 'fr',
    path: '/contact',
    title: 'Contact — Dakhla Aménagement Ciment Maroc | Téléphone, Email, Adresse',
    description:
      'Contactez Dakhla Aménagement et Développement à Dakhla, Maroc. Téléphone +212 658-265685, email contact@ciment-dam.com. Adresse: Quartier Lassargua, Avenue El Walae, Dakhla. Devis ciment gratuit.',
    keywords: [
      ...KEYWORDS.core,
      'contact Dakhla Aménagement',
      'contact ciment Maroc',
      'fournisseur ciment Maroc contact',
      'téléphone ciment Dakhla',
      'ciment-dam.com contact',
      'Quartier Lassargua Dakhla',
      'Avenue El Walae Dakhla',
      'fabricant ciment Maroc contact',
    ],
  });
}

export default async function ContactPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const loc: 'fr' | 'en' | 'ar' = (locale === 'en' ? 'en' : locale === 'ar' ? 'ar' : 'fr') as 'fr' | 'en' | 'ar';

  const breadcrumbs = [
    { name: loc === 'fr' ? 'Contact' : 'Contact', path: '/contact' },
  ];

  const schemas = [
    webPageSchema({
      name:
        loc === 'fr'
          ? 'Contact — Dakhla Aménagement Ciment Maroc'
          : 'Contact — Dakhla Aménagement Cement Morocco',
      description:
        loc === 'fr'
          ? 'Contactez Dakhla Aménagement et Développement à Dakhla, Maroc. Téléphone +212 658-265685, email contact@ciment-dam.com. Adresse: Quartier Lassargua, Avenue El Walae, Dakhla. Devis ciment gratuit.'
          : 'Contact Dakhla Aménagement et Développement in Dakhla, Morocco. Phone +212 658-265685, email contact@ciment-dam.com. Address: Quartier Lassargua, Avenue El Walae, Dakhla. Free cement quote.',
      path: '/contact',
      locale: loc,
      breadcrumbs,
    }),
    breadcrumbSchema(breadcrumbs, loc),
    // NAP consistency — LocalBusiness with full address, phone, hours, geo
    localBusinessSchema(),
    // Organization with ContactPoint (sales + customer support)
    organizationSchema(),
  ];

  return (
    <>
      <JsonLdScript schema={schemas} />
      <ContactPageClient />
    </>
  );
}
