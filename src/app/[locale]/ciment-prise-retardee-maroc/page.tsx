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
import { CheckCircle, ArrowRight, Factory, Beaker, Sun, Clock, HardHat, Building2, Layers } from 'lucide-react';

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
      path: '/ciment-prise-retardee-maroc',
      title: 'Retarded-Set Cement Morocco — Concrete Pouring | SDAD',
      description:
        'Retarded-set cement in Morocco: extended working time, hot-weather concrete pouring, large volumes. Price and availability. Free quote.',
      keywords: [
        'retarded-set cement',
        'retarder cement Morocco',
        'ciment prise retardée',
        'hot weather concrete',
        'large pour cement',
        'slow setting cement',
        ...KEYWORDS.products,
        ...KEYWORDS.application,
      ],
    });
  }

  return buildMetadata({
    locale: 'fr',
    path: '/ciment-prise-retardee-maroc',
    title: 'Ciment à Prise Retardée Maroc — Coulage Béton | SDAD',
    description:
      'Ciment à prise retardée au Maroc: temps de travail étendu, coulage béton par temps chaud, gros volumes. Prix et disponibilité. Devis gratuit.',
    keywords: [
      'ciment prise retardée',
      'ciment retardateur Maroc',
      'prise retardée béton',
      'ciment temps chaud',
      'coulage gros volume',
      'retardateur prise ciment',
      ...KEYWORDS.products,
      ...KEYWORDS.application,
    ],
  });
}

