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
      path: '/ciment-laayoune',
      title: 'Cement Laayoune — CPJ 45 & CPJ 55 Delivery | Dakhla Aménagement',
      description:
        'CPJ 45 and CPJ 55 cement delivery to Laayoune and region. 72h delay from Dakhla. Bulk, bags, big bag. From 1,500 DH/T. Free Laayoune quote.',
      keywords: [
        ...KEYWORDS.regional,
        'ciment Laâyoune',
        'ciment à Laâyoune',
        'livraison ciment Laâyoune',
        'matériaux Laâyoune',
        'cement Laayoune',
      ],
    });
  }

  return buildMetadata({
    locale: 'fr',
    path: '/ciment-laayoune',
    title: 'Ciment Laâyoune — Livraison CPJ 45 & CPJ 55 | Dakhla Aménagement',
    description:
      'Livraison de ciment CPJ 45 et CPJ 55 à Laâyoune et région. Délai 72h depuis Dakhla. Vrac, sacs, big bag. Prix dès 1 500 DH/T. Devis gratuit Laâyoune.',
    keywords: [
      ...KEYWORDS.regional,
      'ciment Laâyoune',
      'ciment à Laâyoune',
      'livraison ciment Laâyoune',
      'matériaux Laâyoune',
    ],
  });
}

const faqItemsFr = [
  {
    question: 'Livrez-vous du ciment à Laâyoune ?',
    answer:
      "Oui. Dakhla Aménagement livre du ciment CPJ 45 et CPJ 55 à Laâyoune et dans toute la région de Laâyoune-Sakia El Hamra. La livraison est assurée depuis notre centre de broyage de Dakhla, distant d'environ 500 km. Le délai standard est de 72h ouvrées pour Laâyoune ville.",
  },
  {
    question: 'Quel est le prix du ciment livré à Laâyoune ?',
    answer:
      "Le ciment CPJ 45 est disponible dès 1 500 DH/T et le CPJ 55 dès 1 600 DH/T, livrés à Laâyoune. Le prix dépend du conditionnement (vrac, sacs 50kg, big bag 1T), de la quantité et du coût de transport Dakhla–Laâyoune. Demandez un devis gratuit pour un tarif précis incluant la livraison.",
  },
  {
    question: 'Quel délai de livraison pour Laâyoune ?',
    answer:
      "Le délai indicatif de livraison à Laâyoune est de 72h ouvrées depuis notre usine de Dakhla (500 km). Pour les chantiers dans la périphérie de Laâyoune (Es-Semara, Tarfaya, Foum El Oued), comptez 72h à 96h. Nous planifions les livraisons à l'avance pour sécuriser votre planning chantier.",
  },
  {
    question: 'Quel type de ciment pour construire à Laâyoune ?',
    answer:
      "Pour la construction à Laâyoune, le ciment CPJ 45 convient pour le béton armé courant, dallages et fondations. Le CPJ 55 est recommandé pour les ouvrages de génie civil, infrastructures et zones exposées (proximité de la mer, environnements agressifs). Nos deux ciments sont conformes NM 10.1.004 et EN 197-1.",
  },
  {
    question: 'Livrez-vous en vrac à Laâyoune ?',
    answer:
      "Oui, nous livrons le ciment en vrac à Laâyoune par camions-citernes avec pompage pour déchargement direct dans votre silo. Le vrac est économique pour les chantiers de plus de 30 tonnes. Nous proposons aussi les sacs 50kg et les big bags 1T pour les volumes plus faibles.",
  },
];

