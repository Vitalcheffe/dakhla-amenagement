import Link from 'next/link';
import { buildMetadata, KEYWORDS } from '@/lib/seo';
import {
  webPageSchema,
  breadcrumbSchema,
  faqSchema,
  serviceSchema,
} from '@/lib/structured-data';
import { JsonLdScript } from '@/components/shared/JsonLd';
import { Breadcrumbs } from '@/components/shared/Breadcrumbs';
import { RelatedLinks, CtaBanner } from '@/components/shared/RelatedLinks';
import { RelatedArticles } from '@/components/shared/RelatedArticles';
import { REGIONAL_RELATED } from '@/lib/internal-links';
import {
  CheckCircle,
  ArrowRight,
  Building2,
  Waves,
  Wind,
  MapPin,
  Sun,
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
      path: '/construction-dakhla',
      title: 'Construction in Dakhla — Cement Guide, Coastal Zone | Dakhla Aménagement',
      description:
        'Building in Dakhla: cement choice, coastal zone challenges (salinity, wind, humidity), regulations, suppliers. DAM CPJ 55 cement adapted to coastal climate. Free quote.',
      keywords: [
        ...KEYWORDS.regional,
        ...KEYWORDS.application,
        'construction Dakhla',
        'building in Dakhla',
        'coastal cement Morocco',
        'cement coastal zone',
        'Dakhla construction works',
      ],
    });
  }

  return buildMetadata({
    locale: 'fr',
    path: '/construction-dakhla',
    title: 'Construction à Dakhla — Guide Ciment, Zone Côtière | Dakhla Aménagement',
    description:
      "Construire à Dakhla : choix du ciment, défis zone côtière (salinité, vent, humidité), réglementation, fournisseurs. Ciment CPJ 55 DAM adapté au climat côtier. Devis gratuit.",
    keywords: [
      ...KEYWORDS.regional,
      ...KEYWORDS.application,
      'construction Dakhla',
      'construire à Dakhla',
      'ciment zone côtière',
      'ciment bord de mer',
      'travaux Dakhla',
    ],
  });
}

const faqItemsFr = [
  {
    question: 'Quel ciment choisir pour construire à Dakhla ?',
    answer:
      "Pour construire à Dakhla, le ciment CPJ 55 (55 MPa) est recommandé en raison de la proximité de la mer, de la salinité de l'air et des vents chargés de sable. Sa résistance supérieure et sa durabilité face aux chlorures marins en font le meilleur choix. Le CPJ 45 (45 MPa) reste utilisable pour les ouvrages secondaires et la maçonnerie.",
  },
  {
    question: 'Quels sont les défis de la construction en zone côtière à Dakhla ?',
    answer:
      "La construction à Dakhla fait face à quatre défis majeurs : la corrosion des armatures par les chlorures marins, le vent sable qui dégrade les parements, l'humidité élevée qui ralentit la prise du béton, et l'ensoleillement intense qui provoque un séchage trop rapide. Chacun impose des adaptations de mise en œuvre.",
  },
  {
    question: 'Faut-il un permis de construire pour bâtir à Dakhla ?',
    answer:
      "Oui. Toute construction à Dakhla doit respecter le plan d'aménagement local, le Plan Communal de Développement (PCD), et obtenir un permis de construire délivré par la commune. Les zones du littoral sont régies par la loi 81-12 sur le domaine public maritime et l'urbanisme, qui impose des reculs minimum par rapport à la mer (généralement 100 m).",
  },
  {
    question: 'Quels fournisseurs de ciment sont disponibles à Dakhla ?',
    answer:
      "Dakhla Aménagement (DAM) est le producteur local de ciment à Dakhla, avec une usine de broyage de clinker d'une capacité de 500 000 tonnes/an. Nous proposons CPJ 45 (1 500 DH/T) et CPJ 55 (1 600 DH/T) en vrac, sacs 50kg et big bag, avec livraison directe chantier dans tout le Sud marocain et en Mauritanie.",
  },
  {
    question: "Quelle enrobage minimal pour les armatures à Dakhla ?",
    answer:
      "En zone côtière agressive comme Dakhla, l'enrobage minimal des armatures doit être de 4 à 5 cm (vs 3 cm en milieu standard) pour protéger l'acier de la corrosion par les chlorures. Le RPS 2011 et les recommandations locales peuvent imposer des valeurs plus contraignantes selon la classe d'exposition.",
  },
];

