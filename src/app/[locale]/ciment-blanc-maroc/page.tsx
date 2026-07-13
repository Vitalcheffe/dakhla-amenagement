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
import { CtaBanner } from '@/components/shared/RelatedLinks';
import { RelatedArticles } from '@/components/shared/RelatedArticles';
import {
  CheckCircle,
  ArrowRight,
  Factory,
  Beaker,
  Truck,
  Palette,
  Sparkles,
  Droplet,
  Gem,
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
      path: '/ciment-blanc-maroc',
      title: 'White Cement Morocco — Uses, Prices, Availability | SDAD',
      description:
        'White cement in Morocco: characteristics, decorative uses (tiling, sculpture), price 3,500 DH/T. Difference with grey cement. Free quote.',
      keywords: [
        'white cement Morocco',
        'ciment blanc Maroc',
        'prix ciment blanc',
        'white Portland cement',
        'decorative cement',
        'ciment blanc carrelage',
        'ciment blanc sculpture',
        ...KEYWORDS.products,
        ...KEYWORDS.pricing,
      ],
    });
  }

  return buildMetadata({
    locale: 'fr',
    path: '/ciment-blanc-maroc',
    title: 'Ciment Blanc Maroc — Usages, Prix, Disponibilité | SDAD',
    description:
      "Ciment blanc au Maroc : caractéristiques, usages décoratifs (carrelage, sculpture), prix 3 500 DH/T. Différence avec ciment gris. Devis gratuit.",
    keywords: [
      'ciment blanc Maroc',
      'prix ciment blanc',
      'ciment blanc carrelage',
      'ciment blanc sculpture',
      'ciment blanc Portland',
      'ciment blanc decoratif',
      'difference ciment blanc gris',
      ...KEYWORDS.products,
      ...KEYWORDS.pricing,
    ],
  });
}

