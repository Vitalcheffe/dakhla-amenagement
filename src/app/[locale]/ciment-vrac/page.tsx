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
import { CheckCircle, ArrowRight, Truck, Factory, Beaker, PiggyBank, Package, Gauge, Workflow } from 'lucide-react';

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
      path: '/ciment-vrac',
      title: 'Bulk Cement Morocco — Tanker Truck Delivery | Dakhla Aménagement',
      description:
        'Bulk CPJ 45 and CPJ 55 cement in Morocco. Tanker truck delivery with direct silo pumping. Ideal for large sites (min. 30T). From 1,500 DH/T. Dakhla, Southern Morocco, Mauritania.',
      keywords: [
        'bulk cement Morocco',
        'cement in bulk',
        'bulk cement delivery',
        'cement tanker truck',
        'cement silo',
        ...KEYWORDS.products,
        ...KEYWORDS.buying,
      ],
    });
  }

  return buildMetadata({
    locale: 'fr',
    path: '/ciment-vrac',
    title: 'Ciment en Vrac Maroc — Livraison Camion-Citerne | Dakhla Aménagement',
    description:
      'Ciment en vrac CPJ 45 et CPJ 55 au Maroc. Livraison par camion-citerne avec pompage direct en silo. Idéal gros chantiers (min. 30T). Prix dès 1 500 DH/T. Dakhla, Sud Maroc, Mauritanie.',
    keywords: [
      'ciment vrac Maroc',
      'ciment en vrac',
      'livraison ciment vrac',
      'camion citerne ciment',
      'ciment silo',
      ...KEYWORDS.products,
      ...KEYWORDS.buying,
    ],
  });
}

