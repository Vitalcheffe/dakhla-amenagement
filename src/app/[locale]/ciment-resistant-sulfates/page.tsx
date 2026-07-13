import Link from 'next/link';
import { buildMetadata, KEYWORDS } from '@/lib/seo';
import {
  webPageSchema,
  breadcrumbSchema,
  serviceSchema,
  faqSchema,
  speakableSchema,
} from '@/lib/structured-data';
import { JsonLdScript } from '@/components/shared/JsonLd';
import { Breadcrumbs } from '@/components/shared/Breadcrumbs';
import { RelatedLinks, CtaBanner } from '@/components/shared/RelatedLinks';
import { RelatedArticles } from '@/components/shared/RelatedArticles';
import { CheckCircle, ArrowRight, Factory, Beaker, ShieldCheck, Droplets, HardHat, Building2, Layers } from 'lucide-react';

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
      path: '/ciment-resistant-sulfates',
      title: 'Sulfate-Resistant Cement Morocco — CRS | SDAD',
      description:
        'Sulfate-resistant cement (CRS) in Morocco. Structures in aggressive environments, sewerage, foundations. NM 10.1.004 compliant. Free quote.',
      keywords: [
        'sulfate-resistant cement',
        'CRS cement Morocco',
        'ciment résistant aux sulfates',
        'aggressive soil cement',
        'sewage cement',
        ...KEYWORDS.products,
        ...KEYWORDS.application,
      ],
    });
  }

  return buildMetadata({
    locale: 'fr',
    path: '/ciment-resistant-sulfates',
    title: 'Ciment Résistant aux Sulfates Maroc — CRS | SDAD',
    description:
      'Ciment résistant aux sulfates (CRS) au Maroc. Ouvrages en milieu agressif, assainissement, fondations. Conforme NM 10.1.004. Devis gratuit.',
    keywords: [
      'ciment résistant aux sulfates',
      'CRS Maroc',
      'ciment anti-sulfates',
      'ciment assainissement',
      'ciment milieu agressif',
      'ciment fondations sulfate',
      ...KEYWORDS.products,
      ...KEYWORDS.application,
    ],
  });
}

