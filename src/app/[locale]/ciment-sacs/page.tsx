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
import { PRODUCT_RELATED } from '@/lib/internal-links';
import { CheckCircle, ArrowRight, Package, Truck, Factory, Beaker, Warehouse, Hand, Hammer, Home, Boxes } from 'lucide-react';

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
      path: '/ciment-sacs',
      title: '50kg Bag Cement Morocco — 1-Ton Pallets | Dakhla Aménagement',
      description:
        'CPJ 45 and CPJ 55 cement in 50kg bags in Morocco. Standard packaging for masonry and small sites. 1T pallets (20 bags). From 1,550 DH/T. Southern Morocco delivery.',
      keywords: [
        '50kg cement bags',
        'cement bags Morocco',
        'cement bag',
        'cement pallet',
        'masonry cement',
        ...KEYWORDS.products,
        ...KEYWORDS.buying,
      ],
    });
  }

  return buildMetadata({
    locale: 'fr',
    path: '/ciment-sacs',
    title: 'Ciment en Sacs 50kg Maroc — Palettes 1Tonne | Dakhla Aménagement',
    description:
      'Ciment CPJ 45 et CPJ 55 en sacs 50kg au Maroc. Conditionnement classique pour maçonnerie et petits chantiers. Palettes 1T (20 sacs). Prix dès 1 550 DH/T. Livraison Sud Maroc.',
    keywords: [
      'ciment sacs 50kg',
      'ciment en sacs Maroc',
      'sac ciment',
      'palette ciment',
      'ciment maçonnerie',
      ...KEYWORDS.products,
      ...KEYWORDS.buying,
    ],
  });
}

