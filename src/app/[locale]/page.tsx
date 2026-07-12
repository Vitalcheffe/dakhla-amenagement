import Link from 'next/link';
import { buildMetadata, KEYWORDS } from '@/lib/seo';
import {
  organizationSchema,
  websiteSchema,
  localBusinessSchema,
  webPageSchema,
  productSchema,
  faqSchema,
  speakableSchema,
} from '@/lib/structured-data';
import { JsonLdScript } from '@/components/shared/JsonLd';
import { ArrowRight } from 'lucide-react';
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
      title: 'Cement Morocco — CPJ 45 & CPJ 55 | Dakhla Aménagement et Développement | SDAD',
      description:
        'Dakhla Aménagement et Développement — leading CPJ 45 and CPJ 55 cement producer in Morocco. Clinker grinding plant in Dakhla. Bulk, 50kg bags, big bag delivery across Southern Morocco and Mauritania. Free quote.',
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
    title: 'Ciment Maroc — CPJ 45 & CPJ 55 | Dakhla Aménagement et Développement | SDAD',
    description:
      'Dakhla Aménagement et Développement — producteur de ciment CPJ 45 et CPJ 55 au Maroc. Centre de broyage de clinker à Dakhla. Livraison vrac, sacs 50kg, big bag dans tout le Sud marocain et la Mauritanie. Prix ciment Maroc dès 1 500 DH/T. Devis gratuit.',
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
    speakableSchema({
      path: '',
      locale: loc,
      cssSelectors: ['h1', '.hero-subtitle', '.stat-value', '.faq-question'],
    }),
  ];

  const isFr = loc === 'fr';

  // Keyword cluster navigation — boosts internal linking for SEO
  const keywordClusters = [
    {
      title: isFr ? 'Nos Ciments' : 'Our Cements',
      links: [
        { label: 'CPJ 45', href: '/cpj-45' },
        { label: 'CPJ 55', href: '/cpj-55' },
        { label: 'Ciment en Vrac', href: '/ciment-vrac' },
        { label: 'Sacs 50kg', href: '/ciment-sacs' },
        { label: 'Big Bag 1T', href: '/ciment-big-bag' },
      ],
    },
    {
      title: isFr ? 'Guide & Prix' : 'Guide & Prices',
      links: [
        { label: 'Ciment Maroc', href: '/ciment-maroc' },
        { label: 'Prix Ciment', href: '/prix-ciment' },
        { label: 'Livraison', href: '/livraison-ciment' },
        { label: 'Devis Gratuit', href: '/devis' },
      ],
    },
    {
      title: isFr ? 'Applications' : 'Applications',
      links: [
        { label: 'Béton Armé', href: '/beton-arme-maroc' },
        { label: 'Génie Civil', href: '/genie-civil-ciment' },
        { label: 'Construction Dakhla', href: '/construction-dakhla' },
        { label: 'Fournisseur BTP', href: '/fournisseur-ciment-maroc' },
      ],
    },
    {
      title: isFr ? 'Zones de Livraison' : 'Delivery Zones',
      links: [
        { label: 'Ciment Dakhla', href: '/ciment-dakhla' },
        { label: 'Ciment Laâyoune', href: '/ciment-laayoune' },
        { label: 'Ciment Boujdour', href: '/ciment-boujdour' },
        { label: 'Sud Maroc', href: '/ciment-sud-maroc' },
        { label: 'Mauritanie', href: '/ciment-mauritanie' },
      ],
    },
  ];

  return (
    <>
      <JsonLdScript schema={schemas} />
      <HomePageClient />

      {/* Keyword Cluster Navigation — internal linking for SEO */}
      <section className="py-16 md:py-20 bg-[#F7F8FA] border-t border-[#E5E7EB]">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <h2 className="text-2xl md:text-3xl font-bold text-[#1B3A5C] mb-2 text-center">
            {isFr ? 'Explorez nos ressources ciment' : 'Explore our cement resources'}
          </h2>
          <p className="text-center text-[#6B7280] mb-10 max-w-2xl mx-auto">
            {isFr
              ? 'Tout ce dont vous avez besoin sur le ciment au Maroc : produits, prix, applications, zones de livraison.'
              : 'Everything you need about cement in Morocco: products, prices, applications, delivery zones.'}
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {keywordClusters.map((cluster, i) => (
              <div key={i}>
                <h3 className="text-xs font-semibold tracking-[0.15em] uppercase text-[#E8B84B] mb-4">
                  {cluster.title}
                </h3>
                <ul className="space-y-2.5">
                  {cluster.links.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={`/${locale}${link.href}`}
                        className="group inline-flex items-center gap-1.5 text-sm text-[#1B3A5C] hover:text-[#C1272D] transition-colors"
                      >
                        <ArrowRight className="w-3 h-3 text-[#E8B84B] group-hover:translate-x-0.5 transition-transform" />
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
