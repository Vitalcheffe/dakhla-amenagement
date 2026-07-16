import Link from 'next/link';
import { buildMetadata, KEYWORDS } from '@/lib/seo';
import {
  webPageSchema,
  breadcrumbSchema,
  faqSchema,
  serviceSchema,
} from '@/lib/structured-data';
import { JsonLdScript } from '@/components/shared/JsonLd';
import { Breadcrumbs } from '@/components/shared/Breadcrumbs';
import { RelatedLinks, CtaBanner } from '@/components/shared/RelatedLinks';
import { RelatedArticles } from '@/components/shared/RelatedArticles';
import { BUSINESS_RELATED } from '@/lib/internal-links';
import {
  CheckCircle,
  ArrowRight,
  Truck,
  Package,
  Building2,
  Users,
  Headphones,
  MapPin,
} from 'lucide-react';

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
      path: '/fournisseur-ciment-maroc',
      title: 'Cement Supplier Morocco — B2B, Bulk Volume, Quote | Dakhla Aménagement',
      description:
        'CPJ 45 and CPJ 55 cement supplier in Morocco for BTP professionals. Pro accounts, volume discounts, recurring delivery. Southern Morocco and Mauritania. Free B2B quote.',
      keywords: [
        ...KEYWORDS.buying,
        ...KEYWORDS.business,
        ...KEYWORDS.products,
        'cement supplier Morocco',
        'cement wholesaler Morocco',
        'cement distributor Morocco',
        'BTP cement supplier',
        'professional cement account',
      ],
    });
  }

  return buildMetadata({
    locale: 'fr',
    path: '/fournisseur-ciment-maroc',
    title: 'Fournisseur Ciment Maroc — B2B, Gros Volume, Devis | Dakhla Aménagement',
    description:
      "Fournisseur de ciment CPJ 45 et CPJ 55 au Maroc pour professionnels BTP. Comptes pro, tarifs dégressifs, livraison récurrente. Sud Maroc et Mauritanie. Devis B2B gratuit.",
    keywords: [
      ...KEYWORDS.buying,
      ...KEYWORDS.business,
      ...KEYWORDS.products,
      'fournisseur ciment Maroc',
      'grossiste ciment',
      'distributeur ciment',
      'ciment BTP',
      'ciment professionnel',
    ],
  });
}

const faqItemsFr = [
  {
    question: 'Comment devenir client professionnel chez Dakhla Aménagement ?',
    answer:
      "Pour ouvrir un compte pro BTP chez DAM : transmettez votre RC (Registre de Commerce), votre IF et vos coordonnées bancaires à notre service commercial. Sous 48h, vous recevez votre numéro de compte, vos tarifs négociés et votre accès à la commande récurrente. Contactez-nous au +212 658-265685 ou via le formulaire de devis.",
  },
  {
    question: 'Quels volumes minimums pour les tarifs dégressifs ?',
    answer:
      "Les tarifs dégressifs s'appliquent dès 30 tonnes en vrac ou 20 palettes en sacs. Les paliers : 30T (−3 %), 100T (−5 %), 500T (−8 %), contrats annuels 1 000T+ (sur devis). Pour les revendeurs et grossistes, des programmes spécifiques avec marges négociées sont disponibles.",
  },
  {
    question: 'Quels sont les délais de livraison au Sud Maroc et Mauritanie ?',
    answer:
      "Délais indicatifs : Dakhla et environs 24-48h, Laâyoune/Boujdour 48-72h, Tan-Tan/Guelmim 3-5 jours, Mauritanie (Nouadhibou/Nouakchott) 5-7 jours. Pour les contrats de livraison récurrente ( hebdomadaire, mensuelle), des créneaux fixes sont garantis.",
  },
  {
    question: 'Proposez-vous un programme revendeur ciment ?',
    answer:
      "Oui, DAM dispose d'un programme revendeur pour les négociants en matériaux de construction : zone d'exclusivité, tarifs grossistes, supports marketing, formation technique. Conditions réservées aux professionnels disposant d'un local commercial et d'une zone de stockage adaptée.",
  },
  {
    question: "Quels modes de paiement acceptez-vous en B2B ?",
    answer:
      "Pour les clients pro : virement bancaire (mode principal), chèque d'entreprise, et possibilité de paiement à 30/60/90 jours pour les comptes réguliers sous étude de solvabilité. Une remise supplémentaire de 1 % est accordée pour paiement comptant.",
  },
];

