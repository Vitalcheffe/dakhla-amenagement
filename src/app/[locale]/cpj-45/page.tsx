import Link from 'next/link';
import { buildMetadata, KEYWORDS } from '@/lib/seo';
import {
  webPageSchema,
  breadcrumbSchema,
  serviceSchema,
  productSchema,
  faqSchema,
  speakableSchema,
} from '@/lib/structured-data';
import { JsonLdScript } from '@/components/shared/JsonLd';
import { Breadcrumbs } from '@/components/shared/Breadcrumbs';
import { RelatedLinks, CtaBanner } from '@/components/shared/RelatedLinks';
import { RelatedArticles } from '@/components/shared/RelatedArticles';
import { PRODUCT_RELATED } from '@/lib/internal-links';
import { CheckCircle, ArrowRight, Factory, Beaker, Truck, Package, Container, Building2, Layers, HardHat } from 'lucide-react';

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
      path: '/cpj-45',
      title: 'CPJ 45 Cement Morocco — 45 MPa, 1500 DH/T | SDAD',
      description:
        'CPJ 45 cement (Composite Portland 45 MPa) in Morocco. Reinforced concrete, slabs, foundations. NM 10.1.004/EN 197-1 compliant. From 1,500 DH/T. Bulk, bags, big bag. Free quote.',
      keywords: [
        'CPJ 45',
        'CPJ 45 cement Morocco',
        'CPJ 45 price',
        '45 MPa cement',
        'Composite Portland cement',
        ...KEYWORDS.products,
        ...KEYWORDS.pricing,
      ],
    });
  }

  return buildMetadata({
    locale: 'fr',
    path: '/cpj-45',
    title: 'Ciment CPJ 45 Maroc — 45 MPa, 1500 DH/T | SDAD',
    description:
      'Ciment CPJ 45 au Maroc — 45 MPa pour béton armé. Prix dès 75 DH/sac (1 500 DH/T). Vrac, sacs, big bag. Conforme NM 10.1.004. Devis gratuit.',
    keywords: [
      'CPJ 45',
      'ciment CPJ 45 Maroc',
      'prix CPJ 45',
      'ciment 45 MPa',
      'ciment Portland composé',
      ...KEYWORDS.products,
      ...KEYWORDS.pricing,
    ],
  });
}

