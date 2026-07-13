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
import { CheckCircle, ArrowRight, Factory, Beaker, Truck, Layers, Brush, Building2, HardHat, Droplet } from 'lucide-react';

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
      path: '/mortier-ciment-maroc',
      title: 'Cement Mortar Morocco — Composition, Dosage, Price | SDAD',
      description:
        'Cement mortar in Morocco: composition (cement + sand + water), dosage 300-500 kg/m³, price, uses (masonry, render, screed). Free quote.',
      keywords: [
        'cement mortar Morocco',
        'mortar composition',
        'mortar dosage',
        'mortier ciment Maroc',
        'masonry mortar',
        'render mortar',
        'screed mortar',
        ...KEYWORDS.products,
        ...KEYWORDS.application,
      ],
    });
  }

  return buildMetadata({
    locale: 'fr',
    path: '/mortier-ciment-maroc',
    title: 'Mortier Ciment Maroc — Composition, Dosage, Prix | SDAD',
    description:
      'Mortier de ciment au Maroc: composition (ciment + sable + eau), dosage 300-500 kg/m³, prix, usages (maçonnerie, enduit, chape). Devis gratuit.',
    keywords: [
      'mortier ciment Maroc',
      'composition mortier',
      'dosage mortier',
      'mortier maçonnerie',
      'mortier enduit',
      'mortier chape',
      'prix mortier Maroc',
      ...KEYWORDS.products,
      ...KEYWORDS.application,
    ],
  });
}

