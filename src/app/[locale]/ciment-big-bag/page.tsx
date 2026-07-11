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
import { PRODUCT_RELATED } from '@/lib/internal-links';
import { CheckCircle, ArrowRight, Container, Truck, Factory, Beaker, ShieldCheck, Package, Anchor, Droplets } from 'lucide-react';

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
      path: '/ciment-big-bag',
      title: '1-Ton Big Bag Cement Morocco — Easy Handling | Dakhla Aménagement',
      description:
        'CPJ 45 and CPJ 55 cement in 1T Big Bags in Morocco. Crane or forklift handling. Ideal for medium sites without silo. From 1,580 DH/T. Southern Morocco delivery.',
      keywords: [
        'cement big bag',
        '1 ton big bag cement',
        'cement container',
        'cement packaging Morocco',
        'big bag cement',
        ...KEYWORDS.products,
        ...KEYWORDS.buying,
      ],
    });
  }

  return buildMetadata({
    locale: 'fr',
    path: '/ciment-big-bag',
    title: 'Ciment Big Bag 1 Tonne Maroc — Manutention Facile | Dakhla Aménagement',
    description:
      'Ciment CPJ 45 et CPJ 55 en Big Bag 1T au Maroc. Manutention par grue ou chariot élévateur. Idéal chantiers moyens sans silo. Prix dès 1 580 DH/T. Livraison Sud Maroc.',
    keywords: [
      'ciment big bag',
      'big bag 1 tonne ciment',
      'ciment conteneur',
      'conditionnement ciment Maroc',
      'big bag ciment',
      ...KEYWORDS.products,
      ...KEYWORDS.buying,
    ],
  });
}