export default async function CimentVracPage({
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
          question: 'Quelle est la quantité minimale pour une livraison de ciment en vrac ?',
          answer:
            "La quantité minimale pour une livraison de ciment en vrac par camion-citerne est de 30 tonnes (soit un camion complet). En dessous de 30T, le coût logistique du transport vrac devient prohibitif : nous recommandons alors le big bag 1T (livraison standard) ou les sacs 50kg (petits chantiers). Pour les volumes supérieurs à 30T, le vrac est la solution la plus économique.",
        },
        {
          question: 'Comment se passe la livraison de ciment en vrac sur mon chantier ?',
          answer:
            "Le camion-citerne arrive sur votre chantier, se connecte à votre silo à ciment via un tuyau flexible, et pompe le ciment directement dans le silo. Le pompage est entièrement automatisé et contrôlé par le chauffeur-livreur. Comptez environ 30 à 45 minutes pour transférer 30T. Vous devez disposer d’un silo (nous pouvons vous orienter vers des loueurs) et d’une zone d’accès pour le camion.",
        },
        {
          question: 'Le ciment en vrac est-il moins cher que les sacs ?',
          answer:
            "Oui, le ciment en vrac est significativement moins cher : 1 500 DH/T (vrac) contre 1 550 DH/T (sacs 50kg) et 1 580 DH/T (big bag). L’écart de prix reflète l’absence d’emballage (sacs, palettes, film) et la manutention industrialisée. Pour une commande de 100T, l’économie peut atteindre 5 000 à 8 000 DH par rapport aux sacs.",
        },
        {
          question: 'Quels types de ciment sont disponibles en vrac ?',
          answer:
            "Dakhla Aménagement livre en vrac le CPJ 45 (45 MPa, dès 1 500 DH/T) et le CPJ 55 (55 MPa, dès 1 600 DH/T), conformes aux normes NM 10.1.004 et EN 197-1. Le choix dépend de votre application : CPJ 45 pour le béton courant, CPJ 55 pour le génie civil et les zones côtières.",
        },
        {
          question: 'Faut-il un silo pour acheter du ciment en vrac ?',
          answer:
            "Oui, la livraison en vrac nécessite un silo de stockage sur votre chantier (capacité 30T à 200T selon vos besoins). Si vous n’en possédez pas, vous pouvez en louer un auprès de partenaires spécialisés. Notre équipe peut vous conseiller sur la taille de silo adaptée à votre consommation et vous orienter vers des loueurs au Sud Maroc.",
        },
      ]
    : [
        {
          question: 'What is the minimum quantity for bulk cement delivery?',
          answer:
            'The minimum quantity for bulk cement delivery by tanker truck is 30 tons (a full truck). Below 30T, the bulk transport cost becomes prohibitive: we then recommend 1T big bag (standard delivery) or 50kg bags (small sites). For volumes above 30T, bulk is the most economical solution.',
        },
        {
          question: 'How does bulk cement delivery work on my site?',
          answer:
            'The tanker truck arrives on your site, connects to your cement silo via a flexible hose, and pumps the cement directly into the silo. Pumping is fully automated and controlled by the driver-deliverer. Allow about 30 to 45 minutes to transfer 30T. You must have a silo (we can refer you to rental companies) and a truck access zone.',
        },
        {
          question: 'Is bulk cement cheaper than bags?',
          answer:
            'Yes, bulk cement is significantly cheaper: 1,500 DH/T (bulk) vs 1,550 DH/T (50kg bags) and 1,580 DH/T (big bag). The price difference reflects the absence of packaging (bags, pallets, film) and industrial handling. For a 100T order, savings can reach 5,000 to 8,000 DH compared to bags.',
        },
        {
          question: 'What cement types are available in bulk?',
          answer:
            'Dakhla Aménagement delivers CPJ 45 (45 MPa, from 1,500 DH/T) and CPJ 55 (55 MPa, from 1,600 DH/T) in bulk, compliant with NM 10.1.004 and EN 197-1 standards. The choice depends on your application: CPJ 45 for standard concrete, CPJ 55 for civil engineering and coastal zones.',
        },
        {
          question: 'Do I need a silo to buy bulk cement?',
          answer:
            'Yes, bulk delivery requires a storage silo on your site (capacity 30T to 200T depending on your needs). If you do not own one, you can rent from specialized partners. Our team can advise you on the right silo size for your consumption and refer you to rental companies in Southern Morocco.',
        },
      ];

  const advantages = isFr
    ? [
        {
          icon: PiggyBank,
          title: 'Économies significatives',
          desc: 'Jusqu’à 8 % moins cher que les sacs 50kg. Aucun coût d’emballage, palette ou film rétractable. Idéal pour les volumes importants.',
        },
        {
          icon: Package,
          title: 'Zéro emballage',
          desc: 'Pas de sacs à manipuler, stocker ou éliminer. Réduction des déchets chantier. Solution éco-responsable.',
        },
        {
          icon: Workflow,
          title: 'Pompage automatique',
          desc: 'Transfert direct du camion-citerne vers votre silo. Aucune manutention manuelle. 30T transférées en 30-45 min.',
        },
        {
          icon: Factory,
          title: 'Gros volumes',
          desc: 'Idéal pour les chantiers de plus de 30T. Camions-citernes de 30T, 60T ou plus. Approvisionnement continu.',
        },
      ]
    : [
        {
          icon: PiggyBank,
          title: 'Significant savings',
          desc: 'Up to 8% cheaper than 50kg bags. No packaging, pallet or shrink film cost. Ideal for large volumes.',
        },
        {
          icon: Package,
          title: 'Zero packaging',
          desc: 'No bags to handle, store or dispose of. Reduced site waste. Eco-friendly solution.',
        },
        {
          icon: Workflow,
          title: 'Automatic pumping',
          desc: 'Direct transfer from tanker truck to your silo. No manual handling. 30T transferred in 30-45 min.',
        },
        {
          icon: Factory,
          title: 'Large volumes',
          desc: 'Ideal for sites over 30T. Tanker trucks of 30T, 60T or more. Continuous supply.',
        },
      ];

  const steps = isFr
    ? [
        {
          n: '01',
          title: 'Devis et commande',
          desc: 'Vous demandez un devis en précisant le type (CPJ 45 / CPJ 55), le volume (≥30T) et l’adresse de livraison. Notre équipe confirme la disponibilité et le prix.',
        },
        {
          n: '02',
          title: 'Préparation chantier',
          desc: 'Vous préparez votre silo (capacité adaptée) et une zone d’accès sécurisée pour le camion-citerne. Notre équipe vous guide sur les exigences.',
        },
        {
          n: '03',
          title: 'Livraison par camion-citerne',
          desc: 'Le camion arrive sur votre chantier à la date convenue. Le chauffeur-livreur raccorde le tuyau flexible à votre silo et démarre le pompage.',
        },
        {
          n: '04',
          title: 'Pompage automatique en silo',
          desc: 'Le ciment est pompé automatiquement du camion vers le silo en 30-45 min pour 30T. Bon de livraison signé, contrôle qualité remis.',
        },
      ]
    : [
        {
          n: '01',
          title: 'Quote and order',
          desc: 'You request a quote specifying the type (CPJ 45 / CPJ 55), volume (≥30T) and delivery address. Our team confirms availability and price.',
        },
        {
          n: '02',
          title: 'Site preparation',
          desc: 'You prepare your silo (adapted capacity) and a secure access zone for the tanker truck. Our team guides you on requirements.',
        },
        {
          n: '03',
          title: 'Tanker truck delivery',
          desc: 'The truck arrives on your site on the agreed date. The driver-deliverer connects the flexible hose to your silo and starts pumping.',
        },
        {
          n: '04',
          title: 'Automatic silo pumping',
          desc: 'Cement is pumped automatically from truck to silo in 30-45 min for 30T. Delivery note signed, quality control handed over.',
        },
      ];

  const specs = isFr
    ? [
        { prop: 'Quantité minimale de livraison', value: '30 tonnes (1 camion-citerne)' },
        { prop: 'Capacité camion-citerne', value: '30T, 60T ou plus (sur demande)' },
        { prop: 'Débit de pompage', value: '40-60 T/heure (selon installation)' },
        { prop: 'Durée d’une livraison 30T', value: '30-45 minutes (hors transport)' },
        { prop: 'Type de ciment disponible', value: 'CPJ 45 (45 MPa) et CPJ 55 (55 MPa)' },
        { prop: 'Capacité silo requise', value: 'Min. 30T (recommandé 50T-100T pour gros chantiers)' },
        { prop: 'Normes', value: 'NM 10.1.004 / EN 197-1' },
        { prop: 'Prix départ usine Dakhla', value: 'CPJ 45 dès 1 500 DH/T — CPJ 55 dès 1 600 DH/T' },
        { prop: 'Zones de livraison', value: 'Dakhla, Laâyoune, Boujdour, Tan-Tan, Guelmim, Mauritanie' },
        { prop: 'Délai de livraison standard', value: '48-72h après confirmation commande' },
      ]
    : [
        { prop: 'Minimum delivery quantity', value: '30 tons (1 tanker truck)' },
        { prop: 'Tanker truck capacity', value: '30T, 60T or more (on request)' },
        { prop: 'Pumping rate', value: '40-60 T/hour (depending on installation)' },
        { prop: 'Duration of a 30T delivery', value: '30-45 minutes (excluding transport)' },
        { prop: 'Available cement types', value: 'CPJ 45 (45 MPa) and CPJ 55 (55 MPa)' },
        { prop: 'Required silo capacity', value: 'Min. 30T (recommended 50T-100T for large sites)' },
        { prop: 'Standards', value: 'NM 10.1.004 / EN 197-1' },
        { prop: 'Ex-works Dakhla price', value: 'CPJ 45 from 1,500 DH/T — CPJ 55 from 1,600 DH/T' },
        { prop: 'Delivery zones', value: 'Dakhla, Laayoune, Boujdour, Tan-Tan, Guelmim, Mauritania' },
        { prop: 'Standard delivery lead time', value: '48-72h after order confirmation' },
      ];

  const features = isFr
    ? [
        { icon: Truck, title: 'Flotte dédiée', desc: 'Camions-citernes spécialisés ciment, entretien régulier' },
        { icon: Beaker, title: 'Qualité garantie', desc: 'Contrôle laboratoire avant chaque expédition vrac' },
        { icon: Factory, title: 'Capacité 500K T/an', desc: 'Centre de broyage Dakhla — approvisionnement continu' },
        { icon: Gauge, title: 'Pompage haute performance', desc: 'Débit 40-60 T/h — transfert rapide en silo' },
      ]
    : [
        { icon: Truck, title: 'Dedicated fleet', desc: 'Cement-specialized tanker trucks, regular maintenance' },
        { icon: Beaker, title: 'Guaranteed quality', desc: 'Lab control before each bulk shipment' },
        { icon: Factory, title: '500K T/year capacity', desc: 'Dakhla grinding plant — continuous supply' },
        { icon: Gauge, title: 'High-performance pumping', desc: '40-60 T/h rate — fast silo transfer' },
      ];

  const schemas = [
    webPageSchema({
      name: isFr ? 'Ciment en Vrac Maroc — Camion-Citerne' : 'Bulk Cement Morocco — Tanker Truck',
      description: isFr
        ? 'Ciment en vrac CPJ 45 et CPJ 55 au Maroc. Livraison par camion-citerne avec pompage direct en silo. Min. 30T. Prix dès 1 500 DH/T.'
        : 'Bulk CPJ 45 and CPJ 55 cement in Morocco. Tanker truck delivery with direct silo pumping. Min. 30T. From 1,500 DH/T.',
      path: '/ciment-vrac',
      locale: loc,
    }),
    breadcrumbSchema([{ name: isFr ? 'Ciment en Vrac' : 'Bulk Cement', path: '/ciment-vrac' }], loc),
    serviceSchema({
      name: isFr ? 'Livraison de Ciment en Vrac — Camion-Citerne' : 'Bulk Cement Delivery — Tanker Truck',
      description: isFr
        ? 'Livraison de ciment CPJ 45 et CPJ 55 en vrac par camion-citerne avec pompage direct en silo. Minimum 30T.'
        : 'Bulk CPJ 45 and CPJ 55 cement delivery by tanker truck with direct silo pumping. Minimum 30T.',
      path: '/ciment-vrac',
      locale: loc,
      serviceType: 'Bulk cement delivery by tanker truck',
    }),
    faqSchema(faqItems),
  ];

  return (
    <>
      <JsonLdScript schema={schemas} />
      <Breadcrumbs items={[{ name: isFr ? 'Ciment en Vrac' : 'Bulk Cement', path: '/ciment-vrac' }]} locale={locale} />

      {/* Hero */}
      <section className="bg-gradient-to-br from-[#1B3A5C] to-[#0f1f33] text-white py-20 md:py-28">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <div className="max-w-4xl">
            <span className="inline-block px-4 py-1.5 bg-[#E8B84B]/20 text-[#E8B84B] text-sm font-medium rounded-full mb-6">
              {isFr ? 'Ciment en Vrac — Livraison Camion-Citerne' : 'Bulk Cement — Tanker Truck Delivery'}
            </span>
            <h1 className="text-[clamp(2rem,5vw,3.5rem)] font-bold leading-[1.1] mb-6">
              {isFr
                ? 'Ciment en Vrac au Maroc — Camion-Citerne'
                : 'Bulk Cement in Morocco — Tanker Truck'}
            </h1>
            <p className="text-lg md:text-xl text-white/80 leading-relaxed mb-8 max-w-3xl">
              {isFr
                ? 'Livraison de ciment CPJ 45 et CPJ 55 en vrac par camion-citerne avec pompage direct en silo. Idéal pour les gros chantiers (min. 30T). Prix dès 1 500 DH/T. Dakhla, Laâyoune, Boujdour, Tan-Tan, Mauritanie.'
                : 'CPJ 45 and CPJ 55 bulk cement delivery by tanker truck with direct silo pumping. Ideal for large sites (min. 30T). From 1,500 DH/T. Dakhla, Laayoune, Boujdour, Tan-Tan, Mauritania.'}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href={`/${locale}/devis`}
                className="inline-flex items-center gap-2 px-6 py-3 bg-[#C1272D] text-white font-semibold rounded-full hover:bg-[#C1272D]/90 transition-colors"
              >
                {isFr ? 'Demander un devis vrac' : 'Request a bulk quote'}
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href={`/${locale}/cpj-45`}
                className="inline-flex items-center gap-2 px-6 py-3 border border-white/30 text-white font-semibold rounded-full hover:bg-white/10 transition-colors"
              >
                {isFr ? 'Voir le CPJ 45' : 'View CPJ 45'}
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
            {isFr ? 'Avantages du ciment en vrac' : 'Advantages of bulk cement'}
          </h2>
          <p className="text-center text-[#6B7280] mb-12 max-w-2xl mx-auto">
            {isFr
              ? 'Le vrac est la solution la plus économique et écologique pour les gros chantiers (≥30T).'
              : 'Bulk is the most economical and ecological solution for large sites (≥30T).'}
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

      {/* How it works */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1B3A5C] mb-4 text-center">
            {isFr ? 'Comment ça marche ?' : 'How it works'}
          </h2>
          <p className="text-center text-[#6B7280] mb-12 max-w-2xl mx-auto">
            {isFr
              ? 'Devis, préparation chantier, livraison et pompage : 4 étapes simples pour votre ciment en vrac.'
              : 'Quote, site preparation, delivery and pumping: 4 simple steps for your bulk cement.'}
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {steps.map((s, i) => (
              <div key={i} className="relative bg-[#F7F8FA] border border-[#E5E7EB] rounded-2xl p-6">
                <span className="text-3xl font-bold text-[#E8B84B] mb-3 block">{s.n}</span>
                <h3 className="font-bold text-[#1B3A5C] mb-2">{s.title}</h3>
                <p className="text-sm text-[#6B7280] leading-relaxed">{s.desc}</p>
                {i < steps.length - 1 && (
                  <ArrowRight className="hidden lg:block w-5 h-5 text-[#D1D5DB] absolute top-1/2 -right-3.5 -translate-y-1/2" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technical specifications */}
      <section className="py-16 md:py-24 bg-[#F7F8FA]">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1B3A5C] mb-4 text-center">
            {isFr ? 'Spécifications techniques du vrac' : 'Bulk technical specifications'}
          </h2>
          <p className="text-center text-[#6B7280] mb-12 max-w-2xl mx-auto">
            {isFr
              ? 'Caractéristiques de la livraison de ciment en vrac par camion-citerne au Maroc.'
              : 'Specifications of bulk cement delivery by tanker truck in Morocco.'}
          </p>
          <div className="overflow-x-auto">
            <table className="w-full max-w-4xl mx-auto border-collapse bg-white rounded-xl overflow-hidden shadow-sm">
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

      {/* Long-form content */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6 md:px-12">
          <div className="prose prose-lg max-w-none">
            <h2 className="text-3xl font-bold text-[#1B3A5C] mb-6">
              {isFr ? 'Le ciment en vrac : la solution des gros chantiers' : 'Bulk cement: the solution for large sites'}
            </h2>
            <p className="text-[#1A1A2E]/80 leading-relaxed mb-6">
              {isFr
                ? "Le ciment en vrac est le mode de livraison privilégié pour les chantiers de grande envergure : centrales à béton, projets d’infrastructure, grands ouvrages de génie civil, préfabrication industrielle. Le ciment est transporté en camion-citerne spécialisé, puis pompé directement dans le silo de stockage du chantier, sans aucun emballage. Cette méthode permet des économies de 5 à 8 % par rapport aux sacs 50kg et élimine totalement la manutention manuelle et les déchets d’emballage."
                : "Bulk cement is the preferred delivery method for large-scale sites: concrete batching plants, infrastructure projects, major civil engineering works, industrial precasting. The cement is transported in a specialized tanker truck, then pumped directly into the site storage silo, without any packaging. This method saves 5 to 8% compared to 50kg bags and completely eliminates manual handling and packaging waste."}
            </p>
            <p className="text-[#1A1A2E]/80 leading-relaxed mb-6">
              {isFr
                ? "Dakhla Aménagement livre du ciment CPJ 45 et CPJ 55 en vrac dans tout le Sud marocain (Dakhla, Laâyoune, Boujdour, Tan-Tan, Guelmim) et en Mauritanie (Nouakchott, Nouadhibou). Notre flotte de camions-citernes de 30T et plus, associée à notre centre de broyage de Dakhla (capacité 500 000 T/an), garantit un approvisionnement continu pour vos chantiers. Le débit de pompage (40-60 T/h) permet de transférer 30T en seulement 30 à 45 minutes."
                : "Dakhla Aménagement delivers CPJ 45 and CPJ 55 cement in bulk across Southern Morocco (Dakhla, Laayoune, Boujdour, Tan-Tan, Guelmim) and Mauritania (Nouakchott, Nouadhibou). Our fleet of 30T+ tanker trucks combined with our Dakhla grinding plant (capacity 500,000 T/year) ensures continuous supply for your sites. The pumping rate (40-60 T/h) allows transferring 30T in just 30 to 45 minutes."}
            </p>

            <h3 className="text-2xl font-bold text-[#1B3A5C] mt-10 mb-4">
              {isFr ? 'Quand choisir le ciment en vrac ?' : 'When to choose bulk cement?'}
            </h3>
            <ul className="space-y-3 mb-6">
              {(isFr
                ? [
                    'Votre chantier consomme plus de 30 tonnes de ciment',
                    'Vous disposez d’un silo de stockage (ou pouvez en louer un)',
                    'Vous gérez une centrale à béton ou une usine de préfabrication',
                    'Vous cherchez à réduire vos coûts matériau de 5 à 8 %',
                    'Vous voulez éliminer les déchets d’emballage sur votre chantier',
                    'Vous avez besoin d’un approvisionnement régulier et continu',
                  ]
                : [
                    'Your site consumes more than 30 tons of cement',
                    'You have a storage silo (or can rent one)',
                    'You operate a concrete batching plant or precast factory',
                    'You want to reduce material costs by 5 to 8%',
                    'You want to eliminate packaging waste on your site',
                    'You need a regular and continuous supply',
                  ]
              ).map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-[#1A1A2E]/80">
                  <CheckCircle className="w-5 h-5 text-[#E8B84B] shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <h3 className="text-2xl font-bold text-[#1B3A5C] mt-10 mb-4">
              {isFr ? 'Prix du ciment en vrac au Maroc' : 'Bulk cement price in Morocco'}
            </h3>
            <p className="text-[#1A1A2E]/80 leading-relaxed mb-6">
              {isFr
                ? "Le ciment en vrac de Dakhla Aménagement démarre à 1 500 DH/T pour le CPJ 45 et 1 600 DH/T pour le CPJ 55 (tarifs départ usine Dakhla, minimum 30T). Le transport est calculé selon la zone de livraison et le volume. Des tarifs dégressifs s’appliquent pour les commandes de plus de 100T et les achats récurrents. Demandez un devis gratuit pour un chiffrage précis, livraison comprise."
                : "Dakhla Aménagement bulk cement starts at 1,500 DH/T for CPJ 45 and 1,600 DH/T for CPJ 55 (ex-works Dakhla, min. 30T). Transport is calculated based on the delivery zone and volume. Volume discounts apply for orders over 100T and recurring purchases. Request a free quote for precise pricing, delivery included."}
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
            {isFr ? 'Questions fréquentes sur le ciment en vrac' : 'Frequently asked questions about bulk cement'}
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
        title={isFr ? 'Besoin de ciment en vrac au Maroc ?' : 'Need bulk cement in Morocco?'}
        subtitle={
          isFr
            ? 'Devis gratuit sous 24h. Ciment vrac CPJ 45 dès 1 500 DH/T, CPJ 55 dès 1 600 DH/T. Livraison par camion-citerne dans tout le Sud marocain et la Mauritanie.'
            : 'Free quote within 24h. CPJ 45 bulk cement from 1,500 DH/T, CPJ 55 from 1,600 DH/T. Tanker truck delivery across Southern Morocco and Mauritania.'
        }
        buttonText={isFr ? 'Demander un devis vrac' : 'Request a bulk quote'}
      />
    </>
  );
}