const faqItemsEn = [
  {
    question: 'Which cement to choose for building in Dakhla?',
    answer:
      "For building in Dakhla, CPJ 55 cement (55 MPa) is recommended due to the proximity of the sea, air salinity and sand-laden winds. Its higher strength and durability against marine chlorides make it the best choice. CPJ 45 (45 MPa) remains usable for secondary works and masonry.",
  },
  {
    question: 'What are the challenges of coastal construction in Dakhla?',
    answer:
      "Construction in Dakhla faces four major challenges: rebar corrosion by marine chlorides, sand-laden wind that degrades facades, high humidity that slows concrete setting, and intense sunshine that causes too-fast drying. Each requires implementation adaptations.",
  },
  {
    question: 'Is a building permit required to build in Dakhla?',
    answer:
      "Yes. Any construction in Dakhla must comply with the local development plan, the Communal Development Plan (PCD), and obtain a building permit issued by the commune. Coastal areas are governed by Law 81-12 on the public maritime domain and urban planning, which imposes minimum setbacks from the sea (generally 100 m).",
  },
  {
    question: 'Which cement suppliers are available in Dakhla?',
    answer:
      "Dakhla Aménagement (DAM) is the local cement producer in Dakhla, with a clinker grinding plant of 500,000 tons/year capacity. We offer CPJ 45 (1,500 DH/T) and CPJ 55 (1,600 DH/T) in bulk, 50kg bags and big bag, with direct site delivery across Southern Morocco and Mauritania.",
  },
  {
    question: 'What minimum rebar cover in Dakhla?',
    answer:
      "In an aggressive coastal area like Dakhla, minimum rebar cover should be 4 to 5 cm (vs 3 cm in standard environments) to protect steel from chloride corrosion. RPS 2011 and local recommendations may impose stricter values depending on the exposure class.",
  },
];