export default async function CimentSacsPage({
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
          question: 'Combien pèse une palette de sacs de ciment 50kg ?',
          answer:
            "Une palette complète de sacs de ciment 50kg pèse 1 000 kg (1 tonne), soit 20 sacs de 50 kg. Les palettes sont filmées et cerclées pour la stabilité au transport. Une palette 1T occupe environ 1,2 m x 0,8 m au sol et 1,2 m de hauteur — facile à stocker et à manutentionner avec un transpalette ou chariot élévateur.",
        },
        {
          question: 'Combien de sacs de ciment 50kg pour 1 m³ de béton ?',
          answer:
            "Pour un béton armé courant dosé à 350 kg/m³, il faut 7 sacs de 50 kg (350 ÷ 50). Pour un béton de fondation dosé à 300 kg/m³, comptez 6 sacs. Pour un béton haute performance dosé à 400 kg/m³, prévoyez 8 sacs. Ces dosages sont indicatifs et dépendent de la classe d’exposition et des caractéristiques du chantier.",
        },
        {
          question: 'Quelle est la durée de vie d’un sac de ciment 50kg ?',
          answer:
            "Un sac de ciment 50kg non ouvert et stocké correctement (à l’abri de l’humidité, sur palette surélevée, en emballage d’origine) conserve ses propriétés pendant 3 mois à compter de la fabrication. Au-delà, la résistance peut diminuer. Ne jamais utiliser un sac qui présente des grumeaux ou une prise partielle. Vérifiez la date de fabrication imprimée sur le sac.",
        },
        {
          question: 'Le sac de ciment 50kg est-il adapté aux particuliers ?',
          answer:
            "Oui, le sac de ciment 50kg est le format idéal pour les particuliers, les petits chantiers de rénovation, la maçonnerie ponctuelle (murets, dalles, réparations). Sa manipulation reste possible à deux personnes ou avec un transpalette. Pour les chantiers de plus de 5 tonnes, le big bag 1T ou le vrac deviennent plus économiques et pratiques.",
        },
        {
          question: 'Quel prix pour un sac de ciment 50kg au Maroc ?',
          answer:
            "Le prix du sac de ciment 50kg CPJ 45 démarre à 1 550 DH/T, soit environ 77,50 DH le sac (en palette complète de 20 sacs). Le CPJ 55 démarre à 1 650 DH/T, soit environ 82,50 DH le sac. Pour les achats à l’unité hors palette, un surplus peut s’appliquer. Demandez un devis pour un tarif précis selon votre quantité.",
        },
      ]
    : [
        {
          question: 'How much does a pallet of 50kg cement bags weigh?',
          answer:
            'A full pallet of 50kg cement bags weighs 1,000 kg (1 ton), i.e. 20 bags of 50 kg. The pallets are wrapped and strapped for transport stability. A 1T pallet occupies about 1.2 m x 0.8 m on the ground and 1.2 m height — easy to store and handle with a pallet truck or forklift.',
        },
        {
          question: 'How many 50kg cement bags for 1 m³ of concrete?',
          answer:
            'For standard reinforced concrete dosed at 350 kg/m³, you need 7 bags of 50 kg (350 ÷ 50). For foundation concrete dosed at 300 kg/m³, count 6 bags. For high-performance concrete dosed at 400 kg/m³, plan 8 bags. These dosages are indicative and depend on the exposure class and site characteristics.',
        },
        {
          question: 'What is the shelf life of a 50kg cement bag?',
          answer:
            'A 50kg cement bag that is unopened and stored correctly (protected from moisture, on a raised pallet, in original packaging) retains its properties for 3 months from manufacture. Beyond that, strength may decrease. Never use a bag with lumps or partial setting. Check the manufacture date printed on the bag.',
        },
        {
          question: 'Is the 50kg cement bag suitable for individuals?',
          answer:
            'Yes, the 50kg cement bag is the ideal format for individuals, small renovation sites, occasional masonry (low walls, slabs, repairs). Handling is possible for two people or with a pallet truck. For sites over 5 tons, 1T big bag or bulk become more economical and practical.',
        },
        {
          question: 'What is the price of a 50kg cement bag in Morocco?',
          answer:
            'CPJ 45 50kg cement bag price starts at 1,550 DH/T, i.e. about 77.50 DH per bag (in a full 20-bag pallet). CPJ 55 starts at 1,650 DH/T, i.e. about 82.50 DH per bag. For individual purchases outside pallets, a surcharge may apply. Request a quote for a precise rate based on your quantity.',
        },
      ];

  const advantages = isFr
    ? [
        {
          icon: Hand,
          title: 'Manutention facile',
          desc: 'Sac de 50 kg manipulable à deux personnes ou avec un transpalette. Idéal pour les chantiers sans grue.',
        },
        {
          icon: Home,
          title: 'Petits chantiers',
          desc: 'Format adapté aux particuliers et artisans : rénovation, maçonnerie ponctuelle, réparations.',
        },
        {
          icon: Warehouse,
          title: 'Stockage facile',
          desc: 'Palette 1T filmée — se stocke sur étagères ou au sol sur palette surélevée, à l’abri de l’humidité.',
        },
        {
          icon: Boxes,
          title: 'Format universel',
          desc: 'Sac 50kg = standard du BTP marocain. Compatible avec tous les chantiers, du particulier au professionnel.',
        },
      ]
    : [
        {
          icon: Hand,
          title: 'Easy handling',
          desc: '50 kg bag handleable by two people or with a pallet truck. Ideal for sites without a crane.',
        },
        {
          icon: Home,
          title: 'Small sites',
          desc: 'Format suited for individuals and craftsmen: renovation, occasional masonry, repairs.',
        },
        {
          icon: Warehouse,
          title: 'Easy storage',
          desc: 'Wrapped 1T pallet — stored on shelves or on the floor on raised pallet, protected from moisture.',
        },
        {
          icon: Boxes,
          title: 'Universal format',
          desc: '50kg bag = Moroccan construction standard. Compatible with all sites, from individual to professional.',
        },
      ];

  const specs = isFr
    ? [
        { prop: 'Poids du sac', value: '50 kg (± 0,5 kg)' },
        { prop: 'Composition du sac', value: 'Papier Kraft multicouche (3 à 4 plis) + polyéthylène intérieur' },
        { prop: 'Palette standard', value: '1 tonne = 20 sacs de 50 kg' },
        { prop: 'Dimensions palette', value: '1,2 m × 0,8 m × 1,2 m (L × l × h)' },
        { prop: 'Conditionnement palette', value: 'Film rétractable + cerclage horizontal et vertical' },
        { prop: 'Types disponibles', value: 'CPJ 45 (45 MPa) et CPJ 55 (55 MPa)' },
        { prop: 'Durée de conservation', value: '3 mois en emballage d’origine non ouvert, à l’abri de l’humidité' },
        { prop: 'Stockage recommandé', value: 'Palette surélevée du sol, local sec et ventilé, à l’abri du soleil' },
        { prop: 'Normes', value: 'NM 10.1.004 / EN 197-1' },
        { prop: 'Prix départ usine Dakhla', value: 'CPJ 45 dès 1 550 DH/T — CPJ 55 dès 1 650 DH/T' },
      ]
    : [
        { prop: 'Bag weight', value: '50 kg (± 0.5 kg)' },
        { prop: 'Bag composition', value: 'Multilayer Kraft paper (3-4 plies) + inner polyethylene' },
        { prop: 'Standard pallet', value: '1 ton = 20 bags of 50 kg' },
        { prop: 'Pallet dimensions', value: '1.2 m × 0.8 m × 1.2 m (L × W × H)' },
        { prop: 'Pallet packaging', value: 'Shrink film + horizontal and vertical strapping' },
        { prop: 'Available types', value: 'CPJ 45 (45 MPa) and CPJ 55 (55 MPa)' },
        { prop: 'Shelf life', value: '3 months in original unopened packaging, protected from moisture' },
        { prop: 'Recommended storage', value: 'Raised pallet, dry and ventilated room, protected from sun' },
        { prop: 'Standards', value: 'NM 10.1.004 / EN 197-1' },
        { prop: 'Ex-works Dakhla price', value: 'CPJ 45 from 1,550 DH/T — CPJ 55 from 1,650 DH/T' },
      ];

  const uses = isFr
    ? [
        {
          icon: Hammer,
          title: 'Maçonnerie',
          desc: 'Murs en agglos, chainages, linteaux, enduits. Mortier bâtard économique et performant.',
        },
        {
          icon: Home,
          title: 'Rénovation',
          desc: 'Réparations, reprises de béton, scellement, petites maçonneries. Format idéal pour particulier.',
        },
        {
          icon: Boxes,
          title: 'Particuliers & artisans',
          desc: 'Petits chantiers jusqu’à 5T. Achat à l’unité ou par palette. Manipulation sans engin de levage.',
        },
      ]
    : [
        {
          icon: Hammer,
          title: 'Masonry',
          desc: 'Block walls, tie beams, lintels, plasters. Economical and performing masonry mortar.',
        },
        {
          icon: Home,
          title: 'Renovation',
          desc: 'Repairs, concrete patching, sealing, small masonry. Ideal format for individuals.',
        },
        {
          icon: Boxes,
          title: 'Individuals & craftsmen',
          desc: 'Small sites up to 5T. Purchase per unit or per pallet. Handling without lifting equipment.',
        },
      ];

  const features = isFr
    ? [
        { icon: Package, title: 'Sac 50kg', desc: 'Standard du BTP marocain — papier Kraft multicouche' },
        { icon: Truck, title: 'Palette 1T filmée', desc: '20 sacs par palette, cerclée et filmée pour transport' },
        { icon: Factory, title: 'Production locale', desc: 'Centre de broyage Dakhla — conditionnement sur place' },
        { icon: Beaker, title: 'Qualité garantie', desc: 'Conforme NM 10.1.004 / EN 197-1 — contrôle lab' },
      ]
    : [
        { icon: Package, title: '50kg bag', desc: 'Moroccan construction standard — multilayer Kraft paper' },
        { icon: Truck, title: 'Wrapped 1T pallet', desc: '20 bags per pallet, strapped and wrapped for transport' },
        { icon: Factory, title: 'Local production', desc: 'Dakhla grinding plant — packaging on site' },
        { icon: Beaker, title: 'Guaranteed quality', desc: 'NM 10.1.004 / EN 197-1 compliant — lab control' },
      ];

  const schemas = [
    webPageSchema({
      name: isFr ? 'Ciment en Sacs 50kg Maroc' : '50kg Bag Cement Morocco',
      description: isFr
        ? 'Ciment CPJ 45 et CPJ 55 en sacs 50kg au Maroc. Palettes 1T (20 sacs). Prix dès 1 550 DH/T. Livraison Sud Maroc.'
        : 'CPJ 45 and CPJ 55 cement in 50kg bags in Morocco. 1T pallets (20 bags). From 1,550 DH/T. Southern Morocco delivery.',
      path: '/ciment-sacs',
      locale: loc,
    }),
    breadcrumbSchema([{ name: isFr ? 'Ciment en Sacs' : 'Bag Cement', path: '/ciment-sacs' }], loc),
    serviceSchema({
      name: isFr ? 'Ciment en Sacs 50kg — Vente et Livraison' : '50kg Bag Cement — Sales and Delivery',
      description: isFr
        ? 'Vente et livraison de ciment CPJ 45 et CPJ 55 en sacs 50kg, palettes 1T. Idéal maçonnerie et petits chantiers.'
        : 'Sales and delivery of CPJ 45 and CPJ 55 cement in 50kg bags, 1T pallets. Ideal for masonry and small sites.',
      path: '/ciment-sacs',
      locale: loc,
      serviceType: '50kg bag cement packaging and delivery',
    }),
    faqSchema(faqItems),
  ];

  return (
    <>
      <JsonLdScript schema={schemas} />
      <Breadcrumbs items={[{ name: isFr ? 'Ciment en Sacs' : 'Bag Cement', path: '/ciment-sacs' }]} locale={locale} />

      {/* Hero */}
      <section className="bg-gradient-to-br from-[#1B3A5C] to-[#0f1f33] text-white py-20 md:py-28">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <div className="max-w-4xl">
            <span className="inline-block px-4 py-1.5 bg-[#E8B84B]/20 text-[#E8B84B] text-sm font-medium rounded-full mb-6">
              {isFr ? 'Ciment en Sacs 50kg — Palette 1T' : '50kg Bag Cement — 1T Pallet'}
            </span>
            <h1 className="text-[clamp(2rem,5vw,3.5rem)] font-bold leading-[1.1] mb-6">
              {isFr
                ? 'Ciment en Sacs 50kg au Maroc — Palettes 1 Tonne'
                : '50kg Bag Cement in Morocco — 1-Ton Pallets'}
            </h1>
            <p className="text-lg md:text-xl text-white/80 leading-relaxed mb-8 max-w-3xl">
              {isFr
                ? 'Ciment CPJ 45 et CPJ 55 en sacs 50kg, palettes filmées de 1T (20 sacs). Conditionnement classique pour la maçonnerie, la rénovation et les petits chantiers. Prix dès 1 550 DH/T. Livraison dans tout le Sud marocain.'
                : 'CPJ 45 and CPJ 55 cement in 50kg bags, wrapped 1T pallets (20 bags). Standard packaging for masonry, renovation and small sites. From 1,550 DH/T. Delivery across Southern Morocco.'}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href={`/${locale}/devis`}
                className="inline-flex items-center gap-2 px-6 py-3 bg-[#C1272D] text-white font-semibold rounded-full hover:bg-[#C1272D]/90 transition-colors"
              >
                {isFr ? 'Demander un devis sacs' : 'Request a bag quote'}
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href={`/${locale}/ciment-big-bag`}
                className="inline-flex items-center gap-2 px-6 py-3 border border-white/30 text-white font-semibold rounded-full hover:bg-white/10 transition-colors"
              >
                {isFr ? 'Voir le Big Bag 1T' : 'View 1T Big Bag'}
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
            {isFr ? 'Avantages du ciment en sacs 50kg' : 'Advantages of 50kg bag cement'}
          </h2>
          <p className="text-center text-[#6B7280] mb-12 max-w-2xl mx-auto">
            {isFr
              ? 'Le sac de 50kg est le conditionnement de référence pour la maçonnerie et les petits chantiers au Maroc.'
              : 'The 50kg bag is the reference packaging for masonry and small sites in Morocco.'}
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

      {/* Technical specifications */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1B3A5C] mb-4 text-center">
            {isFr ? 'Spécifications du sac 50kg et de la palette 1T' : '50kg bag and 1T pallet specifications'}
          </h2>
          <p className="text-center text-[#6B7280] mb-12 max-w-2xl mx-auto">
            {isFr
              ? 'Caractéristiques techniques du conditionnement sacs 50kg / palette 1T de Dakhla Aménagement.'
              : 'Technical specifications of Dakhla Aménagement 50kg bag / 1T pallet packaging.'}
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

      {/* Ideal usage */}
      <section className="py-16 md:py-24 bg-[#F7F8FA]">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1B3A5C] mb-4 text-center">
            {isFr ? 'Usage idéal des sacs 50kg' : 'Ideal use of 50kg bags'}
          </h2>
          <p className="text-center text-[#6B7280] mb-12 max-w-2xl mx-auto">
            {isFr
              ? 'Les sacs 50kg sont parfaits pour la maçonnerie, la rénovation et les petits chantiers.'
              : '50kg bags are perfect for masonry, renovation and small sites.'}
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {uses.map((u, i) => (
              <div key={i} className="bg-white border border-[#E5E7EB] rounded-2xl p-8 hover:shadow-lg transition-shadow">
                <div className="w-14 h-14 rounded-full bg-[#1B3A5C]/5 flex items-center justify-center mb-4">
                  <u.icon className="w-7 h-7 text-[#1B3A5C]" />
                </div>
                <h3 className="text-xl font-bold text-[#1B3A5C] mb-2">{u.title}</h3>
                <p className="text-sm text-[#6B7280] leading-relaxed">{u.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Long-form content */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6 md:px-12">
          <div className="prose prose-lg max-w-none">
            <h2 className="text-3xl font-bold text-[#1B3A5C] mb-6">
              {isFr ? 'Le sac de ciment 50kg : le format universel du BTP marocain' : 'The 50kg cement bag: the universal Moroccan construction format'}
            </h2>
            <p className="text-[#1A1A2E]/80 leading-relaxed mb-6">
              {isFr
                ? "Le sac de ciment de 50 kg est le conditionnement le plus répandu au Maroc, utilisé aussi bien par les particuliers que par les artisans et les entreprises de BTP. Conditionné en papier Kraft multicouche avec doublure polyéthène intérieure, il protège le ciment de l’humidité et se manipule facilement à deux personnes ou avec un transpalette. La palette standard de 1 tonne (20 sacs) permet un stockage compact et un transport optimisé."
                : "The 50 kg cement bag is the most widespread packaging in Morocco, used by individuals as well as craftsmen and construction companies. Packaged in multilayer Kraft paper with inner polyethylene lining, it protects the cement from moisture and is easily handled by two people or with a pallet truck. The standard 1-ton pallet (20 bags) allows compact storage and optimized transport."}
            </p>
            <p className="text-[#1A1A2E]/80 leading-relaxed mb-6">
              {isFr
                ? "Dakhla Aménagement propose le CPJ 45 et le CPJ 55 en sacs 50kg, palettes 1T filmées et cerclées, conformes aux normes NM 10.1.004 et EN 197-1. Le conditionnement est effectué directement dans notre centre de broyage de Dakhla, garantissant la fraîcheur du ciment et la traçabilité de chaque lot. Les sacs sont livrés dans tout le Sud marocain (Dakhla, Laâyoune, Boujdour, Tan-Tan, Guelmim) et en Mauritanie."
                : "Dakhla Aménagement offers CPJ 45 and CPJ 55 in 50kg bags, wrapped and strapped 1T pallets, compliant with NM 10.1.004 and EN 197-1 standards. Packaging is done directly at our Dakhla grinding plant, ensuring cement freshness and batch traceability. Bags are delivered across Southern Morocco (Dakhla, Laayoune, Boujdour, Tan-Tan, Guelmim) and Mauritania."}
            </p>

            <h3 className="text-2xl font-bold text-[#1B3A5C] mt-10 mb-4">
              {isFr ? 'Dosage béton à partir de sacs 50kg' : 'Concrete dosage from 50kg bags'}
            </h3>
            <p className="text-[#1A1A2E]/80 leading-relaxed mb-6">
              {isFr
                ? "Pour un béton armé courant dosé à 350 kg/m³, comptez 7 sacs de 50 kg par mètre cube de béton. Pour un béton de fondation (300 kg/m³), prévoyez 6 sacs. Pour un béton haute performance (400 kg/m³), utilisez 8 sacs. Pour un mortier de maçonnerie (jointoiement agglos), comptez environ 350 kg de ciment pour 1 m³ de sable, soit 7 sacs. Ces dosages sont indicatifs et doivent être validés selon la classe d’exposition et les spécifications de votre ouvrage."
                : "For standard reinforced concrete dosed at 350 kg/m³, count 7 bags of 50 kg per cubic meter of concrete. For foundation concrete (300 kg/m³), plan 6 bags. For high-performance concrete (400 kg/m³), use 8 bags. For masonry mortar (block jointing), count about 350 kg of cement for 1 m³ of sand, i.e. 7 bags. These dosages are indicative and must be validated based on the exposure class and your structure specifications."}
            </p>

            <h3 className="text-2xl font-bold text-[#1B3A5C] mt-10 mb-4">
              {isFr ? 'Stockage des sacs de ciment sur chantier' : 'Storing cement bags on site'}
            </h3>
            <ul className="space-y-3 mb-6">
              {(isFr
                ? [
                    'Stockez les sacs sur palette surélevée du sol (min. 10 cm) — jamais en contact direct avec le sol',
                    'Placez les palettes dans un local sec et ventilé, à l’abri de la pluie et du soleil direct',
                    'Respectez la règle FIFO (First In, First Out) — utilisez d’abord les sacs les plus anciens',
                    'Vérifiez l’intégrité des sacs avant utilisation — rejetez ceux présentant des grumeaux',
                    'Durée de conservation maximale : 3 mois en emballage d’origine non ouvert',
                    'Ne superposez pas plus de 2 palettes — risque d’écrasement des sacs du bas',
                  ]
                : [
                    'Store bags on a raised pallet (min. 10 cm) — never in direct contact with the ground',
                    'Place pallets in a dry and ventilated room, protected from rain and direct sun',
                    'Follow the FIFO rule (First In, First Out) — use the oldest bags first',
                    'Check bag integrity before use — reject those with lumps',
                    'Maximum shelf life: 3 months in original unopened packaging',
                    'Do not stack more than 2 pallets — risk of crushing lower bags',
                  ]
              ).map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-[#1A1A2E]/80">
                  <CheckCircle className="w-5 h-5 text-[#E8B84B] shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <h3 className="text-2xl font-bold text-[#1B3A5C] mt-10 mb-4">
              {isFr ? 'Prix du ciment en sacs 50kg au Maroc' : '50kg bag cement price in Morocco'}
            </h3>
            <p className="text-[#1A1A2E]/80 leading-relaxed mb-6">
              {isFr
                ? "Le prix du ciment en sacs 50kg démarre à 1 550 DH/T pour le CPJ 45 (palette 1T) et 1 650 DH/T pour le CPJ 55, soit environ 77,50 DH et 82,50 DH le sac en palette complète. Le sac à l’unité hors palette peut être légèrement plus cher. Pour les achats de plusieurs palettes, des tarifs dégressifs s’appliquent. Demandez un devis gratuit pour un chiffrage précis incluant la livraison sur votre chantier."
                : "50kg bag cement price starts at 1,550 DH/T for CPJ 45 (1T pallet) and 1,650 DH/T for CPJ 55, i.e. about 77.50 DH and 82.50 DH per bag in full pallet. Individual bag outside pallet may be slightly more expensive. For multi-pallet purchases, volume discounts apply. Request a free quote for precise pricing including delivery to your site."}
            </p>
            <div className="bg-[#F7F8FA] border border-[#E5E7EB] rounded-xl p-6 my-6">
              <Link
                href={`/${locale}/prix-ciment`}
                className="inline-flex items-center gap-2 text-[#C1272D] font-medium hover:gap-3 transition-all"
              >
                {isFr ? '→ Comparer les prix sacs / vrac / big bag' : '→ Compare bag / bulk / big bag prices'}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 md:py-24 bg-[#F7F8FA]">
        <div className="max-w-3xl mx-auto px-6 md:px-12">
          <h2 className="text-3xl font-bold text-[#1B3A5C] mb-8 text-center">
            {isFr ? 'Questions fréquentes sur le ciment en sacs' : 'Frequently asked questions about bag cement'}
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
      <RelatedArticles
        articleSlugs={['stockage-ciment-chantier', 'big-bag-vs-sacs', 'conditionnement-vrac']}
        locale={locale}
      />
      <CtaBanner
        locale={locale}
        title={isFr ? 'Besoin de ciment en sacs 50kg au Maroc ?' : 'Need 50kg bag cement in Morocco?'}
        subtitle={
          isFr
            ? 'Devis gratuit sous 24h. CPJ 45 dès 1 550 DH/T, CPJ 55 dès 1 650 DH/T (palette 1T). Livraison dans tout le Sud marocain et la Mauritanie.'
            : 'Free quote within 24h. CPJ 45 from 1,550 DH/T, CPJ 55 from 1,650 DH/T (1T pallet). Delivery across Southern Morocco and Mauritania.'
        }
        buttonText={isFr ? 'Demander un devis sacs' : 'Request a bag quote'}
      />
    </>
  );
}
