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
import { CheckCircle, ArrowRight, Building2, HardHat, Beaker, Layers } from 'lucide-react';

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
      path: '/beton-arme-maroc',
      title:
        'Reinforced Concrete Morocco — CPJ Cement, Dosage, Techniques | Dakhla Aménagement',
      description:
        'Reinforced concrete in Morocco: CPJ 45/CPJ 55 cement dosage, pouring techniques, reinforcement, standards. Quality DAM cement for durable reinforced concrete. Free quote.',
      keywords: [
        ...KEYWORDS.application,
        ...KEYWORDS.products,
        'reinforced concrete Morocco',
        'béton armé Maroc',
        'cement dosage concrete',
        'concrete reinforcement Morocco',
      ],
    });
  }

  return buildMetadata({
    locale: 'fr',
    path: '/beton-arme-maroc',
    title: 'Béton Armé Maroc — Ciment CPJ, Dosage, Techniques | Dakhla Aménagement',
    description:
      "Béton armé au Maroc : dosage ciment CPJ 45/CPJ 55, techniques de coulage, armatures, normes. Ciment de qualité DAM pour béton armé durable. Devis gratuit.",
    keywords: [
      ...KEYWORDS.application,
      ...KEYWORDS.products,
      'béton armé Maroc',
      'béton Maroc',
      'dosage béton',
      'ciment béton armé',
      'armature béton',
    ],
  });
}

const faqItemsFr = [
  {
    question: 'Quel ciment choisir pour le béton armé au Maroc ?',
    answer:
      "Pour le béton armé au Maroc, le ciment CPJ 45 (45 MPa) convient à la plupart des ouvrages courants (poteaux, poutres, dalles, fondations). Pour les ouvrages exigeants en zone côtière ou de génie civil, le CPJ 55 (55 MPa) apporte une résistance supérieure et une meilleure durabilité. Les ciments DAM sont conformes à la norme NM 10.1.004.",
  },
  {
    question: 'Quel dosage de ciment pour un béton armé ?',
    answer:
      "Le dosage ciment pour béton armé varie selon l'ouvrage : 300 à 350 kg/m³ pour un béton courant (dallages, fondations, poutres), 400 kg/m³ et plus pour un béton haute résistance (poteaux de structure, ouvrages de génie civil). Le rapport eau/ciment doit rester inférieur à 0,5 pour garantir durabilité et résistance.",
  },
  {
    question: 'Quelle est la différence entre béton et béton armé ?',
    answer:
      "Le béton simple résiste bien à la compression mais mal à la traction (10× moins). Le béton armé combine béton (résistance compression) et armatures en acier (résistance traction), ce qui permet de réaliser des poutres, poteaux et dalles capables de supporter des charges en flexion. C'est le matériau de structure le plus utilisé au Maroc.",
  },
  {
    question: 'Quel délai de décoffrage pour le béton armé ?',
    answer:
      "Le décoffrage dépend de la portée et de la résistance atteinte : 24-48 h pour les coffrages latéraux (poteaux, murs), 7 jours pour les poutres et dalles de portée ≤ 6 m (à 70 % de la résistance), 21 à 28 jours pour les grandes portées. La cure du béton (humidification) pendant 7 jours minimum est essentielle pour atteindre la résistance spécifiée.",
  },
  {
    question: 'Quelles normes pour le béton armé au Maroc ?',
    answer:
      "Le béton armé au Maroc est encadré par les normes NM 10.1.004 (ciment), NM 21.1.008 (granulats), NM 21.2.005 (béton), et le RPS 2011 (règles parasismiques). Les ciments CPJ 45 et CPJ 55 de DAM respectent ces normes, garantissant la conformité de vos ouvrages en béton armé.",
  },
];

