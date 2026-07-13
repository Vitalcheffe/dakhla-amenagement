import Link from 'next/link';
import { buildMetadata, KEYWORDS } from '@/lib/seo';
import {
  webPageSchema,
  breadcrumbSchema,
  productSchema,
  serviceSchema,
  faqSchema,
  speakableSchema,
} from '@/lib/structured-data';
import { JsonLdScript } from '@/components/shared/JsonLd';
import { Breadcrumbs } from '@/components/shared/Breadcrumbs';
import { RelatedLinks, CtaBanner } from '@/components/shared/RelatedLinks';
import { RelatedArticles } from '@/components/shared/RelatedArticles';
import {
  CheckCircle,
  ArrowRight,
  Truck,
  Package,
  Container,
  Factory,
  Building2,
  Layers,
  PaintBucket,
  LayoutGrid,
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
      path: '/prix-mortier-ciment',
      title: 'Cement Mortar Price Morocco — 2026 Rates | SDAD',
      description:
        'Cement mortar prices in Morocco: tile adhesive, render mortar, jointing mortar, masonry mortar. Detailed 2026 rates per kg and per ton. Free quote.',
      keywords: [
        'prix mortier ciment Maroc',
        'mortar price Morocco',
        'tile adhesive price',
        'render mortar price',
        'jointing mortar price',
        'masonry mortar price',
        ...KEYWORDS.pricing,
        ...KEYWORDS.products,
      ],
    });
  }

  return buildMetadata({
    locale: 'fr',
    path: '/prix-mortier-ciment',
    title: 'Prix Mortier Ciment Maroc — Tarifs 2026 | SDAD',
    description:
      "Prix du mortier de ciment au Maroc. Mortier-colle, mortier d'enduit, mortier de jointoiement, mortier de maçonnerie. Tarifs détaillés 2026. Devis gratuit.",
    keywords: [
      'prix mortier ciment Maroc',
      'prix mortier colle Maroc',
      'prix mortier enduit',
      'prix mortier jointoiement',
      'prix mortier maçonnerie',
      'tarif mortier 2026',
      ...KEYWORDS.pricing,
      ...KEYWORDS.products,
    ],
  });
}

