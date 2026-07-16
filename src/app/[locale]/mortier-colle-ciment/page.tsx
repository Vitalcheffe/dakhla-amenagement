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
import { RelatedLinks, CtaBanner } from '@/components/shared/RelatedLinks';
import { RelatedArticles } from '@/components/shared/RelatedArticles';
import { CheckCircle, ArrowRight, Factory, Beaker, Truck, Grid2x2, Droplet, Layers, Building2, Sun } from 'lucide-react';

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
      path: '/mortier-colle-ciment',
      title: 'Cement Tile Adhesive Mortar Morocco — C1, C2 | SDAD',
      description:
        'Cement-based tile adhesive mortar in Morocco. Bonding tiles, faience, natural stone. Dosage, price, application. Standards-compliant. Free quote.',
      keywords: [
        'tile adhesive mortar',
        'cement tile adhesive',
        'mortar-colle ciment',
        'C1 C2 tile adhesive',
        'carrelage colle Maroc',
        'faience adhesive',
        ...KEYWORDS.products,
        ...KEYWORDS.application,
      ],
    });
  }

  return buildMetadata({
    locale: 'fr',
    path: '/mortier-colle-ciment',
    title: 'Mortier-Colle Ciment Maroc — Carrelage, Faïence | SDAD',
    description:
      'Mortier-colle à base de ciment au Maroc. Collage carrelage, faïence, pierre. Dosage, prix, application. Conforme normes. Devis gratuit.',
    keywords: [
      'mortier-colle ciment',
      'colle carrelage Maroc',
      'mortier colle carrelage',
      'colle faïence',
      'mortier colle C1 C2',
      'prix colle carrelage',
      ...KEYWORDS.products,
      ...KEYWORDS.application,
    ],
  });
}

