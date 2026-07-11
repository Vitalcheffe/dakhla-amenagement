import Link from 'next/link';
import { buildMetadata, KEYWORDS } from '@/lib/seo';
import {
  webPageSchema,
  breadcrumbSchema,
  serviceSchema,
  faqSchema,
} from '@/lib/structured-data';
import { JsonLdScript } from '@/components/shared/JsonLd';
import { Breadcrumbs } from '@/components/shared/Breadcrumbs';
import { RelatedLinks, CtaBanner } from '@/components/shared/RelatedLinks';
import { RelatedArticles } from '@/components/shared/RelatedArticles';
import { REGIONAL_RELATED } from '@/lib/internal-links';
import { CheckCircle, ArrowRight, MapPin, Phone } from 'lucide-react';

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
      path: '/ciment-sud-maroc',
      title: 'Cement Southern Morocco — Dakhla, Laayoune, Tan-Tan Coverage | DAM',
      description:
        'CPJ 45 and CPJ 55 cement across Southern Morocco: Dakhla, Laayoune, Boujdour, Tan-Tan, Guelmim. Fast delivery. From 1,500 DH/T. Free Southern Morocco quote.',
      keywords: [
        ...KEYWORDS.regional,
        'ciment Sud Maroc',
        'ciment sud marocain',
        'ciment Dakhla Laâyoune',
        'matériaux construction Sud Maroc',
        'cement Southern Morocco',
      ],
    });
  }

  return buildMetadata({
    locale: 'fr',
    path: '/ciment-sud-maroc',
    title: 'Ciment Sud Maroc — Couverture Dakhla, Laâyoune, Tan-Tan | DAM',
    description:
      'Ciment CPJ 45 et CPJ 55 dans tout le Sud marocain : Dakhla, Laâyoune, Boujdour, Tan-Tan, Guelmim. Livraison rapide. Prix dès 1 500 DH/T. Devis gratuit Sud Maroc.',
    keywords: [
      ...KEYWORDS.regional,
      'ciment Sud Maroc',
      'ciment sud marocain',
      'ciment Dakhla Laâyoune',
      'matériaux construction Sud Maroc',
    ],
  });
}

const faqItemsFr = [
  {
    question: 'Quelles villes du Sud marocain livrez-vous en ciment ?',
    answer:
      "Dakhla Aménagement livre du ciment CPJ 45 et CPJ 55 dans tout le Sud marocain : Dakhla (24h), Boujdour (48h), Laâyoune (72h), Tarfaya (72h), Es-Semara (72h), Tan-Tan (72h), Guelmim (96h) et Aousserd (24-48h). Nous couvrons les régions Dakhla-Oued Ed-Dahab, Laâyoune-Sakia El Hamra et Guelmim-Oued Noun.",
  },
  {
    question: 'Quel est le prix du ciment dans le Sud marocain ?',
    answer:
      "Dans tout le Sud marocain, notre ciment CPJ 45 est disponible dès 1 500 DH/T et le CPJ 55 dès 1 600 DH/T, prix usine départ Dakhla. Le tarif final varie selon la quantité, le conditionnement (vrac, sacs, big bag) et la zone de livraison. Demandez un devis gratuit pour un prix précis incluant le transport vers votre ville du Sud marocain.",
  },
  {
    question: 'Pourquoi choisir un producteur du Sud marocain ?',
    answer:
      "Choisir un producteur implanté dans le Sud marocain (Dakhla) permet de réduire les délais et les coûts de transport par rapport aux cimenteries du Nord du Maroc. Le ciment arrive plus frais sur votre chantier, et vous bénéficiez d'un support technique qui connaît les contraintes locales (chaleur, vent, salinité, éloignement).",
  },
  {
    question: 'Livrez-vous les chantiers isolés du Sud marocain ?',
    answer:
      "Oui, nous livrons les chantiers isolés du Sud marocain (zones désertiques, projets éoliens, mines, infrastructures) dans un rayon allant jusqu'à 1 000 km depuis Dakhla. Pour les chantiers très éloignés, nous proposons un approvisionnement planifié par rotations avec stock tampon à Dakhla.",
  },
  {
    question: 'Quels types de ciment pour le Sud marocain ?',
    answer:
      "Pour le Sud marocain, nous recommandons le CPJ 45 pour le bâti courant (logements, équipements) et le CPJ 55 pour les ouvrages soumis à des contraintes : zone côtière (Dakhla, Boujdour, Tarfaya), génie civil, infrastructures, ouvrages d'art. Nos deux ciments sont conformes NM 10.1.004 et EN 197-1.",
  },
];

