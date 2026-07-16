import Link from 'next/link';
import { buildMetadata, KEYWORDS } from '@/lib/seo';
import { webPageSchema, breadcrumbSchema, faqSchema } from '@/lib/structured-data';
import { JsonLdScript } from '@/components/shared/JsonLd';
import { Breadcrumbs } from '@/components/shared/Breadcrumbs';
import { CtaBanner } from '@/components/shared/RelatedLinks';
import { ArrowRight, Search } from 'lucide-react';

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
      path: '/lexique-ciment',
      title: 'Cement Glossary — Terms, Definitions & Standards | Dakhla Aménagement',
      description:
        'Complete glossary of cement terms: CPJ, clinker, MPa, Blaine, setting time, NM 10.1.004, EN 197-1. Definitions of all cement and construction terminology used in Morocco.',
      keywords: ['cement glossary', 'cement terms', 'cement definitions', 'CPJ meaning', 'clinker definition', ...KEYWORDS.core],
    });
  }

  return buildMetadata({
    locale: 'fr',
    path: '/lexique-ciment',
    title: 'Lexique du Ciment — Termes, Définitions & Normes | Dakhla Aménagement',
    description:
      "Glossaire complet du ciment : CPJ, clinker, MPa, Blaine, temps de prise, NM 10.1.004, EN 197-1. Définitions de toute la terminologie ciment et construction utilisée au Maroc.",
    keywords: ['lexique ciment', 'définition ciment', 'terminologie ciment', 'CPJ signification', 'clinker définition', ...KEYWORDS.core],
  });
}

interface GlossaryTerm {
  term: string;
  category: 'Produit' | 'Technique' | 'Norme' | 'Processus' | 'Propriété';
  definition: string;
}

