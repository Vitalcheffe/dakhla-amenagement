import Link from 'next/link';
import { buildMetadata, KEYWORDS } from '@/lib/seo';
import {
  webPageSchema,
  breadcrumbSchema,
  serviceSchema,
  faqSchema,
  speakableSchema,
} from '@/lib/structured-data';
import { JsonLdScript } from '@/components/shared/JsonLd';
import { Breadcrumbs } from '@/components/shared/Breadcrumbs';
import { CtaBanner } from '@/components/shared/RelatedLinks';
import { RelatedArticles } from '@/components/shared/RelatedArticles';
import {
  CheckCircle,
  ArrowRight,
  Factory,
  Beaker,
  Truck,
  Building2,
  Layers,
  ShieldCheck,
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
      path: '/ciment-portland-maroc',
      title: 'Portland Cement Morocco — Types, Prices, Standards | SDAD',
      description:
        'Portland cement in Morocco: CPJ 35, CPJ 45, CPJ 55. Composition, NM 10.1.004 / EN 197-1 standards, price from 70 DH/bag. Dakhla grinding plant. Free quote.',
      keywords: [
        'Portland cement Morocco',
        'ciment Portland Maroc',
        'CEM I',
        'CEM II',
        'CPJ 35',
        'CPJ 45',
        'CPJ 55',
        'Portland cement composition',
        ...KEYWORDS.products,
        ...KEYWORDS.pricing,
      ],
    });
  }

  return buildMetadata({
    locale: 'fr',
    path: '/ciment-portland-maroc',
    title: 'Ciment Portland Maroc — Types, Prix, Normes | SDAD',
    description:
      "Ciment Portland au Maroc : CPJ 35, CPJ 45, CPJ 55. Composition, normes NM 10.1.004, prix dès 70 DH/sac. Centre de broyage Dakhla. Devis gratuit.",
    keywords: [
      'ciment Portland Maroc',
      'ciment Portland composé',
      'CEM I',
      'CEM II',
      'CPJ 35',
      'CPJ 45',
      'CPJ 55',
      'prix ciment Portland',
      'composition ciment Portland',
      ...KEYWORDS.products,
      ...KEYWORDS.pricing,
    ],
  });
}

