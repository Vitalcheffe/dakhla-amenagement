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
import {
  CheckCircle,
  ArrowRight,
  Factory,
  Beaker,
  Truck,
  Zap,
  Wrench,
  Anchor,
  Clock,
} from 'lucide-react';

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
      path: '/ciment-prise-rapide-maroc',
      title: 'Rapid-Set Cement Morocco — Fast Hardening | SDAD',
      description:
        'Rapid-set cement in Morocco: emergency repair, anchoring, plugging. Setting in 5-15 min. Price and availability. Free quote.',
      keywords: [
        'rapid set cement Morocco',
        'ciment prise rapide Maroc',
        'fast setting cement',
        'ciment prompt',
        'ciment réparation urgente',
        'ciment scellement',
        'ciment obturation',
        'quick cement',
        ...KEYWORDS.products,
        ...KEYWORDS.pricing,
      ],
    });
  }

  return buildMetadata({
    locale: 'fr',
    path: '/ciment-prise-rapide-maroc',
    title: 'Ciment à Prise Rapide Maroc — Durcissement Express | SDAD',
    description:
      "Ciment à prise rapide au Maroc : réparation urgente, scellement, obturation. Prise en 5-15 min. Prix et disponibilité. Devis gratuit.",
    keywords: [
      'ciment prise rapide Maroc',
      'ciment prompt',
      'ciment rapide',
      'ciment réparation urgente',
      'ciment scellement',
      'ciment obturation',
      'ciment flash',
      'prix ciment prise rapide',
      ...KEYWORDS.products,
      ...KEYWORDS.pricing,
    ],
  });
}