export default async function Cpj45Page({
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
          question: 'Quelle est la différence entre CPJ 45 et CPJ 55 ?',
          answer:
            "Le CPJ 45 offre une résistance à la compression de 45 MPa à 28 jours, idéal pour le béton armé courant, les dallages et les fondations. Le CPJ 55 monte à 55 MPa et est réservé aux grands ouvrages de génie civil et aux zones côtières. Pour la majorité des projets de construction résidentiels et tertiaires au Maroc, le CPJ 45 est le choix optimal en termes de coût et de performance.",
        },
        {
          question: 'Quel est le prix du ciment CPJ 45 au Maroc ?',
          answer:
            'Le CPJ 45 de Dakhla Aménagement est disponible à partir de 1 500 DH/T en vrac (camion-citerne, minimum 30T), 1 550 DH/T en sacs 50kg (palette 1T) et 1 580 DH/T en big bag 1T. Le prix final dépend du volume commandé et de la zone de livraison. Demandez un devis gratuit pour un tarif personnalisé.',
        },
        {
          question: 'Le CPJ 45 est-il conforme aux normes marocaines ?',
          answer:
            'Oui, le ciment CPJ 45 de Dakhla Aménagement est conforme à la norme marocaine NM 10.1.004 et à la norme européenne EN 197-1. Chaque lot est testé en laboratoire (résistance à la compression, finesse de mouture, temps de prise, stabilité) avant expédition. Les certificats de conformité sont fournis sur demande.',
        },
        {
          question: 'Pour quels usages le CPJ 45 est-il recommandé ?',
          answer:
            "Le CPJ 45 est recommandé pour le béton armé courant (poutres, poteaux, dalles), les dallages industriels et résidentiels, les fondations superficielles et profondes, la maçonnerie porteuse (murs en agglos), les chapes et travaux de voirie. Pour les ouvrages très sollicités (ponts, ports, barrages), privilégiez le CPJ 55.",
        },
      ]
    : [
        {
          question: 'What is the difference between CPJ 45 and CPJ 55?',
          answer:
            'CPJ 45 delivers a compressive strength of 45 MPa at 28 days, ideal for standard reinforced concrete, slabs and foundations. CPJ 55 reaches 55 MPa and is reserved for major civil engineering structures and coastal zones. For most residential and commercial construction projects in Morocco, CPJ 45 is the optimal choice in terms of cost and performance.',
        },
        {
          question: 'What is the price of CPJ 45 cement in Morocco?',
          answer:
            'Dakhla Aménagement CPJ 45 is available from 1,500 DH/T in bulk (tanker truck, min. 30T), 1,550 DH/T in 50kg bags (1T pallet) and 1,580 DH/T in 1T big bags. The final price depends on the ordered volume and delivery zone. Request a free quote for a personalized rate.',
        },
        {
          question: 'Is CPJ 45 compliant with Moroccan standards?',
          answer:
            'Yes, Dakhla Aménagement CPJ 45 cement complies with the Moroccan standard NM 10.1.004 and the European standard EN 197-1. Each batch is lab-tested (compressive strength, fineness, setting time, stability) before shipment. Certificates of conformity are available on request.',
        },
        {
          question: 'What is CPJ 45 recommended for?',
          answer:
            'CPJ 45 is recommended for standard reinforced concrete (beams, columns, slabs), industrial and residential floor slabs, shallow and deep foundations, load-bearing masonry (block walls), screeds and roadwork. For highly stressed structures (bridges, ports, dams), prefer CPJ 55.',
        },
      ];

  const specs = isFr
    ? [
        { prop: 'Résistance à la compression (28 j)', value: '45 MPa' },
        { prop: 'Finesse de mouture (Blaine)', value: '≥ 350 m²/kg' },
        { prop: 'Début de prise', value: '≥ 45 minutes' },
        { prop: 'Fin de prise', value: '≤ 10 heures' },
        { prop: 'Stabilité (expansion)', value: '≤ 10 mm' },
        { prop: 'Classe de résistance', value: '42,5 (CPJ 45)' },
        { prop: 'Constituants (clinker + additions)', value: 'Clinker ≥ 65 %, calcaire/laitier/pouzzolane ≤ 35 %' },
        { prop: 'Usage principal', value: 'Béton armé courant, dallages, fondations, maçonnerie' },
        { prop: 'Normes', value: 'NM 10.1.004 / EN 197-1 CEM II/A-L 42,5' },
        { prop: 'Conditionnements', value: 'Vrac (≥30T), sacs 50kg, big bag 1T' },
      ]
    : [
        { prop: 'Compressive strength (28 d)', value: '45 MPa' },
        { prop: 'Fineness (Blaine)', value: '≥ 350 m²/kg' },
        { prop: 'Initial setting time', value: '≥ 45 minutes' },
        { prop: 'Final setting time', value: '≤ 10 hours' },
        { prop: 'Soundness (expansion)', value: '≤ 10 mm' },
        { prop: 'Strength class', value: '42.5 (CPJ 45)' },
        { prop: 'Constituents (clinker + additions)', value: 'Clinker ≥ 65%, limestone/slag/pozzolan ≤ 35%' },
        { prop: 'Main use', value: 'Standard reinforced concrete, slabs, foundations, masonry' },
        { prop: 'Standards', value: 'NM 10.1.004 / EN 197-1 CEM II/A-L 42.5' },
        { prop: 'Packaging', value: 'Bulk (≥30T), 50kg bags, 1T big bag' },
      ];

  const applications = isFr
    ? [
        {
          icon: Building2,
          title: 'Béton armé courant',
          desc: 'Poutres, poteaux, dalles, voiles — structures résidentielles et tertiaires. Dosage recommandé 350 kg/m³.',
        },
        {
          icon: Layers,
          title: 'Dallages et chapes',
          desc: 'Dallages industriels, parkings, chapes de finition. Excellente résistance à l’abrasion.',
        },
        {
          icon: HardHat,
          title: 'Fondations',
          desc: 'Semelles superficielles, radiers, pieux. Bonne résistance aux agressions du sol.',
        },
        {
          icon: Factory,
          title: 'Maçonnerie porteuse',
          desc: 'Murs en agglos, chainages, linteaux. Mortier bâtard économique et performant.',
        },
      ]
    : [
        {
          icon: Building2,
          title: 'Standard reinforced concrete',
          desc: 'Beams, columns, slabs, walls — residential and commercial structures. Recommended dosage 350 kg/m³.',
        },
        {
          icon: Layers,
          title: 'Slabs and screeds',
          desc: 'Industrial slabs, parking lots, finishing screeds. Excellent abrasion resistance.',
        },
        {
          icon: HardHat,
          title: 'Foundations',
          desc: 'Shallow footings, rafts, piles. Good resistance to soil aggression.',
        },
        {
          icon: Factory,
          title: 'Load-bearing masonry',
          desc: 'Block walls, tie beams, lintels. Economical and performing masonry mortar.',
        },
      ];

  const packaging = isFr
    ? [
        {
          icon: Truck,
          title: 'Vrac',
          price: 'dès 1 500 DH/T',
          desc: 'Livraison par camion-citerne avec pompage direct en silo. Minimum 30T.',
          href: '/ciment-vrac',
        },
        {
          icon: Package,
          title: 'Sacs 50kg',
          price: 'dès 1 550 DH/T',
          desc: 'Conditionnement classique pour la maçonnerie et petits chantiers. Palette 1T (20 sacs).',
          href: '/ciment-sacs',
        },
        {
          icon: Container,
          title: 'Big Bag 1T',
          price: 'dès 1 580 DH/T',
          desc: 'Manutention facile par grue ou chariot élévateur. Idéal chantiers moyens sans silo.',
          href: '/ciment-big-bag',
        },
      ]
    : [
        {
          icon: Truck,
          title: 'Bulk',
          price: 'from 1,500 DH/T',
          desc: 'Tanker truck delivery with direct silo pumping. Minimum 30T.',
          href: '/ciment-vrac',
        },
        {
          icon: Package,
          title: '50kg bags',
          price: 'from 1,550 DH/T',
          desc: 'Standard packaging for masonry and small sites. 1T pallet (20 bags).',
          href: '/ciment-sacs',
        },
        {
          icon: Container,
          title: '1T Big Bag',
          price: 'from 1,580 DH/T',
          desc: 'Easy handling by crane or forklift. Ideal for medium sites without silo.',
          href: '/ciment-big-bag',
        },
      ];

  const features = isFr
    ? [
        { icon: Factory, title: 'Production locale', desc: 'Centre de broyage de clinker à Dakhla, capacité 500K tonnes/an' },
        { icon: Beaker, title: 'Qualité certifiée', desc: 'Conforme NM 10.1.004, EN 197-1, ISO 9001 — tests laboratoire systématiques' },
        { icon: Truck, title: 'Livraison rapide', desc: 'Vrac, sacs 50kg, big bag — Sud Maroc + Mauritanie' },
        { icon: CheckCircle, title: 'Prix compétitif', desc: 'Dès 1 500 DH/T — tarifs dégressifs selon le volume' },
      ]
    : [
        { icon: Factory, title: 'Local production', desc: 'Clinker grinding plant in Dakhla, 500K tons/year capacity' },
        { icon: Beaker, title: 'Certified quality', desc: 'NM 10.1.004, EN 197-1, ISO 9001 compliant — systematic lab tests' },
        { icon: Truck, title: 'Fast delivery', desc: 'Bulk, 50kg bags, big bag — Southern Morocco + Mauritania' },
        { icon: CheckCircle, title: 'Competitive price', desc: 'From 1,500 DH/T — volume discounts available' },
      ];

  const schemas = [
    webPageSchema({
      name: isFr ? 'Ciment CPJ 45 Maroc — 45 MPa' : 'CPJ 45 Cement Morocco — 45 MPa',
      description: isFr
        ? 'Ciment CPJ 45 (Portland Composé 45 MPa) au Maroc. Béton armé, dallages, fondations. Conforme NM 10.1.004 / EN 197-1. Prix dès 1 500 DH/T.'
        : 'CPJ 45 cement (Composite Portland 45 MPa) in Morocco. Reinforced concrete, slabs, foundations. NM 10.1.004 / EN 197-1 compliant. From 1,500 DH/T.',
      path: '/cpj-45',
      locale: loc,
    }),
    breadcrumbSchema([{ name: 'CPJ 45', path: '/cpj-45' }], loc),
    serviceSchema({
      name: isFr ? 'Ciment CPJ 45 — Production et Fourniture' : 'CPJ 45 Cement — Production & Supply',
      description: isFr
        ? 'Production, conditionnement et livraison de ciment CPJ 45 (45 MPa) au Maroc. Vrac, sacs 50kg, big bag.'
        : 'Production, packaging and delivery of CPJ 45 (45 MPa) cement in Morocco. Bulk, 50kg bags, big bag.',
      path: '/cpj-45',
      locale: loc,
      serviceType: 'CPJ 45 cement manufacturing and supply',
    }),
    productSchema({
      name: isFr ? 'Ciment CPJ 45 Maroc' : 'CPJ 45 Cement Morocco',
      description: isFr
        ? 'Ciment Portland Composé 45 MPa — béton armé, dallages, fondations. Conforme NM 10.1.004 / EN 197-1. Prix dès 1 500 DH/T.'
        : 'Composite Portland 45 MPa cement — reinforced concrete, slabs, foundations. NM 10.1.004 / EN 197-1 compliant. From 1,500 DH/T.',
      sku: 'DAM-CPJ45',
      price: '1500',
      path: '/cpj-45',
      locale: loc,
      image: '/images/products/cpj45-bags.jpg',
      ratingValue: '4.9',
      reviewCount: 87,
    }),
    faqSchema(faqItems),
    speakableSchema({
      path: '/cpj-45',
      locale: loc,
      cssSelectors: ['h1', '.hero-title', '.product-price', '.faq-question'],
    }),
  ];

  return (
    <>
      <JsonLdScript schema={schemas} />
      <Breadcrumbs items={[{ name: 'CPJ 45', path: '/cpj-45' }]} locale={locale} />

      {/* Hero */}
      <section className="bg-gradient-to-br from-[#1B3A5C] to-[#0f1f33] text-white py-20 md:py-28">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <div className="max-w-4xl">
            <span className="inline-block px-4 py-1.5 bg-[#E8B84B]/20 text-[#E8B84B] text-sm font-medium rounded-full mb-6">
              {isFr ? 'Ciment CPJ 45 — 45 MPa' : 'CPJ 45 Cement — 45 MPa'}
            </span>
            <h1 className="text-[clamp(2rem,5vw,3.5rem)] font-bold leading-[1.1] mb-6">
              {isFr
                ? 'Ciment CPJ 45 Maroc — Résistance 45 MPa'
                : 'CPJ 45 Cement Morocco — 45 MPa Strength'}
            </h1>
            <p className="text-lg md:text-xl text-white/80 leading-relaxed mb-8 max-w-3xl">
              {isFr
                ? 'Ciment Portland Composé 45 MPa pour béton armé, dallages, fondations et maçonnerie. Conforme NM 10.1.004 / EN 197-1. Prix dès 1 500 DH/T. Livraison vrac, sacs 50kg et big bag dans tout le Sud marocain et la Mauritanie.'
                : 'Composite Portland 45 MPa cement for reinforced concrete, slabs, foundations and masonry. NM 10.1.004 / EN 197-1 compliant. From 1,500 DH/T. Bulk, 50kg bags and big bag delivery across Southern Morocco and Mauritania.'}
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
                href={`/${locale}/cpj-55`}
                className="inline-flex items-center gap-2 px-6 py-3 border border-white/30 text-white font-semibold rounded-full hover:bg-white/10 transition-colors"
              >
                {isFr ? 'Voir le CPJ 55 (55 MPa)' : 'View CPJ 55 (55 MPa)'}
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

      {/* Technical specifications */}
      <section className="py-16 md:py-24 bg-[#F7F8FA]">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1B3A5C] mb-4 text-center">
            {isFr ? 'Caractéristiques techniques du CPJ 45' : 'CPJ 45 technical specifications'}
          </h2>
          <p className="text-center text-[#6B7280] mb-12 max-w-2xl mx-auto">
            {isFr
              ? 'Ciment Portland Composé 45 MPa conforme à la norme marocaine NM 10.1.004 et à la norme européenne EN 197-1 (CEM II/A-L 42,5).'
              : 'Composite Portland 45 MPa cement compliant with Moroccan standard NM 10.1.004 and European standard EN 197-1 (CEM II/A-L 42.5).'}
          </p>
          <div className="overflow-x-auto">
            <table className="w-full max-w-4xl mx-auto border-collapse bg-white rounded-xl overflow-hidden shadow-sm">
              <thead>
                <tr className="bg-[#1B3A5C] text-white">
                  <th className="text-left py-4 px-6 font-semibold">
                    {isFr ? 'Propriété' : 'Property'}
                  </th>
                  <th className="text-left py-4 px-6 font-semibold">
                    {isFr ? 'Valeur / Spécification' : 'Value / Specification'}
                  </th>
                </tr>
              </thead>
              <tbody>
                {specs.map((row, i) => (
                  <tr key={i} className="border-b border-[#E5E7EB] last:border-0 hover:bg-[#F7F8FA] transition-colors">
                    <td className="py-3.5 px-6 text-[#6B7280] font-medium">{row.prop}</td>
                    <td className="py-3.5 px-6 text-[#1A1A2E] font-semibold">{row.value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Applications */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1B3A5C] mb-4 text-center">
            {isFr ? 'Applications du CPJ 45' : 'CPJ 45 applications'}
          </h2>
          <p className="text-center text-[#6B7280] mb-12 max-w-2xl mx-auto">
            {isFr
              ? 'Le CPJ 45 est le ciment de référence pour la construction courante au Maroc : polyvalent, économique et performant.'
              : 'CPJ 45 is the reference cement for standard construction in Morocco: versatile, economical and performing.'}
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

      {/* Packaging options */}
      <section className="py-16 md:py-24 bg-[#F7F8FA]">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1B3A5C] mb-4 text-center">
            {isFr ? 'Conditionnements disponibles' : 'Available packaging'}
          </h2>
          <p className="text-center text-[#6B7280] mb-12 max-w-2xl mx-auto">
            {isFr
              ? 'Le CPJ 45 est livré en vrac, sacs 50kg ou big bag 1T selon la taille de votre chantier.'
              : 'CPJ 45 is delivered in bulk, 50kg bags or 1T big bag depending on your site size.'}
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {packaging.map((p, i) => (
              <Link
                key={i}
                href={`/${locale}${p.href}`}
                className="group block bg-white border border-[#E5E7EB] rounded-2xl p-8 hover:border-[#E8B84B] hover:shadow-lg transition-all duration-300"
              >
                <div className="w-14 h-14 rounded-full bg-[#1B3A5C]/5 flex items-center justify-center mb-4">
                  <p.icon className="w-7 h-7 text-[#1B3A5C]" />
                </div>
                <h3 className="text-xl font-bold text-[#1B3A5C] mb-1">{p.title}</h3>
                <p className="text-[#C1272D] font-bold mb-3">{p.price}</p>
                <p className="text-sm text-[#6B7280] leading-relaxed mb-4">{p.desc}</p>
                <span className="inline-flex items-center gap-1 text-sm font-medium text-[#C1272D] group-hover:gap-2 transition-all">
                  {isFr ? 'En savoir plus' : 'Learn more'}
                  <ArrowRight className="w-4 h-4" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Long-form content */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6 md:px-12">
          <div className="prose prose-lg max-w-none">
            <h2 className="text-3xl font-bold text-[#1B3A5C] mb-6">
              {isFr ? 'Le ciment CPJ 45 : le choix de référence au Maroc' : 'CPJ 45 cement: the reference choice in Morocco'}
            </h2>
            <p className="text-[#1A1A2E]/80 leading-relaxed mb-6">
              {isFr
                ? "Le ciment CPJ 45 (Ciment Portland Composé, classe de résistance 42,5 MPa à 28 jours, désigné commercialement 45 MPa) est le ciment le plus utilisé au Maroc pour la construction courante. Composé d'au moins 65 % de clinker broyé avec des additions calcaires, laitier ou pouzzolaniques, il offre un excellent compromis entre résistance mécanique, durabilité et coût. Dakhla Aménagement produit un CPJ 45 de qualité supérieure dans son centre de broyage de Dakhla, conformément à la norme marocaine NM 10.1.004 et à la norme européenne EN 197-1."
                : "CPJ 45 cement (Composite Portland Cement, strength class 42.5 MPa at 28 days, marketed as 45 MPa) is the most widely used cement in Morocco for standard construction. Composed of at least 65% ground clinker with limestone, slag or pozzolanic additions, it offers an excellent compromise between mechanical strength, durability and cost. Dakhla Aménagement produces a high-quality CPJ 45 at its Dakhla grinding plant, compliant with Moroccan standard NM 10.1.004 and European standard EN 197-1."}
            </p>
            <p className="text-[#1A1A2E]/80 leading-relaxed mb-6">
              {isFr
                ? "Avec une résistance à la compression de 45 MPa à 28 jours, une finesse de mouture supérieure à 350 m²/kg (Blaine) et un début de prise supérieur à 45 minutes, le CPJ 45 convient à la grande majorité des ouvrages de bâtiment et de génie civil courant. Son temps de prise permet une mise en œuvre aisée sur chantier, même par temps chaud, tandis que sa résistance finale garantit la pérennité des structures."
                : "With a compressive strength of 45 MPa at 28 days, a fineness greater than 350 m²/kg (Blaine) and an initial setting time greater than 45 minutes, CPJ 45 is suitable for the vast majority of building and standard civil engineering works. Its setting time allows easy on-site placement, even in hot weather, while its final strength ensures the durability of structures."}
            </p>

            <h3 className="text-2xl font-bold text-[#1B3A5C] mt-10 mb-4">
              {isFr ? 'Pourquoi choisir le CPJ 45 de Dakhla Aménagement ?' : 'Why choose Dakhla Aménagement CPJ 45?'}
            </h3>
            <ul className="space-y-3 mb-6">
              {(isFr
                ? [
                    'Production locale à Dakhla — réduction des délais et coûts de transport pour le Sud marocain',
                    'Contrôle qualité systématique en laboratoire avant expédition (résistance, finesse, prise, stabilité)',
                    'Certificats de conformité NM 10.1.004 et EN 197-1 fournis sur demande',
                    'Trois conditionnements disponibles : vrac (≥30T), sacs 50kg (palette 1T), big bag 1T',
                    'Tarifs dégressifs selon le volume — idéal pour les entreprises BTP et les grosses chantiers',
                    'Livraison dans tout le Sud marocain (Dakhla, Laâyoune, Boujdour, Tan-Tan) et en Mauritanie',
                  ]
                : [
                    'Local production in Dakhla — reduced delivery times and transport costs for Southern Morocco',
                    'Systematic lab quality control before shipment (strength, fineness, setting, stability)',
                    'NM 10.1.004 and EN 197-1 conformity certificates available on request',
                    'Three packaging options: bulk (≥30T), 50kg bags (1T pallet), 1T big bag',
                    'Volume discounts — ideal for construction companies and large sites',
                    'Delivery across Southern Morocco (Dakhla, Laayoune, Boujdour, Tan-Tan) and Mauritania',
                  ]
              ).map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-[#1A1A2E]/80">
                  <CheckCircle className="w-5 h-5 text-[#E8B84B] shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <h3 className="text-2xl font-bold text-[#1B3A5C] mt-10 mb-4">
              {isFr ? 'Dosage recommandé du CPJ 45' : 'Recommended CPJ 45 dosage'}
            </h3>
            <p className="text-[#1A1A2E]/80 leading-relaxed mb-6">
              {isFr
                ? "Le dosage en ciment dépend du type d’ouvrage et de la classe d’exposition. Pour un béton armé courant (C25/30), comptez environ 350 kg de CPJ 45 par m³ de béton. Pour un béton de fondation non armé (C20/25), 300 kg/m³ suffisent. Pour les dallages industriels sollicités (C30/37), prévoyez 380-400 kg/m³. Consultez notre blog DAM pour des guides de dosage détaillés selon votre application, ou demandez conseil à notre équipe technique."
                : "The cement dosage depends on the type of work and exposure class. For standard reinforced concrete (C25/30), allow about 350 kg of CPJ 45 per m³ of concrete. For unreinforced foundation concrete (C20/25), 300 kg/m³ is sufficient. For stressed industrial slabs (C30/37), plan for 380-400 kg/m³. Check our DAM blog for detailed dosage guides by application, or ask our technical team for advice."}
            </p>

            <h3 className="text-2xl font-bold text-[#1B3A5C] mt-10 mb-4">
              {isFr ? 'Prix du CPJ 45 au Maroc' : 'CPJ 45 price in Morocco'}
            </h3>
            <p className="text-[#1A1A2E]/80 leading-relaxed mb-6">
              {isFr
                ? "Le prix du ciment CPJ 45 chez Dakhla Aménagement démarre à 1 500 DH/T en vrac (camion-citerne, minimum 30 tonnes), 1 550 DH/T en sacs 50kg (palette 1T) et 1 580 DH/T en big bag 1T. Ces tarifs départ usine Dakhla sont dégressifs selon le volume. Pour un prix livré chantier personnalisé, demandez un devis gratuit — notre équipe vous répond sous 24h."
                : "Dakhla Aménagement CPJ 45 cement price starts at 1,500 DH/T in bulk (tanker truck, minimum 30 tons), 1,550 DH/T in 50kg bags (1T pallet) and 1,580 DH/T in 1T big bag. These ex-works Dakhla prices are volume-degressive. For a custom delivered-to-site price, request a free quote — our team responds within 24h."}
            </p>
            <div className="bg-[#F7F8FA] border border-[#E5E7EB] rounded-xl p-6 my-6">
              <Link
                href={`/${locale}/prix-ciment`}
                className="inline-flex items-center gap-2 text-[#C1272D] font-medium hover:gap-3 transition-all"
              >
                {isFr ? '→ Voir le guide complet des prix du ciment' : '→ View the complete cement price guide'}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 md:py-24 bg-[#F7F8FA]">
        <div className="max-w-3xl mx-auto px-6 md:px-12">
          <h2 className="text-3xl font-bold text-[#1B3A5C] mb-8 text-center">
            {isFr ? 'Questions fréquentes sur le CPJ 45' : 'Frequently asked questions about CPJ 45'}
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
        articleSlugs={['choisir-ciment-projet', 'cpj45-vs-cpj55-guide', 'calculer-quantite-ciment']}
        locale={locale}
      />
      <CtaBanner
        locale={locale}
        title={isFr ? 'Besoin de ciment CPJ 45 au Maroc ?' : 'Need CPJ 45 cement in Morocco?'}
        subtitle={
          isFr
            ? 'Devis gratuit sous 24h. CPJ 45 dès 1 500 DH/T. Livraison vrac, sacs et big bag dans tout le Sud marocain et la Mauritanie.'
            : 'Free quote within 24h. CPJ 45 from 1,500 DH/T. Bulk, bags and big bag delivery across Southern Morocco and Mauritania.'
        }
        buttonText={isFr ? 'Demander un devis gratuit' : 'Request a free quote'}
      />
    </>
  );
}