const faqItemsEn = [
  {
    question: 'How to become a professional client at Dakhla Aménagement?',
    answer:
      'To open a BTP pro account at DAM: send your Trade Register (RC), Tax ID (IF) and bank details to our sales department. Within 48h, you receive your account number, negotiated rates and access to recurring ordering. Contact us at +212 658-265685 or via the quote form.',
  },
  {
    question: 'What minimum volumes for volume discounts?',
    answer:
      'Volume discounts apply from 30 tons in bulk or 20 pallets in bags. Tiers: 30T (−3%), 100T (−5%), 500T (−8%), annual contracts 1,000T+ (on quote). For resellers and wholesalers, specific programs with negotiated margins are available.',
  },
  {
    question: 'What are the delivery times to Southern Morocco and Mauritania?',
    answer:
      'Indicative lead times: Dakhla and surroundings 24-48h, Laâyoune/Boujdour 48-72h, Tan-Tan/Guelmim 3-5 days, Mauritania (Nouadhibou/Nouakchott) 5-7 days. For recurring delivery contracts (weekly, monthly), fixed slots are guaranteed.',
  },
  {
    question: 'Do you offer a cement reseller program?',
    answer:
      'Yes, DAM has a reseller program for building-materials dealers: exclusive zone, wholesale rates, marketing support, technical training. Conditions reserved for professionals with a commercial premise and a suitable storage area.',
  },
  {
    question: 'What payment methods do you accept in B2B?',
    answer:
      'For pro clients: bank transfer (main method), company cheque, and 30/60/90-day payment possible for regular accounts subject to solvency study. An additional 1% discount is granted for cash payment.',
  },
];

