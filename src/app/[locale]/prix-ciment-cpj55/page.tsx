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
  Construction,
  Waves,
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
      path: '/prix-ciment-cpj55',
      title: 'CPJ 55 Cement Price Morocco — 80-90 DH/bag | SDAD',
      description:
        'CPJ 55 cement price in Morocco: 80-90 DH per 50kg bag, 1,600 DH/T. Detailed price table (bags, bulk, big bag). Ultra high strength for civil engineering. Free quote.',
      keywords: [
        'prix CPJ 55',
        'CPJ 55 price Morocco',
        'ciment 80 DH',
        'CPJ 55 tarif',
        'ciment haute résistance Maroc',
        ...KEYWORDS.pricing,
        ...KEYWORDS.products,
      ],
    });
  }

  return buildMetadata({
    locale: 'fr',
    path: '/prix-ciment-cpj55',
    title: 'Prix Ciment CPJ 55 Maroc — 80-90 DH/sac | SDAD',
    description:
      "Prix du ciment CPJ 55 au Maroc : 80-90 DH/sac 50kg, 1 600 DH/T. Tableau de prix. Ciment haute résistance pour génie civil. Devis gratuit.",
    keywords: [
      'prix CPJ 55',
      'prix ciment CPJ 55 Maroc',
      'ciment 80 DH sac',
      'CPJ 55 tarif',
      'ciment haute résistance Maroc',
      'CPJ 55 prix tonne',
      ...KEYWORDS.pricing,
      ...KEYWORDS.products,
    ],
  });
}

