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
import { REGIONAL_RELATED } from '@/lib/internal-links';
import { CheckCircle, ArrowRight, MapPin, Truck, Clock, Phone } from 'lucide-react';

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
      path: '/ciment-boujdour',
      title: 'Cement Boujdour — CPJ 45 & CPJ 55 Delivery | Dakhla Aménagement',
      description:
        'CPJ 45 and CPJ 55 cement delivery to Boujdour. 48h delay from Dakhla. Bulk, bags, big bag. From 1,500 DH/T. Free Boujdour quote.',
      keywords: [
        ...KEYWORDS.regional,
        'ciment Boujdour',
        'ciment à Boujdour',
        'livraison ciment Boujdour',
        'cement Boujdour',
      ],
    });
  }

  return buildMetadata({
    locale: 'fr',
    path: '/ciment-boujdour',
    title: 'Ciment Boujdour — Livraison CPJ 45 & CPJ 55 | Dakhla Aménagement',
    description:
      'Livraison de ciment CPJ 45 et CPJ 55 à Boujdour. Délai 48h depuis Dakhla. Vrac, sacs, big bag. Prix dès 1 500 DH/T. Devis gratuit Boujdour.',
    keywords: [
      ...KEYWORDS.regional,
      'ciment Boujdour',
      'ciment à Boujdour',
      'livraison ciment Boujdour',
    ],
  });
}

const faqItemsFr = [
  {
    question: 'Livrez-vous du ciment à Boujdour ?',
    answer:
      "Oui. Dakhla Aménagement livre du ciment CPJ 45 et CPJ 55 à Boujdour, ville côtière située à environ 180 km au nord de notre centre de broyage de Dakhla. Le délai standard est de 48h ouvrées pour Boujdour ville et sa région. Nous proposons vrac, sacs 50kg et big bag 1T.",
  },
  {
    question: 'Quel est le prix du ciment livré à Boujdour ?',
    answer:
      "Le ciment CPJ 45 livré à Boujdour démarre à 1 500 DH/T et le CPJ 55 à 1 600 DH/T. Le prix final dépend du conditionnement (vrac, sacs, big bag), de la quantité commandée et du transport Dakhla–Boujdour. Demandez un devis gratuit pour un tarif personnalisé incluant la livraison sur votre chantier.",
  },
  {
    question: 'Quel délai de livraison pour Boujdour ?',
    answer:
      "Le délai de livraison à Boujdour est de 48h ouvrées depuis notre usine de Dakhla. Boujdour étant à 180 km, le trajet est relativement court et permet une grande réactivité. Pour les chantiers à proximité (Lamlaïne, zone portuaire de Boujdour, Jreifat), comptez également 48h.",
  },
  {
    question: 'Quel ciment choisir pour construire à Boujdour ?',
    answer:
      "Boujdour étant une ville côtière, le ciment CPJ 55 (55 MPa) est particulièrement recommandé pour les ouvrages exposés aux embruns marins : ports, ouvrages de protection côtière, infrastructures en bord de mer. Le CPJ 45 convient pour le bâti courant (logements, équipements) en retrait du littoral. Les deux sont conformes NM 10.1.004 et EN 197-1.",
  },
  {
    question: 'Proposez-vous le vrac pour les chantiers de Boujdour ?',
    answer:
      "Oui, nous livrons le ciment en vrac à Boujdour par camions-citernes avec pompage pour déchargement direct dans votre silo chantier. Le vrac est économique pour les chantiers de plus de 30 tonnes et supprime la manutention des sacs. Nous proposons aussi les sacs 50kg et les big bags 1T.",
  },
];

const faqItemsEn = [
  {
    question: 'Do you deliver cement to Boujdour?',
    answer:
      'Yes. Dakhla Aménagement delivers CPJ 45 and CPJ 55 cement to Boujdour, a coastal city located about 180 km north of our Dakhla grinding plant. The standard lead time is 48 business hours for Boujdour city and its region. We offer bulk, 50kg bags and 1T big bag.',
  },
  {
    question: 'What is the price of cement delivered to Boujdour?',
    answer:
      'CPJ 45 cement delivered to Boujdour starts at 1,500 DH/T and CPJ 55 at 1,600 DH/T. The final price depends on packaging (bulk, bags, big bag), quantity ordered and the Dakhla–Boujdour transport. Request a free quote for a custom price including delivery to your site.',
  },
  {
    question: 'What is the delivery time to Boujdour?',
    answer:
      'The delivery time to Boujdour is 48 business hours from our Dakhla plant. Boujdour being 180 km away, the route is relatively short and allows great responsiveness. For nearby sites (Lamlaïne, Boujdour port area, Jreifat), also allow 48h.',
  },
  {
    question: 'Which cement for building in Boujdour?',
    answer:
      'Boujdour being a coastal city, CPJ 55 cement (55 MPa) is particularly recommended for structures exposed to sea spray: ports, coastal protection works, seaside infrastructure. CPJ 45 is suitable for standard buildings (housing, facilities) set back from the coast. Both comply with NM 10.1.004 and EN 197-1.',
  },
  {
    question: 'Do you offer bulk for Boujdour construction sites?',
    answer:
      'Yes, we deliver bulk cement to Boujdour via tanker trucks with pumping for direct unloading into your site silo. Bulk is economical for sites above 30 tons and eliminates bag handling. We also offer 50kg bags and 1T big bags.',
  },
];

