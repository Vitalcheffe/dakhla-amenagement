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
import { REGIONAL_RELATED } from '@/lib/internal-links';
import { CheckCircle, ArrowRight, MapPin, Truck, Clock, Phone, Globe } from 'lucide-react';

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
      path: '/ciment-mauritanie',
      title: 'Cement Mauritania — CPJ 45 & CPJ 55 Export from Dakhla | DAM',
      description:
        'CPJ 45 and CPJ 55 cement export to Mauritania: Nouadhibou, Nouakchott. From Dakhla. 72-96h delay. Bulk, bags, big bag. Free export quote.',
      keywords: [
        ...KEYWORDS.regional,
        'ciment Mauritanie',
        'ciment Nouadhibou',
        'ciment Nouakchott',
        'export ciment Maroc Mauritanie',
        'cement Mauritania',
      ],
    });
  }

  return buildMetadata({
    locale: 'fr',
    path: '/ciment-mauritanie',
    title: 'Ciment Mauritanie — Export CPJ 45 & CPJ 55 depuis Dakhla | DAM',
    description:
      'Export de ciment CPJ 45 et CPJ 55 vers la Mauritanie : Nouadhibou, Nouakchott. Depuis Dakhla. Délai 72-96h. Vrac, sacs, big bag. Devis export gratuit.',
    keywords: [
      ...KEYWORDS.regional,
      'ciment Mauritanie',
      'ciment Nouadhibou',
      'ciment Nouakchott',
      'export ciment Maroc Mauritanie',
    ],
  });
}

const faqItemsFr = [
  {
    question: 'Exportez-vous du ciment vers la Mauritanie ?',
    answer:
      "Oui. Dakhla Aménagement exporte du ciment CPJ 45 et CPJ 55 depuis son centre de broyage de Dakhla vers la Mauritanie. Nous livrons principalement à Nouadhibou (350 km au sud de Dakhla) et à Nouakchott (800 km). Les formalités douanières et le transport transfrontalier sont pris en charge par notre équipe logistique.",
  },
  {
    question: 'Quel délai pour livrer du ciment en Mauritanie ?',
    answer:
      "Le délai indicatif de livraison est de 72h pour Nouadhibou (350 km depuis Dakhla) et de 96h pour Nouakchott (800 km). Le passage du poste frontière de Guerguerat peut ajouter un délai variable selon l'affluence. Nous planifions l'export à l'avance pour sécuriser votre planning.",
  },
  {
    question: 'Quel prix pour le ciment exporté vers la Mauritanie ?',
    answer:
      "Le prix du ciment exporté vers la Mauritanie démarre à 1 500 DH/T (CPJ 45) et 1 600 DH/T (CPJ 55), départ Dakhla. Le tarif final inclut le transport transfrontalier, les frais de douane et le conditionnement. Demandez un devis export gratuit pour un prix précis selon votre destination (Nouadhibou ou Nouakchott) et votre quantité.",
  },
  {
    question: 'Quels conditionnements pour l\'export Mauritanie ?',
    answer:
      "Pour l'export vers la Mauritanie, nous proposons le ciment en sacs 50kg (palettes 1T, le plus simple pour le passage frontière), en big bag 1T (idéal pour les chantiers moyens) et en vrac pour les gros volumes (camions-citernes, sous réserve de faisabilité logistique). Le conditionnement en sacs ou big bag est généralement privilégié pour l'export.",
  },
  {
    question: 'Comment se passe la douane pour l\'export ciment vers la Mauritanie ?',
    answer:
      "L'export de ciment du Maroc vers la Mauritanie passe par le poste frontière de Guerguerat (au sud de Dakhla). Notre équipe logistique prépare les documents d'export (facture commerciale, certificat d'origine, bon de livraison) et coordonne le passage douanier. Les délais douaniers sont généralement de quelques heures, mais peuvent varier selon l'affluence.",
  },
];

