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
import { CheckCircle, ArrowRight, Factory, Beaker, Truck, Package, Container, Construction, Anchor, Waves } from 'lucide-react';

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
      path: '/cpj-55',
      title: 'CPJ 55 Cement Morocco — 55 MPa, Price 1,600 DH/T | Dakhla Aménagement',
      description:
        'CPJ 55 cement (Composite Portland 55 MPa) in Morocco. Ultra high strength for civil engineering and infrastructure. NM 10.1.004 compliant. From 1,600 DH/T. Coastal zones. Free quote.',
      keywords: [
        'CPJ 55',
        'CPJ 55 cement Morocco',
        'CPJ 55 price',
        '55 MPa cement',
        'high strength cement',
        ...KEYWORDS.products,
        ...KEYWORDS.pricing,
      ],
    });
  }

  return buildMetadata({
    locale: 'fr',
    path: '/cpj-55',
    title: 'Ciment CPJ 55 Maroc — 55 MPa, Prix 1 600 DH/T | Dakhla Aménagement',
    description:
      'Ciment CPJ 55 (Portland Composé 55 MPa) au Maroc. Ultra haute résistance pour génie civil et infrastructure. Conforme NM 10.1.004. Prix dès 1 600 DH/T. Zone côtière. Devis gratuit.',
    keywords: [
      'CPJ 55',
      'ciment CPJ 55 Maroc',
      'prix CPJ 55',
      'ciment 55 MPa',
      'ciment haute résistance',
      ...KEYWORDS.products,
      ...KEYWORDS.pricing,
    ],
  });
}

