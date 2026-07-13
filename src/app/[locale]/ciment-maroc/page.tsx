import Link from 'next/link';
import { buildMetadata, KEYWORDS } from '@/lib/seo';
import {
  webPageSchema,
  breadcrumbSchema,
  faqSchema,
  serviceSchema,
  productSchema,
  speakableSchema,
} from '@/lib/structured-data';
import { JsonLdScript } from '@/components/shared/JsonLd';
import { RelatedArticles } from '@/components/shared/RelatedArticles';
import { Breadcrumbs } from '@/components/shared/Breadcrumbs';
import { CheckCircle, ArrowRight, Factory, Truck, Beaker, MapPin } from 'lucide-react';

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
      path: '/ciment-maroc',
      title: 'Cement Morocco — Complete Guide: Types, Prices, Suppliers | DAM',
      description:
        'Everything about cement in Morocco: CPJ 45, CPJ 55, prices from 1,500 DH/T, NM 10.1.004 standards, suppliers, delivery. Dakhla Aménagement — leading cement producer in Southern Morocco.',
      keywords: [...KEYWORDS.core, ...KEYWORDS.pricing, 'cement Morocco', 'cement types Morocco'],
    });
  }

  return buildMetadata({
    locale: 'fr',
    path: '/ciment-maroc',
    title: 'Ciment Maroc — Guide Complet : Types, Prix, Fournisseurs | Dakhla Aménagement',
    description:
      'Tout savoir sur le ciment au Maroc : CPJ 45, CPJ 55, prix dès 1 500 DH/T, normes NM 10.1.004, fournisseurs, livraison. Dakhla Aménagement — premier producteur de ciment du Sud marocain.',
    keywords: [...KEYWORDS.core, ...KEYWORDS.pricing, ...KEYWORDS.products, 'ciment Maroc'],
  });
}

const faqItems = [
  {
    question: 'Quel ciment choisir au Maroc ?',
    answer:
      'Au Maroc, le choix du ciment dépend de votre projet : CPJ 45 (45 MPa) pour le béton armé courant, dallages et fondations ; CPJ 55 (55 MPa) pour les grands ouvrages de génie civil, infrastructures et zones côtières. Dakhla Aménagement produit les deux qualités conformes à la norme NM 10.1.004.',
  },
  {
    question: 'Quel est le prix du ciment au Maroc en 2026 ?',
    answer:
      'Le prix du ciment au Maroc varie selon le type et le conditionnement : CPJ 45 à partir de 1 500 DH/T et CPJ 55 à partir de 1 600 DH/T chez Dakhla Aménagement. Le conditionnement en vrac, sacs 50kg ou big bag influence le prix final. Demandez un devis pour un tarif personnalisé.',
  },
  {
    question: 'Où acheter du ciment au Maroc ?',
    answer:
      "Dakhla Aménagement produit et livre du ciment CPJ 45 et CPJ 55 dans tout le Sud marocain (Dakhla, Laâyoune, Boujdour, Tan-Tan) et en Mauritanie. Commandez via ciment-dam.com ou au +212 658-265685. Livraison vrac, sacs et big bag.",
  },
  {
    question: 'Quelles normes pour le ciment marocain ?',
    answer:
      'Le ciment au Maroc doit respecter la norme NM 10.1.004 (norme marocaine) et idéalement la norme européenne EN 197-1. Les ciments CPJ 45 et CPJ 55 de Dakhla Aménagement sont conformes à ces deux normes et testés en laboratoire avant expédition.',
  },
  {
    question: 'Quelle quantité de ciment pour ma construction ?',
    answer:
      "La quantité de ciment dépend du type d'ouvrage : environ 300-350 kg/m³ pour un béton armé courant, 400 kg/m³ pour un béton haute résistance. Consultez notre guide de dosage sur le blog DAM ou demandez conseil à notre équipe technique.",
  },
];

