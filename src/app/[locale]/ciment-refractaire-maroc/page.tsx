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
import {
  CheckCircle,
  ArrowRight,
  Factory,
  Beaker,
  Truck,
  Flame,
  Building,
  Wrench,
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
      path: '/ciment-refractaire-maroc',
      title: 'Refractory Cement Morocco — High Temperature | SDAD',
      description:
        'Refractory cement in Morocco: resistance up to 1,500 °C. Furnaces, industrial chimneys, fireplaces. Price and availability. Free quote.',
      keywords: [
        'refractory cement Morocco',
        'ciment réfractaire Maroc',
        'high temperature cement',
        'ciment haute temperature',
        'furnace cement',
        'chimney cement',
        'fireplace cement',
        'ciment fondu',
        ...KEYWORDS.products,
        ...KEYWORDS.pricing,
      ],
    });
  }

  return buildMetadata({
    locale: 'fr',
    path: '/ciment-refractaire-maroc',
    title: 'Ciment Réfractaire Maroc — Haute Température | SDAD',
    description:
      "Ciment réfractaire au Maroc : résistance jusqu'à 1 500 °C. Fours, cheminées industrielles, foyers. Prix et disponibilité. Devis gratuit.",
    keywords: [
      'ciment réfractaire Maroc',
      'ciment haute température',
      'ciment fondu',
      'ciment réfractaire four',
      'ciment réfractaire cheminée',
      'ciment réfractaire foyer',
      'prix ciment réfractaire',
      ...KEYWORDS.products,
      ...KEYWORDS.pricing,
    ],
  });
}