const faqItemsEn = [
  {
    question: 'Do you export cement to Mauritania?',
    answer:
      'Yes. Dakhla Aménagement exports CPJ 45 and CPJ 55 cement from its Dakhla grinding plant to Mauritania. We deliver mainly to Nouadhibou (350 km south of Dakhla) and Nouakchott (800 km). Customs formalities and cross-border transport are handled by our logistics team.',
  },
  {
    question: 'What is the lead time to deliver cement to Mauritania?',
    answer:
      'The indicative delivery time is 72h for Nouadhibou (350 km from Dakhla) and 96h for Nouakchott (800 km). Crossing the Guerguerat border post can add a variable delay depending on traffic. We plan exports in advance to secure your schedule.',
  },
  {
    question: 'What is the price of cement exported to Mauritania?',
    answer:
      'The price of cement exported to Mauritania starts at 1,500 DH/T (CPJ 45) and 1,600 DH/T (CPJ 55), ex-Dakhla. The final price includes cross-border transport, customs fees and packaging. Request a free export quote for a precise price depending on your destination (Nouadhibou or Nouakchott) and your quantity.',
  },
  {
    question: 'Which packaging for export to Mauritania?',
    answer:
      'For export to Mauritania, we offer cement in 50kg bags (1T pallets, easiest for border crossing), 1T big bags (ideal for medium sites) and bulk for large volumes (tanker trucks, subject to logistical feasibility). Bag or big bag packaging is generally preferred for export.',
  },
  {
    question: 'How does customs work for cement export to Mauritania?',
    answer:
      'Cement export from Morocco to Mauritania goes through the Guerguerat border post (south of Dakhla). Our logistics team prepares export documents (commercial invoice, certificate of origin, delivery note) and coordinates customs clearance. Customs delays are generally a few hours, but may vary depending on traffic.',
  },
];

interface ExportZone {
  city: string;
  country: string;
  distance: string;
  delay: string;
}

const EXPORT_ZONES: ExportZone[] = [
  { city: 'Nouadhibou', country: 'Mauritanie', distance: '350 km', delay: '72h' },
  { city: 'Nouakchott', country: 'Mauritanie', distance: '800 km', delay: '96h' },
];