const faqItemsEn = [
  {
    question: 'Which cement to choose for reinforced concrete in Morocco?',
    answer:
      'For reinforced concrete in Morocco, CPJ 45 cement (45 MPa) is suitable for most common structures (columns, beams, slabs, foundations). For demanding coastal or civil-engineering works, CPJ 55 (55 MPa) provides higher strength and better durability. DAM cements comply with the NM 10.1.004 standard.',
  },
  {
    question: 'What cement dosage for reinforced concrete?',
    answer:
      'Cement dosage for reinforced concrete varies by structure: 300–350 kg/m³ for standard concrete (slabs, foundations, beams), 400 kg/m³ and above for high-strength concrete (structural columns, civil engineering). The water/cement ratio must stay below 0.5 to guarantee durability and strength.',
  },
  {
    question: 'What is the difference between concrete and reinforced concrete?',
    answer:
      'Plain concrete resists compression well but poorly in tension (10× less). Reinforced concrete combines concrete (compression strength) with steel reinforcement (tensile strength), allowing beams, columns and slabs to withstand bending loads. It is the most widely used structural material in Morocco.',
  },
  {
    question: 'What formwork removal time for reinforced concrete?',
    answer:
      'Removal time depends on span and achieved strength: 24–48 h for side formwork (columns, walls), 7 days for beams and slabs with span ≤ 6 m (at 70% strength), 21–28 days for long spans. Curing (moistening) the concrete for at least 7 days is essential to reach the specified strength.',
  },
  {
    question: 'Which standards for reinforced concrete in Morocco?',
    answer:
      'Reinforced concrete in Morocco is governed by NM 10.1.004 (cement), NM 21.1.008 (aggregates), NM 21.2.005 (concrete), and RPS 2011 (seismic rules). DAM CPJ 45 and CPJ 55 cements comply with these standards, ensuring conformity of your reinforced-concrete structures.',
  },
];

