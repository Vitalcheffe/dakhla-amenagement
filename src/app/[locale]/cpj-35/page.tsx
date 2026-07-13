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
import {
  CheckCircle,
  ArrowRight,
  Factory,
  Beaker,
  Truck,
  Package,
  Container,
  Building2,
  Layers,
  HardHat,
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
      path: '/cpj-35',
      title: 'CPJ 35 Cement Morocco — Availability on Request | SDAD',
      description:
        'CPJ 35 cement (35 MPa) in Morocco. Availability varies. Contact us to check stock and get a quote. NM 10.1.004 compliant.',
      keywords: [
        'CPJ 35',
        'CPJ 35 cement Morocco',
        'CPJ 35 price',
        '35 MPa cement',
        'cement 70 DH bag',
        'cheap cement Morocco',
        ...KEYWORDS.products,
        ...KEYWORDS.pricing,
      ],
    });
  }

  return buildMetadata({
    locale: 'fr',
    path: '/cpj-35',
    title: 'Ciment CPJ 35 Maroc — Disponibilité sur Demande | SDAD',
    description:
      "Ciment CPJ 35 au Maroc — 35 MPa pour maçonnerie courante. Prix dès 70 DH/sac (1 400 DH/T). Sac 50kg, vrac, big bag. Conforme NM 10.1.004. Devis gratuit.",
    keywords: [
      'CPJ 35',
      'ciment CPJ 35 Maroc',
      'prix CPJ 35',
      'ciment 35 MPa',
      'ciment 70 DH sac',
      'ciment pas cher Maroc',
      'ciment Portland composé 35',
      ...KEYWORDS.products,
      ...KEYWORDS.pricing,
    ],
  });
}