export default async function Cpj55Page({
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
          question: 'Quand utiliser le ciment CPJ 55 plutôt que le CPJ 45 ?',
          answer:
            "Le CPJ 55 (55 MPa) est recommandé dès que la structure est fortement sollicitée : grands ouvrages de génie civil (ponts, viaducs), infrastructure (ports, aéroports, barrages), éléments précontraints, dalages industriels très sollicités, ouvrages en zone côtière exposés aux sels marins. Pour la construction courante (bâtiment résidentiel, maçonnerie), le CPJ 45 suffit et est plus économique.",
        },
        {
          question: 'Quel est le prix du ciment CPJ 55 au Maroc ?',
          answer:
            'Le CPJ 55 de Dakhla Aménagement est disponible à partir de 1 600 DH/T en vrac (camion-citerne, min. 30T), 1 650 DH/T en sacs 50kg (palette 1T) et 1 680 DH/T en big bag 1T. Le surcoût par rapport au CPJ 45 reflète la résistance supérieure (55 MPa vs 45 MPa). Tarifs dégressifs selon le volume.',
        },
        {
          question: 'Le CPJ 55 est-il adapté aux zones côtières ?',
          answer:
            "Oui, le CPJ 55 est particulièrement adapté aux zones côtières comme Dakhla, Boujdour ou Laâyoune. Sa composition et sa résistance élevée offrent une meilleure durabilité face aux agressions chlorhydriques (sels marins) et sulfatiques. Pour les ouvrages très exposés (pieds de pont, ouvrages maritimes), nous recommandons un dosage adapté et une protection complémentaire.",
        },
        {
          question: 'Quels sont les dosage et temps de prise du CPJ 55 ?',
          answer:
            "Le CPJ 55 présente un début de prise ≥ 60 minutes et une finesse de mouture ≥ 380 m²/kg, ce qui le rend idéal pour les bétons à haute performance. Le dosage recommandé varie de 400 kg/m³ (béton C35/45) à 450 kg/m³ (béton C40/50) selon la classe d’exposition et les performances visées. Consultez notre équipe technique pour un dosage optimisé.",
        },
      ]
    : [
        {
          question: 'When to use CPJ 55 cement rather than CPJ 45?',
          answer:
            'CPJ 55 (55 MPa) is recommended as soon as the structure is highly stressed: major civil engineering works (bridges, viaducts), infrastructure (ports, airports, dams), prestressed elements, heavily loaded industrial slabs, and structures in coastal areas exposed to sea salts. For standard construction (residential buildings, masonry), CPJ 45 is sufficient and more economical.',
        },
        {
          question: 'What is the price of CPJ 55 cement in Morocco?',
          answer:
            'Dakhla Aménagement CPJ 55 is available from 1,600 DH/T in bulk (tanker truck, min. 30T), 1,650 DH/T in 50kg bags (1T pallet) and 1,680 DH/T in 1T big bag. The premium over CPJ 45 reflects the higher strength (55 MPa vs 45 MPa). Volume discounts available.',
        },
        {
          question: 'Is CPJ 55 suitable for coastal zones?',
          answer:
            'Yes, CPJ 55 is particularly suitable for coastal areas such as Dakhla, Boujdour or Laayoune. Its composition and high strength provide better durability against chloride (sea salts) and sulfate attacks. For highly exposed structures (bridge piers, marine works), we recommend an adapted dosage and additional protection.',
        },
        {
          question: 'What are the dosage and setting time of CPJ 55?',
          answer:
            'CPJ 55 has an initial setting time ≥ 60 minutes and a fineness ≥ 380 m²/kg, making it ideal for high-performance concrete. Recommended dosage ranges from 400 kg/m³ (C35/45 concrete) to 450 kg/m³ (C40/50 concrete) depending on the exposure class and target performance. Consult our technical team for an optimized dosage.',
        },
      ];

  const specs = isFr
    ? [
        { prop: 'Résistance à la compression (28 j)', value: '55 MPa' },
        { prop: 'Finesse de mouture (Blaine)', value: '≥ 380 m²/kg' },
        { prop: 'Début de prise', value: '≥ 60 minutes' },
        { prop: 'Fin de prise', value: '≤ 10 heures' },
        { prop: 'Stabilité (expansion)', value: '≤ 8 mm' },
        { prop: 'Classe de résistance', value: '52,5 (CPJ 55)' },
        { prop: 'Constituants (clinker + additions)', value: 'Clinker ≥ 70 %, additions calcaire/pouzzolane ≤ 30 %' },
        { prop: 'Usage principal', value: 'Génie civil, infrastructure, zone côtière, précontrainte' },
        { prop: 'Normes', value: 'NM 10.1.004 / EN 197-1 CEM II/A-L 52,5' },
        { prop: 'Conditionnements', value: 'Vrac (≥30T), sacs 50kg, big bag 1T' },
      ]
    : [
        { prop: 'Compressive strength (28 d)', value: '55 MPa' },
        { prop: 'Fineness (Blaine)', value: '≥ 380 m²/kg' },
        { prop: 'Initial setting time', value: '≥ 60 minutes' },
        { prop: 'Final setting time', value: '≤ 10 hours' },
        { prop: 'Soundness (expansion)', value: '≤ 8 mm' },
        { prop: 'Strength class', value: '52.5 (CPJ 55)' },
        { prop: 'Constituents (clinker + additions)', value: 'Clinker ≥ 70%, limestone/pozzolan additions ≤ 30%' },
        { prop: 'Main use', value: 'Civil engineering, infrastructure, coastal zone, prestressing' },
        { prop: 'Standards', value: 'NM 10.1.004 / EN 197-1 CEM II/A-L 52.5' },
        { prop: 'Packaging', value: 'Bulk (≥30T), 50kg bags, 1T big bag' },
      ];

  const applications = isFr
    ? [
        {
          icon: Construction,
          title: 'Grands ouvrages',
          desc: 'Ponts, viaducs, tunnels, ouvrages d’art. Résistance à la fatigue et à la durabilité élevées.',
        },
        {
          icon: Factory,
          title: 'Infrastructure',
          desc: 'Ports, aéroports, gares, centrales électriques. Béton haute performance et durable.',
        },
        {
          icon: Anchor,
          title: 'Ports & barrages',
          desc: 'Ouvrages maritimes, digues, barrages. Excellente résistance aux sulfates et chlorures.',
        },
        {
          icon: Waves,
          title: 'Zone côtière',
          desc: 'Constructions exposées aux sels marins à Dakhla, Boujdour, Laâyoune. Durabilité renforcée.',
        },
      ]
    : [
        {
          icon: Construction,
          title: 'Major structures',
          desc: 'Bridges, viaducts, tunnels, engineering works. High fatigue and durability resistance.',
        },
        {
          icon: Factory,
          title: 'Infrastructure',
          desc: 'Ports, airports, stations, power plants. High-performance and durable concrete.',
        },
        {
          icon: Anchor,
          title: 'Ports & dams',
          desc: 'Maritime works, jetties, dams. Excellent sulfate and chloride resistance.',
        },
        {
          icon: Waves,
          title: 'Coastal zone',
          desc: 'Constructions exposed to sea salts in Dakhla, Boujdour, Laayoune. Reinforced durability.',
        },
      ];

  const packaging = isFr
    ? [
        {
          icon: Truck,
          title: 'Vrac',
          price: 'dès 1 600 DH/T',
          desc: 'Livraison par camion-citerne avec pompage direct en silo. Minimum 30T.',
          href: '/ciment-vrac',
        },
        {
          icon: Package,
          title: 'Sacs 50kg',
          price: 'dès 1 650 DH/T',
          desc: 'Pour chantiers exigeants nécessitant un béton haute performance. Palette 1T (20 sacs).',
          href: '/ciment-sacs',
        },
        {
          icon: Container,
          title: 'Big Bag 1T',
          price: 'dès 1 680 DH/T',
          desc: 'Manutention facile par grue ou chariot élévateur. Idéal pour chantiers de génie civil.',
          href: '/ciment-big-bag',
        },
      ]
    : [
        {
          icon: Truck,
          title: 'Bulk',
          price: 'from 1,600 DH/T',
          desc: 'Tanker truck delivery with direct silo pumping. Minimum 30T.',
          href: '/ciment-vrac',
        },
        {
          icon: Package,
          title: '50kg bags',
          price: 'from 1,650 DH/T',
          desc: 'For demanding sites requiring high-performance concrete. 1T pallet (20 bags).',
          href: '/ciment-sacs',
        },
        {
          icon: Container,
          title: '1T Big Bag',
          price: 'from 1,680 DH/T',
          desc: 'Easy handling by crane or forklift. Ideal for civil engineering sites.',
          href: '/ciment-big-bag',
        },
      ];

  const features = isFr
    ? [
        { icon: Factory, title: 'Production locale', desc: 'Centre de broyage de clinker à Dakhla, capacité 500K tonnes/an' },
        { icon: Beaker, title: 'Qualité certifiée', desc: 'Conforme NM 10.1.004, EN 197-1, ISO 9001 — contrôle laboratoire systématique' },
        { icon: Waves, title: 'Zone côtière', desc: 'Composition optimisée pour résister aux sels marins et sulfates' },
        { icon: CheckCircle, title: 'Ultra haute résistance', desc: '55 MPa à 28 jours — pour ouvrages de génie civil exigeants' },
      ]
    : [
        { icon: Factory, title: 'Local production', desc: 'Clinker grinding plant in Dakhla, 500K tons/year capacity' },
        { icon: Beaker, title: 'Certified quality', desc: 'NM 10.1.004, EN 197-1, ISO 9001 compliant — systematic lab control' },
        { icon: Waves, title: 'Coastal zone', desc: 'Composition optimized to resist sea salts and sulfates' },
        { icon: CheckCircle, title: 'Ultra high strength', desc: '55 MPa at 28 days — for demanding civil engineering works' },
      ];

  const schemas = [
    webPageSchema({
      name: isFr ? 'Ciment CPJ 55 Maroc — 55 MPa' : 'CPJ 55 Cement Morocco — 55 MPa',
      description: isFr
        ? 'Ciment CPJ 55 (Portland Composé 55 MPa) au Maroc. Ultra haute résistance pour génie civil et infrastructure. Conforme NM 10.1.004. Prix dès 1 600 DH/T.'
        : 'CPJ 55 cement (Composite Portland 55 MPa) in Morocco. Ultra high strength for civil engineering and infrastructure. NM 10.1.004 compliant. From 1,600 DH/T.',
      path: '/cpj-55',
      locale: loc,
    }),
    breadcrumbSchema([{ name: 'CPJ 55', path: '/cpj-55' }], loc),
    serviceSchema({
      name: isFr ? 'Ciment CPJ 55 — Production et Fourniture' : 'CPJ 55 Cement — Production & Supply',
      description: isFr
        ? 'Production, conditionnement et livraison de ciment CPJ 55 (55 MPa) au Maroc. Grands ouvrages, infrastructure, zone côtière.'
        : 'Production, packaging and delivery of CPJ 55 (55 MPa) cement in Morocco. Major works, infrastructure, coastal zone.',
      path: '/cpj-55',
      locale: loc,
      serviceType: 'CPJ 55 high-strength cement manufacturing and supply',
    }),
    productSchema({
      name: isFr ? 'Ciment CPJ 55 Maroc' : 'CPJ 55 Cement Morocco',
      description: isFr
        ? 'Ciment Portland Composé 55 MPa — ultra haute résistance pour génie civil, infrastructure et zone côtière. Conforme NM 10.1.004. Prix dès 1 600 DH/T.'
        : 'Composite Portland 55 MPa cement — ultra high strength for civil engineering, infrastructure and coastal zone. NM 10.1.004 compliant. From 1,600 DH/T.',
      sku: 'DAM-CPJ55',
      price: '1600',
      path: '/cpj-55',
      locale: loc,
      image: '/images/products/cpj55-bags.jpg',
      ratingValue: '4.9',
      reviewCount: 64,
    }),
    faqSchema(faqItems),
    speakableSchema({
      path: '/cpj-55',
      locale: loc,
      cssSelectors: ['h1', '.hero-title', '.product-price', '.faq-question'],
    }),
  ];

  return (
    <>
      <JsonLdScript schema={schemas} />
      <Breadcrumbs items={[{ name: 'CPJ 55', path: '/cpj-55' }]} locale={locale} />

      {/* Hero */}
      <section className="bg-gradient-to-br from-[#1B3A5C] to-[#0f1f33] text-white py-20 md:py-28">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <div className="max-w-4xl">
            <span className="inline-block px-4 py-1.5 bg-[#E8B84B]/20 text-[#E8B84B] text-sm font-medium rounded-full mb-6">
              {isFr ? 'Ciment CPJ 55 — Ultra Haute Résistance' : 'CPJ 55 Cement — Ultra High Strength'}
            </span>
            <h1 className="text-[clamp(2rem,5vw,3.5rem)] font-bold leading-[1.1] mb-6">
              {isFr
                ? 'Ciment CPJ 55 Maroc — Résistance 55 MPa'
                : 'CPJ 55 Cement Morocco — 55 MPa Strength'}
            </h1>
            <p className="text-lg md:text-xl text-white/80 leading-relaxed mb-8 max-w-3xl">
              {isFr
                ? 'Ciment Portland Composé 55 MPa pour les grands ouvrages de génie civil, l’infrastructure et les zones côtières. Conforme NM 10.1.004 / EN 197-1. Prix dès 1 600 DH/T. Livraison vrac, sacs 50kg et big bag dans tout le Sud marocain et la Mauritanie.'
                : 'Composite Portland 55 MPa cement for major civil engineering works, infrastructure and coastal zones. NM 10.1.004 / EN 197-1 compliant. From 1,600 DH/T. Bulk, 50kg bags and big bag delivery across Southern Morocco and Mauritania.'}
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
            {isFr ? 'Caractéristiques techniques du CPJ 55' : 'CPJ 55 technical specifications'}
          </h2>
          <p className="text-center text-[#6B7280] mb-12 max-w-2xl mx-auto">
            {isFr
              ? 'Ciment Portland Composé 55 MPa conforme à la norme marocaine NM 10.1.004 et à la norme européenne EN 197-1 (CEM II/A-L 52,5). Finesse de mouture supérieure pour bétons haute performance.'
              : 'Composite Portland 55 MPa cement compliant with Moroccan standard NM 10.1.004 and European standard EN 197-1 (CEM II/A-L 52.5). Higher fineness for high-performance concrete.'}
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
            {isFr ? 'Applications du CPJ 55' : 'CPJ 55 applications'}
          </h2>
          <p className="text-center text-[#6B7280] mb-12 max-w-2xl mx-auto">
            {isFr
              ? 'Le CPJ 55 est réservé aux ouvrages exigeants : génie civil, infrastructure, zones côtières, précontrainte.'
              : 'CPJ 55 is reserved for demanding works: civil engineering, infrastructure, coastal zones, prestressing.'}
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
              ? 'Le CPJ 55 est livré en vrac, sacs 50kg ou big bag 1T pour s’adapter à votre chantier de génie civil.'
              : 'CPJ 55 is delivered in bulk, 50kg bags or 1T big bag to fit your civil engineering site.'}
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
              {isFr ? 'Le ciment CPJ 55 : ultra haute résistance pour le génie civil' : 'CPJ 55 cement: ultra high strength for civil engineering'}
            </h2>
            <p className="text-[#1A1A2E]/80 leading-relaxed mb-6">
              {isFr
                ? "Le ciment CPJ 55 (Ciment Portland Composé, classe de résistance 52,5 MPa à 28 jours, désigné commercialement 55 MPa) est un ciment haute performance réservé aux ouvrages exigeants. Sa composition riche en clinker (≥ 70 %) et sa finesse de mouture élevée (≥ 380 m²/kg Blaine) lui confèrent une résistance à la compression de 55 MPa à 28 jours, idéale pour les structures de génie civil, l’infrastructure et les ouvrages en zone côtière."
                : "CPJ 55 cement (Composite Portland Cement, strength class 52.5 MPa at 28 days, marketed as 55 MPa) is a high-performance cement reserved for demanding works. Its clinker-rich composition (≥ 70%) and high fineness (≥ 380 m²/kg Blaine) give it a compressive strength of 55 MPa at 28 days, ideal for civil engineering structures, infrastructure and coastal works."}
            </p>
            <p className="text-[#1A1A2E]/80 leading-relaxed mb-6">
              {isFr
                ? "Produit dans le centre de broyage de Dakhla Aménagement à Dakhla, le CPJ 55 est conforme à la norme marocaine NM 10.1.004 et à la norme européenne EN 197-1 (CEM II/A-L 52,5). Chaque lot est testé en laboratoire avant expédition : résistance à la compression, finesse, temps de prise, stabilité et résistance aux sulfates. Les certificats de conformité sont fournis systématiquement."
                : "Produced at the Dakhla Aménagement grinding plant in Dakhla, CPJ 55 complies with Moroccan standard NM 10.1.004 and European standard EN 197-1 (CEM II/A-L 52.5). Each batch is lab-tested before shipment: compressive strength, fineness, setting time, stability and sulfate resistance. Conformity certificates are systematically provided."}
            </p>

            <h3 className="text-2xl font-bold text-[#1B3A5C] mt-10 mb-4">
              {isFr ? 'Avantages du CPJ 55' : 'CPJ 55 advantages'}
            </h3>
            <ul className="space-y-3 mb-6">
              {(isFr
                ? [
                    'Résistance à la compression de 55 MPa à 28 jours — bétons haute performance (C40/50 et au-delà)',
                    'Durabilité supérieure face aux agressions chlorhydriques (sels marins) et sulfatiques',
                    'Finesse de mouture élevée (≥ 380 m²/kg) — meilleure hydratation et résistances précoces',
                    'Idéal pour la précontrainte et la préfabrication lourde (longues portées, éléments minces)',
                    'Adapté aux zones côtières (Dakhla, Boujdour, Laâyoune) et aux ouvrages maritimes',
                    'Conforme NM 10.1.004 / EN 197-1 — certifications disponibles sur demande',
                  ]
                : [
                    'Compressive strength of 55 MPa at 28 days — high-performance concrete (C40/50 and beyond)',
                    'Superior durability against chloride (sea salts) and sulfate attacks',
                    'High fineness (≥ 380 m²/kg) — better hydration and early strengths',
                    'Ideal for prestressing and heavy precasting (long spans, thin elements)',
                    'Adapted to coastal areas (Dakhla, Boujdour, Laayoune) and maritime works',
                    'Compliant with NM 10.1.004 / EN 197-1 — certifications available on request',
                  ]
              ).map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-[#1A1A2E]/80">
                  <CheckCircle className="w-5 h-5 text-[#E8B84B] shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <h3 className="text-2xl font-bold text-[#1B3A5C] mt-10 mb-4">
              {isFr ? 'Dosage recommandé du CPJ 55' : 'Recommended CPJ 55 dosage'}
            </h3>
            <p className="text-[#1A1A2E]/80 leading-relaxed mb-6">
              {isFr
                ? "Pour un béton haute performance (C35/45), comptez environ 400 kg de CPJ 55 par m³. Pour les bétons très sollicités (C40/50 et C45/55), prévoyez 420-450 kg/m³ avec un rapport E/C bas (≤ 0,45) et l’utilisation éventuelle de superplastifiants. Le CPJ 55 est particulièrement adapté à la précontrainte grâce à son début de prise retardé (≥ 60 min) qui facilite la mise en œuvre. Notre équipe technique peut vous accompagner dans la formulation de votre béton."
                : "For high-performance concrete (C35/45), allow about 400 kg of CPJ 55 per m³. For highly stressed concretes (C40/50 and C45/55), plan for 420-450 kg/m³ with a low W/C ratio (≤ 0.45) and the possible use of superplasticizers. CPJ 55 is particularly suitable for prestressing thanks to its delayed initial setting (≥ 60 min) which facilitates placement. Our technical team can support you in formulating your concrete."}
            </p>

            <h3 className="text-2xl font-bold text-[#1B3A5C] mt-10 mb-4">
              {isFr ? 'Prix du CPJ 55 au Maroc' : 'CPJ 55 price in Morocco'}
            </h3>
            <p className="text-[#1A1A2E]/80 leading-relaxed mb-6">
              {isFr
                ? "Le prix du CPJ 55 démarre à 1 600 DH/T en vrac (minimum 30T), 1 650 DH/T en sacs 50kg (palette 1T) et 1 680 DH/T en big bag 1T. Le surcoût d’environ 100 DH/T par rapport au CPJ 45 reflète la résistance supérieure et la composition plus riche en clinker. Pour les projets de génie civil d’envergure, des tarifs dégressifs sont négociables. Demandez un devis gratuit pour un chiffrage précis."
                : "CPJ 55 price starts at 1,600 DH/T in bulk (minimum 30T), 1,650 DH/T in 50kg bags (1T pallet) and 1,680 DH/T in 1T big bag. The premium of about 100 DH/T over CPJ 45 reflects the higher strength and clinker-richer composition. For large civil engineering projects, volume discounts are negotiable. Request a free quote for precise pricing."}
            </p>
            <div className="bg-[#F7F8FA] border border-[#E5E7EB] rounded-xl p-6 my-6">
              <Link
                href={`/${locale}/prix-ciment`}
                className="inline-flex items-center gap-2 text-[#C1272D] font-medium hover:gap-3 transition-all"
              >
                {isFr ? '→ Comparer les prix CPJ 45 vs CPJ 55' : '→ Compare CPJ 45 vs CPJ 55 prices'}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 md:py-24 bg-[#F7F8FA]">
        <div className="max-w-3xl mx-auto px-6 md:px-12">
          <h2 className="text-3xl font-bold text-[#1B3A5C] mb-8 text-center">
            {isFr ? 'Questions fréquentes sur le CPJ 55' : 'Frequently asked questions about CPJ 55'}
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
        articleSlugs={['choisir-ciment-projet', 'cpj45-vs-cpj55-guide', 'construction-zone-cotiere']}
        locale={locale}
      />
      <CtaBanner
        locale={locale}
        title={isFr ? 'Besoin de ciment CPJ 55 au Maroc ?' : 'Need CPJ 55 cement in Morocco?'}
        subtitle={
          isFr
            ? 'Devis gratuit sous 24h. CPJ 55 dès 1 600 DH/T. Livraison vrac, sacs et big bag pour vos chantiers de génie civil et infrastructure.'
            : 'Free quote within 24h. CPJ 55 from 1,600 DH/T. Bulk, bags and big bag delivery for your civil engineering and infrastructure sites.'
        }
        buttonText={isFr ? 'Demander un devis gratuit' : 'Request a free quote'}
      />
    </>
  );
}
