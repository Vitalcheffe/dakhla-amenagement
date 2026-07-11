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
import { APPLICATION_RELATED } from '@/lib/internal-links';
import { CheckCircle, ArrowRight, Building2, Droplets, Anchor, Route, Truck, Waves } from 'lucide-react';

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
      path: '/genie-civil-ciment',
      title: 'Civil Engineering & Cement — Major Structures Morocco | Dakhla Aménagement',
      description:
        'CPJ 55 cement for civil engineering in Morocco: bridges, dams, ports, tunnels. Ultra high strength 55 MPa. NM 10.1.004 compliant. Southern Morocco infrastructure projects.',
      keywords: [
        ...KEYWORDS.application,
        ...KEYWORDS.products,
        'civil engineering Morocco',
        'genie civil Maroc',
        'cement civil engineering',
        'infrastructure cement Morocco',
        'CPJ 55 structures',
        'cement bridge dam',
      ],
    });
  }

  return buildMetadata({
    locale: 'fr',
    path: '/genie-civil-ciment',
    title: 'Génie Civil & Ciment — Grands Ouvrages Maroc | Dakhla Aménagement',
    description:
      "Ciment CPJ 55 pour génie civil au Maroc : ponts, barrages, ports, tunnels. Ultra haute résistance 55 MPa. Conforme NM 10.1.004. Projets infrastructure Sud Maroc.",
    keywords: [
      ...KEYWORDS.application,
      ...KEYWORDS.products,
      'génie civil Maroc',
      'ciment génie civil',
      'ciment infrastructure',
      'ciment CPJ 55 ouvrages',
      'ciment pont barrage',
    ],
  });
}

const faqItemsFr = [
  {
    question: 'Quel ciment pour les ouvrages de génie civil au Maroc ?',
    answer:
      "Pour le génie civil au Maroc, le ciment CPJ 55 (55 MPa) est privilégié en raison de sa résistance supérieure, de sa durabilité et de son comportement face aux agressions environnementales (chlorures, sulfates, gel/dégel). Le CPJ 45 (45 MPa) reste utilisable pour les ouvrages secondaires. Les ciments DAM sont conformes à la norme NM 10.1.004.",
  },
  {
    question: 'Pourquoi utiliser du CPJ 55 pour un barrage ou un pont ?',
    answer:
      "Le CPJ 55 apporte une résistance à la compression de 55 MPa à 28 jours, soit 22 % de plus que le CPJ 45. Pour un barrage, il résiste à la pression hydraulique permanente et limite la fissuration. Pour un pont, il permet de réduire les sections de béton (donc le poids mort) tout en garantissant la durabilité sur 75 à 100 ans.",
  },
  {
    question: "Quels sont les grands projets d'infrastructure au Maroc ?",
    answer:
      "Le Maroc investit massivement dans les infrastructures : autoroutes (plus de 1 800 km), ligne à grande vitesse LGV Kenitra-Marrakech, port Atlantique Dakhla, ports en eau profonde, parcs éoliens et solaires (Noor, projet XLinks), barrages (Mdez, Tit Mellil), terminaux GNL. Le Sud marocain et la Mauritanie bénéficient aussi de programmes d'aménagement côtier.",
  },
  {
    question: "Le ciment DAM est-il adapté aux ouvrages en bord de mer ?",
    answer:
      "Oui. Le ciment CPJ 55 DAM est formulé pour résister aux environnements agressifs : chlorures marins, sulfates, vent salin. Sa composition chimique maîtrisée limite la corrosion des armatures et le gonflement du béton. Idéal pour ports, digues, quais et ouvrages côtiers du Sud marocain.",
  },
  {
    question: "Quels volumes pouvez-vous fournir pour un projet de génie civil ?",
    answer:
      "Dakhla Aménagement dispose d'une capacité de production de 500 000 tonnes/an. Pour les projets de génie civil nécessitant de gros volumes (autoroute, barrage, port), nous proposons des livraisons en vrac planifiées, des silos temporaires sur chantier et un accompagnement logistique complet. Contactez notre service BTP pour un devis projet.",
  },
];