export default async function CimentMauritaniePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const loc: 'fr' | 'en' | 'ar' = (locale === 'en' ? 'en' : locale === 'ar' ? 'ar' : 'fr') as 'fr' | 'en' | 'ar';
  const isFr = loc === 'fr';
  const faqItems = isFr ? faqItemsFr : faqItemsEn;

  const schemas = [
    webPageSchema({
      name: isFr ? 'Ciment Mauritanie — Export CPJ 45 & CPJ 55' : 'Cement Mauritania — CPJ 45 & CPJ 55 Export',
      description: isFr
        ? 'Export de ciment CPJ 45 et CPJ 55 vers la Mauritanie : Nouadhibou, Nouakchott. Depuis Dakhla.'
        : 'CPJ 45 and CPJ 55 cement export to Mauritania: Nouadhibou, Nouakchott. From Dakhla.',
      path: '/ciment-mauritanie',
      locale: loc,
    }),
    breadcrumbSchema(
      [{ name: isFr ? 'Ciment Mauritanie' : 'Cement Mauritania', path: '/ciment-mauritanie' }],
      loc,
    ),
    serviceSchema({
      name: isFr ? 'Export de ciment vers la Mauritanie' : 'Cement export to Mauritania',
      description: isFr
        ? 'Export de ciment CPJ 45 et CPJ 55 vers la Mauritanie (Nouadhibou, Nouakchott) depuis Dakhla.'
        : 'CPJ 45 and CPJ 55 cement export to Mauritania (Nouadhibou, Nouakchott) from Dakhla.',
      path: '/ciment-mauritanie',
      locale: loc,
      serviceType: 'Cement export — Mauritania',
    }),
    faqSchema(faqItems),
  ];

  const products = isFr
    ? [
        { name: 'CPJ 45', resistance: '45 MPa', price: '1 500 DH/T', use: 'Béton armé, dallages, fondations, bâti courant en Mauritanie' },
        { name: 'CPJ 55', resistance: '55 MPa', price: '1 600 DH/T', use: 'Génie civil, infrastructure, ouvrages côtiers (Nouadhibou, Nouakchott)' },
      ]
    : [
        { name: 'CPJ 45', resistance: '45 MPa', price: '1,500 DH/T', use: 'Reinforced concrete, slabs, foundations, standard buildings in Mauritania' },
        { name: 'CPJ 55', resistance: '55 MPa', price: '1,600 DH/T', use: 'Civil engineering, infrastructure, coastal works (Nouadhibou, Nouakchott)' },
      ];

  const advantages = isFr
    ? [
        { icon: MapPin, title: 'Proximité Dakhla', desc: 'Dakhla est à 350 km de Nouadhibou seulement — la porte d\'entrée naturelle vers la Mauritanie' },
        { icon: Globe, title: 'Douane maîtrisée', desc: 'Passage par le poste frontière de Guerguerat, documents d\'export préparés par notre équipe' },
        { icon: Clock, title: 'Délai 72-96h', desc: 'Nouadhibou en 72h, Nouakchott en 96h — logistique transfrontalière optimisée' },
        { icon: Truck, title: 'Transport multimodal', desc: 'Route jusqu\'à Nouadhibou, possibilité de transbordement vers Nouakchott' },
      ]
    : [
        { icon: MapPin, title: 'Proximity Dakhla', desc: 'Dakhla is only 350 km from Nouadhibou — the natural gateway to Mauritania' },
        { icon: Globe, title: 'Mastered customs', desc: 'Crossing via Guerguerat border post, export documents prepared by our team' },
        { icon: Clock, title: '72-96h lead time', desc: 'Nouadhibou in 72h, Nouakchott in 96h — optimized cross-border logistics' },
        { icon: Truck, title: 'Multimodal transport', desc: 'Road to Nouadhibou, possible transshipment to Nouakchott' },
      ];

  return (
    <>
      <JsonLdScript schema={schemas} />
      <Breadcrumbs items={[{ name: isFr ? 'Ciment Mauritanie' : 'Cement Mauritania', path: '/ciment-mauritanie' }]} locale={locale} />

      {/* Hero */}
      <section className="bg-gradient-to-br from-[#1B3A5C] to-[#0f1f33] text-white py-20 md:py-28">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <div className="max-w-4xl">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-[#E8B84B]/20 text-[#E8B84B] text-sm font-medium rounded-full mb-6">
              <Globe className="w-4 h-4" />
              {isFr ? 'Export ciment vers la Mauritanie' : 'Cement export to Mauritania'}
            </span>
            <h1 className="text-[clamp(2rem,5vw,3.5rem)] font-bold leading-[1.1] mb-6">
              {isFr ? 'Ciment Mauritanie — Export CPJ 45 & CPJ 55 depuis Dakhla' : 'Cement Mauritania — CPJ 45 & CPJ 55 Export from Dakhla'}
            </h1>
            <p className="text-lg md:text-xl text-white/80 leading-relaxed mb-8 max-w-3xl">
              {isFr
                ? "Dakhla Aménagement exporte du ciment CPJ 45 et CPJ 55 depuis son centre de broyage de Dakhla vers la Mauritanie : Nouadhibou (350 km, 72h) et Nouakchott (800 km, 96h). Vrac, sacs 50kg, big bag 1T. Formalités douanières prises en charge. Devis export gratuit."
                : "Dakhla Aménagement exports CPJ 45 and CPJ 55 cement from its Dakhla grinding plant to Mauritania: Nouadhibou (350 km, 72h) and Nouakchott (800 km, 96h). Bulk, 50kg bags, 1T big bag. Customs formalities handled. Free export quote."}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href={`/${locale}/devis`}
                className="inline-flex items-center gap-2 px-6 py-3 bg-[#C1272D] text-white font-semibold rounded-full hover:bg-[#C1272D]/90 transition-colors"
              >
                {isFr ? 'Demander un devis export' : 'Request an export quote'}
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

      {/* Export vers la Mauritanie */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1B3A5C] mb-6 text-center">
            {isFr ? 'Export vers la Mauritanie' : 'Export to Mauritania'}
          </h2>
          <div className="max-w-4xl mx-auto prose prose-lg">
            <p className="text-[#1A1A2E]/80 leading-relaxed mb-6">
              {isFr
                ? "La Mauritanie est un marché naturel pour Dakhla Aménagement. Notre centre de broyage de Dakhla est situé à seulement 350 km de la frontière mauritanienne (poste de Guerguerat), et à 350 km de Nouadhibou, la grande ville portuaire du nord de la Mauritanie. Cette proximité géographique exceptionnelle nous permet d'exporter du ciment CPJ 45 et CPJ 55 vers la Mauritanie avec une logistique rapide et économique."
                : "Mauritania is a natural market for Dakhla Aménagement. Our Dakhla grinding plant is located only 350 km from the Mauritanian border (Guerguerat post), and 350 km from Nouadhibou, the major port city in northern Mauritania. This exceptional geographical proximity allows us to export CPJ 45 and CPJ 55 cement to Mauritania with fast and economical logistics."}
            </p>
            <p className="text-[#1A1A2E]/80 leading-relaxed mb-6">
              {isFr
                ? "Nous livrons principalement Nouadhibou (port mauritanien, capitale économique) et Nouakchott (capitale politique, à 800 km de Dakhla). Le ciment est transporté par route depuis Dakhla, via le poste frontière de Guerguerat, jusqu'à destination. Pour les gros volumes, des solutions maritimes entre Dakhla et Nouadhibou peuvent être étudiées."
                : "We deliver mainly to Nouadhibou (Mauritanian port, economic capital) and Nouakchott (political capital, 800 km from Dakhla). The cement is transported by road from Dakhla, via the Guerguerat border post, to destination. For large volumes, maritime solutions between Dakhla and Nouadhibou can be studied."}
            </p>
            <div className="bg-[#F7F8FA] border border-[#E5E7EB] rounded-xl p-6 my-6 not-prose">
              <h3 className="font-bold text-[#1B3A5C] mb-4">
                {isFr ? 'Destinations en Mauritanie' : 'Destinations in Mauritania'}
              </h3>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="border-b-2 border-[#1B3A5C]">
                      <th className="text-left py-3 px-4 text-[#1B3A5C] font-semibold">{isFr ? 'Ville' : 'City'}</th>
                      <th className="text-left py-3 px-4 text-[#1B3A5C] font-semibold">{isFr ? 'Pays' : 'Country'}</th>
                      <th className="text-left py-3 px-4 text-[#1B3A5C] font-semibold">{isFr ? 'Distance depuis Dakhla' : 'Distance from Dakhla'}</th>
                      <th className="text-left py-3 px-4 text-[#1B3A5C] font-semibold">{isFr ? 'Délai' : 'Delay'}</th>
                    </tr>
                  </thead>
                  <tbody>
                    {EXPORT_ZONES.map((z, i) => (
                      <tr key={i} className="border-b border-[#E5E7EB]">
                        <td className="py-3 px-4 font-semibold text-[#1B3A5C]">{z.city}</td>
                        <td className="py-3 px-4">
                          <span className="px-2.5 py-0.5 text-xs font-semibold rounded-full bg-[#0E7490]/10 text-[#0E7490]">
                            {z.country}
                          </span>
                        </td>
                        <td className="py-3 px-4 text-[#6B7280]">{z.distance}</td>
                        <td className="py-3 px-4 font-semibold text-[#E8B84B]">{z.delay}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
            <p className="text-[#1A1A2E]/80 leading-relaxed">
              {isFr
                ? "Le ciment marocain est très prisé en Mauritanie pour sa qualité (conformité NM 10.1.004 et EN 197-1) et sa disponibilité. Notre usine de Dakhla, par sa position frontalière, est le partenaire idéal pour vos importations de ciment en Mauritanie."
                : "Moroccan cement is highly sought after in Mauritania for its quality (NM 10.1.004 and EN 197-1 compliance) and availability. Our Dakhla plant, due to its border position, is the ideal partner for your cement imports into Mauritania."}
            </p>
          </div>
        </div>
      </section>

      {/* Produits */}
      <section className="py-16 md:py-24 bg-[#F7F8FA]">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1B3A5C] mb-4 text-center">
            {isFr ? 'Ciment exporté vers la Mauritanie' : 'Cement exported to Mauritania'}
          </h2>
          <p className="text-center text-[#6B7280] mb-12 max-w-2xl mx-auto">
            {isFr
              ? "Deux qualités de ciment Portland Composé (CPJ) exportées vers la Mauritanie, conformes NM 10.1.004 et EN 197-1."
              : "Two qualities of Composite Portland Cement (CPJ) exported to Mauritania, compliant with NM 10.1.004 and EN 197-1."}
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {products.map((c) => (
              <div key={c.name} className="bg-white border border-[#E5E7EB] rounded-2xl p-8">
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
        </div>
      </section>

      {/* Logistique transfrontalière */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6 md:px-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1B3A5C] mb-6">
            {isFr ? 'Logistique transfrontalière Maroc–Mauritanie' : 'Cross-border logistics Morocco–Mauritania'}
          </h2>
          <div className="prose prose-lg max-w-none">
            <p className="text-[#1A1A2E]/80 leading-relaxed mb-6">
              {isFr
                ? "L'export de ciment du Maroc vers la Mauritanie passe par le poste frontière de Guerguerat, situé à environ 200 km au sud de Dakhla. Ce point de passage est le seul corridor terrestre entre le Maroc et la Mauritanie, et constitue donc une voie stratégique pour notre logistique export."
                : "Cement export from Morocco to Mauritania goes through the Guerguerat border post, located about 200 km south of Dakhla. This crossing point is the only land corridor between Morocco and Mauritania, and therefore constitutes a strategic route for our export logistics."}
            </p>
            <p className="text-[#1A1A2E]/80 leading-relaxed mb-6">
              {isFr
                ? "Notre équipe logistique prépare tous les documents nécessaires à l'export : facture commerciale, liste de colisage, certificat d'origine, bon de livraison, déclaration d'export. Nous coordonnons le passage douanier avec nos transitaires partenaires pour limiter les délais et assurer un transit fluide."
                : "Our logistics team prepares all documents required for export: commercial invoice, packing list, certificate of origin, delivery note, export declaration. We coordinate customs clearance with our partner customs brokers to limit delays and ensure smooth transit."}
            </p>
            <ul className="space-y-3 mb-6">
              {(isFr
                ? [
                    'Documents d\'export préparés par Dakhla Aménagement : facture, certificat d\'origine, bon de livraison.',
                    'Coordination avec transitaires partenaires pour le passage du poste frontière de Guerguerat.',
                    'Transporteur routier expérimenté sur le corridor Dakhla–Nouadhibou–Nouakchott.',
                    'Conditionnement adapté à l\'export : sacs 50kg palettisés et big bags 1T, faciles à transborder.',
                    'Suivi de l\'envoi depuis Dakhla jusqu\'à destination en Mauritanie.',
                    'Possibilité de solutions maritimes Dakhla–Nouadhibou pour les gros volumes.',
                  ]
                : [
                    'Export documents prepared by Dakhla Aménagement: invoice, certificate of origin, delivery note.',
                    'Coordination with partner customs brokers for crossing the Guerguerat border post.',
                    'Road carrier experienced on the Dakhla–Nouadhibou–Nouakchott corridor.',
                    'Packaging adapted to export: palletized 50kg bags and 1T big bags, easy to transship.',
                    'Shipment tracking from Dakhla to destination in Mauritania.',
                    'Possible maritime solutions Dakhla–Nouadhibou for large volumes.',
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

      {/* Avantages */}
      <section className="py-16 md:py-24 bg-[#F7F8FA]">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1B3A5C] mb-12 text-center">
            {isFr ? 'Avantages de l\'export depuis Dakhla' : 'Advantages of export from Dakhla'}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {advantages.map((f, i) => (
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

      {/* FAQ */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-3xl mx-auto px-6 md:px-12">
          <h2 className="text-3xl font-bold text-[#1B3A5C] mb-8 text-center">
            {isFr ? 'Questions fréquentes — Ciment Mauritanie' : 'FAQ — Cement Mauritania'}
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

      <RelatedArticles
        articleSlugs={['transport-ciment-logistique', 'dakhla-pole-developpement']}
        locale={locale}
      />
      <CtaBanner
        locale={locale}
        title={isFr ? 'Besoin d\'exporter du ciment vers la Mauritanie ?' : 'Need to export cement to Mauritania?'}
        subtitle={
          isFr
            ? 'Export depuis Dakhla vers Nouadhibou (72h) et Nouakchott (96h). CPJ 45 dès 1 500 DH/T, CPJ 55 dès 1 600 DH/T. Devis export gratuit, formalités douanières prises en charge.'
            : 'Export from Dakhla to Nouadhibou (72h) and Nouakchott (96h). CPJ 45 from 1,500 DH/T, CPJ 55 from 1,600 DH/T. Free export quote, customs formalities handled.'
        }
        buttonText={isFr ? 'Demander un devis export' : 'Request an export quote'}
      />
    </>
  );
}