export default async function MortierColleCimentPage({
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
          question: 'Qu’est-ce qu’un mortier-colle à base de ciment ?',
          answer:
            "Un mortier-colle à base de ciment est un mélange sec de ciment (CPJ 45 ou CPA), de sable fin, de fillers et d’adjuvants (résines rédispersables, éthers de cellulose, fibres) auquel on ajoute uniquement de l’eau au moment de l’emploi. Il sert à coller carreaux céramiques, faïence, grès cérame, pierre naturelle, marbre et verre sur tout support stable (béton, enduit, chape, ancien carrelage, cloison). Il se distingue du mortier de ciment traditionnel par sa plasticité, son adhérence et sa résistance au cisaillement, garanties par les adjuvants.",
        },
        {
          question: 'Quelle différence entre mortier-colle C1 et C2 ?',
          answer:
            "La classification C1/C2 est définie par la norme européenne EN 12004. Un mortier-colle C1 (adhérence ≥ 0,5 MPa) convient aux carrelages intérieurs classiques sur supports stables : faïence de cuisine, salle de bain, carrelage mural. Un mortier-colle C2 (adhérence ≥ 1,0 MPa) est recommandé pour les carrelages extérieurs, les grand format (> 600×600 mm), le grès cérame, les piscines, les balcons et les zones à fort trafic. Le C2 existe en déclinaisons : C2TE (temps ouvert allongé) et C2TE S1/S2 (déformable, pour supports soumis à des mouvements).",
        },
        {
          question: 'Quel dosage d’eau pour un mortier-colle ciment ?',
          answer:
            "Le dosage d’eau est spécifique à chaque produit et indiqué sur l’emballage (généralement 5 à 7 litres d’eau pour 20 kg de poudre, soit environ 25-30 % d’eau en poids). Ne jamais surdoser l’eau : cela réduit l’adhérence, allonge le séchage et favorise le faïençage. Le mortier-colle doit avoir une consistance « pâteuse » qui tient à la truelle sans couler. Gâchez en verseant la poudre dans l’eau (et non l’inverse), malaxez à basse vitesse, laissez reposer 5-10 min (maturation) puis remalaxez avant application. La quantité de poudre utilisée couvre 3-6 m² par sac de 25 kg selon le peigne utilisé.",
        },
        {
          question: 'Quel prix pour un mortier-colle au Maroc ?',
          answer:
            "Le prix d’un mortier-colle ciment au Maroc varie selon la classe (C1, C2, C2TE S1) et la marque. Comptez en moyenne 70-90 DH par sac de 25 kg pour un C1 standard, 95-130 DH pour un C2, et 140-180 DH pour un C2TE S1 ou S2 haute performance. En vrac ou palette complète (40-48 sacs), des remises de 10-15 % sont possibles. Pour un chantier carrelage complet (sol + murs), prévoyez 4-6 kg de mortier-colle par m² selon le format du carreau. Demandez un devis gratuit pour un tarif personnalisé.",
        },
        {
          question: 'Peut-on coller tous types de carrelage avec un mortier-colle ciment ?',
          answer:
            "Le mortier-colle ciment convient à la grande majorité des carrelages céramiques, faïences, grès et pierres naturelles poreuses. Pour le grès cérame très dense (faible absorption), le verre, le marbre ou la pierre à faible absorption, un mortier-colle spécifique (C2 + résine) est recommandé, voire une colle à deux composants (résine + durcisseur). Pour les piscines et zones constamment immergées, utilisez un mortier-colle C2 classé E (étanche) ou I (immergé). En cas de doute, consultez le DTU 52-2 et notre équipe technique.",
        },
      ]
    : [
        {
          question: 'What is a cement-based tile adhesive mortar?',
          answer:
            'A cement-based tile adhesive mortar is a dry mix of cement (CPJ 45 or CPA), fine sand, fillers and admixtures (redispersible resins, cellulose ethers, fibers) to which only water is added at the time of use. It is used to bond ceramic tiles, faience, stoneware, natural stone, marble and glass to any stable substrate (concrete, render, screed, old tile, partition). It differs from traditional cement mortar by its plasticity, adhesion and shear strength, guaranteed by the admixtures.',
        },
        {
          question: 'What is the difference between C1 and C2 tile adhesive?',
          answer:
            'The C1/C2 classification is defined by the European standard EN 12004. A C1 tile adhesive (adhesion ≥ 0.5 MPa) is suitable for standard interior tiling on stable substrates: kitchen faience, bathroom, wall tile. A C2 tile adhesive (adhesion ≥ 1.0 MPa) is recommended for exterior tiling, large format (> 600×600 mm), stoneware, swimming pools, balconies and high-traffic areas. C2 comes in variants: C2TE (extended open time) and C2TE S1/S2 (deformable, for substrates subject to movement).',
        },
        {
          question: 'What water dosage for a cement tile adhesive?',
          answer:
            'The water dosage is specific to each product and indicated on the packaging (usually 5 to 7 liters of water for 20 kg of powder, about 25-30% water by weight). Never overdose water: this reduces adhesion, lengthens drying and favors crazing. The tile adhesive should have a "pasty" consistency that holds to the trowel without running. Mix by pouring the powder into the water (not the other way around), mix at low speed, let it rest 5-10 min (maturation) then remix before application. The amount of powder used covers 3-6 m² per 25 kg bag depending on the trowel used.',
        },
        {
          question: 'What price for tile adhesive in Morocco?',
          answer:
            'The price of a cement tile adhesive in Morocco varies according to the class (C1, C2, C2TE S1) and the brand. Expect an average of 70-90 DH per 25 kg bag for standard C1, 95-130 DH for C2, and 140-180 DH for high-performance C2TE S1 or S2. In bulk or full pallet (40-48 bags), discounts of 10-15% are possible. For a complete tiling project (floor + walls), plan 4-6 kg of tile adhesive per m² depending on the tile format. Request a free quote for a personalized rate.',
        },
        {
          question: 'Can all types of tiles be bonded with cement tile adhesive?',
          answer:
            'Cement tile adhesive is suitable for most ceramic tiles, faience, stoneware and porous natural stones. For very dense stoneware (low absorption), glass, marble or low-absorption stone, a specific tile adhesive (C2 + resin) is recommended, or even a two-component adhesive (resin + hardener). For swimming pools and constantly immersed areas, use a C2 tile adhesive classified E (waterproof) or I (immersed). In case of doubt, consult DTU 52-2 and our technical team.',
        },
      ];

  const classesRows = isFr
    ? [
        { cls: 'C1', use: 'Intérieur, supports stables, carrelage ≤ 600×600 mm', adhesion: '≥ 0,5 MPa' },
        { cls: 'C1 TE', use: 'Intérieur, temps ouvert allongé (chaleur, séchage rapide)', adhesion: '≥ 0,5 MPa' },
        { cls: 'C2', use: 'Extérieur, grand format, grès cérame, piscines, balcons', adhesion: '≥ 1,0 MPa' },
        { cls: 'C2 TE', use: 'Extérieur grand format, temps ouvert allongé', adhesion: '≥ 1,0 MPa' },
        { cls: 'C2 TE S1', use: 'Supports soumis à des mouvements (chauffant, plancher bois)', adhesion: '≥ 1,0 MPa, déformable' },
        { cls: 'C2 TE S2', use: 'Supports très déformables, dalles sur plot, terrasses', adhesion: '≥ 1,0 MPa, très déformable' },
      ]
    : [
        { cls: 'C1', use: 'Interior, stable substrates, tile ≤ 600×600 mm', adhesion: '≥ 0.5 MPa' },
        { cls: 'C1 TE', use: 'Interior, extended open time (heat, fast drying)', adhesion: '≥ 0.5 MPa' },
        { cls: 'C2', use: 'Exterior, large format, stoneware, pools, balconies', adhesion: '≥ 1.0 MPa' },
        { cls: 'C2 TE', use: 'Exterior large format, extended open time', adhesion: '≥ 1.0 MPa' },
        { cls: 'C2 TE S1', use: 'Substrates subject to movement (heated, wood floor)', adhesion: '≥ 1.0 MPa, deformable' },
        { cls: 'C2 TE S2', use: 'Very deformable substrates, slab on pedestal, terraces', adhesion: '≥ 1.0 MPa, very deformable' },
      ];

  const applications = isFr
    ? [
        { icon: Grid2x2, title: 'Carrelage mural', desc: 'Faïence cuisine, salle de bain, carrelage mural intérieur.' },
        { icon: Layers, title: 'Carrelage sol', desc: 'Grès cérame, carreaux ciment, sol intérieur et extérieur.' },
        { icon: Building2, title: 'Grand format', desc: 'Dalles ≥ 600×600 mm, plaques de marbre, plancher chauffant.' },
        { icon: Droplet, title: 'Zones humides', desc: 'Piscines, douches à l’italienne, balcons, terrasses.' },
      ]
    : [
        { icon: Grid2x2, title: 'Wall tile', desc: 'Kitchen faience, bathroom, interior wall tile.' },
        { icon: Layers, title: 'Floor tile', desc: 'Stoneware, cement tiles, indoor and outdoor floor.' },
        { icon: Building2, title: 'Large format', desc: 'Slabs ≥ 600×600 mm, marble plates, heated floor.' },
        { icon: Droplet, title: 'Wet areas', desc: 'Swimming pools, Italian showers, balconies, terraces.' },
      ];

  const features = isFr
    ? [
        { icon: Factory, title: 'Production locale', desc: 'Mortier-colle formulé à base de ciment DAM (CPJ 45/55)' },
        { icon: Beaker, title: 'Conformité EN 12004', desc: 'Classes C1, C2, C2TE, C2TE S1/S2 — tests laboratoire' },
        { icon: Sun, title: 'Adapté au climat marocain', desc: 'Formules temps ouvert allongé pour chantiers sud marocain' },
        { icon: Truck, title: 'Livraison flexible', desc: 'Sacs 25 kg, palettes complètes, vrac silo sur demande' },
      ]
    : [
        { icon: Factory, title: 'Local production', desc: 'Tile adhesive formulated from DAM cement (CPJ 45/55)' },
        { icon: Beaker, title: 'EN 12004 compliance', desc: 'Classes C1, C2, C2TE, C2TE S1/S2 — lab tests' },
        { icon: Sun, title: 'Adapted to Moroccan climate', desc: 'Extended open time formulas for southern Morocco sites' },
        { icon: Truck, title: 'Flexible delivery', desc: '25 kg bags, full pallets, silo bulk on request' },
      ];

  const relatedLinks = isFr
    ? [
        { title: 'Ciment CPJ 45', description: 'Ciment Portland Composé 45 MPa — base du mortier-colle C1/C2. Dès 1 500 DH/T.', href: '/cpj-45' },
        { title: 'Ciment CPJ 55', description: 'Ciment Portland Composé 55 MPa — base du mortier-colle haute performance C2. Dès 1 600 DH/T.', href: '/cpj-55' },
        { title: 'Prix du ciment au Maroc', description: 'Tarifs ciment CPJ 45, CPJ 55 et mortiers-colle associés.', href: '/prix-ciment' },
        { title: 'Demander un devis', description: 'Devis gratuit sous 24h pour mortier-colle et ciments DAM.', href: '/devis' },
      ]
    : [
        { title: 'CPJ 45 Cement', description: 'Composite Portland 45 MPa cement — base for C1/C2 tile adhesive. From 1,500 DH/T.', href: '/cpj-45' },
        { title: 'CPJ 55 Cement', description: 'Composite Portland 55 MPa cement — base for C2 high-performance tile adhesive. From 1,600 DH/T.', href: '/cpj-55' },
        { title: 'Cement Prices in Morocco', description: 'CPJ 45, CPJ 55 cement prices and related tile adhesives.', href: '/prix-ciment' },
        { title: 'Request a Quote', description: 'Free quote within 24h for tile adhesive and DAM cements.', href: '/devis' },
      ];

  const schemas = [
    webPageSchema({
      name: isFr ? 'Mortier-Colle Ciment au Maroc' : 'Cement Tile Adhesive in Morocco',
      description: isFr
        ? 'Mortier-colle à base de ciment au Maroc. Collage carrelage, faïence, pierre. Classes C1, C2, C2TE S1/S2. Conforme EN 12004.'
        : 'Cement-based tile adhesive in Morocco. Tile, faience, stone bonding. Classes C1, C2, C2TE S1/S2. EN 12004 compliant.',
      path: '/mortier-colle-ciment',
      locale: loc,
    }),
    breadcrumbSchema([{ name: isFr ? 'Mortier-colle ciment' : 'Cement tile adhesive', path: '/mortier-colle-ciment' }], loc),
    serviceSchema({
      name: isFr ? 'Mortier-Colle Ciment — Production et Fourniture' : 'Cement Tile Adhesive — Production & Supply',
      description: isFr
        ? 'Production et livraison de mortier-colle à base de ciment (classes C1, C2, C2TE, S1, S2) au Maroc. Sacs 25 kg et vrac.'
        : 'Production and delivery of cement-based tile adhesive (classes C1, C2, C2TE, S1, S2) in Morocco. 25 kg bags and bulk.',
      path: '/mortier-colle-ciment',
      locale: loc,
      serviceType: 'Cement tile adhesive manufacturing and supply',
    }),
    faqSchema(faqItems),
    speakableSchema({
      path: '/mortier-colle-ciment',
      locale: loc,
      cssSelectors: ['h1', '.hero-title', '.faq-question'],
    }),
  ];

  return (
    <>
      <JsonLdScript schema={schemas} />
      <Breadcrumbs items={[{ name: isFr ? 'Mortier-colle ciment' : 'Cement tile adhesive', path: '/mortier-colle-ciment' }]} locale={locale} />

      {/* Hero */}
      <section className="bg-gradient-to-br from-[#1B3A5C] to-[#0f1f33] text-white py-20 md:py-28">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <div className="max-w-4xl">
            <span className="inline-block px-4 py-1.5 bg-[#E8B84B]/20 text-[#E8B84B] text-sm font-medium rounded-full mb-6">
              {isFr ? 'Mortier-colle ciment — Carrelage & Faïence' : 'Cement tile adhesive — Tile & Faience'}
            </span>
            <h1 className="hero-title text-[clamp(2rem,5vw,3.5rem)] font-bold leading-[1.1] mb-6">
              {isFr ? 'Mortier-Colle Ciment au Maroc — Carrelage, Faïence' : 'Cement Tile Adhesive in Morocco — Tile, Faience'}
            </h1>
            <p className="text-lg md:text-xl text-white/80 leading-relaxed mb-8 max-w-3xl">
              {isFr
                ? 'Mortier-colle à base de ciment CPJ 45/55 pour le collage de carrelage, faïence, grès cérame et pierre naturelle. Classes C1, C2, C2TE, C2TE S1/S2 conformes à la norme EN 12004. Disponible en sacs 25 kg, palettes et vrac silo. Livraison dans tout le Sud marocain et la Mauritanie.'
                : 'Cement-based tile adhesive (CPJ 45/55) for bonding tiles, faience, stoneware and natural stone. Classes C1, C2, C2TE, C2TE S1/S2 compliant with EN 12004. Available in 25 kg bags, pallets and silo bulk. Delivery across Southern Morocco and Mauritania.'}
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

      {/* Applications */}
      <section className="py-16 md:py-24 bg-[#F7F8FA]">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1B3A5C] mb-4 text-center">
            {isFr ? 'Applications du mortier-colle ciment' : 'Cement tile adhesive applications'}
          </h2>
          <p className="text-center text-[#6B7280] mb-12 max-w-2xl mx-auto">
            {isFr
              ? 'Le mortier-colle ciment couvre tous les besoins de pose carrelage, du mur intérieur à la terrasse extérieure.'
              : 'Cement tile adhesive covers all tiling needs, from interior wall to exterior terrace.'}
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

      {/* Classes table */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1B3A5C] mb-4 text-center">
            {isFr ? 'Classes de mortier-colle selon EN 12004' : 'Tile adhesive classes per EN 12004'}
          </h2>
          <p className="text-center text-[#6B7280] mb-12 max-w-2xl mx-auto">
            {isFr
              ? 'Le choix de la classe dépend du type de carrelage, du support, de la zone (intérieur/extérieur) et du format. Respectez la norme EN 12004 et le DTU 52-2.'
              : 'The choice of class depends on the tile type, substrate, area (interior/exterior) and format. Comply with EN 12004 and DTU 52-2.'}
          </p>
          <div className="overflow-x-auto">
            <table className="w-full max-w-4xl mx-auto border-collapse bg-white rounded-xl overflow-hidden shadow-sm">
              <thead>
                <tr className="bg-[#1B3A5C] text-white">
                  <th className="text-left py-4 px-6 font-semibold">{isFr ? 'Classe' : 'Class'}</th>
                  <th className="text-left py-4 px-6 font-semibold">{isFr ? 'Usage' : 'Use'}</th>
                  <th className="text-left py-4 px-6 font-semibold">{isFr ? 'Adhérence' : 'Adhesion'}</th>
                </tr>
              </thead>
              <tbody>
                {classesRows.map((row, i) => (
                  <tr key={i} className="border-b border-[#E5E7EB] last:border-0 hover:bg-[#F7F8FA] transition-colors">
                    <td className="py-3.5 px-6 text-[#C1272D] font-bold">{row.cls}</td>
                    <td className="py-3.5 px-6 text-[#6B7280] font-medium">{row.use}</td>
                    <td className="py-3.5 px-6 text-[#1A1A2E] font-semibold">{row.adhesion}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Long-form content */}
      <section className="py-16 md:py-24 bg-[#F7F8FA]">
        <div className="max-w-4xl mx-auto px-6 md:px-12">
          <div className="prose prose-lg max-w-none">
            <h2 className="text-3xl font-bold text-[#1B3A5C] mb-6">
              {isFr ? 'Le mortier-colle à base de ciment : guide complet' : 'Cement-based tile adhesive: complete guide'}
            </h2>
            <p className="text-[#1A1A2E]/80 leading-relaxed mb-6">
              {isFr
                ? "Le mortier-colle à base de ciment est un produit sec prêt à gâcher, composé de ciment Portland (CPJ 45 ou CPA), de sable fin calibré, de fillers minéraux et d’adjuvants (résines rédispersables, éthers de cellulose, fibres). Il remplace avantageusement le mortier traditionnel pour le collage des carrelages : meilleure adhérence, application plus rapide, pose fine, reprise de planéité, et performances mécaniques supérieures. Au Maroc, son usage est aujourd’hui la norme pour tous les chantiers de carrelage sérieux, en intérieur comme en extérieur. La classification C1/C2 de la norme EN 12004 (et le DTU 52-2) permet de choisir le bon produit selon l’application."
                : "Cement-based tile adhesive is a ready-to-mix dry product, composed of Portland cement (CPJ 45 or CPA), calibrated fine sand, mineral fillers and admixtures (redispersible resins, cellulose ethers, fibers). It advantageously replaces traditional mortar for tile bonding: better adhesion, faster application, thin bed, planimetry recovery, and superior mechanical performance. In Morocco, its use is now the standard for all serious tiling sites, indoors and outdoors. The C1/C2 classification of EN 12004 standard (and DTU 52-2) allows choosing the right product according to the application."}
            </p>

            <h3 className="text-2xl font-bold text-[#1B3A5C] mt-10 mb-4">
              {isFr ? 'Composition et formulation' : 'Composition and formulation'}
            </h3>
            <p className="text-[#1A1A2E]/80 leading-relaxed mb-6">
              {isFr
                ? "Un mortier-colle ciment de qualité contient environ 30-40 % de ciment (CPJ 45 ou CPA), 50-60 % de sable fin 0/0,5 mm et fillers, et 3-8 % d’adjuvants. Les résines rédispersables (VAC/EVA/SA) assurent l’adhérence et la déformabilité. Les éthers de cellulose contrôlent la rétention d’eau et le temps ouvert. Les fibres (PP, PVA) améliorent la cohésion et la résistance à la fissuration. Le ciment utilisé provient de notre centre de broyage de Dakhla (CPJ 45 ou CPJ 55 selon la classe visée), garantissant une traçabilité totale et une fraîcheur optimale."
                : "A quality cement tile adhesive contains about 30-40% cement (CPJ 45 or CPA), 50-60% fine sand 0/0.5 mm and fillers, and 3-8% admixtures. Redispersible resins (VAC/EVA/SA) ensure adhesion and deformability. Cellulose ethers control water retention and open time. Fibers (PP, PVA) improve cohesion and crack resistance. The cement used comes from our Dakhla grinding plant (CPJ 45 or CPJ 55 depending on the target class), ensuring full traceability and optimal freshness."}
            </p>

            <h3 className="text-2xl font-bold text-[#1B3A5C] mt-10 mb-4">
              {isFr ? 'Classes C1, C2 et déclinaisons TE, S1, S2' : 'C1, C2 classes and TE, S1, S2 variants'}
            </h3>
            <p className="text-[#1A1A2E]/80 leading-relaxed mb-6">
              {isFr
                ? "La norme EN 12004 définit deux classes principales : C1 (adhérence ≥ 0,5 MPa) pour les applications intérieures courantes et C2 (adhérence ≥ 1,0 MPa) pour les applications exigeantes (extérieur, grand format, grès cérame, piscine). Les déclinaisons TE (Extended open time) prolongent le temps ouvert, utile en climat chaud marocain où la surface sèche rapidement. Les déclinaisons S1 et S2 indiquent une capacité de déformation (pour supports soumis à des mouvements : plancher chauffant, plancher bois, dalles sur plot). Le choix se fait selon le carrelage, le support, la zone d’application et le format. Pour le Sud marocain (climat chaud), privilégiez systématiquement une classe TE pour conserver un temps ouvert suffisant."
                : "The EN 12004 standard defines two main classes: C1 (adhesion ≥ 0.5 MPa) for standard interior applications and C2 (adhesion ≥ 1.0 MPa) for demanding applications (exterior, large format, stoneware, swimming pool). TE (Extended open time) variants extend the open time, useful in the hot Moroccan climate where the surface dries quickly. S1 and S2 variants indicate deformability capacity (for substrates subject to movement: heated floor, wood floor, slabs on pedestals). The choice is based on the tile, substrate, application area and format. For Southern Morocco (hot climate), systematically prefer a TE class to maintain sufficient open time."}
            </p>

            <h3 className="text-2xl font-bold text-[#1B3A5C] mt-10 mb-4">
              {isFr ? 'Application et bonnes pratiques' : 'Application and best practices'}
            </h3>
            <ul className="space-y-3 mb-6">
              {(isFr
                ? [
                    'Préparer le support : plan, propre, sec, cohésif, débarrassé de poussière et de cure',
                    'Gâcher à l’eau propre en respectant le dosage indiqué sur l’emballage (5-7 L pour 20 kg)',
                    'Laisser maturation 5-10 min puis remalaxer — ne jamais réhumidifier un mortier-colle',
                    'Appliquer à la truelle crantée (peigne 4×4 sol, 6×6 grand format, 10×10 extérieur)',
                    'Peigner en croisant les passes et poser le carrelage en moins de 20 min (temps ouvert)',
                    'Contrôler l’adhérence en soulevant quelques carreaux après pose (surface encollée ≥ 65 %)',
                    'Ne pas circuler pendant 24h et joints après 24-48h selon classe et conditions',
                  ]
                : [
                    'Prepare the substrate: flat, clean, dry, cohesive, free of dust and curing agent',
                    'Mix with clean water respecting the dosage indicated on the packaging (5-7 L for 20 kg)',
                    'Allow maturation 5-10 min then remix — never re-wet a tile adhesive',
                    'Apply with a notched trowel (4×4 floor, 6×6 large format, 10×10 exterior)',
                    'Comb in crossed passes and lay the tile within 20 min (open time)',
                    'Check adhesion by lifting a few tiles after laying (bonded surface ≥ 65%)',
                    'Do not walk on for 24h and joints after 24-48h depending on class and conditions',
                  ]
              ).map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-[#1A1A2E]/80">
                  <CheckCircle className="w-5 h-5 text-[#E8B84B] shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <h3 className="text-2xl font-bold text-[#1B3A5C] mt-10 mb-4">
              {isFr ? 'Prix du mortier-colle au Maroc' : 'Tile adhesive price in Morocco'}
            </h3>
            <p className="text-[#1A1A2E]/80 leading-relaxed mb-6">
              {isFr
                ? "Le prix du mortier-colle ciment au Maroc varie selon la classe et la marque. Comptez 70-90 DH/sac de 25 kg pour un C1 standard, 95-130 DH pour un C2, et 140-180 DH pour un C2TE S1 ou S2 haute performance. En palette complète (40-48 sacs), des remises de 10-15 % sont possibles. Pour un chantier carrelage complet (sol + murs), prévoyez environ 4-6 kg de mortier-colle par m² selon le format du carreau et le peigne utilisé. Le mortier-colle étant formulé à partir de ciment CPJ 45/55, son prix est corrélé à celui du ciment — consultez notre page prix ciment pour le contexte. Demandez un devis gratuit pour un tarif personnalisé selon votre projet."
                : "The price of cement tile adhesive in Morocco varies according to class and brand. Expect 70-90 DH/25 kg bag for standard C1, 95-130 DH for C2, and 140-180 DH for high-performance C2TE S1 or S2. In full pallets (40-48 bags), discounts of 10-15% are possible. For a complete tiling project (floor + walls), plan about 4-6 kg of tile adhesive per m² depending on the tile format and trowel used. As tile adhesive is formulated from CPJ 45/55 cement, its price is correlated to that of cement — see our cement price page for context. Request a free quote for a personalized rate according to your project."}
            </p>
            <div className="bg-white border border-[#E5E7EB] rounded-xl p-6 my-6 flex flex-col gap-2">
              <Link href={`/${locale}/cpj-45`} className="inline-flex items-center gap-2 text-[#C1272D] font-medium hover:gap-3 transition-all">
                {isFr ? '→ Ciment CPJ 45 — base du mortier-colle C1' : '→ CPJ 45 cement — base for C1 tile adhesive'}
              </Link>
              <Link href={`/${locale}/cpj-55`} className="inline-flex items-center gap-2 text-[#C1272D] font-medium hover:gap-3 transition-all">
                {isFr ? '→ Ciment CPJ 55 — base du mortier-colle C2' : '→ CPJ 55 cement — base for C2 tile adhesive'}
              </Link>
              <Link href={`/${locale}/prix-ciment`} className="inline-flex items-center gap-2 text-[#C1272D] font-medium hover:gap-3 transition-all">
                {isFr ? '→ Guide complet des prix du ciment' : '→ Complete cement price guide'}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-3xl mx-auto px-6 md:px-12">
          <h2 className="text-3xl font-bold text-[#1B3A5C] mb-8 text-center">
            {isFr ? 'Questions fréquentes sur le mortier-colle ciment' : 'Frequently asked questions about cement tile adhesive'}
          </h2>
          <div className="space-y-4">
            {faqItems.map((item, i) => (
              <details key={i} className="group bg-[#F7F8FA] border border-[#E5E7EB] rounded-xl p-5">
                <summary className="faq-question font-semibold text-[#1B3A5C] cursor-pointer flex items-center justify-between">
                  {item.question}
                  <span className="text-[#E8B84B] group-open:rotate-180 transition-transform">⌄</span>
                </summary>
                <p className="mt-3 text-[#1A1A2E]/70 leading-relaxed text-sm">{item.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <RelatedLinks links={relatedLinks} locale={locale} title={isFr ? 'Ressources liées' : 'Related resources'} />
      <RelatedArticles
        articleSlugs={['calculer-quantite-ciment', 'beton-arme-maroc', '5-erreurs-ciment']}
        locale={locale}
      />
      <CtaBanner
        locale={locale}
        title={isFr ? 'Besoin de mortier-colle ciment au Maroc ?' : 'Need cement tile adhesive in Morocco?'}
        subtitle={
          isFr
            ? 'Devis gratuit sous 24h. Mortier-colle C1, C2, C2TE S1/S2 — sacs 25 kg et palettes. Livraison dans tout le Sud marocain et la Mauritanie.'
            : 'Free quote within 24h. C1, C2, C2TE S1/S2 tile adhesive — 25 kg bags and pallets. Delivery across Southern Morocco and Mauritania.'
        }
        buttonText={isFr ? 'Demander un devis gratuit' : 'Request a free quote'}
      />
    </>
  );
}