export default async function CimentPriseRapideMarocPage({
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
          question: 'Quelle est la différence entre ciment à prise rapide et ciment Portland classique ?',
          answer:
            "Le ciment Portland classique (CPJ 45, CPJ 55) commence sa prise entre 45 minutes et 2 heures après gâchage, et atteint sa résistance finale à 28 jours. Le ciment à prise rapide (ou ciment prompt) débute sa prise en 5 à 15 minutes et durcit en 30 minutes à 1 heure, avec une résistance à 1-3 heures déjà utilisable (5-15 MPa). Cette rapidité permet d'immobiliser immédiatement les ouvrages réparés, de sceller des éléments sans attendance, ou d'obturer des fuites en pression. Le ciment à prise rapide n'est pas adapté aux gros volumes (chaleur d'hydratation élevée) — il sert pour les réparations ponctuelles et le scellement.",
        },
        {
          question: 'Quels sont les délais de prise d\'un ciment à prise rapide ?',
          answer:
            "Selon la formulation, on distingue : (1) le ciment prompt naturel — prise en 5-10 min, durcissement en 30 min, résistance 5 MPa à 1h ; (2) le ciment alumineux (fondu) — prise en 2-6h, durcissement en 24h, résistance 40 MPa à 24h ; (3) les mortiers de réparation à prise rapide (prêts à gâcher) — prise en 10-30 min, résistance 20 MPa à 1h. Le choix dépend de l'urgence et de la résistance finale attendue. Pour une fuite active sous pression, on utilise un ciment « flash » (prise en 60-90 secondes).",
        },
        {
          question: 'Pour quels usages le ciment à prise rapide est-il recommandé ?',
          answer:
            "Le ciment à prise rapide est recommandé pour : (1) la réparation urgente de béton (réfection de marches, bordures, seuils) avec remise en service immédiate ; (2) le scellement d'éléments (barrières, garde-corps, poteaux, grilles) sans attendre 28 jours ; (3) l'obturation de fuites et d'infiltrations actives (tuyaux, regards, parois enterrées) ; (4) les travaux sous eau ou par temps froid (le durcissement rapide empêche le lessivage) ; (5) les raccords de tuyauterie et les joints de canalisation ; (6) le blocage rapide d'armatures en attente de bétonnage. À éviter pour les gros volumes (chaleur d'hydratation).",
        },
        {
          question: 'Quel est le prix du ciment à prise rapide au Maroc ?',
          answer:
            "Le ciment à prise rapide est un produit technique plus coûteux que le ciment Portland classique, en raison de sa formulation spéciale (clinker spécial, sulfates régulateurs, additifs accélérateurs). Comptez environ 15 à 30 DH/kg en sac de 5-25 kg selon la qualité et la rapidité (ciment prompt naturel, mortier de réparation, ciment « flash »). En big bag 1T sur commande, le prix descend à 8 000-15 000 DH/T. Les mortiers de réparation prêts à gâcher sont vendus 20-40 DH/kg. Pour un tarif précis selon votre application, demandez un devis gratuit à Dakhla Aménagement.",
        },
        {
          question: 'Comment appliquer le ciment à prise rapide sans échec ?',
          answer:
            "L'application d'un ciment à prise rapide demande de la rapidité et de la précision : (1) préparez la surface (nettoyage, dégagement de la zone) avant de gâcher — une fois le ciment mélangé, vous n'avez que 5-10 min ; (2) gâchez en petites quantités (1-2 kg à la fois) pour éviter la prise dans le seau ; (3) utilisez de l'eau froide par temps chaud pour ralentir légèrement la prise ; (4) appliquez immédiatement et serrez fermement ; (5) pour les fuites actives, attendez que le flux diminue puis appliquez en pression ; (6) curez dès la fin de prise (le ciment prompt dégage beaucoup de chaleur). Portez des gants : le ciment à prise rapide est très alcalin et irritant.",
        },
      ]
    : [
        {
          question: 'What is the difference between rapid-set cement and standard Portland cement?',
          answer:
            'Standard Portland cement (CPJ 45, CPJ 55) begins setting between 45 minutes and 2 hours after mixing, and reaches its final strength at 28 days. Rapid-set cement (or prompt cement) begins setting in 5 to 15 minutes and hardens in 30 minutes to 1 hour, with a usable strength at 1-3 hours (5-15 MPa). This speed makes it possible to immediately immobilize repaired structures, seal elements without waiting, or plug leaks under pressure. Rapid-set cement is not suitable for large volumes (high heat of hydration) — it is used for spot repairs and sealing.',
        },
        {
          question: 'What are the setting times of a rapid-set cement?',
          answer:
            'Depending on the formulation, there are: (1) natural prompt cement — setting in 5-10 min, hardening in 30 min, strength 5 MPa at 1h; (2) aluminous cement (fused) — setting in 2-6h, hardening in 24h, strength 40 MPa at 24h; (3) rapid-set repair mortars (ready to mix) — setting in 10-30 min, strength 20 MPa at 1h. The choice depends on the urgency and the expected final strength. For an active leak under pressure, a "flash" cement (setting in 60-90 seconds) is used.',
        },
        {
          question: 'What is rapid-set cement recommended for?',
          answer:
            'Rapid-set cement is recommended for: (1) emergency concrete repair (refacing steps, curbs, thresholds) with immediate return to service; (2) sealing elements (barriers, railings, posts, grids) without waiting 28 days; (3) plugging active leaks and infiltrations (pipes, manholes, buried walls); (4) underwater work or cold weather (rapid hardening prevents leaching); (5) pipe connections and pipe joints; (6) quick blocking of rebar awaiting concreting. To avoid for large volumes (heat of hydration).',
        },
        {
          question: 'What is the price of rapid-set cement in Morocco?',
          answer:
            'Rapid-set cement is a technical product more expensive than standard Portland cement, due to its special formulation (special clinker, regulating sulfates, accelerating additives). Expect about 15 to 30 DH/kg in 5-25 kg bags depending on quality and speed (natural prompt cement, repair mortar, "flash" cement). In 1T big bag on order, the price drops to 8,000-15,000 DH/T. Ready-to-mix repair mortars are sold at 20-40 DH/kg. For an accurate price based on your application, request a free quote from Dakhla Aménagement.',
        },
        {
          question: 'How to apply rapid-set cement without failure?',
          answer:
            'Applying rapid-set cement requires speed and precision: (1) prepare the surface (cleaning, clearing the area) before mixing — once the cement is mixed, you only have 5-10 min; (2) mix in small quantities (1-2 kg at a time) to avoid setting in the bucket; (3) use cold water in hot weather to slightly slow setting; (4) apply immediately and pack firmly; (5) for active leaks, wait until the flow decreases then apply under pressure; (6) cure as soon as setting ends (prompt cement releases a lot of heat). Wear gloves: rapid-set cement is very alkaline and irritating.',
        },
      ];

  const types = isFr
    ? [
        {
          name: 'Ciment prompt naturel',
          set: '5-10 min',
          harden: '30 min',
          strength: '5 MPa à 1h',
          use: 'Obturation de fuites, scellement, raccords urgents.',
        },
        {
          name: 'Ciment alumineux (fondu)',
          set: '2-6 h',
          harden: '24 h',
          strength: '40 MPa à 24h',
          use: 'Réparations structurales, béton réfractaire, temps froid.',
        },
        {
          name: 'Mortier de réparation R3-R4',
          set: '10-30 min',
          harden: '1 h',
          strength: '20 MPa à 1h',
          use: 'Réfection de béton, seuils, marches, bordures, raccords.',
        },
      ]
    : [
        {
          name: 'Natural prompt cement',
          set: '5-10 min',
          harden: '30 min',
          strength: '5 MPa at 1h',
          use: 'Leak plugging, sealing, emergency connections.',
        },
        {
          name: 'Aluminous cement (fused)',
          set: '2-6 h',
          harden: '24 h',
          strength: '40 MPa at 24h',
          use: 'Structural repairs, refractory concrete, cold weather.',
        },
        {
          name: 'R3-R4 repair mortar',
          set: '10-30 min',
          harden: '1 h',
          strength: '20 MPa at 1h',
          use: 'Concrete refacing, thresholds, steps, curbs, connections.',
        },
      ];

  const applications = isFr
    ? [
        {
          icon: Wrench,
          title: 'Réparation urgente',
          desc: 'Réfection de marches, seuils, bordures, raccords de béton avec remise en service immédiate.',
        },
        {
          icon: Anchor,
          title: 'Scellement rapide',
          desc: 'Scellement de poteaux, grilles, barrières, garde-corps, ancrages sans attendance.',
        },
        {
          icon: Zap,
          title: 'Obturation de fuites',
          desc: 'Obturation de fuites actives (tuyaux, regards, parois enterrées) sous faible pression.',
        },
        {
          icon: Clock,
          title: 'Travaux sous eau / froid',
          desc: 'Réparations sous eau, travaux par temps froid : le durcissement rapide empêche le lessivage.',
        },
      ]
    : [
        {
          icon: Wrench,
          title: 'Emergency repair',
          desc: 'Refacing steps, thresholds, curbs, concrete connections with immediate return to service.',
        },
        {
          icon: Anchor,
          title: 'Fast sealing',
          desc: 'Sealing posts, grids, barriers, railings, anchors without waiting.',
        },
        {
          icon: Zap,
          title: 'Leak plugging',
          desc: 'Plugging active leaks (pipes, manholes, buried walls) under low pressure.',
        },
        {
          icon: Clock,
          title: 'Underwater / cold work',
          desc: 'Underwater repairs, cold weather work: rapid hardening prevents leaching.',
        },
      ];

  const features = isFr
    ? [
        { icon: Factory, title: 'Approvisionnement fiable', desc: 'Partenaires cimentiers prompt en Europe' },
        { icon: Beaker, title: 'Prise contrôlée', desc: 'Temps de prise testé en laboratoire pour chaque lot' },
        { icon: Truck, title: 'Livraison Sud Maroc', desc: 'Sacs 5kg, 25kg, big bag — Dakhla, Laâyoune, Mauritanie' },
        { icon: Zap, title: 'Conseil technique', desc: 'Choix du type, dosage, mise en œuvre : accompagnement' },
      ]
    : [
        { icon: Factory, title: 'Reliable supply', desc: 'Prompt cement partners in Europe' },
        { icon: Beaker, title: 'Controlled setting', desc: 'Setting time tested in laboratory for each batch' },
        { icon: Truck, title: 'Southern Morocco delivery', desc: '5kg, 25kg bags, big bag — Dakhla, Laayoune, Mauritania' },
        { icon: Zap, title: 'Technical advice', desc: 'Type choice, dosage, application: support' },
      ];

  const schemas = [
    webPageSchema({
      name: isFr ? 'Ciment à Prise Rapide Maroc — Durcissement Express' : 'Rapid-Set Cement Morocco — Fast Hardening',
      description: isFr
        ? "Ciment à prise rapide au Maroc : réparation urgente, scellement, obturation. Prise en 5-15 min. Prix dès 15 DH/kg. Centre de broyage Dakhla."
        : 'Rapid-set cement in Morocco: emergency repair, sealing, plugging. Setting in 5-15 min. Price from 15 DH/kg. Dakhla grinding plant.',
      path: '/ciment-prise-rapide-maroc',
      locale: loc,
    }),
    breadcrumbSchema(
      [{ name: isFr ? 'Ciment à Prise Rapide Maroc' : 'Rapid-Set Cement Morocco', path: '/ciment-prise-rapide-maroc' }],
      loc,
    ),
    serviceSchema({
      name: isFr ? 'Ciment à Prise Rapide Maroc — Fourniture et Conseil' : 'Rapid-Set Cement Morocco — Supply & Advice',
      description: isFr
        ? "Fourniture et livraison de ciment à prise rapide au Maroc. Sacs 5kg, 25kg, big bag. Pour réparations urgentes, scellement, obturation."
        : 'Supply and delivery of rapid-set cement in Morocco. 5kg, 25kg bags, big bag. For emergency repairs, sealing, plugging.',
      path: '/ciment-prise-rapide-maroc',
      locale: loc,
      serviceType: 'Rapid-set cement supply and technical advisory',
    }),
    faqSchema(faqItems),
    speakableSchema({
      path: '/ciment-prise-rapide-maroc',
      locale: loc,
      cssSelectors: ['h1', '.hero-title', '.product-price', '.faq-question'],
    }),
  ];

  return (
    <>
      <JsonLdScript schema={schemas} />
      <Breadcrumbs
        items={[{ name: isFr ? 'Ciment à Prise Rapide Maroc' : 'Rapid-Set Cement Morocco', path: '/ciment-prise-rapide-maroc' }]}
        locale={locale}
      />

      {/* Hero */}
      <section className="bg-gradient-to-br from-[#1B3A5C] to-[#0f1f33] text-white py-20 md:py-28">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <div className="max-w-4xl">
            <span className="inline-block px-4 py-1.5 bg-[#E8B84B]/20 text-[#E8B84B] text-sm font-medium rounded-full mb-6">
              {isFr ? 'Ciment à prise rapide — Prise en 5-15 min' : 'Rapid-set cement — Setting in 5-15 min'}
            </span>
            <h1 className="text-[clamp(2rem,5vw,3.5rem)] font-bold leading-[1.1] mb-6">
              {isFr
                ? 'Ciment à Prise Rapide Maroc — Durcissement Express'
                : 'Rapid-Set Cement Morocco — Fast Hardening'}
            </h1>
            <p className="text-lg md:text-xl text-white/80 leading-relaxed mb-8 max-w-3xl">
              {isFr
                ? "Le ciment à prise rapide (ciment prompt, mortier flash) durcit en 5 à 15 minutes, contre 28 jours pour un ciment Portland classique. Indispensable pour les réparations urgentes, le scellement d'éléments et l'obturation de fuites. Dakhla Aménagement (SDAD) fournit les trois grandes familles de ciments à prise rapide au Maroc et en Mauritanie. Devis gratuit sous 24h."
                : 'Rapid-set cement (prompt cement, flash mortar) hardens in 5 to 15 minutes, compared to 28 days for standard Portland cement. Essential for emergency repairs, element sealing and leak plugging. Dakhla Aménagement (SDAD) supplies the three main families of rapid-set cements in Morocco and Mauritania. Free quote within 24h.'}
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

      {/* Long-form — what is rapid-set cement */}
      <section className="py-16 md:py-24 bg-[#F7F8FA]">
        <div className="max-w-4xl mx-auto px-6 md:px-12">
          <div className="prose prose-lg max-w-none">
            <h2 className="text-3xl font-bold text-[#1B3A5C] mb-6">
              {isFr ? 'Qu\'est-ce que le ciment à prise rapide ?' : 'What is rapid-set cement?'}
            </h2>
            <p className="text-[#1A1A2E]/80 leading-relaxed mb-6">
              {isFr
                ? "Le ciment à prise rapide — aussi appelé ciment prompt, ciment flash ou ciment à durcissement rapide — est un liant hydraulique spécial formulé pour démarrer sa prise en quelques minutes (5 à 15 min) et atteindre une résistance mécanique utilisable en moins d'une heure. Cette performance s'obtient par trois leviers : (1) une composition chimique spéciale — clinker riche en aluminate tricalcique (C₃A), sulfates de calcium régulateurs dosés pour une prise éclair, parfois additifs accélérateurs (chlorure de calcium, nitrate de calcium, formiates) ; (2) une finesse de mouture très élevée (Blaine > 500 m²/kg) qui augmente la surface de contact et accélère l'hydratation ; (3) pour le ciment prompt naturel, une cuisson spécifique à 1 200 °C qui produit un clinker particulier (ciment prompt de Vicat, inventé en 1817 par Louis Vicat)."
                : 'Rapid-set cement — also called prompt cement, flash cement or fast-hardening cement — is a special hydraulic binder formulated to start setting in a few minutes (5 to 15 min) and reach usable mechanical strength in less than an hour. This performance is achieved through three levers: (1) a special chemical composition — clinker rich in tricalcium aluminate (C₃A), regulating calcium sulfates dosed for flash setting, sometimes accelerating additives (calcium chloride, calcium nitrate, formates); (2) a very high fineness (Blaine > 500 m²/kg) that increases contact surface and accelerates hydration; (3) for natural prompt cement, a specific firing at 1,200 °C that produces a particular clinker (Vicat prompt cement, invented in 1817 by Louis Vicat).'}
            </p>
            <p className="text-[#1A1A2E]/80 leading-relaxed mb-6">
              {isFr
                ? "Le ciment à prise rapide s'oppose au ciment Portland classique par son temps de prise (5-15 min contre 45 min-2h) et son temps de durcissement (30 min-24h contre 28 jours). Cette rapidité est précieuse pour les interventions urgentes : réparer une marche brisée en pleine circulation, sceller une barrière sans bloquer le chantier 28 jours, obturer une fuite sous pression. En contrepartie, le ciment à prise rapide a une résistance finale souvent plus modeste (sauf ciment alumineux), dégage beaucoup de chaleur d'hydratation, et son temps de travail est très court — il ne convient pas aux coulages de gros volumes. Pour les réparations structurelles, on préfère les mortiers de réparation R3 ou R4 (norme EN 1504-3) qui combinent prise rapide et résistance finale élevée."
                : 'Rapid-set cement contrasts with standard Portland cement in its setting time (5-15 min vs. 45 min-2h) and hardening time (30 min-24h vs. 28 days). This speed is valuable for emergency interventions: repairing a broken step in heavy traffic, sealing a barrier without blocking the site for 28 days, plugging a leak under pressure. In return, rapid-set cement has often more modest final strength (except aluminous cement), releases a lot of heat of hydration, and its working time is very short — it is not suitable for large volume pours. For structural repairs, R3 or R4 repair mortars (EN 1504-3 standard) are preferred, combining rapid setting and high final strength.'}
            </p>

            <h3 className="text-2xl font-bold text-[#1B3A5C] mt-10 mb-4">
              {isFr ? 'Les types de ciments à prise rapide' : 'Types of rapid-set cements'}
            </h3>
            <p className="text-[#1A1A2E]/80 leading-relaxed mb-6">
              {isFr
                ? "On distingue trois grandes familles de ciments à prise rapide, adaptées à des usages différents. Le ciment prompt naturel (5-10 min) est idéal pour les obturations éclair et les scellements. Le ciment alumineux (2-6h) est préféré pour les réparations structurelles et le béton réfractaire. Les mortiers de réparation prêts à gâcher (10-30 min) combinent facilité d'emploi et résistance élevée."
                : 'There are three main families of rapid-set cements, adapted to different uses. Natural prompt cement (5-10 min) is ideal for flash plugging and sealing. Aluminous cement (2-6h) is preferred for structural repairs and refractory concrete. Ready-to-mix repair mortars (10-30 min) combine ease of use and high strength.'}
            </p>
            <div className="overflow-x-auto my-6">
              <table className="w-full border-collapse bg-white rounded-xl overflow-hidden shadow-sm">
                <thead>
                  <tr className="bg-[#1B3A5C] text-white">
                    <th className="text-left py-3.5 px-5 font-semibold">{isFr ? 'Type' : 'Type'}</th>
                    <th className="text-left py-3.5 px-5 font-semibold">{isFr ? 'Prise' : 'Setting'}</th>
                    <th className="text-left py-3.5 px-5 font-semibold">{isFr ? 'Durcissement' : 'Hardening'}</th>
                    <th className="text-left py-3.5 px-5 font-semibold">{isFr ? 'Résistance' : 'Strength'}</th>
                    <th className="text-left py-3.5 px-5 font-semibold">{isFr ? 'Usage' : 'Use'}</th>
                  </tr>
                </thead>
                <tbody>
                  {types.map((row, i) => (
                    <tr key={i} className="border-b border-[#E5E7EB] last:border-0 hover:bg-[#F7F8FA] transition-colors">
                      <td className="py-3 px-5 text-[#1A1A2E] font-semibold">{row.name}</td>
                      <td className="py-3 px-5 text-[#C1272D] font-bold">{row.set}</td>
                      <td className="py-3 px-5 text-[#1A1A2E]">{row.harden}</td>
                      <td className="py-3 px-5 text-[#1A1A2E]">{row.strength}</td>
                      <td className="py-3 px-5 text-[#6B7280] text-sm">{row.use}</td>
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
            {isFr ? 'Applications du ciment à prise rapide' : 'Applications of rapid-set cement'}
          </h2>
          <p className="text-center text-[#6B7280] mb-12 max-w-2xl mx-auto">
            {isFr
              ? "Réparations urgentes, scellement, obturation : le ciment à prise rapide est l'outil du dépanneur et du professionnel pressé."
              : 'Emergency repairs, sealing, plugging: rapid-set cement is the tool of the troubleshooter and the time-pressed professional.'}
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
              {isFr ? 'Prix et disponibilité du ciment à prise rapide' : 'Price and availability of rapid-set cement'}
            </h2>
            <p className="text-[#1A1A2E]/80 leading-relaxed mb-6">
              {isFr
                ? "Le ciment à prise rapide est un produit technique dont le prix varie fortement selon le type, la qualité et le conditionnement. Le ciment prompt naturel coûte environ 15-25 DH/kg en sac de 5 kg, 12-18 DH/kg en sac de 25 kg. Le ciment alumineux (fondu) démarre à 8-12 DH/kg. Les mortiers de réparation R3-R4 prêts à gâcher sont vendus 20-40 DH/kg en sac de 5-25 kg. En big bag 1T sur commande, le prix descend à 8 000-15 000 DH/T selon la formulation. Pour un tarif précis adapté à votre application, demandez un devis gratuit à Dakhla Aménagement."
                : 'Rapid-set cement is a technical product whose price varies greatly depending on the type, quality and packaging. Natural prompt cement costs about 15-25 DH/kg in 5 kg bags, 12-18 DH/kg in 25 kg bags. Aluminous (fused) cement starts at 8-12 DH/kg. R3-R4 ready-to-mix repair mortars are sold at 20-40 DH/kg in 5-25 kg bags. In 1T big bag on order, the price drops to 8,000-15,000 DH/T depending on the formulation. For an accurate price adapted to your application, request a free quote from Dakhla Aménagement.'}
            </p>
            <p className="text-[#1A1A2E]/80 leading-relaxed mb-6">
              {isFr
                ? "Dakhla Aménagement (SDAD) approvisionne ses clients du Sud marocain et de Mauritanie en ciment à prise rapide via son réseau de partenaires cimentiers européens. Disponible en sacs 5 kg (pour les petites réparations ponctuelles), 25 kg (pour les chantiers) et big bag 1T (pour les gros chantiers de rénovation). Délai de livraison indicatif : 5 à 10 jours ouvrés selon la zone. Pour un accompagnement technique complet (choix du type, dosage, mise en œuvre), demandez un devis gratuit — réponse sous 24h."
                : 'Dakhla Aménagement (SDAD) supplies its customers in Southern Morocco and Mauritania with rapid-set cement through its network of European cement partners. Available in 5 kg bags (for small spot repairs), 25 kg bags (for sites) and 1T big bag (for large renovation sites). Indicative delivery time: 5 to 10 business days depending on the area. For complete technical support (type choice, dosage, application), request a free quote — response within 24h.'}
            </p>
            <div className="bg-white border border-[#E5E7EB] rounded-xl p-6 my-6">
              <Link
                href={`/${locale}/prix-ciment`}
                className="inline-flex items-center gap-2 text-[#C1272D] font-medium hover:gap-3 transition-all"
              >
                {isFr ? '→ Comparer avec les prix du ciment Portland (CPJ 45, CPJ 55)' : '→ Compare with Portland cement prices (CPJ 45, CPJ 55)'}
              </Link>
            </div>

            <h3 className="text-2xl font-bold text-[#1B3A5C] mt-10 mb-4">
              {isFr ? 'Pourquoi choisir Dakhla Aménagement (SDAD) ?' : 'Why choose Dakhla Aménagement (SDAD)?'}
            </h3>
            <ul className="space-y-3 mb-6">
              {(isFr
                ? [
                    'Approvisionnement fiable via réseau de partenaires cimentiers prompt en Europe',
                    'Trois familles disponibles : ciment prompt naturel, ciment alumineux, mortiers R3-R4',
                    'Contrôle qualité systématique : temps de prise et résistance testés en laboratoire',
                    'Conseil technique projet : choix du type, dosage, mise en œuvre, sécurité',
                    'Conditionnements adaptés : sacs 5kg (dépannage), 25kg (chantier), big bag 1T',
                    'Livraison dans tout le Sud marocain (Dakhla, Laâyoune, Boujdour, Tan-Tan) et la Mauritanie',
                  ]
                : [
                    'Reliable supply via network of European prompt cement partners',
                    'Three families available: natural prompt cement, aluminous cement, R3-R4 mortars',
                    'Systematic quality control: setting time and strength tested in laboratory',
                    'Project technical advice: type choice, dosage, application, safety',
                    'Adapted packaging: 5kg bags (troubleshooting), 25kg bags (site), 1T big bag',
                    'Delivery across Southern Morocco (Dakhla, Laayoune, Boujdour, Tan-Tan) and Mauritania',
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
            {isFr ? 'Questions fréquentes sur le ciment à prise rapide' : 'Frequently asked questions about rapid-set cement'}
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
                {isFr ? 'Ciment Portland 45 MPa — béton armé courant. Dès 1 500 DH/T.' : 'Portland 45 MPa — standard concrete. From 1,500 DH/T.'}
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
                {isFr ? 'Ciment Portland haute résistance 55 MPa. Dès 1 600 DH/T.' : 'High-strength 55 MPa Portland. From 1,600 DH/T.'}
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
                {isFr ? 'Guide complet des tarifs 2026 — tous types.' : 'Complete 2026 price guide — all types.'}
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
                {isFr ? 'Ciment à prise rapide — réponse sous 24h.' : 'Rapid-set cement — response within 24h.'}
              </p>
              <span className="inline-flex items-center gap-1 text-sm font-medium text-[#C1272D] group-hover:gap-2 transition-all">
                {isFr ? 'Demander' : 'Request'} <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </Link>
          </div>
        </div>
      </section>

      <CtaBanner
        locale={locale}
        title={isFr ? 'Besoin de ciment à prise rapide au Maroc ?' : 'Need rapid-set cement in Morocco?'}
        subtitle={
          isFr
            ? 'Devis gratuit sous 24h. Ciment à prise rapide dès 15 DH/kg, prise en 5-15 min. Livraison sacs et big bag dans tout le Sud marocain et la Mauritanie.'
            : 'Free quote within 24h. Rapid-set cement from 15 DH/kg, setting in 5-15 min. Bags and big bag delivery across Southern Morocco and Mauritania.'
        }
        buttonText={isFr ? 'Demander un devis gratuit' : 'Request a free quote'}
      />
    </>
  );
}