const faqItemsEn = [
  {
    question: 'Which cities in Southern Morocco do you deliver cement to?',
    answer:
      'Dakhla Aménagement delivers CPJ 45 and CPJ 55 cement across all of Southern Morocco: Dakhla (24h), Boujdour (48h), Laayoune (72h), Tarfaya (72h), Es-Semara (72h), Tan-Tan (72h), Guelmim (96h) and Aousserd (24-48h). We cover the Dakhla-Oued Ed-Dahab, Laayoune-Sakia El Hamra and Guelmim-Oued Noun regions.',
  },
  {
    question: 'What is the price of cement in Southern Morocco?',
    answer:
      'Across Southern Morocco, our CPJ 45 cement is available from 1,500 DH/T and CPJ 55 from 1,600 DH/T, factory price ex-Dakhla. The final price varies by quantity, packaging (bulk, bags, big bag) and delivery zone. Request a free quote for a precise price including transport to your Southern Morocco city.',
  },
  {
    question: 'Why choose a Southern Morocco producer?',
    answer:
      'Choosing a producer based in Southern Morocco (Dakhla) reduces lead times and transport costs compared to cement plants in northern Morocco. The cement arrives fresher on your site, and you benefit from technical support that knows the local constraints (heat, wind, salinity, remoteness).',
  },
  {
    question: 'Do you deliver to isolated Southern Morocco sites?',
    answer:
      'Yes, we deliver to isolated Southern Morocco sites (desert areas, wind farm projects, mines, infrastructure) within a radius of up to 1,000 km from Dakhla. For very remote sites, we offer planned supply by rotations with buffer stock in Dakhla.',
  },
  {
    question: 'Which cement types for Southern Morocco?',
    answer:
      'For Southern Morocco, we recommend CPJ 45 for standard buildings (housing, facilities) and CPJ 55 for structures under stress: coastal zone (Dakhla, Boujdour, Tarfaya), civil engineering, infrastructure, bridges. Both our cements comply with NM 10.1.004 and EN 197-1.',
  },
];

interface Zone {
  city: string;
  region: string;
  distance: string;
  delay: string;
  href: string;
}

const ZONES_SUD: Zone[] = [
  { city: 'Dakhla', region: 'Dakhla-Oued Ed-Dahab', distance: '0 km', delay: '24h', href: '/ciment-dakhla' },
  { city: 'Aousserd', region: 'Dakhla-Oued Ed-Dahab', distance: '80 km', delay: '24-48h', href: '/ciment-dakhla' },
  { city: 'Boujdour', region: 'Laâyoune-Sakia El Hamra', distance: '180 km', delay: '48h', href: '/ciment-boujdour' },
  { city: 'Laâyoune', region: 'Laâyoune-Sakia El Hamra', distance: '500 km', delay: '72h', href: '/ciment-laayoune' },
  { city: 'Es-Semara', region: 'Laâyoune-Sakia El Hamra', distance: '650 km', delay: '72h', href: '/ciment-laayoune' },
  { city: 'Tarfaya', region: 'Laâyoune-Sakia El Hamra', distance: '700 km', delay: '72h', href: '/ciment-sud-maroc' },
  { city: 'Tan-Tan', region: 'Guelmim-Oued Noun', distance: '800 km', delay: '72h', href: '/ciment-sud-maroc' },
  { city: 'Guelmim', region: 'Guelmim-Oued Noun', distance: '950 km', delay: '96h', href: '/ciment-sud-maroc' },
];