export default async function CimentBigBagPage({
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
          question: 'Qu’est-ce qu’un big bag de ciment ?',
          answer:
            "Un big bag (FIBC — Flexible Intermediate Bulk Container) est un conteneur souple en tissu polypropylène tissé, renforcé, conçu pour transporter et stocker 1 tonne de ciment en vrac. Il est équipé de sangles de levage (4 passantes) pour la manutention par grue ou chariot élévateur, d’une ouverture de remplissage supérieure (diamètre 40 cm) et d’une goulotte de vidange inférieure. Le big bag protège le ciment de l’humidité et permet une manutention industrialisée sans silo fixe.",
        },
        {
          question: 'Quel équipement faut-il pour manipuler un big bag 1T de ciment ?',
          answer:
            "La manipulation d’un big bag 1T nécessite un engin de levage : grue, chariot élévateur (mât télescopique), télescopique ou palonnier à sangles. Les sangles de levage intégrées (4 passantes de 25 à 30 cm) sont conçues pour être facilement saisies par les fourches d’un chariot. Une fois posé au sol, le big bag est stable et peut être vidé par la goulotte inférieure. Pour les chantiers sans engin de levage, privilégiez les sacs 50kg.",
        },
        {
          question: 'Combien de big bags faut-il pour X m³ de béton ?',
          answer:
            "Un big bag 1T contient 1 000 kg de ciment. Pour un béton armé courant dosé à 350 kg/m³, un big bag permet de produire environ 2,85 m³ de béton (1000 ÷ 350). Pour un béton dosé à 300 kg/m³, comptez 3,33 m³ par big bag. Pour un béton dosé à 400 kg/m³, prévoyez 2,5 m³ par big bag. Le big bag 1T est donc idéal pour des gâchées de 2 à 4 m³ — typique des chantiers moyens.",
        },
        {
          question: 'Big bag ou sacs 50kg : que choisir ?',
          answer:
            "Le big bag 1T (1 580 DH/T) est plus cher que les sacs 50kg (1 550 DH/T) d’environ 2 %, mais offre une manutention 20x plus rapide (1 big bag = 20 sacs d’un seul levage). Le big bag est idéal pour les chantiers moyens (5-30T) disposant d’un engin de levage. Pour les petits chantiers (<5T) sans grue, les sacs 50kg restent plus pratiques. Pour les gros chantiers (>30T) avec silo, le vrac (1 500 DH/T) est le plus économique.",
        },
        {
          question: 'Quel est le prix d’un big bag de ciment 1T au Maroc ?',
          answer:
            "Le prix d’un big bag de ciment 1T (CPJ 45) démarre à 1 580 DH/T, soit environ 1 580 DH le big bag. Pour le CPJ 55, comptez à partir de 1 680 DH/T, soit environ 1 680 DH le big bag. Le surcoût par rapport aux sacs 50kg (30 DH/T) reflète le coût de l’emballage big bag réutilisable. Tarifs dégressifs pour les commandes de plusieurs big bags.",
        },
      ]
    : [
        {
          question: 'What is a cement big bag?',
          answer:
            'A big bag (FIBC — Flexible Intermediate Bulk Container) is a flexible container made of woven polypropylene fabric, reinforced, designed to transport and store 1 ton of bulk cement. It is equipped with lifting straps (4 loops) for crane or forklift handling, a top filling opening (40 cm diameter) and a bottom discharge spout. The big bag protects the cement from moisture and enables industrial handling without a fixed silo.',
        },
        {
          question: 'What equipment is needed to handle a 1T big bag of cement?',
          answer:
            'Handling a 1T big bag requires lifting equipment: crane, forklift (telescopic mast), telehandler or sling beam. The integrated lifting straps (4 loops of 25-30 cm) are designed to be easily grabbed by forks. Once placed on the ground, the big bag is stable and can be emptied through the bottom spout. For sites without lifting equipment, prefer 50kg bags.',
        },
        {
          question: 'How many big bags for X m³ of concrete?',
          answer:
            'A 1T big bag contains 1,000 kg of cement. For standard reinforced concrete dosed at 350 kg/m³, one big bag produces about 2.85 m³ of concrete (1000 ÷ 350). For concrete dosed at 300 kg/m³, count 3.33 m³ per big bag. For concrete dosed at 400 kg/m³, plan 2.5 m³ per big bag. The 1T big bag is therefore ideal for 2 to 4 m³ batches — typical of medium sites.',
        },
        {
          question: 'Big bag or 50kg bags: which to choose?',
          answer:
            'The 1T big bag (1,580 DH/T) is more expensive than 50kg bags (1,550 DH/T) by about 2%, but offers 20x faster handling (1 big bag = 20 bags in a single lift). The big bag is ideal for medium sites (5-30T) with lifting equipment. For small sites (<5T) without a crane, 50kg bags remain more practical. For large sites (>30T) with silo, bulk (1,500 DH/T) is the most economical.',
        },
        {
          question: 'What is the price of a 1T cement big bag in Morocco?',
          answer:
            'The price of a 1T cement big bag (CPJ 45) starts at 1,580 DH/T, i.e. about 1,580 DH per big bag. For CPJ 55, count from 1,680 DH/T, i.e. about 1,680 DH per big bag. The premium over 50kg bags (30 DH/T) reflects the cost of the reusable big bag packaging. Volume discounts for orders of multiple big bags.',
        },
      ];

  const advantages = isFr
    ? [
        {
          icon: Factory,
          title: 'Pas de silo requis',
          desc: "Le big bag remplace le silo mobile. Idéal pour les chantiers moyens sans infrastructure de stockage fixe.",
        },
        {
          icon: Anchor,
          title: 'Manutention grue/chariot',
          desc: "4 sangles de levage intégrées pour grue, chariot élévateur ou télescopique. 1 big bag = 1 seul levage (vs 20 sacs).",
        },
        {
          icon: ShieldCheck,
          title: 'Protection humidité',
          desc: "Conteneur étanche en polypropylène avec doublure interne. Protège le ciment de l’humidité et des variations climatiques.",
        },
        {
          icon: Droplets,
          title: 'Volume moyen idéal',
          desc: "1T par big bag — parfait pour les chantiers de 5 à 30T. Compromis optimal entre vrac (trop volumineux) et sacs (trop fragmenté).",
        },
      ]
    : [
        {
          icon: Factory,
          title: 'No silo required',
          desc: 'The big bag replaces the mobile silo. Ideal for medium sites without fixed storage infrastructure.',
        },
        {
          icon: Anchor,
          title: 'Crane/forklift handling',
          desc: '4 integrated lifting straps for crane, forklift or telehandler. 1 big bag = 1 single lift (vs 20 bags).',
        },
        {
          icon: ShieldCheck,
          title: 'Moisture protection',
          desc: 'Sealed polypropylene container with inner lining. Protects the cement from moisture and climate variations.',
        },
        {
          icon: Droplets,
          title: 'Ideal medium volume',
          desc: '1T per big bag — perfect for 5-30T sites. Optimal compromise between bulk (too voluminous) and bags (too fragmented).',
        },
      ];

  const specs = isFr
    ? [
        { prop: 'Capacité', value: '1 000 kg (1 tonne) de ciment CPJ 45 ou CPJ 55' },
        { prop: 'Matériau', value: 'Polypropylène tissé renforcé, anti-UV, avec doublure intérieure PE' },
        { prop: 'Dimensions extérieures', value: '90 × 90 × 110 cm (L × l × h) — adapté palette standard' },
        { prop: 'Sangles de levage', value: '4 passantes croisées de 25-30 cm (charge 1 500 kg sécurisée)' },
        { prop: 'Ouverture de remplissage', value: 'Goulotte supérieure Ø 40 cm, hauteur 30 cm' },
        { prop: 'Goulotte de vidange', value: 'Goulotte inférieure Ø 35 cm avec lien de fermeture' },
        { prop: 'Stabilité', value: 'Base antidérapante, forme cubique stable posée au sol' },
        { prop: 'Réutilisabilité', value: 'Big bag non réutilisé pour le ciment (norme sécurité)' },
        { prop: 'Stockage chantier', value: 'Sur sol plat, à l’abri de la pluie et du soleil direct — max. 3 mois' },
        { prop: 'Prix départ usine Dakhla', value: 'CPJ 45 dès 1 580 DH/T — CPJ 55 dès 1 680 DH/T' },
      ]
    : [
        { prop: 'Capacity', value: '1,000 kg (1 ton) of CPJ 45 or CPJ 55 cement' },
        { prop: 'Material', value: 'Reinforced woven polypropylene, UV-resistant, with inner PE lining' },
        { prop: 'Outer dimensions', value: '90 × 90 × 110 cm (L × W × H) — fits standard pallet' },
        { prop: 'Lifting straps', value: '4 crossed loops of 25-30 cm (safe load 1,500 kg)' },
        { prop: 'Filling opening', value: 'Top spout Ø 40 cm, height 30 cm' },
        { prop: 'Discharge spout', value: 'Bottom spout Ø 35 cm with closure tie' },
        { prop: 'Stability', value: 'Anti-slip base, stable cubic shape on the ground' },
        { prop: 'Reusability', value: 'Big bag not reused for cement (safety standard)' },
        { prop: 'Site storage', value: 'On flat ground, protected from rain and direct sun — max. 3 months' },
        { prop: 'Ex-works Dakhla price', value: 'CPJ 45 from 1,580 DH/T — CPJ 55 from 1,680 DH/T' },
      ];

  const comparison = isFr
    ? [
        {
          crit: 'Prix CPJ 45 (dès)',
          vrac: '1 500 DH/T',
          sacs: '1 550 DH/T',
          bigbag: '1 580 DH/T',
        },
        {
          crit: 'Prix CPJ 55 (dès)',
          vrac: '1 600 DH/T',
          sacs: '1 650 DH/T',
          bigbag: '1 680 DH/T',
        },
        {
          crit: 'Volume minimal',
          vrac: '30T',
          sacs: '1 sac',
          bigbag: '1 big bag (1T)',
        },
        {
          crit: 'Équipement requis',
          vrac: 'Silo de stockage',
          sacs: 'Aucun (manutention 2 personnes)',
          bigbag: 'Grue / chariot élévateur',
        },
        {
          crit: 'Vitesse de manutention',
          vrac: 'Rapide (pompage auto 30-45 min/30T)',
          sacs: 'Lent (20 sacs à manipuler pour 1T)',
          bigbag: 'Très rapide (1 seul levage pour 1T)',
        },
        {
          crit: 'Idéal pour',
          vrac: 'Gros chantiers (>30T)',
          sacs: 'Petits chantiers (<5T), particuliers',
          bigbag: 'Chantiers moyens (5-30T)',
        },
        {
          crit: 'Stockage',
          vrac: 'Silo fixe',
          sacs: 'Palette 1T, local sec',
          bigbag: 'Sol plat, abri pluie',
        },
        {
          crit: 'Déchet emballage',
          vrac: 'Aucun',
          sacs: 'Sacs papier + film palette',
          bigbag: '1 big bag PP par tonne',
        },
      ]
    : [
        {
          crit: 'CPJ 45 price (from)',
          vrac: '1,500 DH/T',
          sacs: '1,550 DH/T',
          bigbag: '1,580 DH/T',
        },
        {
          crit: 'CPJ 55 price (from)',
          vrac: '1,600 DH/T',
          sacs: '1,650 DH/T',
          bigbag: '1,680 DH/T',
        },
        {
          crit: 'Minimum volume',
          vrac: '30T',
          sacs: '1 bag',
          bigbag: '1 big bag (1T)',
        },
        {
          crit: 'Required equipment',
          vrac: 'Storage silo',
          sacs: 'None (2-person handling)',
          bigbag: 'Crane / forklift',
        },
        {
          crit: 'Handling speed',
          vrac: 'Fast (auto pumping 30-45 min/30T)',
          sacs: 'Slow (20 bags to handle for 1T)',
          bigbag: 'Very fast (1 single lift for 1T)',
        },
        {
          crit: 'Ideal for',
          vrac: 'Large sites (>30T)',
          sacs: 'Small sites (<5T), individuals',
          bigbag: 'Medium sites (5-30T)',
        },
        {
          crit: 'Storage',
          vrac: 'Fixed silo',
          sacs: '1T pallet, dry room',
          bigbag: 'Flat ground, rain shelter',
        },
        {
          crit: 'Packaging waste',
          vrac: 'None',
          sacs: 'Paper bags + pallet film',
          bigbag: '1 PP big bag per ton',
        },
      ];

  const features = isFr
    ? [
        { icon: Container, title: 'Big bag 1T', desc: '1 tonne de ciment par big bag — polypropylène renforcé' },
        { icon: Anchor, title: 'Sangles de levage', desc: '4 passantes pour grue ou chariot élévateur — charge 1 500 kg' },
        { icon: Factory, title: 'Production locale', desc: 'Conditionnement sur place au centre de broyage de Dakhla' },
        { icon: Beaker, title: 'Qualité garantie', desc: 'Conforme NM 10.1.004 / EN 197-1 — contrôle laboratoire' },
      ]
    : [
        { icon: Container, title: '1T Big bag', desc: '1 ton of cement per big bag — reinforced polypropylene' },
        { icon: Anchor, title: 'Lifting straps', desc: '4 loops for crane or forklift — 1,500 kg load' },
        { icon: Factory, title: 'Local production', desc: 'Packaging on site at the Dakhla grinding plant' },
        { icon: Beaker, title: 'Guaranteed quality', desc: 'NM 10.1.004 / EN 197-1 compliant — lab control' },
      ];

  const schemas = [
    webPageSchema({
      name: isFr ? 'Ciment Big Bag 1 Tonne Maroc' : '1-Ton Big Bag Cement Morocco',
      description: isFr
        ? 'Ciment CPJ 45 et CPJ 55 en Big Bag 1T au Maroc. Manutention par grue ou chariot élévateur. Idéal chantiers moyens sans silo. Prix dès 1 580 DH/T.'
        : 'CPJ 45 and CPJ 55 cement in 1T Big Bags in Morocco. Crane or forklift handling. Ideal for medium sites without silo. From 1,580 DH/T.',
      path: '/ciment-big-bag',
      locale: loc,
    }),
    breadcrumbSchema([{ name: isFr ? 'Ciment Big Bag' : 'Big Bag Cement', path: '/ciment-big-bag' }], loc),
    serviceSchema({
      name: isFr ? 'Ciment en Big Bag 1T — Vente et Livraison' : '1T Big Bag Cement — Sales and Delivery',
      description: isFr
        ? 'Vente et livraison de ciment CPJ 45 et CPJ 55 en big bag 1T. Manutention facile par grue ou chariot. Idéal chantiers moyens.'
        : 'Sales and delivery of CPJ 45 and CPJ 55 cement in 1T big bags. Easy crane or forklift handling. Ideal for medium sites.',
      path: '/ciment-big-bag',
      locale: loc,
      serviceType: '1T big bag cement packaging and delivery',
    }),
    faqSchema(faqItems),
  ];

  return (
    <>
      <JsonLdScript schema={schemas} />
      <Breadcrumbs items={[{ name: isFr ? 'Ciment Big Bag' : 'Big Bag Cement', path: '/ciment-big-bag' }]} locale={locale} />

      {/* Hero */}
      <section className="bg-gradient-to-br from-[#1B3A5C] to-[#0f1f33] text-white py-20 md:py-28">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <div className="max-w-4xl">
            <span className="inline-block px-4 py-1.5 bg-[#E8B84B]/20 text-[#E8B84B] text-sm font-medium rounded-full mb-6">
              {isFr ? 'Ciment Big Bag 1T — Manutention Facile' : '1T Big Bag Cement — Easy Handling'}
            </span>
            <h1 className="text-[clamp(2rem,5vw,3.5rem)] font-bold leading-[1.1] mb-6">
              {isFr
                ? 'Ciment Big Bag 1 Tonne au Maroc'
                : '1-Ton Big Bag Cement in Morocco'}
            </h1>
            <p className="text-lg md:text-xl text-white/80 leading-relaxed mb-8 max-w-3xl">
              {isFr
                ? 'Ciment CPJ 45 et CPJ 55 en Big Bag 1T, manutention par grue ou chariot élévateur. Idéal pour les chantiers moyens sans silo. Prix dès 1 580 DH/T. Livraison dans tout le Sud marocain et la Mauritanie.'
                : 'CPJ 45 and CPJ 55 cement in 1T Big Bags, handled by crane or forklift. Ideal for medium sites without silo. From 1,580 DH/T. Delivery across Southern Morocco and Mauritania.'}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href={`/${locale}/devis`}
                className="inline-flex items-center gap-2 px-6 py-3 bg-[#C1272D] text-white font-semibold rounded-full hover:bg-[#C1272D]/90 transition-colors"
              >
                {isFr ? 'Demander un devis big bag' : 'Request a big bag quote'}
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href={`/${locale}/ciment-vrac`}
                className="inline-flex items-center gap-2 px-6 py-3 border border-white/30 text-white font-semibold rounded-full hover:bg-white/10 transition-colors"
              >
                {isFr ? 'Voir le ciment en vrac' : 'View bulk cement'}
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

      {/* Advantages */}
      <section className="py-16 md:py-24 bg-[#F7F8FA]">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1B3A5C] mb-4 text-center">
            {isFr ? 'Avantages du ciment en big bag 1T' : 'Advantages of 1T big bag cement'}
          </h2>
          <p className="text-center text-[#6B7280] mb-12 max-w-2xl mx-auto">
            {isFr
              ? 'Le big bag 1T est le compromis idéal entre vrac et sacs 50kg pour les chantiers moyens.'
              : 'The 1T big bag is the ideal compromise between bulk and 50kg bags for medium sites.'}
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {advantages.map((a, i) => (
              <div key={i} className="bg-white border border-[#E5E7EB] rounded-2xl p-6 hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 rounded-full bg-[#C1272D]/10 flex items-center justify-center mb-4">
                  <a.icon className="w-6 h-6 text-[#C1272D]" />
                </div>
                <h3 className="font-bold text-[#1B3A5C] mb-2">{a.title}</h3>
                <p className="text-sm text-[#6B7280] leading-relaxed">{a.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Specifications */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1B3A5C] mb-4 text-center">
            {isFr ? 'Spécifications du big bag 1T' : '1T big bag specifications'}
          </h2>
          <p className="text-center text-[#6B7280] mb-12 max-w-2xl mx-auto">
            {isFr
              ? 'Caractéristiques techniques du big bag 1T de ciment (dimensions, sangles, capacités).'
              : 'Technical specifications of the 1T cement big bag (dimensions, straps, capacities).'}
          </p>
          <div className="overflow-x-auto">
            <table className="w-full max-w-4xl mx-auto border-collapse bg-[#F7F8FA] rounded-xl overflow-hidden">
              <thead>
                <tr className="bg-[#1B3A5C] text-white">
                  <th className="text-left py-4 px-6 font-semibold">
                    {isFr ? 'Spécification' : 'Specification'}
                  </th>
                  <th className="text-left py-4 px-6 font-semibold">
                    {isFr ? 'Valeur' : 'Value'}
                  </th>
                </tr>
              </thead>
              <tbody>
                {specs.map((row, i) => (
                  <tr key={i} className="border-b border-[#E5E7EB] last:border-0 bg-white hover:bg-[#F7F8FA] transition-colors">
                    <td className="py-3.5 px-6 text-[#6B7280] font-medium">{row.prop}</td>
                    <td className="py-3.5 px-6 text-[#1A1A2E] font-semibold">{row.value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Comparison table */}
      <section className="py-16 md:py-24 bg-[#F7F8FA]">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1B3A5C] mb-4 text-center">
            {isFr ? 'Comparatif : Vrac vs Sacs 50kg vs Big Bag 1T' : 'Comparison: Bulk vs 50kg bags vs 1T Big Bag'}
          </h2>
          <p className="text-center text-[#6B7280] mb-12 max-w-2xl mx-auto">
            {isFr
              ? 'Quel conditionnement choisir selon votre chantier ? Tableau comparatif complet.'
              : 'Which packaging to choose for your site? Complete comparison table.'}
          </p>
          <div className="overflow-x-auto">
            <table className="w-full max-w-5xl mx-auto border-collapse bg-white rounded-xl overflow-hidden shadow-sm">
              <thead>
                <tr className="bg-[#1B3A5C] text-white">
                  <th className="text-left py-4 px-4 md:px-6 font-semibold">
                    {isFr ? 'Critère' : 'Criterion'}
                  </th>
                  <th className="text-left py-4 px-4 md:px-6 font-semibold">
                    <Truck className="w-4 h-4 inline mr-1" />
                    {isFr ? 'Vrac' : 'Bulk'}
                  </th>
                  <th className="text-left py-4 px-4 md:px-6 font-semibold">
                    <Package className="w-4 h-4 inline mr-1" />
                    {isFr ? 'Sacs 50kg' : '50kg bags'}
                  </th>
                  <th className="text-left py-4 px-4 md:px-6 font-semibold bg-[#E8B84B]/20">
                    <Container className="w-4 h-4 inline mr-1" />
                    {isFr ? 'Big Bag 1T' : '1T Big Bag'}
                  </th>
                </tr>
              </thead>
              <tbody>
                {comparison.map((row, i) => (
                  <tr key={i} className="border-b border-[#E5E7EB] last:border-0 hover:bg-[#F7F8FA] transition-colors">
                    <td className="py-3.5 px-4 md:px-6 text-[#1A1A2E] font-semibold">{row.crit}</td>
                    <td className="py-3.5 px-4 md:px-6 text-[#6B7280] text-sm">{row.vrac}</td>
                    <td className="py-3.5 px-4 md:px-6 text-[#6B7280] text-sm">{row.sacs}</td>
                    <td className="py-3.5 px-4 md:px-6 text-[#1B3A5C] font-semibold text-sm bg-[#E8B84B]/5">{row.bigbag}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-center text-sm text-[#6B7280] mt-6 max-w-2xl mx-auto">
            {isFr
              ? '* Prix départ usine Dakhla. La livraison est calculée selon la zone. Le big bag 1T est mis en avant comme compromis optimal pour les chantiers moyens (5-30T) avec engin de levage.'
              : '* Ex-works Dakhla prices. Delivery calculated by zone. The 1T big bag is highlighted as the optimal compromise for medium sites (5-30T) with lifting equipment.'}
          </p>
        </div>
      </section>

      {/* Long-form content */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6 md:px-12">
          <div className="prose prose-lg max-w-none">
            <h2 className="text-3xl font-bold text-[#1B3A5C] mb-6">
              {isFr ? 'Le ciment en big bag 1T : la solution des chantiers moyens' : '1T big bag cement: the medium-site solution'}
            </h2>
            <p className="text-[#1A1A2E]/80 leading-relaxed mb-6">
              {isFr
                ? "Le big bag 1T (FIBC — Flexible Intermediate Bulk Container) est un conteneur souple en polypropylène tissé renforcé qui contient 1 tonne de ciment en vrac. Il est équipé de 4 sangles de levage intégrées permettant une manutention facile par grue, chariot élévateur ou télescopique. C’est le conditionnement de choix pour les chantiers moyens (5 à 30 tonnes) qui ne justifient pas l’installation d’un silo mais veulent éviter la manutention fastidieuse des sacs 50kg."
                : "The 1T big bag (FIBC — Flexible Intermediate Bulk Container) is a flexible container made of reinforced woven polypropylene that contains 1 ton of bulk cement. It is equipped with 4 integrated lifting straps allowing easy handling by crane, forklift or telehandler. It is the packaging of choice for medium sites (5 to 30 tons) that do not justify installing a silo but want to avoid the tedious handling of 50kg bags."}
            </p>
            <p className="text-[#1A1A2E]/80 leading-relaxed mb-6">
              {isFr
                ? "Dakhla Aménagement propose le CPJ 45 (1 580 DH/T) et le CPJ 55 (1 680 DH/T) en big bag 1T, conformes aux normes NM 10.1.004 et EN 197-1. Le conditionnement est réalisé dans notre centre de broyage de Dakhla, garantissant la fraîcheur du ciment et la traçabilité de chaque lot. Les big bags sont livrés dans tout le Sud marocain (Dakhla, Laâyoune, Boujdour, Tan-Tan, Guelmim) et en Mauritanie, sur palette ou en vrac sur camion plateau."
                : "Dakhla Aménagement offers CPJ 45 (1,580 DH/T) and CPJ 55 (1,680 DH/T) in 1T big bags, compliant with NM 10.1.004 and EN 197-1 standards. Packaging is done at our Dakhla grinding plant, ensuring cement freshness and batch traceability. Big bags are delivered across Southern Morocco (Dakhla, Laayoune, Boujdour, Tan-Tan, Guelmim) and Mauritania, on pallet or bulk on flatbed truck."}
            </p>

            <h3 className="text-2xl font-bold text-[#1B3A5C] mt-10 mb-4">
              {isFr ? 'Pourquoi choisir le big bag 1T ?' : 'Why choose the 1T big bag?'}
            </h3>
            <ul className="space-y-3 mb-6">
              {(isFr
                ? [
                    'Manutention 20x plus rapide que les sacs 50kg (1 seul levage pour 1T)',
                    'Aucune infrastructure de silo requise — idéal chantiers temporaires ou itinérants',
                    'Protection optimale contre l’humidité (doublure PE intérieure étanche)',
                    'Stable au sol une fois posé — pas de risque de renversement comme les sacs',
                    'Vidange facile par goulotte inférieure (diamètre 35 cm) sans poussière excessive',
                    'Compromis économique : seulement 2 % plus cher que les sacs, 5 % plus cher que le vrac',
                    'Adapté à tous les engins de levage courants (grue, chariot, télescopique, palonnier)',
                  ]
                : [
                    '20x faster handling than 50kg bags (1 single lift for 1T)',
                    'No silo infrastructure required — ideal for temporary or itinerant sites',
                    'Optimal moisture protection (sealed inner PE lining)',
                    'Stable on the ground once placed — no risk of tipping like bags',
                    'Easy discharge through bottom spout (35 cm diameter) without excessive dust',
                    'Economic compromise: only 2% more expensive than bags, 5% more than bulk',
                    'Adapted to all common lifting equipment (crane, forklift, telehandler, sling beam)',
                  ]
              ).map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-[#1A1A2E]/80">
                  <CheckCircle className="w-5 h-5 text-[#E8B84B] shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <h3 className="text-2xl font-bold text-[#1B3A5C] mt-10 mb-4">
              {isFr ? 'Stockage des big bags sur chantier' : 'Big bag storage on site'}
            </h3>
            <p className="text-[#1A1A2E]/80 leading-relaxed mb-6">
              {isFr
                ? "Les big bags se stockent sur sol plat et stable, idéalement sur une dalle béton ou un radier. Veillez à les protéger de la pluie (bâche) et du soleil direct (anti-UV du tissu mais dégradation à long terme). Ne superposez pas les big bags pleins (sauf modèles spécifiques autorisés). Durée de conservation : 3 mois maximum en emballage d’origine non ouvert. Une fois entamé, videz le big bag dans les 7 jours pour éviter toute prise partielle du ciment restant."
                : "Big bags are stored on flat and stable ground, ideally on a concrete slab or raft. Make sure to protect them from rain (tarpaulin) and direct sun (fabric UV-resistant but long-term degradation). Do not stack full big bags (unless specific authorized models). Storage life: maximum 3 months in original unopened packaging. Once opened, empty the big bag within 7 days to prevent partial setting of the remaining cement."}
            </p>

            <h3 className="text-2xl font-bold text-[#1B3A5C] mt-10 mb-4">
              {isFr ? 'Prix du big bag 1T de ciment au Maroc' : '1T cement big bag price in Morocco'}
            </h3>
            <p className="text-[#1A1A2E]/80 leading-relaxed mb-6">
              {isFr
                ? "Le prix du big bag 1T démarre à 1 580 DH/T pour le CPJ 45 (soit 1 580 DH le big bag) et 1 680 DH/T pour le CPJ 55 (soit 1 680 DH le big bag). Le surcoût de 30 DH/T par rapport aux sacs 50kg reflète le coût de l’emballage big bag (polypropylène renforcé + sangles + doublure PE). Pour les commandes de plusieurs big bags, des tarifs dégressifs s’appliquent. Demandez un devis gratuit pour un chiffrage précis incluant la livraison sur votre chantier."
                : "The 1T big bag price starts at 1,580 DH/T for CPJ 45 (i.e. 1,580 DH per big bag) and 1,680 DH/T for CPJ 55 (i.e. 1,680 DH per big bag). The premium of 30 DH/T over 50kg bags reflects the cost of the big bag packaging (reinforced polypropylene + straps + PE lining). For orders of multiple big bags, volume discounts apply. Request a free quote for precise pricing including delivery to your site."}
            </p>
            <div className="bg-[#F7F8FA] border border-[#E5E7EB] rounded-xl p-6 my-6">
              <Link
                href={`/${locale}/prix-ciment`}
                className="inline-flex items-center gap-2 text-[#C1272D] font-medium hover:gap-3 transition-all"
              >
                {isFr ? '→ Comparer les prix vrac / sacs / big bag' : '→ Compare bulk / bags / big bag prices'}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 md:py-24 bg-[#F7F8FA]">
        <div className="max-w-3xl mx-auto px-6 md:px-12">
          <h2 className="text-3xl font-bold text-[#1B3A5C] mb-8 text-center">
            {isFr ? 'Questions fréquentes sur le big bag 1T' : 'Frequently asked questions about 1T big bag'}
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

      <RelatedLinks links={PRODUCT_RELATED} locale={locale} title={isFr ? 'Produits liés' : 'Related products'} />
      <CtaBanner
        locale={locale}
        title={isFr ? 'Besoin de ciment en big bag 1T au Maroc ?' : 'Need 1T big bag cement in Morocco?'}
        subtitle={
          isFr
            ? 'Devis gratuit sous 24h. CPJ 45 dès 1 580 DH/T, CPJ 55 dès 1 680 DH/T (big bag 1T). Livraison dans tout le Sud marocain et la Mauritanie.'
            : 'Free quote within 24h. CPJ 45 from 1,580 DH/T, CPJ 55 from 1,680 DH/T (1T big bag). Delivery across Southern Morocco and Mauritania.'
        }
        buttonText={isFr ? 'Demander un devis big bag' : 'Request a big bag quote'}
      />
    </>
  );
}