export default async function CimentBlancMarocPage({
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
          question: 'Quelle est la différence entre ciment blanc et ciment gris ?',
          answer:
            "Le ciment blanc et le ciment gris ont une composition chimique très proche (clinker + gypse), mais le ciment blanc est fabriqué à partir de matières premières très pauvres en oxydes de fer et de manganèse — les pigments responsables de la couleur grise. Il est aussi broyé plus finement et cuit à plus haute température. Résultat : une couleur blanc éclatant, une finesse supérieure, un prix environ 2 à 3 fois plus élevé que le ciment gris, et des usages orientés décoration (carrelage, joints, sculpture, enduits décoratifs).",
        },
        {
          question: 'Quel est le prix du ciment blanc au Maroc ?',
          answer:
            "Le prix du ciment blanc au Maroc est nettement plus élevé que celui du ciment gris, en raison de la rareté des matières premières blanches et d'un procédé de fabrication plus exigeant. Comptez environ 3 500 DH/T en vrac, 3 700 DH/T en sacs 50 kg et 3 800 DH/T en big bag 1T. Le sac de 50 kg est généralement vendu 180 à 200 DH. Pour un tarif livré chantier personnalisé, demandez un devis gratuit à Dakhla Aménagement.",
        },
        {
          question: 'Pour quels usages le ciment blanc est-il recommandé ?',
          answer:
            "Le ciment blanc est plébiscité pour les applications décoratives et esthétiques : fabrication de carreaux de ciment et de carrelage, joints de carrelage clairs, enduits et chapes décoratives, sculptures, éléments architecturaux (balustrades, corniches, ornements), béton architectural blanc ou coloré (avec pigments), terrasses et dallages de prestige. Sa pureté chromatique permet d'obtenir des teintes pastels et intenses impossibles avec le ciment gris.",
        },
        {
          question: 'Le ciment blanc est-il aussi résistant que le ciment gris ?',
          answer:
            "Oui, le ciment blanc offre des résistances mécaniques comparables au ciment gris Portland : classes 42,5 ou 52,5 MPa à 28 jours selon la qualité. Il est conforme à la norme EN 197-1 (CEM I 52,5 N ou 42,5 N). Sa résistance supérieure en fait un excellent liant pour les bétons architectoniques et les éléments préfabriqués décoratifs. Le surcoût est justifié par l'esthétique et la pureté, non par une baisse de performance.",
        },
        {
          question: 'Peut-on mélanger ciment blanc et ciment gris ?',
          answer:
            "Techniquement oui, mais le mélange perd la couleur blanche recherchée. Pour conserver l'effet esthétique du ciment blanc, il faut l'utiliser seul avec des agrégats blancs (sable blanc, gravier de marbre) et de l'eau propre. Pour les joints de carrelage clairs, on utilise un mortier de ciment blanc pur. Pour les bétons colorés, le ciment blanc est indispensable pour obtenir des teintes vives.",
        },
      ]
    : [
        {
          question: 'What is the difference between white and grey cement?',
          answer:
            'White and grey cements have a very similar chemical composition (clinker + gypsum), but white cement is made from raw materials very low in iron and manganese oxides — the pigments responsible for the grey color. It is also ground more finely and fired at higher temperature. Result: a brilliant white color, higher fineness, a price about 2 to 3 times higher than grey cement, and decoration-oriented uses (tiling, grout, sculpture, decorative renders).',
        },
        {
          question: 'What is the price of white cement in Morocco?',
          answer:
            'The price of white cement in Morocco is significantly higher than grey cement, due to the scarcity of white raw materials and a more demanding manufacturing process. Expect about 3,500 DH/T in bulk, 3,700 DH/T in 50 kg bags and 3,800 DH/T in 1T big bag. The 50 kg bag is generally sold at 180-200 DH. For a personalized delivered-to-site price, request a free quote from Dakhla Aménagement.',
        },
        {
          question: 'What is white cement recommended for?',
          answer:
            'White cement is highly prized for decorative and aesthetic applications: cement tile and tiling manufacturing, light tile grout, decorative renders and screeds, sculptures, architectural elements (balusters, cornices, ornaments), white or colored architectural concrete (with pigments), prestige terraces and slabs. Its color purity makes it possible to obtain pastel and intense shades impossible with grey cement.',
        },
        {
          question: 'Is white cement as strong as grey cement?',
          answer:
            'Yes, white cement offers mechanical strengths comparable to grey Portland cement: classes 42.5 or 52.5 MPa at 28 days depending on quality. It complies with the EN 197-1 standard (CEM I 52.5 N or 42.5 N). Its superior strength makes it an excellent binder for architectural concrete and decorative precast elements. The surcharge is justified by aesthetics and purity, not by a drop in performance.',
        },
        {
          question: 'Can white cement be mixed with grey cement?',
          answer:
            'Technically yes, but the mixture loses the sought-after white color. To preserve the aesthetic effect of white cement, it must be used alone with white aggregates (white sand, marble gravel) and clean water. For light tile grout, pure white cement mortar is used. For colored concrete, white cement is essential to obtain vivid shades.',
        },
      ];

  const comparison = isFr
    ? [
        { prop: 'Couleur', white: 'Blanc éclatant', grey: 'Gris' },
        { prop: 'Teneur en oxyde de fer (Fe2O3)', white: '< 0,4 %', grey: '2 à 5 %' },
        { prop: 'Teneur en oxyde de manganèse', white: 'Très faible', grey: 'Présent' },
        { prop: 'Finesse de mouture (Blaine)', white: '400 à 500 m²/kg', grey: '300 à 400 m²/kg' },
        { prop: 'Température de cuisson', white: '≥ 1 500 °C', grey: '~ 1 450 °C' },
        { prop: 'Résistance à 28 jours', white: '42,5 ou 52,5 MPa', grey: '32,5 à 52,5 MPa' },
        { prop: 'Prix indicatif (vrac)', white: '~ 3 500 DH/T', grey: '~ 1 500 DH/T' },
        { prop: 'Usage principal', white: 'Décoration, carrelage, sculpture', grey: 'Béton structurel courant' },
      ]
    : [
        { prop: 'Color', white: 'Brilliant white', grey: 'Grey' },
        { prop: 'Iron oxide content (Fe2O3)', white: '< 0.4%', grey: '2 to 5%' },
        { prop: 'Manganese oxide content', white: 'Very low', grey: 'Present' },
        { prop: 'Fineness (Blaine)', white: '400 to 500 m²/kg', grey: '300 to 400 m²/kg' },
        { prop: 'Firing temperature', white: '≥ 1,500 °C', grey: '~ 1,450 °C' },
        { prop: '28-day strength', white: '42.5 or 52.5 MPa', grey: '32.5 to 52.5 MPa' },
        { prop: 'Indicative price (bulk)', white: '~ 3,500 DH/T', grey: '~ 1,500 DH/T' },
        { prop: 'Main use', white: 'Decoration, tiling, sculpture', grey: 'Standard structural concrete' },
      ];

  const applications = isFr
    ? [
        {
          icon: Palette,
          title: 'Carrelage et carreaux',
          desc: 'Carreaux de ciment, dalles, joints clairs. Teinte pure pour finitions lumineuses.',
        },
        {
          icon: Gem,
          title: 'Sculpture et ornements',
          desc: 'Sculptures, balustrades, corniches, éléments architecturaux décoratifs.',
        },
        {
          icon: Sparkles,
          title: 'Béton architectural',
          desc: 'Béton blanc apparent, terrasses de prestige, façades contemporaines.',
        },
        {
          icon: Droplet,
          title: 'Béton coloré',
          desc: 'Base idéale pour bétons pigmentés : couleurs vives et pastels fidèles.',
        },
      ]
    : [
        {
          icon: Palette,
          title: 'Tiling and tiles',
          desc: 'Cement tiles, slabs, light grout. Pure shade for bright finishes.',
        },
        {
          icon: Gem,
          title: 'Sculpture and ornaments',
          desc: 'Sculptures, balusters, cornices, decorative architectural elements.',
        },
        {
          icon: Sparkles,
          title: 'Architectural concrete',
          desc: 'Exposed white concrete, prestige terraces, contemporary facades.',
        },
        {
          icon: Droplet,
          title: 'Colored concrete',
          desc: 'Ideal base for pigmented concrete: vivid and pastel faithful colors.',
        },
      ];

  const features = isFr
    ? [
        { icon: Factory, title: 'Approvisionnement fiable', desc: 'Réseau de partenaires cimentiers blancs en Europe et Turquie' },
        { icon: Beaker, title: 'Qualité contrôlée', desc: 'Blancheur, finesse, résistance testées en laboratoire' },
        { icon: Truck, title: 'Livraison Sud Maroc', desc: 'Sacs 50kg et big bag — Dakhla, Laâyoune, Boujdour, Mauritanie' },
        { icon: Sparkles, title: 'Conseil technique', desc: 'Dosage, pigments, agrégats blancs : accompagnement projet' },
      ]
    : [
        { icon: Factory, title: 'Reliable supply', desc: 'Network of white cement partners in Europe and Turkey' },
        { icon: Beaker, title: 'Controlled quality', desc: 'Whiteness, fineness, strength tested in laboratory' },
        { icon: Truck, title: 'Southern Morocco delivery', desc: '50kg bags and big bag — Dakhla, Laayoune, Boujdour, Mauritania' },
        { icon: Sparkles, title: 'Technical advice', desc: 'Dosage, pigments, white aggregates: project support' },
      ];

  const schemas = [
    webPageSchema({
      name: isFr ? 'Ciment Blanc Maroc — Usages, Prix, Disponibilité' : 'White Cement Morocco — Uses, Prices, Availability',
      description: isFr
        ? "Ciment blanc au Maroc : caractéristiques, usages décoratifs (carrelage, sculpture), prix 3 500 DH/T. Différence avec ciment gris. Centre de broyage Dakhla."
        : 'White cement in Morocco: characteristics, decorative uses (tiling, sculpture), price 3,500 DH/T. Difference with grey cement. Dakhla grinding plant.',
      path: '/ciment-blanc-maroc',
      locale: loc,
    }),
    breadcrumbSchema(
      [{ name: isFr ? 'Ciment Blanc Maroc' : 'White Cement Morocco', path: '/ciment-blanc-maroc' }],
      loc,
    ),
    serviceSchema({
      name: isFr ? 'Ciment Blanc Maroc — Fourniture et Conseil' : 'White Cement Morocco — Supply & Advice',
      description: isFr
        ? "Fourniture et livraison de ciment blanc au Maroc. Sacs 50kg, big bag 1T. Pour carrelage, sculpture, béton architectural."
        : 'Supply and delivery of white cement in Morocco. 50kg bags, 1T big bag. For tiling, sculpture, architectural concrete.',
      path: '/ciment-blanc-maroc',
      locale: loc,
      serviceType: 'White cement supply and technical advisory',
    }),
    faqSchema(faqItems),
    speakableSchema({
      path: '/ciment-blanc-maroc',
      locale: loc,
      cssSelectors: ['h1', '.hero-title', '.product-price', '.faq-question'],
    }),
  ];

  return (
    <>
      <JsonLdScript schema={schemas} />
      <Breadcrumbs
        items={[{ name: isFr ? 'Ciment Blanc Maroc' : 'White Cement Morocco', path: '/ciment-blanc-maroc' }]}
        locale={locale}
      />

      {/* Hero */}
      <section className="bg-gradient-to-br from-[#1B3A5C] to-[#0f1f33] text-white py-20 md:py-28">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <div className="max-w-4xl">
            <span className="inline-block px-4 py-1.5 bg-[#E8B84B]/20 text-[#E8B84B] text-sm font-medium rounded-full mb-6">
              {isFr ? 'Ciment blanc — Usages décoratifs' : 'White cement — Decorative uses'}
            </span>
            <h1 className="text-[clamp(2rem,5vw,3.5rem)] font-bold leading-[1.1] mb-6">
              {isFr
                ? 'Ciment Blanc Maroc — Usages, Prix, Disponibilité'
                : 'White Cement Morocco — Uses, Prices, Availability'}
            </h1>
            <p className="text-lg md:text-xl text-white/80 leading-relaxed mb-8 max-w-3xl">
              {isFr
                ? "Le ciment blanc est le liant de prédilection des architectes, décorateurs et fabricants de carrelage. Couleur éclatante, résistance élevée, finesse supérieure : au Maroc, il sublime carrelages, sculptures, façades et bétons architecturaux. Prix dès 3 500 DH/T. Disponible en sacs 50kg et big bag 1T via Dakhla Aménagement (SDAD)."
                : 'White cement is the preferred binder of architects, decorators and tile makers. Brilliant color, high strength, superior fineness: in Morocco, it enhances tiling, sculptures, facades and architectural concrete. Price from 3,500 DH/T. Available in 50kg bags and 1T big bag via Dakhla Aménagement (SDAD).'}
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

      {/* Long-form — what is white cement */}
      <section className="py-16 md:py-24 bg-[#F7F8FA]">
        <div className="max-w-4xl mx-auto px-6 md:px-12">
          <div className="prose prose-lg max-w-none">
            <h2 className="text-3xl font-bold text-[#1B3A5C] mb-6">
              {isFr ? 'Qu\'est-ce que le ciment blanc ?' : 'What is white cement?'}
            </h2>
            <p className="text-[#1A1A2E]/80 leading-relaxed mb-6">
              {isFr
                ? "Le ciment blanc est un ciment Portland dont la couleur blanche éclatante est obtenue par la sélection de matières premières très pures, très pauvres en oxydes de fer (Fe₂O₃ < 0,4 %) et de manganèse — les pigments naturels responsables de la teinte grise du ciment classique. Le calcaire blanc, la craie, le kaolin et le sable quartzeux remplacent les argiles ferrugineuses. Le cuisson se fait à plus haute température (1 500-1 600 °C) avec un refroidissement rapide à l'eau pour préserver la blancheur, et le broyage utilise des meules en silex ou céramique afin d'éviter toute contamination métallique."
                : 'White cement is a Portland cement whose brilliant white color is obtained by selecting very pure raw materials, very low in iron oxides (Fe₂O₃ < 0.4%) and manganese — the natural pigments responsible for the grey shade of conventional cement. White limestone, chalk, kaolin and quartz sand replace ferruginous clays. Firing takes place at a higher temperature (1,500-1,600 °C) with rapid water cooling to preserve whiteness, and grinding uses flint or ceramic wheels to avoid any metallic contamination.'}
            </p>
            <p className="text-[#1A1A2E]/80 leading-relaxed mb-6">
              {isFr
                ? "Le résultat est un ciment au blanc éclatant (indice de blancheur > 87 %), à la finesse de mouture supérieure (400 à 500 m²/kg Blaine) et aux résistances mécaniques comparables au ciment gris Portland (classes 42,5 ou 52,5 MPa à 28 jours). Sa pureté chromatique permet d'obtenir des teintes pastels et intenses, impossibles avec le ciment gris, en lui ajoutant des pigments minéraux. C'est pourquoi il est plébiscité par les architectes, les fabricants de carrelage et les décorateurs du monde entier."
                : 'The result is a cement with a brilliant white color (whiteness index > 87%), superior fineness (400 to 500 m²/kg Blaine) and mechanical strengths comparable to grey Portland cement (classes 42.5 or 52.5 MPa at 28 days). Its color purity makes it possible to obtain pastel and intense shades, impossible with grey cement, by adding mineral pigments. This is why it is highly prized by architects, tile makers and decorators worldwide.'}
            </p>

            <h3 className="text-2xl font-bold text-[#1B3A5C] mt-10 mb-4">
              {isFr ? 'Différence entre ciment blanc et ciment gris' : 'Difference between white and grey cement'}
            </h3>
            <p className="text-[#1A1A2E]/80 leading-relaxed mb-6">
              {isFr
                ? "Au-delà de la couleur, le ciment blanc se distingue du ciment gris par plusieurs caractéristiques techniques : une teneur plus faible en oxydes colorants, une finesse de mouture supérieure (qui améliore la maniabilité et la résistance), une température de cuisson plus élevée et un prix environ 2 à 3 fois supérieur. Le tableau ci-dessous résume les principales différences."
                : 'Beyond color, white cement differs from grey cement by several technical characteristics: lower content of coloring oxides, higher fineness (which improves workability and strength), higher firing temperature and a price about 2 to 3 times higher. The table below summarizes the main differences.'}
            </p>
            <div className="overflow-x-auto my-6">
              <table className="w-full border-collapse bg-white rounded-xl overflow-hidden shadow-sm">
                <thead>
                  <tr className="bg-[#1B3A5C] text-white">
                    <th className="text-left py-3.5 px-5 font-semibold">
                      {isFr ? 'Caractéristique' : 'Characteristic'}
                    </th>
                    <th className="text-left py-3.5 px-5 font-semibold">
                      {isFr ? 'Ciment blanc' : 'White cement'}
                    </th>
                    <th className="text-left py-3.5 px-5 font-semibold">
                      {isFr ? 'Ciment gris' : 'Grey cement'}
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {comparison.map((row, i) => (
                    <tr key={i} className="border-b border-[#E5E7EB] last:border-0 hover:bg-[#F7F8FA] transition-colors">
                      <td className="py-3 px-5 text-[#6B7280] font-medium">{row.prop}</td>
                      <td className="py-3 px-5 text-[#1A1A2E] font-semibold">{row.white}</td>
                      <td className="py-3 px-5 text-[#1A1A2E]">{row.grey}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Applications */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1B3A5C] mb-4 text-center">
            {isFr ? 'Applications du ciment blanc' : 'Applications of white cement'}
          </h2>
          <p className="text-center text-[#6B7280] mb-12 max-w-2xl mx-auto">
            {isFr
              ? "Du carrelage à la sculpture en passant par le béton architectural, le ciment blanc sublime les projets les plus exigeants."
              : 'From tiling to sculpture and architectural concrete, white cement enhances the most demanding projects.'}
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

      {/* Pricing long-form */}
      <section className="py-16 md:py-24 bg-[#F7F8FA]">
        <div className="max-w-4xl mx-auto px-6 md:px-12">
          <div className="prose prose-lg max-w-none">
            <h2 className="text-3xl font-bold text-[#1B3A5C] mb-6">
              {isFr ? 'Prix et disponibilité du ciment blanc au Maroc' : 'Price and availability of white cement in Morocco'}
            </h2>
            <p className="text-[#1A1A2E]/80 leading-relaxed mb-6">
              {isFr
                ? "Le ciment blanc est un produit plus rare et plus coûteux que le ciment gris Portland : la rareté des matières premières blanches (kaolin, calcaire blanc pur), un procédé de fabrication plus énergivore et un marché plus étroit expliquent un prix environ 2 à 3 fois supérieur. Au Maroc, le prix du ciment blanc se situe autour de 3 500 DH/T en vrac, 3 700 DH/T en sacs 50 kg et 3 800 DH/T en big bag 1T. Le sac de 50 kg est généralement vendu 180 à 200 DH en magasins de matériaux."
                : 'White cement is a rarer and more expensive product than grey Portland cement: the scarcity of white raw materials (kaolin, pure white limestone), a more energy-intensive manufacturing process and a smaller market explain a price about 2 to 3 times higher. In Morocco, the price of white cement is around 3,500 DH/T in bulk, 3,700 DH/T in 50 kg bags and 3,800 DH/T in 1T big bag. The 50 kg bag is generally sold at 180-200 DH in building material stores.'}
            </p>
            <p className="text-[#1A1A2E]/80 leading-relaxed mb-6">
              {isFr
                ? "Dakhla Aménagement (SDAD) approvisionne ses clients du Sud marocain et de Mauritanie en ciment blanc de qualité supérieure, via son réseau de partenaires cimentiers européens et turcs. Disponible en sacs 50kg (palette 1T = 20 sacs) et big bag 1T. Délai de livraison indicatif : 5 à 10 jours ouvrés selon la zone. Pour un tarif personnalisé et un conseil technique (dosage, choix des pigments, agrégats blancs compatibles), demandez un devis gratuit — réponse sous 24h."
                : 'Dakhla Aménagement (SDAD) supplies its customers in Southern Morocco and Mauritania with high-quality white cement, through its network of European and Turkish cement partners. Available in 50kg bags (1T pallet = 20 bags) and 1T big bag. Indicative delivery time: 5 to 10 business days depending on the area. For a personalized rate and technical advice (dosage, pigment choice, compatible white aggregates), request a free quote — response within 24h.'}
            </p>
            <div className="bg-white border border-[#E5E7EB] rounded-xl p-6 my-6">
              <Link
                href={`/${locale}/prix-ciment`}
                className="inline-flex items-center gap-2 text-[#C1272D] font-medium hover:gap-3 transition-all"
              >
                {isFr ? '→ Comparer avec les prix du ciment gris (CPJ 45, CPJ 55)' : '→ Compare with grey cement prices (CPJ 45, CPJ 55)'}
              </Link>
            </div>

            <h3 className="text-2xl font-bold text-[#1B3A5C] mt-10 mb-4">
              {isFr ? 'Pourquoi choisir Dakhla Aménagement (SDAD) ?' : 'Why choose Dakhla Aménagement (SDAD)?'}
            </h3>
            <ul className="space-y-3 mb-6">
              {(isFr
                ? [
                    'Approvisionnement fiable via réseau de partenaires cimentiers blancs en Europe et Turquie',
                    'Contrôle qualité systématique : blancheur, finesse, résistance testés en laboratoire',
                    'Conseil technique projet : dosage, pigments, choix des agrégats blancs compatibles',
                    'Conditionnements adaptés : sacs 50kg (palette 1T), big bag 1T',
                    'Livraison dans tout le Sud marocain (Dakhla, Laâyoune, Boujdour, Tan-Tan) et la Mauritanie',
                    'Tarifs dégressifs selon le volume — devis gratuit sous 24h',
                  ]
                : [
                    'Reliable supply via network of white cement partners in Europe and Turkey',
                    'Systematic quality control: whiteness, fineness, strength tested in laboratory',
                    'Project technical advice: dosage, pigments, choice of compatible white aggregates',
                    'Adapted packaging: 50kg bags (1T pallet), 1T big bag',
                    'Delivery across Southern Morocco (Dakhla, Laayoune, Boujdour, Tan-Tan) and Mauritania',
                    'Volume-degressive prices — free quote within 24h',
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

      {/* FAQ */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-3xl mx-auto px-6 md:px-12">
          <h2 className="text-3xl font-bold text-[#1B3A5C] mb-8 text-center">
            {isFr ? 'Questions fréquentes sur le ciment blanc' : 'Frequently asked questions about white cement'}
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

      {/* Internal links */}
      <section className="py-16 md:py-20 bg-[#F7F8FA]">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <h2 className="text-2xl md:text-3xl font-bold text-[#1B3A5C] mb-8 text-center">
            {isFr ? 'Nos autres ciments' : 'Our other cements'}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            <Link
              href={`/${locale}/cpj-45`}
              className="group block bg-white border border-[#E5E7EB] rounded-xl p-6 hover:border-[#E8B84B] hover:shadow-lg transition-all"
            >
              <h3 className="font-bold text-[#1B3A5C] mb-2 group-hover:text-[#C1272D] transition-colors">CPJ 45</h3>
              <p className="text-sm text-[#6B7280] mb-3">
                {isFr ? 'Ciment gris Portland 45 MPa — béton armé courant. Dès 1 500 DH/T.' : 'Grey Portland 45 MPa — standard concrete. From 1,500 DH/T.'}
              </p>
              <span className="inline-flex items-center gap-1 text-sm font-medium text-[#C1272D] group-hover:gap-2 transition-all">
                {isFr ? 'Découvrir' : 'Discover'} <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </Link>
            <Link
              href={`/${locale}/cpj-55`}
              className="group block bg-white border border-[#E5E7EB] rounded-xl p-6 hover:border-[#E8B84B] hover:shadow-lg transition-all"
            >
              <h3 className="font-bold text-[#1B3A5C] mb-2 group-hover:text-[#C1272D] transition-colors">CPJ 55</h3>
              <p className="text-sm text-[#6B7280] mb-3">
                {isFr ? 'Ciment gris haute résistance 55 MPa — génie civil. Dès 1 600 DH/T.' : 'High-strength 55 MPa — civil engineering. From 1,600 DH/T.'}
              </p>
              <span className="inline-flex items-center gap-1 text-sm font-medium text-[#C1272D] group-hover:gap-2 transition-all">
                {isFr ? 'Découvrir' : 'Discover'} <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </Link>
            <Link
              href={`/${locale}/prix-ciment`}
              className="group block bg-white border border-[#E5E7EB] rounded-xl p-6 hover:border-[#E8B84B] hover:shadow-lg transition-all"
            >
              <h3 className="font-bold text-[#1B3A5C] mb-2 group-hover:text-[#C1272D] transition-colors">
                {isFr ? 'Prix du ciment' : 'Cement prices'}
              </h3>
              <p className="text-sm text-[#6B7280] mb-3">
                {isFr ? 'Guide complet des tarifs 2026 — gris et blanc.' : 'Complete 2026 price guide — grey and white.'}
              </p>
              <span className="inline-flex items-center gap-1 text-sm font-medium text-[#C1272D] group-hover:gap-2 transition-all">
                {isFr ? 'Consulter' : 'View'} <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </Link>
            <Link
              href={`/${locale}/devis`}
              className="group block bg-white border border-[#E5E7EB] rounded-xl p-6 hover:border-[#E8B84B] hover:shadow-lg transition-all"
            >
              <h3 className="font-bold text-[#1B3A5C] mb-2 group-hover:text-[#C1272D] transition-colors">
                {isFr ? 'Devis gratuit' : 'Free quote'}
              </h3>
              <p className="text-sm text-[#6B7280] mb-3">
                {isFr ? 'Ciment blanc — réponse sous 24h.' : 'White cement — response within 24h.'}
              </p>
              <span className="inline-flex items-center gap-1 text-sm font-medium text-[#C1272D] group-hover:gap-2 transition-all">
                {isFr ? 'Demander' : 'Request'} <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </Link>
          </div>
        </div>
      </section>

      <RelatedArticles
        articleSlugs={['choisir-ciment-projet', 'difference-ciment-beton', 'ciment-blanc-maroc']}
        locale={locale}
      />
      <CtaBanner
        locale={locale}
        title={isFr ? 'Besoin de ciment blanc au Maroc ?' : 'Need white cement in Morocco?'}
        subtitle={
          isFr
            ? 'Devis gratuit sous 24h. Ciment blanc dès 3 500 DH/T. Livraison sacs 50kg et big bag dans tout le Sud marocain et la Mauritanie.'
            : 'Free quote within 24h. White cement from 3,500 DH/T. 50kg bags and big bag delivery across Southern Morocco and Mauritania.'
        }
        buttonText={isFr ? 'Demander un devis gratuit' : 'Request a free quote'}
      />
    </>
  );
}