export default async function Cpj35Page({
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
          question: 'Quel est le prix du ciment CPJ 35 au Maroc ?',
          answer:
            "Le ciment CPJ 35 est disponible chez Dakhla Aménagement selon les arrivals de clinker et le planning de production. La disponibilité varie selon les périodes. Contactez-nous au +212 658-265685 pour vérifier le stock actuel et obtenir un devis personnalisé. Nos ciments CPJ 45 et CPJ 55 sont disponibles en permanence.",
        },
        {
          question: 'Quelle différence entre CPJ 35, CPJ 45 et CPJ 55 ?',
          answer:
            "Le CPJ 35 développe 35 MPa à 28 jours et est destiné à la maçonnerie courante, aux dallages simples et aux fondations non armées — c'est le ciment le plus économique (disponibilité variable). Le CPJ 45 (45 MPa) couvre le béton armé courant (poutres, dalles, fondations armées). Le CPJ 55 (55 MPa) est réservé aux grands ouvrages de génie civil très sollicités. Plus le chiffre est élevé, plus la résistance et le prix augmentent.",
        },
        {
          question: 'Pour quels usages le CPJ 35 est-il recommandé ?',
          answer:
            "Le CPJ 35 est recommandé pour la maçonnerie porteuse et non porteuse (murs en agglos, cloisons, chainages), les dallages simples non sollicités, les fondations non armées (semelles filantes sous murs), les chapes de finition, les mortiers de pose et les travaux de voirie secondaire. Il ne doit pas être utilisé pour le béton armé structurel — pour cela, privilégiez le CPJ 45 ou le CPJ 55.",
        },
        {
          question: 'Le CPJ 35 est-il conforme aux normes marocaines ?',
          answer:
            "Oui, le ciment CPJ 35 de Dakhla Aménagement est conforme à la norme marocaine NM 10.1.004 et à la norme européenne EN 197-1 (CEM II/B-L 32,5). Chaque lot est testé en laboratoire interne (résistance à la compression, finesse de mouture, temps de prise, stabilité) avant expédition. Les certificats de conformité sont fournis sur demande.",
        },
        {
          question: 'Le CPJ 35 convient-il au béton armé ?',
          answer:
            "Non. Le CPJ 35 (classe 32,5) ne doit pas être utilisé pour les éléments structuraux en béton armé (poutres, poteaux, dalles porteuses, fondations armées). Pour ces usages, la norme NM 10.1.004 et le CCTG marocain recommandent au minimum un CPJ 45 (classe 42,5). Le CPJ 35 reste parfait pour la maçonnerie, les dallages simples et les mortiers.",
        },
      ]
    : [
        {
          question: 'What is the price of CPJ 35 cement in Morocco?',
          answer:
            'CPJ 35 cement availability at Dakhla Aménagement depends on clinker arrivals and production schedule. Contact us at +212 658-265685 to check current stock and get a personalized quote. Our CPJ 45 and CPJ 55 cements are always available.',
        },
        {
          question: 'What is the difference between CPJ 35, CPJ 45 and CPJ 55?',
          answer:
            'CPJ 35 develops 35 MPa at 28 days and is intended for standard masonry, simple slabs and unreinforced foundations — it is the most economical cement. CPJ 45 (45 MPa) covers standard reinforced concrete (beams, slabs, reinforced foundations). CPJ 55 (55 MPa) is reserved for highly stressed civil engineering structures. The higher the figure, the higher the strength and the price.',
        },
        {
          question: 'What is CPJ 35 recommended for?',
          answer:
            'CPJ 35 is recommended for load-bearing and non-load-bearing masonry (block walls, partitions, tie beams), simple non-stressed slabs, unreinforced foundations (strip footings under walls), finishing screeds, bedding mortars and secondary roadwork. It must not be used for structural reinforced concrete — for that, prefer CPJ 45 or CPJ 55.',
        },
        {
          question: 'Is CPJ 35 compliant with Moroccan standards?',
          answer:
            'Yes, Dakhla Aménagement CPJ 35 cement complies with the Moroccan standard NM 10.1.004 and the European standard EN 197-1 (CEM II/B-L 32.5). Each batch is tested in our internal laboratory (compressive strength, fineness, setting time, stability) before shipment. Certificates of conformity are available on request.',
        },
        {
          question: 'Can CPJ 35 be used for reinforced concrete?',
          answer:
            'No. CPJ 35 (class 32.5) must not be used for structural reinforced concrete elements (beams, columns, load-bearing slabs, reinforced foundations). For these uses, Moroccan standard NM 10.1.004 and the CCTG recommend at least CPJ 45 (class 42.5). CPJ 35 remains perfect for masonry, simple slabs and mortars.',
        },
      ];

  const specs = isFr
    ? [
        { prop: 'Résistance à la compression (28 j)', value: '35 MPa (classe 32,5)' },
        { prop: 'Finesse de mouture (Blaine)', value: '≥ 320 m²/kg' },
        { prop: 'Début de prise', value: '≥ 45 minutes' },
        { prop: 'Fin de prise', value: '≤ 10 heures' },
        { prop: 'Stabilité (expansion)', value: '≤ 10 mm' },
        { prop: 'Classe de résistance', value: '32,5 (CPJ 35)' },
        { prop: 'Constituants (clinker + additions)', value: 'Clinker ≥ 65 %, calcaire/laitier/pouzzolane ≤ 35 %' },
        { prop: 'Usage principal', value: 'Maçonnerie courante, dallages simples, mortiers' },
        { prop: 'Normes', value: 'NM 10.1.004 / EN 197-1 CEM II/B-L 32,5' },
        { prop: 'Conditionnements', value: 'Sacs 50kg, vrac (≥30T), big bag 1T' },
      ]
    : [
        { prop: 'Compressive strength (28 d)', value: '35 MPa (class 32.5)' },
        { prop: 'Fineness (Blaine)', value: '≥ 320 m²/kg' },
        { prop: 'Initial setting time', value: '≥ 45 minutes' },
        { prop: 'Final setting time', value: '≤ 10 hours' },
        { prop: 'Soundness (expansion)', value: '≤ 10 mm' },
        { prop: 'Strength class', value: '32.5 (CPJ 35)' },
        { prop: 'Constituents (clinker + additions)', value: 'Clinker ≥ 65%, limestone/slag/pozzolan ≤ 35%' },
        { prop: 'Main use', value: 'Standard masonry, simple slabs, mortars' },
        { prop: 'Standards', value: 'NM 10.1.004 / EN 197-1 CEM II/B-L 32.5' },
        { prop: 'Packaging', value: '50kg bags, bulk (≥30T), 1T big bag' },
      ];

  const applications = isFr
    ? [
        {
          icon: Factory,
          title: 'Maçonnerie courante',
          desc: 'Murs en agglos, cloisons, chainages, linteaux. Mortier économique pour montée de murs.',
        },
        {
          icon: Layers,
          title: 'Dallages simples',
          desc: 'Dallages non sollicités, sols de garages, terrasses. Bonne résistance pour usages courants.',
        },
        {
          icon: HardHat,
          title: 'Fondations non armées',
          desc: 'Semelles filantes sous murs, massifs non armés, blocages. Économique pour le gros œuvre secondaire.',
        },
        {
          icon: Building2,
          title: 'Chapes et mortiers',
          desc: 'Chapes de finition, mortiers de pose, enduits traditionnels. Facile à mettre en œuvre.',
        },
      ]
    : [
        {
          icon: Factory,
          title: 'Standard masonry',
          desc: 'Block walls, partitions, tie beams, lintels. Economical mortar for wall construction.',
        },
        {
          icon: Layers,
          title: 'Simple slabs',
          desc: 'Non-stressed slabs, garage floors, terraces. Good resistance for everyday uses.',
        },
        {
          icon: HardHat,
          title: 'Unreinforced foundations',
          desc: 'Strip footings under walls, unreinforced massifs, blocking. Economical for secondary civil engineering.',
        },
        {
          icon: Building2,
          title: 'Screeds and mortars',
          desc: 'Finishing screeds, bedding mortars, traditional renders. Easy to apply.',
        },
      ];

  const packaging = isFr
    ? [
        {
          icon: Package,
          title: 'Sacs 50kg',
          price: 'Sur demande',
          desc: "Conditionnement classique pour la maçonnerie et petits chantiers. Palette 1T (20 sacs) = 1 400 DH.",
          href: '/ciment-sacs',
        },
        {
          icon: Truck,
          title: 'Vrac',
          price: 'Sur demande',
          desc: 'Livraison par camion-citerne avec pompage direct en silo. Minimum 30T.',
          href: '/ciment-vrac',
        },
        {
          icon: Container,
          title: 'Big Bag 1T',
          price: 'dès 1 430 DH/T',
          desc: 'Manutention facile par grue ou chariot élévateur. Idéal chantiers moyens sans silo.',
          href: '/ciment-big-bag',
        },
      ]
    : [
        {
          icon: Package,
          title: '50kg bags',
          price: 'On request',
          desc: 'Standard packaging for masonry and small sites. 1T pallet (20 bags) = 1,400 DH.',
          href: '/ciment-sacs',
        },
        {
          icon: Truck,
          title: 'Bulk',
          price: 'from 1,400 DH/T',
          desc: 'Tanker truck delivery with direct silo pumping. Minimum 30T.',
          href: '/ciment-vrac',
        },
        {
          icon: Container,
          title: '1T Big Bag',
          price: 'from 1,430 DH/T',
          desc: 'Easy handling by crane or forklift. Ideal for medium sites without silo.',
          href: '/ciment-big-bag',
        },
      ];

  const features = isFr
    ? [
        { icon: Factory, title: 'Production locale', desc: 'Centre de broyage de clinker à Dakhla, capacité 500K tonnes/an' },
        { icon: Beaker, title: 'Qualité certifiée', desc: 'Conforme NM 10.1.004, EN 197-1 — tests laboratoire systématiques' },
        { icon: Truck, title: 'Livraison rapide', desc: 'Sacs 50kg, vrac, big bag — Sud Maroc + Mauritanie' },
        { icon: CheckCircle, title: 'Le plus économique', desc: 'Contactez-nous pour la disponibilité — CPJ 45 et CPJ 55 toujours en stock' },
      ]
    : [
        { icon: Factory, title: 'Local production', desc: 'Clinker grinding plant in Dakhla, 500K tons/year capacity' },
        { icon: Beaker, title: 'Certified quality', desc: 'NM 10.1.004, EN 197-1 compliant — systematic lab tests' },
        { icon: Truck, title: 'Fast delivery', desc: '50kg bags, bulk, big bag — Southern Morocco + Mauritania' },
        { icon: CheckCircle, title: 'Most economical', desc: 'Contact us for availability — CPJ 45 and CPJ 55 always in stock' },
      ];

  const relatedLinks = isFr
    ? [
        {
          title: 'Ciment CPJ 45 (45 MPa)',
          description: "Ciment de référence pour le béton armé courant. Dès 1 500 DH/T.",
          href: '/cpj-45',
        },
        {
          title: 'Ciment CPJ 55 (55 MPa)',
          description: 'Ultra haute résistance pour grands ouvrages de génie civil. Dès 1 600 DH/T.',
          href: '/cpj-55',
        },
        {
          title: 'Prix du ciment au Maroc',
          description: 'Tableau comparatif des tarifs CPJ 35, CPJ 45 et CPJ 55 par conditionnement.',
          href: '/prix-ciment',
        },
      ]
    : [
        {
          title: 'CPJ 45 Cement (45 MPa)',
          description: 'Reference cement for standard reinforced concrete. From 1,500 DH/T.',
          href: '/cpj-45',
        },
        {
          title: 'CPJ 55 Cement (55 MPa)',
          description: 'Ultra high strength for major civil engineering works. From 1,600 DH/T.',
          href: '/cpj-55',
        },
        {
          title: 'Cement prices in Morocco',
          description: 'Comparative price table for CPJ 35, CPJ 45 and CPJ 55 by packaging.',
          href: '/prix-ciment',
        },
      ];

  const schemas = [
    webPageSchema({
      name: isFr ? 'Ciment CPJ 35 Maroc — 35 MPa' : 'CPJ 35 Cement Morocco — 35 MPa',
      description: isFr
        ? "Ciment CPJ 35 (Portland Composé 35 MPa) au Maroc. Maçonnerie courante, dallages simples. Conforme NM 10.1.004 / EN 197-1. Prix dès 70 DH/sac (1 400 DH/T)."
        : 'CPJ 35 cement (Composite Portland 35 MPa) in Morocco. Standard masonry, simple slabs. NM 10.1.004 / EN 197-1 compliant. From 70 DH/bag (1,400 DH/T).',
      path: '/cpj-35',
      locale: loc,
    }),
    breadcrumbSchema([{ name: 'CPJ 35', path: '/cpj-35' }], loc),
    serviceSchema({
      name: isFr ? 'Ciment CPJ 35 — Production et Fourniture' : 'CPJ 35 Cement — Production & Supply',
      description: isFr
        ? 'Production, conditionnement et livraison de ciment CPJ 35 (35 MPa) au Maroc. Sacs 50kg, vrac, big bag.'
        : 'Production, packaging and delivery of CPJ 35 (35 MPa) cement in Morocco. 50kg bags, bulk, big bag.',
      path: '/cpj-35',
      locale: loc,
      serviceType: 'CPJ 35 cement manufacturing and supply',
    }),
    productSchema({
      name: isFr ? 'Ciment CPJ 35 Maroc' : 'CPJ 35 Cement Morocco',
      description: isFr
        ? "Ciment Portland Composé 35 MPa — maçonnerie courante, dallages simples, mortiers. Conforme NM 10.1.004 / EN 197-1. Prix dès 70 DH/sac (1 400 DH/T)."
        : 'Composite Portland 35 MPa cement — standard masonry, simple slabs, mortars. NM 10.1.004 / EN 197-1 compliant. From 70 DH/bag (1,400 DH/T).',
      sku: 'DAM-CPJ35',
      price: '0',
      path: '/cpj-35',
      locale: loc,
      image: '/images/products/cement-powder-closeup.jpg',
      ratingValue: '4.7',
      reviewCount: 54,
    }),
    faqSchema(faqItems),
    speakableSchema({
      path: '/cpj-35',
      locale: loc,
      cssSelectors: ['h1', '.hero-title', '.product-price', '.faq-question'],
    }),
  ];

  return (
    <>
      <JsonLdScript schema={schemas} />
      <Breadcrumbs items={[{ name: 'CPJ 35', path: '/cpj-35' }]} locale={locale} />

      {/* Hero */}
      <section className="bg-gradient-to-br from-[#1B3A5C] to-[#0f1f33] text-white py-20 md:py-28">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <div className="max-w-4xl">
            <span className="inline-block px-4 py-1.5 bg-[#E8B84B]/20 text-[#E8B84B] text-sm font-medium rounded-full mb-6">
              {isFr ? 'Ciment CPJ 35 — 35 MPa' : 'CPJ 35 Cement — 35 MPa'}
            </span>
            <h1 className="text-[clamp(2rem,5vw,3.5rem)] font-bold leading-[1.1] mb-6">
              {isFr
                ? 'Ciment CPJ 35 Maroc — Résistance 35 MPa'
                : 'CPJ 35 Cement Morocco — 35 MPa Strength'}
            </h1>
            <p className="text-lg md:text-xl text-white/80 leading-relaxed mb-6 max-w-3xl">
              {isFr
                ? "Ciment Portland Composé 35 MPa pour la maçonnerie courante, les dallages simples et les mortiers. Conforme NM 10.1.004 / EN 197-1. Le ciment le plus économique de la gamme DAM — dès 70 DH/sac (1 400 DH/T)."
                : 'Composite Portland 35 MPa cement for standard masonry, simple slabs and mortars. NM 10.1.004 / EN 197-1 compliant. The most economical cement in the DAM range — from 70 DH/bag (1,400 DH/T).'}
            </p>
            <div className="product-price inline-block bg-[#C1272D]/20 border border-[#C1272D]/40 rounded-2xl px-6 py-4 mb-8">
              <span className="block text-sm text-white/70 mb-1">
                {isFr ? 'Prix dès' : 'Price from'}
              </span>
              <span className="text-3xl md:text-4xl font-bold text-[#E8B84B]">70 DH/sac</span>
              <span className="block text-sm text-white/60 mt-1">
                {isFr ? '(1 400 DH/T — sac 50kg)' : '(1,400 DH/T — 50kg bag)'}
              </span>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href={`/${locale}/devis`}
                className="inline-flex items-center gap-2 px-6 py-3 bg-[#C1272D] text-white font-semibold rounded-full hover:bg-[#C1272D]/90 transition-colors"
              >
                {isFr ? 'Demander un devis' : 'Request a quote'}
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href={`/${locale}/cpj-45`}
                className="inline-flex items-center gap-2 px-6 py-3 border border-white/30 text-white font-semibold rounded-full hover:bg-white/10 transition-colors"
              >
                {isFr ? 'Voir le CPJ 45 (45 MPa)' : 'View CPJ 45 (45 MPa)'}
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
            {isFr ? 'Caractéristiques techniques du CPJ 35' : 'CPJ 35 technical specifications'}
          </h2>
          <p className="text-center text-[#6B7280] mb-12 max-w-2xl mx-auto">
            {isFr
              ? "Ciment Portland Composé 35 MPa (classe 32,5) conforme à la norme marocaine NM 10.1.004 et à la norme européenne EN 197-1 (CEM II/B-L 32,5)."
              : 'Composite Portland 35 MPa cement (class 32.5) compliant with Moroccan standard NM 10.1.004 and European standard EN 197-1 (CEM II/B-L 32.5).'}
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
            {isFr ? 'Applications du CPJ 35' : 'CPJ 35 applications'}
          </h2>
          <p className="text-center text-[#6B7280] mb-12 max-w-2xl mx-auto">
            {isFr
              ? "Le CPJ 35 est le ciment économique pour la maçonnerie courante, les dallages simples et les mortiers. Polyvalent et abordable."
              : 'CPJ 35 is the economical cement for standard masonry, simple slabs and mortars. Versatile and affordable.'}
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
            {isFr ? 'Conditionnements et prix' : 'Packaging and prices'}
          </h2>
          <p className="text-center text-[#6B7280] mb-12 max-w-2xl mx-auto">
            {isFr
              ? 'Le CPJ 35 est livré en sacs 50kg, vrac ou big bag 1T selon la taille de votre chantier.'
              : 'CPJ 35 is delivered in 50kg bags, bulk or 1T big bag depending on your site size.'}
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
              {isFr ? 'Le ciment CPJ 35 : la solution économique pour la maçonnerie au Maroc' : 'CPJ 35 cement: the economical solution for masonry in Morocco'}
            </h2>
            <p className="text-[#1A1A2E]/80 leading-relaxed mb-6">
              {isFr
                ? "Le ciment CPJ 35 (Ciment Portland Composé, classe de résistance 32,5 MPa à 28 jours, désigné commercialement 35 MPa) est le ciment économique de référence pour la maçonnerie courante et les travaux non structuraux au Maroc. Composé d'au moins 65 % de clinker broyé avec des additions calcaires, laitier ou pouzzolaniques, il offre un excellent rapport qualité/prix pour tous les usages secondaires du chantier. Dakhla Aménagement produit un CPJ 35 de qualité constante dans son centre de broyage de Dakhla, conformément à la norme marocaine NM 10.1.004 et à la norme européenne EN 197-1."
                : "CPJ 35 cement (Composite Portland Cement, strength class 32.5 MPa at 28 days, marketed as 35 MPa) is the economical reference cement for standard masonry and non-structural work in Morocco. Composed of at least 65% ground clinker with limestone, slag or pozzolanic additions, it offers an excellent price/performance ratio for all secondary site uses. Dakhla Aménagement produces consistently high-quality CPJ 35 at its Dakhla grinding plant, compliant with Moroccan standard NM 10.1.004 and European standard EN 197-1."}
            </p>
            <p className="text-[#1A1A2E]/80 leading-relaxed mb-6">
              {isFr
                ? "Avec une résistance à la compression de 35 MPa à 28 jours, une finesse de mouture supérieure à 320 m²/kg (Blaine) et un début de prise supérieur à 45 minutes, le CPJ 35 convient parfaitement à la maçonnerie porteuse et non porteuse, aux dallages simples non sollicités, aux chapes de finition et aux mortiers de pose. Son prix abordable — dès 70 DH le sac de 50 kg — en fait le choix privilégié des maçons, artisans et particuliers pour les projets de construction résidentiels de petite et moyenne envergure."
                : "With a compressive strength of 35 MPa at 28 days, a fineness greater than 320 m²/kg (Blaine) and an initial setting time greater than 45 minutes, CPJ 35 is perfectly suited to load-bearing and non-load-bearing masonry, simple non-stressed slabs, finishing screeds and bedding mortars. Its affordable price — from 70 DH per 50 kg bag — makes it the preferred choice of masons, craftsmen and individuals for small and medium-sized residential construction projects."}
            </p>

            <h3 className="text-2xl font-bold text-[#1B3A5C] mt-10 mb-4">
              {isFr ? 'Pourquoi choisir le CPJ 35 plutôt que le CPJ 45 ou CPJ 55 ?' : 'Why choose CPJ 35 over CPJ 45 or CPJ 55?'}
            </h3>
            <p className="text-[#1A1A2E]/80 leading-relaxed mb-6">
              {isFr
                ? "Le choix entre CPJ 35, CPJ 45 et CPJ 55 se fait selon l'usage prévu. Le CPJ 35 est le plus économique (1 400 DH/T contre 1 500 DH/T pour le CPJ 45 et 1 600 DH/T pour le CPJ 55), mais sa résistance (35 MPa) limite son usage aux éléments non structuraux. Pour la maçonnerie de cloisonnement, les dallages de maison individuelle, les chapes, les enduits et les mortiers de pose, le CPJ 35 est largement suffisant. Pour tout élément en béton armé (poutres, poteaux, dalles porteuses, fondations armées), il faut impérativement passer au CPJ 45 minimum. Pour les grands ouvrages de génie civil (ponts, ports, barrages), le CPJ 55 s'impose."
                : "The choice between CPJ 35, CPJ 45 and CPJ 55 depends on the intended use. CPJ 35 is the most economical (1,400 DH/T vs. 1,500 DH/T for CPJ 45 and 1,600 DH/T for CPJ 55), but its strength (35 MPa) limits its use to non-structural elements. For partition masonry, individual house slabs, screeds, renders and bedding mortars, CPJ 35 is largely sufficient. For any reinforced concrete element (beams, columns, load-bearing slabs, reinforced foundations), you must switch to at least CPJ 45. For major civil engineering works (bridges, ports, dams), CPJ 55 is required."}
            </p>

            <h3 className="text-2xl font-bold text-[#1B3A5C] mt-10 mb-4">
              {isFr ? 'Pourquoi choisir le CPJ 35 de Dakhla Aménagement ?' : 'Why choose Dakhla Aménagement CPJ 35?'}
            </h3>
            <ul className="space-y-3 mb-6">
              {(isFr
                ? [
                    'Production locale à Dakhla — réduction des délais et coûts de transport pour le Sud marocain',
                    'Contrôle qualité systématique en laboratoire avant expédition (résistance, finesse, prise, stabilité)',
                    'Certificats de conformité NM 10.1.004 et EN 197-1 fournis sur demande',
                    'Trois conditionnements disponibles : sacs 50kg (palette 1T), vrac (≥30T), big bag 1T',
                    'Prix imbattable dès 70 DH/sac (1 400 DH/T) — le plus économique de la gamme DAM',
                    'Livraison dans tout le Sud marocain (Dakhla, Laâyoune, Boujdour, Tan-Tan) et en Mauritanie',
                  ]
                : [
                    'Local production in Dakhla — reduced delivery times and transport costs for Southern Morocco',
                    'Systematic lab quality control before shipment (strength, fineness, setting, stability)',
                    'NM 10.1.004 and EN 197-1 conformity certificates available on request',
                    'Three packaging options: 50kg bags (1T pallet), bulk (≥30T), 1T big bag',
                    'Unbeatable price from 70 DH/bag (1,400 DH/T) — the most economical in the DAM range',
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
              {isFr ? 'Dosage recommandé du CPJ 35' : 'Recommended CPJ 35 dosage'}
            </h3>
            <p className="text-[#1A1A2E]/80 leading-relaxed mb-6">
              {isFr
                ? "Pour un mortier de maçonnerie (pose d'agglos), comptez environ 250 à 300 kg de CPJ 35 par m³ de mortier (dosage 350 kg/m³ pour les murs porteurs). Pour un mortier de pose de carrelage, 350 kg/m³ suffisent. Pour une chape de finition, prévoyez 300 à 350 kg/m³. Pour un dallage simple non armé, 250 à 300 kg/m³ sont suffisants. Pour les enduits traditionnels, le dosage varie de 350 à 400 kg/m³ selon l'exposition. Consultez notre calculateur de ciment pour estimer la quantité nécessaire à votre projet."
                : "For masonry mortar (block laying), allow about 250 to 300 kg of CPJ 35 per m³ of mortar (350 kg/m³ dosage for load-bearing walls). For tile bedding mortar, 350 kg/m³ is sufficient. For a finishing screed, plan for 300 to 350 kg/m³. For a simple unreinforced slab, 250 to 300 kg/m³ is sufficient. For traditional renders, the dosage varies from 350 to 400 kg/m³ depending on exposure. Check our cement calculator to estimate the quantity needed for your project."}
            </p>

            <h3 className="text-2xl font-bold text-[#1B3A5C] mt-10 mb-4">
              {isFr ? 'Prix du CPJ 35 au Maroc' : 'CPJ 35 price in Morocco'}
            </h3>
            <p className="text-[#1A1A2E]/80 leading-relaxed mb-6">
              {isFr
                ? "Le prix du ciment CPJ 35 chez Dakhla Aménagement démarre à 70 DH le sac de 50 kg (soit 1 400 DH la tonne en sacs palette 1T). En vrac (camion-citerne, minimum 30 tonnes), le prix démarre à 1 400 DH/T. En big bag 1T, comptez dès 1 430 DH/T. Ces tarifs départ usine Dakhla sont dégressifs selon le volume. Pour un prix livré chantier personnalisé, demandez un devis gratuit — notre équipe vous répond sous 24h. Voir aussi notre page dédiée au prix du CPJ 35."
                : "Dakhla Aménagement CPJ 35 cement price starts at 70 DH per 50 kg bag (i.e. 1,400 DH per ton on 1T pallets). In bulk (tanker truck, minimum 30 tons), the price starts at 1,400 DH/T. In 1T big bag, expect from 1,430 DH/T. These ex-works Dakhla prices are volume-degressive. For a custom delivered-to-site price, request a free quote — our team responds within 24h. See also our dedicated CPJ 35 price page."}
            </p>
            <div className="bg-[#F7F8FA] border border-[#E5E7EB] rounded-xl p-6 my-6 flex flex-wrap gap-4">
              <Link
                href={`/${locale}/prix-ciment`}
                className="inline-flex items-center gap-2 text-[#C1272D] font-medium hover:gap-3 transition-all"
              >
                {isFr ? '→ Guide complet des prix du ciment' : '→ Complete cement price guide'}
              </Link>
              <Link
                href={`/${locale}/prix-ciment-cpj35`}
                className="inline-flex items-center gap-2 text-[#C1272D] font-medium hover:gap-3 transition-all"
              >
                {isFr ? '→ Prix détaillés CPJ 35' : '→ Detailed CPJ 35 prices'}
              </Link>
              <Link
                href={`/${locale}/cpj-45`}
                className="inline-flex items-center gap-2 text-[#C1272D] font-medium hover:gap-3 transition-all"
              >
                {isFr ? '→ Comparer avec le CPJ 45' : '→ Compare with CPJ 45'}
              </Link>
              <Link
                href={`/${locale}/cpj-55`}
                className="inline-flex items-center gap-2 text-[#C1272D] font-medium hover:gap-3 transition-all"
              >
                {isFr ? '→ Comparer avec le CPJ 55' : '→ Compare with CPJ 55'}
              </Link>
              <Link
                href={`/${locale}/devis`}
                className="inline-flex items-center gap-2 text-[#C1272D] font-medium hover:gap-3 transition-all"
              >
                {isFr ? '→ Demander un devis gratuit' : '→ Request a free quote'}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 md:py-24 bg-[#F7F8FA]">
        <div className="max-w-3xl mx-auto px-6 md:px-12">
          <h2 className="text-3xl font-bold text-[#1B3A5C] mb-8 text-center">
            {isFr ? 'Questions fréquentes sur le CPJ 35' : 'Frequently asked questions about CPJ 35'}
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

      <RelatedLinks links={relatedLinks} locale={locale} title={isFr ? 'Produits liés' : 'Related products'} />
      <RelatedArticles
        articleSlugs={['choisir-ciment-projet', 'cpj45-vs-cpj55-guide', 'normes-ciment-maroc']}
        locale={locale}
      />
      <CtaBanner
        locale={locale}
        title={isFr ? 'Besoin de ciment CPJ 35 au Maroc ?' : 'Need CPJ 35 cement in Morocco?'}
        subtitle={
          isFr
            ? "Devis gratuit sous 24h. CPJ 35 dès 70 DH/sac (1 400 DH/T). Livraison sacs, vrac et big bag dans tout le Sud marocain et la Mauritanie."
            : 'Free quote within 24h. CPJ 35 from 70 DH/bag (1,400 DH/T). Bulk, bags and big bag delivery across Southern Morocco and Mauritania.'
        }
        buttonText={isFr ? 'Demander un devis gratuit' : 'Request a free quote'}
      />
    </>
  );
}