export default async function CimentResistantSulfatesPage({
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
          question: 'Qu’est-ce qu’un ciment résistant aux sulfates (CRS) ?',
          answer:
            "Le ciment résistant aux sulfates (CRS) est un ciment Portland dont la composition est optimisée pour résister à l’attaque des ions sulfates présents dans certains sols, eaux souterraines et eaux usées. Sa teneur réduite en aluminate tricalcique (C3A ≤ 5 %) limite la formation d’ettringite expansive, cause principale de dégradation des bétons en milieu agressif. Il est conforme à la norme marocaine NM 10.1.004 et à la norme européenne EN 197-1 (classe SR).",
        },
        {
          question: 'Quand doit-on utiliser un ciment CRS au Maroc ?',
          answer:
            "Le ciment CRS est recommandé dès que l’ouvrage est exposé à un milieu sulfaté : réseaux d’assainissement et stations d’épuration, fondations sur sols gypseux ou argileux, ouvrages maritimes (ports, digues, piles de pont), ouvrages agricoles (fosses à purin, silos), et tunnels en terrain sulfaté. Au Sud marocain, certains sols côtiers et sahariens présentent des teneurs en sulfates qui justifient son emploi pour les fondations profondes et les ouvrages enterrés.",
        },
        {
          question: 'Quelle est la différence entre CRS, CPJ 45 et CPJ 55 ?',
          answer:
            "Le CPJ 45 et le CPJ 55 sont classés selon leur résistance à la compression (45 et 55 MPa à 28 jours) et conviennent à la construction courante. Le CRS est classé selon sa résistance chimique aux sulfates : il peut être formulé sur une base CPJ 45 ou CPJ 55 tout en limitant le C3A. Pour un ouvrage en milieu agressif nécessitant haute résistance et résistance aux sulfates, on optera pour un CRS de classe 55. Voir notre page CPJ 55 pour les ouvrages très sollicités.",
        },
        {
          question: 'Le ciment CRS est-il plus cher qu’un ciment classique ?',
          answer:
            'Oui, le ciment CRS coûte environ 8 à 12 % de plus qu’un CPJ 45 standard, en raison de sa composition spécifique et de ses contrôles qualité renforcés. Cet investissement est largement rentabilisé par la durée de vie accrue des ouvrages en milieu agressif, où un ciment classique exigerait des réparations coûteuses après 10-15 ans. Consultez notre guide des prix du ciment et demandez un devis gratuit pour un tarif personnalisé.',
        },
        {
          question: 'Comment commander du ciment CRS chez Dakhla Aménagement ?',
          answer:
            "Passez commande via notre formulaire de devis en précisant le volume (tonnes), le conditionnement (vrac ≥30T, sacs 50kg, big bag 1T), la destination du chantier et la classe de résistance souhaitée (CRS 45 ou CRS 55). Notre équipe technique vous confirme la disponibilité, le prix livré et le délai sous 24h. Livraison dans tout le Sud marocain (Dakhla, Laâyoune, Boujdour, Tan-Tan) et en Mauritanie.",
        },
      ]
    : [
        {
          question: 'What is sulfate-resistant cement (CRS)?',
          answer:
            'Sulfate-resistant cement (CRS) is a Portland cement whose composition is optimized to resist attack by sulfate ions found in certain soils, groundwater and wastewater. Its reduced tricalcium aluminate content (C3A ≤ 5%) limits the formation of expansive ettringite, the main cause of concrete degradation in aggressive environments. It complies with the Moroccan standard NM 10.1.004 and the European standard EN 197-1 (SR class).',
        },
        {
          question: 'When should CRS cement be used in Morocco?',
          answer:
            'CRS cement is recommended whenever the structure is exposed to a sulfated environment: sewerage networks and treatment plants, foundations on gypseous or clayey soils, marine structures (ports, breakwaters, bridge piers), agricultural structures (slurry pits, silos), and tunnels in sulfated ground. In Southern Morocco, some coastal and Saharan soils have sulfate levels that justify its use for deep foundations and underground structures.',
        },
        {
          question: 'What is the difference between CRS, CPJ 45 and CPJ 55?',
          answer:
            'CPJ 45 and CPJ 55 are classified by their compressive strength (45 and 55 MPa at 28 days) and are suitable for standard construction. CRS is classified by its chemical resistance to sulfates: it can be formulated on a CPJ 45 or CPJ 55 base while limiting C3A. For an aggressive-environment structure requiring both high strength and sulfate resistance, choose a CRS class 55. See our CPJ 55 page for highly stressed structures.',
        },
        {
          question: 'Is CRS cement more expensive than standard cement?',
          answer:
            'Yes, CRS cement costs about 8 to 12% more than standard CPJ 45, due to its specific composition and reinforced quality controls. This investment is largely offset by the longer service life of structures in aggressive environments, where standard cement would require costly repairs after 10-15 years. Check our cement price guide and request a free quote for a personalized rate.',
        },
        {
          question: 'How to order CRS cement from Dakhla Aménagement?',
          answer:
            'Order through our quote form specifying the volume (tons), packaging (bulk ≥30T, 50kg bags, 1T big bag), site location and desired strength class (CRS 45 or CRS 55). Our technical team confirms availability, delivered price and lead time within 24h. Delivery across Southern Morocco (Dakhla, Laayoune, Boujdour, Tan-Tan) and Mauritania.',
        },
      ];

  const features = isFr
    ? [
        { icon: ShieldCheck, title: 'Résistance chimique', desc: 'C3A ≤ 5 % — limite la formation d’ettringite expansive en milieu sulfaté' },
        { icon: Beaker, title: 'Conformité normative', desc: 'NM 10.1.004, EN 197-1 classe SR — tests laboratoire systématiques' },
        { icon: Droplets, title: 'Durabilité longue durée', desc: 'Ouvrages conçus pour 50+ ans en milieu agressif, sans réparation lourde' },
        { icon: Factory, title: 'Production locale', desc: 'Centre de broyage de Dakhla, capacité 500K tonnes/an' },
      ]
    : [
        { icon: ShieldCheck, title: 'Chemical resistance', desc: 'C3A ≤ 5% — limits expansive ettringite formation in sulfated environments' },
        { icon: Beaker, title: 'Standards compliance', desc: 'NM 10.1.004, EN 197-1 SR class — systematic lab tests' },
        { icon: Droplets, title: 'Long-term durability', desc: 'Structures designed for 50+ years in aggressive environments, no heavy repair' },
        { icon: Factory, title: 'Local production', desc: 'Dakhla grinding plant, 500K tons/year capacity' },
      ];

  const applications = isFr
    ? [
        { icon: Droplets, title: 'Assainissement', desc: 'Réseaux d’eaux usées, stations d’épuration, regards de visite, fosses.' },
        { icon: HardHat, title: 'Fondations en sol agressif', desc: 'Semelles et pieux en sols gypseux, argileux ou sulfatés.' },
        { icon: Building2, title: 'Ouvrages maritimes', desc: 'Ports, digues, quais, piles de pont — résistance aux sels marins.' },
        { icon: Layers, title: 'Ouvrages agricoles', desc: 'Fosses à purin, silos, canaux d’irrigation en milieu agressif.' },
      ]
    : [
        { icon: Droplets, title: 'Sewerage', desc: 'Wastewater networks, treatment plants, manholes, septic tanks.' },
        { icon: HardHat, title: 'Foundations in aggressive soil', desc: 'Footings and piles in gypseous, clayey or sulfated soils.' },
        { icon: Building2, title: 'Marine structures', desc: 'Ports, breakwaters, quays, bridge piers — saltwater resistance.' },
        { icon: Layers, title: 'Agricultural structures', desc: 'Slurry pits, silos, irrigation canals in aggressive environment.' },
      ];

  const relatedLinks = isFr
    ? [
        { title: 'Ciment CPJ 45', description: 'Ciment Portland Composé 45 MPa pour béton armé courant. Dès 1 500 DH/T.', href: '/cpj-45' },
        { title: 'Ciment CPJ 55', description: 'Ciment Portland Composé 55 MPa pour génie civil et infrastructure. Dès 1 600 DH/T.', href: '/cpj-55' },
        { title: 'Prix du ciment au Maroc', description: 'Guide complet des prix du ciment : vrac, sacs, big bag, par région.', href: '/prix-ciment' },
        { title: 'Demander un devis', description: 'Devis gratuit sous 24h pour ciment CRS et autres produits DAM.', href: '/devis' },
      ]
    : [
        { title: 'CPJ 45 Cement', description: 'Composite Portland 45 MPa cement for standard reinforced concrete. From 1,500 DH/T.', href: '/cpj-45' },
        { title: 'CPJ 55 Cement', description: 'Composite Portland 55 MPa cement for civil engineering and infrastructure. From 1,600 DH/T.', href: '/cpj-55' },
        { title: 'Cement Prices in Morocco', description: 'Complete cement price guide: bulk, bags, big bag, by region.', href: '/prix-ciment' },
        { title: 'Request a Quote', description: 'Free quote within 24h for CRS cement and other DAM products.', href: '/devis' },
      ];

  const schemas = [
    webPageSchema({
      name: isFr ? 'Ciment Résistant aux Sulfates (CRS) Maroc' : 'Sulfate-Resistant Cement (CRS) Morocco',
      description: isFr
        ? 'Ciment résistant aux sulfates (CRS) au Maroc. Ouvrages en milieu agressif, assainissement, fondations. Conforme NM 10.1.004 / EN 197-1 SR.'
        : 'Sulfate-resistant cement (CRS) in Morocco. Aggressive environment structures, sewerage, foundations. NM 10.1.004 / EN 197-1 SR compliant.',
      path: '/ciment-resistant-sulfates',
      locale: loc,
    }),
    breadcrumbSchema([{ name: isFr ? 'Ciment résistant aux sulfates' : 'Sulfate-resistant cement', path: '/ciment-resistant-sulfates' }], loc),
    serviceSchema({
      name: isFr ? 'Ciment Résistant aux Sulfates (CRS) — Production et Fourniture' : 'Sulfate-Resistant Cement (CRS) — Production & Supply',
      description: isFr
        ? 'Production, conditionnement et livraison de ciment résistant aux sulfates (CRS) au Maroc. Vrac, sacs 50kg, big bag.'
        : 'Production, packaging and delivery of sulfate-resistant cement (CRS) in Morocco. Bulk, 50kg bags, big bag.',
      path: '/ciment-resistant-sulfates',
      locale: loc,
      serviceType: 'Sulfate-resistant cement manufacturing and supply',
    }),
    faqSchema(faqItems),
    speakableSchema({
      path: '/ciment-resistant-sulfates',
      locale: loc,
      cssSelectors: ['h1', '.hero-title', '.faq-question'],
    }),
  ];

  return (
    <>
      <JsonLdScript schema={schemas} />
      <Breadcrumbs items={[{ name: isFr ? 'Ciment résistant aux sulfates' : 'Sulfate-resistant cement', path: '/ciment-resistant-sulfates' }]} locale={locale} />

      {/* Hero */}
      <section className="bg-gradient-to-br from-[#1B3A5C] to-[#0f1f33] text-white py-20 md:py-28">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <div className="max-w-4xl">
            <span className="inline-block px-4 py-1.5 bg-[#E8B84B]/20 text-[#E8B84B] text-sm font-medium rounded-full mb-6">
              {isFr ? 'Ciment CRS — Milieu agressif' : 'CRS Cement — Aggressive environment'}
            </span>
            <h1 className="hero-title text-[clamp(2rem,5vw,3.5rem)] font-bold leading-[1.1] mb-6">
              {isFr ? 'Ciment Résistant aux Sulfates (CRS) au Maroc' : 'Sulfate-Resistant Cement (CRS) in Morocco'}
            </h1>
            <p className="text-lg md:text-xl text-white/80 leading-relaxed mb-8 max-w-3xl">
              {isFr
                ? 'Ciment Portland à basse teneur en aluminate tricalcique (C3A ≤ 5 %), formulé pour résister durablement à l’attaque des sulfates. Idéal pour l’assainissement, les fondations en sol agressif et les ouvrages maritimes. Conforme NM 10.1.004 / EN 197-1 (classe SR). Disponible en vrac, sacs 50kg et big bag 1T — livraison dans tout le Sud marocain et la Mauritanie.'
                : 'Portland cement with low tricalcium aluminate content (C3A ≤ 5%), formulated to durably resist sulfate attack. Ideal for sewerage, foundations in aggressive soil and marine structures. NM 10.1.004 / EN 197-1 (SR class) compliant. Available in bulk, 50kg bags and 1T big bag — delivery across Southern Morocco and Mauritania.'}
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
                href={`/${locale}/prix-ciment`}
                className="inline-flex items-center gap-2 px-6 py-3 border border-white/30 text-white font-semibold rounded-full hover:bg-white/10 transition-colors"
              >
                {isFr ? 'Voir les prix du ciment' : 'View cement prices'}
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

      {/* Applications */}
      <section className="py-16 md:py-24 bg-[#F7F8FA]">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1B3A5C] mb-4 text-center">
            {isFr ? 'Applications du ciment CRS' : 'CRS cement applications'}
          </h2>
          <p className="text-center text-[#6B7280] mb-12 max-w-2xl mx-auto">
            {isFr
              ? 'Le ciment résistant aux sulfates est incontournable pour tout ouvrage exposé à un milieu chimiquement agressif.'
              : 'Sulfate-resistant cement is essential for any structure exposed to a chemically aggressive environment.'}
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {applications.map((app, i) => (
              <div key={i} className="bg-white border border-[#E5E7EB] rounded-2xl p-6 hover:shadow-lg transition-shadow">
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

      {/* Long-form content */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6 md:px-12">
          <div className="prose prose-lg max-w-none">
            <h2 className="text-3xl font-bold text-[#1B3A5C] mb-6">
              {isFr ? 'Le ciment résistant aux sulfates : indispensable en milieu agressif' : 'Sulfate-resistant cement: essential in aggressive environments'}
            </h2>
            <p className="text-[#1A1A2E]/80 leading-relaxed mb-6">
              {isFr
                ? "Le ciment résistant aux sulfates, désigné CRS (Ciment Résistant aux Sulfates) ou classe SR selon la norme EN 197-1, est un ciment Portland formulé pour résister durablement à l’attaque chimique des ions sulfates (SO₄²⁻). Ces ions, présents dans certains sols (gypseux, argileux), les eaux souterraines, les eaux usées et l’eau de mer, réagissent avec l’aluminate tricalcique (C3A) du clinker pour former de l’ettringite expansive. Cette réaction provoque un gonflement interne, des fissurations et la dégradation progressive du béton. La solution consiste à limiter la teneur en C3A du clinker à 5 % maximum, ce qui réduit drastiquement le risque d’expansion."
                : "Sulfate-resistant cement, designated CRS (Ciment Résistant aux Sulfates) or SR class per EN 197-1, is a Portland cement formulated to durably resist the chemical attack of sulfate ions (SO₄²⁻). These ions, present in certain soils (gypseous, clayey), groundwater, wastewater and seawater, react with the tricalcium aluminate (C3A) of the clinker to form expansive ettringite. This reaction causes internal swelling, cracking and progressive degradation of the concrete. The solution is to limit the clinker C3A content to 5% maximum, which drastically reduces the risk of expansion."}
            </p>
            <p className="text-[#1A1A2E]/80 leading-relaxed mb-6">
              {isFr
                ? "Au Maroc, et particulièrement dans les régions du Sud (Dakhla, Laâyoune, Boujdour, Tan-Tan) ainsi que dans les zones côtières et sahariennes, de nombreux sols présentent des teneurs en sulfates élevées. L’usage d’un ciment classique CPJ 45 ou CPJ 55 pour des fondations profondes, des réseaux d’assainissement ou des ouvrages maritimes exposés à ces milieux entraîne quasi systématiquement des pathologies à 10-20 ans : fissures, éclatements, perte de résistance. Le ciment CRS, légèrement plus coûteux à l’achat (8-12 % de surcoût), évite ces réparations coûteuses et garantit une durée de service de 50 ans et plus."
                : "In Morocco, particularly in the Southern regions (Dakhla, Laayoune, Boujdour, Tan-Tan) as well as in coastal and Saharan areas, many soils show high sulfate contents. Using standard CPJ 45 or CPJ 55 cement for deep foundations, sewerage networks or marine structures exposed to these environments almost systematically leads to pathologies within 10-20 years: cracks, spalling, loss of strength. CRS cement, slightly more expensive to purchase (8-12% surcharge), avoids these costly repairs and guarantees a service life of 50 years and more."}
            </p>

            <h3 className="text-2xl font-bold text-[#1B3A5C] mt-10 mb-4">
              {isFr ? 'Composition et caractéristiques techniques' : 'Composition and technical characteristics'}
            </h3>
            <p className="text-[#1A1A2E]/80 leading-relaxed mb-6">
              {isFr
                ? "Le ciment CRS de Dakhla Aménagement est un CEM I ou CEM II à teneur contrôlée en C3A ≤ 5 %, conforme à la norme marocaine NM 10.1.004 et à la norme européenne EN 197-1 (classe SR — Sulfate Resistant). Sa résistance à la compression est de 45 MPa (CRS 45) ou 55 MPa (CRS 55) à 28 jours, son début de prise est supérieur à 60 minutes (permettant une mise en œuvre aisée) et sa stabilité à l’autoclave est inférieure à 5 mm. Chaque lot est testé en laboratoire (résistance, finesse Blaine ≥ 350 m²/kg, temps de prise, stabilité, analyse chimique C3A) avant expédition. Les certificats de conformité sont fournis sur demande."
                : "Dakhla Aménagement CRS cement is a CEM I or CEM II with controlled C3A content ≤ 5%, compliant with Moroccan standard NM 10.1.004 and European standard EN 197-1 (SR class — Sulfate Resistant). Its compressive strength is 45 MPa (CRS 45) or 55 MPa (CRS 55) at 28 days, its initial setting time is greater than 60 minutes (allowing easy placement) and its autoclave soundness is less than 5 mm. Each batch is lab-tested (strength, Blaine fineness ≥ 350 m²/kg, setting time, soundness, C3A chemical analysis) before shipment. Certificates of conformity are available on request."}
            </p>

            <h3 className="text-2xl font-bold text-[#1B3A5C] mt-10 mb-4">
              {isFr ? 'Quand choisir le CRS plutôt qu’un ciment classique ?' : 'When to choose CRS over standard cement?'}
            </h3>
            <ul className="space-y-3 mb-6">
              {(isFr
                ? [
                    'Réseaux d’assainissement et stations d’épuration (eaux usées riches en sulfates)',
                    'Fondations sur sols gypseux, argileux ou sulfatés (analyser le sol avant choix)',
                    'Ouvrages maritimes : ports, digues, quais, piles de pont en zone de marnage',
                    'Tunnels et ouvrages souterrains en terrain sulfaté',
                    'Ouvrages agricoles : fosses à purin, silos, canaux d’irrigation',
                    'Industrie chimique et agroalimentaire (sols exposés aux sulfates et acides)',
                  ]
                : [
                    'Sewerage networks and treatment plants (sulfate-rich wastewater)',
                    'Foundations on gypseous, clayey or sulfated soils (analyze soil before choosing)',
                    'Marine structures: ports, breakwaters, quays, bridge piers in tidal zone',
                    'Tunnels and underground structures in sulfated ground',
                    'Agricultural structures: slurry pits, silos, irrigation canals',
                    'Chemical and agri-food industry (floors exposed to sulfates and acids)',
                  ]
              ).map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-[#1A1A2E]/80">
                  <CheckCircle className="w-5 h-5 text-[#E8B84B] shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <h3 className="text-2xl font-bold text-[#1B3A5C] mt-10 mb-4">
              {isFr ? 'Choisir entre CRS 45 et CRS 55' : 'Choosing between CRS 45 and CRS 55'}
            </h3>
            <p className="text-[#1A1A2E]/80 leading-relaxed mb-6">
              {isFr
                ? "Le choix entre CRS 45 (45 MPa) et CRS 55 (55 MPa) dépend de la sollicitation mécanique de l’ouvrage, indépendamment de la résistance aux sulfates. Pour un réseau d’assainissement ou une fosse, un CRS 45 suffit largement. Pour une pile de pont maritime, un radier de port ou une fondation profonde très chargée, un CRS 55 apportera la résistance mécanique complémentaire. Notre équipe technique peut vous orienter — contactez-nous via le formulaire de devis. Pour comparer avec nos ciments classiques, consultez nos pages CPJ 45 et CPJ 55."
                : "The choice between CRS 45 (45 MPa) and CRS 55 (55 MPa) depends on the mechanical load of the structure, regardless of sulfate resistance. For a sewerage network or a pit, CRS 45 is largely sufficient. For a marine bridge pier, a port raft or a heavily loaded deep foundation, CRS 55 will provide the additional mechanical strength. Our technical team can guide you — contact us via the quote form. To compare with our standard cements, see our CPJ 45 and CPJ 55 pages."}
            </p>

            <h3 className="text-2xl font-bold text-[#1B3A5C] mt-10 mb-4">
              {isFr ? 'Prix et disponibilité du ciment CRS' : 'CRS cement price and availability'}
            </h3>
            <p className="text-[#1A1A2E]/80 leading-relaxed mb-6">
              {isFr
                ? "Le ciment CRS est commercialisé à partir de 1 650 DH/T en vrac (camion-citerne, minimum 30T), 1 700 DH/T en sacs 50kg (palette 1T) et 1 730 DH/T en big bag 1T. Les tarifs sont dégressifs selon le volume et dépendent de la zone de livraison. Le CRS étant un produit spécifique, sa production est planifiée à la commande pour garantir fraîcheur et traçabilité — prévoyez un délai de 5 à 10 jours ouvrés selon disponibilité. Pour un prix livré chantier personnalisé, demandez un devis gratuit via notre formulaire dédié."
                : "CRS cement is sold from 1,650 DH/T in bulk (tanker truck, minimum 30T), 1,700 DH/T in 50kg bags (1T pallet) and 1,730 DH/T in 1T big bag. Prices are volume-degressive and depend on the delivery zone. As CRS is a specific product, its production is planned to order to ensure freshness and traceability — allow 5 to 10 working days depending on availability. For a custom delivered-to-site price, request a free quote via our dedicated form."}
            </p>
            <div className="bg-[#F7F8FA] border border-[#E5E7EB] rounded-xl p-6 my-6 flex flex-col gap-2">
              <Link href={`/${locale}/prix-ciment`} className="inline-flex items-center gap-2 text-[#C1272D] font-medium hover:gap-3 transition-all">
                {isFr ? '→ Voir le guide complet des prix du ciment' : '→ View the complete cement price guide'}
              </Link>
              <Link href={`/${locale}/cpj-45`} className="inline-flex items-center gap-2 text-[#C1272D] font-medium hover:gap-3 transition-all">
                {isFr ? '→ Comparer avec le CPJ 45 (ciment courant)' : '→ Compare with CPJ 45 (standard cement)'}
              </Link>
              <Link href={`/${locale}/cpj-55`} className="inline-flex items-center gap-2 text-[#C1272D] font-medium hover:gap-3 transition-all">
                {isFr ? '→ Comparer avec le CPJ 55 (haute résistance)' : '→ Compare with CPJ 55 (high-strength cement)'}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 md:py-24 bg-[#F7F8FA]">
        <div className="max-w-3xl mx-auto px-6 md:px-12">
          <h2 className="text-3xl font-bold text-[#1B3A5C] mb-8 text-center">
            {isFr ? 'Questions fréquentes sur le ciment CRS' : 'Frequently asked questions about CRS cement'}
          </h2>
          <div className="space-y-4">
            {faqItems.map((item, i) => (
              <details key={i} className="group bg-white border border-[#E5E7EB] rounded-xl p-5">
                <summary className="faq-question font-semibold text-[#1B3A5C] cursor-pointer flex items-center justify-between">
                  {item.question}
                  <span className="text-[#E8B84B] group-open:rotate-180 transition-transform">⌄</span>
                </summary>
                <p className="mt-3 text-[#1A1A2E]/70 leading-relaxed text-sm">{item.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <RelatedLinks links={relatedLinks} locale={locale} title={isFr ? 'Ressources liées' : 'Related resources'} />
      <RelatedArticles
        articleSlugs={['construction-zone-cotiere', 'essais-resistance-ciment', 'normes-ciment-maroc']}
        locale={locale}
      />
      <CtaBanner
        locale={locale}
        title={isFr ? 'Besoin de ciment CRS au Maroc ?' : 'Need CRS cement in Morocco?'}
        subtitle={
          isFr
            ? 'Devis gratuit sous 24h. Ciment résistant aux sulfates dès 1 650 DH/T. Livraison vrac, sacs et big bag dans tout le Sud marocain et la Mauritanie.'
            : 'Free quote within 24h. Sulfate-resistant cement from 1,650 DH/T. Bulk, bags and big bag delivery across Southern Morocco and Mauritania.'
        }
        buttonText={isFr ? 'Demander un devis gratuit' : 'Request a free quote'}
      />
    </>
  );
}
