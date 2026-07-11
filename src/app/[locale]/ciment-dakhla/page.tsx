import Link from 'next/link';
import { buildMetadata, KEYWORDS, SITE } from '@/lib/seo';
import {
  webPageSchema,
  breadcrumbSchema,
  serviceSchema,
  faqSchema,
  localBusinessSchema,
} from '@/lib/structured-data';
import { JsonLdScript } from '@/components/shared/JsonLd';
import { Breadcrumbs } from '@/components/shared/Breadcrumbs';
import { RelatedLinks, CtaBanner } from '@/components/shared/RelatedLinks';
import { REGIONAL_RELATED } from '@/lib/internal-links';
import { CheckCircle, ArrowRight, MapPin, Truck, Clock, Factory, Beaker, Phone } from 'lucide-react';

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
      path: '/ciment-dakhla',
      title: 'Cement Dakhla — Producer & 24h Delivery | Dakhla Aménagement',
      description:
        'CPJ 45 and CPJ 55 cement in Dakhla. Local grinding plant, 24h delivery. Direct producer, factory prices from 1,500 DH/T. Bulk, bags, big bag. Free Dakhla quote.',
      keywords: [
        ...KEYWORDS.regional,
        'ciment Dakhla',
        'ciment à Dakhla',
        'acheter ciment Dakhla',
        'cimentier Dakhla',
        'matériaux construction Dakhla',
        'cement Dakhla',
      ],
    });
  }

  return buildMetadata({
    locale: 'fr',
    path: '/ciment-dakhla',
    title: 'Ciment Dakhla — Producteur & Livraison 24h | Dakhla Aménagement',
    description:
      'Ciment CPJ 45 et CPJ 55 à Dakhla. Centre de broyage local, livraison 24h. Producteur direct, prix usine dès 1 500 DH/T. Vrac, sacs, big bag. Devis gratuit Dakhla.',
    keywords: [
      ...KEYWORDS.regional,
      'ciment Dakhla',
      'ciment à Dakhla',
      'acheter ciment Dakhla',
      'cimentier Dakhla',
      'matériaux construction Dakhla',
    ],
  });
}

const faqItemsFr = [
  {
    question: 'Où acheter du ciment à Dakhla ?',
    answer:
      "Dakhla Aménagement exploite son propre centre de broyage de clinker à Dakhla, dans le quartier Lassargua. Nous vendons directement aux professionnels du BTP, entreprises de construction et particuliers de Dakhla et de la région de Dakhla-Oued Ed-Dahab. Commandez en ligne via ciment-dam.com ou par téléphone au +212 658-265685.",
  },
  {
    question: 'Quel est le prix du ciment à Dakhla ?',
    answer:
      "À Dakhla, le ciment CPJ 45 est disponible dès 1 500 DH/T et le CPJ 55 dès 1 600 DH/T. Le prix varie selon le conditionnement (vrac, sacs 50kg, big bag 1T) et la quantité. Étant producteur direct à Dakhla, nous pratiquons des prix usine sans intermédiaire. Demandez un devis gratuit pour un tarif personnalisé.",
  },
  {
    question: 'Quel délai de livraison pour le ciment à Dakhla ?',
    answer:
      "Pour Dakhla ville et sa périphérie (Lassargua, centre-ville, zone industrielle, plage, Foum El Bouir), la livraison est assurée en 24h ouvrées. Pour Aousserd et les chantiers éloignés de la province, comptez 24h à 48h. Notre flotte dédiée est basée à Dakhla, ce qui garantit une réactivité maximale.",
  },
  {
    question: 'Quels types de ciment produisez-vous à Dakhla ?',
    answer:
      "Notre centre de broyage de Dakhla produit deux qualités : le ciment CPJ 45 (45 MPa) pour le béton armé courant, dallages et fondations, et le ciment CPJ 55 (55 MPa) pour les ouvrages de génie civil, infrastructures et zones côtières soumises aux embruns. Les deux sont conformes à la norme NM 10.1.004 et EN 197-1.",
  },
  {
    question: 'Proposez-vous la livraison en vrac à Dakhla ?',
    answer:
      "Oui, nous livrons le ciment en vrac à Dakhla par camions-citernes équipés de systèmes de pompage pour déchargement direct dans votre silo chantier. Nous proposons aussi les sacs 50kg (palettes 1T) et les big bags 1T. Le vrac est idéal pour les gros chantiers dakhlois et permet de réduire le coût à la tonne.",
  },
];