export default async function CimentPortlandMarocPage({
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
          question: 'Quelle est la différence entre CEM I et CEM II (CPJ) ?',
          answer:
            "Le CEM I est un ciment Portland pur contenant au moins 95 % de clinker, offrant une résistance maximale et un durcissement rapide, mais plus coûteux et plus énergivore. Le CEM II — désigné CPJ (Ciment Portland Composé) au Maroc — contient au moins 65 % de clinker complété par des additions (calcaire, laitier, pouzzolane). Il est plus économique, plus écologique et largement utilisé pour la construction courante (CPJ 45, CPJ 55).",
        },
        {
          question: 'Quels sont les types de ciment Portland disponibles au Maroc ?',
          answer:
            "Au Maroc, la norme NM 10.1.004 distingue principalement trois qualités de ciment Portland Composé : le CPJ 35 (35 MPa) pour la maçonnerie et les travaux non structuraux, le CPJ 45 (45 MPa) pour le béton armé courant, les dallages et fondations, et le CPJ 55 (55 MPa) pour les grands ouvrages de génie civil et les zones côtières. Dakhla Aménagement produit le CPJ 45 et le CPJ 55 dans son centre de broyage de Dakhla.",
        },
        {
          question: 'Quel est le prix du ciment Portland au Maroc ?',
          answer:
            "Le prix du ciment Portland au Maroc démarre à 70 DH le sac de 50 kg (CPJ 45) et 75 DH le sac (CPJ 55). En vrac, comptez dès 1 500 DH/T pour le CPJ 45 et 1 600 DH/T pour le CPJ 55 chez Dakhla Aménagement. Le big bag 1T est disponible dès 1 580 DH/T. Les tarifs sont dégressifs selon le volume. Demandez un devis gratuit pour un prix livré chantier.",
        },
        {
          question: 'Le ciment Portland de Dakhla Aménagement est-il conforme aux normes ?',
          answer:
            "Oui, tous les ciments Portland Composé (CPJ 45 et CPJ 55) produits par Dakhla Aménagement sont conformes à la norme marocaine NM 10.1.004 et à la norme européenne EN 197-1. Chaque lot est testé en laboratoire (résistance à la compression, finesse de mouture, temps de prise, stabilité) et les certificats de conformité sont fournis sur demande.",
        },
        {
          question: 'Pourquoi choisir un ciment Portland pour ma construction ?',
          answer:
            "Le ciment Portland est le liant hydraulique de référence pour le béton armé et la maçonnerie. Sa résistance mécanique élevée, sa durabilité, sa disponibilité et son coût maîtrisé en font le choix optimal pour la grande majorité des projets de construction au Maroc : villas, immeubles, ouvrages de génie civil, dallages, fondations. Pour les usages spécifiques (haute température, étanchéité, décoration), des ciments spéciaux existent.",
        },
      ]
    : [
        {
          question: 'What is the difference between CEM I and CEM II (CPJ)?',
          answer:
            'CEM I is a pure Portland cement containing at least 95% clinker, providing maximum strength and fast hardening, but more expensive and energy-intensive. CEM II — designated CPJ (Composite Portland Cement) in Morocco — contains at least 65% clinker supplemented by additions (limestone, slag, pozzolan). It is more economical, greener and widely used for standard construction (CPJ 45, CPJ 55).',
        },
        {
          question: 'What types of Portland cement are available in Morocco?',
          answer:
            'In Morocco, the NM 10.1.004 standard distinguishes three main qualities of Composite Portland cement: CPJ 35 (35 MPa) for masonry and non-structural work, CPJ 45 (45 MPa) for standard reinforced concrete, slabs and foundations, and CPJ 55 (55 MPa) for major civil engineering works and coastal areas. Dakhla Aménagement produces CPJ 45 and CPJ 55 at its Dakhla grinding plant.',
        },
        {
          question: 'What is the price of Portland cement in Morocco?',
          answer:
            'The price of Portland cement in Morocco starts at 70 DH per 50 kg bag (CPJ 45) and 75 DH per bag (CPJ 55). In bulk, expect from 1,500 DH/T for CPJ 45 and 1,600 DH/T for CPJ 55 at Dakhla Aménagement. The 1T big bag is available from 1,580 DH/T. Prices are volume-degressive. Request a free quote for a delivered-to-site price.',
        },
        {
          question: 'Is Dakhla Aménagement Portland cement compliant with standards?',
          answer:
            'Yes, all Composite Portland cements (CPJ 45 and CPJ 55) produced by Dakhla Aménagement comply with the Moroccan standard NM 10.1.004 and the European standard EN 197-1. Each batch is laboratory-tested (compressive strength, fineness, setting time, stability) and conformity certificates are provided on request.',
        },
        {
          question: 'Why choose Portland cement for my construction?',
          answer:
            'Portland cement is the reference hydraulic binder for reinforced concrete and masonry. Its high mechanical strength, durability, availability and controlled cost make it the optimal choice for the vast majority of construction projects in Morocco: villas, buildings, civil engineering works, slabs, foundations. For specific uses (high temperature, waterproofing, decoration), special cements exist.',
        },
      ];

  const types = isFr
    ? [
        {
          name: 'CPJ 35',
          strength: '35 MPa',
          clinker: '≥ 60 %',
          desc: 'Maçonnerie courante, enduits, mortiers non structuraux, travaux de finition.',
          href: '/cpj-45',
        },
        {
          name: 'CPJ 45',
          strength: '45 MPa',
          clinker: '≥ 65 %',
          desc: 'Béton armé courant, dallages, fondations, murs porteurs. Le plus polyvalent.',
          href: '/cpj-45',
        },
        {
          name: 'CPJ 55',
          strength: '55 MPa',
          clinker: '≥ 70 %',
          desc: 'Génie civil, ouvrages d\'art, zones côtières, béton haute performance.',
          href: '/cpj-55',
        },
      ]
    : [
        {
          name: 'CPJ 35',
          strength: '35 MPa',
          clinker: '≥ 60%',
          desc: 'Standard masonry, renders, non-structural mortars, finishing works.',
          href: '/cpj-45',
        },
        {
          name: 'CPJ 45',
          strength: '45 MPa',
          clinker: '≥ 65%',
          desc: 'Standard reinforced concrete, slabs, foundations, load-bearing walls. The most versatile.',
          href: '/cpj-45',
        },
        {
          name: 'CPJ 55',
          strength: '55 MPa',
          clinker: '≥ 70%',
          desc: 'Civil engineering, bridges, coastal areas, high-performance concrete.',
          href: '/cpj-55',
        },
      ];

  const composition = isFr
    ? [
        { prop: 'Clinker Portland', value: '65 à 95 %' },
        { prop: 'Sulfate de calcium (gypse)', value: '0 à 5 % (régulateur de prise)' },
        { prop: 'Additions calcaires', value: '0 à 35 % (filler)' },
        { prop: 'Additions pouzzolaniques / laitier', value: '0 à 35 %' },
        { prop: 'Constituants secondaires', value: '0 à 5 %' },
        { prop: 'Chaleur d\'hydratation', value: 'Modérée (CEM II) à élevée (CEM I)' },
        { prop: 'Norme de référence', value: 'NM 10.1.004 / EN 197-1' },
      ]
    : [
        { prop: 'Portland clinker', value: '65 to 95%' },
        { prop: 'Calcium sulfate (gypsum)', value: '0 to 5% (setting regulator)' },
        { prop: 'Limestone additions', value: '0 to 35% (filler)' },
        { prop: 'Pozzolanic / slag additions', value: '0 to 35%' },
        { prop: 'Minor constituents', value: '0 to 5%' },
        { prop: 'Heat of hydration', value: 'Moderate (CEM II) to high (CEM I)' },
        { prop: 'Reference standard', value: 'NM 10.1.004 / EN 197-1' },
      ];

  const applications = isFr
    ? [
        {
          icon: Building2,
          title: 'Béton armé',
          desc: 'Poutres, poteaux, dalles, voiles — structures résidentielles et tertiaires.',
        },
        {
          icon: Layers,
          title: 'Dallages et chapes',
          desc: 'Dallages industriels, parkings, chapes de finition, sols bétonnés.',
        },
        {
          icon: Factory,
          title: 'Génie civil',
          desc: 'Ouvrages d\'art, réservoirs, ouvrages hydrauliques, infrastructures.',
        },
        {
          icon: ShieldCheck,
          title: 'Maçonnerie porteuse',
          desc: 'Murs en agglos, chainages, linteaux, mortier bâtard économique.',
        },
      ]
    : [
        {
          icon: Building2,
          title: 'Reinforced concrete',
          desc: 'Beams, columns, slabs, walls — residential and commercial structures.',
        },
        {
          icon: Layers,
          title: 'Slabs and screeds',
          desc: 'Industrial slabs, parking lots, finishing screeds, concrete floors.',
        },
        {
          icon: Factory,
          title: 'Civil engineering',
          desc: 'Bridges, reservoirs, hydraulic works, infrastructure.',
        },
        {
          icon: ShieldCheck,
          title: 'Load-bearing masonry',
          desc: 'Block walls, tie beams, lintels, economical masonry mortar.',
        },
      ];

  const features = isFr
    ? [
        { icon: Factory, title: 'Production locale', desc: 'Centre de broyage de clinker à Dakhla, capacité 500K tonnes/an' },
        { icon: Beaker, title: 'Qualité certifiée', desc: 'Conforme NM 10.1.004 et EN 197-1 — tests laboratoire systématiques' },
        { icon: Truck, title: 'Livraison rapide', desc: 'Vrac, sacs 50kg, big bag — Sud Maroc + Mauritanie' },
        { icon: ShieldCheck, title: 'Traçabilité', desc: 'Certificats de conformité fournis sur demande pour chaque lot' },
      ]
    : [
        { icon: Factory, title: 'Local production', desc: 'Clinker grinding plant in Dakhla, 500K tons/year capacity' },
        { icon: Beaker, title: 'Certified quality', desc: 'NM 10.1.004 and EN 197-1 compliant — systematic lab tests' },
        { icon: Truck, title: 'Fast delivery', desc: 'Bulk, 50kg bags, big bag — Southern Morocco + Mauritania' },
        { icon: ShieldCheck, title: 'Traceability', desc: 'Conformity certificates available on request for each batch' },
      ];

  const schemas = [
    webPageSchema({
      name: isFr ? 'Ciment Portland Maroc — Types, Prix, Normes' : 'Portland Cement Morocco — Types, Prices, Standards',
      description: isFr
        ? "Ciment Portland au Maroc : CPJ 35, CPJ 45, CPJ 55. Composition, normes NM 10.1.004 / EN 197-1. Prix dès 70 DH/sac. Centre de broyage Dakhla."
        : 'Portland cement in Morocco: CPJ 35, CPJ 45, CPJ 55. Composition, NM 10.1.004 / EN 197-1 standards. Price from 70 DH/bag. Dakhla grinding plant.',
      path: '/ciment-portland-maroc',
      locale: loc,
    }),
    breadcrumbSchema(
      [{ name: isFr ? 'Ciment Portland Maroc' : 'Portland Cement Morocco', path: '/ciment-portland-maroc' }],
      loc,
    ),
    serviceSchema({
      name: isFr ? 'Ciment Portland Maroc — Production et Fourniture' : 'Portland Cement Morocco — Production & Supply',
      description: isFr
        ? "Production, conditionnement et livraison de ciment Portland (CPJ 45, CPJ 55) au Maroc. Vrac, sacs 50kg, big bag."
        : 'Production, packaging and delivery of Portland cement (CPJ 45, CPJ 55) in Morocco. Bulk, 50kg bags, big bag.',
      path: '/ciment-portland-maroc',
      locale: loc,
      serviceType: 'Portland cement manufacturing and supply',
    }),
    faqSchema(faqItems),
    speakableSchema({
      path: '/ciment-portland-maroc',
      locale: loc,
      cssSelectors: ['h1', '.hero-title', '.product-price', '.faq-question'],
    }),
  ];

  return (
    <>
      <JsonLdScript schema={schemas} />
      <Breadcrumbs
        items={[{ name: isFr ? 'Ciment Portland Maroc' : 'Portland Cement Morocco', path: '/ciment-portland-maroc' }]}
        locale={locale}
      />

      {/* Hero */}
      <section className="bg-gradient-to-br from-[#1B3A5C] to-[#0f1f33] text-white py-20 md:py-28">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <div className="max-w-4xl">
            <span className="inline-block px-4 py-1.5 bg-[#E8B84B]/20 text-[#E8B84B] text-sm font-medium rounded-full mb-6">
              {isFr ? 'Ciment Portland — Guide complet' : 'Portland Cement — Complete guide'}
            </span>
            <h1 className="text-[clamp(2rem,5vw,3.5rem)] font-bold leading-[1.1] mb-6">
              {isFr
                ? 'Ciment Portland Maroc — Types, Prix, Normes'
                : 'Portland Cement Morocco — Types, Prices, Standards'}
            </h1>
            <p className="text-lg md:text-xl text-white/80 leading-relaxed mb-8 max-w-3xl">
              {isFr
                ? "Le ciment Portland est le liant hydraulique universel du BTP. Au Maroc, il se décline en CPJ 35, CPJ 45 et CPJ 55 (norme NM 10.1.004). Composition, types, prix dès 70 DH/sac, usages : Dakhla Aménagement (SDAD) produit un Portland de qualité supérieure dans son centre de broyage de Dakhla."
                : 'Portland cement is the universal hydraulic binder of the construction industry. In Morocco, it comes as CPJ 35, CPJ 45 and CPJ 55 (NM 10.1.004 standard). Composition, types, prices from 70 DH/bag, uses: Dakhla Aménagement (SDAD) produces a high-quality Portland at its Dakhla grinding plant.'}
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
                href={`/${locale}/prix-ciment`}
                className="inline-flex items-center gap-2 px-6 py-3 border border-white/30 text-white font-semibold rounded-full hover:bg-white/10 transition-colors"
              >
                {isFr ? 'Voir les prix du ciment' : 'View cement prices'}
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

      {/* Long-form content — what is Portland cement */}
      <section className="py-16 md:py-24 bg-[#F7F8FA]">
        <div className="max-w-4xl mx-auto px-6 md:px-12">
          <div className="prose prose-lg max-w-none">
            <h2 className="text-3xl font-bold text-[#1B3A5C] mb-6">
              {isFr ? 'Qu\'est-ce que le ciment Portland ?' : 'What is Portland cement?'}
            </h2>
            <p className="text-[#1A1A2E]/80 leading-relaxed mb-6">
              {isFr
                ? "Le ciment Portland est un liant hydraulique obtenu par broyage fin de clinker Portland (mélange de calcaire et d'argile calciné à 1 450 °C) avec un faible pourcentage de gypse qui régule la prise. Inventé en 1824 par l'ingénieur britannique Joseph Aspdin — qui le baptisa « Portland » en référence à la pierre de Portland dont la couleur rappelait celle du béton durci — il est aujourd'hui le ciment le plus utilisé au monde et représente plus de 90 % de la production mondiale de ciment. Au Maroc, la norme NM 10.1.004 (alignée sur la norme européenne EN 197-1) encadre sa composition et ses performances."
                : 'Portland cement is a hydraulic binder obtained by finely grinding Portland clinker (a mixture of limestone and clay fired at 1,450 °C) with a small percentage of gypsum that regulates the setting. Invented in 1824 by British engineer Joseph Aspdin — who named it "Portland" after the Portland stone whose color resembled that of hardened concrete — it is now the most widely used cement in the world and accounts for over 90% of global cement production. In Morocco, the NM 10.1.004 standard (aligned with the European EN 197-1 standard) regulates its composition and performance.'}
            </p>
            <p className="text-[#1A1A2E]/80 leading-relaxed mb-6">
              {isFr
                ? "Au contact de l'eau, le ciment Portland subit une réaction d'hydratation exothermique : les silicates de calcium (C3S et C2S) forment des hydrates de silicate de calcium (C-S-H) qui confèrent au béton sa résistance mécanique, tandis que l'aluminate tricalcique (C3A) réagit rapidement au gypse. Le résultat est un matériau pierreux, durable, résistant à la compression et capable de durcir aussi bien sous l'eau qu'à l'air libre. Cette polyvalence explique son utilisation universelle dans la construction moderne."
                : 'On contact with water, Portland cement undergoes an exothermic hydration reaction: calcium silicates (C3S and C2S) form calcium silicate hydrates (C-S-H) that give concrete its mechanical strength, while tricalcium aluminate (C3A) reacts quickly with gypsum. The result is a stony, durable, compressive-resistant material capable of hardening both underwater and in the open air. This versatility explains its universal use in modern construction.'}
            </p>

            <h3 className="text-2xl font-bold text-[#1B3A5C] mt-10 mb-4">
              {isFr ? 'Composition du ciment Portland' : 'Composition of Portland cement'}
            </h3>
            <p className="text-[#1A1A2E]/80 leading-relaxed mb-6">
              {isFr
                ? "La composition du ciment Portland varie selon la classe (CEM I, CEM II, CEM III…). Au Maroc, les ciments Portland Composés (CPJ) appartiennent à la famille CEM II : ils combinent un clinker Portland majoritaire (≥ 65 %) avec des additions minérales qui améliorent la durabilité, réduisent l'empreinte carbone et abaissent le coût. Le tableau ci-dessous détaille la composition typique d'un ciment Portland au sens de la norme NM 10.1.004."
                : 'The composition of Portland cement varies by class (CEM I, CEM II, CEM III...). In Morocco, Composite Portland cements (CPJ) belong to the CEM II family: they combine a majority Portland clinker (≥ 65%) with mineral additions that improve durability, reduce carbon footprint and lower cost. The table below details the typical composition of a Portland cement under the NM 10.1.004 standard.'}
            </p>
            <div className="overflow-x-auto my-6">
              <table className="w-full border-collapse bg-white rounded-xl overflow-hidden shadow-sm">
                <thead>
                  <tr className="bg-[#1B3A5C] text-white">
                    <th className="text-left py-3.5 px-6 font-semibold">
                      {isFr ? 'Constituant' : 'Constituent'}
                    </th>
                    <th className="text-left py-3.5 px-6 font-semibold">
                      {isFr ? 'Proportion' : 'Proportion'}
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {composition.map((row, i) => (
                    <tr key={i} className="border-b border-[#E5E7EB] last:border-0 hover:bg-[#F7F8FA] transition-colors">
                      <td className="py-3 px-6 text-[#6B7280] font-medium">{row.prop}</td>
                      <td className="py-3 px-6 text-[#1A1A2E] font-semibold">{row.value}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Types comparison */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1B3A5C] mb-4 text-center">
            {isFr ? 'Les types de ciment Portland au Maroc' : 'Types of Portland cement in Morocco'}
          </h2>
          <p className="text-center text-[#6B7280] mb-12 max-w-2xl mx-auto">
            {isFr
              ? "CPJ 35, CPJ 45 et CPJ 55 : trois classes de résistance pour trois familles d'usage. Choisissez le ciment adapté à votre projet."
              : 'CPJ 35, CPJ 45 and CPJ 55: three strength classes for three families of use. Choose the cement suited to your project.'}
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {types.map((t, i) => (
              <Link
                key={i}
                href={`/${locale}${t.href}`}
                className="group block bg-[#F7F8FA] border border-[#E5E7EB] rounded-2xl p-8 hover:border-[#E8B84B] hover:shadow-lg transition-all duration-300"
              >
                <div className="flex items-baseline justify-between mb-4">
                  <h3 className="text-2xl font-bold text-[#1B3A5C]">{t.name}</h3>
                  <span className="text-[#C1272D] font-bold">{t.strength}</span>
                </div>
                <p className="text-sm text-[#6B7280] mb-2">
                  <span className="font-semibold text-[#1B3A5C]">{isFr ? 'Clinker' : 'Clinker'}:</span> {t.clinker}
                </p>
                <p className="text-sm text-[#1A1A2E]/80 leading-relaxed mb-4">{t.desc}</p>
                <span className="inline-flex items-center gap-1 text-sm font-medium text-[#C1272D] group-hover:gap-2 transition-all">
                  {isFr ? 'En savoir plus' : 'Learn more'}
                  <ArrowRight className="w-4 h-4" />
                </span>
              </Link>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              href={`/${locale}/cpj-45`}
              className="inline-flex items-center gap-2 text-[#C1272D] font-medium hover:gap-3 transition-all"
            >
              {isFr ? '→ Comparer CPJ 45 et CPJ 55' : '→ Compare CPJ 45 and CPJ 55'}
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Applications */}
      <section className="py-16 md:py-24 bg-[#F7F8FA]">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1B3A5C] mb-4 text-center">
            {isFr ? 'Applications du ciment Portland' : 'Applications of Portland cement'}
          </h2>
          <p className="text-center text-[#6B7280] mb-12 max-w-2xl mx-auto">
            {isFr
              ? "Béton armé, dallages, fondations, génie civil : le ciment Portland couvre 90 % des usages du BTP au Maroc."
              : 'Reinforced concrete, slabs, foundations, civil engineering: Portland cement covers 90% of construction uses in Morocco.'}
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {applications.map((app, i) => (
              <div key={i} className="bg-white border border-[#E5E7EB] rounded-2xl p-6 hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 rounded-full bg-[#C1272D]/10 flex items-center justify-center mb-4">
                  <app.icon className="w-6 h-6 text-[#C1272D]" />
                </div>
                <h3 className="font-bold text-[#1B3A5C] mb-2">{app.title}</h3>
                <p className="text-sm text-[#6B7280] leading-relaxed">{app.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing long-form */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6 md:px-12">
          <div className="prose prose-lg max-w-none">
            <h2 className="text-3xl font-bold text-[#1B3A5C] mb-6">
              {isFr ? 'Prix du ciment Portland au Maroc' : 'Portland cement price in Morocco'}
            </h2>
            <p className="text-[#1A1A2E]/80 leading-relaxed mb-6">
              {isFr
                ? "Le prix du ciment Portland au Maroc varie selon la classe (CPJ 35, CPJ 45, CPJ 55), le conditionnement (vrac, sacs 50kg, big bag 1T) et le volume commandé. Chez Dakhla Aménagement, le sac de 50 kg démarre à 70 DH (CPJ 45) et 75 DH (CPJ 55). En vrac (camion-citerne, minimum 30T), comptez 1 500 DH/T pour le CPJ 45 et 1 600 DH/T pour le CPJ 55. Le big bag 1T est disponible dès 1 580 DH/T. Ces tarifs départ usine Dakhla sont dégressifs selon le volume ; pour un prix livré chantier, demandez un devis gratuit — réponse sous 24h."
                : 'The price of Portland cement in Morocco varies by class (CPJ 35, CPJ 45, CPJ 55), packaging (bulk, 50kg bags, 1T big bag) and ordered volume. At Dakhla Aménagement, the 50 kg bag starts at 70 DH (CPJ 45) and 75 DH (CPJ 55). In bulk (tanker truck, minimum 30T), expect 1,500 DH/T for CPJ 45 and 1,600 DH/T for CPJ 55. The 1T big bag is available from 1,580 DH/T. These ex-works Dakhla prices are volume-degressive; for a delivered-to-site price, request a free quote — response within 24h.'}
            </p>
            <p className="text-[#1A1A2E]/80 leading-relaxed mb-6">
              {isFr
                ? "Au-delà du prix au kilo, le choix du bon type de ciment Portland influence directement le coût global du projet : un CPJ 45 bien dosé (350 kg/m³) couvre 80 % des besoins résidentiels et tertiaires, sans surcoût inutile lié à un CPJ 55 réservé aux ouvrages très sollicités. Notre équipe technique vous conseille sur le dosage optimal et le conditionnement le plus économique selon votre chantier."
                : 'Beyond the per-kilo price, choosing the right type of Portland cement directly influences the overall project cost: a well-dosed CPJ 45 (350 kg/m³) covers 80% of residential and commercial needs, without unnecessary overcost linked to a CPJ 55 reserved for highly stressed structures. Our technical team advises you on the optimal dosage and the most economical packaging for your site.'}
            </p>
            <div className="bg-[#F7F8FA] border border-[#E5E7EB] rounded-xl p-6 my-6">
              <Link
                href={`/${locale}/prix-ciment`}
                className="inline-flex items-center gap-2 text-[#C1272D] font-medium hover:gap-3 transition-all"
              >
                {isFr ? '→ Voir le guide complet des prix du ciment' : '→ View the complete cement price guide'}
              </Link>
            </div>

            <h3 className="text-2xl font-bold text-[#1B3A5C] mt-10 mb-4">
              {isFr ? 'Pourquoi choisir Dakhla Aménagement (SDAD) ?' : 'Why choose Dakhla Aménagement (SDAD)?'}
            </h3>
            <ul className="space-y-3 mb-6">
              {(isFr
                ? [
                    'Production locale à Dakhla — réduction des délais et coûts de transport pour le Sud marocain',
                    'Contrôle qualité systématique en laboratoire avant expédition (résistance, finesse, prise, stabilité)',
                    'Certificats de conformité NM 10.1.004 et EN 197-1 fournis sur demande',
                    'Trois conditionnements disponibles : vrac (≥30T), sacs 50kg (palette 1T), big bag 1T',
                    'Tarifs dégressifs selon le volume — idéal pour les entreprises BTP et les gros chantiers',
                    'Livraison dans tout le Sud marocain (Dakhla, Laâyoune, Boujdour, Tan-Tan) et en Mauritanie',
                  ]
                : [
                    'Local production in Dakhla — reduced delivery times and transport costs for Southern Morocco',
                    'Systematic lab quality control before shipment (strength, fineness, setting, stability)',
                    'NM 10.1.004 and EN 197-1 conformity certificates available on request',
                    'Three packaging options: bulk (≥30T), 50kg bags (1T pallet), 1T big bag',
                    'Volume discounts — ideal for construction companies and large sites',
                    'Delivery across Southern Morocco (Dakhla, Laayoune, Boujdour, Tan-Tan) and Mauritania',
                  ]
              ).map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-[#1A1A2E]/80">
                  <CheckCircle className="w-5 h-5 text-[#E8B84B] shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 md:py-24 bg-[#F7F8FA]">
        <div className="max-w-3xl mx-auto px-6 md:px-12">
          <h2 className="text-3xl font-bold text-[#1B3A5C] mb-8 text-center">
            {isFr ? 'Questions fréquentes sur le ciment Portland' : 'Frequently asked questions about Portland cement'}
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

      {/* Internal links */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <h2 className="text-2xl md:text-3xl font-bold text-[#1B3A5C] mb-8 text-center">
            {isFr ? 'Nos ciments Portland' : 'Our Portland cements'}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            <Link
              href={`/${locale}/cpj-45`}
              className="group block bg-[#F7F8FA] border border-[#E5E7EB] rounded-xl p-6 hover:border-[#E8B84B] hover:shadow-lg transition-all"
            >
              <h3 className="font-bold text-[#1B3A5C] mb-2 group-hover:text-[#C1272D] transition-colors">CPJ 45</h3>
              <p className="text-sm text-[#6B7280] mb-3">
                {isFr ? 'Béton armé courant, dallages, fondations. Dès 1 500 DH/T.' : 'Standard reinforced concrete. From 1,500 DH/T.'}
              </p>
              <span className="inline-flex items-center gap-1 text-sm font-medium text-[#C1272D] group-hover:gap-2 transition-all">
                {isFr ? 'Découvrir' : 'Discover'} <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </Link>
            <Link
              href={`/${locale}/cpj-55`}
              className="group block bg-[#F7F8FA] border border-[#E5E7EB] rounded-xl p-6 hover:border-[#E8B84B] hover:shadow-lg transition-all"
            >
              <h3 className="font-bold text-[#1B3A5C] mb-2 group-hover:text-[#C1272D] transition-colors">CPJ 55</h3>
              <p className="text-sm text-[#6B7280] mb-3">
                {isFr ? 'Génie civil, infrastructure, zone côtière. Dès 1 600 DH/T.' : 'Civil engineering, coastal. From 1,600 DH/T.'}
              </p>
              <span className="inline-flex items-center gap-1 text-sm font-medium text-[#C1272D] group-hover:gap-2 transition-all">
                {isFr ? 'Découvrir' : 'Discover'} <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </Link>
            <Link
              href={`/${locale}/prix-ciment`}
              className="group block bg-[#F7F8FA] border border-[#E5E7EB] rounded-xl p-6 hover:border-[#E8B84B] hover:shadow-lg transition-all"
            >
              <h3 className="font-bold text-[#1B3A5C] mb-2 group-hover:text-[#C1272D] transition-colors">
                {isFr ? 'Prix du ciment' : 'Cement prices'}
              </h3>
              <p className="text-sm text-[#6B7280] mb-3">
                {isFr ? 'Guide complet des tarifs 2026 — vrac, sacs, big bag.' : 'Complete 2026 price guide — bulk, bags, big bag.'}
              </p>
              <span className="inline-flex items-center gap-1 text-sm font-medium text-[#C1272D] group-hover:gap-2 transition-all">
                {isFr ? 'Consulter' : 'View'} <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </Link>
            <Link
              href={`/${locale}/devis`}
              className="group block bg-[#F7F8FA] border border-[#E5E7EB] rounded-xl p-6 hover:border-[#E8B84B] hover:shadow-lg transition-all"
            >
              <h3 className="font-bold text-[#1B3A5C] mb-2 group-hover:text-[#C1272D] transition-colors">
                {isFr ? 'Devis gratuit' : 'Free quote'}
              </h3>
              <p className="text-sm text-[#6B7280] mb-3">
                {isFr ? 'Réponse sous 24h — tarif livré chantier.' : 'Response within 24h — delivered-to-site price.'}
              </p>
              <span className="inline-flex items-center gap-1 text-sm font-medium text-[#C1272D] group-hover:gap-2 transition-all">
                {isFr ? 'Demander' : 'Request'} <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </Link>
          </div>
        </div>
      </section>

      <RelatedArticles
        articleSlugs={['normes-ciment-maroc', 'choisir-ciment-projet', 'role-gypse-ciment']}
        locale={locale}
      />
      <CtaBanner
        locale={locale}
        title={isFr ? 'Besoin de ciment Portland au Maroc ?' : 'Need Portland cement in Morocco?'}
        subtitle={
          isFr
            ? 'Devis gratuit sous 24h. CPJ 45 dès 1 500 DH/T, CPJ 55 dès 1 600 DH/T. Livraison vrac, sacs et big bag dans tout le Sud marocain et la Mauritanie.'
            : 'Free quote within 24h. CPJ 45 from 1,500 DH/T, CPJ 55 from 1,600 DH/T. Bulk, bags and big bag delivery across Southern Morocco and Mauritania.'
        }
        buttonText={isFr ? 'Demander un devis gratuit' : 'Request a free quote'}
      />
    </>
  );
}