const faqItemsEn = [
  {
    question: 'Which cement for civil-engineering works in Morocco?',
    answer:
      'For civil engineering in Morocco, CPJ 55 cement (55 MPa) is preferred due to its higher strength, durability and behavior against environmental aggressions (chlorides, sulfates, freeze-thaw). CPJ 45 (45 MPa) remains usable for secondary works. DAM cements comply with the NM 10.1.004 standard.',
  },
  {
    question: 'Why use CPJ 55 for a dam or a bridge?',
    answer:
      'CPJ 55 provides a 28-day compressive strength of 55 MPa, 22% more than CPJ 45. For a dam, it resists permanent hydraulic pressure and limits cracking. For a bridge, it allows reducing concrete sections (and thus dead weight) while guaranteeing durability over 75 to 100 years.',
  },
  {
    question: 'What are the major infrastructure projects in Morocco?',
    answer:
      'Morocco invests heavily in infrastructure: highways (over 1,800 km), Kenitra-Marrakech high-speed rail (LGV), Dakhla Atlantic port, deep-water ports, wind and solar farms (Noor, XLinks project), dams (Mdez, Tit Mellil), LNG terminals. Southern Morocco and Mauritania also benefit from coastal development programs.',
  },
  {
    question: 'Is DAM cement suited for coastal works?',
    answer:
      'Yes. DAM CPJ 55 cement is formulated to withstand aggressive environments: marine chlorides, sulfates, salt-laden wind. Its controlled chemical composition limits rebar corrosion and concrete swelling. Ideal for ports, breakwaters, quays and coastal structures in Southern Morocco.',
  },
  {
    question: 'What volumes can you supply for a civil-engineering project?',
    answer:
      'Dakhla Aménagement has a production capacity of 500,000 tons/year. For civil-engineering projects requiring large volumes (highway, dam, port), we offer scheduled bulk deliveries, temporary on-site silos and complete logistics support. Contact our BTP service for a project quote.',
  },
];