const faqItemsEn = [
  {
    question: 'Where to buy cement in Dakhla?',
    answer:
      'Dakhla Aménagement operates its own clinker grinding plant in Dakhla, in the Lassargua district. We sell directly to construction professionals, contractors and individuals in Dakhla and the Dakhla-Oued Ed-Dahab region. Order online at ciment-dam.com or by phone at +212 658-265685.',
  },
  {
    question: 'What is the price of cement in Dakhla?',
    answer:
      'In Dakhla, CPJ 45 cement is available from 1,500 DH/T and CPJ 55 from 1,600 DH/T. The price varies by packaging (bulk, 50kg bags, 1T big bag) and quantity. As a direct producer in Dakhla, we apply factory prices with no middleman. Request a free quote for a custom price.',
  },
  {
    question: 'What is the delivery time for cement in Dakhla?',
    answer:
      'For Dakhla city and its outskirts (Lassargua, downtown, industrial zone, beach, Foum El Bouir), delivery is guaranteed within 24 business hours. For Aousserd and remote sites in the province, allow 24h to 48h. Our dedicated fleet is based in Dakhla, ensuring maximum responsiveness.',
  },
  {
    question: 'What types of cement do you produce in Dakhla?',
    answer:
      'Our Dakhla grinding plant produces two qualities: CPJ 45 cement (45 MPa) for standard reinforced concrete, slabs and foundations, and CPJ 55 cement (55 MPa) for civil engineering works, infrastructure and coastal areas exposed to sea spray. Both comply with the NM 10.1.004 and EN 197-1 standards.',
  },
  {
    question: 'Do you offer bulk delivery in Dakhla?',
    answer:
      'Yes, we deliver bulk cement in Dakhla via tanker trucks equipped with pumping systems for direct unloading into your site silo. We also offer 50kg bags (1T pallets) and 1T big bags. Bulk is ideal for large Dakhla construction sites and reduces the per-ton cost.',
  },
];