export default async function FournisseurCimentMarocPage({
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
      name: isFr ? 'Fournisseur Ciment Maroc B2B' : 'Cement Supplier Morocco B2B',
      description: isFr
        ? 'Fournisseur de ciment CPJ 45 et CPJ 55 pour professionnels BTP au Maroc. Comptes pro, tarifs dégressifs, livraison récurrente.'
        : 'CPJ 45 and CPJ 55 cement supplier for BTP professionals in Morocco. Pro accounts, volume discounts, recurring delivery.',
      path: '/fournisseur-ciment-maroc',
      locale: loc,
    }),
    breadcrumbSchema(
      [{ name: isFr ? 'Fournisseur Ciment Maroc' : 'Cement Supplier Morocco', path: '/fournisseur-ciment-maroc' }],
      loc,
    ),
    serviceSchema({
      name: isFr
        ? 'Fourniture de Ciment B2B — Comptes Pro'
        : 'B2B Cement Supply — Pro Accounts',
      description: isFr
        ? "Fourniture de ciment CPJ 45 et CPJ 55 aux professionnels du BTP : comptes pro, tarifs dégressifs, livraison planifiée, support technique."
        : 'Supply of CPJ 45 and CPJ 55 cement to BTP professionals: pro accounts, volume discounts, scheduled delivery, technical support.',
      path: '/fournisseur-ciment-maroc',
      locale: loc,
      serviceType: 'B2B cement supply',
    }),
    faqSchema(faqItems),
  ];

  const services = isFr
    ? [
        {
          icon: Users,
          title: 'Compte professionnel BTP',
          desc: 'Numéro de compte dédié, tarifs négociés, historique des commandes et conditions de paiement adaptées (30/60/90 jours sous étude).',
        },
        {
          icon: Package,
          title: 'Tarifs dégressifs',
          desc: 'Remises sur volume dès 30 T (−3 %), 100 T (−5 %), 500 T (−8 %), contrats annuels 1 000 T+ sur devis. Remise paiement comptant −1 %.',
        },
        {
          icon: Truck,
          title: 'Livraison planifiée',
          desc: 'Créneaux fixes hebdomadaires ou mensuels garantis pour vos chantiers. Vrac, sacs 50kg, big bag. Suivi logistique en temps réel.',
        },
        {
          icon: Headphones,
          title: 'Support technique',
          desc: 'Conseils choix du ciment, dosage béton, adaptation zone côtière. Accès à nos fiches techniques et procès-verbaux d\'essais.',
        },
      ]
    : [
        {
          icon: Users,
          title: 'BTP professional account',
          desc: 'Dedicated account number, negotiated rates, order history and adapted payment terms (30/60/90 days subject to study).',
        },
        {
          icon: Package,
          title: 'Volume discounts',
          desc: 'Volume discounts from 30 T (−3%), 100 T (−5%), 500 T (−8%), annual contracts 1,000 T+ on quote. Cash payment discount −1%.',
        },
        {
          icon: Truck,
          title: 'Scheduled delivery',
          desc: 'Guaranteed weekly or monthly fixed slots for your sites. Bulk, 50kg bags, big bag. Real-time logistics tracking.',
        },
        {
          icon: Headphones,
          title: 'Technical support',
          desc: 'Advice on cement choice, concrete dosage, coastal-zone adaptation. Access to our technical data sheets and test reports.',
        },
      ];

  const pricingTable = isFr
    ? [
        {
          volume: '30–99 T',
          discount: '−3 %',
          cpj45: '1 455 DH/T',
          cpj55: '1 552 DH/T',
        },
        {
          volume: '100–499 T',
          discount: '−5 %',
          cpj45: '1 425 DH/T',
          cpj55: '1 520 DH/T',
        },
        {
          volume: '500–999 T',
          discount: '−8 %',
          cpj45: '1 380 DH/T',
          cpj55: '1 472 DH/T',
        },
        {
          volume: '1 000 T+/an (contrat)',
          discount: 'Sur devis',
          cpj45: '−10 % à −15 %',
          cpj55: '−10 % à −15 %',
        },
      ]
    : [
        {
          volume: '30–99 T',
          discount: '−3%',
          cpj45: '1,455 DH/T',
          cpj55: '1,552 DH/T',
        },
        {
          volume: '100–499 T',
          discount: '−5%',
          cpj45: '1,425 DH/T',
          cpj55: '1,520 DH/T',
        },
        {
          volume: '500–999 T',
          discount: '−8%',
          cpj45: '1,380 DH/T',
          cpj55: '1,472 DH/T',
        },
        {
          volume: '1,000 T+/year (contract)',
          discount: 'On quote',
          cpj45: '−10% to −15%',
          cpj55: '−10% to −15%',
        },
      ];

  const programs = isFr
    ? [
        {
          name: 'Programme revendeur',
          desc: 'Pour négociants en matériaux de construction : zone d\'exclusivité, tarifs grossistes, supports marketing (PLV, échantillons), formation technique produit. Marge négociée garantie.',
          requirement: 'Local commercial + zone de stockage',
        },
        {
          name: 'Partenaire chantier',
          desc: 'Pour entreprises BTP et promoteurs : approvisionnement dédié, silos temporaires sur chantier, livraison planifiée, interlocuteur commercial unique, conditions de paiement étendues.',
          requirement: 'Engagement volume annuel',
        },
        {
          name: 'Grossiste agréé',
          desc: 'Pour distributeurs régionaux : stock tampon, prioritisation logistique, tarifs spéciaux export Mauritanie. Accompagnement développement commercial Sud Maroc.',
          requirement: 'Capacité de stockage ≥ 500 T',
        },
      ]
    : [
        {
          name: 'Reseller program',
          desc: 'For building-materials dealers: exclusive zone, wholesale rates, marketing support (POS, samples), product technical training. Negotiated guaranteed margin.',
          requirement: 'Commercial premises + storage area',
        },
        {
          name: 'Site partner',
          desc: 'For BTP companies and developers: dedicated supply, temporary on-site silos, scheduled delivery, single sales contact, extended payment terms.',
          requirement: 'Annual volume commitment',
        },
        {
          name: 'Approved wholesaler',
          desc: 'For regional distributors: buffer stock, logistics prioritization, special Mauritania export rates. Commercial development support in Southern Morocco.',
          requirement: 'Storage capacity ≥ 500 T',
        },
      ];

  const zones = [
    'Dakhla',
    'Laâyoune',
    'Boujdour',
    'Es-Semara',
    'Aousserd',
    'Tan-Tan',
    'Guelmim',
    'Tarfaya',
    'Nouadhibou (MR)',
    'Nouakchott (MR)',
  ];

  const processSteps = isFr
    ? [
        {
          step: '1',
          name: 'Demande de devis B2B',
          desc: 'Remplissez le formulaire en précisant volumes, fréquence et zone de livraison.',
        },
        {
          step: '2',
          name: 'Étude & ouverture de compte',
          desc: 'Notre service commercial analyse votre demande et ouvre votre compte pro sous 48h.',
        },
        {
          step: '3',
          name: 'Tarification négociée',
          desc: 'Recevez votre grille tarifaire personnalisée selon volume et conditions.',
        },
        {
          step: '4',
          name: 'Première commande & livraison',
          desc: 'Validation de la commande, planification logistique et livraison sur site.',
        },
        {
          step: '5',
          name: 'Suivi & fidélisation',
          desc: 'Interlocuteur dédié, gestion des livraisons récurrentes, support continu.',
        },
      ]
    : [
        {
          step: '1',
          name: 'B2B quote request',
          desc: 'Fill out the form specifying volumes, frequency and delivery zone.',
        },
        {
          step: '2',
          name: 'Study & account opening',
          desc: 'Our sales department analyzes your request and opens your pro account within 48h.',
        },
        {
          step: '3',
          name: 'Negotiated pricing',
          desc: 'Receive your personalized rate grid based on volume and conditions.',
        },
        {
          step: '4',
          name: 'First order & delivery',
          desc: 'Order validation, logistics planning and on-site delivery.',
        },
        {
          step: '5',
          name: 'Follow-up & loyalty',
          desc: 'Dedicated contact, recurring delivery management, continuous support.',
        },
      ];

  return (
    <>
      <JsonLdScript schema={schemas} />
      <Breadcrumbs
        items={[
          { name: isFr ? 'Fournisseur Ciment Maroc' : 'Cement Supplier Morocco', path: '/fournisseur-ciment-maroc' },
        ]}
        locale={locale}
      />

      {/* Hero */}
      <section className="bg-gradient-to-br from-[#1B3A5C] to-[#0f1f33] text-white py-20 md:py-28">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <div className="max-w-4xl">
            <span className="inline-block px-4 py-1.5 bg-[#E8B84B]/20 text-[#E8B84B] text-sm font-medium rounded-full mb-6">
              {isFr ? 'Solutions B2B Ciment' : 'B2B Cement Solutions'}
            </span>
            <h1 className="text-[clamp(2rem,5vw,3.5rem)] font-bold leading-[1.1] mb-6">
              {isFr
                ? 'Fournisseur de Ciment au Maroc pour Professionnels BTP'
                : 'Cement Supplier in Morocco for BTP Professionals'}
            </h1>
            <p className="text-lg md:text-xl text-white/80 leading-relaxed mb-8 max-w-3xl">
              {isFr
                ? "Dakhla Aménagement (DAM) fournit du ciment CPJ 45 et CPJ 55 aux entreprises BTP, promoteurs, revendeurs et grossistes du Sud Maroc et de Mauritanie. Comptes pro, tarifs dégressifs, livraison récurrente et support technique dédié."
                : 'Dakhla Aménagement (DAM) supplies CPJ 45 and CPJ 55 cement to BTP companies, developers, resellers and wholesalers in Southern Morocco and Mauritania. Pro accounts, volume discounts, recurring delivery and dedicated technical support.'}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href={`/${locale}/devis`}
                className="inline-flex items-center gap-2 px-6 py-3 bg-[#C1272D] text-white font-semibold rounded-full hover:bg-[#C1272D]/90 transition-colors"
              >
                {isFr ? 'Devis B2B gratuit' : 'Free B2B quote'}
                <ArrowRight className="w-4 h-4" />
              </Link>
              <a
                href="tel:+212658265685"
                className="inline-flex items-center gap-2 px-6 py-3 border border-white/30 text-white font-semibold rounded-full hover:bg-white/10 transition-colors"
              >
                +212 658-265685
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Pourquoi DAM */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6 md:px-12">
          <h2 className="text-3xl font-bold text-[#1B3A5C] mb-6">
            {isFr ? 'Pourquoi choisir DAM comme fournisseur de ciment ?' : 'Why choose DAM as your cement supplier?'}
          </h2>
          <p className="text-[#1A1A2E]/80 leading-relaxed mb-6">
            {isFr
              ? "Dakhla Aménagement est l'unique producteur local de ciment CPJ 45 et CPJ 55 dans le Sud marocain. Notre usine de broyage de clinker à Dakhla (capacité 500 000 tonnes/an) garantit un approvisionnement court, fiable et compétitif pour les professionnels du BTP, sans dépendance aux longs transports depuis le Nord du Maroc."
              : 'Dakhla Aménagement is the only local producer of CPJ 45 and CPJ 55 cement in Southern Morocco. Our clinker grinding plant in Dakhla (capacity 500,000 tons/year) guarantees short, reliable and competitive supply for BTP professionals, without dependence on long transports from northern Morocco.'}
          </p>
          <p className="text-[#1A1A2E]/80 leading-relaxed mb-6">
            {isFr
              ? "Notre positionnement logistique nous permet de desservir rapidement les chantiers de Dakhla, Laâyoune, Boujdour, Tan-Tan, Guelmim, et même la Mauritanie voisine (Nouadhibou, Nouakchott). Nous offrons les trois conditionnements (vrac, sacs 50kg, big bag) pour répondre à tous les besoins chantier."
              : 'Our logistics positioning allows us to quickly serve construction sites in Dakhla, Laâyoune, Boujdour, Tan-Tan, Guelmim, and even neighboring Mauritania (Nouadhibou, Nouakchott). We offer three packaging options (bulk, 50kg bags, big bag) to meet all site needs.'}
          </p>
          <p className="text-[#1A1A2E]/80 leading-relaxed">
            {isFr
              ? "Tous nos ciments sont conformes à la norme NM 10.1.004, testés en laboratoire interne et accompagnés de fiches techniques et certificats de conformité par lot. Nous nous engageons sur la traçabilité, la qualité et la ponctualité des livraisons."
              : 'All our cements comply with the NM 10.1.004 standard, are tested in our internal laboratory and come with technical data sheets and certificates of conformity per batch. We commit to traceability, quality and delivery punctuality.'}
          </p>
        </div>
      </section>

      {/* Services B2B */}
      <section className="py-16 md:py-24 bg-[#F7F8FA]">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <h2 className="text-3xl font-bold text-[#1B3A5C] mb-4 text-center">
            {isFr ? 'Nos services B2B pour professionnels' : 'Our B2B services for professionals'}
          </h2>
          <p className="text-center text-[#6B7280] mb-12 max-w-2xl mx-auto">
            {isFr
              ? "Une offre complète pensée pour les entreprises BTP : du compte pro au support technique."
              : 'A complete offering designed for BTP companies: from pro account to technical support.'}
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {services.map((s, i) => (
              <div key={i} className="bg-white border border-[#E5E7EB] rounded-xl p-6">
                <div className="w-12 h-12 rounded-lg bg-[#1B3A5C]/5 flex items-center justify-center mb-4">
                  <s.icon className="w-6 h-6 text-[#1B3A5C]" />
                </div>
                <h3 className="font-bold text-[#1B3A5C] mb-2">{s.title}</h3>
                <p className="text-sm text-[#6B7280] leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Table */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <h2 className="text-3xl font-bold text-[#1B3A5C] mb-4 text-center">
            {isFr ? 'Tarifs dégressifs B2B' : 'B2B volume pricing'}
          </h2>
          <p className="text-center text-[#6B7280] mb-12 max-w-2xl mx-auto">
            {isFr
              ? "Grille tarifaire indicative CPJ 45 et CPJ 55 par palier de volume. Tarifs départ usine Dakhla, hors livraison."
              : 'Indicative CPJ 45 and CPJ 55 price grid by volume tier. Ex-works Dakhla prices, excluding delivery.'}
          </p>
          <div className="overflow-x-auto">
            <table className="w-full max-w-4xl mx-auto border-collapse">
              <thead>
                <tr className="border-b-2 border-[#1B3A5C]">
                  <th className="text-left py-4 px-4 text-[#1B3A5C] font-semibold">{isFr ? 'Volume / an' : 'Volume / year'}</th>
                  <th className="text-left py-4 px-4 text-[#1B3A5C] font-semibold">{isFr ? 'Remise' : 'Discount'}</th>
                  <th className="text-left py-4 px-4 text-[#1B3A5C] font-semibold">CPJ 45</th>
                  <th className="text-left py-4 px-4 text-[#1B3A5C] font-semibold">CPJ 55</th>
                </tr>
              </thead>
              <tbody>
                {pricingTable.map((row, i) => (
                  <tr key={i} className="border-b border-[#E5E7EB] hover:bg-[#F7F8FA] transition-colors">
                    <td className="py-4 px-4 font-semibold text-[#1B3A5C]">{row.volume}</td>
                    <td className="py-4 px-4 font-bold text-[#E8B84B]">{row.discount}</td>
                    <td className="py-4 px-4 text-[#1A1A2E]">{row.cpj45}</td>
                    <td className="py-4 px-4 font-bold text-[#C1272D]">{row.cpj55}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-center text-sm text-[#6B7280] mt-6 max-w-2xl mx-auto">
            {isFr
              ? "* Tarifs indicatifs 2026, départ usine Dakhla, hors livraison. Remise supplémentaire de 1 % pour paiement comptant. Tarifs contractuels sur devis pour volumes ≥ 1 000 T/an."
              : '* Indicative 2026 prices, ex-works Dakhla, excluding delivery. Additional 1% discount for cash payment. Contractual prices on quote for volumes ≥ 1,000 T/year.'}
          </p>
        </div>
      </section>

      {/* Programmes */}
      <section className="py-16 md:py-24 bg-[#F7F8FA]">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <h2 className="text-3xl font-bold text-[#1B3A5C] mb-4 text-center">
            {isFr ? 'Programmes partenaires' : 'Partner programs'}
          </h2>
          <p className="text-center text-[#6B7280] mb-12 max-w-2xl mx-auto">
            {isFr
              ? "Trois programmes dédiés selon votre profil : revendeur, entreprise BTP ou grossiste régional."
              : 'Three dedicated programs based on your profile: reseller, BTP company or regional wholesaler.'}
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {programs.map((p, i) => (
              <div key={i} className="bg-white border border-[#E5E7EB] rounded-xl p-6">
                <h3 className="font-bold text-[#1B3A5C] mb-3">{p.name}</h3>
                <p className="text-sm text-[#6B7280] leading-relaxed mb-4">{p.desc}</p>
                <div className="pt-4 border-t border-[#E5E7EB]">
                  <span className="text-xs font-semibold text-[#1B3A5C] uppercase tracking-wide">
                    {isFr ? 'Prérequis' : 'Requirement'}
                  </span>
                  <p className="text-sm text-[#1A1A2E] mt-1">{p.requirement}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Zones desservies */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <h2 className="text-3xl font-bold text-[#1B3A5C] mb-4 text-center">
            {isFr ? 'Zones desservies' : 'Areas served'}
          </h2>
          <p className="text-center text-[#6B7280] mb-12 max-w-2xl mx-auto">
            {isFr
              ? "Nous couvrons le Sud marocain et la Mauritanie voisine avec des délais adaptés à chaque zone."
              : 'We cover Southern Morocco and neighboring Mauritania with adapted lead times for each zone.'}
          </p>
          <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
            {zones.map((zone) => (
              <span
                key={zone}
                className="px-5 py-2.5 bg-[#1B3A5C]/5 text-[#1B3A5C] font-medium rounded-full flex items-center gap-2"
              >
                <MapPin className="w-4 h-4 text-[#E8B84B]" />
                {zone}
              </span>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link
              href={`/${locale}/livraison-ciment`}
              className="inline-flex items-center gap-2 text-[#C1272D] font-medium hover:gap-3 transition-all"
            >
              {isFr ? '→ Détails des zones et délais' : '→ Zone and lead time details'}
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Processus commande */}
      <section className="py-16 md:py-24 bg-[#F7F8FA]">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <h2 className="text-3xl font-bold text-[#1B3A5C] mb-4 text-center">
            {isFr ? 'Processus de commande B2B' : 'B2B order process'}
          </h2>
          <p className="text-center text-[#6B7280] mb-12 max-w-2xl mx-auto">
            {isFr
              ? "De la demande de devis à la livraison récurrente, un processus simple et fluide en 5 étapes."
              : 'From quote request to recurring delivery, a simple and smooth 5-step process.'}
          </p>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4 max-w-5xl mx-auto">
            {processSteps.map((p, i) => (
              <div key={i} className="bg-white border border-[#E5E7EB] rounded-xl p-5 text-center">
                <div className="w-10 h-10 rounded-full bg-[#C1272D] text-white font-bold flex items-center justify-center mx-auto mb-3">
                  {p.step}
                </div>
                <h3 className="font-bold text-[#1B3A5C] text-sm mb-2">{p.name}</h3>
                <p className="text-xs text-[#6B7280] leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pourquoi confiance */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6 md:px-12">
          <h2 className="text-3xl font-bold text-[#1B3A5C] mb-6">
            {isFr ? 'Une fiabilité éprouvée par les professionnels' : 'Reliability proven by professionals'}
          </h2>
          <ul className="space-y-3 mb-6">
            {(isFr
              ? [
                  'Production locale 500 000 T/an : indépendance logistique, délais maîtrisés',
                  'Ciment certifié NM 10.1.004 : tests laboratoire interne, traçabilité par lot',
                  'Livraison 24-48h Dakhla, 3-7 jours Mauritanie : ponctualité garantie contrat',
                  'Comptes pro avec paiement 30/60/90 jours sous étude de solvabilité',
                  'Tarifs dégressifs jusqu\'à −15 % pour contrats annuels 1 000 T+',
                  'Interlocuteur commercial unique : suivi personnalisé de votre compte',
                  'Support technique : conseils dosage, adaptation zone côtière, fiches techniques',
                  'Programme revendeur avec marges négociées et exclusivité zonale',
                ]
              : [
                  'Local production 500,000 T/year: logistics independence, controlled lead times',
                  'NM 10.1.004 certified cement: internal lab tests, batch traceability',
                  'Delivery 24-48h Dakhla, 3-7 days Mauritania: contractual guaranteed punctuality',
                  'Pro accounts with 30/60/90-day payment subject to solvency study',
                  'Volume discounts up to −15% for annual contracts 1,000 T+',
                  'Single sales contact: personalized follow-up of your account',
                  'Technical support: dosage advice, coastal-zone adaptation, technical data sheets',
                  'Reseller program with negotiated margins and zonal exclusivity',
                ]
            ).map((item, i) => (
              <li key={i} className="flex items-start gap-3 text-[#1A1A2E]/80">
                <CheckCircle className="w-5 h-5 text-[#E8B84B] shrink-0 mt-0.5" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <div className="bg-[#1B3A5C]/5 border border-[#1B3A5C]/15 rounded-xl p-6 mt-8">
            <div className="flex items-start gap-4">
              <Building2 className="w-8 h-8 text-[#1B3A5C] shrink-0" />
              <div>
                <h3 className="font-bold text-[#1B3A5C] mb-2">
                  {isFr ? 'Votre partenaire ciment au Sud Maroc' : 'Your cement partner in Southern Morocco'}
                </h3>
                <p className="text-sm text-[#1A1A2E]/80 leading-relaxed">
                  {isFr
                    ? "Que vous soyez entrepreneur individuel, PME BTP, grand groupe ou négociant, Dakhla Aménagement adapte son offre à votre activité. Plus de 200 entreprises BTP et 30 revendeurs nous font déjà confiance dans le Sud marocain et en Mauritanie."
                    : 'Whether you are an individual contractor, BTP SME, large group or dealer, Dakhla Aménagement adapts its offer to your business. Over 200 BTP companies and 30 resellers already trust us in Southern Morocco and Mauritania.'}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 md:py-24 bg-[#F7F8FA]">
        <div className="max-w-3xl mx-auto px-6 md:px-12">
          <h2 className="text-3xl font-bold text-[#1B3A5C] mb-8 text-center">
            {isFr ? 'FAQ — Fournisseur ciment B2B' : 'FAQ — B2B cement supplier'}
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

      {/* Related Links */}
      <RelatedLinks
        title={isFr ? 'Ressources liées' : 'Related resources'}
        links={BUSINESS_RELATED}
        locale={locale}
      />

      {/* CTA */}
      <RelatedArticles
        articleSlugs={['devenir-revendeur', 'capacite-500k-tonnes', 'transport-ciment-logistique']}
        locale={locale}
      />
      <CtaBanner
        locale={locale}
        title={isFr ? 'Devenez client pro DAM' : 'Become a DAM pro client'}
        subtitle={
          isFr
            ? "Compte pro BTP, tarifs dégressifs jusqu'à −15 %, livraison récurrente Sud Maroc & Mauritanie. Devis B2B gratuit sous 24h."
            : 'BTP pro account, volume discounts up to −15%, recurring delivery Southern Morocco & Mauritania. Free B2B quote within 24h.'
        }
        buttonText={isFr ? 'Demander un devis B2B' : 'Request a B2B quote'}
      />
    </>
  );
}
