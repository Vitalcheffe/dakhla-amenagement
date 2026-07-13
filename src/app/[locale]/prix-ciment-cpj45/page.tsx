import Link from 'next/link';
import { buildMetadata, KEYWORDS } from '@/lib/seo';
import {
  webPageSchema,
  breadcrumbSchema,
  productSchema,
  faqSchema,
  speakableSchema,
} from '@/lib/structured-data';
import { JsonLdScript } from '@/components/shared/JsonLd';
import { Breadcrumbs } from '@/components/shared/Breadcrumbs';
import { RelatedLinks, CtaBanner } from '@/components/shared/RelatedLinks';
import { PriceTypeLinks } from '@/components/shared/PriceTypeLinks';
import {
  CheckCircle,
  ArrowRight,
  Truck,
  Package,
  Container,
  Building2,
  Factory,
  Beaker,
} from 'lucide-react';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const loc: 'fr' | 'en' | 'ar' = (locale === 'en' ? 'en' : locale === 'ar' ? 'ar' : 'fr') as 'fr' | 'en' | 'ar';

  if (loc === 'en') {
    return buildMetadata({
      locale: 'en',
      path: '/prix-ciment-cpj45',
      title: 'CPJ 45 Cement Price Morocco — 75-85 DH/bag | SDAD',
      description:
        'CPJ 45 cement price in Morocco: 75-85 DH per 50kg bag, 1,500 DH/T. Detailed price table (bags, bulk, big bag). Best price/performance ratio. Free quote.',
      keywords: [
        'prix CPJ 45',
        'CPJ 45 price Morocco',
        'ciment 75 DH',
        'CPJ 45 tarif',
        'prix sac ciment 50kg Maroc',
        ...KEYWORDS.pricing,
        ...KEYWORDS.products,
      ],
    });
  }

  return buildMetadata({
    locale: 'fr',
    path: '/prix-ciment-cpj45',
    title: 'Prix Ciment CPJ 45 Maroc — 75-85 DH/sac | SDAD',
    description:
      "Prix du ciment CPJ 45 au Maroc : 75-85 DH/sac 50kg, 1 500 DH/T. Tableau de prix détaillé (sacs, vrac, big bag). Devis gratuit.",
    keywords: [
      'prix CPJ 45',
      'prix ciment CPJ 45 Maroc',
      'ciment 75 DH sac',
      'CPJ 45 tarif',
      'prix sac ciment 50kg Maroc',
      'CPJ 45 prix tonne',
      ...KEYWORDS.pricing,
      ...KEYWORDS.products,
    ],
  });
}