export default async function BetonArmeMarocPage({
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
      name: isFr ? 'Béton Armé Maroc — Guide Complet' : 'Reinforced Concrete Morocco — Complete Guide',
      description: isFr
        ? 'Béton armé au Maroc : dosage ciment CPJ, techniques de coulage, armatures, normes NM 10.1.004.'
        : 'Reinforced concrete in Morocco: CPJ cement dosage, pouring techniques, reinforcement, NM 10.1.004 standards.',
      path: '/beton-arme-maroc',
      locale: loc,
    }),
    breadcrumbSchema(
      [{ name: isFr ? 'Béton Armé Maroc' : 'Reinforced Concrete Morocco', path: '/beton-arme-maroc' }],
      loc,
    ),
    serviceSchema({
      name: isFr
        ? 'Ciment pour Béton Armé — CPJ 45 / CPJ 55'
        : 'Cement for Reinforced Concrete — CPJ 45 / CPJ 55',
      description: isFr
        ? 'Production et fourniture de ciment CPJ 45 et CPJ 55 pour béton armé au Maroc : dosage, vibration, cure, décoffrage.'
        : 'Production and supply of CPJ 45 and CPJ 55 cement for reinforced concrete in Morocco: dosage, vibration, curing, formwork removal.',
      path: '/beton-arme-maroc',
      locale: loc,
      serviceType: 'Reinforced concrete cement supply',
    }),
    faqSchema(faqItems),
  ];

  const dosageTable = isFr
    ? [
        {
          use: 'Béton de propreté',
          dosage: '150–200 kg/m³',
          cement: 'CPJ 45',
          note: 'Semelle anti-pollution sol',
        },
        {
          use: 'Béton non armé (dallage, massif)',
          dosage: '250–300 kg/m³',
          cement: 'CPJ 45',
          note: 'Ouvrages secondaires',
        },
        {
          use: 'Béton armé courant',
          dosage: '300–350 kg/m³',
          cement: 'CPJ 45',
          note: 'Poteaux, poutres, dalles, fondations',
        },
        {
          use: 'Béton armé haute résistance',
          dosage: '400–450 kg/m³',
          cement: 'CPJ 55',
          note: 'Ouvrages de génie civil, portée importante',
        },
        {
          use: 'Béton haute performance (BHP)',
          dosage: '450–500 kg/m³',
          cement: 'CPJ 55',
          note: 'Ouvrages spéciaux, zone côtière',
        },
      ]
    : [
        {
          use: 'Lean concrete (blinding)',
          dosage: '150–200 kg/m³',
          cement: 'CPJ 45',
          note: 'Soil-pollution protection footing',
        },
        {
          use: 'Plain concrete (slab, mass)',
          dosage: '250–300 kg/m³',
          cement: 'CPJ 45',
          note: 'Secondary structures',
        },
        {
          use: 'Standard reinforced concrete',
          dosage: '300–350 kg/m³',
          cement: 'CPJ 45',
          note: 'Columns, beams, slabs, foundations',
        },
        {
          use: 'High-strength reinforced concrete',
          dosage: '400–450 kg/m³',
          cement: 'CPJ 55',
          note: 'Civil engineering, long-span works',
        },
        {
          use: 'High-Performance Concrete (HPC)',
          dosage: '450–500 kg/m³',
          cement: 'CPJ 55',
          note: 'Special works, coastal zone',
        },
      ];

  const features = isFr
    ? [
        {
          icon: Beaker,
          title: 'Ciments conformes NM 10.1.004',
          desc: 'CPJ 45 et CPJ 55 testés en laboratoire pour béton armé durable',
        },
        {
          icon: HardHat,
          title: 'Usage BTP éprouvé',
          desc: 'Approuvés sur les chantiers de poteaux, poutres, dalles et fondations',
        },
        {
          icon: Building2,
          title: 'Résistance 28 jours garantie',
          desc: '45 MPa (CPJ 45) et 55 MPa (CPJ 55) mesurés en compression',
        },
        {
          icon: Layers,
          title: 'Adapté zone côtière',
          desc: "Faible chaleur d'hydratation, durabilité renforcée face au sel marin",
        },
      ]
    : [
        {
          icon: Beaker,
          title: 'NM 10.1.004 compliant cements',
          desc: 'CPJ 45 and CPJ 55 lab-tested for durable reinforced concrete',
        },
        {
          icon: HardHat,
          title: 'Proven BTP use',
          desc: 'Approved on columns, beams, slabs and foundations sites',
        },
        {
          icon: Building2,
          title: 'Guaranteed 28-day strength',
          desc: '45 MPa (CPJ 45) and 55 MPa (CPJ 55) measured in compression',
        },
        {
          icon: Layers,
          title: 'Coastal-zone adapted',
          desc: 'Low hydration heat, enhanced durability against sea salt',
        },
      ];

  const workTypes = isFr
    ? [
        {
          name: 'Poteaux',
          desc: "Éléments verticaux porteurs. Dosage 350 kg/m³ CPJ 45 minimum, armatures longitudinales HA FeE500 et cadres fermés.",
        },
        {
          name: 'Poutres',
          desc: "Éléments horizontaux en flexion. Dosage 350 kg/m³ CPJ 45, armatures longitudinales (chapeaux et travée) et étriers rapprochés aux appuis.",
        },
        {
          name: 'Dalles',
          desc: "Planchers porteurs. Dosage 350 kg/m³ CPJ 45, treillis soudé ou armatures HA, portée courante 4 à 6 m.",
        },
        {
          name: 'Fondations',
          desc: "Semelles superficielles et radiers. Dosage 350 kg/m³ CPJ 45, ancrage des aciers et bétonnage continu pour éviter les reprises.",
        },
        {
          name: 'Voiles et murs',
          desc: "Murs porteurs et voiles de contreventement. Dosage 350–400 kg/m³ selon la hauteur et les charges.",
        },
        {
          name: "Ouvrages de génie civil",
          desc: "Ponts, réservoirs, ouvrages d'art. Dosage 400 kg/m³ CPJ 55 pour résistance et durabilité maximales.",
        },
      ]
    : [
        {
          name: 'Columns',
          desc: 'Vertical load-bearing elements. Dosage 350 kg/m³ CPJ 45 minimum, HA FeE500 longitudinal rebar and closed stirrups.',
        },
        {
          name: 'Beams',
          desc: 'Horizontal bending elements. Dosage 350 kg/m³ CPJ 45, longitudinal rebar (top and span) and closer stirrups at supports.',
        },
        {
          name: 'Slabs',
          desc: 'Load-bearing floors. Dosage 350 kg/m³ CPJ 45, welded mesh or HA rebar, typical span 4 to 6 m.',
        },
        {
          name: 'Foundations',
          desc: 'Shallow footings and rafts. Dosage 350 kg/m³ CPJ 45, rebar anchoring and continuous pouring to avoid cold joints.',
        },
        {
          name: 'Walls and shear walls',
          desc: 'Load-bearing walls and bracing walls. Dosage 350–400 kg/m³ depending on height and loads.',
        },
        {
          name: 'Civil-engineering works',
          desc: 'Bridges, reservoirs, engineered structures. Dosage 400 kg/m³ CPJ 55 for maximum strength and durability.',
        },
      ];

  return (
    <>
      <JsonLdScript schema={schemas} />
      <Breadcrumbs
        items={[
          { name: isFr ? 'Béton Armé Maroc' : 'Reinforced Concrete Morocco', path: '/beton-arme-maroc' },
        ]}
        locale={locale}
      />

      {/* Hero */}
      <section className="bg-gradient-to-br from-[#1B3A5C] to-[#0f1f33] text-white py-20 md:py-28">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <div className="max-w-4xl">
            <span className="inline-block px-4 py-1.5 bg-[#E8B84B]/20 text-[#E8B84B] text-sm font-medium rounded-full mb-6">
              {isFr ? 'Guide Béton Armé Maroc 2026' : 'Morocco Reinforced Concrete Guide 2025'}
            </span>
            <h1 className="text-[clamp(2rem,5vw,3.5rem)] font-bold leading-[1.1] mb-6">
              {isFr ? 'Béton Armé au Maroc — Ciment CPJ, Dosage & Techniques' : 'Reinforced Concrete in Morocco — CPJ Cement, Dosage & Techniques'}
            </h1>
            <p className="text-lg md:text-xl text-white/80 leading-relaxed mb-8 max-w-3xl">
              {isFr
                ? "Maîtrisez le béton armé au Maroc : dosage ciment CPJ 45/CPJ 55, choix des armatures, techniques de coulage, vibration, cure, décoffrage et conformité aux normes NM 10.1.004 et RPS 2011. Ciment de qualité DAM pour des ouvrages durables."
                : "Master reinforced concrete in Morocco: CPJ 45/CPJ 55 cement dosage, rebar selection, pouring techniques, vibration, curing, formwork removal and compliance with NM 10.1.004 and RPS 2011 standards. Quality DAM cement for durable structures."}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href={`/${locale}/devis`}
                className="inline-flex items-center gap-2 px-6 py-3 bg-[#C1272D] text-white font-semibold rounded-full hover:bg-[#C1272D]/90 transition-colors"
              >
                {isFr ? 'Demander un devis ciment' : 'Request a cement quote'}
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href={`/${locale}/produits`}
                className="inline-flex items-center gap-2 px-6 py-3 border border-white/30 text-white font-semibold rounded-full hover:bg-white/10 transition-colors"
              >
                {isFr ? 'Voir nos ciments CPJ' : 'View our CPJ cements'}
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

      {/* Qu'est-ce que le béton armé */}
      <section className="py-16 md:py-24 bg-[#F7F8FA]">
        <div className="max-w-4xl mx-auto px-6 md:px-12">
          <h2 className="text-3xl font-bold text-[#1B3A5C] mb-6">
            {isFr ? "Qu'est-ce que le béton armé ?" : 'What is reinforced concrete?'}
          </h2>
          <p className="text-[#1A1A2E]/80 leading-relaxed mb-6">
            {isFr
              ? "Le béton armé est un matériau composite associant le béton (mélange de ciment, sable, gravier et eau) à des armatures en acier haute adhérence (HA). Cette combinaison exploite les propriétés complémentaires des deux matériaux : le béton résiste très bien à la compression (30 à 60 MPa) mais mal à la traction (10 fois moins), tandis que l'acier reprend les efforts de traction."
              : "Reinforced concrete is a composite material that combines concrete (a mix of cement, sand, gravel and water) with high-adherence (HA) steel reinforcement. This combination exploits the complementary properties of both materials: concrete resists compression very well (30 to 60 MPa) but poorly in tension (10 times less), while steel takes up tensile forces."}
          </p>
          <p className="text-[#1A1A2E]/80 leading-relaxed mb-6">
            {isFr
              ? "Au Maroc, le béton armé est le matériau de structure dominant dans le BTP : immeubles d'habitation, ouvrages d'art, fondations, dalles et poteaux. La qualité du ciment utilisé est déterminante pour la résistance finale et la durabilité de l'ouvrage. Dakhla Aménagement produit deux qualités de ciment CPJ — CPJ 45 (45 MPa) et CPJ 55 (55 MPa) — spécifiquement adaptées au béton armé marocain."
              : "In Morocco, reinforced concrete is the dominant structural material in BTP: residential buildings, engineering works, foundations, slabs and columns. The quality of the cement used is decisive for the final strength and durability of the structure. Dakhla Aménagement produces two CPJ cement qualities — CPJ 45 (45 MPa) and CPJ 55 (55 MPa) — specifically adapted to Moroccan reinforced concrete."}
          </p>
          <p className="text-[#1A1A2E]/80 leading-relaxed">
            {isFr
              ? "Le béton armé doit être conçu et exécuté conformément aux normes marocaines (NM 21.2.005 pour le béton, RPS 2011 pour la sécurité parasismique) et utiliser un ciment conforme à la norme NM 10.1.004. Le respect du dosage en ciment, du rapport eau/ciment et des délais de cure conditionne directement la résistance à 28 jours et la pérennité de l'ouvrage."
              : "Reinforced concrete must be designed and executed in accordance with Moroccan standards (NM 21.2.005 for concrete, RPS 2011 for seismic safety) and use cement compliant with NM 10.1.004. Respecting the cement dosage, the water/cement ratio and curing times directly conditions the 28-day strength and the longevity of the structure."}
          </p>
        </div>
      </section>

      {/* Dosage Table */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <h2 className="text-3xl font-bold text-[#1B3A5C] mb-4 text-center">
            {isFr ? 'Dosage du ciment pour béton armé' : 'Cement dosage for reinforced concrete'}
          </h2>
          <p className="text-center text-[#6B7280] mb-12 max-w-2xl mx-auto">
            {isFr
              ? "Tableau des dosages ciment CPJ 45 et CPJ 55 selon le type d'ouvrage. Dosage exprimé en kg de ciment par m³ de béton."
              : 'CPJ 45 and CPJ 55 cement dosage table by structure type. Dosage expressed in kg of cement per m³ of concrete.'}
          </p>
          <div className="overflow-x-auto">
            <table className="w-full max-w-5xl mx-auto border-collapse">
              <thead>
                <tr className="border-b-2 border-[#1B3A5C]">
                  <th className="text-left py-4 px-4 text-[#1B3A5C] font-semibold">
                    {isFr ? "Type d'ouvrage" : 'Structure type'}
                  </th>
                  <th className="text-left py-4 px-4 text-[#1B3A5C] font-semibold">
                    {isFr ? 'Dosage ciment' : 'Cement dosage'}
                  </th>
                  <th className="text-left py-4 px-4 text-[#1B3A5C] font-semibold">
                    {isFr ? 'Ciment recommandé' : 'Recommended cement'}
                  </th>
                  <th className="text-left py-4 px-4 text-[#1B3A5C] font-semibold">{isFr ? 'Note' : 'Note'}</th>
                </tr>
              </thead>
              <tbody>
                {dosageTable.map((row, i) => (
                  <tr key={i} className="border-b border-[#E5E7EB] hover:bg-[#F7F8FA] transition-colors">
                    <td className="py-4 px-4 font-semibold text-[#1B3A5C]">{row.use}</td>
                    <td className="py-4 px-4 font-bold text-[#C1272D]">{row.dosage}</td>
                    <td className="py-4 px-4 text-[#1A1A2E]">{row.cement}</td>
                    <td className="py-4 px-4 text-sm text-[#6B7280]">{row.note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-center text-sm text-[#6B7280] mt-6 max-w-2xl mx-auto">
            {isFr
              ? "* Dosages indicatifs pour un béton à 28 jours conforme NM 21.2.005. Le rapport eau/ciment doit être ≤ 0,5. Adaptation nécessaire selon exposition, classe d'environnement et étude béton."
              : '* Indicative dosages for 28-day concrete compliant with NM 21.2.005. Water/cement ratio must be ≤ 0.5. Adaptation required based on exposure, environmental class and concrete study.'}
          </p>
        </div>
      </section>

      {/* Types d'ouvrages */}
      <section className="py-16 md:py-24 bg-[#F7F8FA]">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <h2 className="text-3xl font-bold text-[#1B3A5C] mb-4 text-center">
            {isFr ? "Types d'ouvrages en béton armé" : 'Types of reinforced-concrete structures'}
          </h2>
          <p className="text-center text-[#6B7280] mb-12 max-w-2xl mx-auto">
            {isFr
              ? "Le béton armé s'applique à tous les éléments structurels d'une construction. Voici les principaux ouvrages avec leurs exigences de dosage et d'armatures."
              : 'Reinforced concrete applies to all structural elements of a construction. Here are the main works with their dosage and rebar requirements.'}
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {workTypes.map((w, i) => (
              <div key={i} className="bg-white border border-[#E5E7EB] rounded-xl p-6">
                <h3 className="font-bold text-[#1B3A5C] mb-2">{w.name}</h3>
                <p className="text-sm text-[#6B7280] leading-relaxed">{w.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bonnes pratiques */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6 md:px-12">
          <h2 className="text-3xl font-bold text-[#1B3A5C] mb-6">
            {isFr ? 'Bonnes pratiques de coulage du béton armé' : 'Best practices for pouring reinforced concrete'}
          </h2>
          <p className="text-[#1A1A2E]/80 leading-relaxed mb-8">
            {isFr
              ? "Au-delà du choix du ciment, la qualité du béton armé dépend de la mise en œuvre. Voici les bonnes pratiques essentielles pour garantir la résistance et la durabilité de vos ouvrages."
              : 'Beyond the choice of cement, the quality of reinforced concrete depends on its implementation. Here are the essential best practices to guarantee the strength and durability of your structures.'}
          </p>
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-bold text-[#1B3A5C] mb-2">
                {isFr ? '1. Vibration du béton' : '1. Concrete vibration'}
              </h3>
              <p className="text-[#1A1A2E]/80 leading-relaxed">
                {isFr
                  ? "Vibratez le béton frais à l'aide d'une aiguille vibrante (diamètre 40-60 mm) pour évacuer l'air emprisonné et assurer une bonne compacité. Durée par point : 5 à 15 secondes. Une vibration insuffisante laisse des nids de cailloux ; une vibration excessive provoque la ségrégation."
                  : 'Vibrate fresh concrete with a vibrating needle (40-60 mm diameter) to evacuate trapped air and ensure good compactness. Duration per point: 5 to 15 seconds. Insufficient vibration leaves honeycombing; excessive vibration causes segregation.'}
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-[#1B3A5C] mb-2">
                {isFr ? '2. Cure du béton' : '2. Concrete curing'}
              </h3>
              <p className="text-[#1A1A2E]/80 leading-relaxed">
                {isFr
                  ? "Le cure maintient le béton humide pendant au moins 7 jours (14 jours en climat chaud et sec comme à Dakhla) pour permettre une hydratation complète du ciment. Méthodes : arrosage, bâche humide, produit de cure filmogène. Une cure correcte augmente la résistance finale de 20 %."
                  : 'Curing keeps concrete moist for at least 7 days (14 days in hot, dry climates like Dakhla) to allow complete cement hydration. Methods: watering, wet tarpaulin, film-forming curing agent. Proper curing increases final strength by 20%.'}
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-[#1B3A5C] mb-2">
                {isFr ? '3. Décoffrage' : '3. Formwork removal'}
              </h3>
              <p className="text-[#1A1A2E]/80 leading-relaxed">
                {isFr
                  ? "Respectez les délais minimaux : 24-48 h pour les coffrages latéraux, 7 jours pour les poutres/dalles de portée ≤ 6 m (à 70 % de la résistance), 21-28 jours pour les grandes portées. Le décoffrage précoce compromet la résistance et la sécurité de l'ouvrage."
                  : 'Respect minimum times: 24-48 h for side formwork, 7 days for beams/slabs with span ≤ 6 m (at 70% strength), 21-28 days for long spans. Early formwork removal compromises strength and structural safety.'}
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-[#1B3A5C] mb-2">
                {isFr ? '4. Rapport eau/ciment (E/C)' : '4. Water/cement ratio (W/C)'}
              </h3>
              <p className="text-[#1A1A2E]/80 leading-relaxed">
                {isFr
                  ? "Maintenez un rapport E/C ≤ 0,5 pour le béton armé courant, ≤ 0,45 pour le béton haute performance. Un excès d'eau augmente l'ouvrabilité mais réduit proportionnellement la résistance et la durabilité. Utilisez un plastifiant si nécessaire."
                  : 'Maintain a W/C ratio ≤ 0.5 for standard reinforced concrete, ≤ 0.45 for high-performance concrete. Excess water increases workability but proportionally reduces strength and durability. Use a plasticizer if needed.'}
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-[#1B3A5C] mb-2">
                {isFr ? "5. Enrobage des armatures" : '5. Reinforcement cover'}
              </h3>
              <p className="text-[#1A1A2E]/80 leading-relaxed">
                {isFr
                  ? "L'enrobage minimal est de 3 cm en milieu non agressif, 4 cm en zone côtière (Dakhla, Boujdour) et 5 cm pour les ouvrages à la mer. Un enrobage suffisant protège l'acier de la corrosion, particulièrement critique en bord de mer."
                  : 'Minimum cover is 3 cm in non-aggressive environments, 4 cm in coastal areas (Dakhla, Boujdour) and 5 cm for marine works. Sufficient cover protects steel from corrosion, particularly critical by the sea.'}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Normes Maroc */}
      <section className="py-16 md:py-24 bg-[#F7F8FA]">
        <div className="max-w-4xl mx-auto px-6 md:px-12">
          <h2 className="text-3xl font-bold text-[#1B3A5C] mb-6">
            {isFr ? 'Normes du béton armé au Maroc' : 'Reinforced-concrete standards in Morocco'}
          </h2>
          <p className="text-[#1A1A2E]/80 leading-relaxed mb-6">
            {isFr
              ? "Le béton armé au Maroc est encadré par un corpus normatif cohérent qui garantit la sécurité et la durabilité des ouvrages :"
              : 'Reinforced concrete in Morocco is governed by a coherent normative corpus that ensures the safety and durability of structures:'}
          </p>
          <ul className="space-y-3 mb-6">
            {(isFr
              ? [
                  'NM 10.1.004 : Ciment Portland composé (CPJ 45 et CPJ 55) — spécifications et conformité',
                  'NM 21.1.008 : Granulats pour béton hydraulique',
                  'NM 21.2.005 : Béton — spécification, performances, production et conformité',
                  'NM 21.4.002 : Aciers à haute adhérence (HA) pour béton armé',
                  'RPS 2011 : Règles de construction parasismique marocaines (obligatoires pour les bâtiments)',
                  'CBA 93 : Règles de conception et calcul des structures en béton armé',
                ]
              : [
                  'NM 10.1.004: Composite Portland Cement (CPJ 45 and CPJ 55) — specifications and conformity',
                  'NM 21.1.008: Aggregates for hydraulic concrete',
                  'NM 21.2.005: Concrete — specification, performance, production and conformity',
                  'NM 21.4.002: High-adherence (HA) steel for reinforced concrete',
                  'RPS 2011: Moroccan seismic construction rules (mandatory for buildings)',
                  'CBA 93: Design and calculation rules for reinforced-concrete structures',
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
              ? "Les ciments CPJ 45 et CPJ 55 de Dakhla Aménagement sont conformes à la norme NM 10.1.004 et testés en laboratoire interne avant expédition. Chaque lot est livré avec sa fiche technique et son certificat de conformité, garantissant la traçabilité de votre béton armé."
              : 'Dakhla Aménagement CPJ 45 and CPJ 55 cements comply with the NM 10.1.004 standard and are tested in our internal laboratory before shipment. Each batch is delivered with its technical data sheet and certificate of conformity, guaranteeing the traceability of your reinforced concrete.'}
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-3xl mx-auto px-6 md:px-12">
          <h2 className="text-3xl font-bold text-[#1B3A5C] mb-8 text-center">
            {isFr ? 'FAQ — Béton armé au Maroc' : 'FAQ — Reinforced concrete in Morocco'}
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
        articleSlugs={['beton-arme-maroc', 'calculer-quantite-ciment', '5-erreurs-ciment']}
        locale={locale}
      />
      <CtaBanner
        locale={locale}
        title={isFr ? 'Besoin de ciment pour béton armé ?' : 'Need cement for reinforced concrete?'}
        subtitle={
          isFr
            ? "CPJ 45 dès 1 500 DH/T, CPJ 55 dès 1 600 DH/T. Conformes NM 10.1.004. Livraison Sud Maroc & Mauritanie. Devis gratuit sous 24h."
            : 'CPJ 45 from 1,500 DH/T, CPJ 55 from 1,600 DH/T. NM 10.1.004 compliant. Southern Morocco & Mauritania delivery. Free quote within 24h.'
        }
        buttonText={isFr ? 'Demander un devis' : 'Request a quote'}
      />
    </>
  );
}