const GLOSSARY: GlossaryTerm[] = [
  { term: 'CPJ 35', category: 'Produit', definition: 'Ciment Portland Composé offrant une résistance de 35 MPa à 28 jours. Utilisé pour la maçonnerie courante, les dallages simples et les fondations non-armées. Prix dès 70 DH/sac. Conforme à NM 10.1.004.' },
  { term: 'CPJ 45', category: 'Produit', definition: 'Ciment Portland Composé offrant une résistance de 45 MPa à 28 jours. Idéal pour le béton armé courant, les dallages et les fondations. Conforme à NM 10.1.004.' },
  { term: 'CPJ 55', category: 'Produit', definition: 'Ciment Portland Composé offrant une résistance de 55 MPa à 28 jours. Recommandé pour les grands ouvrages de génie civil, les infrastructures et les zones côtières.' },
  { term: 'Ciment Portland', category: 'Produit', definition: 'Type de ciment hydraulique composé principalement de clinker broyé avec du gypse. Les ciments Portland composés (CPJ) contiennent des additions. Conforme NM 10.1.004 et EN 197-1.' },
  { term: 'Ciment blanc', category: 'Produit', definition: 'Ciment de couleur blanche utilisé pour les applications décoratives (carrelage, sculpture, enduits décoratifs). Plus cher que le ciment gris (3500 DH/T contre 1500 DH/T).' },
  { term: 'Ciment hydrofuge', category: 'Produit', definition: 'Ciment ou mortier contenant des additifs imperméabilisants. Utilisé pour les piscines, sous-sols, réservoirs et ouvrages enterrés nécessitant une étanchéité.' },
  { term: 'Ciment réfractaire', category: 'Produit', definition: 'Ciment résistant à des températures très élevées (jusqu\'à 1500°C). Utilisé pour les fours industriels, cheminées et foyers de cheminée.' },
  { term: 'Ciment à prise rapide', category: 'Produit', definition: 'Ciment dont le début de prise intervient en 5 à 15 minutes. Utilisé pour les réparations urgentes, le scellement et l\'obturation rapide.' },
  { term: 'Mortier-colle', category: 'Produit', definition: 'Mortier à base de ciment utilisé pour coller carrelage, faïence et pierre. Classé selon EN 12004 (C1, C2, C2TE, S1, S2 selon la résistance et la flexibilité).' },
  { term: 'Béton prêt à l\'emploi', category: 'Produit', definition: 'Béton préparé en centrale et livré par toupie. Mélange de ciment, sable, gravier, eau et adjuvants. Prix: 1500-2000 DH/m³ selon le dosage.' },
  { term: 'Clinker', category: 'Produit', definition: "Matériau intermédiaire obtenu par cuisson du calcaire et de l'argile à 1450°C. Broyé avec du gypse et des additions, il donne le ciment. DAM importe et broie le clinker à Dakhla." },
  { term: 'Gypse', category: 'Produit', definition: "Minéral ajouté au clinker lors du broyage (3 à 5%) pour réguler le temps de prise du ciment. Sans gypse, le ciment prendrait instantanément au contact de l'eau." },
  { term: 'MPa (Mégapascal)', category: 'Propriété', definition: "Unité de mesure de la résistance à la compression du ciment. 1 MPa ≈ 10 kg/cm². Le CPJ 45 atteint 45 MPa, le CPJ 55 atteint 55 MPa à 28 jours." },
  { term: 'Finesse Blaine', category: 'Propriété', definition: "Indice de finesse du ciment mesuré en m²/kg. Plus la valeur est élevée, plus le ciment est fin et réactif. CPJ 45 : ≥ 350 m²/kg, CPJ 55 : ≥ 380 m²/kg." },
  { term: 'Temps de prise', category: 'Propriété', definition: "Délai entre le moment où l'eau est ajoutée au ciment et le début du durcissement. Début ≥ 45 min pour CPJ 45, ≥ 60 min pour CPJ 55. Fin de prise < 10h." },
  { term: 'Résistance à la compression', category: 'Propriété', definition: "Capacité du ciment durci à résister à une force d'écrasement. Mesurée à 7 et 28 jours. C'est le critère principal de classification (45 ou 55 MPa)." },
  { term: 'Broyage', category: 'Processus', definition: "Étape de fabrication consistant à moudre le clinker et les additions en une poudre fine. Le centre de broyage DAM à Dakhla a une capacité de 500 000 tonnes/an." },
  { term: 'Conditionnement vrac', category: 'Processus', definition: "Livraison du ciment en vrac par camion-citerne avec pompage direct dans le silo du chantier. Minimum 30 tonnes. Idéal pour les gros chantiers." },
  { term: 'Conditionnement sacs', category: 'Processus', definition: "Conditionnement du ciment en sacs de 50 kg, regroupés en palettes de 1 tonne (20 sacs). Adapté à la maçonnerie et aux petits chantiers." },
  { term: 'Big Bag', category: 'Processus', definition: "Conteneur souple de 1 tonne de ciment, manutentionnable par grue ou chariot élévateur. Idéal pour les chantiers moyens sans silo." },
  { term: 'NM 10.1.004', category: 'Norme', definition: "Norme marocaine définissant les spécifications des ciments. Elle classifie les ciments (CPJ 45, CPJ 55) et définit leurs exigences physiques et chimiques." },
  { term: 'EN 197-1', category: 'Norme', definition: "Norme européenne équivalente à NM 10.1.004. Définit la composition, les exigences et les critères de conformité des ciments courants en Europe." },
  { term: 'Béton armé', category: 'Technique', definition: "Matériau de construction combinant béton (résistant à la compression) et armatures en acier (résistant à la traction). Dosage recommandé : 350 kg/m³ de ciment CPJ 45 ou CPJ 55." },
  { term: 'Dosage', category: 'Technique', definition: "Quantité de ciment par m³ de béton, exprimée en kg/m³. Courant : 350 kg/m³ (béton armé), 400 kg/m³ (haute résistance), 300 kg/m³ (fondations), 250 kg/m³ (béton de propreté)." },
  { term: 'Exothermie', category: 'Propriété', definition: "Dégagement de chaleur lors de la prise du ciment (hydratation). Important dans les ouvrages massifs (barrages) pour éviter la fissuration thermique." },
  { term: 'Hydratation', category: 'Processus', definition: "Réaction chimique entre le ciment et l'eau provoquant le durcissement. Cette réaction libère de la chaleur (exothermie) et forme des hydrates qui donnent la résistance." },
  { term: 'Malaxage', category: 'Processus', definition: "Opération consistant à mélanger intimement le ciment, les granulats, l'eau et les adjuvants pour obtenir un béton homogène. Durée recommandée : 1 à 2 minutes après addition de l'eau." },
  { term: 'Cure du béton', category: 'Processus', definition: "Maintien de l'humidité du béton après coulage pour permettre une hydratation complète. Essentielle pour atteindre la résistance prévue. Durée minimum : 7 jours." },
];