export default async function PrixCimentCpj45Page({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const loc: 'fr' | 'en' | 'ar' = (locale === 'en' ? 'en' : locale === 'ar' ? 'ar' : 'fr') as 'fr' | 'en' | 'ar';
  const isFr = loc === 'fr';

  const faqItems = isFr
    ? [
        {
          question: 'Quel est le prix du sac de ciment CPJ 45 au Maroc ?',
          answer:
            "Le sac de ciment CPJ 45 de 50 kg coûte entre 75 et 85 DH chez Dakhla Aménagement, selon la quantité commandée. Sur palette 1T (20 sacs), comptez environ 1 500 DH la tonne, soit 75 DH par sac. À l'unité, le sac s'établit autour de 85 DH. Les tarifs sont dégressifs : plus vous commandez, plus le prix unitaire baisse. Demandez un devis gratuit pour un prix ferme livré chantier.",
        },
        {
          question: 'Quel est le prix de la tonne de CPJ 45 ?',
          answer:
            "La tonne de CPJ 45 coûte 1 500 DH départ usine Dakhla, que ce soit en sacs sur palette 1T ou en vrac (camion-citerne, minimum 30T). En big bag 1T, le prix monte à 1 580 DH/T pour tenir compte du conditionnement et de la manutention. La livraison est facturée en supplément selon la zone.",
        },
        {
          question: 'Pourquoi le CPJ 45 est-il plus cher que le CPJ 35 ?',
          answer:
            "Le CPJ 45 (45 MPa, 1 500 DH/T) est environ 100 DH/T plus cher que le CPJ 35 (35 MPa, 1 400 DH/T) car sa résistance supérieure nécessite une formulation plus riche en clinker et une finesse de mouture plus élevée (≥350 m²/kg contre ≥320 m²/kg). Cette résistance accrue permet son usage pour le béton armé structurel (poutres, dalles, fondations armées), ce que le CPJ 35 ne peut pas faire. C'est le meilleur rapport qualité/prix pour la construction courante au Maroc.",
        },
        {
          question: 'Le CPJ 45 est-il adapté à la construction résidentielle ?',
          answer:
            "Oui, le CPJ 45 est le ciment de référence pour la construction résidentielle au Maroc. Il convient parfaitement aux fondations armées, poteaux, poutres, dalles, chainages, dallages et maçonnerie porteuse. Pour les éléments non structuraux (cloisons, chapes, enduits), vous pouvez aussi utiliser le CPJ 35 plus économique. Pour les ouvrages très sollicités (ponts, ports), le CPJ 55 est préférable.",
        },
        {
          question: 'Le prix du CPJ 45 inclut-il la livraison ?',
          answer:
            "Non, les prix affichés (75-85 DH/sac, 1 500 DH/T) sont départ usine Dakhla. La livraison est calculée en supplément selon la zone (Dakhla, Laâyoune, Boujdour, Tan-Tan, Mauritanie…) et le volume. Un devis personnalisé vous donnera le prix total livré chantier. Pour les commandes ≥30T, la livraison peut être négociée.",
        },
      ]
    : [
        {
          question: 'What is the price of a 50kg bag of CPJ 45 cement in Morocco?',
          answer:
            'A 50kg bag of CPJ 45 cement costs between 75 and 85 DH from Dakhla Aménagement, depending on the quantity ordered. On a 1T pallet (20 bags), expect about 1,500 DH per ton, i.e. 75 DH per bag. Per unit, the bag is around 85 DH. Prices are degressive: the more you order, the lower the unit price. Request a free quote for a firm delivered-to-site price.',
        },
        {
          question: 'What is the price per ton of CPJ 45?',
          answer:
            'A ton of CPJ 45 costs 1,500 DH ex-works Dakhla, whether in palletized bags or in bulk (tanker truck, minimum 30T). In 1T big bag, the price rises to 1,580 DH/T to account for packaging and handling. Delivery is charged extra depending on the zone.',
        },
        {
          question: 'Why is CPJ 45 more expensive than CPJ 35?',
          answer:
            'CPJ 45 (45 MPa, 1,500 DH/T) is about 100 DH/T more expensive than CPJ 35 (35 MPa, 1,400 DH/T) because its higher strength requires a formulation richer in clinker and a higher fineness (≥350 m²/kg vs ≥320 m²/kg). This added strength allows its use for structural reinforced concrete (beams, slabs, reinforced foundations), which CPJ 35 cannot do. It is the best price/performance ratio for standard construction in Morocco.',
        },
        {
          question: 'Is CPJ 45 suitable for residential construction?',
          answer:
            'Yes, CPJ 45 is the reference cement for residential construction in Morocco. It is perfectly suited for reinforced foundations, columns, beams, slabs, tie beams, floor slabs and load-bearing masonry. For non-structural elements (partitions, screeds, renders), you can also use the more economical CPJ 35. For highly stressed structures (bridges, ports), CPJ 55 is preferable.',
        },
        {
          question: 'Does the CPJ 45 price include delivery?',
          answer:
            'No, the displayed prices (75-85 DH/bag, 1,500 DH/T) are ex-works Dakhla. Delivery is calculated extra depending on the zone (Dakhla, Laayoune, Boujdour, Tan-Tan, Mauritania…) and the volume. A personalized quote will give you the total delivered-to-site price. For orders ≥30T, delivery can be negotiated.',
        },
      ];

  const pricingTable = isFr
    ? [
        { packaging: 'Sac 50kg (à l’unité)', price: '85 DH', note: 'Petits chantiers, détail' },
        { packaging: 'Sac 50kg (palette 1T = 20 sacs)', price: '1 500 DH/T (75 DH/sac)', note: 'Artisans, PME BTP' },
        { packaging: 'Vrac (camion-citerne)', price: '1 500 DH/T', note: 'Min. 30T — idéal gros chantiers' },
        { packaging: 'Big Bag 1T', price: '1 580 DH/T', note: 'Manutention grue/chariot' },
        { packaging: 'Big Bag 500kg', price: '810 DH/unité', note: 'Petits chantiers sans silo' },
      ]
    : [
        { packaging: '50kg bag (unit)', price: '85 DH', note: 'Small sites, retail' },
        { packaging: '50kg bag (1T pallet = 20 bags)', price: '1,500 DH/T (75 DH/bag)', note: 'Craftsmen, construction SMEs' },
        { packaging: 'Bulk (tanker truck)', price: '1,500 DH/T', note: 'Min. 30T — ideal large sites' },
        { packaging: '1T Big Bag', price: '1,580 DH/T', note: 'Crane/forklift handling' },
        { packaging: '500kg Big Bag', price: '810 DH/unit', note: 'Small sites without silo' },
      ];

  const comparison = isFr
    ? [
        {
          type: 'CPJ 35',
          strength: '35 MPa',
          pricePerTon: '1 400 DH/T',
          pricePerBag: '70-75 DH',
          use: 'Maçonnerie, dallages simples, mortiers',
          highlight: false,
        },
        {
          type: 'CPJ 45',
          strength: '45 MPa',
          pricePerTon: '1 500 DH/T',
          pricePerBag: '75-85 DH',
          use: 'Béton armé courant, fondations armées',
          highlight: true,
        },
        {
          type: 'CPJ 55',
          strength: '55 MPa',
          pricePerTon: '1 600 DH/T',
          pricePerBag: '80-90 DH',
          use: 'Génie civil, ouvrages très sollicités',
          highlight: false,
        },
      ]
    : [
        {
          type: 'CPJ 35',
          strength: '35 MPa',
          pricePerTon: '1,400 DH/T',
          pricePerBag: '70-75 DH',
          use: 'Masonry, simple slabs, mortars',
          highlight: false,
        },
        {
          type: 'CPJ 45',
          strength: '45 MPa',
          pricePerTon: '1,500 DH/T',
          pricePerBag: '75-85 DH',
          use: 'Standard reinforced concrete, reinforced foundations',
          highlight: true,
        },
        {
          type: 'CPJ 55',
          strength: '55 MPa',
          pricePerTon: '1,600 DH/T',
          pricePerBag: '80-90 DH',
          use: 'Civil engineering, highly stressed works',
          highlight: false,
        },
      ];

  const whyCpj45 = isFr
    ? [
        {
          icon: Building2,
          title: 'Meilleur rapport qualité/prix',
          desc: "45 MPa à 1 500 DH/T — le ciment le plus polyvalent du marché marocain pour le béton armé courant.",
        },
        {
          icon: Factory,
          title: 'Production locale',
          desc: 'Centre de broyage de clinker à Dakhla, capacité 500K tonnes/an — frais de transport réduits.',
        },
        {
          icon: Beaker,
          title: 'Qualité certifiée',
          desc: 'Conforme NM 10.1.004 / EN 197-1 (CEM II/A-L 42,5) — tests laboratoire systématiques.',
        },
        {
          icon: Truck,
          title: 'Livraison rapide',
          desc: 'Vrac, sacs 50kg, big bag 1T — Sud Maroc (Dakhla, Laâyoune, Boujdour) + Mauritanie.',
        },
      ]
    : [
        {
          icon: Building2,
          title: 'Best price/performance ratio',
          desc: '45 MPa at 1,500 DH/T — the most versatile cement on the Moroccan market for standard reinforced concrete.',
        },
        {
          icon: Factory,
          title: 'Local production',
          desc: 'Clinker grinding plant in Dakhla, 500K tons/year capacity — reduced transport costs.',
        },
        {
          icon: Beaker,
          title: 'Certified quality',
          desc: 'NM 10.1.004 / EN 197-1 compliant (CEM II/A-L 42.5) — systematic lab tests.',
        },
        {
          icon: Truck,
          title: 'Fast delivery',
          desc: 'Bulk, 50kg bags, 1T big bag — Southern Morocco (Dakhla, Laayoune, Boujdour) + Mauritania.',
        },
      ];

  const relatedLinks = isFr
    ? [
        {
          title: 'Ciment CPJ 45 (fiche produit)',
          description: "Présentation complète du CPJ 45 : caractéristiques, usages, conditionnements.",
          href: '/cpj-45',
        },
        {
          title: 'Ciment CPJ 35 (35 MPa)',
          description: "Ciment économique pour maçonnerie et dallages simples. Dès 70 DH/sac.",
          href: '/cpj-35',
        },
        {
          title: 'Prix du ciment au Maroc',
          description: "Tableau récapitulatif des prix CPJ 35, CPJ 45 et CPJ 55.",
          href: '/prix-ciment',
        },
      ]
    : [
        {
          title: 'CPJ 45 cement (product sheet)',
          description: 'Complete CPJ 45 overview: specifications, uses, packaging.',
          href: '/cpj-45',
        },
        {
          title: 'CPJ 35 Cement (35 MPa)',
          description: 'Economical cement for masonry and simple slabs. From 70 DH/bag.',
          href: '/cpj-35',
        },
        {
          title: 'Cement prices in Morocco',
          description: 'Summary price table for CPJ 35, CPJ 45 and CPJ 55.',
          href: '/prix-ciment',
        },
      ];

  const schemas = [
    webPageSchema({
      name: isFr ? 'Prix Ciment CPJ 45 Maroc — 75-85 DH/sac' : 'CPJ 45 Cement Price Morocco — 75-85 DH/bag',
      description: isFr
        ? "Prix du ciment CPJ 45 au Maroc : 75-85 DH/sac 50kg, 1 500 DH/T. Tableau de prix détaillé. Devis gratuit."
        : 'CPJ 45 cement price in Morocco: 75-85 DH per 50kg bag, 1,500 DH/T. Detailed price table. Free quote.',
      path: '/prix-ciment-cpj45',
      locale: loc,
    }),
    breadcrumbSchema([{ name: isFr ? 'Prix CPJ 45' : 'CPJ 45 Price', path: '/prix-ciment-cpj45' }], loc),
    productSchema({
      name: isFr ? 'Ciment CPJ 45 — Prix Maroc' : 'CPJ 45 Cement — Price Morocco',
      description: isFr
        ? 'Ciment Portland Composé 45 MPa. Prix dès 1 500 DH/T (75 DH/sac). Conforme NM 10.1.004.'
        : 'Composite Portland 45 MPa cement. Price from 1,500 DH/T (75 DH/bag). NM 10.1.004 compliant.',
      sku: 'DAM-CPJ45',
      price: '1500',
      path: '/prix-ciment-cpj45',
      locale: loc,
      image: '/images/products/cpj45-bags.jpg',
      ratingValue: '4.9',
      reviewCount: 87,
    }),
    faqSchema(faqItems),
    speakableSchema({
      path: '/prix-ciment-cpj45',
      locale: loc,
      cssSelectors: ['h1', '.hero-price', '.pricing-table', '.faq-question'],
    }),
  ];

  return (
    <>
      <JsonLdScript schema={schemas} />
      <Breadcrumbs items={[{ name: isFr ? 'Prix CPJ 45' : 'CPJ 45 Price', path: '/prix-ciment-cpj45' }]} locale={locale} />

      {/* Hero */}
      <section className="bg-gradient-to-br from-[#1B3A5C] to-[#0f1f33] text-white py-20 md:py-28">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <div className="max-w-4xl">
            <span className="inline-block px-4 py-1.5 bg-[#E8B84B]/20 text-[#E8B84B] text-sm font-medium rounded-full mb-6">
              {isFr ? 'Tarifs CPJ 45 — 2026' : 'CPJ 45 Pricing — 2026'}
            </span>
            <h1 className="text-[clamp(2rem,5vw,3.5rem)] font-bold leading-[1.1] mb-6">
              {isFr ? 'Prix du ciment CPJ 45 au Maroc' : 'CPJ 45 cement price in Morocco'}
            </h1>
            <p className="text-lg md:text-xl text-white/80 leading-relaxed mb-6 max-w-3xl">
              {isFr
                ? "CPJ 45 dès 75 DH le sac de 50 kg (1 500 DH/T). Le ciment de référence pour le béton armé courant au Maroc. Tarifs transparents par conditionnement. Devis gratuit sous 24h."
                : 'CPJ 45 from 75 DH per 50kg bag (1,500 DH/T). The reference cement for standard reinforced concrete in Morocco. Transparent pricing by packaging. Free quote within 24h.'}
            </p>
            <div className="hero-price inline-block bg-[#C1272D]/20 border border-[#C1272D]/40 rounded-2xl px-8 py-5 mb-8">
              <span className="block text-sm text-white/70 mb-1">
                {isFr ? 'Prix dès' : 'Price from'}
              </span>
              <span className="text-4xl md:text-5xl font-bold text-[#E8B84B]">75 DH/sac</span>
              <span className="block text-sm text-white/60 mt-1">
                {isFr ? '(1 500 DH/T — sac 50kg)' : '(1,500 DH/T — 50kg bag)'}
              </span>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href={`/${locale}/devis`}
                className="inline-flex items-center gap-2 px-6 py-3 bg-[#C1272D] text-white font-semibold rounded-full hover:bg-[#C1272D]/90 transition-colors"
              >
                {isFr ? 'Demander un devis gratuit' : 'Request a free quote'}
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href={`/${locale}/cpj-45`}
                className="inline-flex items-center gap-2 px-6 py-3 border border-white/30 text-white font-semibold rounded-full hover:bg-white/10 transition-colors"
              >
                {isFr ? 'Fiche produit CPJ 45' : 'CPJ 45 product sheet'}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing table */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1B3A5C] mb-4 text-center">
            {isFr ? 'Tableau des prix CPJ 45' : 'CPJ 45 price table'}
          </h2>
          <p className="text-center text-[#6B7280] mb-12 max-w-2xl mx-auto">
            {isFr
              ? "Prix départ usine Dakhla. Tarifs dégressifs selon le volume. Devis personnalisé sur demande."
              : 'Ex-works Dakhla prices. Volume discounts available. Custom quote on request.'}
          </p>
          <div className="pricing-table overflow-x-auto">
            <table className="w-full max-w-4xl mx-auto border-collapse bg-white rounded-xl overflow-hidden shadow-sm">
              <thead>
                <tr className="bg-[#1B3A5C] text-white">
                  <th className="text-left py-4 px-6 font-semibold">
                    {isFr ? 'Conditionnement' : 'Packaging'}
                  </th>
                  <th className="text-left py-4 px-6 font-semibold">
                    {isFr ? 'Prix' : 'Price'}
                  </th>
                  <th className="text-left py-4 px-6 font-semibold">
                    {isFr ? 'Note' : 'Note'}
                  </th>
                </tr>
              </thead>
              <tbody>
                {pricingTable.map((row, i) => (
                  <tr key={i} className="border-b border-[#E5E7EB] last:border-0 hover:bg-[#F7F8FA] transition-colors">
                    <td className="py-4 px-6 font-semibold text-[#1B3A5C]">{row.packaging}</td>
                    <td className="py-4 px-6 font-bold text-[#C1272D]">{row.price}</td>
                    <td className="py-4 px-6 text-sm text-[#6B7280]">{row.note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-center text-sm text-[#6B7280] mt-6 max-w-2xl mx-auto">
            {isFr
              ? "* Prix départ usine Dakhla, hors livraison. Tarifs dégressifs selon le volume. Devis personnalisé sous 24h."
              : '* Ex-works Dakhla prices, delivery excluded. Volume discounts available. Custom quote within 24h.'}
          </p>
        </div>
      </section>

      {/* Why CPJ 45 */}
      <section className="py-16 md:py-24 bg-[#F7F8FA]">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1B3A5C] mb-4 text-center">
            {isFr ? 'Pourquoi choisir le CPJ 45 ?' : 'Why choose CPJ 45?'}
          </h2>
          <p className="text-center text-[#6B7280] mb-12 max-w-2xl mx-auto">
            {isFr
              ? "Le CPJ 45 est le ciment le plus polyvalent du marché marocain — idéal pour la majorité des projets de construction."
              : 'CPJ 45 is the most versatile cement on the Moroccan market — ideal for most construction projects.'}
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {whyCpj45.map((f, i) => (
              <div key={i} className="bg-white border border-[#E5E7EB] rounded-2xl p-6 text-center">
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

      {/* Comparison table */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1B3A5C] mb-4 text-center">
            {isFr ? 'Comparaison CPJ 35 / CPJ 45 / CPJ 55' : 'CPJ 35 / CPJ 45 / CPJ 55 comparison'}
          </h2>
          <p className="text-center text-[#6B7280] mb-12 max-w-2xl mx-auto">
            {isFr
              ? "Comparez prix et résistances pour choisir le ciment adapté à votre projet."
              : 'Compare prices and strengths to choose the right cement for your project.'}
          </p>
          <div className="overflow-x-auto">
            <table className="w-full max-w-4xl mx-auto border-collapse bg-white rounded-xl overflow-hidden shadow-sm">
              <thead>
                <tr className="bg-[#1B3A5C] text-white">
                  <th className="text-left py-4 px-6 font-semibold">{isFr ? 'Ciment' : 'Cement'}</th>
                  <th className="text-left py-4 px-6 font-semibold">{isFr ? 'Résistance' : 'Strength'}</th>
                  <th className="text-left py-4 px-6 font-semibold">{isFr ? 'Prix/T' : 'Price/T'}</th>
                  <th className="text-left py-4 px-6 font-semibold">{isFr ? 'Prix/sac' : 'Price/bag'}</th>
                  <th className="text-left py-4 px-6 font-semibold">{isFr ? 'Usage' : 'Use'}</th>
                </tr>
              </thead>
              <tbody>
                {comparison.map((row, i) => (
                  <tr key={i} className={`border-b border-[#E5E7EB] last:border-0 ${row.highlight ? 'bg-[#E8B84B]/10' : 'hover:bg-[#F7F8FA]'} transition-colors`}>
                    <td className="py-4 px-6 font-bold text-[#1B3A5C]">
                      {row.type}
                      {row.highlight && (
                        <span className="ml-2 inline-block px-2 py-0.5 text-xs bg-[#E8B84B] text-[#1A1A2E] rounded-full font-semibold">
                          {isFr ? 'Recommandé' : 'Recommended'}
                        </span>
                      )}
                    </td>
                    <td className="py-4 px-6 text-[#1A1A2E]">{row.strength}</td>
                    <td className="py-4 px-6 font-bold text-[#C1272D]">{row.pricePerTon}</td>
                    <td className="py-4 px-6 text-[#1A1A2E]">{row.pricePerBag}</td>
                    <td className="py-4 px-6 text-sm text-[#6B7280]">{row.use}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="flex flex-wrap justify-center gap-4 mt-8">
            <Link
              href={`/${locale}/cpj-45`}
              className="inline-flex items-center gap-2 text-[#C1272D] font-medium hover:gap-3 transition-all"
            >
              {isFr ? '→ Voir le CPJ 45' : '→ See CPJ 45'}
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href={`/${locale}/cpj-55`}
              className="inline-flex items-center gap-2 text-[#C1272D] font-medium hover:gap-3 transition-all"
            >
              {isFr ? '→ Voir le CPJ 55' : '→ See CPJ 55'}
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href={`/${locale}/prix-ciment`}
              className="inline-flex items-center gap-2 text-[#C1272D] font-medium hover:gap-3 transition-all"
            >
              {isFr ? '→ Tous les prix du ciment' : '→ All cement prices'}
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Packaging options */}
      <section className="py-16 md:py-24 bg-[#F7F8FA]">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1B3A5C] mb-12 text-center">
            {isFr ? 'Conditionnements disponibles' : 'Available packaging'}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              { icon: Package, title: isFr ? 'Sacs 50kg' : '50kg bags', desc: isFr ? 'Palette 1T (20 sacs) — 1 500 DH/T (75 DH/sac). Idéal artisans et PME.' : '1T pallet (20 bags) — 1,500 DH/T (75 DH/bag). Ideal for craftsmen and SMEs.' },
              { icon: Truck, title: isFr ? 'Vrac' : 'Bulk', desc: isFr ? 'Camion-citerne avec pompage direct en silo. Min. 30T — 1 500 DH/T.' : 'Tanker truck with direct silo pumping. Min. 30T — 1,500 DH/T.' },
              { icon: Container, title: isFr ? 'Big Bag 1T' : '1T Big Bag', desc: isFr ? 'Manutention par grue ou chariot. 1 580 DH/T — chantiers moyens sans silo.' : 'Crane or forklift handling. 1,580 DH/T — medium sites without silo.' },
            ].map((opt, i) => (
              <div key={i} className="bg-white border border-[#E5E7EB] rounded-2xl p-8 text-center">
                <div className="w-14 h-14 rounded-full bg-[#1B3A5C]/5 flex items-center justify-center mx-auto mb-4">
                  <opt.icon className="w-7 h-7 text-[#1B3A5C]" />
                </div>
                <h3 className="font-bold text-[#1B3A5C] mb-2">{opt.title}</h3>
                <p className="text-sm text-[#6B7280] leading-relaxed">{opt.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Long-form content */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6 md:px-12">
          <div className="prose prose-lg max-w-none">
            <h2 className="text-3xl font-bold text-[#1B3A5C] mb-6">
              {isFr ? 'Prix du ciment CPJ 45 au Maroc : guide complet' : 'CPJ 45 cement price in Morocco: complete guide'}
            </h2>
            <p className="text-[#1A1A2E]/80 leading-relaxed mb-6">
              {isFr
                ? "Le prix du ciment CPJ 45 au Maroc varie selon le conditionnement, le volume commandé et la zone de livraison. Chez Dakhla Aménagement, le sac de 50 kg démarre à 75 DH sur palette 1T (soit 1 500 DH la tonne), ce qui en fait le meilleur rapport qualité/prix pour le béton armé courant. Cette page présente tous nos tarifs CPJ 45 et explique comment acheter au meilleur prix pour vos chantiers."
                : "The price of CPJ 45 cement in Morocco varies depending on packaging, the volume ordered and the delivery zone. At Dakhla Aménagement, the 50kg bag starts at 75 DH on a 1T pallet (i.e. 1,500 DH per ton), making it the best price/performance ratio for standard reinforced concrete. This page presents all our CPJ 45 prices and explains how to buy at the best price for your sites."}
            </p>

            <h3 className="text-2xl font-bold text-[#1B3A5C] mt-10 mb-4">
              {isFr ? 'Prix du sac de 50 kg de CPJ 45' : '50kg bag price for CPJ 45'}
            </h3>
            <p className="text-[#1A1A2E]/80 leading-relaxed mb-6">
              {isFr
                ? "Le sac de ciment CPJ 45 de 50 kg est vendu entre 75 et 85 DH chez Dakhla Aménagement. Le prix exact dépend de la quantité commandée : à l'unité (détail), le sac est à 85 DH ; sur palette 1T (20 sacs), il descend à 75 DH le sac, soit 1 500 DH la palette. Pour les commandes en gros (≥5 palettes), un tarif négocié s'applique. Le sac 50 kg reste le format le plus pratique pour les artisans et PME du BTP."
                : "The 50kg bag of CPJ 45 cement is sold between 75 and 85 DH at Dakhla Aménagement. The exact price depends on the quantity ordered: per unit (retail), the bag is 85 DH; on a 1T pallet (20 bags), it drops to 75 DH per bag, i.e. 1,500 DH per pallet. For wholesale orders (≥5 pallets), a negotiated rate applies. The 50kg bag remains the most practical format for craftsmen and construction SMEs."}
            </p>

            <h3 className="text-2xl font-bold text-[#1B3A5C] mt-10 mb-4">
              {isFr ? 'Prix de la tonne de CPJ 45' : 'Price per ton of CPJ 45'}
            </h3>
            <p className="text-[#1A1A2E]/80 leading-relaxed mb-6">
              {isFr
                ? "La tonne de ciment CPJ 45 est à 1 500 DH départ usine Dakhla, que ce soit en sacs sur palette 1T ou en vrac (camion-citerne, minimum 30T). En big bag 1T, comptez 1 580 DH/T pour tenir compte du conditionnement. Le vrac est la solution la plus économique pour les gros chantiers (BTP, promoteurs) car il supprime le coût des sacs. Le sac palette 1T reste idéal pour les artisans."
                : "A ton of CPJ 45 cement is 1,500 DH ex-works Dakhla, whether in palletized bags or in bulk (tanker truck, minimum 30T). In 1T big bag, expect 1,580 DH/T to account for packaging. Bulk is the most economical solution for large sites (construction companies, developers) as it removes bag costs. The 1T pallet remains ideal for craftsmen."}
            </p>

            <h3 className="text-2xl font-bold text-[#1B3A5C] mt-10 mb-4">
              {isFr ? 'CPJ 45 : le meilleur rapport qualité/prix pour le béton armé' : 'CPJ 45: the best price/performance ratio for reinforced concrete'}
            </h3>
            <p className="text-[#1A1A2E]/80 leading-relaxed mb-6">
              {isFr
                ? "Avec 45 MPa à 28 jours, le CPJ 45 couvre la grande majorité des besoins en béton armé courant au Maroc : fondations armées, poteaux, poutres, dalles, chainages, dallages, maçonnerie porteuse. À 1 500 DH/T, il ne coûte que 100 DH/T de plus que le CPJ 35 (1 400 DH/T) qui ne peut pas être utilisé pour le béton armé, et 100 DH/T de moins que le CPJ 55 (1 600 DH/T) réservé aux ouvrages très sollicités. C'est le choix optimal pour la construction résidentielle, tertiaire et les ouvrages d'art courants."
                : "With 45 MPa at 28 days, CPJ 45 covers the vast majority of standard reinforced concrete needs in Morocco: reinforced foundations, columns, beams, slabs, tie beams, floor slabs, load-bearing masonry. At 1,500 DH/T, it costs only 100 DH/T more than CPJ 35 (1,400 DH/T) which cannot be used for reinforced concrete, and 100 DH/T less than CPJ 55 (1,600 DH/T) reserved for highly stressed works. It is the optimal choice for residential, commercial and standard civil engineering construction."}
            </p>

            <h3 className="text-2xl font-bold text-[#1B3A5C] mt-10 mb-4">
              {isFr ? 'Comment obtenir le meilleur prix pour le CPJ 45 ?' : 'How to get the best price for CPJ 45?'}
            </h3>
            <ul className="space-y-3 mb-6">
              {(isFr
                ? [
                    'Commander en grosse quantité (≥5 palettes ou ≥30T vrac) pour bénéficier des tarifs dégressifs',
                    'Privilégier le vrac si votre chantier dispose d’un silo (suppression du coût des sacs)',
                    'Regrouper les commandes avec d’autres chantiers de la zone pour optimiser la livraison',
                    'Négocier un contrat annuel si vous êtes un professionnel récurrent (BTP, promoteur)',
                    'Demander un devis gratuit pour un tarif personnalisé livré chantier',
                  ]
                : [
                    'Order in large quantity (≥5 pallets or ≥30T bulk) to benefit from volume discounts',
                    'Prefer bulk if your site has a silo (eliminates bag cost)',
                    'Group orders with other sites in the area to optimize delivery',
                    'Negotiate an annual contract if you are a recurring professional (construction, developer)',
                    'Request a free quote for a personalized delivered-to-site rate',
                  ]
              ).map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-[#1A1A2E]/80">
                  <CheckCircle className="w-5 h-5 text-[#E8B84B] shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <div className="bg-[#F7F8FA] border border-[#E5E7EB] rounded-xl p-6 my-6 flex flex-wrap gap-4">
              <Link
                href={`/${locale}/cpj-45`}
                className="inline-flex items-center gap-2 text-[#C1272D] font-medium hover:gap-3 transition-all"
              >
                {isFr ? '→ Fiche produit CPJ 45' : '→ CPJ 45 product sheet'}
              </Link>
              <Link
                href={`/${locale}/cpj-35`}
                className="inline-flex items-center gap-2 text-[#C1272D] font-medium hover:gap-3 transition-all"
              >
                {isFr ? '→ Ciment CPJ 35' : '→ CPJ 35 cement'}
              </Link>
              <Link
                href={`/${locale}/cpj-55`}
                className="inline-flex items-center gap-2 text-[#C1272D] font-medium hover:gap-3 transition-all"
              >
                {isFr ? '→ Ciment CPJ 55' : '→ CPJ 55 cement'}
              </Link>
              <Link
                href={`/${locale}/prix-ciment`}
                className="inline-flex items-center gap-2 text-[#C1272D] font-medium hover:gap-3 transition-all"
              >
                {isFr ? '→ Tous les prix du ciment' : '→ All cement prices'}
              </Link>
              <Link
                href={`/${locale}/devis`}
                className="inline-flex items-center gap-2 text-[#C1272D] font-medium hover:gap-3 transition-all"
              >
                {isFr ? '→ Devis gratuit' : '→ Free quote'}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 md:py-24 bg-[#F7F8FA]">
        <div className="max-w-3xl mx-auto px-6 md:px-12">
          <h2 className="text-3xl font-bold text-[#1B3A5C] mb-8 text-center">
            {isFr ? 'Questions fréquentes sur le prix du CPJ 45' : 'Frequently asked questions about CPJ 45 price'}
          </h2>
          <div className="space-y-4">
            {faqItems.map((item, i) => (
              <details key={i} className="group bg-white border border-[#E5E7EB] rounded-xl p-5">
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

      <RelatedLinks links={relatedLinks} locale={locale} title={isFr ? 'Pages liées' : 'Related pages'} />
      <PriceTypeLinks currentType="CPJ 45" locale={locale} />
      <CtaBanner
        locale={locale}
        title={isFr ? 'Demandez votre devis CPJ 45 gratuit' : 'Request your free CPJ 45 quote'}
        subtitle={
          isFr
            ? "Tarif personnalisé sous 24h. CPJ 45 dès 75 DH/sac (1 500 DH/T). Livraison dans tout le Sud marocain et la Mauritanie."
            : 'Personalized rate within 24h. CPJ 45 from 75 DH/bag (1,500 DH/T). Delivery across Southern Morocco and Mauritania.'
        }
        buttonText={isFr ? 'Demander un devis gratuit' : 'Request a free quote'}
      />
    </>
  );
}