export default async function PrixCimentCpj55Page({
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
          question: 'Quel est le prix du sac de ciment CPJ 55 au Maroc ?',
          answer:
            "Le sac de ciment CPJ 55 de 50 kg coûte entre 80 et 90 DH chez Dakhla Aménagement, selon la quantité commandée. Sur palette 1T (20 sacs), comptez environ 1 600 DH la tonne, soit 80 DH par sac. À l'unité, le sac s'établit autour de 90 DH. Les tarifs sont dégressifs : plus vous commandez, plus le prix unitaire baisse. Demandez un devis gratuit pour un prix ferme livré chantier.",
        },
        {
          question: 'Quel est le prix de la tonne de CPJ 55 ?',
          answer:
            "La tonne de ciment CPJ 55 est à 1 600 DH départ usine Dakhla, que ce soit en sacs sur palette 1T ou en vrac (camion-citerne, minimum 30T). En big bag 1T, le prix monte à 1 680 DH/T pour tenir compte du conditionnement et de la manutention. La livraison est facturée en supplément selon la zone.",
        },
        {
          question: 'Quand faut-il utiliser le CPJ 55 plutôt que le CPJ 45 ?',
          answer:
            "Le CPJ 55 (55 MPa) est recommandé pour les ouvrages très sollicités : ponts, viaducs, ports, barrages, ouvrages d'art, fondations profondes (pieux, micropieux), béton haute performance, structures en zone sismique ou côtière, et tout ouvrage nécessitant une résistance élevée à 28 jours. Pour la construction courante (résidentiel, tertiaire), le CPJ 45 (45 MPa) suffit largement et coûte 100 DH/T de moins. Le CPJ 55 ne se justifie que pour les usages exigeants.",
        },
        {
          question: 'Pourquoi le CPJ 55 est-il plus cher que le CPJ 45 ?',
          answer:
            "Le CPJ 55 (55 MPa, 1 600 DH/T) coûte environ 100 DH/T de plus que le CPJ 45 (45 MPa, 1 500 DH/T) car sa résistance supérieure nécessite une formulation plus riche en clinker, une finesse de mouture plus élevée et un contrôle qualité plus exigeant. Ce surcoût est justifié par les performances mécaniques accrues (55 MPa à 28 jours contre 45 MPa) et la durabilité renforcée, indispensables pour les grands ouvrages de génie civil.",
        },
        {
          question: 'Le prix du CPJ 55 inclut-il la livraison ?',
          answer:
            "Non, les prix affichés (80-90 DH/sac, 1 600 DH/T) sont départ usine Dakhla. La livraison est calculée en supplément selon la zone (Dakhla, Laâyoune, Boujdour, Tan-Tan, Mauritanie…) et le volume. Un devis personnalisé vous donnera le prix total livré chantier. Pour les commandes ≥30T, la livraison peut être négociée.",
        },
      ]
    : [
        {
          question: 'What is the price of a 50kg bag of CPJ 55 cement in Morocco?',
          answer:
            'A 50kg bag of CPJ 55 cement costs between 80 and 90 DH from Dakhla Aménagement, depending on the quantity ordered. On a 1T pallet (20 bags), expect about 1,600 DH per ton, i.e. 80 DH per bag. Per unit, the bag is around 90 DH. Prices are degressive: the more you order, the lower the unit price. Request a free quote for a firm delivered-to-site price.',
        },
        {
          question: 'What is the price per ton of CPJ 55?',
          answer:
            'A ton of CPJ 55 cement is 1,600 DH ex-works Dakhla, whether in palletized bags or in bulk (tanker truck, minimum 30T). In 1T big bag, the price rises to 1,680 DH/T to account for packaging and handling. Delivery is charged extra depending on the zone.',
        },
        {
          question: 'When should CPJ 55 be used instead of CPJ 45?',
          answer:
            'CPJ 55 (55 MPa) is recommended for highly stressed structures: bridges, viaducts, ports, dams, civil engineering works, deep foundations (piles, micropiles), high-performance concrete, structures in seismic or coastal zones, and any structure requiring high 28-day strength. For standard construction (residential, commercial), CPJ 45 (45 MPa) is largely sufficient and costs 100 DH/T less. CPJ 55 is only justified for demanding uses.',
        },
        {
          question: 'Why is CPJ 55 more expensive than CPJ 45?',
          answer:
            'CPJ 55 (55 MPa, 1,600 DH/T) costs about 100 DH/T more than CPJ 45 (45 MPa, 1,500 DH/T) because its higher strength requires a formulation richer in clinker, a higher fineness and more demanding quality control. This surcharge is justified by the increased mechanical performance (55 MPa at 28 days vs 45 MPa) and the enhanced durability, essential for major civil engineering works.',
        },
        {
          question: 'Does the CPJ 55 price include delivery?',
          answer:
            'No, the displayed prices (80-90 DH/bag, 1,600 DH/T) are ex-works Dakhla. Delivery is calculated extra depending on the zone (Dakhla, Laayoune, Boujdour, Tan-Tan, Mauritania…) and the volume. A personalized quote will give you the total delivered-to-site price. For orders ≥30T, delivery can be negotiated.',
        },
      ];

  const pricingTable = isFr
    ? [
        { packaging: 'Sac 50kg (à l’unité)', price: '90 DH', note: 'Petits chantiers, détail' },
        { packaging: 'Sac 50kg (palette 1T = 20 sacs)', price: '1 600 DH/T (80 DH/sac)', note: 'Artisans, PME BTP' },
        { packaging: 'Vrac (camion-citerne)', price: '1 600 DH/T', note: 'Min. 30T — idéal gros chantiers' },
        { packaging: 'Big Bag 1T', price: '1 680 DH/T', note: 'Manutention grue/chariot' },
        { packaging: 'Big Bag 500kg', price: '870 DH/unité', note: 'Petits chantiers sans silo' },
      ]
    : [
        { packaging: '50kg bag (unit)', price: '90 DH', note: 'Small sites, retail' },
        { packaging: '50kg bag (1T pallet = 20 bags)', price: '1,600 DH/T (80 DH/bag)', note: 'Craftsmen, construction SMEs' },
        { packaging: 'Bulk (tanker truck)', price: '1,600 DH/T', note: 'Min. 30T — ideal large sites' },
        { packaging: '1T Big Bag', price: '1,680 DH/T', note: 'Crane/forklift handling' },
        { packaging: '500kg Big Bag', price: '870 DH/unit', note: 'Small sites without silo' },
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
          highlight: false,
        },
        {
          type: 'CPJ 55',
          strength: '55 MPa',
          pricePerTon: '1 600 DH/T',
          pricePerBag: '80-90 DH',
          use: 'Génie civil, ouvrages très sollicités',
          highlight: true,
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
          highlight: false,
        },
        {
          type: 'CPJ 55',
          strength: '55 MPa',
          pricePerTon: '1,600 DH/T',
          pricePerBag: '80-90 DH',
          use: 'Civil engineering, highly stressed works',
          highlight: true,
        },
      ];

  const whenToUse = isFr
    ? [
        {
          icon: Construction,
          title: 'Ouvrages d’art',
          desc: "Ponts, viaducs, passerelles, tunnels. Résistance élevée requise pour portées longues et charges dynamiques.",
        },
        {
          icon: Waves,
          title: 'Zone côtière',
          desc: "Ports, digues, ouvrages maritimes. Bonne résistance aux sulfates et chlorures en milieu agressif.",
        },
        {
          icon: Factory,
          title: 'Génie civil lourd',
          desc: "Barrages, centrales électriques, fondations profondes (pieux, micropieux, parois moulées).",
        },
        {
          icon: Building2,
          title: 'Béton haute performance',
          desc: "BHP, structures précontraintes, éléments préfabriqués sollicités (poutres, voussoirs).",
        },
      ]
    : [
        {
          icon: Construction,
          title: 'Civil engineering structures',
          desc: 'Bridges, viaducts, footbridges, tunnels. High strength required for long spans and dynamic loads.',
        },
        {
          icon: Waves,
          title: 'Coastal zone',
          desc: 'Ports, dikes, marine works. Good sulfate and chloride resistance in aggressive environments.',
        },
        {
          icon: Factory,
          title: 'Heavy civil engineering',
          desc: 'Dams, power plants, deep foundations (piles, micropiles, diaphragm walls).',
        },
        {
          icon: Building2,
          title: 'High-performance concrete',
          desc: 'HPC, prestressed structures, stressed precast elements (beams, segments).',
        },
      ];

  const relatedLinks = isFr
    ? [
        {
          title: 'Ciment CPJ 55 (fiche produit)',
          description: "Présentation complète du CPJ 55 : caractéristiques, usages, conditionnements.",
          href: '/cpj-55',
        },
        {
          title: 'Ciment CPJ 45 (45 MPa)',
          description: "Ciment de référence pour le béton armé courant. Dès 1 500 DH/T.",
          href: '/cpj-45',
        },
        {
          title: 'Prix du ciment au Maroc',
          description: "Tableau récapitulatif des prix CPJ 35, CPJ 45 et CPJ 55.",
          href: '/prix-ciment',
        },
      ]
    : [
        {
          title: 'CPJ 55 cement (product sheet)',
          description: 'Complete CPJ 55 overview: specifications, uses, packaging.',
          href: '/cpj-55',
        },
        {
          title: 'CPJ 45 Cement (45 MPa)',
          description: 'Reference cement for standard reinforced concrete. From 1,500 DH/T.',
          href: '/cpj-45',
        },
        {
          title: 'Cement prices in Morocco',
          description: 'Summary price table for CPJ 35, CPJ 45 and CPJ 55.',
          href: '/prix-ciment',
        },
      ];

  const schemas = [
    webPageSchema({
      name: isFr ? 'Prix Ciment CPJ 55 Maroc — 80-90 DH/sac' : 'CPJ 55 Cement Price Morocco — 80-90 DH/bag',
      description: isFr
        ? "Prix du ciment CPJ 55 au Maroc : 80-90 DH/sac 50kg, 1 600 DH/T. Tableau de prix. Devis gratuit."
        : 'CPJ 55 cement price in Morocco: 80-90 DH per 50kg bag, 1,600 DH/T. Price table. Free quote.',
      path: '/prix-ciment-cpj55',
      locale: loc,
    }),
    breadcrumbSchema([{ name: isFr ? 'Prix CPJ 55' : 'CPJ 55 Price', path: '/prix-ciment-cpj55' }], loc),
    productSchema({
      name: isFr ? 'Ciment CPJ 55 — Prix Maroc' : 'CPJ 55 Cement — Price Morocco',
      description: isFr
        ? 'Ciment Portland Composé 55 MPa. Prix dès 1 600 DH/T (80 DH/sac). Conforme NM 10.1.004.'
        : 'Composite Portland 55 MPa cement. Price from 1,600 DH/T (80 DH/bag). NM 10.1.004 compliant.',
      sku: 'DAM-CPJ55',
      price: '1600',
      path: '/prix-ciment-cpj55',
      locale: loc,
      image: '/images/products/cpj55-bags.jpg',
      ratingValue: '4.9',
      reviewCount: 64,
    }),
    faqSchema(faqItems),
    speakableSchema({
      path: '/prix-ciment-cpj55',
      locale: loc,
      cssSelectors: ['h1', '.hero-price', '.pricing-table', '.faq-question'],
    }),
  ];

  return (
    <>
      <JsonLdScript schema={schemas} />
      <Breadcrumbs items={[{ name: isFr ? 'Prix CPJ 55' : 'CPJ 55 Price', path: '/prix-ciment-cpj55' }]} locale={locale} />

      {/* Hero */}
      <section className="bg-gradient-to-br from-[#1B3A5C] to-[#0f1f33] text-white py-20 md:py-28">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <div className="max-w-4xl">
            <span className="inline-block px-4 py-1.5 bg-[#E8B84B]/20 text-[#E8B84B] text-sm font-medium rounded-full mb-6">
              {isFr ? 'Tarifs CPJ 55 — 2026' : 'CPJ 55 Pricing — 2026'}
            </span>
            <h1 className="text-[clamp(2rem,5vw,3.5rem)] font-bold leading-[1.1] mb-6">
              {isFr ? 'Prix du ciment CPJ 55 au Maroc' : 'CPJ 55 cement price in Morocco'}
            </h1>
            <p className="text-lg md:text-xl text-white/80 leading-relaxed mb-6 max-w-3xl">
              {isFr
                ? "CPJ 55 dès 80 DH le sac de 50 kg (1 600 DH/T). Ciment haute résistance (55 MPa) pour grands ouvrages de génie civil. Tarifs transparents par conditionnement. Devis gratuit sous 24h."
                : 'CPJ 55 from 80 DH per 50kg bag (1,600 DH/T). High-strength cement (55 MPa) for major civil engineering works. Transparent pricing by packaging. Free quote within 24h.'}
            </p>
            <div className="hero-price inline-block bg-[#C1272D]/20 border border-[#C1272D]/40 rounded-2xl px-8 py-5 mb-8">
              <span className="block text-sm text-white/70 mb-1">
                {isFr ? 'Prix dès' : 'Price from'}
              </span>
              <span className="text-4xl md:text-5xl font-bold text-[#E8B84B]">80 DH/sac</span>
              <span className="block text-sm text-white/60 mt-1">
                {isFr ? '(1 600 DH/T — sac 50kg)' : '(1,600 DH/T — 50kg bag)'}
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
                href={`/${locale}/cpj-55`}
                className="inline-flex items-center gap-2 px-6 py-3 border border-white/30 text-white font-semibold rounded-full hover:bg-white/10 transition-colors"
              >
                {isFr ? 'Fiche produit CPJ 55' : 'CPJ 55 product sheet'}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing table */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1B3A5C] mb-4 text-center">
            {isFr ? 'Tableau des prix CPJ 55' : 'CPJ 55 price table'}
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

      {/* When to use CPJ 55 */}
      <section className="py-16 md:py-24 bg-[#F7F8FA]">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1B3A5C] mb-4 text-center">
            {isFr ? 'Quand utiliser le CPJ 55 ?' : 'When to use CPJ 55?'}
          </h2>
          <p className="text-center text-[#6B7280] mb-12 max-w-2xl mx-auto">
            {isFr
              ? "Le CPJ 55 est réservé aux ouvrages très sollicités où la résistance et la durabilité sont critiques."
              : 'CPJ 55 is reserved for highly stressed structures where strength and durability are critical.'}
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {whenToUse.map((f, i) => (
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
                          {isFr ? 'Haute résistance' : 'High strength'}
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
              href={`/${locale}/cpj-55`}
              className="inline-flex items-center gap-2 text-[#C1272D] font-medium hover:gap-3 transition-all"
            >
              {isFr ? '→ Voir le CPJ 55' : '→ See CPJ 55'}
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href={`/${locale}/cpj-45`}
              className="inline-flex items-center gap-2 text-[#C1272D] font-medium hover:gap-3 transition-all"
            >
              {isFr ? '→ Voir le CPJ 45' : '→ See CPJ 45'}
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
              { icon: Package, title: isFr ? 'Sacs 50kg' : '50kg bags', desc: isFr ? 'Palette 1T (20 sacs) — 1 600 DH/T (80 DH/sac). Idéal artisans et PME.' : '1T pallet (20 bags) — 1,600 DH/T (80 DH/bag). Ideal for craftsmen and SMEs.' },
              { icon: Truck, title: isFr ? 'Vrac' : 'Bulk', desc: isFr ? 'Camion-citerne avec pompage direct en silo. Min. 30T — 1 600 DH/T.' : 'Tanker truck with direct silo pumping. Min. 30T — 1,600 DH/T.' },
              { icon: Container, title: isFr ? 'Big Bag 1T' : '1T Big Bag', desc: isFr ? 'Manutention par grue ou chariot. 1 680 DH/T — chantiers moyens sans silo.' : 'Crane or forklift handling. 1,680 DH/T — medium sites without silo.' },
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
              {isFr ? 'Prix du ciment CPJ 55 au Maroc : guide complet' : 'CPJ 55 cement price in Morocco: complete guide'}
            </h2>
            <p className="text-[#1A1A2E]/80 leading-relaxed mb-6">
              {isFr
                ? "Le prix du ciment CPJ 55 au Maroc varie selon le conditionnement, le volume commandé et la zone de livraison. Chez Dakhla Aménagement, le sac de 50 kg démarre à 80 DH sur palette 1T (soit 1 600 DH la tonne), ce qui en fait le ciment haute résistance le plus compétitif du marché marocain. Cette page présente tous nos tarifs CPJ 55 et explique quand justifier le surcoût par rapport au CPJ 45."
                : "The price of CPJ 55 cement in Morocco varies depending on packaging, the volume ordered and the delivery zone. At Dakhla Aménagement, the 50kg bag starts at 80 DH on a 1T pallet (i.e. 1,600 DH per ton), making it the most competitive high-strength cement on the Moroccan market. This page presents all our CPJ 55 prices and explains when the surcharge over CPJ 45 is justified."}
            </p>

            <h3 className="text-2xl font-bold text-[#1B3A5C] mt-10 mb-4">
              {isFr ? 'Prix du sac de 50 kg de CPJ 55' : '50kg bag price for CPJ 55'}
            </h3>
            <p className="text-[#1A1A2E]/80 leading-relaxed mb-6">
              {isFr
                ? "Le sac de ciment CPJ 55 de 50 kg est vendu entre 80 et 90 DH chez Dakhla Aménagement. Le prix exact dépend de la quantité commandée : à l'unité (détail), le sac est à 90 DH ; sur palette 1T (20 sacs), il descend à 80 DH le sac, soit 1 600 DH la palette. Pour les commandes en gros (≥5 palettes), un tarif négocié s'applique. Le sac 50 kg reste pratique pour les chantiers de génie civil de taille moyenne."
                : "The 50kg bag of CPJ 55 cement is sold between 80 and 90 DH at Dakhla Aménagement. The exact price depends on the quantity ordered: per unit (retail), the bag is 90 DH; on a 1T pallet (20 bags), it drops to 80 DH per bag, i.e. 1,600 DH per pallet. For wholesale orders (≥5 pallets), a negotiated rate applies. The 50kg bag remains practical for medium-sized civil engineering sites."}
            </p>

            <h3 className="text-2xl font-bold text-[#1B3A5C] mt-10 mb-4">
              {isFr ? 'Prix de la tonne de CPJ 55' : 'Price per ton of CPJ 55'}
            </h3>
            <p className="text-[#1A1A2E]/80 leading-relaxed mb-6">
              {isFr
                ? "La tonne de ciment CPJ 55 est à 1 600 DH départ usine Dakhla, que ce soit en sacs sur palette 1T ou en vrac (camion-citerne, minimum 30T). En big bag 1T, comptez 1 680 DH/T pour tenir compte du conditionnement. Le vrac est la solution la plus économique pour les grands chantiers de génie civil (ponts, barrages, ports) car il supprime le coût des sacs."
                : "A ton of CPJ 55 cement is 1,600 DH ex-works Dakhla, whether in palletized bags or in bulk (tanker truck, minimum 30T). In 1T big bag, expect 1,680 DH/T to account for packaging. Bulk is the most economical solution for large civil engineering sites (bridges, dams, ports) as it removes bag costs."}
            </p>

            <h3 className="text-2xl font-bold text-[#1B3A5C] mt-10 mb-4">
              {isFr ? 'CPJ 55 : pour les ouvrages très sollicités' : 'CPJ 55: for highly stressed structures'}
            </h3>
            <p className="text-[#1A1A2E]/80 leading-relaxed mb-6">
              {isFr
                ? "Avec 55 MPa à 28 jours, le CPJ 55 est réservé aux ouvrages où la résistance mécanique élevée et la durabilité sont critiques : ponts et viaducs, ouvrages portuaires et maritimes, barrages, fondations profondes (pieux, micropieux, parois moulées), structures en zone sismique, béton haute performance (BHP), éléments précontraints et préfabriqués sollicités. Pour la construction courante (résidentiel, tertiaire), le CPJ 45 suffit largement et coûte 100 DH/T de moins. Utiliser du CPJ 55 pour du béton armé courant n'apporte pas de gain structurel suffisant pour justifier le surcoût."
                : "With 55 MPa at 28 days, CPJ 55 is reserved for structures where high mechanical strength and durability are critical: bridges and viaducts, port and marine works, dams, deep foundations (piles, micropiles, diaphragm walls), structures in seismic zones, high-performance concrete (HPC), prestressed and stressed precast elements. For standard construction (residential, commercial), CPJ 45 is largely sufficient and costs 100 DH/T less. Using CPJ 55 for standard reinforced concrete does not provide sufficient structural gain to justify the surcharge."}
            </p>

            <h3 className="text-2xl font-bold text-[#1B3A5C] mt-10 mb-4">
              {isFr ? 'Pourquoi le CPJ 55 est-il plus cher que le CPJ 45 ?' : 'Why is CPJ 55 more expensive than CPJ 45?'}
            </h3>
            <p className="text-[#1A1A2E]/80 leading-relaxed mb-6">
              {isFr
                ? "Le CPJ 55 (1 600 DH/T) coûte environ 100 DH/T de plus que le CPJ 45 (1 500 DH/T) car sa résistance supérieure (55 MPa contre 45 MPa) nécessite une formulation plus riche en clinker, une finesse de mouture plus élevée (≥380 m²/kg contre ≥350 m²/kg) et un contrôle qualité plus exigeant. Ce surcoût est largement compensé par les performances mécaniques accrues et la durabilité renforcée, qui prolongent la durée de vie des ouvrages de génie civil et réduisent les coûts de maintenance."
                : "CPJ 55 (1,600 DH/T) costs about 100 DH/T more than CPJ 45 (1,500 DH/T) because its higher strength (55 MPa vs 45 MPa) requires a formulation richer in clinker, a higher fineness (≥380 m²/kg vs ≥350 m²/kg) and more demanding quality control. This surcharge is largely offset by the increased mechanical performance and enhanced durability, which extend the service life of civil engineering works and reduce maintenance costs."}
            </p>

            <h3 className="text-2xl font-bold text-[#1B3A5C] mt-10 mb-4">
              {isFr ? 'Comment obtenir le meilleur prix pour le CPJ 55 ?' : 'How to get the best price for CPJ 55?'}
            </h3>
            <ul className="space-y-3 mb-6">
              {(isFr
                ? [
                    'Commander en grosse quantité (≥5 palettes ou ≥30T vrac) pour bénéficier des tarifs dégressifs',
                    'Privilégier le vrac pour les grands chantiers de génie civil (suppression du coût des sacs)',
                    'Négocier un contrat annuel pour les marchés récurrents (entreprises de génie civil)',
                    'Demander un devis gratuit pour un tarif personnalisé livré chantier',
                  ]
                : [
                    'Order in large quantity (≥5 pallets or ≥30T bulk) to benefit from volume discounts',
                    'Prefer bulk for large civil engineering sites (eliminates bag cost)',
                    'Negotiate an annual contract for recurring markets (civil engineering companies)',
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
                href={`/${locale}/cpj-55`}
                className="inline-flex items-center gap-2 text-[#C1272D] font-medium hover:gap-3 transition-all"
              >
                {isFr ? '→ Fiche produit CPJ 55' : '→ CPJ 55 product sheet'}
              </Link>
              <Link
                href={`/${locale}/cpj-45`}
                className="inline-flex items-center gap-2 text-[#C1272D] font-medium hover:gap-3 transition-all"
              >
                {isFr ? '→ Ciment CPJ 45' : '→ CPJ 45 cement'}
              </Link>
              <Link
                href={`/${locale}/cpj-35`}
                className="inline-flex items-center gap-2 text-[#C1272D] font-medium hover:gap-3 transition-all"
              >
                {isFr ? '→ Ciment CPJ 35' : '→ CPJ 35 cement'}
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
            {isFr ? 'Questions fréquentes sur le prix du CPJ 55' : 'Frequently asked questions about CPJ 55 price'}
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
      <PriceTypeLinks currentType="CPJ 55" locale={locale} />
      <CtaBanner
        locale={locale}
        title={isFr ? 'Demandez votre devis CPJ 55 gratuit' : 'Request your free CPJ 55 quote'}
        subtitle={
          isFr
            ? "Tarif personnalisé sous 24h. CPJ 55 dès 80 DH/sac (1 600 DH/T). Ciment haute résistance pour génie civil. Livraison Sud Maroc + Mauritanie."
            : 'Personalized rate within 24h. CPJ 55 from 80 DH/bag (1,600 DH/T). High-strength cement for civil engineering. Delivery Southern Morocco + Mauritania.'
        }
        buttonText={isFr ? 'Demander un devis gratuit' : 'Request a free quote'}
      />
    </>
  );
}