export default async function CimentPriseRetardeeMarocPage({
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
          question: 'Qu’est-ce qu’un ciment à prise retardée ?',
          answer:
            "Un ciment à prise retardée est un ciment Portland (CPJ 45 ou CPJ 55) dont la composition clinker ou les adjuvants intègrent un retardateur de prise — généralement du gluconate de sodium, de la lignosulfonate ou du sucre. Ce retardateur ralentit l’hydratation de l’aluminate tricalcique (C3A) et du silicate tricalcique (C3S), repoussant le début de prise à 2-4 heures au lieu de 45-90 minutes. L’objectif est d’étendre le temps de travail (workability time) sans compromettre la résistance finale à 28 jours.",
        },
        {
          question: 'Quand utiliser un ciment à prise retardée au Maroc ?',
          answer:
            "Le ciment à prise retardée est recommandé dans trois situations principales : (1) le coulage par temps chaud (> 30 °C), fréquent au Sud marocain de mai à septembre, où un ciment classique commencerait à prendre avant la fin du coulage ; (2) le coulage de gros volumes (radiers, dallages industriels, fondations massives) où le temps de bétonnage dépasse 1-2 heures ; (3) le transport longue distance du béton prêt à l’emploi (centrale à chantier éloignée, livraison en Mauritanie). Il évite les reprises de bétonnage, les joints froids et les fissurations de retrait thermique.",
        },
        {
          question: 'Quelle est la différence entre ciment à prise retardée et adjuvant retardateur ?',
          answer:
            "Le ciment à prise retardée intègre le retardateur directement à la formulation du ciment (au broyage), garantissant une homogénéité parfaite et un effet stable. L’adjuvant retardateur est ajouté au moment du gâchage du béton (dans le camion-toupie ou la bétonnière), offrant plus de flexibilité pour ajuster le retard selon les conditions. Dans la pratique, on peut combiner un ciment classique CPJ 45/55 avec un adjuvant retardateur dosé à 0,2-0,5 % du poids de ciment. Le ciment à prise retardée est préféré pour les productions industrielles reproductibles ; l’adjuvant pour les coulages ponctuels.",
        },
        {
          question: 'Le ciment à prise retardée affecte-t-il la résistance finale du béton ?',
          answer:
            "Non, un ciment à prise retardée correctement dosé n’affecte pas la résistance finale à 28 jours — elle peut même être légèrement supérieure (meilleure hydratation des grains de ciment). En revanche, la résistance à jeune âge (1-3 jours) est réduite, ce qui peut retarder le décoffrage. Pour des ouvrages nécessitant un décoffrage rapide, prévoyez un cure prolongée ou utilisez un accélérateur de durcissement à court terme une fois la prise initiée. Les normes NM 10.1.004 et EN 197-1 garantissent la conformité mécanique du ciment retardé.",
        },
        {
          question: 'Comment commander du ciment à prise retardée chez Dakhla Aménagement ?',
          answer:
            "Passez commande via notre formulaire de devis en précisant : le volume (tonnes), le conditionnement (vrac ≥30T, sacs 50kg, big bag 1T), le temps de prise souhaité (initial 2h, 4h ou plus), la résistance cible (CPJ 45 ou CPJ 55 base), la zone de chantier et la date de coulage. Le ciment à prise retardée est produit à la commande pour garantir fraîcheur et performance — prévoyez 5-10 jours ouvrés. Notre équipe technique confirme disponibilité, prix livré et délai sous 24h. Livraison dans tout le Sud marocain et la Mauritanie.",
        },
      ]
    : [
        {
          question: 'What is retarded-set cement?',
          answer:
            'Retarded-set cement is a Portland cement (CPJ 45 or CPJ 55) whose clinker composition or admixtures incorporate a setting retarder — usually sodium gluconate, lignosulfonate or sugar. This retarder slows the hydration of tricalcium aluminate (C3A) and tricalcium silicate (C3S), pushing the initial setting time to 2-4 hours instead of 45-90 minutes. The goal is to extend the workability time without compromising the final 28-day strength.',
        },
        {
          question: 'When to use retarded-set cement in Morocco?',
          answer:
            'Retarded-set cement is recommended in three main situations: (1) hot-weather pouring (> 30 °C), common in Southern Morocco from May to September, where standard cement would start setting before pouring ends; (2) large-volume pouring (rafts, industrial slabs, massive foundations) where concreting time exceeds 1-2 hours; (3) long-distance ready-mix transport (batching plant to remote site, delivery to Mauritania). It prevents cold joints, pour resumption and thermal shrinkage cracks.',
        },
        {
          question: 'What is the difference between retarded-set cement and a retarding admixture?',
          answer:
            'Retarded-set cement incorporates the retarder directly in the cement formulation (at grinding), ensuring perfect homogeneity and a stable effect. The retarding admixture is added at the time of concrete mixing (in the mixer truck or concrete mixer), offering more flexibility to adjust the retardation according to conditions. In practice, standard CPJ 45/55 cement can be combined with a retarding admixture dosed at 0.2-0.5% of cement weight. Retarded-set cement is preferred for reproducible industrial production; the admixture for occasional pours.',
        },
        {
          question: 'Does retarded-set cement affect the final strength of concrete?',
          answer:
            'No, a properly dosed retarded-set cement does not affect the final 28-day strength — it may even be slightly higher (better hydration of cement grains). However, early strength (1-3 days) is reduced, which may delay formwork removal. For structures requiring fast formwork removal, plan extended curing or use a short-term hardening accelerator once setting has started. The NM 10.1.004 and EN 197-1 standards guarantee the mechanical conformity of retarded cement.',
        },
        {
          question: 'How to order retarded-set cement from Dakhla Aménagement?',
          answer:
            'Order through our quote form specifying: the volume (tons), packaging (bulk ≥30T, 50kg bags, 1T big bag), desired setting time (initial 2h, 4h or more), target strength (CPJ 45 or CPJ 55 base), site location and pouring date. Retarded-set cement is produced to order to guarantee freshness and performance — allow 5-10 working days. Our technical team confirms availability, delivered price and lead time within 24h. Delivery across Southern Morocco and Mauritania.',
        },
      ];

  const features = isFr
    ? [
        { icon: Clock, title: 'Temps de travail étendu', desc: 'Début de prise repoussé à 2-4 h au lieu de 45-90 min — coulages longs sécurisés' },
        { icon: Sun, title: 'Adapté temps chaud', desc: 'Idéal pour coulages par > 30 °C, fréquent au Sud marocain' },
        { icon: Beaker, title: 'Conformité normative', desc: 'NM 10.1.004, EN 197-1 — résistance finale à 28 j conservée' },
        { icon: Factory, title: 'Production à la commande', desc: 'Ciment formulé selon votre besoin, fraîcheur et traçabilité garanties' },
      ]
    : [
        { icon: Clock, title: 'Extended working time', desc: 'Initial set pushed to 2-4 h instead of 45-90 min — long pours secured' },
        { icon: Sun, title: 'Hot weather adapted', desc: 'Ideal for pouring at > 30 °C, common in Southern Morocco' },
        { icon: Beaker, title: 'Standards compliance', desc: 'NM 10.1.004, EN 197-1 — final 28-day strength preserved' },
        { icon: Factory, title: 'Made-to-order production', desc: 'Cement formulated to your need, freshness and traceability guaranteed' },
      ];

  const applications = isFr
    ? [
        { icon: Sun, title: 'Coulage par temps chaud', desc: 'Bétonnage > 30 °C — Sud marocain, mai à septembre.' },
        { icon: Layers, title: 'Gros volumes', desc: 'Radiers, dallages industriels, fondations massives > 100 m³.' },
        { icon: Building2, title: 'Transport longue distance', desc: 'BPE livré loin de la centrale, export Mauritanie.' },
        { icon: HardHat, title: 'Ouvrages continus', desc: 'Avoid joints froids, reprises de bétonnage, retards de coulage.' },
      ]
    : [
        { icon: Sun, title: 'Hot-weather pouring', desc: 'Concreting at > 30 °C — Southern Morocco, May to September.' },
        { icon: Layers, title: 'Large volumes', desc: 'Rafts, industrial slabs, massive foundations > 100 m³.' },
        { icon: Building2, title: 'Long-distance transport', desc: 'Ready-mix delivered far from plant, Mauritania export.' },
        { icon: HardHat, title: 'Continuous structures', desc: 'Avoid cold joints, pour resumption, pouring delays.' },
      ];

  const relatedLinks = isFr
    ? [
        { title: 'Ciment CPJ 45', description: 'Ciment Portland Composé 45 MPa — base du ciment à prise retardée standard. Dès 1 500 DH/T.', href: '/cpj-45' },
        { title: 'Ciment CPJ 55', description: 'Ciment Portland Composé 55 MPa — base du ciment à prise retardée haute résistance. Dès 1 600 DH/T.', href: '/cpj-55' },
        { title: 'Prix du ciment au Maroc', description: 'Tarifs ciment CPJ 45, CPJ 55 et formules spéciales (retardé, CRS).', href: '/prix-ciment' },
        { title: 'Demander un devis', description: 'Devis gratuit sous 24h pour ciment à prise retardée et adjuvants.', href: '/devis' },
      ]
    : [
        { title: 'CPJ 45 Cement', description: 'Composite Portland 45 MPa cement — base for standard retarded-set cement. From 1,500 DH/T.', href: '/cpj-45' },
        { title: 'CPJ 55 Cement', description: 'Composite Portland 55 MPa cement — base for high-strength retarded-set cement. From 1,600 DH/T.', href: '/cpj-55' },
        { title: 'Cement Prices in Morocco', description: 'CPJ 45, CPJ 55 cement prices and special formulas (retarded, CRS).', href: '/prix-ciment' },
        { title: 'Request a Quote', description: 'Free quote within 24h for retarded-set cement and admixtures.', href: '/devis' },
      ];

  const schemas = [
    webPageSchema({
      name: isFr ? 'Ciment à Prise Retardée au Maroc' : 'Retarded-Set Cement in Morocco',
      description: isFr
        ? 'Ciment à prise retardée au Maroc : temps de travail étendu, coulage béton par temps chaud, gros volumes. Conforme NM 10.1.004 / EN 197-1.'
        : 'Retarded-set cement in Morocco: extended working time, hot-weather concrete pouring, large volumes. NM 10.1.004 / EN 197-1 compliant.',
      path: '/ciment-prise-retardee-maroc',
      locale: loc,
    }),
    breadcrumbSchema([{ name: isFr ? 'Ciment prise retardée Maroc' : 'Retarded-set cement Morocco', path: '/ciment-prise-retardee-maroc' }], loc),
    serviceSchema({
      name: isFr ? 'Ciment à Prise Retardée — Production et Fourniture' : 'Retarded-Set Cement — Production & Supply',
      description: isFr
        ? 'Production, conditionnement et livraison de ciment à prise retardée au Maroc. Vrac, sacs 50kg, big bag.'
        : 'Production, packaging and delivery of retarded-set cement in Morocco. Bulk, 50kg bags, big bag.',
      path: '/ciment-prise-retardee-maroc',
      locale: loc,
      serviceType: 'Retarded-set cement manufacturing and supply',
    }),
    faqSchema(faqItems),
    speakableSchema({
      path: '/ciment-prise-retardee-maroc',
      locale: loc,
      cssSelectors: ['h1', '.hero-title', '.faq-question'],
    }),
  ];

  return (
    <>
      <JsonLdScript schema={schemas} />
      <Breadcrumbs items={[{ name: isFr ? 'Ciment prise retardée Maroc' : 'Retarded-set cement Morocco', path: '/ciment-prise-retardee-maroc' }]} locale={locale} />

      {/* Hero */}
      <section className="bg-gradient-to-br from-[#1B3A5C] to-[#0f1f33] text-white py-20 md:py-28">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <div className="max-w-4xl">
            <span className="inline-block px-4 py-1.5 bg-[#E8B84B]/20 text-[#E8B84B] text-sm font-medium rounded-full mb-6">
              {isFr ? 'Ciment prise retardée — Coulage par temps chaud' : 'Retarded-set cement — Hot-weather pouring'}
            </span>
            <h1 className="hero-title text-[clamp(2rem,5vw,3.5rem)] font-bold leading-[1.1] mb-6">
              {isFr ? 'Ciment à Prise Retardée au Maroc — Coulage Béton' : 'Retarded-Set Cement in Morocco — Concrete Pouring'}
            </h1>
            <p className="text-lg md:text-xl text-white/80 leading-relaxed mb-8 max-w-3xl">
              {isFr
                ? 'Ciment Portland (CPJ 45/55) à début de prise repoussé à 2-4 heures, idéal pour le coulage par temps chaud, les gros volumes et le transport longue distance. Conforme NM 10.1.004 / EN 197-1, résistance finale à 28 jours conservée. Disponible en vrac, sacs 50kg et big bag 1T — livraison dans tout le Sud marocain et la Mauritanie.'
                : 'Portland cement (CPJ 45/55) with initial setting time pushed to 2-4 hours, ideal for hot-weather pouring, large volumes and long-distance transport. NM 10.1.004 / EN 197-1 compliant, final 28-day strength preserved. Available in bulk, 50kg bags and 1T big bag — delivery across Southern Morocco and Mauritania.'}
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
            {isFr ? 'Applications du ciment à prise retardée' : 'Retarded-set cement applications'}
          </h2>
          <p className="text-center text-[#6B7280] mb-12 max-w-2xl mx-auto">
            {isFr
              ? 'Le ciment à prise retardée est essentiel dès que le temps de travail doit être étendu ou que la température du chantier est élevée.'
              : 'Retarded-set cement is essential whenever the working time must be extended or the site temperature is high.'}
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
              {isFr ? 'Le ciment à prise retardée : la solution des coulages difficiles' : 'Retarded-set cement: the solution for difficult pours'}
            </h2>
            <p className="text-[#1A1A2E]/80 leading-relaxed mb-6">
              {isFr
                ? "Le ciment à prise retardée est un ciment Portland (CPJ 45 ou CPJ 55) dont la formulation intègre un retardateur de prise. Ce retardateur ralentit l’hydratation du clinker — principalement l’aluminate tricalcique (C3A) et le silicate tricalcique (C3S) — pour repousser le début de prise à 2, 4, voire 6 heures selon le dosage. L’objectif : étendre le temps de travail du béton frais (workability time) afin de sécuriser les coulages longs, les transports distants et les coulages par temps chaud, sans compromettre la résistance finale à 28 jours."
                : "Retarded-set cement is a Portland cement (CPJ 45 or CPJ 55) whose formulation incorporates a setting retarder. This retarder slows the hydration of the clinker — mainly tricalcium aluminate (C3A) and tricalcium silicate (C3S) — to push the initial setting time to 2, 4 or even 6 hours depending on dosage. The objective: extend the workability time of fresh concrete to secure long pours, distant transport and hot-weather pours, without compromising the final 28-day strength."}
            </p>
            <p className="text-[#1A1A2E]/80 leading-relaxed mb-6">
              {isFr
                ? "Au Maroc, et particulièrement dans les régions du Sud (Dakhla, Laâyoune, Boujdour, Tan-Tan), les températures estivales dépassent fréquemment 35 °C de mai à septembre. À 35 °C, un béton classique à base de CPJ 45 commence à prendre en moins d’une heure, rendant les coulages de plus de 50 m³ délicats, voire impossibles sans reprise de bétonnage. Le ciment à prise retardée, combiné à d’autres précautions (eau froide, granulats stockés à l’ombre, coulage tôt le matin, cure humide), permet de mener à bien ces coulages critiques. Il est aussi indispensable pour le transport de béton prêt à l’emploi sur longue distance — par exemple de Dakhla vers des chantiers de l’intérieur ou vers la Mauritanie."
                : "In Morocco, particularly in the Southern regions (Dakhla, Laayoune, Boujdour, Tan-Tan), summer temperatures frequently exceed 35 °C from May to September. At 35 °C, a standard CPJ 45-based concrete begins to set in less than an hour, making pours of more than 50 m³ difficult, even impossible without pour resumption. Retarded-set cement, combined with other precautions (cold water, aggregates stored in the shade, early morning pouring, wet curing), allows these critical pours to be completed. It is also essential for ready-mix transport over long distances — for example from Dakhla to inland sites or to Mauritania."}
            </p>

            <h3 className="text-2xl font-bold text-[#1B3A5C] mt-10 mb-4">
              {isFr ? 'Mécanisme et temps de prise' : 'Mechanism and setting time'}
            </h3>
            <p className="text-[#1A1A2E]/80 leading-relaxed mb-6">
              {isFr
                ? "Le retardateur de prise (gluconate de sodium, lignosulfonate, sucre, acide citrique) agit en complexant les ions calcium libérés lors de la première hydratation du C3A, ralentissant ainsi la cristallisation de l’ettringite. Le début de passe classiquement de 45-90 min (CPJ 45 standard) à 2-4 heures selon le dosage du retardateur (0,1 à 0,5 % du poids de ciment). Au-delà de 6 heures, on observe une dégradation de la résistance à 1-3 jours et un risque de ségrégation. La fin de prise est également décalée proportionnellement, mais la résistance finale à 28 jours est conservée voire légèrement améliorée grâce à une hydratation plus complète."
                : "The setting retarder (sodium gluconate, lignosulfonate, sugar, citric acid) acts by complexing the calcium ions released during the first hydration of C3A, thus slowing the crystallization of ettringite. The initial set typically shifts from 45-90 min (standard CPJ 45) to 2-4 hours depending on the retarder dosage (0.1 to 0.5% of cement weight). Beyond 6 hours, a degradation of the 1-3 day strength and a risk of segregation are observed. The final set is also shifted proportionally, but the final 28-day strength is preserved or even slightly improved thanks to more complete hydration."}
            </p>

            <h3 className="text-2xl font-bold text-[#1B3A5C] mt-10 mb-4">
              {isFr ? 'Quand choisir le ciment à prise retardée ?' : 'When to choose retarded-set cement?'}
            </h3>
            <ul className="space-y-3 mb-6">
              {(isFr
                ? [
                    'Coulage par temps chaud (> 30 °C), fréquent au Sud marocain de mai à septembre',
                    'Coulage de gros volumes (> 100 m³) : radiers, dallages industriels, fondations massives',
                    'Transport de béton prêt à l’emploi sur plus de 60-90 min de trajet',
                    'Coulages continus sans reprise de bétonnage (ouvrages étanches, massifs)',
                    'Coulages de nuit ou en horaires décalés pour éviter les pics de chaleur',
                    'Export de béton vers la Mauritanie (longue distance)',
                  ]
                : [
                    'Hot-weather pouring (> 30 °C), common in Southern Morocco from May to September',
                    'Large-volume pouring (> 100 m³): rafts, industrial slabs, massive foundations',
                    'Ready-mix transport over more than 60-90 min of travel',
                    'Continuous pours without pour resumption (watertight, massive structures)',
                    'Night or off-peak pouring to avoid heat peaks',
                    'Concrete export to Mauritania (long distance)',
                  ]
              ).map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-[#1A1A2E]/80">
                  <CheckCircle className="w-5 h-5 text-[#E8B84B] shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <h3 className="text-2xl font-bold text-[#1B3A5C] mt-10 mb-4">
              {isFr ? 'Ciment retardé vs adjuvant retardateur' : 'Retarded cement vs retarding admixture'}
            </h3>
            <p className="text-[#1A1A2E]/80 leading-relaxed mb-6">
              {isFr
                ? "Deux approches sont possibles : (1) utiliser un ciment à prise retardée formulé en usine — avantage : homogénéité parfaite, reproductibilité, traçabilité ; inconvénient : délai de production (5-10 j) ; (2) utiliser un ciment classique CPJ 45 ou CPJ 55 et ajouter un adjuvant retardateur au gâchage — avantage : flexibilité, ajustement du retard selon la météo du jour ; inconvénient : risque d’erreur de dosage, hétérogénéité si mal malaxé. Dans la pratique, l’adjuvant est privilégié pour les coulages ponctuels ou ajustables, le ciment retardé pour les productions industrielles reproductibles. Pour des volumes importants et une qualité constante, nous recommandons le ciment à prise retardée DAM."
                : "Two approaches are possible: (1) use a retarded-set cement formulated at the plant — advantage: perfect homogeneity, reproducibility, traceability; disadvantage: production lead time (5-10 days); (2) use a standard CPJ 45 or CPJ 55 cement and add a retarding admixture at mixing — advantage: flexibility, adjustment of retardation according to the day's weather; disadvantage: risk of dosage error, heterogeneity if poorly mixed. In practice, the admixture is preferred for occasional or adjustable pours, retarded cement for reproducible industrial production. For large volumes and consistent quality, we recommend DAM retarded-set cement."}
            </p>

            <h3 className="text-2xl font-bold text-[#1B3A5C] mt-10 mb-4">
              {isFr ? 'Prix et disponibilité' : 'Price and availability'}
            </h3>
            <p className="text-[#1A1A2E]/80 leading-relaxed mb-6">
              {isFr
                ? "Le ciment à prise retardée est commercialisé à partir de 1 580 DH/T en vrac (camion-citerne, minimum 30T), 1 630 DH/T en sacs 50kg (palette 1T) et 1 660 DH/T en big bag 1T — soit un surcoût de 5-8 % par rapport au CPJ 45 standard. Les tarifs sont dégressifs selon le volume et dépendent de la zone de livraison. La production étant planifiée à la commande, prévoyez un délai de 5 à 10 jours ouvrés. Pour comparer avec nos ciments classiques, consultez nos pages CPJ 45, CPJ 55 et le guide complet des prix du ciment. Demandez un devis gratuit via notre formulaire dédié pour un tarif livré chantier personnalisé."
                : "Retarded-set cement is sold from 1,580 DH/T in bulk (tanker truck, minimum 30T), 1,630 DH/T in 50kg bags (1T pallet) and 1,660 DH/T in 1T big bag — a 5-8% surcharge over standard CPJ 45. Prices are volume-degressive and depend on the delivery zone. As production is planned to order, allow 5 to 10 working days. To compare with our standard cements, see our CPJ 45, CPJ 55 pages and the complete cement price guide. Request a free quote via our dedicated form for a custom delivered-to-site price."}
            </p>
            <div className="bg-[#F7F8FA] border border-[#E5E7EB] rounded-xl p-6 my-6 flex flex-col gap-2">
              <Link href={`/${locale}/cpj-45`} className="inline-flex items-center gap-2 text-[#C1272D] font-medium hover:gap-3 transition-all">
                {isFr ? '→ Ciment CPJ 45 — base du ciment retardé standard' : '→ CPJ 45 cement — base for standard retarded cement'}
              </Link>
              <Link href={`/${locale}/cpj-55`} className="inline-flex items-center gap-2 text-[#C1272D] font-medium hover:gap-3 transition-all">
                {isFr ? '→ Ciment CPJ 55 — base du ciment retardé haute résistance' : '→ CPJ 55 cement — base for high-strength retarded cement'}
              </Link>
              <Link href={`/${locale}/prix-ciment`} className="inline-flex items-center gap-2 text-[#C1272D] font-medium hover:gap-3 transition-all">
                {isFr ? '→ Guide complet des prix du ciment' : '→ Complete cement price guide'}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 md:py-24 bg-[#F7F8FA]">
        <div className="max-w-3xl mx-auto px-6 md:px-12">
          <h2 className="text-3xl font-bold text-[#1B3A5C] mb-8 text-center">
            {isFr ? 'Questions fréquentes sur le ciment à prise retardée' : 'Frequently asked questions about retarded-set cement'}
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
        articleSlugs={['ciment-chaud-zone-desertique', '5-erreurs-ciment', 'beton-arme-maroc']}
        locale={locale}
      />
      <CtaBanner
        locale={locale}
        title={isFr ? 'Besoin de ciment à prise retardée au Maroc ?' : 'Need retarded-set cement in Morocco?'}
        subtitle={
          isFr
            ? 'Devis gratuit sous 24h. Ciment à prise retardée dès 1 580 DH/T. Production à la commande, livraison dans tout le Sud marocain et la Mauritanie.'
            : 'Free quote within 24h. Retarded-set cement from 1,580 DH/T. Made-to-order production, delivery across Southern Morocco and Mauritania.'
        }
        buttonText={isFr ? 'Demander un devis gratuit' : 'Request a free quote'}
      />
    </>
  );
}
