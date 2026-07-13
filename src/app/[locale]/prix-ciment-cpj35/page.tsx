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
import {
  CheckCircle,
  ArrowRight,
  Truck,
  Package,
  Container,
  MapPin,
  Store,
} from 'lucide-react';

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
      path: '/prix-ciment-cpj35',
      title: 'CPJ 35 Cement Price Morocco — 70-75 DH/bag | SDAD',
      description:
        'CPJ 35 cement price in Morocco: 70-75 DH per 50kg bag, 1,400 DH/T. Price table by packaging (bags, bulk, big bag). Comparison with CPJ 45 and CPJ 55. Free quote.',
      keywords: [
        'prix CPJ 35',
        'CPJ 35 price Morocco',
        'ciment 70 DH',
        'ciment CPJ 35 tarif',
        'prix sac ciment 50kg Maroc',
        ...KEYWORDS.pricing,
        ...KEYWORDS.products,
      ],
    });
  }

  return buildMetadata({
    locale: 'fr',
    path: '/prix-ciment-cpj35',
    title: 'Prix Ciment CPJ 35 Maroc — 70-75 DH/sac | SDAD',
    description:
      "Prix du ciment CPJ 35 au Maroc : 70-75 DH/sac 50kg, 1 400 DH/T. Tableau de prix par conditionnement (sacs, vrac, big bag). Comparaison avec CPJ 45 et CPJ 55. Devis gratuit.",
    keywords: [
      'prix CPJ 35',
      'prix ciment CPJ 35 Maroc',
      'ciment 70 DH sac',
      'ciment CPJ 35 tarif',
      'prix sac ciment 50kg Maroc',
      'CPJ 35 prix tonne',
      ...KEYWORDS.pricing,
      ...KEYWORDS.products,
    ],
  });
}