export default async function CimentRefractaireMarocPage({
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
          question: 'Quelle est la différence entre ciment réfractaire et ciment Portland classique ?',
          answer:
            "Le ciment Portland classique (CPJ 45, CPJ 55) perd sa résistance mécanique au-delà de 500 °C : les hydrates de silicate de calcium se décomposent et le béton éclate. Le ciment réfractaire (souvent appelé « ciment fondu » ou CAC — Cement Alumineux Calcium) est formulé à base d'aluminates de calcium cuits à très haute température. Il conserve sa résistance mécanique jusqu'à 1 500 °C voire 1 800 °C selon la qualité, et résiste aux chocs thermiques. Il est indispensable pour tout ouvrage soumis à des températures élevées : fours, cheminées, foyers, incinérateurs.",
        },
        {
          question: 'Quelle température maximale supporte le ciment réfractaire ?',
          answer:
            "La température maximale dépend du grade du ciment réfractaire. Les ciments alumineux courants résistent jusqu'à 1 200-1 500 °C. Les ciments réfractaires hauts grade (à forte teneur en alumine, Al₂O₃ > 70 %) peuvent supporter 1 600-1 800 °C. Pour des applications très spécifiques (métallurgie, sidérurgie), des bétons réfractaires spéciaux montent jusqu'à 2 000 °C. Dakhla Aménagement conseille le grade adapté à votre application : foyer de cheminée domestique (jusqu'à 1 200 °C) ou four industriel (1 500 °C et plus).",
        },
        {
          question: 'Pour quels usages le ciment réfractaire est-il indispensable ?',
          answer:
            "Le ciment réfractaire est indispensable pour tous les ouvrages exposés à des températures supérieures à 500 °C : fours industriels (cimenteries, sidérurgie, céramique, boulangerie, pizzeria), cheminées industrielles et de chaudières, foyers de cheminées et inserts, incinérateurs, conduits de fumée, dalles de fonderie, isolation de brûleurs, bancs de sauna et fours à pain. Pour un foyer de cheminée domestique, un mortier réfractaire à base de ciment fondu suffit. Pour un four industriel, un béton réfractaire formulé est nécessaire.",
        },
        {
          question: 'Quel est le prix du ciment réfractaire au Maroc ?',
          answer:
            "Le ciment réfractaire est un produit technique nettement plus coûteux que le ciment Portland classique. Comptez environ 8 à 15 DH/kg en sac de 25 kg selon le grade et l'origine (européenne, turque, chinoise). En big bag 1T, le prix descend à 6 500-12 000 DH/T selon la qualité. Les mortiers réfractaires prêts à gâcher (ciment + agrégats réfractaires) sont vendus 12-20 DH/kg. Pour un tarif précis adapté à votre application (température, type d'ouvrage, volume), demandez un devis gratuit à Dakhla Aménagement.",
        },
        {
          question: 'Comment appliquer le ciment réfractaire correctement ?',
          answer:
            "L'application du ciment réfractaire demande des précautions : gâchage avec eau propre et agrégats réfractaires (sable chamotte, bauxite) — ne jamais utiliser de sable siliceux classique, qui fondrait. Cuisson lente et progressive (montée en température par paliers sur 24-48h) pour évacuer l'eau de gâchage sans fissuration. Dosage typique : 300-400 kg/m³ de ciment réfractaire pour un béton réfractaire. Respecter le temps de prise (le ciment fondu prend en 2-6h, plus rapide que le Portland). Pour les ouvrages critiques, faire appel à un professionnel et demander un plan de cuisson.",
        },
      ]
    : [
        {
          question: 'What is the difference between refractory cement and standard Portland cement?',
          answer:
            'Standard Portland cement (CPJ 45, CPJ 55) loses its mechanical strength beyond 500 °C: calcium silicate hydrates decompose and concrete spalls. Refractory cement (often called "ciment fondu" or CAC — Calcium Aluminate Cement) is formulated from calcium aluminates fired at very high temperature. It retains its mechanical strength up to 1,500 °C or even 1,800 °C depending on quality, and resists thermal shock. It is essential for any structure subjected to high temperatures: furnaces, chimneys, fireplaces, incinerators.',
        },
        {
          question: 'What maximum temperature can refractory cement withstand?',
          answer:
            'The maximum temperature depends on the refractory cement grade. Common aluminate cements withstand up to 1,200-1,500 °C. High-grade refractory cements (high alumina content, Al₂O₃ > 70%) can withstand 1,600-1,800 °C. For very specific applications (metallurgy, steel industry), special refractory concretes reach up to 2,000 °C. Dakhla Aménagement advises the grade suited to your application: domestic fireplace hearth (up to 1,200 °C) or industrial furnace (1,500 °C and above).',
        },
        {
          question: 'What is refractory cement essential for?',
          answer:
            'Refractory cement is essential for all structures exposed to temperatures above 500 °C: industrial furnaces (cement plants, steel industry, ceramics, bakery, pizzeria), industrial chimneys and boiler flues, fireplace hearths and inserts, incinerators, flue pipes, foundry slabs, burner insulation, sauna benches and bread ovens. For a domestic fireplace hearth, a refractory mortar based on aluminous cement is sufficient. For an industrial furnace, a formulated refractory concrete is necessary.',
        },
        {
          question: 'What is the price of refractory cement in Morocco?',
          answer:
            'Refractory cement is a technical product significantly more expensive than standard Portland cement. Expect about 8 to 15 DH/kg in 25 kg bags depending on grade and origin (European, Turkish, Chinese). In 1T big bag, the price drops to 6,500-12,000 DH/T depending on quality. Ready-to-mix refractory mortars (cement + refractory aggregates) are sold at 12-20 DH/kg. For an accurate price adapted to your application (temperature, structure type, volume), request a free quote from Dakhla Aménagement.',
        },
        {
          question: 'How to apply refractory cement correctly?',
          answer:
            'Applying refractory cement requires precautions: mixing with clean water and refractory aggregates (chamotte sand, bauxite) — never use standard siliceous sand, which would melt. Slow and progressive firing (temperature ramp in stages over 24-48h) to evacuate mixing water without cracking. Typical dosage: 300-400 kg/m³ of refractory cement for refractory concrete. Respect the setting time (aluminous cement sets in 2-6h, faster than Portland). For critical structures, hire a professional and request a firing plan.',
        },
      ];

  const grades = isFr
    ? [
        {
          grade: isFr ? 'Grade standard' : 'Standard grade',
          maxTemp: '1 200 °C',
          alumina: '40-50 % Al₂O₃',
          use: 'Foyers de cheminée, fours à pain, poêles à bois, conduits de fumée résidentiels.',
        },
        {
          grade: isFr ? 'Grade intermédiaire' : 'Intermediate grade',
          maxTemp: '1 500 °C',
          alumina: '50-70 % Al₂O₃',
          use: 'Chaudières industrielles, fours de boulangerie/pizzeria, incinérateurs, cheminées industrielles.',
        },
        {
          grade: isFr ? 'Grade haut alumineux' : 'High-alumina grade',
          maxTemp: '1 800 °C',
          alumina: '> 70 % Al₂O₃',
          use: 'Sidérurgie, fonderie, fours à céramique, cimenteries, installations pétrochimiques.',
        },
      ]
    : [
        {
          grade: 'Standard grade',
          maxTemp: '1,200 °C',
          alumina: '40-50% Al₂O₃',
          use: 'Fireplace hearths, bread ovens, wood stoves, residential flue pipes.',
        },
        {
          grade: 'Intermediate grade',
          maxTemp: '1,500 °C',
          alumina: '50-70% Al₂O₃',
          use: 'Industrial boilers, bakery/pizzeria ovens, incinerators, industrial chimneys.',
        },
        {
          grade: 'High-alumina grade',
          maxTemp: '1,800 °C',
          alumina: '> 70% Al₂O₃',
          use: 'Steel industry, foundry, ceramic kilns, cement plants, petrochemical installations.',
        },
      ];

  const applications = isFr
    ? [
        {
          icon: Flame,
          title: 'Foyers et cheminées',
          desc: 'Foyers de cheminées domestiques, inserts, poêles à bois, fours à pain et à pizza.',
        },
        {
          icon: Factory,
          title: 'Fours industriels',
          desc: 'Fours de cimenteries, sidérurgie, céramique, verrerie, incinérateurs.',
        },
        {
          icon: Building,
          title: 'Cheminées industrielles',
          desc: 'Chemisage de cheminées de chaudières, conduits de fumée haute température.',
        },
        {
          icon: Wrench,
          title: 'Réparation et scellement',
          desc: 'Réparation de fours, scellement de briques réfractaires, joints haute température.',
        },
      ]
    : [
        {
          icon: Flame,
          title: 'Fireplaces and chimneys',
          desc: 'Domestic fireplace hearths, inserts, wood stoves, bread and pizza ovens.',
        },
        {
          icon: Factory,
          title: 'Industrial furnaces',
          desc: 'Cement plant kilns, steel industry, ceramics, glass, incinerators.',
        },
        {
          icon: Building,
          title: 'Industrial chimneys',
          desc: 'Boiler chimney lining, high-temperature flue pipes.',
        },
        {
          icon: Wrench,
          title: 'Repair and sealing',
          desc: 'Furnace repair, refractory brick sealing, high-temperature joints.',
        },
      ];

  const features = isFr
    ? [
        { icon: Factory, title: 'Approvisionnement fiable', desc: 'Partenaires cimentiers réfractaires en Europe et Turquie' },
        { icon: Beaker, title: 'Grades certifiés', desc: 'Composition alumineuse testée en laboratoire avant livraison' },
        { icon: Truck, title: 'Livraison Sud Maroc', desc: 'Sacs 25kg, big bag 1T — Dakhla, Laâyoune, Boujdour, Mauritanie' },
        { icon: ShieldCheck, title: 'Conseil technique', desc: 'Choix du grade, dosage, plan de cuisson : accompagnement projet' },
      ]
    : [
        { icon: Factory, title: 'Reliable supply', desc: 'Refractory cement partners in Europe and Turkey' },
        { icon: Beaker, title: 'Certified grades', desc: 'Aluminous composition tested in laboratory before delivery' },
        { icon: Truck, title: 'Southern Morocco delivery', desc: '25kg bags, 1T big bag — Dakhla, Laayoune, Boujdour, Mauritania' },
        { icon: ShieldCheck, title: 'Technical advice', desc: 'Grade choice, dosage, firing plan: project support' },
      ];

  const schemas = [
    webPageSchema({
      name: isFr ? 'Ciment Réfractaire Maroc — Haute Température' : 'Refractory Cement Morocco — High Temperature',
      description: isFr
        ? "Ciment réfractaire au Maroc : résistance jusqu'à 1 500 °C. Fours, cheminées industrielles, foyers. Prix dès 8 DH/kg. Centre de broyage Dakhla."
        : 'Refractory cement in Morocco: resistance up to 1,500 °C. Furnaces, industrial chimneys, fireplaces. Price from 8 DH/kg. Dakhla grinding plant.',
      path: '/ciment-refractaire-maroc',
      locale: loc,
    }),
    breadcrumbSchema(
      [{ name: isFr ? 'Ciment Réfractaire Maroc' : 'Refractory Cement Morocco', path: '/ciment-refractaire-maroc' }],
      loc,
    ),
    serviceSchema({
      name: isFr ? 'Ciment Réfractaire Maroc — Fourniture et Conseil' : 'Refractory Cement Morocco — Supply & Advice',
      description: isFr
        ? "Fourniture et livraison de ciment réfractaire au Maroc. Sacs 25kg, big bag 1T. Pour fours, cheminées industrielles, foyers."
        : 'Supply and delivery of refractory cement in Morocco. 25kg bags, 1T big bag. For furnaces, industrial chimneys, fireplaces.',
      path: '/ciment-refractaire-maroc',
      locale: loc,
      serviceType: 'Refractory cement supply and technical advisory',
    }),
    faqSchema(faqItems),
    speakableSchema({
      path: '/ciment-refractaire-maroc',
      locale: loc,
      cssSelectors: ['h1', '.hero-title', '.product-price', '.faq-question'],
    }),
  ];

  return (
    <>
      <JsonLdScript schema={schemas} />
      <Breadcrumbs
        items={[{ name: isFr ? 'Ciment Réfractaire Maroc' : 'Refractory Cement Morocco', path: '/ciment-refractaire-maroc' }]}
        locale={locale}
      />

      {/* Hero */}
      <section className="bg-gradient-to-br from-[#1B3A5C] to-[#0f1f33] text-white py-20 md:py-28">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <div className="max-w-4xl">
            <span className="inline-block px-4 py-1.5 bg-[#E8B84B]/20 text-[#E8B84B] text-sm font-medium rounded-full mb-6">
              {isFr ? 'Ciment réfractaire — Jusqu\'à 1 500 °C' : 'Refractory cement — Up to 1,500 °C'}
            </span>
            <h1 className="text-[clamp(2rem,5vw,3.5rem)] font-bold leading-[1.1] mb-6">
              {isFr
                ? 'Ciment Réfractaire Maroc — Haute Température'
                : 'Refractory Cement Morocco — High Temperature'}
            </h1>
            <p className="text-lg md:text-xl text-white/80 leading-relaxed mb-8 max-w-3xl">
              {isFr
                ? "Le ciment réfractaire (ciment alumineux, ciment fondu) résiste à des températures allant jusqu'à 1 500 °C et plus. Indispensable pour les fours industriels, les cheminées de chaudières, les foyers de cheminées et les incinérateurs. Dakhla Aménagement (SDAD) fournit les grades standard, intermédiaire et haut alumineux au Maroc et en Mauritanie. Devis gratuit sous 24h."
                : 'Refractory cement (aluminous cement, fused cement) withstands temperatures up to 1,500 °C and above. Essential for industrial furnaces, boiler chimneys, fireplace hearths and incinerators. Dakhla Aménagement (SDAD) supplies standard, intermediate and high-alumina grades in Morocco and Mauritania. Free quote within 24h.'}
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

      {/* Long-form — what is refractory cement */}
      <section className="py-16 md:py-24 bg-[#F7F8FA]">
        <div className="max-w-4xl mx-auto px-6 md:px-12">
          <div className="prose prose-lg max-w-none">
            <h2 className="text-3xl font-bold text-[#1B3A5C] mb-6">
              {isFr ? 'Qu\'est-ce que le ciment réfractaire ?' : 'What is refractory cement?'}
            </h2>
            <p className="text-[#1A1A2E]/80 leading-relaxed mb-6">
              {isFr
                ? "Le ciment réfractaire — aussi appelé ciment alumineux ou ciment fondu (CAC, Calcium Aluminate Cement) — est un liant hydraulique spécial formulé à base d'aluminates de calcium (CA, CA₂, C₁₂A₇) obtenus par fusion ou cuisson à très haute température (1 500-1 600 °C) d'un mélange de bauxite et de calcaire. Contrairement au ciment Portland classique (à base de silicates de calcium), le ciment réfractaire conserve sa résistance mécanique à des températures où le Portland se décompose : jusqu'à 1 500 °C pour les grades courants, 1 800 °C pour les grades hauts alumineux, voire 2 000 °C pour les bétons réfractaires spéciaux."
                : 'Refractory cement — also called aluminous cement or fused cement (CAC, Calcium Aluminate Cement) — is a special hydraulic binder formulated from calcium aluminates (CA, CA₂, C₁₂A₇) obtained by melting or firing at very high temperature (1,500-1,600 °C) a mixture of bauxite and limestone. Unlike standard Portland cement (based on calcium silicates), refractory cement retains its mechanical strength at temperatures where Portland decomposes: up to 1,500 °C for common grades, 1,800 °C for high-alumina grades, even 2,000 °C for special refractory concretes.'}
            </p>
            <p className="text-[#1A1A2E]/80 leading-relaxed mb-6">
              {isFr
                ? "Le ciment réfractaire présente plusieurs caractéristiques techniques qui le rendent indispensable aux applications haute température : (1) une résistance mécanique conservée à chaud, (2) une résistance aux chocs thermiques (cycles chauffage/refroidissement sans fissuration), (3) une prise rapide (2-6h à 20 °C, plus rapide que le Portland), (4) une résistance chimique aux laitiers, cendres et gaz acides. Il est utilisé seul comme mortier réfractaire (scellement de briques) ou en béton réfractaire (mélangé à des agrégats chamotte, bauxite, corindon)."
                : 'Refractory cement has several technical characteristics that make it essential for high-temperature applications: (1) mechanical strength retained at high temperature, (2) thermal shock resistance (heating/cooling cycles without cracking), (3) rapid setting (2-6h at 20 °C, faster than Portland), (4) chemical resistance to slags, ashes and acid gases. It is used alone as refractory mortar (brick sealing) or as refractory concrete (mixed with chamotte, bauxite, corundum aggregates).'}
            </p>

            <h3 className="text-2xl font-bold text-[#1B3A5C] mt-10 mb-4">
              {isFr ? 'Grades de ciment réfractaire disponibles' : 'Available refractory cement grades'}
            </h3>
            <p className="text-[#1A1A2E]/80 leading-relaxed mb-6">
              {isFr
                ? "Le choix du grade dépend de la température de service, du type d'agression (chimique, thermique, mécanique) et de l'ouvrage. Dakhla Aménagement fournit trois grandes familles de ciments réfractaires au Maroc et en Mauritanie."
                : 'The choice of grade depends on the service temperature, the type of aggression (chemical, thermal, mechanical) and the structure. Dakhla Aménagement supplies three main families of refractory cements in Morocco and Mauritania.'}
            </p>
            <div className="overflow-x-auto my-6">
              <table className="w-full border-collapse bg-white rounded-xl overflow-hidden shadow-sm">
                <thead>
                  <tr className="bg-[#1B3A5C] text-white">
                    <th className="text-left py-3.5 px-5 font-semibold">{isFr ? 'Grade' : 'Grade'}</th>
                    <th className="text-left py-3.5 px-5 font-semibold">{isFr ? 'Temp. max' : 'Max temp'}</th>
                    <th className="text-left py-3.5 px-5 font-semibold">Al₂O₃</th>
                    <th className="text-left py-3.5 px-5 font-semibold">{isFr ? 'Usage' : 'Use'}</th>
                  </tr>
                </thead>
                <tbody>
                  {grades.map((row, i) => (
                    <tr key={i} className="border-b border-[#E5E7EB] last:border-0 hover:bg-[#F7F8FA] transition-colors">
                      <td className="py-3 px-5 text-[#1A1A2E] font-semibold">{row.grade}</td>
                      <td className="py-3 px-5 text-[#C1272D] font-bold">{row.maxTemp}</td>
                      <td className="py-3 px-5 text-[#1A1A2E]">{row.alumina}</td>
                      <td className="py-3 px-5 text-[#6B7280] text-sm">{row.use}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Applications */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1B3A5C] mb-4 text-center">
            {isFr ? 'Applications du ciment réfractaire' : 'Applications of refractory cement'}
          </h2>
          <p className="text-center text-[#6B7280] mb-12 max-w-2xl mx-auto">
            {isFr
              ? "Du foyer de cheminée au four industriel : partout où la température dépasse 500 °C, le ciment réfractaire est indispensable."
              : 'From fireplace hearth to industrial furnace: wherever the temperature exceeds 500 °C, refractory cement is essential.'}
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {applications.map((app, i) => (
              <div key={i} className="bg-[#F7F8FA] border border-[#E5E7EB] rounded-2xl p-6 hover:shadow-lg transition-shadow">
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
      <section className="py-16 md:py-24 bg-[#F7F8FA]">
        <div className="max-w-4xl mx-auto px-6 md:px-12">
          <div className="prose prose-lg max-w-none">
            <h2 className="text-3xl font-bold text-[#1B3A5C] mb-6">
              {isFr ? 'Prix et disponibilité du ciment réfractaire' : 'Price and availability of refractory cement'}
            </h2>
            <p className="text-[#1A1A2E]/80 leading-relaxed mb-6">
              {isFr
                ? "Le ciment réfractaire est un produit technique dont le prix varie fortement selon le grade (teneur en alumine), l'origine (Europe, Turquie, Chine) et le conditionnement. Pour un grade standard (40-50 % Al₂O₃), comptez environ 8-10 DH/kg en sac de 25 kg. Pour un grade intermédiaire (50-70 % Al₂O₃), 10-13 DH/kg. Pour un grade haut alumineux (> 70 % Al₂O₃), 13-15 DH/kg. En big bag 1T, le prix descend à 6 500-12 000 DH/T selon la qualité. Les mortiers réfractaires prêts à gâcher (ciment + agrégats) sont vendus 12-20 DH/kg."
                : 'Refractory cement is a technical product whose price varies greatly depending on the grade (alumina content), origin (Europe, Turkey, China) and packaging. For a standard grade (40-50% Al₂O₃), expect about 8-10 DH/kg in 25 kg bags. For an intermediate grade (50-70% Al₂O₃), 10-13 DH/kg. For a high-alumina grade (> 70% Al₂O₃), 13-15 DH/kg. In 1T big bag, the price drops to 6,500-12,000 DH/T depending on quality. Ready-to-mix refractory mortars (cement + aggregates) are sold at 12-20 DH/kg.'}
            </p>
            <p className="text-[#1A1A2E]/80 leading-relaxed mb-6">
              {isFr
                ? "Dakhla Aménagement (SDAD) approvisionne ses clients du Sud marocain et de Mauritanie en ciment réfractaire via son réseau de partenaires cimentiers européens et turcs. Disponible en sacs 25 kg (palette 1T = 40 sacs) et big bag 1T. Délai de livraison indicatif : 5 à 10 jours ouvrés selon la zone. Pour un tarif personnalisé et un conseil technique (choix du grade, dosage, agrégats réfractaires, plan de cuisson), demandez un devis gratuit — réponse sous 24h."
                : 'Dakhla Aménagement (SDAD) supplies its customers in Southern Morocco and Mauritania with refractory cement through its network of European and Turkish cement partners. Available in 25 kg bags (1T pallet = 40 bags) and 1T big bag. Indicative delivery time: 5 to 10 business days depending on the area. For a personalized rate and technical advice (grade choice, dosage, refractory aggregates, firing plan), request a free quote — response within 24h.'}
            </p>
            <div className="bg-white border border-[#E5E7EB] rounded-xl p-6 my-6">
              <Link
                href={`/${locale}/prix-ciment`}
                className="inline-flex items-center gap-2 text-[#C1272D] font-medium hover:gap-3 transition-all"
              >
                {isFr ? '→ Comparer avec les prix du ciment Portland (CPJ 45, CPJ 55)' : '→ Compare with Portland cement prices (CPJ 45, CPJ 55)'}
              </Link>
            </div>

            <h3 className="text-2xl font-bold text-[#1B3A5C] mt-10 mb-4">
              {isFr ? 'Pourquoi choisir Dakhla Aménagement (SDAD) ?' : 'Why choose Dakhla Aménagement (SDAD)?'}
            </h3>
            <ul className="space-y-3 mb-6">
              {(isFr
                ? [
                    'Approvisionnement fiable via réseau de partenaires cimentiers réfractaires en Europe et Turquie',
                    'Trois grades disponibles : standard (1 200 °C), intermédiaire (1 500 °C), haut alumineux (1 800 °C)',
                    'Contrôle qualité systématique : composition alumineuse testée en laboratoire avant livraison',
                    'Conseil technique projet : choix du grade, dosage, agrégats réfractaires compatibles, plan de cuisson',
                    'Conditionnements adaptés : sacs 25kg (palette 1T), big bag 1T',
                    'Livraison dans tout le Sud marocain (Dakhla, Laâyoune, Boujdour, Tan-Tan) et la Mauritanie',
                  ]
                : [
                    'Reliable supply via network of refractory cement partners in Europe and Turkey',
                    'Three grades available: standard (1,200 °C), intermediate (1,500 °C), high-alumina (1,800 °C)',
                    'Systematic quality control: aluminous composition tested in laboratory before delivery',
                    'Project technical advice: grade choice, dosage, compatible refractory aggregates, firing plan',
                    'Adapted packaging: 25kg bags (1T pallet), 1T big bag',
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
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-3xl mx-auto px-6 md:px-12">
          <h2 className="text-3xl font-bold text-[#1B3A5C] mb-8 text-center">
            {isFr ? 'Questions fréquentes sur le ciment réfractaire' : 'Frequently asked questions about refractory cement'}
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

      {/* Internal links */}
      <section className="py-16 md:py-20 bg-[#F7F8FA]">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <h2 className="text-2xl md:text-3xl font-bold text-[#1B3A5C] mb-8 text-center">
            {isFr ? 'Nos autres ciments' : 'Our other cements'}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            <Link
              href={`/${locale}/cpj-45`}
              className="group block bg-white border border-[#E5E7EB] rounded-xl p-6 hover:border-[#E8B84B] hover:shadow-lg transition-all"
            >
              <h3 className="font-bold text-[#1B3A5C] mb-2 group-hover:text-[#C1272D] transition-colors">CPJ 45</h3>
              <p className="text-sm text-[#6B7280] mb-3">
                {isFr ? 'Ciment Portland 45 MPa — béton armé courant. Dès 1 500 DH/T.' : 'Portland 45 MPa — standard concrete. From 1,500 DH/T.'}
              </p>
              <span className="inline-flex items-center gap-1 text-sm font-medium text-[#C1272D] group-hover:gap-2 transition-all">
                {isFr ? 'Découvrir' : 'Discover'} <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </Link>
            <Link
              href={`/${locale}/cpj-55`}
              className="group block bg-white border border-[#E5E7EB] rounded-xl p-6 hover:border-[#E8B84B] hover:shadow-lg transition-all"
            >
              <h3 className="font-bold text-[#1B3A5C] mb-2 group-hover:text-[#C1272D] transition-colors">CPJ 55</h3>
              <p className="text-sm text-[#6B7280] mb-3">
                {isFr ? 'Ciment Portland haute résistance 55 MPa. Dès 1 600 DH/T.' : 'High-strength 55 MPa Portland. From 1,600 DH/T.'}
              </p>
              <span className="inline-flex items-center gap-1 text-sm font-medium text-[#C1272D] group-hover:gap-2 transition-all">
                {isFr ? 'Découvrir' : 'Discover'} <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </Link>
            <Link
              href={`/${locale}/prix-ciment`}
              className="group block bg-white border border-[#E5E7EB] rounded-xl p-6 hover:border-[#E8B84B] hover:shadow-lg transition-all"
            >
              <h3 className="font-bold text-[#1B3A5C] mb-2 group-hover:text-[#C1272D] transition-colors">
                {isFr ? 'Prix du ciment' : 'Cement prices'}
              </h3>
              <p className="text-sm text-[#6B7280] mb-3">
                {isFr ? 'Guide complet des tarifs 2026 — tous types.' : 'Complete 2026 price guide — all types.'}
              </p>
              <span className="inline-flex items-center gap-1 text-sm font-medium text-[#C1272D] group-hover:gap-2 transition-all">
                {isFr ? 'Consulter' : 'View'} <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </Link>
            <Link
              href={`/${locale}/devis`}
              className="group block bg-white border border-[#E5E7EB] rounded-xl p-6 hover:border-[#E8B84B] hover:shadow-lg transition-all"
            >
              <h3 className="font-bold text-[#1B3A5C] mb-2 group-hover:text-[#C1272D] transition-colors">
                {isFr ? 'Devis gratuit' : 'Free quote'}
              </h3>
              <p className="text-sm text-[#6B7280] mb-3">
                {isFr ? 'Ciment réfractaire — réponse sous 24h.' : 'Refractory cement — response within 24h.'}
              </p>
              <span className="inline-flex items-center gap-1 text-sm font-medium text-[#C1272D] group-hover:gap-2 transition-all">
                {isFr ? 'Demander' : 'Request'} <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </Link>
          </div>
        </div>
      </section>

      <CtaBanner
        locale={locale}
        title={isFr ? 'Besoin de ciment réfractaire au Maroc ?' : 'Need refractory cement in Morocco?'}
        subtitle={
          isFr
            ? 'Devis gratuit sous 24h. Ciment réfractaire dès 8 DH/kg, résistance jusqu\'à 1 800 °C. Livraison sacs et big bag dans tout le Sud marocain et la Mauritanie.'
            : 'Free quote within 24h. Refractory cement from 8 DH/kg, resistance up to 1,800 °C. Bags and big bag delivery across Southern Morocco and Mauritania.'
        }
        buttonText={isFr ? 'Demander un devis gratuit' : 'Request a free quote'}
      />
    </>
  );
}