export default async function GenieCivilCimentPage({
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
      name: isFr ? 'Génie Civil & Ciment — Maroc' : 'Civil Engineering & Cement — Morocco',
      description: isFr
        ? 'Ciment CPJ 55 pour génie civil au Maroc : ponts, barrages, ports, tunnels. Ultra haute résistance 55 MPa, conforme NM 10.1.004.'
        : 'CPJ 55 cement for civil engineering in Morocco: bridges, dams, ports, tunnels. Ultra high strength 55 MPa, NM 10.1.004 compliant.',
      path: '/genie-civil-ciment',
      locale: loc,
    }),
    breadcrumbSchema(
      [{ name: isFr ? 'Génie Civil & Ciment' : 'Civil Engineering & Cement', path: '/genie-civil-ciment' }],
      loc,
    ),
    serviceSchema({
      name: isFr
        ? 'Ciment CPJ 55 pour Génie Civil'
        : 'CPJ 55 Cement for Civil Engineering',
      description: isFr
        ? "Production et fourniture de ciment CPJ 55 pour grands ouvrages de génie civil au Maroc : ponts, barrages, ports, tunnels, autoroutes."
        : 'Production and supply of CPJ 55 cement for major civil-engineering works in Morocco: bridges, dams, ports, tunnels, highways.',
      path: '/genie-civil-ciment',
      locale: loc,
      serviceType: 'Civil engineering cement supply',
    }),
    faqSchema(faqItems),
  ];

  const workTypes = isFr
    ? [
        {
          icon: Building2,
          name: 'Ponts & Viaducs',
          desc: "Tabliers, piles, culées en béton armé et précontraint. Résistance 55 MPa pour portées longues et durabilité 75 ans minimum.",
        },
        {
          icon: Droplets,
          name: 'Barrages',
          desc: "Barrages poids et voûte en béton compacté au rouleau (BCR) ou conventionnel. Faible chaleur d'hydratation et résistance à long terme.",
        },
        {
          icon: Anchor,
          name: 'Ports & Quais',
          desc: "Ouvrages à la mer exposés aux chlorures. CPJ 55 adapté aux environnements marins agressifs du littoral atlantique marocain.",
        },
        {
          icon: Route,
          name: 'Tunnels',
          desc: "Voussoirs de tunnelier, revêtements définitifs. Béton à haute résistance immédiate pour cycles de pose rapides.",
        },
        {
          icon: Truck,
          name: 'Autoroutes',
          desc: "Chaussées en béton de ciment, ouvrages d'art courants, murs de soutènement. Durabilité 40 ans sans lourds entretiens.",
        },
        {
          icon: Waves,
          name: "Ouvrages d'art",
          desc: "Ponceaux, passerelles, murs antibruit. CPJ 55 pour les éléments structurels exigeants en résistance et esthétique.",
        },
      ]
    : [
        {
          icon: Building2,
          name: 'Bridges & Viaducts',
          desc: 'Decks, piers, abutments in reinforced and prestressed concrete. 55 MPa strength for long spans and 75-year durability minimum.',
        },
        {
          icon: Droplets,
          name: 'Dams',
          desc: 'Gravity and arch dams in roller-compacted concrete (RCC) or conventional. Low hydration heat and long-term strength.',
        },
        {
          icon: Anchor,
          name: 'Ports & Quays',
          desc: 'Marine structures exposed to chlorides. CPJ 55 adapted to aggressive marine environments of the Moroccan Atlantic coast.',
        },
        {
          icon: Route,
          name: 'Tunnels',
          desc: 'TBM segments, permanent linings. High early-strength concrete for fast installation cycles.',
        },
        {
          icon: Truck,
          name: 'Highways',
          desc: 'Concrete pavements, standard engineering works, retaining walls. 40-year durability without heavy maintenance.',
        },
        {
          icon: Waves,
          name: 'Engineering works',
          desc: 'Culverts, footbridges, noise barriers. CPJ 55 for structural elements demanding strength and aesthetics.',
        },
      ];

  const specsTable = isFr
    ? [
        {
          spec: 'Résistance à 28 jours',
          cpj45: '45 MPa',
          cpj55: '55 MPa',
        },
        {
          spec: 'Résistance à 2 jours',
          cpj45: '15–20 MPa',
          cpj55: '25–30 MPa',
        },
        {
          spec: 'Chaleur d\'hydratation',
          cpj45: 'Modérée',
          cpj55: 'Maîtrisée (faible)',
        },
        {
          spec: 'Résistance aux sulfates',
          cpj45: 'Bonne',
          cpj55: 'Excellente',
        },
        {
          spec: 'Résistance chlorures (mer)',
          cpj45: 'Standard',
          cpj55: 'Renforcée',
        },
        {
          spec: 'Usage recommandé',
          cpj45: 'Bâtiment, ouvrages courants',
          cpj55: 'Génie civil, grands ouvrages',
        },
        {
          spec: 'Prix départ usine',
          cpj45: '1 500 DH/T',
          cpj55: '1 600 DH/T',
        },
      ]
    : [
        {
          spec: '28-day strength',
          cpj45: '45 MPa',
          cpj55: '55 MPa',
        },
        {
          spec: '2-day strength',
          cpj45: '15–20 MPa',
          cpj55: '25–30 MPa',
        },
        {
          spec: 'Heat of hydration',
          cpj45: 'Moderate',
          cpj55: 'Controlled (low)',
        },
        {
          spec: 'Sulfate resistance',
          cpj45: 'Good',
          cpj55: 'Excellent',
        },
        {
          spec: 'Chloride resistance (sea)',
          cpj45: 'Standard',
          cpj55: 'Reinforced',
        },
        {
          spec: 'Recommended use',
          cpj45: 'Buildings, standard works',
          cpj55: 'Civil engineering, major works',
        },
        {
          spec: 'Ex-works price',
          cpj45: '1,500 DH/T',
          cpj55: '1,600 DH/T',
        },
      ];

  const caseStudies = isFr
    ? [
        {
          name: 'Port Atlantique Dakhla',
          desc: "Approvisionnement en ciment CPJ 55 pour la construction des quais et digues du nouveau port en eau profonde de Dakhla. Volume livré : 45 000 tonnes.",
        },
        {
          name: 'Parc éolien Tiskrad (Dakhla)',
          desc: "Fondations en béton armé des éoliennes (40 unités). CPJ 55 pour résistance aux vents extrêmes et à la corrosion marine. 12 000 tonnes.",
        },
        {
          name: "Autoroute Tiznit–Dakhla (tronçons)",
          desc: "Approvisionnement en ciment CPJ 55 pour les ouvrages d'art, dalles de transition et murs de soutènement du projet autoroutier Sud Maroc.",
        },
        {
          name: 'Barrage-citerne régional',
          desc: "Béton compacté au rouleau (BCR) pour réservoir. CPJ 55 DAM pour résistance à long terme et imperméabilité. Faible chaleur d'hydratation.",
        },
      ]
    : [
        {
          name: 'Dakhla Atlantic Port',
          desc: 'CPJ 55 cement supply for the construction of quays and breakwaters of the new deep-water port of Dakhla. Volume delivered: 45,000 tons.',
        },
        {
          name: 'Tiskrad Wind Farm (Dakhla)',
          desc: 'Reinforced-concrete foundations for wind turbines (40 units). CPJ 55 for resistance to extreme winds and marine corrosion. 12,000 tons.',
        },
        {
          name: 'Tiznit–Dakhla Highway (sections)',
          desc: 'CPJ 55 cement supply for engineering works, transition slabs and retaining walls of the Southern Morocco highway project.',
        },
        {
          name: 'Regional reservoir-dam',
          desc: 'Roller-compacted concrete (RCC) for reservoir. DAM CPJ 55 for long-term strength and impermeability. Low heat of hydration.',
        },
      ];

  return (
    <>
      <JsonLdScript schema={schemas} />
      <Breadcrumbs
        items={[
          { name: isFr ? 'Génie Civil & Ciment' : 'Civil Engineering & Cement', path: '/genie-civil-ciment' },
        ]}
        locale={locale}
      />

      {/* Hero */}
      <section className="bg-gradient-to-br from-[#1B3A5C] to-[#0f1f33] text-white py-20 md:py-28">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <div className="max-w-4xl">
            <span className="inline-block px-4 py-1.5 bg-[#E8B84B]/20 text-[#E8B84B] text-sm font-medium rounded-full mb-6">
              {isFr ? 'Grands Ouvrages Maroc' : 'Major Structures Morocco'}
            </span>
            <h1 className="text-[clamp(2rem,5vw,3.5rem)] font-bold leading-[1.1] mb-6">
              {isFr
                ? 'Génie Civil & Ciment CPJ 55 au Maroc'
                : 'Civil Engineering & CPJ 55 Cement in Morocco'}
            </h1>
            <p className="text-lg md:text-xl text-white/80 leading-relaxed mb-8 max-w-3xl">
              {isFr
                ? "Ciment CPJ 55 ultra haute résistance (55 MPa) pour les grands ouvrages de génie civil au Maroc : ponts, barrages, ports, tunnels et autoroutes. Conforme NM 10.1.004. Dakhla Aménagement, partenaire des projets d'infrastructure du Sud marocain."
                : 'CPJ 55 ultra high strength cement (55 MPa) for major civil-engineering works in Morocco: bridges, dams, ports, tunnels and highways. NM 10.1.004 compliant. Dakhla Aménagement, partner of infrastructure projects in Southern Morocco.'}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href={`/${locale}/devis`}
                className="inline-flex items-center gap-2 px-6 py-3 bg-[#C1272D] text-white font-semibold rounded-full hover:bg-[#C1272D]/90 transition-colors"
              >
                {isFr ? 'Devis projet génie civil' : 'Civil engineering project quote'}
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href={`/${locale}/cpj-55`}
                className="inline-flex items-center gap-2 px-6 py-3 border border-white/30 text-white font-semibold rounded-full hover:bg-white/10 transition-colors"
              >
                {isFr ? 'Découvrir le CPJ 55' : 'Discover CPJ 55'}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Le génie civil au Maroc */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6 md:px-12">
          <h2 className="text-3xl font-bold text-[#1B3A5C] mb-6">
            {isFr ? 'Le génie civil au Maroc : un marché en pleine expansion' : 'Civil engineering in Morocco: a booming market'}
          </h2>
          <p className="text-[#1A1A2E]/80 leading-relaxed mb-6">
            {isFr
              ? "Le Maroc a engagé depuis les années 2010 un vaste plan d'investissement en infrastructures : réseau autoroutier (plus de 1 800 km en service), LGV Kenitra-Tanger (la première d'Afrique), extension vers Marrakech, ports en eau profonde, parcs éoliens et solaires, programme national des barrages, et désormais le projet phare du Port Atlantique de Dakhla."
              : 'Morocco has launched since the 2010s a massive infrastructure investment plan: highway network (over 1,800 km in service), Kenitra-Tangier HSR (the first in Africa), extension to Marrakech, deep-water ports, wind and solar farms, national dam program, and now the flagship Dakhla Atlantic Port project.'}
          </p>
          <p className="text-[#1A1A2E]/80 leading-relaxed mb-6">
            {isFr
              ? "Le Sud marocain — Dakhla, Laâyoune, Boujdour — est au cœur de cette dynamique : port en eau profonde, fermes éoliennes géantes (projet XLinks de 10,5 GW), zones touristiques, extension du réseau routier. Cette intensification des grands chantiers exige un approvisionnement local en ciment de génie civil de haute qualité."
              : 'Southern Morocco — Dakhla, Laâyoune, Boujdour — is at the heart of this dynamic: deep-water port, giant wind farms (XLinks 10.5 GW project), tourist zones, road network expansion. This intensification of major construction sites requires a local supply of high-quality civil-engineering cement.'}
          </p>
          <p className="text-[#1A1A2E]/80 leading-relaxed">
            {isFr
              ? "Dakhla Aménagement (DAM) répond à ce besoin avec son centre de broyage de clinker à Dakhla (capacité 500 000 tonnes/an) et sa gamme de ciments CPJ 55 conformes aux exigences du génie civil : résistance, durabilité, résistance aux agressions environnementales. Notre positionnement logistique permet de desservir rapidement les chantiers du Sud marocain et de la Mauritanie voisine."
              : 'Dakhla Aménagement (DAM) meets this need with its clinker grinding plant in Dakhla (capacity 500,000 tons/year) and its range of CPJ 55 cements meeting civil-engineering requirements: strength, durability, resistance to environmental aggressions. Our logistics positioning allows rapid supply to construction sites in Southern Morocco and neighboring Mauritania.'}
          </p>
        </div>
      </section>

      {/* Pourquoi CPJ 55 */}
      <section className="py-16 md:py-24 bg-[#F7F8FA]">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <h2 className="text-3xl font-bold text-[#1B3A5C] mb-4 text-center">
            {isFr ? 'Pourquoi le CPJ 55 pour le génie civil ?' : 'Why CPJ 55 for civil engineering?'}
          </h2>
          <p className="text-center text-[#6B7280] mb-12 max-w-2xl mx-auto">
            {isFr
              ? "Le ciment CPJ 55 (55 MPa à 28 jours) apporte aux grands ouvrages les propriétés mécaniques et de durabilité exigées par le génie civil."
              : 'CPJ 55 cement (55 MPa at 28 days) provides major structures with the mechanical and durability properties required by civil engineering.'}
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {(isFr
              ? [
                  {
                    title: 'Résistance supérieure',
                    desc: "55 MPa à 28 jours (+22 % vs CPJ 45). Permet de réduire les sections de béton et le poids mort des ouvrages.",
                  },
                  {
                    title: 'Durabilité 75–100 ans',
                    desc: "Faible porosité et matrice dense. Durée de service étendue pour les ouvrages d'art et barrages.",
                  },
                  {
                    title: 'Résistance aux agressions',
                    desc: "Excellente tenue aux sulfates, chlorures marins et cycles gel/dégel pour ouvrages exposés.",
                  },
                  {
                    title: 'Faible chaleur d\'hydratation',
                    desc: "Limite la fissuration thermique des massifs et gros bétons (barrages, fondations).",
                  },
                  {
                    title: 'Résistance précoce',
                    desc: "25–30 MPa dès 2 jours. Permet des cycles de production rapides (voussoirs de tunnel, préfabrication).",
                  },
                  {
                    title: 'Conformité NM 10.1.004',
                    desc: "Ciment testé et certifié. Traçabilité complète par lot pour assurance qualité projet.",
                  },
                ]
              : [
                  {
                    title: 'Higher strength',
                    desc: '55 MPa at 28 days (+22% vs CPJ 45). Allows reducing concrete sections and dead weight of structures.',
                  },
                  {
                    title: '75–100 year durability',
                    desc: 'Low porosity and dense matrix. Extended service life for engineering works and dams.',
                  },
                  {
                    title: 'Resistance to aggressions',
                    desc: 'Excellent resistance to sulfates, marine chlorides and freeze-thaw cycles for exposed works.',
                  },
                  {
                    title: 'Low heat of hydration',
                    desc: 'Limits thermal cracking of mass and large concrete (dams, foundations).',
                  },
                  {
                    title: 'Early strength',
                    desc: '25–30 MPa at 2 days. Allows fast production cycles (tunnel segments, precast).',
                  },
                  {
                    title: 'NM 10.1.004 compliance',
                    desc: 'Tested and certified cement. Full batch traceability for project quality assurance.',
                  },
                ]
            ).map((f, i) => (
              <div key={i} className="bg-white border border-[#E5E7EB] rounded-xl p-6">
                <h3 className="font-bold text-[#1B3A5C] mb-2 flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-[#E8B84B] shrink-0 mt-0.5" />
                  {f.title}
                </h3>
                <p className="text-sm text-[#6B7280] leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Types d'ouvrages */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <h2 className="text-3xl font-bold text-[#1B3A5C] mb-4 text-center">
            {isFr ? "Types d'ouvrages de génie civil" : 'Types of civil-engineering works'}
          </h2>
          <p className="text-center text-[#6B7280] mb-12 max-w-2xl mx-auto">
            {isFr
              ? "Dakhla Aménagement fournit du ciment CPJ 55 pour tous les types de grands ouvrages de génie civil au Maroc."
              : 'Dakhla Aménagement supplies CPJ 55 cement for all types of major civil-engineering works in Morocco.'}
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {workTypes.map((w, i) => (
              <div key={i} className="bg-[#F7F8FA] border border-[#E5E7EB] rounded-xl p-6">
                <div className="w-12 h-12 rounded-lg bg-[#1B3A5C]/5 flex items-center justify-center mb-4">
                  <w.icon className="w-6 h-6 text-[#1B3A5C]" />
                </div>
                <h3 className="font-bold text-[#1B3A5C] mb-2">{w.name}</h3>
                <p className="text-sm text-[#6B7280] leading-relaxed">{w.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-16 md:py-24 bg-[#F7F8FA]">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <h2 className="text-3xl font-bold text-[#1B3A5C] mb-4 text-center">
            {isFr ? 'Comparatif CPJ 45 vs CPJ 55 pour génie civil' : 'CPJ 45 vs CPJ 55 comparison for civil engineering'}
          </h2>
          <p className="text-center text-[#6B7280] mb-12 max-w-2xl mx-auto">
            {isFr
              ? "Spécifications techniques pour choisir le bon ciment selon votre ouvrage de génie civil."
              : 'Technical specifications to choose the right cement for your civil-engineering work.'}
          </p>
          <div className="overflow-x-auto">
            <table className="w-full max-w-4xl mx-auto border-collapse">
              <thead>
                <tr className="border-b-2 border-[#1B3A5C]">
                  <th className="text-left py-4 px-4 text-[#1B3A5C] font-semibold">{isFr ? 'Spécification' : 'Specification'}</th>
                  <th className="text-left py-4 px-4 text-[#1B3A5C] font-semibold">CPJ 45</th>
                  <th className="text-left py-4 px-4 text-[#1B3A5C] font-semibold">CPJ 55</th>
                </tr>
              </thead>
              <tbody>
                {specsTable.map((row, i) => (
                  <tr key={i} className="border-b border-[#E5E7EB] hover:bg-white transition-colors">
                    <td className="py-4 px-4 font-semibold text-[#1B3A5C]">{row.spec}</td>
                    <td className="py-4 px-4 text-[#6B7280]">{row.cpj45}</td>
                    <td className="py-4 px-4 font-bold text-[#C1272D]">{row.cpj55}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Études de cas */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <h2 className="text-3xl font-bold text-[#1B3A5C] mb-4 text-center">
            {isFr ? 'Études de cas — Réalisations DAM' : 'Case studies — DAM realizations'}
          </h2>
          <p className="text-center text-[#6B7280] mb-12 max-w-2xl mx-auto">
            {isFr
              ? "Quelques exemples de projets de génie civil au Maroc approvisionnés par Dakhla Aménagement."
              : 'Examples of civil-engineering projects in Morocco supplied by Dakhla Aménagement.'}
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {caseStudies.map((c, i) => (
              <div key={i} className="bg-[#F7F8FA] border border-[#E5E7EB] rounded-xl p-6">
                <h3 className="font-bold text-[#1B3A5C] mb-2">{c.name}</h3>
                <p className="text-sm text-[#6B7280] leading-relaxed">{c.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link
              href={`/${locale}/realisations`}
              className="inline-flex items-center gap-2 text-[#C1272D] font-medium hover:gap-3 transition-all"
            >
              {isFr ? '→ Voir toutes nos réalisations' : '→ View all our realizations'}
            </Link>
          </div>
        </div>
      </section>

      {/* Normes */}
      <section className="py-16 md:py-24 bg-[#F7F8FA]">
        <div className="max-w-4xl mx-auto px-6 md:px-12">
          <h2 className="text-3xl font-bold text-[#1B3A5C] mb-6">
            {isFr ? 'Normes applicables au génie civil marocain' : 'Standards for Moroccan civil engineering'}
          </h2>
          <ul className="space-y-3 mb-6">
            {(isFr
              ? [
                  'NM 10.1.004 : Ciment Portland composé CPJ 45 et CPJ 55',
                  'NM 21.2.005 : Béton — spécification, performances, production et conformité',
                  'NM 21.4.002 : Aciers à haute adhérence pour béton armé',
                  'NM 21.5.001 : Béton prêt à l\'emploi',
                  'NM 21.5.002 : Béton à haute performance',
                  'CBA 93 : Conception et calcul des structures en béton armé',
                  'RPS 2011 : Règles parasismiques marocaines',
                  'NV 2011 : Règles de calcul des effets du vent sur les constructions',
                ]
              : [
                  'NM 10.1.004: Composite Portland Cement CPJ 45 and CPJ 55',
                  'NM 21.2.005: Concrete — specification, performance, production and conformity',
                  'NM 21.4.002: High-adherence steel for reinforced concrete',
                  'NM 21.5.001: Ready-mixed concrete',
                  'NM 21.5.002: High-performance concrete',
                  'CBA 93: Design and calculation of reinforced-concrete structures',
                  'RPS 2011: Moroccan seismic rules',
                  'NV 2011: Wind effects calculation rules for structures',
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
              ? "Dakhla Aménagement fournit systématiquement les fiches techniques, certificats de conformité et procès-verbaux d'essais permettant le suivi qualité des projets de génie civil. Notre laboratoire interne réalise des tests de résistance à la compression à 2, 7 et 28 jours selon la norme NM 21.2.005."
              : 'Dakhla Aménagement systematically provides technical data sheets, certificates of conformity and test reports enabling quality monitoring of civil-engineering projects. Our internal laboratory performs compression strength tests at 2, 7 and 28 days according to the NM 21.2.005 standard.'}
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-3xl mx-auto px-6 md:px-12">
          <h2 className="text-3xl font-bold text-[#1B3A5C] mb-8 text-center">
            {isFr ? 'FAQ — Génie civil & ciment au Maroc' : 'FAQ — Civil engineering & cement in Morocco'}
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
        links={APPLICATION_RELATED}
        locale={locale}
      />

      {/* CTA */}
      <RelatedArticles
        articleSlugs={['projet-infrastructure-dakhla', 'construction-zone-cotiere', 'essais-resistance-ciment']}
        locale={locale}
      />
      <CtaBanner
        locale={locale}
        title={isFr ? "Projet d'infrastructure ou de génie civil ?" : 'Infrastructure or civil-engineering project?'}
        subtitle={
          isFr
            ? "Ciment CPJ 55 ultra haute résistance (55 MPa), conforme NM 10.1.004. Volumes importants, livraison planifiée. Demandez un devis projet sous 24h."
            : 'CPJ 55 ultra high strength cement (55 MPa), NM 10.1.004 compliant. Large volumes, scheduled delivery. Request a project quote within 24h.'
        }
        buttonText={isFr ? 'Demander un devis projet' : 'Request a project quote'}
      />
    </>
  );
}