const faqItemsEn = [
  {
    question: 'Do you deliver cement to Laayoune?',
    answer:
      'Yes. Dakhla Aménagement delivers CPJ 45 and CPJ 55 cement to Laayoune and across the Laayoune-Sakia El Hamra region. Delivery is handled from our Dakhla grinding plant, about 500 km away. Standard lead time is 72 business hours for Laayoune city.',
  },
  {
    question: 'What is the price of cement delivered to Laayoune?',
    answer:
      'CPJ 45 cement is available from 1,500 DH/T and CPJ 55 from 1,600 DH/T, delivered to Laayoune. The price depends on packaging (bulk, 50kg bags, 1T big bag), quantity and the Dakhla–Laayoune transport cost. Request a free quote for a precise price including delivery.',
  },
  {
    question: 'What is the delivery time to Laayoune?',
    answer:
      'The indicative delivery time to Laayoune is 72 business hours from our Dakhla plant (500 km). For sites in the outskirts of Laayoune (Es-Semara, Tarfaya, Foum El Oued), allow 72h to 96h. We schedule deliveries in advance to secure your site planning.',
  },
  {
    question: 'Which type of cement for building in Laayoune?',
    answer:
      'For construction in Laayoune, CPJ 45 cement is suitable for standard reinforced concrete, slabs and foundations. CPJ 55 is recommended for civil engineering works, infrastructure and exposed areas (proximity to the sea, aggressive environments). Both our cements comply with NM 10.1.004 and EN 197-1.',
  },
  {
    question: 'Do you deliver in bulk to Laayoune?',
    answer:
      'Yes, we deliver bulk cement to Laayoune via tanker trucks with pumping for direct unloading into your silo. Bulk is economical for sites above 30 tons. We also offer 50kg bags and 1T big bags for lower volumes.',
  },
];