export default async function ConstructionDakhlaPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const loc: 'fr' | 'en' | 'ar' = (locale === 'en' ? 'en' : locale === 'ar' ? 'ar' : 'fr') as 'fr' | 'en' | 'ar';
  const isFr = loc === 'fr';
  const faqItems = isFr ? faqItemsFr : faqItemsEn;

  const schemas = [
    webPageSchema({
      name: isFr ? 'Construction à Dakhla — Guide Ciment Zone Côtière' : 'Construction in Dakhla — Coastal Cement Guide',
      description: isFr
        ? "Construire à Dakhla : choix du ciment, défis zone côtière (salinité, vent, humidité), réglementation, fournisseurs locaux."
        : 'Building in Dakhla: cement choice, coastal challenges (salinity, wind, humidity), regulations, local suppliers.',
      path: '/construction-dakhla',
      locale: loc,
    }),
    breadcrumbSchema(
      [{ name: isFr ? 'Construction à Dakhla' : 'Construction in Dakhla', path: '/construction-dakhla' }],
      loc,
    ),
    serviceSchema({
      name: isFr
        ? 'Ciment CPJ 55 pour Construction à Dakhla'
        : 'CPJ 55 Cement for Construction in Dakhla',
      description: isFr
        ? "Ciment CPJ 55 adapté à la construction en zone côtière à Dakhla : résistance à la salinité, au vent sable et à l'humidité."
        : 'CPJ 55 cement adapted to coastal-zone construction in Dakhla: resistance to salinity, sand-laden wind and humidity.',
      path: '/construction-dakhla',
      locale: loc,
      serviceType: 'Coastal construction cement supply',
    }),
    faqSchema(faqItems),
  ];

  const challenges = isFr
    ? [
        {
          icon: Waves,
          title: 'Salinité marine',
          desc: "L'air de Dakhla est chargé de chlorures marins qui pénètrent le béton et provoquent la corrosion des armatures. Risque de faïençage, éclatement et perte de résistance.",
          solution: 'CPJ 55 + enrobage 4-5 cm',
        },
        {
          icon: Wind,
          title: 'Vent sable',
          desc: "Les vents atlantiques constants transportent du sable qui dégrade les parements, obstrue les coffrages et accélère l'usure des finitions.",
          solution: 'Béton brossé, enduits résistants',
        },
        {
          icon: Waves,
          title: 'Humidité élevée',
          desc: "L'humidité ambiante ralentit la prise du ciment et peut compromettre la résistance à 28 jours si le cure n'est pas adapté.",
          solution: 'Cure prolongée 14 jours',
        },
        {
          icon: Sun,
          title: 'Ensoleillement intense',
          desc: "Le rayonnement solaire fort provoque une évaporation rapide de l'eau de gâchage, entraînant fissures de retrait et faiblesse du béton.",
          solution: 'Bâches humides, plastifiant',
        },
      ]
    : [
        {
          icon: Waves,
          title: 'Marine salinity',
          desc: "Dakhla's air is loaded with marine chlorides that penetrate concrete and cause rebar corrosion. Risk of crazing, spalling and strength loss.",
          solution: 'CPJ 55 + 4-5 cm cover',
        },
        {
          icon: Wind,
          title: 'Sand-laden wind',
          desc: 'Constant Atlantic winds carry sand that degrades facades, clogs formwork and accelerates wear on finishes.',
          solution: 'Brushed concrete, resistant coatings',
        },
        {
          icon: Waves,
          title: 'High humidity',
          desc: 'Ambient humidity slows cement setting and can compromise 28-day strength if curing is not adapted.',
          solution: 'Extended 14-day curing',
        },
        {
          icon: Sun,
          title: 'Intense sunshine',
          desc: 'Strong solar radiation causes rapid evaporation of mixing water, leading to shrinkage cracks and weak concrete.',
          solution: 'Wet tarpaulins, plasticizer',
        },
      ];

  const stepsTable = isFr
    ? [
        {
          step: '1',
          name: 'Étude de sol (géotechnique)',
          desc: "Analyse du sol (sable, roc, salinité) pour dimensionner les fondations (semelles, radier, pieux).",
          duration: '2–4 semaines',
        },
        {
          step: '2',
          name: 'Permis de construire',
          desc: "Dépôt du dossier à la commune de Dakhla, respect du plan d'aménagement et des reculs littoraux.",
          duration: '2–3 mois',
        },
        {
          step: '3',
          name: 'Terrassement & fondations',
          desc: "Préparation du terrain, fouilles, béton de propreté, semelles en béton armé CPJ 55.",
          duration: '2–4 semaines',
        },
        {
          step: '4',
          name: 'Gros œuvre (élévation)',
          desc: "Poteaux, poutres, dalles, murs porteurs en béton armé. Cure adaptée au climat côtier.",
          duration: '3–6 mois',
        },
        {
          step: '5',
          name: 'Second œuvre & finitions',
          desc: "Étanchéité, enduits résistants au sel, menuiseries, revêtements adaptés au climat marin.",
          duration: '3–5 mois',
        },
        {
          step: '6',
          name: 'Réception des travaux',
          desc: "Vérification de conformité, levée des réserves, remise des clefs et DŒF.",
          duration: '2–4 semaines',
        },
      ]
    : [
        {
          step: '1',
          name: 'Soil study (geotechnical)',
          desc: 'Soil analysis (sand, rock, salinity) to size foundations (footings, raft, piles).',
          duration: '2–4 weeks',
        },
        {
          step: '2',
          name: 'Building permit',
          desc: 'File submitted to the Dakhla municipality, compliance with the development plan and coastal setbacks.',
          duration: '2–3 months',
        },
        {
          step: '3',
          name: 'Earthworks & foundations',
          desc: 'Site preparation, excavation, lean concrete, CPJ 55 reinforced-concrete footings.',
          duration: '2–4 weeks',
        },
        {
          step: '4',
          name: 'Structural works (elevation)',
          desc: 'Columns, beams, slabs, load-bearing walls in reinforced concrete. Coastal-adapted curing.',
          duration: '3–6 months',
        },
        {
          step: '5',
          name: 'Finishing works',
          desc: 'Waterproofing, salt-resistant coatings, joinery, materials adapted to marine climate.',
          duration: '3–5 months',
        },
        {
          step: '6',
          name: 'Works reception',
          desc: 'Compliance check, lifting of reservations, handover of keys and as-built file.',
          duration: '2–4 weeks',
        },
      ];

  const cementChoice = isFr
    ? [
        {
          type: 'CPJ 45',
          use: 'Maçonnerie, dallages, fondations en zone protégée',
          note: 'Acceptable si enrobage ≥ 4 cm',
          reco: false,
        },
        {
          type: 'CPJ 55',
          use: 'Béton armé structure, poteaux, poutres, dalles, ouvrages exposés',
          note: 'Recommandé pour Dakhla',
          reco: true,
        },
        {
          type: 'CPJ 55 + ajouts',
          use: "Ouvrages à la mer, digues, quais, fondations en zone inondable",
          note: 'Formulation spéciale pour marine',
          reco: true,
        },
      ]
    : [
        {
          type: 'CPJ 45',
          use: 'Masonry, slabs, foundations in sheltered areas',
          note: 'Acceptable if cover ≥ 4 cm',
          reco: false,
        },
        {
          type: 'CPJ 55',
          use: 'Structural reinforced concrete, columns, beams, slabs, exposed works',
          note: 'Recommended for Dakhla',
          reco: true,
        },
        {
          type: 'CPJ 55 + additives',
          use: 'Marine works, breakwaters, quays, foundations in flood-prone areas',
          note: 'Special marine formulation',
          reco: true,
        },
      ];

  return (
    <>
      <JsonLdScript schema={schemas} />
      <Breadcrumbs
        items={[
          { name: isFr ? 'Construction à Dakhla' : 'Construction in Dakhla', path: '/construction-dakhla' },
        ]}
        locale={locale}
      />

      {/* Hero */}
      <section className="bg-gradient-to-br from-[#1B3A5C] to-[#0f1f33] text-white py-20 md:py-28">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <div className="max-w-4xl">
            <span className="inline-block px-4 py-1.5 bg-[#E8B84B]/20 text-[#E8B84B] text-sm font-medium rounded-full mb-6">
              {isFr ? 'Guide Construction Dakhla 2026' : 'Dakhla Construction Guide 2025'}
            </span>
            <h1 className="text-[clamp(2rem,5vw,3.5rem)] font-bold leading-[1.1] mb-6">
              {isFr
                ? 'Construire à Dakhla — Ciment, Zone Côtière & Réglementation'
                : 'Building in Dakhla — Cement, Coastal Zone & Regulations'}
            </h1>
            <p className="text-lg md:text-xl text-white/80 leading-relaxed mb-8 max-w-3xl">
              {isFr
                ? "Guide complet pour réussir votre construction à Dakhla : choix du ciment CPJ 55 adapté au climat côtier, défis de la salinité marine, vent sable, humidité, réglementation d'urbanisme et étapes du projet. Ciment DAM produit localement à Dakhla."
                : 'Complete guide to succeed in your Dakhla construction: choice of CPJ 55 cement adapted to the coastal climate, challenges of marine salinity, sand-laden wind, humidity, urban planning regulations and project steps. DAM cement produced locally in Dakhla.'}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href={`/${locale}/devis`}
                className="inline-flex items-center gap-2 px-6 py-3 bg-[#C1272D] text-white font-semibold rounded-full hover:bg-[#C1272D]/90 transition-colors"
              >
                {isFr ? 'Devis construction Dakhla' : 'Dakhla construction quote'}
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href={`/${locale}/ciment-dakhla`}
                className="inline-flex items-center gap-2 px-6 py-3 border border-white/30 text-white font-semibold rounded-full hover:bg-white/10 transition-colors"
              >
                {isFr ? 'Ciment à Dakhla' : 'Cement in Dakhla'}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Boom de la construction */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6 md:px-12">
          <h2 className="text-3xl font-bold text-[#1B3A5C] mb-6">
            {isFr ? 'Le boom de la construction à Dakhla' : 'The Dakhla construction boom'}
          </h2>
          <p className="text-[#1A1A2E]/80 leading-relaxed mb-6">
            {isFr
              ? "Dakhla connaît depuis 2015 un essor immobilier et touristique sans précédent. La ville, située sur une presqu'île atlantique au sud du Maroc, attire investisseurs, promoteurs et résidents grâce à : son climat exceptionnel (vent constant, soleil toute l'année), le développement du tourisme de kitesurf et de surf, l'extension de l'aéroport, et les grands projets structurants (Port Atlantique, parcs éoliens, zones touristiques)."
              : "Dakhla has experienced unprecedented real-estate and tourism growth since 2015. The city, located on an Atlantic peninsula in southern Morocco, attracts investors, developers and residents thanks to: its exceptional climate (constant wind, year-round sunshine), the development of kitesurfing and surfing tourism, the airport extension, and major structural projects (Atlantic Port, wind farms, tourist zones)."}
          </p>
          <p className="text-[#1A1A2E]/80 leading-relaxed mb-6">
            {isFr
              ? "Cette dynamique se traduit par la multiplication des chantiers : résidences, hôtels, villas, infrastructures portuaires et aéroportuaires, éoliennes. Mais construire à Dakhla implique de prendre en compte un environnement côtier exigeant : la proximité immédiate de l'océan Atlantique soumet les ouvrages à des agressions spécifiques (chlorures marins, vent sable, humidité, ensoleillement) qui influencent le choix du ciment et les techniques de mise en œuvre."
              : "This dynamic translates into multiplying construction sites: residences, hotels, villas, port and airport infrastructure, wind turbines. But building in Dakhla requires taking into account a demanding coastal environment: the immediate proximity of the Atlantic Ocean subjects structures to specific aggressions (marine chlorides, sand-laden wind, humidity, sunshine) that influence the choice of cement and implementation techniques."}
          </p>
          <p className="text-[#1A1A2E]/80 leading-relaxed">
            {isFr
              ? "Dakhla Aménagement (DAM), producteur local de ciment CPJ 45 et CPJ 55, accompagne les acteurs du BTP dakhlois avec un ciment de qualité supérieure, formulé et testé pour résister aux conditions locales. Notre centre de broyage à Dakhla garantit un approvisionnement court et fiable, sans dépendance aux longs transports depuis le Nord du Maroc."
              : "Dakhla Aménagement (DAM), local producer of CPJ 45 and CPJ 55 cement, supports Dakhla BTP players with a superior-quality cement, formulated and tested to withstand local conditions. Our grinding plant in Dakhla guarantees short and reliable supply, without dependence on long transports from northern Morocco."}
          </p>
        </div>
      </section>

      {/* Défis zone côtière */}
      <section className="py-16 md:py-24 bg-[#F7F8FA]">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <h2 className="text-3xl font-bold text-[#1B3A5C] mb-4 text-center">
            {isFr ? 'Défis de la construction en zone côtière à Dakhla' : 'Challenges of coastal construction in Dakhla'}
          </h2>
          <p className="text-center text-[#6B7280] mb-12 max-w-2xl mx-auto">
            {isFr
              ? "Quatre agressions environnementales majeures influencent la durabilité des ouvrages à Dakhla. Anticipez-les dès la conception."
              : 'Four major environmental aggressions influence the durability of structures in Dakhla. Anticipate them at the design stage.'}
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {challenges.map((c, i) => (
              <div key={i} className="bg-white border border-[#E5E7EB] rounded-xl p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-[#1B3A5C]/5 flex items-center justify-center shrink-0">
                    <c.icon className="w-6 h-6 text-[#1B3A5C]" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-[#1B3A5C] mb-2">{c.title}</h3>
                    <p className="text-sm text-[#6B7280] leading-relaxed mb-3">{c.desc}</p>
                    <span className="inline-block px-3 py-1 bg-[#E8B84B]/15 text-[#E8B84B] text-xs font-semibold rounded-full">
                      {isFr ? 'Solution :' : 'Solution:'} {c.solution}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quel ciment choisir */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <h2 className="text-3xl font-bold text-[#1B3A5C] mb-4 text-center">
            {isFr ? 'Quel ciment choisir pour construire à Dakhla ?' : 'Which cement to build in Dakhla?'}
          </h2>
          <p className="text-center text-[#6B7280] mb-12 max-w-2xl mx-auto">
            {isFr
              ? "Comparatif des ciments DAM pour la construction à Dakhla selon le type d'ouvrage."
              : 'DAM cement comparison for construction in Dakhla by structure type.'}
          </p>
          <div className="overflow-x-auto">
            <table className="w-full max-w-4xl mx-auto border-collapse">
              <thead>
                <tr className="border-b-2 border-[#1B3A5C]">
                  <th className="text-left py-4 px-4 text-[#1B3A5C] font-semibold">{isFr ? 'Ciment' : 'Cement'}</th>
                  <th className="text-left py-4 px-4 text-[#1B3A5C] font-semibold">{isFr ? 'Usage à Dakhla' : 'Use in Dakhla'}</th>
                  <th className="text-left py-4 px-4 text-[#1B3A5C] font-semibold">{isFr ? 'Note' : 'Note'}</th>
                </tr>
              </thead>
              <tbody>
                {cementChoice.map((row, i) => (
                  <tr key={i} className="border-b border-[#E5E7EB] hover:bg-[#F7F8FA] transition-colors">
                    <td className="py-4 px-4 font-semibold text-[#1B3A5C]">
                      {row.type}
                      {row.reco && (
                        <span className="ml-2 inline-block px-2 py-0.5 bg-[#E8B84B]/15 text-[#E8B84B] text-xs font-semibold rounded-full">
                          {isFr ? 'Recommandé' : 'Recommended'}
                        </span>
                      )}
                    </td>
                    <td className="py-4 px-4 text-[#1A1A2E]">{row.use}</td>
                    <td className="py-4 px-4 text-sm text-[#6B7280]">{row.note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="text-center mt-12">
            <Link
              href={`/${locale}/produits`}
              className="inline-flex items-center gap-2 text-[#C1272D] font-medium hover:gap-3 transition-all"
            >
              {isFr ? '→ Voir tous nos ciments' : '→ View all our cements'}
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Réglementation */}
      <section className="py-16 md:py-24 bg-[#F7F8FA]">
        <div className="max-w-4xl mx-auto px-6 md:px-12">
          <h2 className="text-3xl font-bold text-[#1B3A5C] mb-6">
            {isFr ? "Réglementation et urbanisme à Dakhla" : 'Regulations and urban planning in Dakhla'}
          </h2>
          <p className="text-[#1A1A2E]/80 leading-relaxed mb-6">
            {isFr
              ? "Toute construction à Dakhla est encadrée par un ensemble de textes réglementaires marocains qui visent à protéger le littoral et à organiser le développement urbain :"
              : 'Any construction in Dakhla is governed by a set of Moroccan regulatory texts aimed at protecting the coastline and organizing urban development:'}
          </p>
          <ul className="space-y-3 mb-6">
            {(isFr
              ? [
                  'Loi 81-12 : relative au domaine public maritime et à la gestion du littoral (recul minimum 100 m du rivage)',
                  'Loi 12-90 : relative à l\'urbanisme (permis de construire obligatoire)',
                  'Plan d\'Aménagement Local (PAL) de Dakhla : prescriptions de hauteur, densité, reculs',
                  'RPS 2011 : règles parasismiques marocaines (zone de sismicité modérée à Dakhla)',
                  'RTCM 2015 : réglementation thermique de construction au Maroc (isolation, performance)',
                  'NM 10.1.004 : conformité du ciment CPJ utilisé',
                  'NM 21.2.005 : conformité du béton mis en œuvre',
                ]
              : [
                  'Law 81-12: on the public maritime domain and coastline management (minimum 100 m setback from shore)',
                  'Law 12-90: on urban planning (building permit mandatory)',
                  'Local Development Plan (PAL) of Dakhla: height, density, setback prescriptions',
                  'RPS 2011: Moroccan seismic rules (moderate seismicity zone in Dakhla)',
                  'RTCM 2015: Moroccan thermal construction regulations (insulation, performance)',
                  'NM 10.1.004: compliance of CPJ cement used',
                  'NM 21.2.005: compliance of concrete implemented',
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
              ? "Avant tout démarrage de chantier, il est impératif de déposer un dossier de permis de construire auprès de la commune de Dakhla et d'obtenir l'autorisation. Les constructions illégales sur le domaine public maritime sont passibles de démolition et de sanctions pénales."
              : 'Before any site start, it is mandatory to file a building permit application with the Dakhla municipality and obtain authorization. Illegal construction on the public maritime domain is subject to demolition and criminal penalties.'}
          </p>
        </div>
      </section>

      {/* Étapes projet */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <h2 className="text-3xl font-bold text-[#1B3A5C] mb-4 text-center">
            {isFr ? "Les étapes d'un projet de construction à Dakhla" : 'Steps of a construction project in Dakhla'}
          </h2>
          <p className="text-center text-[#6B7280] mb-12 max-w-2xl mx-auto">
            {isFr
              ? "De l'étude de sol à la réception des travaux, voici les 6 étapes clés d'un projet de construction à Dakhla avec durées indicatives."
              : 'From soil study to works reception, here are the 6 key steps of a construction project in Dakhla with indicative durations.'}
          </p>
          <div className="overflow-x-auto">
            <table className="w-full max-w-5xl mx-auto border-collapse">
              <thead>
                <tr className="border-b-2 border-[#1B3A5C]">
                  <th className="text-left py-4 px-4 text-[#1B3A5C] font-semibold w-12">#</th>
                  <th className="text-left py-4 px-4 text-[#1B3A5C] font-semibold">{isFr ? 'Étape' : 'Step'}</th>
                  <th className="text-left py-4 px-4 text-[#1B3A5C] font-semibold">{isFr ? 'Description' : 'Description'}</th>
                  <th className="text-left py-4 px-4 text-[#1B3A5C] font-semibold">{isFr ? 'Durée' : 'Duration'}</th>
                </tr>
              </thead>
              <tbody>
                {stepsTable.map((row, i) => (
                  <tr key={i} className="border-b border-[#E5E7EB] hover:bg-[#F7F8FA] transition-colors">
                    <td className="py-4 px-4 font-bold text-[#E8B84B] text-lg">{row.step}</td>
                    <td className="py-4 px-4 font-semibold text-[#1B3A5C]">{row.name}</td>
                    <td className="py-4 px-4 text-sm text-[#6B7280]">{row.desc}</td>
                    <td className="py-4 px-4 font-medium text-[#C1272D]">{row.duration}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Pourquoi DAM */}
      <section className="py-16 md:py-24 bg-[#F7F8FA]">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <h2 className="text-3xl font-bold text-[#1B3A5C] mb-4 text-center">
            {isFr ? 'Pourquoi choisir DAM pour votre construction à Dakhla ?' : 'Why choose DAM for your Dakhla construction?'}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto mt-12">
            {(isFr
              ? [
                  {
                    icon: MapPin,
                    title: 'Production locale',
                    desc: 'Usine de broyage à Dakhla, à 30 min maximum de votre chantier. Délais courts.',
                  },
                  {
                    icon: Building2,
                    title: 'Ciment adapté',
                    desc: "CPJ 55 formulé et testé pour le climat côtier de Dakhla. Résistance aux chlorures.",
                  },
                  {
                    icon: CheckCircle,
                    title: 'Certifié NM 10.1.004',
                    desc: 'Ciment testé en laboratoire interne, certifié conforme. Traçabilité par lot.',
                  },
                  {
                    icon: Waves,
                    title: 'Logistique complète',
                    desc: 'Livraison vrac, sacs 50kg, big bag. Camions citernes et palette pour tout chantier.',
                  },
                ]
              : [
                  {
                    icon: MapPin,
                    title: 'Local production',
                    desc: 'Grinding plant in Dakhla, 30 min maximum from your site. Short lead times.',
                  },
                  {
                    icon: Building2,
                    title: 'Adapted cement',
                    desc: 'CPJ 55 formulated and tested for the coastal climate of Dakhla. Chloride resistance.',
                  },
                  {
                    icon: CheckCircle,
                    title: 'NM 10.1.004 certified',
                    desc: 'Cement tested in internal laboratory, certified compliant. Batch traceability.',
                  },
                  {
                    icon: Waves,
                    title: 'Full logistics',
                    desc: 'Bulk, 50kg bags, big bag delivery. Tanker trucks and pallets for any site.',
                  },
                ]
            ).map((f, i) => (
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

      {/* FAQ */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-3xl mx-auto px-6 md:px-12">
          <h2 className="text-3xl font-bold text-[#1B3A5C] mb-8 text-center">
            {isFr ? 'FAQ — Construction à Dakhla' : 'FAQ — Construction in Dakhla'}
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

      {/* Related Links */}
      <RelatedLinks
        title={isFr ? 'Ressources liées' : 'Related resources'}
        links={REGIONAL_RELATED}
        locale={locale}
      />

      {/* CTA */}
      <RelatedArticles
        articleSlugs={['construction-zone-cotiere', 'dakhla-pole-developpement', 'projet-infrastructure-dakhla']}
        locale={locale}
      />
      <CtaBanner
        locale={locale}
        title={isFr ? 'Préparez votre construction à Dakhla ?' : 'Planning your construction in Dakhla?'}
        subtitle={
          isFr
            ? "Ciment CPJ 55 produit localement à Dakhla, adapté au climat côtier. Devis gratuit sous 24h. Livraison directe chantier."
            : 'CPJ 55 cement produced locally in Dakhla, adapted to coastal climate. Free quote within 24h. Direct site delivery.'
        }
        buttonText={isFr ? 'Demander un devis' : 'Request a quote'}
      />
    </>
  );
}