export default async function CimentMarocPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const loc: 'fr' | 'en' = locale === 'en' ? 'en' : 'fr';
  const isFr = loc === 'fr';

  const schemas = [
    webPageSchema({
      name: isFr ? 'Ciment Maroc — Guide Complet' : 'Cement Morocco — Complete Guide',
      description: isFr
        ? 'Guide complet du ciment au Maroc : types, prix, normes, fournisseurs, livraison.'
        : 'Complete guide to cement in Morocco: types, prices, standards, suppliers, delivery.',
      path: '/ciment-maroc',
      locale: loc,
    }),
    breadcrumbSchema(
      [
        { name: isFr ? 'Ciment Maroc' : 'Cement Morocco', path: '/ciment-maroc' },
      ],
      loc,
    ),
    serviceSchema({
      name: isFr ? 'Ciment Maroc — Production et Fourniture' : 'Cement Morocco — Production & Supply',
      description: isFr
        ? 'Production, conditionnement et livraison de ciment CPJ 45 et CPJ 55 au Maroc.'
        : 'Production, packaging and delivery of CPJ 45 and CPJ 55 cement in Morocco.',
      path: '/ciment-maroc',
      locale: loc,
      serviceType: 'Cement manufacturing and supply',
    }),
    productSchema({
      name: 'Ciment CPJ 45 Maroc',
      description: 'Ciment Portland Composé 45 MPa — béton armé, dallages, génie civil. Conforme NM 10.1.004.',
      sku: 'DAM-CPJ45',
      price: '1500',
      path: '/ciment-maroc',
      locale: loc,
      image: '/images/products/cpj45-bags.jpg',
      ratingValue: '4.9',
      reviewCount: 87,
    }),
    productSchema({
      name: 'Ciment CPJ 55 Maroc',
      description: 'Ciment Portland Composé 55 MPa — grands ouvrages, infrastructure, zone côtière. Conforme NM 10.1.004.',
      sku: 'DAM-CPJ55',
      price: '1600',
      path: '/ciment-maroc',
      locale: loc,
      image: '/images/products/cpj55-bags.jpg',
      ratingValue: '4.9',
      reviewCount: 64,
    }),
    faqSchema(faqItems),
    speakableSchema({
      path: '/ciment-maroc',
      locale: loc,
      cssSelectors: ['h1', '.hero-subtitle', '.cement-type-card', '.faq-question'],
    }),
  ];

  const features = isFr
    ? [
        { icon: Factory, title: 'Production Locale', desc: 'Centre de broyage de clinker à Dakhla, capacité 500K tonnes/an' },
        { icon: Beaker, title: 'Qualité Certifiée', desc: 'Conforme NM 10.1.004, EN 197-1, ISO 9001. Tests laboratoire' },
        { icon: Truck, title: 'Livraison Rapide', desc: 'Vrac, sacs 50kg, big bag. Sud Maroc + Mauritanie' },
        { icon: MapPin, title: 'Proximité', desc: 'Basés à Dakhla, au cœur du Sud marocain en développement' },
      ]
    : [
        { icon: Factory, title: 'Local Production', desc: 'Clinker grinding plant in Dakhla, 500K tons/year capacity' },
        { icon: Beaker, title: 'Certified Quality', desc: 'NM 10.1.004, EN 197-1, ISO 9001 compliant. Lab tested' },
        { icon: Truck, title: 'Fast Delivery', desc: 'Bulk, 50kg bags, big bag. Southern Morocco + Mauritania' },
        { icon: MapPin, title: 'Proximity', desc: 'Based in Dakhla, heart of the developing Southern Morocco' },
      ];

  const cementTypes = isFr
    ? [
        { name: 'CPJ 45', resistance: '45 MPa', price: '1 500 DH/T', use: 'Béton armé, dallages, fondations', href: '/produits' },
        { name: 'CPJ 55', resistance: '55 MPa', price: '1 600 DH/T', use: 'Génie civil, infrastructure, zone côtière', href: '/produits' },
      ]
    : [
        { name: 'CPJ 45', resistance: '45 MPa', price: '1,500 DH/T', use: 'Reinforced concrete, slabs, foundations', href: '/produits' },
        { name: 'CPJ 55', resistance: '55 MPa', price: '1,600 DH/T', use: 'Civil engineering, infrastructure, coastal', href: '/produits' },
      ];

  const cities = ['Dakhla', 'Laâyoune', 'Boujdour', 'Tan-Tan', 'Guelmim', 'Tarfaya', 'Es-Semara', 'Nouakchott'];

  return (
    <>
      <JsonLdScript schema={schemas} />
      <Breadcrumbs items={[{ name: isFr ? 'Ciment Maroc' : 'Cement Morocco', path: '/ciment-maroc' }]} locale={locale} />

      {/* Hero */}
      <section className="bg-gradient-to-br from-[#1B3A5C] to-[#0f1f33] text-white py-20 md:py-28">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <div className="max-w-4xl">
            <span className="inline-block px-4 py-1.5 bg-[#E8B84B]/20 text-[#E8B84B] text-sm font-medium rounded-full mb-6">
              {isFr ? 'Guide Ciment Maroc 2026' : 'Morocco Cement Guide 2026'}
            </span>
            <h1 className="text-[clamp(2rem,5vw,3.5rem)] font-bold leading-[1.1] mb-6">
              {isFr ? 'Ciment Maroc — Tout ce qu\'il faut savoir' : 'Cement Morocco — Everything you need to know'}
            </h1>
            <p className="text-lg md:text-xl text-white/80 leading-relaxed mb-8 max-w-3xl">
              {isFr
                ? 'Types de ciment, prix, normes, fournisseurs, livraison : le guide complet du ciment au Maroc par Dakhla Aménagement, producteur de CPJ 45 et CPJ 55 à Dakhla.'
                : 'Cement types, prices, standards, suppliers, delivery: the complete guide to cement in Morocco by Dakhla Aménagement, CPJ 45 and CPJ 55 producer in Dakhla.'}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href={`/${locale}/devis`}
                className="inline-flex items-center gap-2 px-6 py-3 bg-[#C1272D] text-white font-semibold rounded-full hover:bg-[#C1272D]/90 transition-colors"
              >
                {isFr ? 'Demander un devis' : 'Request a quote'}
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href={`/${locale}/produits`}
                className="inline-flex items-center gap-2 px-6 py-3 border border-white/30 text-white font-semibold rounded-full hover:bg-white/10 transition-colors"
              >
                {isFr ? 'Voir les produits' : 'View products'}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((f, i) => (
              <div key={i} className="text-center">
                <div className="w-14 h-14 rounded-full bg-[#1B3A5C]/5 flex items-center justify-center mx-auto mb-4">
                  <f.icon className="w-7 h-7 text-[#1B3A5C]" />
                </div>
                <h3 className="font-bold text-[#1B3A5C] mb-2">{f.title}</h3>
                <p className="text-sm text-[#6B7280] leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cement Types */}
      <section className="py-16 md:py-24 bg-[#F7F8FA]">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1B3A5C] mb-4 text-center">
            {isFr ? 'Types de ciment au Maroc' : 'Cement types in Morocco'}
          </h2>
          <p className="text-center text-[#6B7280] mb-12 max-w-2xl mx-auto">
            {isFr
              ? 'Dakhla Aménagement produit deux qualités de ciment Portland Composé (CPJ) conformes aux normes marocaines et européennes.'
              : 'Dakhla Aménagement produces two qualities of Composite Portland Cement (CPJ) compliant with Moroccan and European standards.'}
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {cementTypes.map((c) => (
              <div key={c.name} className="bg-white border border-[#E5E7EB] rounded-2xl p-8 card-lift">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-2xl font-bold text-[#1B3A5C]">{c.name}</h3>
                  <span className="px-3 py-1 bg-[#E8B84B]/15 text-[#E8B84B] text-sm font-semibold rounded-full">
                    {c.price}
                  </span>
                </div>
                <dl className="space-y-3 mb-6">
                  <div className="flex justify-between text-sm">
                    <dt className="text-[#6B7280]">{isFr ? 'Résistance' : 'Resistance'}</dt>
                    <dd className="font-semibold text-[#1A1A2E]">{c.resistance}</dd>
                  </div>
                  <div className="flex justify-between text-sm">
                    <dt className="text-[#6B7280]">{isFr ? 'Usage' : 'Use'}</dt>
                    <dd className="font-semibold text-[#1A1A2E] text-right">{c.use}</dd>
                  </div>
                </dl>
                <Link
                  href={`/${locale}${c.href}`}
                  className="inline-flex items-center gap-1 text-sm font-medium text-[#C1272D] hover:gap-2 transition-all"
                >
                  {isFr ? 'En savoir plus' : 'Learn more'}
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Delivery Zones */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1B3A5C] mb-4 text-center">
            {isFr ? 'Zones de livraison du ciment' : 'Cement delivery zones'}
          </h2>
          <p className="text-center text-[#6B7280] mb-12 max-w-2xl mx-auto">
            {isFr
              ? 'Nous livrons du ciment CPJ 45 et CPJ 55 dans tout le Sud marocain et en Mauritanie.'
              : 'We deliver CPJ 45 and CPJ 55 cement across Southern Morocco and Mauritania.'}
          </p>
          <div className="flex flex-wrap justify-center gap-3 max-w-3xl mx-auto">
            {cities.map((city) => (
              <span
                key={city}
                className="px-5 py-2.5 bg-[#1B3A5C]/5 text-[#1B3A5C] font-medium rounded-full flex items-center gap-2"
              >
                <MapPin className="w-4 h-4 text-[#E8B84B]" />
                {city}
              </span>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link
              href={`/${locale}/livraison-ciment`}
              className="inline-flex items-center gap-2 text-[#C1272D] font-medium hover:gap-3 transition-all"
            >
              {isFr ? 'Voir toutes les zones de livraison' : 'View all delivery zones'}
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 md:py-24 bg-[#F7F8FA]">
        <div className="max-w-4xl mx-auto px-6 md:px-12">
          <div className="prose prose-lg max-w-none">
            <h2 className="text-3xl font-bold text-[#1B3A5C] mb-6">
              {isFr ? 'Le ciment au Maroc : marché et acteurs' : 'Cement in Morocco: market and players'}
            </h2>
            <p className="text-[#1A1A2E]/80 leading-relaxed mb-6">
              {isFr
                ? "Le Maroc est l'un des plus grands marchés du ciment en Afrique, avec une consommation annuelle dépassant les 15 millions de tonnes. Le secteur, soutenu par les grands projets d'infrastructure (autoroutes, ports, barrages) et le dynamisme du BTP, est encadré par la norme NM 10.1.004 qui garantit la qualité et la sécurité des ouvrages."
                : "Morocco is one of the largest cement markets in Africa, with annual consumption exceeding 15 million tons. The sector, supported by major infrastructure projects (highways, ports, dams) and a dynamic construction industry, is regulated by the NM 10.1.004 standard which ensures quality and safety of structures."}
            </p>
            <p className="text-[#1A1A2E]/80 leading-relaxed mb-6">
              {isFr
                ? "Dakhla Aménagement (DAM) occupe une position stratégique dans le Sud marocain. Notre centre de broyage de clinker à Dakhla, d'une capacité de 500 000 tonnes par an, approvisionne les chantiers du Sud (Dakhla, Laâyoune, Boujdour) et de la Mauritanie voisine en ciment CPJ 45 et CPJ 55 de qualité supérieure."
                : "Dakhla Aménagement (DAM) holds a strategic position in Southern Morocco. Our clinker grinding plant in Dakhla, with a capacity of 500,000 tons per year, supplies construction sites in the South (Dakhla, Laayoune, Boujdour) and neighboring Mauritania with high-quality CPJ 45 and CPJ 55 cement."}
            </p>

            <h3 className="text-2xl font-bold text-[#1B3A5C] mt-10 mb-4">
              {isFr ? 'Comment choisir son ciment au Maroc ?' : 'How to choose cement in Morocco?'}
            </h3>
            <ul className="space-y-3 mb-6">
              {(isFr
                ? [
                    'Identifier la résistance nécessaire : 45 MPa (CPJ 45) pour le courant, 55 MPa (CPJ 55) pour les ouvrages exigeants',
                    'Vérifier la conformité aux normes NM 10.1.004 et EN 197-1',
                    'Choisir le conditionnement adapté : vrac pour les gros chantiers, sacs 50kg pour la maçonnerie, big bag pour le moyen volume',
                    'Privilégier un producteur local pour réduire les délais et coûts de livraison',
                    'Demander les fiches techniques et certificats de conformité',
                  ]
                : [
                    'Identify the required strength: 45 MPa (CPJ 45) for standard use, 55 MPa (CPJ 55) for demanding structures',
                    'Verify compliance with NM 10.1.004 and EN 197-1 standards',
                    'Choose the right packaging: bulk for large sites, 50kg bags for masonry, big bag for medium volumes',
                    'Prefer a local producer to reduce delivery times and costs',
                    'Request technical data sheets and certificates of conformity',
                  ]
              ).map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-[#1A1A2E]/80">
                  <CheckCircle className="w-5 h-5 text-[#E8B84B] shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <h3 className="text-2xl font-bold text-[#1B3A5C] mt-10 mb-4">
              {isFr ? 'Prix du ciment au Maroc' : 'Cement prices in Morocco'}
            </h3>
            <p className="text-[#1A1A2E]/80 leading-relaxed mb-6">
              {isFr
                ? "Le prix du ciment au Maroc varie selon le type (CPJ 45, CPJ 55), le conditionnement (vrac, sacs, big bag) et la zone de livraison. Chez Dakhla Aménagement, le CPJ 45 démarre à 1 500 DH/T et le CPJ 55 à 1 600 DH/T. Pour obtenir un prix précis adapté à votre projet, demandez un devis gratuit."
                : "Cement prices in Morocco vary by type (CPJ 45, CPJ 55), packaging (bulk, bags, big bag) and delivery zone. At Dakhla Aménagement, CPJ 45 starts at 1,500 DH/T and CPJ 55 at 1,600 DH/T. To get a precise price for your project, request a free quote."}
            </p>
            <div className="bg-white border border-[#E5E7EB] rounded-xl p-6 my-6">
              <Link
                href={`/${locale}/prix-ciment`}
                className="inline-flex items-center gap-2 text-[#C1272D] font-medium hover:gap-3 transition-all"
              >
                {isFr ? '→ Voir le guide complet des prix du ciment' : '→ View complete cement price guide'}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-3xl mx-auto px-6 md:px-12">
          <h2 className="text-3xl font-bold text-[#1B3A5C] mb-8 text-center">
            {isFr ? 'Questions fréquentes sur le ciment au Maroc' : 'FAQ about cement in Morocco'}
          </h2>
          <div className="space-y-4">
            {faqItems.map((item, i) => (
              <details key={i} className="group bg-[#F7F8FA] border border-[#E5E7EB] rounded-xl p-5">
                <summary className="font-semibold text-[#1B3A5C] cursor-pointer flex items-center justify-between">
                  {item.question}
                  <span className="text-[#E8B84B] group-open:rotate-180 transition-transform">⌄</span>
                </summary>
                <p className="mt-3 text-[#1A1A2E]/70 leading-relaxed text-sm">{item.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[#1B3A5C]">
        <div className="max-w-3xl mx-auto px-6 md:px-12 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            {isFr ? 'Besoin de ciment au Maroc ?' : 'Need cement in Morocco?'}
          </h2>
          <p className="text-white/70 mb-8">
            {isFr
              ? 'Dakhla Aménagement livre du ciment CPJ 45 et CPJ 55 dans tout le Sud marocain. Devis gratuit sous 24h.'
              : 'Dakhla Aménagement delivers CPJ 45 and CPJ 55 cement across Southern Morocco. Free quote within 24h.'}
          </p>
          <Link
            href={`/${locale}/devis`}
            className="inline-flex items-center gap-2 px-8 py-3 bg-[#C1272D] text-white font-semibold rounded-full hover:bg-[#C1272D]/90 transition-colors"
          >
            {isFr ? 'Demander un devis gratuit' : 'Request a free quote'}
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
      <RelatedArticles
        articleSlugs={['choisir-ciment-projet', 'normes-ciment-maroc', 'cpj45-vs-cpj55-guide', 'dakhla-pole-developpement']}
        locale={locale}
      />
    </>
  );
}