export default async function CimentLaayounePage({
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
      name: isFr ? 'Ciment Laâyoune — Livraison CPJ 45 & CPJ 55' : 'Cement Laayoune — CPJ 45 & CPJ 55 Delivery',
      description: isFr
        ? 'Livraison de ciment CPJ 45 et CPJ 55 à Laâyoune depuis Dakhla. Délai 72h, vrac, sacs, big bag.'
        : 'CPJ 45 and CPJ 55 cement delivery to Laayoune from Dakhla. 72h delay, bulk, bags, big bag.',
      path: '/ciment-laayoune',
      locale: loc,
    }),
    breadcrumbSchema(
      [{ name: isFr ? 'Ciment Laâyoune' : 'Cement Laayoune', path: '/ciment-laayoune' }],
      loc,
    ),
    serviceSchema({
      name: isFr
        ? 'Livraison de ciment à Laâyoune'
        : 'Cement delivery to Laayoune',
      description: isFr
        ? 'Livraison de ciment CPJ 45 et CPJ 55 à Laâyoune et région, délai 72h depuis Dakhla.'
        : 'CPJ 45 and CPJ 55 cement delivery to Laayoune and region, 72h delay from Dakhla.',
      path: '/ciment-laayoune',
      locale: loc,
      serviceType: 'Cement delivery — Laayoune',
    }),
    faqSchema(faqItems),
  ];

  const products = isFr
    ? [
        { name: 'CPJ 45', resistance: '45 MPa', price: '1 500 DH/T', use: 'Béton armé, dallages, fondations, maçonnerie à Laâyoune' },
        { name: 'CPJ 55', resistance: '55 MPa', price: '1 600 DH/T', use: 'Génie civil, infrastructure, ouvrages exigeants de Laâyoune' },
      ]
    : [
        { name: 'CPJ 45', resistance: '45 MPa', price: '1,500 DH/T', use: 'Reinforced concrete, slabs, foundations, masonry in Laayoune' },
        { name: 'CPJ 55', resistance: '55 MPa', price: '1,600 DH/T', use: 'Civil engineering, infrastructure, demanding Laayoune works' },
      ];

  const projects = isFr
    ? [
        { name: 'Logements sociaux à Laâyoune', desc: 'CPJ 45 pour les fondations et structures des programmes d\'habitat social de Laâyoune.' },
        { name: 'Aménagements urbains — ville de Laâyoune', desc: 'CPJ 45 pour la voirie, les caniveaux et les équipements publics de la commune de Laâyoune.' },
        { name: 'Projet éolien près de Laâyoune', desc: 'CPJ 55 pour les massifs de fondation des éoliennes dans la région de Laâyoune-Sakia El Hamra.' },
        { name: 'Équipements de la province', desc: 'Fourniture de ciment pour les écoles, centres de santé et infrastructures de la province de Laâyoune.' },
      ]
    : [
        { name: 'Social housing in Laayoune', desc: 'CPJ 45 for foundations and structures of Laayoune social housing programs.' },
        { name: 'Urban developments — Laayoune city', desc: 'CPJ 45 for roads, gutters and public facilities in the Laayoune municipality.' },
        { name: 'Wind farm project near Laayoune', desc: 'CPJ 55 for wind turbine foundation blocks in the Laayoune-Sakia El Hamra region.' },
        { name: 'Provincial facilities', desc: 'Cement supply for schools, health centers and infrastructure in Laayoune province.' },
      ];

  const logisticsFeatures = isFr
    ? [
        { icon: Truck, title: 'Flotte dédiée', desc: 'Camions-citernes pour vrac, plateaux pour sacs et big bags, adaptés au long trajet Dakhla–Laâyoune' },
        { icon: Clock, title: 'Délai 72h', desc: '500 km parcourus en 72h ouvrées jusqu\'à Laâyoune, planification à l\'avance' },
        { icon: MapPin, title: 'Couverture régionale', desc: 'Laâyoune ville, Foum El Oued, Es-Semara, Tarfaya — toute la région Sakia El Hamra' },
        { icon: CheckCircle, title: 'Suivi qualité', desc: 'Ciment frais produit à Dakhla, bon de livraison et certificat qualité à chaque envoi' },
      ]
    : [
        { icon: Truck, title: 'Dedicated fleet', desc: 'Tanker trucks for bulk, flatbeds for bags and big bags, suited for the long Dakhla–Laayoune route' },
        { icon: Clock, title: '72h lead time', desc: '500 km covered in 72 business hours to Laayoune, scheduled in advance' },
        { icon: MapPin, title: 'Regional coverage', desc: 'Laayoune city, Foum El Oued, Es-Semara, Tarfaya — the entire Sakia El Hamra region' },
        { icon: CheckCircle, title: 'Quality tracking', desc: 'Fresh cement produced in Dakhla, delivery note and quality certificate per shipment' },
      ];

  return (
    <>
      <JsonLdScript schema={schemas} />
      <Breadcrumbs items={[{ name: isFr ? 'Ciment Laâyoune' : 'Cement Laayoune', path: '/ciment-laayoune' }]} locale={locale} />

      {/* Hero */}
      <section className="bg-gradient-to-br from-[#1B3A5C] to-[#0f1f33] text-white py-20 md:py-28">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <div className="max-w-4xl">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-[#E8B84B]/20 text-[#E8B84B] text-sm font-medium rounded-full mb-6">
              <MapPin className="w-4 h-4" />
              {isFr ? 'Livraison de ciment à Laâyoune' : 'Cement delivery to Laayoune'}
            </span>
            <h1 className="text-[clamp(2rem,5vw,3.5rem)] font-bold leading-[1.1] mb-6">
              {isFr ? 'Ciment Laâyoune — Livraison CPJ 45 & CPJ 55' : 'Cement Laayoune — CPJ 45 & CPJ 55 Delivery'}
            </h1>
            <p className="text-lg md:text-xl text-white/80 leading-relaxed mb-8 max-w-3xl">
              {isFr
                ? "Dakhla Aménagement livre du ciment CPJ 45 et CPJ 55 à Laâyoune et dans toute la région de Laâyoune-Sakia El Hamra. Production locale à Dakhla, transport dédié, délai 72h, prix usine dès 1 500 DH/T. Vrac, sacs 50kg, big bag 1T disponibles pour vos chantiers laâyunis."
                : "Dakhla Aménagement delivers CPJ 45 and CPJ 55 cement to Laayoune and across the Laayoune-Sakia El Hamra region. Local production in Dakhla, dedicated transport, 72h lead time, factory prices from 1,500 DH/T. Bulk, 50kg bags, 1T big bag available for your Laayoune construction sites."}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href={`/${locale}/devis`}
                className="inline-flex items-center gap-2 px-6 py-3 bg-[#C1272D] text-white font-semibold rounded-full hover:bg-[#C1272D]/90 transition-colors"
              >
                {isFr ? 'Demander un devis à Laâyoune' : 'Request a Laayoune quote'}
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

      {/* Livraison à Laâyoune */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1B3A5C] mb-6 text-center">
            {isFr ? 'Livraison de ciment à Laâyoune' : 'Cement delivery to Laayoune'}
          </h2>
          <div className="max-w-4xl mx-auto prose prose-lg">
            <p className="text-[#1A1A2E]/80 leading-relaxed mb-6">
              {isFr
                ? "Laâyoune, capitale de la région Laâyoune-Sakia El Hamra, est un pôle majeur du Sud marocain. Située à environ 500 km au nord de notre centre de broyage de Dakhla, la ville de Laâyoune est desservie par notre flotte de camions dédiés. Le délai indicatif de livraison est de 72h ouvrées, ce qui en fait une destination régulière et fiable pour notre ciment."
                : "Laayoune, capital of the Laayoune-Sakia El Hamra region, is a major hub of Southern Morocco. Located about 500 km north of our Dakhla grinding plant, the city of Laayoune is served by our dedicated truck fleet. The indicative delivery time is 72 business hours, making it a regular and reliable destination for our cement."}
            </p>
            <p className="text-[#1A1A2E]/80 leading-relaxed mb-6">
              {isFr
                ? "Nous livrons aussi bien Laâyoune ville que sa périphérie : Foum El Oued, la zone côtière à 25 km, Es-Semara à 150 km à l'est, et Tarfaya plus au sud-ouest. Pour les chantiers importants (plusieurs centaines de tonnes), nous proposons une planification sur plusieurs semaines avec livraisons échelonnées afin de sécuriser votre approvisionnement."
                : "We deliver both Laayoune city and its outskirts: Foum El Oued, the coastal area 25 km away, Es-Semara 150 km east, and Tarfaya further south-west. For large sites (several hundred tons), we offer multi-week scheduling with staggered deliveries to secure your supply."}
            </p>
            <div className="bg-[#F7F8FA] border border-[#E5E7EB] rounded-xl p-6 my-6 not-prose">
              <h3 className="font-bold text-[#1B3A5C] mb-4">
                {isFr ? 'Informations logistiques — Dakhla → Laâyoune' : 'Logistics info — Dakhla → Laayoune'}
              </h3>
              <dl className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                <div>
                  <dt className="text-[#6B7280] mb-1">{isFr ? 'Distance' : 'Distance'}</dt>
                  <dd className="font-bold text-[#1A1A2E]">~500 km</dd>
                </div>
                <div>
                  <dt className="text-[#6B7280] mb-1">{isFr ? 'Délai' : 'Delay'}</dt>
                  <dd className="font-bold text-[#E8B84B]">72h ouvrées</dd>
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
                ? "Le transport Dakhla–Laâyoune est assuré principalement par la route nationale N1 qui longe la côte atlantique. Notre logistique anticipe les contraintes (vents de sable, chaleur) pour garantir l'arrivée du ciment dans les délais et en parfait état. Chaque livraison est accompagnée d'un bon de livraison et d'un certificat de conformité."
                : "The Dakhla–Laayoune transport is mainly via the N1 national road along the Atlantic coast. Our logistics anticipates constraints (sand winds, heat) to guarantee cement arrival on time and in perfect condition. Each delivery comes with a delivery note and a certificate of conformity."}
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
            {isFr ? 'Ciment livré à Laâyoune' : 'Cement delivered to Laayoune'}
          </h2>
          <p className="text-center text-[#6B7280] mb-12 max-w-2xl mx-auto">
            {isFr
              ? "Deux qualités de ciment Portland Composé (CPJ) disponibles à la livraison à Laâyoune, conformes NM 10.1.004 et EN 197-1."
              : "Two qualities of Composite Portland Cement (CPJ) available for delivery to Laayoune, compliant with NM 10.1.004 and EN 197-1."}
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

      {/* Projets dans la région */}
      <section className="py-16 md:py-24 bg-[#F7F8FA]">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1B3A5C] mb-4 text-center">
            {isFr ? 'Projets livrés dans la région de Laâyoune' : 'Projects delivered in the Laayoune region'}
          </h2>
          <p className="text-center text-[#6B7280] mb-12 max-w-2xl mx-auto">
            {isFr
              ? "Dakhla Aménagement a fourni du ciment pour des chantiers variés à Laâyoune : logement social, équipements publics, énergies renouvelables."
              : "Dakhla Aménagement has supplied cement for various projects in Laayoune: social housing, public facilities, renewable energy."}
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {projects.map((p, i) => (
              <div key={i} className="bg-white border border-[#E5E7EB] rounded-xl p-6">
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

      {/* Logistique */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6 md:px-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1B3A5C] mb-6">
            {isFr ? 'Logistique ciment Dakhla → Laâyoune' : 'Cement logistics Dakhla → Laayoune'}
          </h2>
          <div className="prose prose-lg max-w-none">
            <p className="text-[#1A1A2E]/80 leading-relaxed mb-6">
              {isFr
                ? "La livraison de ciment à Laâyoune depuis Dakhla mobilise une logistique routière robuste. Nos camions-citernes (pour le vrac) et nos plateaux-bâchés (pour les sacs et big bags) effectuent le trajet Dakhla–Laâyoune en environ 72h, en respectant les règles de sécurité et les temps de repos des chauffeurs."
                : "Cement delivery to Laayoune from Dakhla requires robust road logistics. Our tanker trucks (for bulk) and tarpaulin flatbeds (for bags and big bags) cover the Dakhla–Laayoune route in about 72h, complying with safety rules and driver rest times."}
            </p>
            <ul className="space-y-3 mb-6">
              {(isFr
                ? [
                    'Production à Dakhla : le ciment est broyé et conditionné sur place, ce qui garantit sa fraîcheur à l\'arrivée à Laâyoune.',
                    'Chargement optimisé : camions 19T à 25T selon le conditionnement, pour minimiser le coût logistique par tonne livrée à Laâyoune.',
                    'Suivi de livraison : chaque envoi vers Laâyoune est tracé, et notre équipe commerciale vous tient informé de l\'avancement.',
                    'Planification flexible : nous adaptons les dates de livraison en fonction de votre planning chantier à Laâyoune, y compris en plusieurs rotations.',
                    'Stock tampon possible : pour les chantiers laâyunis réguliers, nous pouvons prépositionner un stock à Dakhla et livrer par rotations hebdomadaires.',
                  ]
                : [
                    'Production in Dakhla: cement is ground and packaged on-site, ensuring freshness on arrival in Laayoune.',
                    'Optimized loading: 19T to 25T trucks depending on packaging, to minimize the logistical cost per ton delivered to Laayoune.',
                    'Delivery tracking: each shipment to Laayoune is tracked, and our sales team keeps you informed of progress.',
                    'Flexible planning: we adapt delivery dates to your Laayoune site schedule, including multiple rotations.',
                    'Buffer stock possible: for regular Laayoune sites, we can pre-position stock in Dakhla and deliver in weekly rotations.',
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
                ? "Au-delà de Laâyoune, notre couverture régionale s'étend à Boujdour (180 km au sud de Dakhla, 48h), Es-Semara, Tarfaya et toute la région du Sud marocain. Pour les chantiers situés hors de Laâyoune ville, contactez-nous pour un devis adapté."
                : "Beyond Laayoune, our regional coverage extends to Boujdour (180 km south of Dakhla, 48h), Es-Semara, Tarfaya and the entire Southern Morocco region. For sites located outside Laayoune city, contact us for a tailored quote."}
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 md:py-24 bg-[#F7F8FA]">
        <div className="max-w-3xl mx-auto px-6 md:px-12">
          <h2 className="text-3xl font-bold text-[#1B3A5C] mb-8 text-center">
            {isFr ? 'Questions fréquentes — Ciment à Laâyoune' : 'FAQ — Cement in Laayoune'}
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

      <RelatedLinks
        title={isFr ? 'Nos autres zones régionales' : 'Our other regional zones'}
        links={REGIONAL_RELATED}
        locale={locale}
      />

      <RelatedArticles
        articleSlugs={['dakhla-pole-developpement', 'transport-ciment-logistique', 'projet-infrastructure-dakhla']}
        locale={locale}
      />
      <CtaBanner
        locale={locale}
        title={isFr ? 'Besoin de ciment à Laâyoune ?' : 'Need cement in Laayoune?'}
        subtitle={
          isFr
            ? 'Livraison 72h depuis Dakhla. CPJ 45 dès 1 500 DH/T, CPJ 55 dès 1 600 DH/T. Vrac, sacs, big bag. Devis gratuit pour Laâyoune et région.'
            : '72h delivery from Dakhla. CPJ 45 from 1,500 DH/T, CPJ 55 from 1,600 DH/T. Bulk, bags, big bag. Free quote for Laayoune and region.'
        }
        buttonText={isFr ? 'Demander un devis à Laâyoune' : 'Request a Laayoune quote'}
      />
    </>
  );
}