export default async function CimentDakhlaPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const loc: 'fr' | 'en' = locale === 'en' ? 'en' : 'fr';
  const isFr = loc === 'fr';
  const faqItems = isFr ? faqItemsFr : faqItemsEn;

  const schemas = [
    webPageSchema({
      name: isFr ? 'Ciment Dakhla — Producteur & Livraison' : 'Cement Dakhla — Producer & Delivery',
      description: isFr
        ? 'Ciment CPJ 45 et CPJ 55 à Dakhla. Centre de broyage local, livraison 24h, producteur direct.'
        : 'CPJ 45 and CPJ 55 cement in Dakhla. Local grinding plant, 24h delivery, direct producer.',
      path: '/ciment-dakhla',
      locale: loc,
    }),
    breadcrumbSchema(
      [{ name: isFr ? 'Ciment Dakhla' : 'Cement Dakhla', path: '/ciment-dakhla' }],
      loc,
    ),
    serviceSchema({
      name: isFr
        ? 'Production et livraison de ciment à Dakhla'
        : 'Cement production and delivery in Dakhla',
      description: isFr
        ? 'Producteur de ciment CPJ 45 et CPJ 55 à Dakhla. Centre de broyage local, livraison 24h, prix usine.'
        : 'Producer of CPJ 45 and CPJ 55 cement in Dakhla. Local grinding plant, 24h delivery, factory prices.',
      path: '/ciment-dakhla',
      locale: loc,
      serviceType: 'Cement manufacturing and local delivery — Dakhla',
    }),
    localBusinessSchema(),
    faqSchema(faqItems),
  ];

  const features = isFr
    ? [
        { icon: Factory, title: 'Production locale à Dakhla', desc: 'Centre de broyage de clinker dans le quartier Lassargua à Dakhla, capacité 500 000 T/an' },
        { icon: Clock, title: 'Livraison 24h à Dakhla', desc: 'Flotte basée à Dakhla, livraison en 24h ouvrées sur la ville et sa périphérie' },
        { icon: Beaker, title: 'Qualité certifiée', desc: 'Conforme NM 10.1.004, EN 197-1, ISO 9001. Tests laboratoire avant expédition' },
        { icon: Truck, title: 'Vrac, sacs, big bag', desc: 'Tous conditionnements disponibles depuis notre stock de Dakhla' },
      ]
    : [
        { icon: Factory, title: 'Local production in Dakhla', desc: 'Clinker grinding plant in the Lassargua district of Dakhla, 500,000 T/year capacity' },
        { icon: Clock, title: '24h delivery in Dakhla', desc: 'Fleet based in Dakhla, 24 business hours delivery across the city and outskirts' },
        { icon: Beaker, title: 'Certified quality', desc: 'NM 10.1.004, EN 197-1, ISO 9001 compliant. Lab tested before shipping' },
        { icon: Truck, title: 'Bulk, bags, big bag', desc: 'All packaging options available from our Dakhla stock' },
      ];

  const products = isFr
    ? [
        { name: 'CPJ 45', resistance: '45 MPa', price: '1 500 DH/T', use: 'Béton armé, dallages, fondations, maçonnerie courante' },
        { name: 'CPJ 55', resistance: '55 MPa', price: '1 600 DH/T', use: 'Génie civil, infrastructure, zone côtière de Dakhla, ouvrages exigeants' },
      ]
    : [
        { name: 'CPJ 45', resistance: '45 MPa', price: '1,500 DH/T', use: 'Reinforced concrete, slabs, foundations, standard masonry' },
        { name: 'CPJ 55', resistance: '55 MPa', price: '1,600 DH/T', use: 'Civil engineering, infrastructure, Dakhla coastal zone, demanding works' },
      ];

  const deliveryZonesDakhla = isFr
    ? [
        { area: 'Lassargua', desc: 'Quartier de notre usine — livraison immédiate, enlèvement possible' },
        { area: 'Centre-ville de Dakhla', desc: 'Livraison 24h, accès camions 19T' },
        { area: 'Zone industrielle de Dakhla', desc: 'Livraison 24h, idéale pour les entreprises BTP' },
        { area: 'Dakhla plage & corniche', desc: 'Livraison 24h, ciment CPJ 55 recommandé (embruns)' },
        { area: 'Foum El Bouir (port)', desc: 'Livraison 24-48h, zone portuaire en développement' },
        { area: 'Aousserd', desc: 'Livraison 24-48h, 80 km au sud-est de Dakhla' },
        { area: 'Périphérie de Dakhla', desc: 'Toutes zones dans un rayon de 50 km — livraison 24h' },
      ]
    : [
        { area: 'Lassargua', desc: 'Our plant district — immediate delivery, pickup possible' },
        { area: 'Downtown Dakhla', desc: '24h delivery, 19T truck access' },
        { area: 'Dakhla industrial zone', desc: '24h delivery, ideal for construction companies' },
        { area: 'Dakhla beach & corniche', desc: '24h delivery, CPJ 55 cement recommended (sea spray)' },
        { area: 'Foum El Bouir (port)', desc: '24-48h delivery, developing port area' },
        { area: 'Aousserd', desc: '24-48h delivery, 80 km south-east of Dakhla' },
        { area: 'Dakhla outskirts', desc: 'All areas within 50 km — 24h delivery' },
      ];

  const projects = isFr
    ? [
        { name: 'Extension du port de Dakhla', desc: 'Fourniture de CPJ 55 pour les travaux de génie civil portuaire, ouvrages exposés à la mer.' },
        { name: 'Programmes immobiliers Lassargua', desc: 'CPJ 45 pour les fondations et structures béton armé de plusieurs immeubles résidentiels.' },
        { name: 'Aménagements hôteliers (baie de Dakhla)', desc: 'CPJ 55 pour les zones côtières, résistant aux embruns et à la salinité.' },
        { name: 'Voirie et réseaux divers (VRD) Dakhla', desc: 'CPJ 45 pour dallages, bordures, caniveaux et infrastructures urbaines.' },
      ]
    : [
        { name: 'Dakhla port extension', desc: 'CPJ 55 supply for port civil engineering works, marine-exposed structures.' },
        { name: 'Lassargua residential programs', desc: 'CPJ 45 for foundations and reinforced concrete structures of several residential buildings.' },
        { name: 'Hotel developments (Dakhla bay)', desc: 'CPJ 55 for coastal zones, resistant to sea spray and salinity.' },
        { name: 'Roads and utilities (VRD) Dakhla', desc: 'CPJ 45 for slabs, curbs, gutters and urban infrastructure.' },
      ];

  return (
    <>
      <JsonLdScript schema={schemas} />
      <Breadcrumbs items={[{ name: isFr ? 'Ciment Dakhla' : 'Cement Dakhla', path: '/ciment-dakhla' }]} locale={locale} />

      {/* Hero */}
      <section className="bg-gradient-to-br from-[#1B3A5C] to-[#0f1f33] text-white py-20 md:py-28">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <div className="max-w-4xl">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-[#E8B84B]/20 text-[#E8B84B] text-sm font-medium rounded-full mb-6">
              <MapPin className="w-4 h-4" />
              {isFr ? 'Producteur de ciment à Dakhla' : 'Cement producer in Dakhla'}
            </span>
            <h1 className="text-[clamp(2rem,5vw,3.5rem)] font-bold leading-[1.1] mb-6">
              {isFr ? 'Ciment Dakhla — Producteur & Livraison 24h' : 'Cement Dakhla — Producer & 24h Delivery'}
            </h1>
            <p className="text-lg md:text-xl text-white/80 leading-relaxed mb-8 max-w-3xl">
              {isFr
                ? "Dakhla Aménagement exploite son propre centre de broyage de clinker à Dakhla, dans le quartier Lassargua. Nous produisons et livrons du ciment CPJ 45 et CPJ 55 dans toute la ville de Dakhla et sa région, en 24h ouvrées, directement depuis notre usine. Prix usine dès 1 500 DH/T, sans intermédiaire."
                : "Dakhla Aménagement operates its own clinker grinding plant in Dakhla, in the Lassargua district. We produce and deliver CPJ 45 and CPJ 55 cement across the city of Dakhla and its region, within 24 business hours, directly from our plant. Factory prices from 1,500 DH/T, no middleman."}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href={`/${locale}/devis`}
                className="inline-flex items-center gap-2 px-6 py-3 bg-[#C1272D] text-white font-semibold rounded-full hover:bg-[#C1272D]/90 transition-colors"
              >
                {isFr ? 'Demander un devis à Dakhla' : 'Request a Dakhla quote'}
                <ArrowRight className="w-4 h-4" />
              </Link>
              <a
                href="tel:+212658265685"
                className="inline-flex items-center gap-2 px-6 py-3 border border-white/30 text-white font-semibold rounded-full hover:bg-white/10 transition-colors"
              >
                <Phone className="w-4 h-4" />
                +212 658-265685
              </a>
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

      {/* Notre présence à Dakhla */}
      <section className="py-16 md:py-24 bg-[#F7F8FA]">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#1B3A5C] mb-6">
              {isFr ? 'Notre présence à Dakhla' : 'Our presence in Dakhla'}
            </h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-[#1A1A2E]/80 leading-relaxed mb-6">
                {isFr
                  ? "Dakhla Aménagement (DAM) est implanté à Dakhla depuis 2015. Notre centre de broyage de clinker, situé dans le quartier Lassargua au cœur de la zone d'activité de Dakhla, est le seul site de production cimentière de la région de Dakhla-Oued Ed-Dahab. Avec une capacité annuelle de 500 000 tonnes, nous approvisionnons les chantiers de la ville de Dakhla, de sa périphérie et des provinces voisines (Aousserd, Boujdour)."
                  : "Dakhla Aménagement (DAM) has been established in Dakhla since 2015. Our clinker grinding plant, located in the Lassargua district at the heart of Dakhla's business area, is the only cement production site in the Dakhla-Oued Ed-Dahab region. With an annual capacity of 500,000 tons, we supply construction sites in the city of Dakhla, its outskirts and neighboring provinces (Aousserd, Boujdour)."}
              </p>
              <p className="text-[#1A1A2E]/80 leading-relaxed mb-6">
                {isFr
                  ? "Notre adresse : Quartier Lassargua, 1 et 1 angle rue Lagouira, Avenue El Walae, Dakhla (code postal 73000). Vous pouvez retirer votre commande directement à l'usine ou la faire livrer sur votre chantier à Dakhla. Notre équipe locale — commerciale, technique et logistique — est disponible du lundi au samedi pour vous accompagner."
                  : "Our address: Quartier Lassargua, 1 et 1 angle rue Lagouira, Avenue El Walae, Dakhla (postal code 73000). You can pick up your order directly at the plant or have it delivered to your site in Dakhla. Our local team — sales, technical and logistics — is available Monday to Saturday to support you."}
              </p>
              <p className="text-[#1A1A2E]/80 leading-relaxed">
                {isFr
                  ? "Être producteur à Dakhla même nous permet de garantir un ciment frais (le ciment perd en résistance avec le temps), des délais de livraison courts et un support technique de proximité pour les entrepreneurs dakhlois. Nous connaissons les contraintes locales : vent, salinité, chaleur, éloignement — et nos recommandations en tiennent compte."
                  : "Being a producer in Dakhla itself allows us to guarantee fresh cement (cement loses strength over time), short delivery times and local technical support for Dakhla contractors. We know the local constraints: wind, salinity, heat, remoteness — and our recommendations take them into account."}
              </p>
            </div>
          </div>
          <div className="bg-white border border-[#E5E7EB] rounded-2xl p-8 shadow-sm">
            <h3 className="font-bold text-[#1B3A5C] mb-6 flex items-center gap-2">
              <MapPin className="w-5 h-5 text-[#E8B84B]" />
              {isFr ? "Coordonnées de l'usine de Dakhla" : 'Dakhla plant contact details'}
            </h3>
            <dl className="space-y-4 text-sm">
              <div>
                <dt className="text-[#6B7280] mb-1">{isFr ? 'Adresse' : 'Address'}</dt>
                <dd className="font-semibold text-[#1A1A2E]">{SITE.address.streetAddress}</dd>
                <dd className="font-semibold text-[#1A1A2E]">{SITE.address.postalCode} {SITE.address.addressLocality}, {SITE.address.addressRegion}</dd>
              </div>
              <div>
                <dt className="text-[#6B7280] mb-1">{isFr ? 'Téléphone' : 'Phone'}</dt>
                <dd className="font-semibold text-[#1A1A2E]">{SITE.phoneDisplay}</dd>
              </div>
              <div>
                <dt className="text-[#6B7280] mb-1">Email</dt>
                <dd className="font-semibold text-[#1A1A2E]">{SITE.email}</dd>
              </div>
              <div>
                <dt className="text-[#6B7280] mb-1">{isFr ? 'Coordonnées GPS' : 'GPS coordinates'}</dt>
                <dd className="font-semibold text-[#1A1A2E]">{SITE.geo.latitude}, {SITE.geo.longitude}</dd>
              </div>
              <div>
                <dt className="text-[#6B7280] mb-1">{isFr ? 'Horaires' : 'Hours'}</dt>
                <dd className="font-semibold text-[#1A1A2E]">{isFr ? 'Lun–Ven 08h–18h, Sam 08h–13h' : 'Mon–Fri 8am–6pm, Sat 8am–1pm'}</dd>
              </div>
            </dl>
            <Link
              href={`/${locale}/contact`}
              className="inline-flex items-center gap-1 text-sm font-medium text-[#C1272D] hover:gap-2 transition-all mt-6"
            >
              {isFr ? 'Voir la page contact' : 'View contact page'}
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Produits disponibles */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1B3A5C] mb-4 text-center">
            {isFr ? 'Produits disponibles à Dakhla' : 'Products available in Dakhla'}
          </h2>
          <p className="text-center text-[#6B7280] mb-12 max-w-2xl mx-auto">
            {isFr
              ? "Notre usine de Dakhla produit deux qualités de ciment Portland Composé (CPJ), conformes aux normes NM 10.1.004 et EN 197-1."
              : "Our Dakhla plant produces two qualities of Composite Portland Cement (CPJ), compliant with NM 10.1.004 and EN 197-1 standards."}
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {products.map((c) => (
              <div key={c.name} className="bg-[#F7F8FA] border border-[#E5E7EB] rounded-2xl p-8">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-2xl font-bold text-[#1B3A5C]">{c.name}</h3>
                  <span className="px-3 py-1 bg-[#E8B84B]/15 text-[#E8B84B] text-sm font-semibold rounded-full">
                    {c.price}
                  </span>
                </div>
                <dl className="space-y-3 mb-6">
                  <div className="flex justify-between text-sm">
                    <dt className="text-[#6B7280]">{isFr ? 'Résistance' : 'Resistance'}</dt>
                    <dd className="font-semibold text-[#1A1A2E]">{c.resistance}</dd>
                  </div>
                  <div className="flex justify-between text-sm gap-4">
                    <dt className="text-[#6B7280] shrink-0">{isFr ? 'Usage' : 'Use'}</dt>
                    <dd className="font-semibold text-[#1A1A2E] text-right">{c.use}</dd>
                  </div>
                </dl>
                <Link
                  href={`/${locale}/produits`}
                  className="inline-flex items-center gap-1 text-sm font-medium text-[#C1272D] hover:gap-2 transition-all"
                >
                  {isFr ? 'En savoir plus' : 'Learn more'}
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            ))}
          </div>
          <p className="text-center text-[#6B7280] mt-8 text-sm max-w-2xl mx-auto">
            {isFr
              ? "Tous nos ciments sont disponibles en vrac (camion-citerne avec pompage), en sacs 50kg (palettes 1T) et en big bag 1T, depuis notre stock de Dakhla."
              : "All our cements are available in bulk (tanker truck with pumping), 50kg bags (1T pallets) and 1T big bags, from our Dakhla stock."}
          </p>
        </div>
      </section>

      {/* Zones de livraison dans Dakhla */}
      <section className="py-16 md:py-24 bg-[#F7F8FA]">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1B3A5C] mb-4 text-center">
            {isFr ? 'Zones de livraison dans Dakhla' : 'Delivery zones in Dakhla'}
          </h2>
          <p className="text-center text-[#6B7280] mb-12 max-w-2xl mx-auto">
            {isFr
              ? "Notre flotte basée à Dakhla couvre toute la ville et sa périphérie. Délais indicatifs depuis notre usine de Lassargua."
              : "Our Dakhla-based fleet covers the entire city and its outskirts. Indicative lead times from our Lassargua plant."}
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {deliveryZonesDakhla.map((z, i) => (
              <div key={i} className="bg-white border border-[#E5E7EB] rounded-xl p-6">
                <div className="flex items-center gap-2 mb-2">
                  <MapPin className="w-4 h-4 text-[#E8B84B]" />
                  <h3 className="font-bold text-[#1B3A5C]">{z.area}</h3>
                </div>
                <p className="text-sm text-[#6B7280] leading-relaxed">{z.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projets réalisés à Dakhla */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1B3A5C] mb-4 text-center">
            {isFr ? 'Projets réalisés à Dakhla' : 'Projects completed in Dakhla'}
          </h2>
          <p className="text-center text-[#6B7280] mb-12 max-w-2xl mx-auto">
            {isFr
              ? "Dakhla Aménagement a fourni du ciment pour de nombreux chantiers dakhlois : port, immobilier, hôtellerie, VRD, infrastructures."
              : "Dakhla Aménagement has supplied cement for many Dakhla construction sites: port, real estate, hospitality, utilities, infrastructure."}
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {projects.map((p, i) => (
              <div key={i} className="bg-[#F7F8FA] border border-[#E5E7EB] rounded-xl p-6">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-[#E8B84B] shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-bold text-[#1B3A5C] mb-2">{p.name}</h3>
                    <p className="text-sm text-[#6B7280] leading-relaxed">{p.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pourquoi producteur local */}
      <section className="py-16 md:py-24 bg-[#F7F8FA]">
        <div className="max-w-4xl mx-auto px-6 md:px-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1B3A5C] mb-6">
            {isFr ? 'Pourquoi choisir un producteur local à Dakhla ?' : 'Why choose a local producer in Dakhla?'}
          </h2>
          <div className="prose prose-lg max-w-none">
            <p className="text-[#1A1A2E]/80 leading-relaxed mb-6">
              {isFr
                ? "Acheter votre ciment directement à un producteur installé à Dakhla présente trois avantages majeurs pour vos chantiers dakhlois : la fraîcheur du ciment, la rapidité de livraison et un support technique de proximité."
                : "Buying your cement directly from a producer based in Dakhla has three major advantages for your Dakhla construction sites: cement freshness, delivery speed and proximity technical support."}
            </p>
            <ul className="space-y-3 mb-6">
              {(isFr
                ? [
                    'Ciment frais : produit sur place à Dakhla, sans transit long. Le ciment perd environ 10% de résistance par mois de stockage — un producteur local garantit une résistance optimale.',
                    'Délai 24h : notre flotte est basée à Dakhla, ce qui permet une livraison en 24h ouvrées sur la ville et les chantiers proches (Lassargua, centre, zone industrielle, plage).',
                    'Support technique local : notre équipe connaît les contraintes de construction à Dakhla (vent, salinité, chaleur, sols sablonneux) et vous conseille le bon ciment et le bon dosage.',
                    'Prix usine sans intermédiaire : en achetant directement au producteur de Dakhla, vous évitez les marges des distributeurs et négociez des tarifs dégressifs selon le volume.',
                    'Stockage de proximité : nous pouvons constituer un stock dédié pour votre chantier à Dakhla et planifier des livraisons régulières sur plusieurs mois.',
                  ]
                : [
                    'Fresh cement: produced on-site in Dakhla, without long transit. Cement loses about 10% strength per month of storage — a local producer guarantees optimal strength.',
                    '24h lead time: our fleet is based in Dakhla, allowing 24 business hours delivery to the city and nearby sites (Lassargua, downtown, industrial zone, beach).',
                    'Local technical support: our team knows the construction constraints of Dakhla (wind, salinity, heat, sandy soils) and advises the right cement and dosage.',
                    'Factory prices without middleman: by buying directly from the Dakhla producer, you avoid distributor margins and negotiate volume-based degressive prices.',
                    'Proximity storage: we can build a dedicated stock for your Dakhla site and schedule regular deliveries over several months.',
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
                ? "Que vous construisiez à Dakhla ville, à Aousserd ou sur la côte atlantique sud, notre présence locale est un atout pour la qualité et le coût global de votre projet. Au-delà de Dakhla, nous livrons aussi Boujdour (180 km, 48h), Laâyoune (500 km, 72h) et toute la région du Sud marocain."
                : "Whether you build in Dakhla city, Aousserd or on the southern Atlantic coast, our local presence is an asset for the quality and overall cost of your project. Beyond Dakhla, we also deliver to Boujdour (180 km, 48h), Laayoune (500 km, 72h) and the entire Southern Morocco region."}
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-3xl mx-auto px-6 md:px-12">
          <h2 className="text-3xl font-bold text-[#1B3A5C] mb-8 text-center">
            {isFr ? 'Questions fréquentes — Ciment à Dakhla' : 'FAQ — Cement in Dakhla'}
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

      <RelatedLinks
        title={isFr ? 'Nos autres zones régionales' : 'Our other regional zones'}
        links={REGIONAL_RELATED}
        locale={locale}
      />

      <CtaBanner
        locale={locale}
        title={isFr ? 'Besoin de ciment à Dakhla ?' : 'Need cement in Dakhla?'}
        subtitle={
          isFr
            ? 'Producteur direct à Dakhla. CPJ 45 dès 1 500 DH/T, CPJ 55 dès 1 600 DH/T. Livraison 24h sur Dakhla ville. Devis gratuit sous 24h.'
            : 'Direct producer in Dakhla. CPJ 45 from 1,500 DH/T, CPJ 55 from 1,600 DH/T. 24h delivery across Dakhla city. Free quote within 24h.'
        }
        buttonText={isFr ? 'Demander un devis à Dakhla' : 'Request a Dakhla quote'}
      />
    </>
  );
}