export default async function CimentBoujdourPage({
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
      name: isFr ? 'Ciment Boujdour — Livraison CPJ 45 & CPJ 55' : 'Cement Boujdour — CPJ 45 & CPJ 55 Delivery',
      description: isFr
        ? 'Livraison de ciment CPJ 45 et CPJ 55 à Boujdour depuis Dakhla. Délai 48h, vrac, sacs, big bag.'
        : 'CPJ 45 and CPJ 55 cement delivery to Boujdour from Dakhla. 48h delay, bulk, bags, big bag.',
      path: '/ciment-boujdour',
      locale: loc,
    }),
    breadcrumbSchema(
      [{ name: isFr ? 'Ciment Boujdour' : 'Cement Boujdour', path: '/ciment-boujdour' }],
      loc,
    ),
    serviceSchema({
      name: isFr ? 'Livraison de ciment à Boujdour' : 'Cement delivery to Boujdour',
      description: isFr
        ? 'Livraison de ciment CPJ 45 et CPJ 55 à Boujdour, délai 48h depuis Dakhla.'
        : 'CPJ 45 and CPJ 55 cement delivery to Boujdour, 48h delay from Dakhla.',
      path: '/ciment-boujdour',
      locale: loc,
      serviceType: 'Cement delivery — Boujdour',
    }),
    faqSchema(faqItems),
  ];

  const products = isFr
    ? [
        { name: 'CPJ 45', resistance: '45 MPa', price: '1 500 DH/T', use: 'Bâti courant, logements, équipements publics à Boujdour' },
        { name: 'CPJ 55', resistance: '55 MPa', price: '1 600 DH/T', use: 'Ouvrages côtiers, port de Boujdour, infrastructure marine' },
      ]
    : [
        { name: 'CPJ 45', resistance: '45 MPa', price: '1,500 DH/T', use: 'Standard buildings, housing, public facilities in Boujdour' },
        { name: 'CPJ 55', resistance: '55 MPa', price: '1,600 DH/T', use: 'Coastal works, Boujdour port, marine infrastructure' },
      ];

  const logisticsFeatures = isFr
    ? [
        { icon: Truck, title: 'Flotte dédiée', desc: 'Camions-citernes et plateaux adaptés au trajet Dakhla–Boujdour (180 km)' },
        { icon: Clock, title: 'Délai 48h', desc: 'Boujdour est à 180 km au nord de Dakhla — livraison en 48h ouvrées' },
        { icon: MapPin, title: 'Couverture locale', desc: 'Boujdour ville, port, Lamlaïne, Jreifat et environs' },
        { icon: CheckCircle, title: 'Ciment frais', desc: 'Produit à Dakhla, déchargé en parfait état à Boujdour' },
      ]
    : [
        { icon: Truck, title: 'Dedicated fleet', desc: 'Tanker trucks and flatbeds suited for the Dakhla–Boujdour route (180 km)' },
        { icon: Clock, title: '48h lead time', desc: 'Boujdour is 180 km north of Dakhla — 48 business hours delivery' },
        { icon: MapPin, title: 'Local coverage', desc: 'Boujdour city, port, Lamlaïne, Jreifat and surroundings' },
        { icon: CheckCircle, title: 'Fresh cement', desc: 'Produced in Dakhla, unloaded in perfect condition in Boujdour' },
      ];

  return (
    <>
      <JsonLdScript schema={schemas} />
      <Breadcrumbs items={[{ name: isFr ? 'Ciment Boujdour' : 'Cement Boujdour', path: '/ciment-boujdour' }]} locale={locale} />

      {/* Hero */}
      <section className="bg-gradient-to-br from-[#1B3A5C] to-[#0f1f33] text-white py-20 md:py-28">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <div className="max-w-4xl">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-[#E8B84B]/20 text-[#E8B84B] text-sm font-medium rounded-full mb-6">
              <MapPin className="w-4 h-4" />
              {isFr ? 'Livraison de ciment à Boujdour' : 'Cement delivery to Boujdour'}
            </span>
            <h1 className="text-[clamp(2rem,5vw,3.5rem)] font-bold leading-[1.1] mb-6">
              {isFr ? 'Ciment Boujdour — Livraison CPJ 45 & CPJ 55' : 'Cement Boujdour — CPJ 45 & CPJ 55 Delivery'}
            </h1>
            <p className="text-lg md:text-xl text-white/80 leading-relaxed mb-8 max-w-3xl">
              {isFr
                ? "Dakhla Aménagement livre du ciment CPJ 45 et CPJ 55 à Boujdour, ville côtière de la région Laâyoune-Sakia El Hamra. Production locale à Dakhla, transport dédié, délai 48h, prix dès 1 500 DH/T. Vrac, sacs 50kg et big bag 1T pour vos chantiers à Boujdour."
                : "Dakhla Aménagement delivers CPJ 45 and CPJ 55 cement to Boujdour, a coastal city in the Laayoune-Sakia El Hamra region. Local production in Dakhla, dedicated transport, 48h lead time, prices from 1,500 DH/T. Bulk, 50kg bags and 1T big bag for your Boujdour construction sites."}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href={`/${locale}/devis`}
                className="inline-flex items-center gap-2 px-6 py-3 bg-[#C1272D] text-white font-semibold rounded-full hover:bg-[#C1272D]/90 transition-colors"
              >
                {isFr ? 'Demander un devis à Boujdour' : 'Request a Boujdour quote'}
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

      {/* Livraison à Boujdour */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1B3A5C] mb-6 text-center">
            {isFr ? 'Livraison de ciment à Boujdour' : 'Cement delivery to Boujdour'}
          </h2>
          <div className="max-w-4xl mx-auto prose prose-lg">
            <p className="text-[#1A1A2E]/80 leading-relaxed mb-6">
              {isFr
                ? "Boujdour est une ville côtière située à 180 km au nord de Dakhla, sur la route nationale N1. La proximité géographique entre Dakhla et Boujdour permet un délai de livraison court, généralement 48h ouvrées. C'est l'une de nos destinations les plus rapides hors de Dakhla."
                : "Boujdour is a coastal city located 180 km north of Dakhla, on the N1 national road. The geographical proximity between Dakhla and Boujdour allows a short delivery time, generally 48 business hours. It is one of our fastest destinations outside Dakhla."}
            </p>
            <p className="text-[#1A1A2E]/80 leading-relaxed mb-6">
              {isFr
                ? "Nous livrons à Boujdour ville, au port de Boujdour et dans les localités voisines comme Lamlaïne et Jreifat. Pour les chantiers importants, nous proposons des livraisons échelonnées sur plusieurs semaines afin d'assurer un approvisionnement continu de votre chantier de Boujdour."
                : "We deliver to Boujdour city, the port of Boujdour and neighboring localities such as Lamlaïne and Jreifat. For large sites, we offer staggered deliveries over several weeks to ensure continuous supply to your Boujdour site."}
            </p>
            <div className="bg-[#F7F8FA] border border-[#E5E7EB] rounded-xl p-6 my-6 not-prose">
              <h3 className="font-bold text-[#1B3A5C] mb-4">
                {isFr ? 'Informations logistiques — Dakhla → Boujdour' : 'Logistics info — Dakhla → Boujdour'}
              </h3>
              <dl className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                <div>
                  <dt className="text-[#6B7280] mb-1">{isFr ? 'Distance' : 'Distance'}</dt>
                  <dd className="font-bold text-[#1A1A2E]">~180 km</dd>
                </div>
                <div>
                  <dt className="text-[#6B7280] mb-1">{isFr ? 'Délai' : 'Delay'}</dt>
                  <dd className="font-bold text-[#E8B84B]">48h ouvrées</dd>
                </div>
                <div>
                  <dt className="text-[#6B7280] mb-1">{isFr ? 'Conditionnements' : 'Packaging'}</dt>
                  <dd className="font-bold text-[#1A1A2E]">{isFr ? 'Vrac, sacs, big bag' : 'Bulk, bags, big bag'}</dd>
                </div>
                <div>
                  <dt className="text-[#6B7280] mb-1">{isFr ? 'Prix dès' : 'Price from'}</dt>
                  <dd className="font-bold text-[#1A1A2E]">1 500 DH/T</dd>
                </div>
              </dl>
            </div>
            <p className="text-[#1A1A2E]/80 leading-relaxed">
              {isFr
                ? "Boujdour bénéficie d'une position stratégique sur la côte atlantique sud marocaine. La ville connaît un développement soutenu (port de pêche, infrastructures, habitat) qui fait du ciment un matériau clé pour les chantiers de la province. Notre présence à Dakhla nous permet de servir Boujdour avec une réactivité optimale."
                : "Boujdour enjoys a strategic position on the southern Moroccan Atlantic coast. The city is undergoing sustained development (fishing port, infrastructure, housing) which makes cement a key material for projects in the province. Our presence in Dakhla allows us to serve Boujdour with optimal responsiveness."}
            </p>
          </div>
        </div>
      </section>

      {/* Logistique features */}
      <section className="py-16 md:py-24 bg-[#F7F8FA]">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {logisticsFeatures.map((f, i) => (
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

      {/* Produits */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1B3A5C] mb-4 text-center">
            {isFr ? 'Ciment livré à Boujdour' : 'Cement delivered to Boujdour'}
          </h2>
          <p className="text-center text-[#6B7280] mb-12 max-w-2xl mx-auto">
            {isFr
              ? "Deux qualités de ciment Portland Composé (CPJ) disponibles à Boujdour, conformes NM 10.1.004 et EN 197-1."
              : "Two qualities of Composite Portland Cement (CPJ) available in Boujdour, compliant with NM 10.1.004 and EN 197-1."}
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
        </div>
      </section>

      {/* Logistique */}
      <section className="py-16 md:py-24 bg-[#F7F8FA]">
        <div className="max-w-4xl mx-auto px-6 md:px-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1B3A5C] mb-6">
            {isFr ? 'Logistique ciment Dakhla → Boujdour' : 'Cement logistics Dakhla → Boujdour'}
          </h2>
          <div className="prose prose-lg max-w-none">
            <p className="text-[#1A1A2E]/80 leading-relaxed mb-6">
              {isFr
                ? "Avec seulement 180 km entre Dakhla et Boujdour, la logistique de livraison est rapide et économique. Le trajet, principalement sur la route nationale N1, est maîtrisé par nos chauffeurs habitués au corridor côtier sud marocain."
                : "With only 180 km between Dakhla and Boujdour, the delivery logistics are fast and economical. The route, mainly on the N1 national road, is mastered by our drivers used to the southern Moroccan coastal corridor."}
            </p>
            <ul className="space-y-3 mb-6">
              {(isFr
                ? [
                    'Délai 48h : un des plus courts hors Dakhla, idéal pour les chantiers de Boujdour en phase active.',
                    'Camions-citernes pour vrac : déchargement par pompage direct dans votre silo chantier à Boujdour.',
                    'Plateaux-bâchés pour sacs et big bags : livraison sécurisée des palettes 1T et big bags 1T à Boujdour.',
                    'Planification flexible : nous adaptons les dates de livraison à votre planning de chantier à Boujdour, en une ou plusieurs rotations.',
                    'Ciment frais : produit à Dakhla juste avant expédition, livré à Boujdour avec toute sa résistance.',
                    'Support local : notre équipe connaît les chantiers de Boujdour et les contraintes de la zone côtière.',
                  ]
                : [
                    '48h lead time: one of the shortest outside Dakhla, ideal for active Boujdour construction sites.',
                    'Tanker trucks for bulk: direct pumping unloading into your Boujdour site silo.',
                    'Tarpaulin flatbeds for bags and big bags: secure delivery of 1T pallets and 1T big bags to Boujdour.',
                    'Flexible planning: we adapt delivery dates to your Boujdour site schedule, in one or more rotations.',
                    'Fresh cement: produced in Dakhla just before shipping, delivered to Boujdour with full strength.',
                    'Local support: our team knows Boujdour construction sites and the constraints of the coastal zone.',
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
                ? "Boujdour est aussi une étape logistique vers Laâyoune (300 km plus au nord). Pour les chantiers situés entre Boujdour et Laâyoune, nous proposons des solutions de livraison adaptées. Contactez-nous pour étudier votre besoin."
                : "Boujdour is also a logistics step towards Laayoune (300 km further north). For sites located between Boujdour and Laayoune, we offer tailored delivery solutions. Contact us to study your need."}
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-3xl mx-auto px-6 md:px-12">
          <h2 className="text-3xl font-bold text-[#1B3A5C] mb-8 text-center">
            {isFr ? 'Questions fréquentes — Ciment à Boujdour' : 'FAQ — Cement in Boujdour'}
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
        title={isFr ? 'Besoin de ciment à Boujdour ?' : 'Need cement in Boujdour?'}
        subtitle={
          isFr
            ? 'Livraison 48h depuis Dakhla. CPJ 45 dès 1 500 DH/T, CPJ 55 dès 1 600 DH/T. Vrac, sacs, big bag. Devis gratuit pour Boujdour et région.'
            : '48h delivery from Dakhla. CPJ 45 from 1,500 DH/T, CPJ 55 from 1,600 DH/T. Bulk, bags, big bag. Free quote for Boujdour and region.'
        }
        buttonText={isFr ? 'Demander un devis à Boujdour' : 'Request a Boujdour quote'}
      />
    </>
  );
}