const CATEGORIES: GlossaryTerm['category'][] = ['Produit', 'Technique', 'Norme', 'Processus', 'Propriété'];

const CATEGORY_COLORS: Record<GlossaryTerm['category'], string> = {
  'Produit': 'bg-[#1B3A5C]/10 text-[#1B3A5C]',
  'Technique': 'bg-[#C1272D]/10 text-[#C1272D]',
  'Norme': 'bg-[#E8B84B]/15 text-[#E8B84B]',
  'Processus': 'bg-[#0E7490]/10 text-[#0E7490]',
  'Propriété': 'bg-purple-100 text-purple-700',
};

export default async function LexiquePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const loc: 'fr' | 'en' | 'ar' = (locale === 'en' ? 'en' : locale === 'ar' ? 'ar' : 'fr') as 'fr' | 'en' | 'ar';
  const isFr = loc === 'fr';

  const schemas = [
    webPageSchema({
      name: isFr ? 'Lexique du Ciment — Dakhla Aménagement' : 'Cement Glossary — Dakhla Aménagement',
      description: isFr
        ? "Glossaire complet des termes du ciment : CPJ, clinker, MPa, Blaine, normes NM 10.1.004, EN 197-1."
        : 'Complete glossary of cement terms: CPJ, clinker, MPa, Blaine, NM 10.1.004, EN 197-1 standards.',
      path: '/lexique-ciment',
      locale: loc,
    }),
    breadcrumbSchema([{ name: isFr ? 'Lexique' : 'Glossary', path: '/lexique-ciment' }], loc),
    faqSchema([
      {
        question: 'Qu\'est-ce que le ciment CPJ 45 ?',
        answer: 'Le CPJ 45 (Ciment Portland Composé) est un ciment offrant une résistance de 45 MPa à 28 jours. Il est utilisé pour le béton armé courant, les dallages et les fondations. Il est conforme à la norme marocaine NM 10.1.004.',
      },
      {
        question: 'Qu\'est-ce que le clinker ?',
        answer: 'Le clinker est le matériau intermédiaire obtenu par cuisson du calcaire et de l\'argile à 1450°C. Broyé avec du gypse, il donne le ciment. Dakhla Aménagement importe et broie le clinker à son centre de broyage de Dakhla.',
      },
      {
        question: 'Quelle est la norme du ciment au Maroc ?',
        answer: 'La norme marocaine du ciment est la NM 10.1.004. Elle est équivalente à la norme européenne EN 197-1. Les ciments CPJ 45 et CPJ 55 de Dakhla Aménagement sont conformes à ces deux normes.',
      },
      {
        question: 'Que signifie MPa pour le ciment ?',
        answer: 'Le MPa (Mégapascal) est l\'unité de mesure de la résistance à la compression du ciment. Le CPJ 45 atteint 45 MPa et le CPJ 55 atteint 55 MPa à 28 jours. 1 MPa ≈ 10 kg/cm².',
      },
    ]),
  ];

  return (
    <>
      <JsonLdScript schema={schemas} />
      <Breadcrumbs items={[{ name: isFr ? 'Lexique' : 'Glossary', path: '/lexique-ciment' }]} locale={locale} />

      {/* Hero */}
      <section className="bg-gradient-to-br from-[#1B3A5C] to-[#0f1f33] text-white py-20 md:py-28">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <span className="inline-block px-4 py-1.5 bg-[#E8B84B]/20 text-[#E8B84B] text-sm font-medium rounded-full mb-6">
            {isFr ? 'Glossaire & Définitions' : 'Glossary & Definitions'}
          </span>
          <h1 className="text-[clamp(2rem,5vw,3.5rem)] font-bold leading-[1.1] mb-6">
            {isFr ? 'Lexique du ciment' : 'Cement glossary'}
          </h1>
          <p className="text-lg md:text-xl text-white/80 leading-relaxed mb-8 max-w-3xl">
            {isFr
              ? "Tous les termes du ciment et de la construction : CPJ, clinker, MPa, Blaine, temps de prise, normes NM 10.1.004 et EN 197-1. Définitions claires et précises."
              : 'All cement and construction terms: CPJ, clinker, MPa, Blaine, setting time, NM 10.1.004 and EN 197-1 standards. Clear and precise definitions.'}
          </p>
          <div className="relative max-w-xl">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#6B7280]" />
            <input
              type="text"
              id="glossary-search"
              placeholder={isFr ? 'Rechercher un terme...' : 'Search a term...'}
              className="w-full pl-12 pr-4 py-3 rounded-full bg-white text-[#1A1A2E] text-sm focus:outline-none focus:ring-2 focus:ring-[#E8B84B]"
            />
          </div>
        </div>
      </section>

      {/* Category filters */}
      <section className="py-8 bg-white border-b border-[#E5E7EB] sticky top-16 md:top-20 z-30">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <div className="flex gap-2 overflow-x-auto scrollbar-hide">
            <button data-category="all" className="glossary-filter px-4 py-2 text-sm font-medium rounded-full bg-[#1B3A5C] text-white whitespace-nowrap transition-colors">
              {isFr ? 'Tous' : 'All'} ({GLOSSARY.length})
            </button>
            {CATEGORIES.map((cat) => {
              const count = GLOSSARY.filter((g) => g.category === cat).length;
              return (
                <button key={cat} data-category={cat} className="glossary-filter px-4 py-2 text-sm font-medium rounded-full bg-[#F7F8FA] text-[#6B7280] hover:bg-[#1B3A5C] hover:text-white whitespace-nowrap transition-colors">
                  {cat} ({count})
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Glossary terms */}
      <section className="py-16 md:py-24 bg-[#F7F8FA]">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <div id="glossary-list" className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {GLOSSARY.map((item, i) => (
              <div
                key={i}
                data-term={item.term.toLowerCase()}
                data-category={item.category}
                className="glossary-card bg-white border border-[#E5E7EB] rounded-xl p-6 hover:shadow-lg hover:border-[#E8B84B] transition-all duration-300"
              >
                <div className="flex items-start justify-between mb-3 gap-3">
                  <h2 className="text-xl font-bold text-[#1B3A5C]">{item.term}</h2>
                  <span className={`px-2.5 py-0.5 text-xs font-semibold rounded-full whitespace-nowrap ${CATEGORY_COLORS[item.category]}`}>
                    {item.category}
                  </span>
                </div>
                <p className="text-sm text-[#6B7280] leading-relaxed">{item.definition}</p>
              </div>
            ))}
          </div>
          <p id="glossary-no-results" className="hidden text-center text-[#6B7280] py-12">
            {isFr ? 'Aucun terme trouvé.' : 'No terms found.'}
          </p>
        </div>
      </section>

      {/* SEO Content */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6 md:px-12">
          <h2 className="text-2xl md:text-3xl font-bold text-[#1B3A5C] mb-6">
            {isFr ? 'Comprendre le vocabulaire du ciment au Maroc' : 'Understanding cement vocabulary in Morocco'}
          </h2>
          <p className="text-[#1A1A2E]/80 leading-relaxed mb-4">
            {isFr
              ? "Le secteur cimentier utilise une terminologie technique précise. Que vous soyez professionnel du BTP, entrepreneur ou particulier, comprendre ces termes est essentiel pour choisir le bon ciment et garantir la qualité de vos ouvrages."
              : "The cement industry uses precise technical terminology. Whether you're a construction professional, entrepreneur or individual, understanding these terms is essential to choosing the right cement and ensuring the quality of your structures."}
          </p>
          <p className="text-[#1A1A2E]/80 leading-relaxed mb-4">
            {isFr
              ? "Au Maroc, le ciment est régi par la norme NM 10.1.004, équivalente à la norme européenne EN 197-1. Les deux principaux types de ciment produits par Dakhla Aménagement sont le CPJ 45 (45 MPa) et le CPJ 55 (55 MPa), adaptés à différents usages de construction."
              : "In Morocco, cement is governed by the NM 10.1.004 standard, equivalent to the European EN 197-1 standard. The two main types of cement produced by Dakhla Aménagement are CPJ 45 (45 MPa) and CPJ 55 (55 MPa), adapted to different construction uses."}
          </p>
          <p className="text-[#1A1A2E]/80 leading-relaxed mb-6">
            {isFr
              ? "Ce lexique couvre les produits (CPJ, clinker, gypse), les propriétés (MPa, Blaine, temps de prise), les processus (broyage, hydratation, cure) et les normes (NM 10.1.004, EN 197-1). Pour toute question supplémentaire, contactez notre équipe technique."
              : "This glossary covers products (CPJ, clinker, gypsum), properties (MPa, Blaine, setting time), processes (grinding, hydration, curing) and standards (NM 10.1.004, EN 197-1). For any further questions, contact our technical team."}
          </p>
          <div className="flex flex-wrap gap-3">
            <Link href={`/${locale}/ciment-maroc`} className="inline-flex items-center gap-1 text-sm font-medium text-[#C1272D] hover:gap-2 transition-all">
              {isFr ? '→ Guide complet du ciment Maroc' : '→ Complete Morocco cement guide'} <ArrowRight className="w-3.5 h-3.5" />
            </Link>
            <Link href={`/${locale}/faq`} className="inline-flex items-center gap-1 text-sm font-medium text-[#C1272D] hover:gap-2 transition-all">
              {isFr ? '→ FAQ ciment' : '→ Cement FAQ'} <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </section>

      <CtaBanner locale={locale} />

      {/* Client-side search/filter script */}
      <script
        dangerouslySetInnerHTML={{
          __html: `
            (function() {
              const search = document.getElementById('glossary-search');
              const filters = document.querySelectorAll('.glossary-filter');
              const cards = document.querySelectorAll('.glossary-card');
              const noResults = document.getElementById('glossary-no-results');
              let activeCategory = 'all';

              function update() {
                const query = (search?.value || '').toLowerCase().trim();
                let visible = 0;
                cards.forEach(card => {
                  const term = card.getAttribute('data-term') || '';
                  const category = card.getAttribute('data-category') || '';
                  const matchesSearch = !query || term.includes(query);
                  const matchesCategory = activeCategory === 'all' || category === activeCategory;
                  if (matchesSearch && matchesCategory) {
                    card.classList.remove('hidden');
                    visible++;
                  } else {
                    card.classList.add('hidden');
                  }
                });
                if (noResults) noResults.classList.toggle('hidden', visible > 0);
              }

              search?.addEventListener('input', update);
              filters.forEach(btn => {
                btn.addEventListener('click', () => {
                  activeCategory = btn.getAttribute('data-category') || 'all';
                  filters.forEach(f => {
                    f.classList.remove('bg-[#1B3A5C]', 'text-white');
                    f.classList.add('bg-[#F7F8FA]', 'text-[#6B7280]');
                  });
                  btn.classList.remove('bg-[#F7F8FA]', 'text-[#6B7280]');
                  btn.classList.add('bg-[#1B3A5C]', 'text-white');
                  update();
                });
              });
            })();
          `,
        }}
      />
    </>
  );
}