export default async function PrixCimentCpj35Page({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const loc: 'fr' | 'en' = locale === 'en' ? 'en' : 'fr';
  const isFr = loc === 'fr';

  const faqItems = isFr
    ? [
        {
          question: 'Quel est le prix du sac de ciment CPJ 35 au Maroc ?',
          answer:
            "Le sac de ciment CPJ 35 de 50 kg coûte entre 70 et 75 DH chez Dakhla Aménagement, selon la quantité commandée. Sur palette 1T (20 sacs), comptez environ 1 400 DH la tonne. Les tarifs sont dégressifs : plus vous commandez, plus le prix unitaire baisse. Pour un prix ferme livré chantier, demandez un devis gratuit.",
        },
        {
          question: 'Quel est le prix de la tonne de CPJ 35 ?',
          answer:
            "La tonne de ciment CPJ 35 coûte 1 400 DH départ usine Dakhla, que ce soit en sacs 50kg sur palette 1T ou en vrac (camion-citerne, minimum 30T). En big bag 1T, le prix monte à 1 430 DH/T pour tenir compte du conditionnement. La livraison est facturée en supplément selon la zone.",
        },
        {
          question: 'Pourquoi le CPJ 35 est-il moins cher que le CPJ 45 et le CPJ 55 ?',
          answer:
            "Le CPJ 35 est moins cher car sa résistance (35 MPa à 28 jours) est plus faible. Sa formulation contient plus d'additions calcaires, plus économiques que le clinker pur, et il est destiné à des usages moins exigeants (maçonnerie, dallages simples, mortiers). Le CPJ 45 (1 500 DH/T, 45 MPa) couvre le béton armé courant. Le CPJ 55 (1 600 DH/T, 55 MPa) est réservé aux grands ouvrages de génie civil.",
        },
        {
          question: 'Où acheter du ciment CPJ 35 au Maroc ?',
          answer:
            "Vous pouvez acheter le CPJ 35 directement auprès de l'usine Dakhla Aménagement à Dakhla, ou le faire livrer sur votre chantier dans tout le Sud marocain (Dakhla, Laâyoune, Boujdour, Es-Semara, Tan-Tan, Guelmim) et en Mauritanie (Nouakchott). Pour commander, demandez un devis gratuit en ligne ou appelez le +212 658-265685. Notre équipe commerciale vous répond sous 24h.",
        },
        {
          question: 'Le prix du CPJ 35 inclut-il la livraison ?',
          answer:
            "Non, les prix affichés (70-75 DH/sac, 1 400 DH/T) sont départ usine Dakhla. La livraison est calculée en supplément selon la zone (Dakhla, Laâyoune, Mauritanie…) et le volume. Un devis personnalisé vous donnera le prix total livré chantier. Pour les grosses commandes (≥30T), la livraison peut être négociée.",
        },
      ]
    : [
        {
          question: 'What is the price of a 50kg bag of CPJ 35 cement in Morocco?',
          answer:
            'A 50kg bag of CPJ 35 cement costs between 70 and 75 DH from Dakhla Aménagement, depending on the quantity ordered. On a 1T pallet (20 bags), expect about 1,400 DH per ton. Prices are degressive: the more you order, the lower the unit price. For a firm delivered-to-site price, request a free quote.',
        },
        {
          question: 'What is the price per ton of CPJ 35?',
          answer:
            'A ton of CPJ 35 cement costs 1,400 DH ex-works Dakhla, whether in 50kg bags on 1T pallets or in bulk (tanker truck, minimum 30T). In 1T big bag, the price rises to 1,430 DH/T to account for packaging. Delivery is charged extra depending on the zone.',
        },
        {
          question: 'Why is CPJ 35 cheaper than CPJ 45 and CPJ 55?',
          answer:
            'CPJ 35 is cheaper because its strength (35 MPa at 28 days) is lower. Its formulation contains more limestone additions, which are more economical than pure clinker, and it is intended for less demanding uses (masonry, simple slabs, mortars). CPJ 45 (1,500 DH/T, 45 MPa) covers standard reinforced concrete. CPJ 55 (1,600 DH/T, 55 MPa) is reserved for major civil engineering works.',
        },
        {
          question: 'Where to buy CPJ 35 cement in Morocco?',
          answer:
            'You can buy CPJ 35 directly from the Dakhla Aménagement plant in Dakhla, or have it delivered to your site throughout Southern Morocco (Dakhla, Laayoune, Boujdour, Es-Semara, Tan-Tan, Guelmim) and Mauritania (Nouakchott). To order, request a free quote online or call +212 658-265685. Our sales team responds within 24h.',
        },
        {
          question: 'Does the CPJ 35 price include delivery?',
          answer:
            'No, the displayed prices (70-75 DH/bag, 1,400 DH/T) are ex-works Dakhla. Delivery is calculated extra depending on the zone (Dakhla, Laayoune, Mauritania…) and the volume. A personalized quote will give you the total delivered-to-site price. For large orders (≥30T), delivery can be negotiated.',
        },
      ];

  const pricingTable = isFr
    ? [
        { packaging: 'Sac 50kg (à l’unité)', price: '75 DH', note: 'Petits chantiers, détail' },
        { packaging: 'Sac 50kg (palette 1T = 20 sacs)', price: '1 400 DH/T (70 DH/sac)', note: 'Maçonnerie, artisans' },
        { packaging: 'Vrac (camion-citerne)', price: '1 400 DH/T', note: 'Min. 30T — idéal gros chantiers' },
        { packaging: 'Big Bag 1T', price: '1 430 DH/T', note: 'Manutention grue/chariot' },
        { packaging: 'Big Bag 500kg', price: '740 DH/unité', note: 'Petits chantiers sans silo' },
      ]
    : [
        { packaging: '50kg bag (unit)', price: '75 DH', note: 'Small sites, retail' },
        { packaging: '50kg bag (1T pallet = 20 bags)', price: '1,400 DH/T (70 DH/bag)', note: 'Masonry, craftsmen' },
        { packaging: 'Bulk (tanker truck)', price: '1,400 DH/T', note: 'Min. 30T — ideal large sites' },
        { packaging: '1T Big Bag', price: '1,430 DH/T', note: 'Crane/forklift handling' },
        { packaging: '500kg Big Bag', price: '740 DH/unit', note: 'Small sites without silo' },
      ];

  const comparison = isFr
    ? [
        {
          type: 'CPJ 35',
          strength: '35 MPa',
          pricePerTon: '1 400 DH/T',
          pricePerBag: '70-75 DH',
          use: 'Maçonnerie, dallages simples, mortiers',
          highlight: true,
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
          highlight: true,
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
          highlight: false,
        },
      ];

  const whereToBuy = isFr
    ? [
        {
          icon: Store,
          title: 'Usine de Dakhla',
          desc: 'Retrait direct à l’usine DAM de Dakhla. Ouverture Lun-Sam, 8h-17h.',
        },
        {
          icon: Truck,
          title: 'Livraison Sud Maroc',
          desc: 'Dakhla, Laâyoune, Boujdour, Es-Semara, Tan-Tan, Guelmim, Tarfaya.',
        },
        {
          icon: MapPin,
          title: 'Livraison Mauritanie',
          desc: 'Nouakchott et Nord Mauritanie. Délai 3-5 jours ouvrés.',
        },
      ]
    : [
        {
          icon: Store,
          title: 'Dakhla plant',
          desc: 'Direct pickup at the DAM plant in Dakhla. Open Mon-Sat, 8am-5pm.',
        },
        {
          icon: Truck,
          title: 'Southern Morocco delivery',
          desc: 'Dakhla, Laayoune, Boujdour, Es-Semara, Tan-Tan, Guelmim, Tarfaya.',
        },
        {
          icon: MapPin,
          title: 'Mauritania delivery',
          desc: 'Nouakchott and Northern Mauritania. Lead time 3-5 business days.',
        },
      ];

  const relatedLinks = isFr
    ? [
        {
          title: 'Ciment CPJ 35 (fiche produit)',
          description: "Présentation complète du CPJ 35 : caractéristiques, usages, conditionnements.",
          href: '/cpj-35',
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
          title: 'CPJ 35 cement (product sheet)',
          description: 'Complete CPJ 35 overview: specifications, uses, packaging.',
          href: '/cpj-35',
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
      name: isFr ? 'Prix Ciment CPJ 35 Maroc — 70-75 DH/sac' : 'CPJ 35 Cement Price Morocco — 70-75 DH/bag',
      description: isFr
        ? "Prix du ciment CPJ 35 au Maroc : 70-75 DH/sac 50kg, 1 400 DH/T. Tableau de prix par conditionnement. Comparaison avec CPJ 45 et CPJ 55. Devis gratuit."
        : 'CPJ 35 cement price in Morocco: 70-75 DH per 50kg bag, 1,400 DH/T. Price table by packaging. Comparison with CPJ 45 and CPJ 55. Free quote.',
      path: '/prix-ciment-cpj35',
      locale: loc,
    }),
    breadcrumbSchema([{ name: isFr ? 'Prix CPJ 35' : 'CPJ 35 Price', path: '/prix-ciment-cpj35' }], loc),
    productSchema({
      name: isFr ? 'Ciment CPJ 35 — Prix Maroc' : 'CPJ 35 Cement — Price Morocco',
      description: isFr
        ? "Ciment Portland Composé 35 MPa. Prix dès 70 DH/sac (1 400 DH/T). Conforme NM 10.1.004."
        : 'Composite Portland 35 MPa cement. Price from 70 DH/bag (1,400 DH/T). NM 10.1.004 compliant.',
      sku: 'DAM-CPJ35',
      price: '1400',
      path: '/prix-ciment-cpj35',
      locale: loc,
      image: '/images/products/cement-powder-closeup.jpg',
      ratingValue: '4.7',
      reviewCount: 54,
    }),
    faqSchema(faqItems),
    speakableSchema({
      path: '/prix-ciment-cpj35',
      locale: loc,
      cssSelectors: ['h1', '.hero-price', '.pricing-table', '.faq-question'],
    }),
  ];

  return (
    <>
      <JsonLdScript schema={schemas} />
      <Breadcrumbs items={[{ name: isFr ? 'Prix CPJ 35' : 'CPJ 35 Price', path: '/prix-ciment-cpj35' }]} locale={locale} />

      {/* Hero */}
      <section className="bg-gradient-to-br from-[#1B3A5C] to-[#0f1f33] text-white py-20 md:py-28">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <div className="max-w-4xl">
            <span className="inline-block px-4 py-1.5 bg-[#E8B84B]/20 text-[#E8B84B] text-sm font-medium rounded-full mb-6">
              {isFr ? 'Tarifs CPJ 35 — 2026' : 'CPJ 35 Pricing — 2026'}
            </span>
            <h1 className="text-[clamp(2rem,5vw,3.5rem)] font-bold leading-[1.1] mb-6">
              {isFr ? 'Prix du ciment CPJ 35 au Maroc' : 'CPJ 35 cement price in Morocco'}
            </h1>
            <p className="text-lg md:text-xl text-white/80 leading-relaxed mb-6 max-w-3xl">
              {isFr
                ? "CPJ 35 dès 70 DH le sac de 50 kg (1 400 DH/T). Tarifs transparents par conditionnement : sacs, vrac, big bag. Devis gratuit et personnalisé sous 24h."
                : 'CPJ 35 from 70 DH per 50kg bag (1,400 DH/T). Transparent pricing by packaging: bags, bulk, big bag. Free custom quote within 24h.'}
            </p>
            <div className="hero-price inline-block bg-[#C1272D]/20 border border-[#C1272D]/40 rounded-2xl px-8 py-5 mb-8">
              <span className="block text-sm text-white/70 mb-1">
                {isFr ? 'Prix dès' : 'Price from'}
              </span>
              <span className="text-4xl md:text-5xl font-bold text-[#E8B84B]">70 DH/sac</span>
              <span className="block text-sm text-white/60 mt-1">
                {isFr ? '(1 400 DH/T — sac 50kg)' : '(1,400 DH/T — 50kg bag)'}
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
                href={`/${locale}/cpj-35`}
                className="inline-flex items-center gap-2 px-6 py-3 border border-white/30 text-white font-semibold rounded-full hover:bg-white/10 transition-colors"
              >
                {isFr ? 'Fiche produit CPJ 35' : 'CPJ 35 product sheet'}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing table */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1B3A5C] mb-4 text-center">
            {isFr ? 'Tableau des prix CPJ 35' : 'CPJ 35 price table'}
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

      {/* Comparison table */}
      <section className="py-16 md:py-24 bg-[#F7F8FA]">
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
                          {isFr ? 'Le moins cher' : 'Cheapest'}
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

      {/* Where to buy */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1B3A5C] mb-4 text-center">
            {isFr ? 'Où acheter le CPJ 35 ?' : 'Where to buy CPJ 35?'}
          </h2>
          <p className="text-center text-[#6B7280] mb-12 max-w-2xl mx-auto">
            {isFr
              ? "Achat direct à l'usine DAM de Dakhla ou livraison sur chantier dans tout le Sud marocain et la Mauritanie."
              : 'Direct purchase at the DAM plant in Dakhla or on-site delivery across Southern Morocco and Mauritania.'}
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {whereToBuy.map((opt, i) => (
              <div key={i} className="bg-[#F7F8FA] border border-[#E5E7EB] rounded-2xl p-8 text-center">
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

      {/* Packaging options */}
      <section className="py-16 md:py-24 bg-[#F7F8FA]">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1B3A5C] mb-12 text-center">
            {isFr ? 'Conditionnements disponibles' : 'Available packaging'}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              { icon: Package, title: isFr ? 'Sacs 50kg' : '50kg bags', desc: isFr ? 'Palette 1T (20 sacs) — 1 400 DH/T. Idéal maçonnerie et petits chantiers.' : '1T pallet (20 bags) — 1,400 DH/T. Ideal for masonry and small sites.' },
              { icon: Truck, title: isFr ? 'Vrac' : 'Bulk', desc: isFr ? 'Camion-citerne avec pompage direct en silo. Min. 30T — 1 400 DH/T.' : 'Tanker truck with direct silo pumping. Min. 30T — 1,400 DH/T.' },
              { icon: Container, title: isFr ? 'Big Bag 1T' : '1T Big Bag', desc: isFr ? 'Manutention par grue ou chariot. 1 430 DH/T — chantiers moyens sans silo.' : 'Crane or forklift handling. 1,430 DH/T — medium sites without silo.' },
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
              {isFr ? 'Prix du ciment CPJ 35 au Maroc : guide complet' : 'CPJ 35 cement price in Morocco: complete guide'}
            </h2>
            <p className="text-[#1A1A2E]/80 leading-relaxed mb-6">
              {isFr
                ? "Le prix du ciment CPJ 35 au Maroc varie selon le conditionnement, le volume commandé et la zone de livraison. Chez Dakhla Aménagement, le sac de 50 kg démarre à 70 DH sur palette 1T (soit 1 400 DH la tonne), ce qui en fait le ciment le plus abordable de notre gamme. Cette page présente tous nos tarifs CPJ 35, compare les prix avec le CPJ 45 et le CPJ 55, et explique comment acheter au meilleur prix."
                : "The price of CPJ 35 cement in Morocco varies depending on packaging, the volume ordered and the delivery zone. At Dakhla Aménagement, the 50kg bag starts at 70 DH on a 1T pallet (i.e. 1,400 DH per ton), making it the most affordable cement in our range. This page presents all our CPJ 35 prices, compares them with CPJ 45 and CPJ 55, and explains how to buy at the best price."}
            </p>

            <h3 className="text-2xl font-bold text-[#1B3A5C] mt-10 mb-4">
              {isFr ? 'Prix du sac de 50 kg de CPJ 35' : '50kg bag price for CPJ 35'}
            </h3>
            <p className="text-[#1A1A2E]/80 leading-relaxed mb-6">
              {isFr
                ? "Le sac de ciment CPJ 35 de 50 kg est vendu entre 70 et 75 DH chez Dakhla Aménagement. Le prix exact dépend de la quantité commandée : à l'unité (détail), le sac est à 75 DH ; sur palette 1T (20 sacs), il descend à 70 DH le sac, soit 1 400 DH la palette. Pour les commandes en gros (≥5 palettes), un tarif négocié s'applique. Le sac 50 kg est le format idéal pour la maçonnerie courante, les petits chantiers et les particuliers."
                : "The 50kg bag of CPJ 35 cement is sold between 70 and 75 DH at Dakhla Aménagement. The exact price depends on the quantity ordered: per unit (retail), the bag is 75 DH; on a 1T pallet (20 bags), it drops to 70 DH per bag, i.e. 1,400 DH per pallet. For wholesale orders (≥5 pallets), a negotiated rate applies. The 50kg bag is the ideal format for standard masonry, small sites and individuals."}
            </p>

            <h3 className="text-2xl font-bold text-[#1B3A5C] mt-10 mb-4">
              {isFr ? 'Prix de la tonne de CPJ 35' : 'Price per ton of CPJ 35'}
            </h3>
            <p className="text-[#1A1A2E]/80 leading-relaxed mb-6">
              {isFr
                ? "La tonne de ciment CPJ 35 est à 1 400 DH départ usine Dakhla, que ce soit en sacs sur palette 1T ou en vrac (camion-citerne, minimum 30T). En big bag 1T, comptez 1 430 DH/T pour tenir compte du conditionnement. Le vrac est la solution la plus économique pour les gros chantiers (BTP, promoteurs) car il supprime le coût des sacs et de la manutention. Le sac palette 1T reste la solution la plus pratique pour les artisans et PME."
                : "A ton of CPJ 35 cement is 1,400 DH ex-works Dakhla, whether in palletized bags or in bulk (tanker truck, minimum 30T). In 1T big bag, expect 1,430 DH/T to account for packaging. Bulk is the most economical solution for large sites (construction companies, developers) as it removes bag and handling costs. The 1T pallet remains the most practical solution for craftsmen and SMEs."}
            </p>

            <h3 className="text-2xl font-bold text-[#1B3A5C] mt-10 mb-4">
              {isFr ? 'CPJ 35 vs CPJ 45 vs CPJ 55 : quel ciment choisir selon le prix ?' : 'CPJ 35 vs CPJ 45 vs CPJ 55: which cement to choose based on price?'}
            </h3>
            <p className="text-[#1A1A2E]/80 leading-relaxed mb-6">
              {isFr
                ? "Le choix du ciment ne doit pas se faire uniquement sur le prix. Le CPJ 35 (70-75 DH/sac, 1 400 DH/T) est le moins cher mais sa résistance (35 MPa) limite son usage à la maçonnerie, aux dallages simples et aux mortiers. Le CPJ 45 (75-85 DH/sac, 1 500 DH/T) couvre le béton armé courant et reste le meilleur rapport qualité/prix pour la construction résidentielle et tertiaire. Le CPJ 55 (80-90 DH/sac, 1 600 DH/T) est réservé aux ouvrages très sollicités (ponts, ports, barrages). Économiser 100 DH/T en choisissant un ciment sous-dimensionné peut coûter cher en réparations : choisissez le ciment adapté à votre usage, pas seulement le moins cher."
                : "Choosing cement should not be based on price alone. CPJ 35 (70-75 DH/bag, 1,400 DH/T) is the cheapest but its strength (35 MPa) limits its use to masonry, simple slabs and mortars. CPJ 45 (75-85 DH/bag, 1,500 DH/T) covers standard reinforced concrete and remains the best price/performance ratio for residential and commercial construction. CPJ 55 (80-90 DH/bag, 1,600 DH/T) is reserved for highly stressed structures (bridges, ports, dams). Saving 100 DH/T by choosing undersized cement can cost dearly in repairs: choose the cement adapted to your use, not just the cheapest."}
            </p>

            <h3 className="text-2xl font-bold text-[#1B3A5C] mt-10 mb-4">
              {isFr ? 'Comment obtenir le meilleur prix pour le CPJ 35 ?' : 'How to get the best price for CPJ 35?'}
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
                href={`/${locale}/cpj-35`}
                className="inline-flex items-center gap-2 text-[#C1272D] font-medium hover:gap-3 transition-all"
              >
                {isFr ? '→ Fiche produit CPJ 35' : '→ CPJ 35 product sheet'}
              </Link>
              <Link
                href={`/${locale}/cpj-45`}
                className="inline-flex items-center gap-2 text-[#C1272D] font-medium hover:gap-3 transition-all"
              >
                {isFr ? '→ Ciment CPJ 45' : '→ CPJ 45 cement'}
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
            {isFr ? 'Questions fréquentes sur le prix du CPJ 35' : 'Frequently asked questions about CPJ 35 price'}
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
      <CtaBanner
        locale={locale}
        title={isFr ? 'Demandez votre devis CPJ 35 gratuit' : 'Request your free CPJ 35 quote'}
        subtitle={
          isFr
            ? "Tarif personnalisé sous 24h. CPJ 35 dès 70 DH/sac (1 400 DH/T). Livraison dans tout le Sud marocain et la Mauritanie."
            : 'Personalized rate within 24h. CPJ 35 from 70 DH/bag (1,400 DH/T). Delivery across Southern Morocco and Mauritania.'
        }
        buttonText={isFr ? 'Demander un devis gratuit' : 'Request a free quote'}
      />
    </>
  );
}