export default async function CimentSudMarocPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const loc: 'fr' | 'en' = locale === 'en' ? 'en' : 'fr';
  const isFr = loc === 'fr';
  const faqItems = isFr ? faqItemsFr : faqItemsEn;

  const schemas = [
    webPageSchema({
      name: isFr ? 'Ciment Sud Maroc — Couverture DAM' : 'Cement Southern Morocco — DAM Coverage',
      description: isFr
        ? 'Ciment CPJ 45 et CPJ 55 dans tout le Sud marocain : Dakhla, Laâyoune, Boujdour, Tan-Tan, Guelmim.'
        : 'CPJ 45 and CPJ 55 cement across Southern Morocco: Dakhla, Laayoune, Boujdour, Tan-Tan, Guelmim.',
      path: '/ciment-sud-maroc',
      locale: loc,
    }),
    breadcrumbSchema(
      [{ name: isFr ? 'Ciment Sud Maroc' : 'Cement Southern Morocco', path: '/ciment-sud-maroc' }],
      loc,
    ),
    serviceSchema({
      name: isFr
        ? 'Fourniture de ciment dans le Sud marocain'
        : 'Cement supply across Southern Morocco',
      description: isFr
        ? 'Livraison de ciment CPJ 45 et CPJ 55 dans tout le Sud marocain depuis Dakhla.'
        : 'CPJ 45 and CPJ 55 cement delivery across Southern Morocco from Dakhla.',
      path: '/ciment-sud-maroc',
      locale: loc,
      serviceType: 'Cement supply — Southern Morocco',
    }),
    faqSchema(faqItems),
  ];

  const products = isFr
    ? [
        { name: 'CPJ 45', resistance: '45 MPa', price: '1 500 DH/T', use: 'Béton armé, dallages, fondations, bâti courant du Sud marocain' },
        { name: 'CPJ 55', resistance: '55 MPa', price: '1 600 DH/T', use: 'Génie civil, infrastructure, ouvrages côtiers du Sud marocain' },
      ]
    : [
        { name: 'CPJ 45', resistance: '45 MPa', price: '1,500 DH/T', use: 'Reinforced concrete, slabs, foundations, standard buildings in Southern Morocco' },
        { name: 'CPJ 55', resistance: '55 MPa', price: '1,600 DH/T', use: 'Civil engineering, infrastructure, coastal works in Southern Morocco' },
      ];

  return (
    <>
      <JsonLdScript schema={schemas} />
      <Breadcrumbs items={[{ name: isFr ? 'Ciment Sud Maroc' : 'Cement Southern Morocco', path: '/ciment-sud-maroc' }]} locale={locale} />

      {/* Hero */}
      <section className="bg-gradient-to-br from-[#1B3A5C] to-[#0f1f33] text-white py-20 md:py-28">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <div className="max-w-4xl">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-[#E8B84B]/20 text-[#E8B84B] text-sm font-medium rounded-full mb-6">
              <MapPin className="w-4 h-4" />
              {isFr ? 'Couverture régionale — Sud marocain' : 'Regional coverage — Southern Morocco'}
            </span>
            <h1 className="text-[clamp(2rem,5vw,3.5rem)] font-bold leading-[1.1] mb-6">
              {isFr ? 'Ciment Sud Maroc — Couverture Dakhla, Laâyoune, Tan-Tan' : 'Cement Southern Morocco — Dakhla, Laayoune, Tan-Tan Coverage'}
            </h1>
            <p className="text-lg md:text-xl text-white/80 leading-relaxed mb-8 max-w-3xl">
              {isFr
                ? "Dakhla Aménagement couvre tout le Sud marocain en ciment CPJ 45 et CPJ 55 : Dakhla-Oued Ed-Dahab, Laâyoune-Sakia El Hamra, Guelmim-Oued Noun. Production locale à Dakhla, livraison 24h à 96h selon la ville, prix usine dès 1 500 DH/T. Le partenaire ciment du BTP du Sud."
                : "Dakhla Aménagement covers all of Southern Morocco with CPJ 45 and CPJ 55 cement: Dakhla-Oued Ed-Dahab, Laayoune-Sakia El Hamra, Guelmim-Oued Noun. Local production in Dakhla, 24h to 96h delivery depending on the city, factory prices from 1,500 DH/T. The cement partner for Southern Morocco construction."}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href={`/${locale}/devis`}
                className="inline-flex items-center gap-2 px-6 py-3 bg-[#C1272D] text-white font-semibold rounded-full hover:bg-[#C1272D]/90 transition-colors"
              >
                {isFr ? 'Demander un devis Sud Maroc' : 'Request a Southern Morocco quote'}
                <ArrowRight className="w-4 h-4" />
              </Link>
              <a
                href="tel:+212658265685"
                className="inline-flex items-center gap-2 px-6 py-3 border border-white/30 text-white font-semibold rounded-full hover:bg-white/10 transition-colors"
              >
                <Phone className="w-4 h-4" />
                +212 658-265685
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Couverture du Sud marocain */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1B3A5C] mb-6 text-center">
            {isFr ? 'Couverture du Sud marocain' : 'Coverage of Southern Morocco'}
          </h2>
          <div className="max-w-4xl mx-auto prose prose-lg">
            <p className="text-[#1A1A2E]/80 leading-relaxed mb-6">
              {isFr
                ? "Le Sud marocain regroupe trois régions majeures : Dakhla-Oued Ed-Dahab (au sud, capitale Dakhla), Laâyoune-Sakia El Hamra (au centre, capitale Laâyoune) et Guelmim-Oued Noun (au nord, capitale Guelmim). C'est un territoire vaste (plus de 350 000 km²) et stratégique, en plein développement économique."
                : "Southern Morocco comprises three major regions: Dakhla-Oued Ed-Dahab (south, capital Dakhla), Laayoune-Sakia El Hamra (center, capital Laayoune) and Guelmim-Oued Noun (north, capital Guelmim). It is a vast territory (over 350,000 km²) and strategic, in full economic development."}
            </p>
            <p className="text-[#1A1A2E]/80 leading-relaxed mb-6">
              {isFr
                ? "Notre centre de broyage de Dakhla est positionné au cœur de ce territoire. Depuis Dakhla, nous livrons toutes les villes du Sud marocain : Dakhla et Aousserd (région Dakhla-Oued Ed-Dahab), Boujdour, Laâyoune, Es-Semara et Tarfaya (région Laâyoune-Sakia El Hamra), Tan-Tan et Guelmim (région Guelmim-Oued Noun)."
                : "Our Dakhla grinding plant is positioned at the heart of this territory. From Dakhla, we deliver to all cities of Southern Morocco: Dakhla and Aousserd (Dakhla-Oued Ed-Dahab region), Boujdour, Laayoune, Es-Semara and Tarfaya (Laayoune-Sakia El Hamra region), Tan-Tan and Guelmim (Guelmim-Oued Noun region)."}
            </p>
            <p className="text-[#1A1A2E]/80 leading-relaxed">
              {isFr
                ? "Au-delà du Sud marocain, nous exportons également vers la Mauritanie voisine (Nouadhibou, Nouakchott). Notre couverture régionale complète fait de Dakhla Aménagement le partenaire ciment de référence pour les chantiers du grand Sud marocain."
                : "Beyond Southern Morocco, we also export to neighboring Mauritania (Nouadhibou, Nouakchott). Our complete regional coverage makes Dakhla Aménagement the reference cement partner for projects in the greater Southern Morocco."}
            </p>
          </div>
          <div className="mt-10 flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
            {ZONES_SUD.map((z) => (
              <Link
                key={z.city}
                href={`/${locale}${z.href}`}
                className="px-5 py-2.5 bg-[#1B3A5C]/5 text-[#1B3A5C] font-medium rounded-full flex items-center gap-2 hover:bg-[#1B3A5C]/10 transition-colors"
              >
                <MapPin className="w-4 h-4 text-[#E8B84B]" />
                {z.city}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Pourquoi le Sud Maroc */}
      <section className="py-16 md:py-24 bg-[#F7F8FA]">
        <div className="max-w-4xl mx-auto px-6 md:px-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1B3A5C] mb-6">
            {isFr ? 'Pourquoi le Sud marocain ?' : 'Why Southern Morocco?'}
          </h2>
          <div className="prose prose-lg max-w-none">
            <p className="text-[#1A1A2E]/80 leading-relaxed mb-6">
              {isFr
                ? "Le Sud marocain est une zone de développement prioritaire pour le Royaume du Maroc. Le Plan d'Accélération Industrielle, les programmes d'infrastructures portuaires (extension du port de Dakhla, port Atlantique), les projets éoliens (parc éolien de Tiskrad, Boujdour), le tourisme balnéaire (station balnéaire de Dakhla) et les programmes immobiliers font du BTP un secteur en forte croissance."
                : "Southern Morocco is a priority development zone for the Kingdom of Morocco. The Industrial Acceleration Plan, port infrastructure programs (Dakhla port extension, Atlantic port), wind projects (Tiskrad wind farm, Boujdour), seaside tourism (Dakhla seaside resort) and real estate programs make construction a fast-growing sector."}
            </p>
            <p className="text-[#1A1A2E]/80 leading-relaxed mb-6">
              {isFr
                ? "Cette dynamique de développement soutient une demande forte en matériaux de construction, et en particulier en ciment. Dakhla Aménagement, en tant que seul producteur cimentier du Sud marocain, joue un rôle clé dans l'approvisionnement de ces chantiers, avec une logistique adaptée à l'éloignement et aux contraintes climatiques de la région."
                : "This development dynamic supports strong demand for construction materials, and in particular cement. Dakhla Aménagement, as the only cement producer in Southern Morocco, plays a key role in supplying these construction sites, with logistics adapted to the remoteness and climatic constraints of the region."}
            </p>
            <ul className="space-y-3 mb-6">
              {(isFr
                ? [
                    'Investissements publics massifs dans les infrastructures de transport, ports et énergie',
                    'Développement du tourisme balnéaire sur la côte atlantique sud',
                    'Programmes immobiliers neufs à Dakhla, Laâyoune, Boujdour et Tan-Tan',
                    'Projets d\'énergies renouvelables (éolien, solaire) en cours dans le Sud',
                    'Position stratégique du Sud marocain comme porte d\'entrée vers l\'Afrique de l\'Ouest et la Mauritanie',
                  ]
                : [
                    'Massive public investment in transport infrastructure, ports and energy',
                    'Development of seaside tourism on the southern Atlantic coast',
                    'New real estate programs in Dakhla, Laayoune, Boujdour and Tan-Tan',
                    'Renewable energy projects (wind, solar) underway in the South',
                    'Strategic position of Southern Morocco as a gateway to West Africa and Mauritania',
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

      {/* Nos zones — Table */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1B3A5C] mb-4 text-center">
            {isFr ? 'Nos zones dans le Sud marocain' : 'Our zones in Southern Morocco'}
          </h2>
          <p className="text-center text-[#6B7280] mb-12 max-w-2xl mx-auto">
            {isFr
              ? "Distances et délais indicatifs depuis notre centre de broyage de Dakhla."
              : "Indicative distances and lead times from our Dakhla grinding plant."}
          </p>
          <div className="overflow-x-auto">
            <table className="w-full max-w-4xl mx-auto border-collapse">
              <thead>
                <tr className="border-b-2 border-[#1B3A5C]">
                  <th className="text-left py-4 px-4 text-[#1B3A5C] font-semibold">{isFr ? 'Ville' : 'City'}</th>
                  <th className="text-left py-4 px-4 text-[#1B3A5C] font-semibold">{isFr ? 'Région' : 'Region'}</th>
                  <th className="text-left py-4 px-4 text-[#1B3A5C] font-semibold">{isFr ? 'Distance' : 'Distance'}</th>
                  <th className="text-left py-4 px-4 text-[#1B3A5C] font-semibold">{isFr ? 'Délai' : 'Delay'}</th>
                </tr>
              </thead>
              <tbody>
                {ZONES_SUD.map((zone, i) => (
                  <tr key={i} className="border-b border-[#E5E7EB] hover:bg-[#F7F8FA] transition-colors">
                    <td className="py-4 px-4 font-semibold text-[#1B3A5C]">
                      <Link href={`/${locale}${zone.href}`} className="hover:text-[#C1272D] transition-colors">
                        {zone.city}
                      </Link>
                    </td>
                    <td className="py-4 px-4 text-[#6B7280]">{zone.region}</td>
                    <td className="py-4 px-4 text-[#6B7280]">{zone.distance}</td>
                    <td className="py-4 px-4 font-semibold text-[#E8B84B]">{zone.delay}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Produits */}
      <section className="py-16 md:py-24 bg-[#F7F8FA]">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1B3A5C] mb-4 text-center">
            {isFr ? 'Ciment livré dans le Sud marocain' : 'Cement delivered across Southern Morocco'}
          </h2>
          <p className="text-center text-[#6B7280] mb-12 max-w-2xl mx-auto">
            {isFr
              ? "Deux qualités de ciment Portland Composé (CPJ), conformes NM 10.1.004 et EN 197-1, disponibles dans tout le Sud marocain."
              : "Two qualities of Composite Portland Cement (CPJ), compliant with NM 10.1.004 and EN 197-1, available across Southern Morocco."}
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {products.map((c) => (
              <div key={c.name} className="bg-white border border-[#E5E7EB] rounded-2xl p-8">
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
                  <div className="flex justify-between text-sm gap-4">
                    <dt className="text-[#6B7280] shrink-0">{isFr ? 'Usage' : 'Use'}</dt>
                    <dd className="font-semibold text-[#1A1A2E] text-right">{c.use}</dd>
                  </div>
                </dl>
                <Link
                  href={`/${locale}/produits`}
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

      {/* Projets région */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6 md:px-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1B3A5C] mb-6">
            {isFr ? 'Projets dans la région du Sud marocain' : 'Projects in the Southern Morocco region'}
          </h2>
          <div className="prose prose-lg max-w-none">
            <p className="text-[#1A1A2E]/80 leading-relaxed mb-6">
              {isFr
                ? "Dakhla Aménagement a fourni du ciment pour de nombreux chantiers à travers le Sud marocain. Notre ancrage régional et notre logistique adaptée à l'éloignement nous permettent de servir aussi bien les grands projets d'infrastructure que les chantiers de bâtiment dans les villes du Sud."
                : "Dakhla Aménagement has supplied cement for many construction sites across Southern Morocco. Our regional roots and logistics adapted to remoteness allow us to serve both major infrastructure projects and building sites in the cities of the South."}
            </p>
            <ul className="space-y-3 mb-6">
              {(isFr
                ? [
                    'Ports et infrastructures maritimes : port de Dakhla, port de Boujdour, ouvrages de protection côtière',
                    'Énergie : parcs éoliens de Tiskrad (Laâyoune), Boujdour, Tan-Tan — massifs de fondation en CPJ 55',
                    'Immobilier : programmes d\'habitat social et moyen standing à Dakhla, Laâyoune et Boujdour',
                    'Équipements publics : écoles, centres de santé, équipements administratifs dans les trois régions du Sud',
                    'VRD et voirie : aménagements urbains à Dakhla, Laâyoune et Tan-Tan',
                    'Tourisme : complexes hôteliers et stations balnéaires de la baie de Dakhla et de la côte sud',
                  ]
                : [
                    'Ports and maritime infrastructure: Dakhla port, Boujdour port, coastal protection works',
                    'Energy: Tiskrad (Laayoune), Boujdour, Tan-Tan wind farms — CPJ 55 foundation blocks',
                    'Real estate: social and mid-range housing programs in Dakhla, Laayoune and Boujdour',
                    'Public facilities: schools, health centers, administrative facilities in the three southern regions',
                    'Utilities and roads: urban developments in Dakhla, Laayoune and Tan-Tan',
                    'Tourism: hotel complexes and seaside resorts in Dakhla bay and the southern coast',
                  ]
              ).map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-[#1A1A2E]/80">
                  <CheckCircle className="w-5 h-5 text-[#E8B84B] shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="text-[#1A1A2E]/80 leading-relaxed">
              {isFr
                ? "Notre expérience du terrain et notre connaissance des contraintes locales (climat, logistique, normes) font de Dakhla Aménagement un partenaire apprécié des entreprises BTP du Sud marocain."
                : "Our field experience and knowledge of local constraints (climate, logistics, standards) make Dakhla Aménagement a valued partner for construction companies in Southern Morocco."}
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 md:py-24 bg-[#F7F8FA]">
        <div className="max-w-3xl mx-auto px-6 md:px-12">
          <h2 className="text-3xl font-bold text-[#1B3A5C] mb-8 text-center">
            {isFr ? 'Questions fréquentes — Ciment Sud Maroc' : 'FAQ — Cement Southern Morocco'}
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

      <RelatedLinks
        title={isFr ? 'Nos autres zones régionales' : 'Our other regional zones'}
        links={REGIONAL_RELATED}
        locale={locale}
      />

      <RelatedArticles
        articleSlugs={['dakhla-pole-developpement', 'transport-ciment-logistique', 'projet-infrastructure-dakhla']}
        locale={locale}
      />
      <CtaBanner
        locale={locale}
        title={isFr ? 'Besoin de ciment dans le Sud marocain ?' : 'Need cement in Southern Morocco?'}
        subtitle={
          isFr
            ? 'Couverture complète du Sud marocain depuis Dakhla. CPJ 45 dès 1 500 DH/T, CPJ 55 dès 1 600 DH/T. Devis gratuit sous 24h, livraison 24h à 96h selon la ville.'
            : 'Complete coverage of Southern Morocco from Dakhla. CPJ 45 from 1,500 DH/T, CPJ 55 from 1,600 DH/T. Free quote within 24h, 24h to 96h delivery depending on the city.'
        }
        buttonText={isFr ? 'Demander un devis Sud Maroc' : 'Request a Southern Morocco quote'}
      />
    </>
  );
}