export default async function MortierCimentMarocPage({
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
          question: 'Quelle est la composition d’un mortier de ciment ?',
          answer:
            "Un mortier de ciment se compose de trois ingrédients de base : du ciment (CPJ 45 ou CPJ 55), du sable (0/2 à 0/4 mm) et de l’eau. Pour un mortier bâtard, on ajoute de la chaux. Le dosage classique pour la maçonnerie courante est de 350 kg de ciment pour 1 m³ de sable (soit un volume de 1 volume de ciment pour 3 à 4 volumes de sable). La quantité d’eau est ajustée pour obtenir la consistance souhaitée (maniable pour maçonnerie, plus fluide pour enduit).",
        },
        {
          question: 'Quel dosage de ciment pour un mortier de chape ?',
          answer:
            "Pour une chape de finition (épaisseur 4-5 cm sur dalle béton), le dosage recommandé est de 300 à 350 kg de ciment par m³ de sable sec (dosage dit « 300-350 kg/m³ »). Pour une chape industrielle ou un ravoirage très sollicité, montez à 400-450 kg/m³. Un dosage trop faible (sous 250 kg/m³) donne une chape poudreuse et non durable ; un dosage trop élevé (au-delà de 500 kg/m³) provoque un retrait excessif et des fissurations. Utilisez impérativement du sable 0/4 concassé et lavé.",
        },
        {
          question: 'Quelle différence entre mortier, béton et mortier-colle ?',
          answer:
            "Le mortier est un mélange ciment + sable + eau (pas de gravier) utilisé pour la maçonnerie, les enduits et les chapes. Le béton ajoute des gravillons (granulats > 5 mm) pour obtenir une résistance structurelle (poutres, dalles, fondations). Le mortier-colle, ou colle à carrelage, est un mortier formulé avec des adjuvants (hydrophobes, résines) pour coller carrelage et faïence — voir notre page dédiée au mortier-colle. Pour vos ouvrages structurels en béton armé, consultez nos ciments CPJ 45 et CPJ 55.",
        },
        {
          question: 'Quel est le prix d’un mortier de ciment au Maroc ?',
          answer:
            "Le prix d’un mortier de ciment dépend du dosage et des constituants. Pour un mortier à 350 kg/m³ de ciment CPJ 45, comptez environ 750-850 DH/m³ de mortier prêt à gâcher (ciment + sable + eau, hors main d’œuvre). Le sable 0/4 coûte 80-120 DH/T, le ciment CPJ 45 1 500 DH/T. Pour un mortier industriel sec pré-dosé en sac (type Render/Screed), prévoyez 4-6 DH/kg. Demandez un devis gratuit pour un tarif personnalisé selon votre projet.",
        },
        {
          question: 'Peut-on livrer du mortier prêt à l’emploi au Maroc ?',
          answer:
            "Oui, pour les chantiers moyens et gros, le mortier peut être livré prêt à gâcher par camion-toupie (centrale à béton DAM) avec pompage possible jusqu’au lieu d’application. Pour les petits chantiers, nous proposons du mortier sec pré-dosé en sacs 25-40 kg (il suffit d’ajouter l’eau) ou du ciment en sacs 50 kg avec sable livré séparément. Le choix dépend du volume, de l’accessibilité et des délais. Contactez-nous pour une solution adaptée.",
        },
      ]
    : [
        {
          question: 'What is the composition of cement mortar?',
          answer:
            'A cement mortar consists of three basic ingredients: cement (CPJ 45 or CPJ 55), sand (0/2 to 0/4 mm) and water. For a bastard mortar, lime is added. The standard dosage for masonry is 350 kg of cement per 1 m³ of sand (i.e. 1 volume of cement for 3 to 4 volumes of sand). The water quantity is adjusted to achieve the desired consistency (workable for masonry, more fluid for render).',
        },
        {
          question: 'What cement dosage for a screed mortar?',
          answer:
            'For a finishing screed (4-5 cm thickness on concrete slab), the recommended dosage is 300 to 350 kg of cement per m³ of dry sand (so-called "300-350 kg/m³" dosage). For industrial screeds or heavily loaded fill, increase to 400-450 kg/m³. Too low a dosage (under 250 kg/m³) gives a dusty and non-durable screed; too high (over 500 kg/m³) causes excessive shrinkage and cracking. Always use 0/4 crushed and washed sand.',
        },
        {
          question: 'What is the difference between mortar, concrete and tile adhesive?',
          answer:
            'Mortar is a cement + sand + water mix (no gravel) used for masonry, render and screeds. Concrete adds gravels (aggregates > 5 mm) for structural strength (beams, slabs, foundations). Tile adhesive mortar, or tile glue, is a mortar formulated with admixtures (water repellents, resins) to bond tiles and faience — see our dedicated tile adhesive page. For your structural reinforced concrete works, see our CPJ 45 and CPJ 55 cements.',
        },
        {
          question: 'What is the price of cement mortar in Morocco?',
          answer:
            'The price of cement mortar depends on dosage and constituents. For a 350 kg/m³ CPJ 45 cement mortar, expect about 750-850 DH/m³ of ready-to-mix mortar (cement + sand + water, excluding labor). 0/4 sand costs 80-120 DH/T, CPJ 45 cement 1,500 DH/T. For pre-dosed dry industrial mortar in bags (Render/Screed type), plan for 4-6 DH/kg. Request a free quote for a personalized rate according to your project.',
        },
        {
          question: 'Can ready-mix mortar be delivered in Morocco?',
          answer:
            'Yes, for medium and large sites, mortar can be delivered ready-to-mix by mixer truck (DAM batching plant) with possible pumping to the application point. For small sites, we offer pre-dosed dry mortar in 25-40 kg bags (just add water) or 50 kg cement bags with sand delivered separately. The choice depends on volume, accessibility and lead time. Contact us for a tailored solution.',
        },
      ];

  const dosageRows = isFr
    ? [
        { use: 'Mortier de pose (agglos, briques)', dosage: '250-300 kg/m³', ratio: '1 vol. ciment pour 5 vol. sable' },
        { use: 'Mortier de jointoiement', dosage: '300-350 kg/m³', ratio: '1 vol. ciment pour 4 vol. sable' },
        { use: 'Enduit de façade (1 ou 2 couches)', dosage: '350-400 kg/m³', ratio: '1 vol. ciment pour 3-4 vol. sable' },
        { use: 'Chape de finition (4-5 cm)', dosage: '300-350 kg/m³', ratio: '1 vol. ciment pour 4 vol. sable' },
        { use: 'Chape industrielle / ravoirage', dosage: '400-450 kg/m³', ratio: '1 vol. ciment pour 3 vol. sable' },
        { use: 'Mortier de réparation structurelle', dosage: '450-500 kg/m³', ratio: '1 vol. ciment pour 2-2,5 vol. sable' },
      ]
    : [
        { use: 'Setting mortar (blocks, bricks)', dosage: '250-300 kg/m³', ratio: '1 vol. cement for 5 vol. sand' },
        { use: 'Jointing mortar', dosage: '300-350 kg/m³', ratio: '1 vol. cement for 4 vol. sand' },
        { use: 'Facade render (1 or 2 coats)', dosage: '350-400 kg/m³', ratio: '1 vol. cement for 3-4 vol. sand' },
        { use: 'Finishing screed (4-5 cm)', dosage: '300-350 kg/m³', ratio: '1 vol. cement for 4 vol. sand' },
        { use: 'Industrial screed / fill', dosage: '400-450 kg/m³', ratio: '1 vol. cement for 3 vol. sand' },
        { use: 'Structural repair mortar', dosage: '450-500 kg/m³', ratio: '1 vol. cement for 2-2.5 vol. sand' },
      ];

  const applications = isFr
    ? [
        { icon: Building2, title: 'Maçonnerie porteuse', desc: 'Pose d’agglos, briques, parpaings, chaînages, linteaux.' },
        { icon: Layers, title: 'Enduits', desc: 'Enduits extérieurs et intérieurs, crépis, taloches.' },
        { icon: Brush, title: 'Chapes', desc: 'Chapes de finition, ravoirages, chapes industrielles.' },
        { icon: HardHat, title: 'Réparation', desc: 'Réparation de béton, reprofilage, scellement d’éléments.' },
      ]
    : [
        { icon: Building2, title: 'Load-bearing masonry', desc: 'Block, brick, parpaing laying, tie beams, lintels.' },
        { icon: Layers, title: 'Renders', desc: 'Exterior and interior renders, plasters, floated finishes.' },
        { icon: Brush, title: 'Screeds', desc: 'Finishing screeds, fills, industrial screeds.' },
        { icon: HardHat, title: 'Repair', desc: 'Concrete repair, reprofiling, element sealing.' },
      ];

  const features = isFr
    ? [
        { icon: Factory, title: 'Production locale', desc: 'Ciment CPJ 45/55 broyé à Dakhla, sable de carrière contrôlé' },
        { icon: Beaker, title: 'Composition maîtrisée', desc: 'Dosage selon NM 10.1.004 et DTU 20-1 / 21-1 / 23-1' },
        { icon: Droplet, title: 'Maniabilité optimisée', desc: 'Adjuvants possibles : plastifiant, hydrofuge, retardateur' },
        { icon: Truck, title: 'Livraison flexible', desc: 'Camion-toupie, big bag, sacs pré-dosés, vrac silo' },
      ]
    : [
        { icon: Factory, title: 'Local production', desc: 'CPJ 45/55 cement ground in Dakhla, controlled quarry sand' },
        { icon: Beaker, title: 'Controlled composition', desc: 'Dosage per NM 10.1.004 and DTU 20-1 / 21-1 / 23-1' },
        { icon: Droplet, title: 'Optimized workability', desc: 'Possible admixtures: plasticizer, water-repellent, retarder' },
        { icon: Truck, title: 'Flexible delivery', desc: 'Mixer truck, big bag, pre-dosed bags, silo bulk' },
      ];

  const relatedLinks = isFr
    ? [
        { title: 'Ciment CPJ 45', description: 'Ciment idéal pour mortier de maçonnerie et chape. Dès 1 500 DH/T.', href: '/cpj-45' },
        { title: 'Ciment CPJ 55', description: 'Ciment haute résistance pour mortier de réparation et chape industrielle. Dès 1 600 DH/T.', href: '/cpj-55' },
        { title: 'Prix du ciment au Maroc', description: 'Tarifs ciment CPJ 45, CPJ 55 et compléments (sable, adjuvants).', href: '/prix-ciment' },
        { title: 'Demander un devis', description: 'Devis gratuit sous 24h pour mortier ciment et constituants.', href: '/devis' },
      ]
    : [
        { title: 'CPJ 45 Cement', description: 'Ideal cement for masonry mortar and screed. From 1,500 DH/T.', href: '/cpj-45' },
        { title: 'CPJ 55 Cement', description: 'High-strength cement for repair mortar and industrial screed. From 1,600 DH/T.', href: '/cpj-55' },
        { title: 'Cement Prices in Morocco', description: 'CPJ 45, CPJ 55 cement prices and complements (sand, admixtures).', href: '/prix-ciment' },
        { title: 'Request a Quote', description: 'Free quote within 24h for cement mortar and constituents.', href: '/devis' },
      ];

  const schemas = [
    webPageSchema({
      name: isFr ? 'Mortier de Ciment au Maroc' : 'Cement Mortar in Morocco',
      description: isFr
        ? 'Mortier de ciment au Maroc : composition (ciment + sable + eau), dosage 300-500 kg/m³, prix, usages (maçonnerie, enduit, chape).'
        : 'Cement mortar in Morocco: composition (cement + sand + water), dosage 300-500 kg/m³, price, uses (masonry, render, screed).',
      path: '/mortier-ciment-maroc',
      locale: loc,
    }),
    breadcrumbSchema([{ name: isFr ? 'Mortier ciment Maroc' : 'Cement mortar Morocco', path: '/mortier-ciment-maroc' }], loc),
    serviceSchema({
      name: isFr ? 'Mortier de Ciment — Formulation, Conditionnement et Livraison' : 'Cement Mortar — Formulation, Packaging and Delivery',
      description: isFr
        ? 'Production de mortier de ciment (maçonnerie, enduit, chape, réparation) au Maroc. Camion-toupie, big bag, sacs pré-dosés.'
        : 'Production of cement mortar (masonry, render, screed, repair) in Morocco. Mixer truck, big bag, pre-dosed bags.',
      path: '/mortier-ciment-maroc',
      locale: loc,
      serviceType: 'Cement mortar formulation and supply',
    }),
    faqSchema(faqItems),
    speakableSchema({
      path: '/mortier-ciment-maroc',
      locale: loc,
      cssSelectors: ['h1', '.hero-title', '.faq-question'],
    }),
  ];

  return (
    <>
      <JsonLdScript schema={schemas} />
      <Breadcrumbs items={[{ name: isFr ? 'Mortier ciment Maroc' : 'Cement mortar Morocco', path: '/mortier-ciment-maroc' }]} locale={locale} />

      {/* Hero */}
      <section className="bg-gradient-to-br from-[#1B3A5C] to-[#0f1f33] text-white py-20 md:py-28">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <div className="max-w-4xl">
            <span className="inline-block px-4 py-1.5 bg-[#E8B84B]/20 text-[#E8B84B] text-sm font-medium rounded-full mb-6">
              {isFr ? 'Mortier de ciment — Guide complet' : 'Cement mortar — Complete guide'}
            </span>
            <h1 className="hero-title text-[clamp(2rem,5vw,3.5rem)] font-bold leading-[1.1] mb-6">
              {isFr ? 'Mortier de Ciment au Maroc — Composition, Dosage, Prix' : 'Cement Mortar in Morocco — Composition, Dosage, Price'}
            </h1>
            <p className="text-lg md:text-xl text-white/80 leading-relaxed mb-8 max-w-3xl">
              {isFr
                ? 'Le mortier de ciment est le matériau de base de la maçonnerie, des enduits et des chapes : un mélange de ciment CPJ 45/55, de sable et d’eau, dosé entre 300 et 500 kg/m³ selon l’usage. Guide complet : composition, dosage, types de mortiers, prix et livraison. Conforme aux normes marocaines NM 10.1.004 et DTU 20-1 / 21-1 / 23-1.'
                : 'Cement mortar is the base material for masonry, renders and screeds: a mix of CPJ 45/55 cement, sand and water, dosed between 300 and 500 kg/m³ depending on use. Complete guide: composition, dosage, mortar types, price and delivery. Compliant with Moroccan standards NM 10.1.004 and DTU 20-1 / 21-1 / 23-1.'}
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
            {isFr ? 'Applications du mortier de ciment' : 'Cement mortar applications'}
          </h2>
          <p className="text-center text-[#6B7280] mb-12 max-w-2xl mx-auto">
            {isFr
              ? 'Le mortier de ciment est utilisé dans toutes les étapes de la construction, de la maçonnerie porteuse aux finitions.'
              : 'Cement mortar is used in all construction stages, from load-bearing masonry to finishing.'}
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

      {/* Dosage table */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1B3A5C] mb-4 text-center">
            {isFr ? 'Dosage du mortier selon l’usage' : 'Mortar dosage by use'}
          </h2>
          <p className="text-center text-[#6B7280] mb-12 max-w-2xl mx-auto">
            {isFr
              ? 'Le dosage en ciment détermine la résistance, la durabilité et la maniabilité du mortier. Suivez les recommandations DTU.'
              : 'The cement dosage determines the strength, durability and workability of the mortar. Follow DTU recommendations.'}
          </p>
          <div className="overflow-x-auto">
            <table className="w-full max-w-4xl mx-auto border-collapse bg-white rounded-xl overflow-hidden shadow-sm">
              <thead>
                <tr className="bg-[#1B3A5C] text-white">
                  <th className="text-left py-4 px-6 font-semibold">{isFr ? 'Usage' : 'Use'}</th>
                  <th className="text-left py-4 px-6 font-semibold">{isFr ? 'Dosage ciment' : 'Cement dosage'}</th>
                  <th className="text-left py-4 px-6 font-semibold">{isFr ? 'Ratio volumique' : 'Volume ratio'}</th>
                </tr>
              </thead>
              <tbody>
                {dosageRows.map((row, i) => (
                  <tr key={i} className="border-b border-[#E5E7EB] last:border-0 hover:bg-[#F7F8FA] transition-colors">
                    <td className="py-3.5 px-6 text-[#6B7280] font-medium">{row.use}</td>
                    <td className="py-3.5 px-6 text-[#1A1A2E] font-semibold">{row.dosage}</td>
                    <td className="py-3.5 px-6 text-[#1A1A2E]">{row.ratio}</td>
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
              {isFr ? 'Le mortier de ciment : composition, dosage et applications' : 'Cement mortar: composition, dosage and applications'}
            </h2>
            <p className="text-[#1A1A2E]/80 leading-relaxed mb-6">
              {isFr
                ? "Le mortier de ciment est un matériau de construction élémentaire composé de ciment, de sable et d’eau, parfois complété de chaux (mortier bâtard) ou d’adjuvants. Contrairement au béton, il ne contient pas de gravillons : il sert à assembler des éléments (maçonnerie), à enduire des surfaces (façade, intérieur) ou à former des chapes de finition. Le dosage en ciment — exprimé en kilogrammes de ciment par mètre cube de sable sec — détermine directement la résistance, la durabilité et la maniabilité du mortier."
                : "Cement mortar is a fundamental building material composed of cement, sand and water, sometimes complemented by lime (bastard mortar) or admixtures. Unlike concrete, it contains no gravel: it is used to assemble elements (masonry), to coat surfaces (facade, interior) or to form finishing screeds. The cement dosage — expressed in kilograms of cement per cubic meter of dry sand — directly determines the strength, durability and workability of the mortar."}
            </p>

            <h3 className="text-2xl font-bold text-[#1B3A5C] mt-10 mb-4">
              {isFr ? 'Composition du mortier de ciment' : 'Composition of cement mortar'}
            </h3>
            <p className="text-[#1A1A2E]/80 leading-relaxed mb-6">
              {isFr
                ? "Un mortier de ciment se compose de trois ingrédients principaux : (1) du ciment — généralement du CPJ 45 pour la maçonnerie courante et les chapes, ou du CPJ 55 pour les mortiers à haute résistance et les réparations structurelles ; (2) du sable de carrière 0/2 à 0/4 mm, propre, lavé et concassé, exempt de fines argileuses ; (3) de l’eau potable ou conforme à la norme NM 10.1.005. Pour certaines applications (enduits anciens, maçonnerie de pierre), on ajoute de la chaux hydraulique (CL ou NHL) pour améliorer la plasticité et la respiration du mortier : c’est le mortier bâtard. Des adjuvants peuvent être incorporés : plastifiant (réduit l’eau), hydrofuge (imperméabilisation), retardateur de prise (grandes surfaces), accélérateur (temps froid), fibre (anti-fissuration)."
                : "A cement mortar consists of three main ingredients: (1) cement — usually CPJ 45 for standard masonry and screeds, or CPJ 55 for high-strength mortars and structural repairs; (2) quarry sand 0/2 to 0/4 mm, clean, washed and crushed, free of clay fines; (3) drinking water or water compliant with NM 10.1.005 standard. For certain applications (old renders, stone masonry), hydraulic lime (CL or NHL) is added to improve the plasticity and breathability of the mortar: this is bastard mortar. Admixtures can be incorporated: plasticizer (reduces water), water-repellent (waterproofing), setting retarder (large surfaces), accelerator (cold weather), fiber (anti-cracking)."}
            </p>

            <h3 className="text-2xl font-bold text-[#1B3A5C] mt-10 mb-4">
              {isFr ? 'Dosage du mortier : les règles de l’art' : 'Mortar dosage: rules of the art'}
            </h3>
            <p className="text-[#1A1A2E]/80 leading-relaxed mb-6">
              {isFr
                ? "Le dosage du mortier est encadré par les normes marocaines et les DTU (Documents Techniques Unifiés) français applicables au Maroc : DTU 20-1 (maçonnerie), DTU 21 (béton), DTU 23-1 (murs), DTU 26-1 (enduits). Pour un mortier de pose d’agglos, 250-300 kg/m³ suffisent. Pour un enduit de façade de qualité, visez 350-400 kg/m³ en deux couches (gobetis + couche de finition). Pour une chape de finition sur dalle béton, 300-350 kg/m³ garantissent une bonne résistance à l’abrasion sans retrait excessif. Les mortiers de réparation structurelle (reprofilage de poteaux, scellements) montent à 450-500 kg/m³ avec adjonction possible de fibres. Un surdosage en ciment (au-delà de 500-600 kg/m³) provoque un retrait excessif et des fissures ; un sous-dosage (sous 250 kg/m³) donne un mortier poudreux, peu résistant et non durable."
                : "Mortar dosage is governed by Moroccan standards and DTU (Documents Techniques Unifiés) French standards applicable in Morocco: DTU 20-1 (masonry), DTU 21 (concrete), DTU 23-1 (walls), DTU 26-1 (renders). For a block-laying mortar, 250-300 kg/m³ is sufficient. For a quality facade render, aim for 350-400 kg/m³ in two coats (dash coat + finishing coat). For a finishing screed on a concrete slab, 300-350 kg/m³ ensures good abrasion resistance without excessive shrinkage. Structural repair mortars (column reprofiling, sealing) rise to 450-500 kg/m³ with possible fiber addition. An overdosage of cement (beyond 500-600 kg/m³) causes excessive shrinkage and cracks; an underdosage (under 250 kg/m³) gives a dusty, weak and non-durable mortar."}
            </p>

            <h3 className="text-2xl font-bold text-[#1B3A5C] mt-10 mb-4">
              {isFr ? 'Types de mortiers de ciment' : 'Types of cement mortars'}
            </h3>
            <ul className="space-y-3 mb-6">
              {(isFr
                ? [
                    'Mortier de pose : assemblage d’éléments (agglos, briques, pierres) — dosage 250-300 kg/m³',
                    'Mortier de jointoiement : remplissage des joints entre éléments — dosage 300-350 kg/m³',
                    'Mortier d’enduit : protection et finition des façades et murs intérieurs — dosage 350-400 kg/m³',
                    'Mortier de chape : couche de finition sur dalle béton ou ravoirage — dosage 300-450 kg/m³',
                    'Mortier de réparation : reprofilage, scellement, calage d’éléments — dosage 450-500 kg/m³',
                    'Mortier bâtard : adjonction de chaux pour amélioration plasticité et respiration',
                  ]
                : [
                    'Setting mortar: assembling elements (blocks, bricks, stones) — dosage 250-300 kg/m³',
                    'Jointing mortar: filling joints between elements — dosage 300-350 kg/m³',
                    'Render mortar: protection and finishing of facades and interior walls — dosage 350-400 kg/m³',
                    'Screed mortar: finishing layer on concrete slab or fill — dosage 300-450 kg/m³',
                    'Repair mortar: reprofiling, sealing, element shimming — dosage 450-500 kg/m³',
                    'Bastard mortar: lime addition for improved plasticity and breathability',
                  ]
              ).map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-[#1A1A2E]/80">
                  <CheckCircle className="w-5 h-5 text-[#E8B84B] shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <h3 className="text-2xl font-bold text-[#1B3A5C] mt-10 mb-4">
              {isFr ? 'Prix du mortier de ciment au Maroc' : 'Cement mortar price in Morocco'}
            </h3>
            <p className="text-[#1A1A2E]/80 leading-relaxed mb-6">
              {isFr
                ? "Le prix d’un mortier de ciment se décompose en : ciment (CPJ 45 à 1 500 DH/T, CPJ 55 à 1 600 DH/T — voir notre page prix ciment), sable 0/4 (80-120 DH/T en carrière, 150-200 DH/T livré chantier) et eau (généralement négligeable). Pour un mortier à 350 kg/m³ de CPJ 45, comptez environ 750-850 DH/m³ de mortier gâché. Le mortier sec pré-dosé en sac (25-40 kg, type Render ou Screed) revient à 4-6 DH/kg. Le mortier prêt à l’emploi livré par camion-toupie coûte 900-1 100 DH/m³ pour des volumes supérieurs à 5 m³. Demandez un devis gratuit pour un tarif précis selon votre chantier."
                : "The price of a cement mortar breaks down into: cement (CPJ 45 at 1,500 DH/T, CPJ 55 at 1,600 DH/T — see our cement price page), 0/4 sand (80-120 DH/T at quarry, 150-200 DH/T delivered to site) and water (generally negligible). For a 350 kg/m³ CPJ 45 mortar, expect about 750-850 DH/m³ of mixed mortar. Pre-dosed dry mortar in bags (25-40 kg, Render or Screed type) costs 4-6 DH/kg. Ready-mix mortar delivered by mixer truck costs 900-1,100 DH/m³ for volumes over 5 m³. Request a free quote for a precise rate according to your site."}
            </p>
            <div className="bg-white border border-[#E5E7EB] rounded-xl p-6 my-6 flex flex-col gap-2">
              <Link href={`/${locale}/cpj-45`} className="inline-flex items-center gap-2 text-[#C1272D] font-medium hover:gap-3 transition-all">
                {isFr ? '→ Ciment CPJ 45 pour mortier courant' : '→ CPJ 45 cement for standard mortar'}
              </Link>
              <Link href={`/${locale}/cpj-55`} className="inline-flex items-center gap-2 text-[#C1272D] font-medium hover:gap-3 transition-all">
                {isFr ? '→ Ciment CPJ 55 pour mortier haute résistance' : '→ CPJ 55 cement for high-strength mortar'}
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
            {isFr ? 'Questions fréquentes sur le mortier de ciment' : 'Frequently asked questions about cement mortar'}
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
      <CtaBanner
        locale={locale}
        title={isFr ? 'Besoin de mortier de ciment au Maroc ?' : 'Need cement mortar in Morocco?'}
        subtitle={
          isFr
            ? 'Devis gratuit sous 24h. Mortier ciment, enduit, chape — ciment CPJ 45 dès 1 500 DH/T. Livraison camion-toupie, big bag, sacs pré-dosés.'
            : 'Free quote within 24h. Cement mortar, render, screed — CPJ 45 cement from 1,500 DH/T. Mixer truck, big bag, pre-dosed bag delivery.'
        }
        buttonText={isFr ? 'Demander un devis gratuit' : 'Request a free quote'}
      />
    </>
  );
}