export default async function PrixMortierCimentPage({
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
          question: 'Quel est le prix du mortier de ciment au Maroc ?',
          answer:
            "Le prix du mortier de ciment au Maroc varie selon le type de mortier : mortier-colle 25-35 DH/sac 25kg, mortier d'enduit 18-25 DH/sac 25kg, mortier de jointoiement 22-30 DH/sac 25kg, mortier de maçonnerie (gâché sur chantier) 1 400-1 500 DH/T de ciment + sable. Pour un tarif précis, demandez un devis gratuit à Dakhla Aménagement.",
        },
        {
          question: 'Quelle différence entre mortier-colle, mortier d’enduit et mortier de jointoiement ?',
          answer:
            "Le mortier-colle (C2/T2 selon EN 12004) sert à coller les carrelages et faïences : formulation adhésive forte, prix 25-35 DH/sac. Le mortier d'enduit (mortier de façade) sert à enduire les murs extérieurs : formulation plus grasse pour l'étanchéité, prix 18-25 DH/sac. Le mortier de jointoiement sert à remplir les joints entre carreaux : formulation fine et colorée, prix 22-30 DH/sac. Le mortier de maçonnerie (gâché sur chantier à partir de CPJ 35/45 + sable) sert à monter les murs en agglos.",
        },
        {
          question: 'Comment est calculé le prix du mortier de maçonnerie gâché sur chantier ?',
          answer:
            "Le mortier de maçonnerie gâché sur chantier est composé de ciment (CPJ 35 ou CPJ 45) + sable + eau. Le coût dépend du dosage en ciment : pour 1 m³ de mortier à 350 kg/m³, comptez 350 kg de ciment (soit 7 sacs de 50 kg × 70 DH = 490 DH en CPJ 35) + 1 m³ de sable (≈150 DH) = environ 640 DH/m³ de mortier. Soit 25 DH/sac équivalent 25kg. Le gâchage sur chantier reste plus économique que le mortier prêt à l'emploi en sac.",
        },
        {
          question: 'Quel ciment utiliser pour le mortier au Maroc ?',
          answer:
            "Pour les mortiers de maçonnerie, d'enduit et de jointoiement gâchés sur chantier, le CPJ 35 (35 MPa, 1 400 DH/T) est suffisant et économique. Pour les mortiers-colle et mortiers techniques (réparation, scellement), le CPJ 45 (45 MPa, 1 500 DH/T) apporte une meilleure adhérence. Le CPJ 55 n'est justifié que pour les mortiers haute performance (réparation structurelle, scellement d'armatures). Pour les mortiers industriels prêts à l'emploi (sacs), DAM fournit des formulations adéquates.",
        },
        {
          question: 'Le prix du mortier inclut-il la livraison ?',
          answer:
            "Les prix affichés sont départ usine Dakhla. La livraison est calculée en supplément selon la zone (Dakhla, Laâyoune, Boujdour, Tan-Tan, Mauritanie…) et le volume. Pour les commandes en gros (≥5 palettes ou ≥30T), la livraison peut être négociée. Un devis personnalisé vous donnera le prix total livré chantier sous 24h.",
        },
      ]
    : [
        {
          question: 'What is the price of cement mortar in Morocco?',
          answer:
            'The price of cement mortar in Morocco varies by mortar type: tile adhesive 25-35 DH per 25kg bag, render mortar 18-25 DH per 25kg bag, jointing mortar 22-30 DH per 25kg bag, masonry mortar (mixed on site) 1,400-1,500 DH/T of cement + sand. For a precise rate, request a free quote from Dakhla Aménagement.',
        },
        {
          question: 'What is the difference between tile adhesive, render mortar and jointing mortar?',
          answer:
            'Tile adhesive (C2/T2 per EN 12004) is used to bond tiles and ceramics: strong adhesive formulation, price 25-35 DH/bag. Render mortar (facade mortar) is used to coat exterior walls: fattier formulation for waterproofing, price 18-25 DH/bag. Jointing mortar is used to fill joints between tiles: fine and colored formulation, price 22-30 DH/bag. Masonry mortar (mixed on site from CPJ 35/45 + sand) is used to build block walls.',
        },
        {
          question: 'How is the price of site-mixed masonry mortar calculated?',
          answer:
            'Site-mixed masonry mortar is made of cement (CPJ 35 or CPJ 45) + sand + water. The cost depends on the cement dosage: for 1 m³ of mortar at 350 kg/m³, expect 350 kg of cement (i.e. 7 bags of 50kg × 70 DH = 490 DH in CPJ 35) + 1 m³ of sand (≈150 DH) = about 640 DH/m³ of mortar. That is about 25 DH per equivalent 25kg bag. On-site mixing remains more economical than ready-mixed bagged mortar.',
        },
        {
          question: 'Which cement to use for mortar in Morocco?',
          answer:
            'For masonry, render and jointing mortars mixed on site, CPJ 35 (35 MPa, 1,400 DH/T) is sufficient and economical. For tile adhesives and technical mortars (repair, sealing), CPJ 45 (45 MPa, 1,500 DH/T) provides better adhesion. CPJ 55 is only justified for high-performance mortars (structural repair, rebar sealing). For industrial ready-mix mortars (bags), DAM supplies adequate formulations.',
        },
        {
          question: 'Does the mortar price include delivery?',
          answer:
            'Displayed prices are ex-works Dakhla. Delivery is calculated extra depending on the zone (Dakhla, Laayoune, Boujdour, Tan-Tan, Mauritania…) and the volume. For bulk orders (≥5 pallets or ≥30T), delivery can be negotiated. A personalized quote will give you the total delivered-to-site price within 24h.',
        },
      ];

  const pricingTable = isFr
    ? [
        { type: 'Mortier-colle (C2/T2)', packaging: 'Sac 25kg', price: '25-35 DH/sac', note: 'Collage carrelage/faïence' },
        { type: "Mortier d'enduit", packaging: 'Sac 25kg', price: '18-25 DH/sac', note: 'Enduit façade extérieur' },
        { type: 'Mortier de jointoiement', packaging: 'Sac 25kg', price: '22-30 DH/sac', note: 'Joints carrelage/coloré' },
        { type: 'Mortier de réparation', packaging: 'Sac 25kg', price: '35-50 DH/sac', note: 'Réparation structurelle' },
        { type: 'Mortier de maçonnerie (gâché sur chantier)', packaging: 'CPJ 35 + sable', price: '~640 DH/m³', note: 'Ciment 350 kg/m³ + sable' },
        { type: 'Mortier prêt à gâcher (big bag 1T)', packaging: 'Big bag 1T', price: '1 550 DH/T', note: 'Formulation DAM prête à gâcher' },
      ]
    : [
        { type: 'Tile adhesive (C2/T2)', packaging: '25kg bag', price: '25-35 DH/bag', note: 'Tile/ceramic bonding' },
        { type: 'Render mortar', packaging: '25kg bag', price: '18-25 DH/bag', note: 'Exterior facade render' },
        { type: 'Jointing mortar', packaging: '25kg bag', price: '22-30 DH/bag', note: 'Tile joints/colored' },
        { type: 'Repair mortar', packaging: '25kg bag', price: '35-50 DH/bag', note: 'Structural repair' },
        { type: 'Masonry mortar (site-mixed)', packaging: 'CPJ 35 + sand', price: '~640 DH/m³', note: 'Cement 350 kg/m³ + sand' },
        { type: 'Ready-to-mix mortar (1T big bag)', packaging: '1T big bag', price: '1,550 DH/T', note: 'DAM ready-to-mix formulation' },
      ];

  const mortarTypes = isFr
    ? [
        {
          icon: PaintBucket,
          title: 'Mortier-colle',
          desc: "Adhésif fort pour le collage de carrelages, faïences, grès cérame. Conforme EN 12004 (classe C2/T2).",
        },
        {
          icon: Building2,
          title: "Mortier d'enduit",
          desc: "Enduit de façade pour murs extérieurs. Étanchéité et finition. Simple ou multicouche.",
        },
        {
          icon: Layers,
          title: 'Mortier de jointoiement',
          desc: "Remplissage des joints entre carreaux. Disponible en différentes couleurs. Résistance aux intempéries.",
        },
        {
          icon: LayoutGrid,
          title: 'Mortier de maçonnerie',
          desc: "Gâché sur chantier (CPJ 35 + sable) pour montage de murs en agglos et chainages.",
        },
      ]
    : [
        {
          icon: PaintBucket,
          title: 'Tile adhesive',
          desc: 'Strong adhesive for bonding tiles, ceramics, porcelain stoneware. EN 12004 compliant (class C2/T2).',
        },
        {
          icon: Building2,
          title: 'Render mortar',
          desc: 'Facade render for exterior walls. Waterproofing and finishing. Single or multilayer.',
        },
        {
          icon: Layers,
          title: 'Jointing mortar',
          desc: 'Filling joints between tiles. Available in different colors. Weather resistance.',
        },
        {
          icon: LayoutGrid,
          title: 'Masonry mortar',
          desc: 'Site-mixed (CPJ 35 + sand) for building block walls and tie beams.',
        },
      ];

  const uses = isFr
    ? [
        {
          icon: Building2,
          title: 'Bâtiment résidentiel',
          desc: "Enduits de façade, mortier-colle pour carrelage intérieur/extérieur, joints, montage de murs.",
        },
        {
          icon: Factory,
          title: 'Bâtiment tertiaire & industriel',
          desc: "Chapes industrielles, mortiers de réparation, scellement d'équipements, joints techniques.",
        },
        {
          icon: Layers,
          title: 'VRD et voirie',
          desc: "Mortiers de pose pour pavés, bordures, caniveaux. Mortiers de réparation de voirie.",
        },
        {
          icon: PaintBucket,
          title: 'Réparation et rénovation',
          desc: "Mortiers de réparation structurelle, scellement, ragréage, reprofilage de béton dégradé.",
        },
      ]
    : [
        {
          icon: Building2,
          title: 'Residential building',
          desc: 'Facade renders, tile adhesive for interior/exterior tiles, joints, wall masonry.',
        },
        {
          icon: Factory,
          title: 'Commercial & industrial building',
          desc: 'Industrial screeds, repair mortars, equipment sealing, technical joints.',
        },
        {
          icon: Layers,
          title: 'Site work and roads',
          desc: 'Bedding mortars for pavers, curbs, gutters. Road repair mortars.',
        },
        {
          icon: PaintBucket,
          title: 'Repair and renovation',
          desc: 'Structural repair mortars, sealing, resurfacing, reprofiling degraded concrete.',
        },
      ];

  const relatedLinks = isFr
    ? [
        {
          title: 'Ciment CPJ 35 (35 MPa)',
          description: "Ciment économique idéal pour le mortier de maçonnerie gâché sur chantier.",
          href: '/cpj-35',
        },
        {
          title: 'Ciment CPJ 45 (45 MPa)',
          description: "Ciment de référence pour mortier-colle et mortiers techniques.",
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
          title: 'CPJ 35 Cement (35 MPa)',
          description: 'Economical cement ideal for site-mixed masonry mortar.',
          href: '/cpj-35',
        },
        {
          title: 'CPJ 45 Cement (45 MPa)',
          description: 'Reference cement for tile adhesive and technical mortars.',
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
      name: isFr ? 'Prix Mortier Ciment Maroc — Tarifs 2026' : 'Cement Mortar Price Morocco — 2026 Rates',
      description: isFr
        ? "Prix du mortier de ciment au Maroc. Mortier-colle, mortier d'enduit, mortier de jointoiement, mortier de maçonnerie. Tarifs détaillés 2026."
        : 'Cement mortar prices in Morocco. Tile adhesive, render mortar, jointing mortar, masonry mortar. Detailed 2026 rates.',
      path: '/prix-mortier-ciment',
      locale: loc,
    }),
    breadcrumbSchema([{ name: isFr ? 'Prix Mortier' : 'Mortar Price', path: '/prix-mortier-ciment' }], loc),
    serviceSchema({
      name: isFr ? "Mortiers de ciment — Production et Fourniture" : 'Cement Mortars — Production & Supply',
      description: isFr
        ? "Production et livraison de mortiers de ciment au Maroc : mortier-colle, mortier d'enduit, mortier de jointoiement, mortier de maçonnerie. Tarifs 2026."
        : 'Production and delivery of cement mortars in Morocco: tile adhesive, render mortar, jointing mortar, masonry mortar. 2026 rates.',
      path: '/prix-mortier-ciment',
      locale: loc,
      serviceType: 'Cement mortar manufacturing and supply',
    }),
    productSchema({
      name: isFr ? 'Mortier de ciment DAM — Prix Maroc' : 'DAM Cement Mortar — Price Morocco',
      description: isFr
        ? "Mortier de ciment pour maçonnerie, enduit, jointoiement, mortier-colle. Tarifs dès 18 DH/sac 25kg."
        : 'Cement mortar for masonry, render, jointing, tile adhesive. Prices from 18 DH per 25kg bag.',
      sku: 'DAM-MORTIER',
      price: '1400',
      path: '/prix-mortier-ciment',
      locale: loc,
      image: '/images/products/cement-powder-closeup.jpg',
      ratingValue: '4.8',
      reviewCount: 41,
    }),
    faqSchema(faqItems),
    speakableSchema({
      path: '/prix-mortier-ciment',
      locale: loc,
      cssSelectors: ['h1', '.hero-price', '.pricing-table', '.faq-question'],
    }),
  ];

  return (
    <>
      <JsonLdScript schema={schemas} />
      <Breadcrumbs items={[{ name: isFr ? 'Prix Mortier' : 'Mortar Price', path: '/prix-mortier-ciment' }]} locale={locale} />

      {/* Hero */}
      <section className="bg-gradient-to-br from-[#1B3A5C] to-[#0f1f33] text-white py-20 md:py-28">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <div className="max-w-4xl">
            <span className="inline-block px-4 py-1.5 bg-[#E8B84B]/20 text-[#E8B84B] text-sm font-medium rounded-full mb-6">
              {isFr ? 'Tarifs mortiers — 2026' : 'Mortar Pricing — 2026'}
            </span>
            <h1 className="text-[clamp(2rem,5vw,3.5rem)] font-bold leading-[1.1] mb-6">
              {isFr ? 'Prix du mortier de ciment au Maroc' : 'Cement mortar price in Morocco'}
            </h1>
            <p className="text-lg md:text-xl text-white/80 leading-relaxed mb-6 max-w-3xl">
              {isFr
                ? "Mortier-colle, mortier d'enduit, mortier de jointoiement, mortier de maçonnerie. Tarifs détaillés 2026 par type et conditionnement. Devis gratuit sous 24h."
                : 'Tile adhesive, render mortar, jointing mortar, masonry mortar. Detailed 2026 rates by type and packaging. Free quote within 24h.'}
            </p>
            <div className="hero-price inline-block bg-[#C1272D]/20 border border-[#C1272D]/40 rounded-2xl px-8 py-5 mb-8">
              <span className="block text-sm text-white/70 mb-1">
                {isFr ? 'Mortier dès' : 'Mortar from'}
              </span>
              <span className="text-4xl md:text-5xl font-bold text-[#E8B84B]">18 DH/sac</span>
              <span className="block text-sm text-white/60 mt-1">
                {isFr ? '(sac 25kg — mortier d’enduit)' : '(25kg bag — render mortar)'}
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
                {isFr ? 'Voir le ciment CPJ 35' : 'View CPJ 35 cement'}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing table */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1B3A5C] mb-4 text-center">
            {isFr ? 'Tableau des prix mortier 2026' : '2026 mortar price table'}
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
                  <th className="text-left py-4 px-6 font-semibold">{isFr ? 'Type de mortier' : 'Mortar type'}</th>
                  <th className="text-left py-4 px-6 font-semibold">{isFr ? 'Conditionnement' : 'Packaging'}</th>
                  <th className="text-left py-4 px-6 font-semibold">{isFr ? 'Prix' : 'Price'}</th>
                  <th className="text-left py-4 px-6 font-semibold">{isFr ? 'Note' : 'Note'}</th>
                </tr>
              </thead>
              <tbody>
                {pricingTable.map((row, i) => (
                  <tr key={i} className="border-b border-[#E5E7EB] last:border-0 hover:bg-[#F7F8FA] transition-colors">
                    <td className="py-4 px-6 font-semibold text-[#1B3A5C]">{row.type}</td>
                    <td className="py-4 px-6 text-[#6B7280]">{row.packaging}</td>
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

      {/* Mortar types */}
      <section className="py-16 md:py-24 bg-[#F7F8FA]">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1B3A5C] mb-4 text-center">
            {isFr ? 'Types de mortier de ciment' : 'Cement mortar types'}
          </h2>
          <p className="text-center text-[#6B7280] mb-12 max-w-2xl mx-auto">
            {isFr
              ? "Chaque type de mortier a une formulation adaptée à un usage spécifique. Choisissez le bon mortier pour votre application."
              : 'Each mortar type has a formulation suited to a specific use. Choose the right mortar for your application.'}
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {mortarTypes.map((m, i) => (
              <div key={i} className="bg-white border border-[#E5E7EB] rounded-2xl p-6 hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 rounded-full bg-[#C1272D]/10 flex items-center justify-center mb-4">
                  <m.icon className="w-6 h-6 text-[#C1272D]" />
                </div>
                <h3 className="font-bold text-[#1B3A5C] mb-2">{m.title}</h3>
                <p className="text-sm text-[#6B7280] leading-relaxed">{m.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Uses */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1B3A5C] mb-4 text-center">
            {isFr ? 'Applications du mortier de ciment' : 'Cement mortar applications'}
          </h2>
          <p className="text-center text-[#6B7280] mb-12 max-w-2xl mx-auto">
            {isFr
              ? "Le mortier de ciment est utilisé dans tous les secteurs de la construction au Maroc."
              : 'Cement mortar is used in all construction sectors in Morocco.'}
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {uses.map((u, i) => (
              <div key={i} className="bg-[#F7F8FA] border border-[#E5E7EB] rounded-2xl p-6">
                <div className="w-12 h-12 rounded-full bg-[#1B3A5C]/10 flex items-center justify-center mb-4">
                  <u.icon className="w-6 h-6 text-[#1B3A5C]" />
                </div>
                <h3 className="font-bold text-[#1B3A5C] mb-2">{u.title}</h3>
                <p className="text-sm text-[#6B7280] leading-relaxed">{u.desc}</p>
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
              { icon: Package, title: isFr ? 'Sacs 25kg' : '25kg bags', desc: isFr ? 'Conditionnement standard pour mortiers-colle, enduits et joints. Palette 1,5T (60 sacs).' : 'Standard packaging for tile adhesives, renders and joints. 1.5T pallet (60 bags).' },
              { icon: Container, title: isFr ? 'Big Bag 1T' : '1T Big Bag', desc: isFr ? 'Mortier prêt à gâcher en formulation DAM. Idéal chantiers moyens. 1 550 DH/T.' : 'DAM ready-to-mix mortar. Ideal for medium sites. 1,550 DH/T.' },
              { icon: Truck, title: isFr ? 'Vrac' : 'Bulk', desc: isFr ? 'Mortier prêt à gâcher livré en camion-citerne (min. 30T). Économique pour gros chantiers.' : 'Ready-to-mix mortar delivered in tanker truck (min. 30T). Economical for large sites.' },
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
              {isFr ? 'Prix du mortier de ciment au Maroc : guide complet 2026' : 'Cement mortar price in Morocco: complete 2026 guide'}
            </h2>
            <p className="text-[#1A1A2E]/80 leading-relaxed mb-6">
              {isFr
                ? "Le prix du mortier de ciment au Maroc varie de 18 DH à 50 DH par sac de 25 kg selon le type de mortier (enduit, mortier-colle, jointoiement, réparation) et la formulation. Pour le mortier de maçonnerie gâché sur chantier à partir de ciment CPJ 35 et de sable, le coût revient à environ 640 DH/m³ (soit 25 DH/sac équivalent 25kg). Cette page présente tous les tarifs des mortiers DAM pour 2026 et explique comment choisir le bon mortier selon votre application."
                : "The price of cement mortar in Morocco ranges from 18 DH to 50 DH per 25kg bag depending on the mortar type (render, tile adhesive, jointing, repair) and the formulation. For site-mixed masonry mortar made from CPJ 35 cement and sand, the cost comes to about 640 DH/m³ (i.e. 25 DH per equivalent 25kg bag). This page presents all DAM mortar rates for 2026 and explains how to choose the right mortar for your application."}
            </p>

            <h3 className="text-2xl font-bold text-[#1B3A5C] mt-10 mb-4">
              {isFr ? "Prix du mortier-colle pour carrelage" : 'Tile adhesive mortar price'}
            </h3>
            <p className="text-[#1A1A2E]/80 leading-relaxed mb-6">
              {isFr
                ? "Le mortier-colle (C2/T2 selon EN 12004) sert à coller les carrelages, faïences et grès cérame sur murs et sols intérieurs comme extérieurs. Prix : 25 à 35 DH le sac de 25 kg selon la classe (C1, C2, C2T, C2TE) et la formulation (standard, souple, blanche, isolante thermique). Pour une pose de carrelage standard, comptez 3-5 kg de mortier-colle par m², soit environ 4-7 DH/m². Le mortier-colle blanc (pour carrelage translucide, marbre) est plus cher (35-45 DH/sac)."
                : "Tile adhesive (C2/T2 per EN 12004) is used to bond tiles, ceramics and porcelain stoneware on interior and exterior walls and floors. Price: 25 to 35 DH per 25kg bag depending on class (C1, C2, C2T, C2TE) and formulation (standard, flexible, white, thermal insulating). For standard tile laying, allow 3-5 kg of tile adhesive per m², i.e. about 4-7 DH/m². White tile adhesive (for translucent tiles, marble) is more expensive (35-45 DH/bag)."}
            </p>

            <h3 className="text-2xl font-bold text-[#1B3A5C] mt-10 mb-4">
              {isFr ? "Prix du mortier d'enduit de façade" : 'Facade render mortar price'}
            </h3>
            <p className="text-[#1A1A2E]/80 leading-relaxed mb-6">
              {isFr
                ? "Le mortier d'enduit (ou mortier de façade) sert à enduire les murs extérieurs pour l'étanchéité et la finition. Prix : 18 à 25 DH le sac de 25 kg. Pour un enduit traditionnel monocouche de 1,5 cm d'épaisseur, comptez environ 18-20 kg/m², soit 14-16 DH/m². L'enduit monocouche (plus cher, 25-30 DH/sac) s'applique en une seule couche et est souvent hydrofuge. L'enduit projeté (gâché sur chantier à partir de CPJ 35 + sable) revient moins cher mais demande plus de main d'œuvre."
                : "Render mortar (or facade mortar) is used to coat exterior walls for waterproofing and finishing. Price: 18 to 25 DH per 25kg bag. For a traditional 1.5cm thick single-layer render, expect about 18-20 kg/m², i.e. 14-16 DH/m². Single-layer render (more expensive, 25-30 DH/bag) is applied in a single layer and is often water-repellent. Sprayed render (mixed on site from CPJ 35 + sand) is cheaper but requires more labor."}
            </p>

            <h3 className="text-2xl font-bold text-[#1B3A5C] mt-10 mb-4">
              {isFr ? 'Prix du mortier de jointoiement' : 'Jointing mortar price'}
            </h3>
            <p className="text-[#1A1A2E]/80 leading-relaxed mb-6">
              {isFr
                ? "Le mortier de jointoiement sert à remplir les joints entre carreaux de carrelage. Prix : 22 à 30 DH le sac de 25 kg. Disponible en plusieurs couleurs (gris, blanc, beige, noir) pour s'accorder au carrelage. Pour des joints de 5 mm entre carreaux 20×20 cm, comptez environ 0,5 kg/m². Les joints de couleur (beige, noir) sont légèrement plus chers que le gris standard. Pour les joints soumis à l'humidité (salles de bain, piscines), un mortier de jointoiement hydrofuge est recommandé (35-45 DH/sac)."
                : "Jointing mortar is used to fill joints between tiles. Price: 22 to 30 DH per 25kg bag. Available in several colors (gray, white, beige, black) to match the tiles. For 5mm joints between 20×20 cm tiles, expect about 0.5 kg/m². Colored joints (beige, black) are slightly more expensive than standard gray. For joints exposed to moisture (bathrooms, swimming pools), water-repellent jointing mortar is recommended (35-45 DH/bag)."}
            </p>

            <h3 className="text-2xl font-bold text-[#1B3A5C] mt-10 mb-4">
              {isFr ? 'Prix du mortier de maçonnerie gâché sur chantier' : 'Site-mixed masonry mortar price'}
            </h3>
            <p className="text-[#1A1A2E]/80 leading-relaxed mb-6">
              {isFr
                ? "Le mortier de maçonnerie est généralement gâché sur chantier à partir de ciment CPJ 35 (1 400 DH/T) et de sable (≈150 DH/m³). Pour 1 m³ de mortier à 350 kg/m³, comptez 350 kg de ciment (7 sacs de 50 kg × 70 DH = 490 DH) + 1 m³ de sable (150 DH) = environ 640 DH/m³. C'est la solution la plus économique pour la maçonnerie courante (murs en agglos, chainages). Pour les chantiers moyens sans bétonnière, le mortier prêt à gâcher en big bag 1T (1 550 DH/T) est plus pratique. Voir aussi notre ciment CPJ 35 et CPJ 45 pour le gâchage sur chantier."
                : "Masonry mortar is generally mixed on site from CPJ 35 cement (1,400 DH/T) and sand (≈150 DH/m³). For 1 m³ of mortar at 350 kg/m³, expect 350 kg of cement (7 bags of 50kg × 70 DH = 490 DH) + 1 m³ of sand (150 DH) = about 640 DH/m³. This is the most economical solution for standard masonry (block walls, tie beams). For medium sites without a mixer, ready-to-mix mortar in 1T big bag (1,550 DH/T) is more practical. See also our CPJ 35 and CPJ 45 cement for site mixing."}
            </p>

            <h3 className="text-2xl font-bold text-[#1B3A5C] mt-10 mb-4">
              {isFr ? 'Comment choisir le bon mortier au meilleur prix ?' : 'How to choose the right mortar at the best price?'}
            </h3>
            <ul className="space-y-3 mb-6">
              {(isFr
                ? [
                    'Pour la maçonnerie courante : mortier gâché sur chantier (CPJ 35 + sable) — le plus économique (~640 DH/m³)',
                  'Pour le carrelage : mortier-colle C2 standard (25-30 DH/sac) — bon rapport qualité/prix',
                  "Pour les façades : mortier d'enduit monocouche (25-30 DH/sac) — gain de temps et étanchéité",
                  'Pour les joints : mortier de jointoiement gris standard (22-25 DH/sac) — le plus économique',
                  'Pour la réparation : mortier de réparation structurelle (35-50 DH/sac) — performance garantie',
                  'Commander en grosse quantité (≥5 palettes) pour bénéficier des tarifs dégressifs',
                  'Demander un devis gratuit pour un tarif personnalisé livré chantier',
                ]
                : [
                    'For standard masonry: site-mixed mortar (CPJ 35 + sand) — the most economical (~640 DH/m³)',
                  'For tiling: standard C2 tile adhesive (25-30 DH/bag) — good price/performance ratio',
                  'For facades: single-layer render mortar (25-30 DH/bag) — time saving and waterproofing',
                  'For joints: standard gray jointing mortar (22-25 DH/bag) — the most economical',
                  'For repair: structural repair mortar (35-50 DH/bag) — guaranteed performance',
                  'Order in large quantity (≥5 pallets) to benefit from volume discounts',
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
                {isFr ? '→ Ciment CPJ 35' : '→ CPJ 35 cement'}
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
                {isFr ? '→ Prix du ciment' : '→ Cement prices'}
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
            {isFr ? 'Questions fréquentes sur le prix du mortier' : 'Frequently asked questions about mortar price'}
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
      <RelatedArticles
        articleSlugs={['calculer-quantite-ciment', 'cpj45-vs-cpj55-guide', 'big-bag-vs-sacs']}
        locale={locale}
      />
      <CtaBanner
        locale={locale}
        title={isFr ? 'Demandez votre devis mortier gratuit' : 'Request your free mortar quote'}
        subtitle={
          isFr
            ? "Tarif personnalisé sous 24h. Mortier dès 18 DH/sac (25kg). Mortier-colle, enduit, jointoiement, maçonnerie. Livraison Sud Maroc + Mauritanie."
            : 'Personalized rate within 24h. Mortar from 18 DH/bag (25kg). Tile adhesive, render, jointing, masonry. Delivery Southern Morocco + Mauritania.'
        }
        buttonText={isFr ? 'Demander un devis gratuit' : 'Request a free quote'}
      />
    </>
  );
}
