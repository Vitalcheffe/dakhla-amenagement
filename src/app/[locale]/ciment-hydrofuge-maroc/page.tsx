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
  Droplets,
  Waves,
  ShieldCheck,
  Home,
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
      path: '/ciment-hydrofuge-maroc',
      title: 'Waterproof Cement Morocco — Concrete Sealing | SDAD',
      description:
        'Waterproof cement in Morocco: concrete sealing, pools, basements, tanks. Waterproofing additives. Price and advice. Free quote.',
      keywords: [
        'waterproof cement Morocco',
        'ciment hydrofuge Maroc',
        'ciment étanche',
        'impermeable cement',
        'ciment piscine',
        'ciment sous-sol',
        'ciment réservoir',
        'additif imperméabilisant',
        ...KEYWORDS.products,
        ...KEYWORDS.pricing,
      ],
    });
  }

  return buildMetadata({
    locale: 'fr',
    path: '/ciment-hydrofuge-maroc',
    title: 'Ciment Hydrofuge Maroc — Étanchéité Béton | SDAD',
    description:
      "Ciment hydrofuge au Maroc : étanchéité béton, piscines, sous-sols, réservoirs. Additifs imperméabilisants. Prix et conseils. Devis gratuit.",
    keywords: [
      'ciment hydrofuge Maroc',
      'ciment étanche',
      'ciment imperméable',
      'ciment piscine',
      'ciment sous-sol',
      'ciment réservoir',
      'additif imperméabilisant',
      'prix ciment hydrofuge',
      ...KEYWORDS.products,
      ...KEYWORDS.pricing,
    ],
  });
}

export default async function CimentHydrofugeMarocPage({
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
          question: 'Quelle est la différence entre ciment hydrofugé et ciment classique ?',
          answer:
            "Un ciment hydrofugé (ou ciment étanche / ciment imperméable) contient des additifs imperméabilisants — généralement des composés à base de silicates, de métasilicates de sodium, d'hydrofuges de masse ou de latex polymère — qui remplissent les capillaires du béton et réduisent l'absorption d'eau de 70 à 90 %. Le ciment Portland classique (CPJ 45, CPJ 55) reste poreux une fois durci et laisse passer l'eau sous pression. Le ciment hydrofugé est donc indispensable pour les ouvrages enterrés, en contact avec le sol humide ou contenant de l'eau : piscines, sous-sols, réservoirs, fondations, canalisations.",
        },
        {
          question: 'Pour quels ouvrages le ciment hydrofugé est-il indispensable ?',
          answer:
            "Le ciment hydrofugé est indispensable pour tous les ouvrages soumis à une pression d'eau ou à une humidité permanente : piscines et bassins, sous-sols et caves enterrés, réservoirs d'eau potable ou industriels, fondations en presence de nappe phréatique, murs de soutènement, tunnels, parkings souterrains, dalles de sol en contact avec le sol humide, fosses septiques, regards, canalisations gravitaires. Pour les piscines, on l'associe systématiquement à un enduit d'imperméabilisation de surface.",
        },
        {
          question: 'Comment fonctionne un ciment hydrofuge ?',
          answer:
            "Le ciment hydrofugé agit par deux mécanismes complémentaires. (1) Action capillaire : les additifs imperméabilisants (silicates, métasilicates) réagissent avec la chaux libre du ciment pour former des gels insolubles qui obstruent les capillaires du béton. (2) Action hydrophobe : les hydrofuges de masse (acides gras, stéarates, résines) enrobent les parois des pores et repoussent l'eau par tension superficielle. Le résultat est un béton dont l'absorption d'eau par capillarité est réduite de 70 à 90 %, tout en conservant la résistance mécanique et la perméabilité à la vapeur d'eau (le béton continue à « respirer »).",
        },
        {
          question: 'Quel est le prix du ciment hydrofugé au Maroc ?',
          answer:
            "Le ciment hydrofugé coûte environ 10 à 20 % de plus qu'un ciment Portland classique en raison des additifs imperméabilisants. Comptez environ 1 700-1 800 DH/T en vrac (CPJ 45 hydrofugé), 90-100 DH le sac de 50 kg. Pour les petits chantiers, on peut aussi acheter un additif imperméabilisant liquide à ajouter à un ciment Portland classique : environ 80-150 DH le litre (dosage 1-2 L/m³ de béton). Demandez un devis gratuit à Dakhla Aménagement pour un tarif précis selon votre projet et votre volume.",
        },
        {
          question: 'Peut-on rendre n\'importe quel ciment hydrofuge ?',
          answer:
            "Oui, c'est même la solution la plus économique pour les petits chantiers : on ajoute un adjuvant imperméabilisant liquide (hydrofuge de masse) à un ciment Portland classique (CPJ 45 ou CPJ 55) lors du gâchage. Dosage typique : 1 à 2 litres d'adjuvant par m³ de béton, ou 0,5 à 1 % du poids de ciment. Pour les gros chantiers ou les ouvrages très sollicités (piscines, réservoirs), il est préférable d'utiliser un ciment pré-hydrofugé en usine pour garantir une dispersion homogène des additifs. Dans tous les cas, l'étanchéité dépend aussi du dosage en ciment (≥ 350 kg/m³), du ratio E/C (≤ 0,5) et de la qualité du serrage.",
        },
      ]
    : [
        {
          question: 'What is the difference between waterproof cement and standard cement?',
          answer:
            'A waterproof cement (or watertight/impermeable cement) contains waterproofing additives — generally compounds based on silicates, sodium metasilicates, mass water-repellents or polymer latex — that fill the concrete capillaries and reduce water absorption by 70 to 90%. Standard Portland cement (CPJ 45, CPJ 55) remains porous once hardened and lets water through under pressure. Waterproof cement is therefore essential for buried structures, in contact with wet soil or containing water: pools, basements, tanks, foundations, pipes.',
        },
        {
          question: 'What structures is waterproof cement essential for?',
          answer:
            'Waterproof cement is essential for all structures subjected to water pressure or permanent humidity: swimming pools and basins, basements and buried cellars, drinking water or industrial tanks, foundations in the presence of water table, retaining walls, tunnels, underground parking, floor slabs in contact with wet soil, septic tanks, manholes, gravity pipes. For pools, it is systematically combined with a surface waterproofing render.',
        },
        {
          question: 'How does waterproof cement work?',
          answer:
            'Waterproof cement works through two complementary mechanisms. (1) Capillary action: waterproofing additives (silicates, metasilicates) react with the free lime in the cement to form insoluble gels that block the concrete capillaries. (2) Hydrophobic action: mass water-repellents (fatty acids, stearates, resins) coat the pore walls and repel water by surface tension. The result is a concrete whose capillary water absorption is reduced by 70 to 90%, while retaining mechanical strength and water vapor permeability (the concrete continues to "breathe").',
        },
        {
          question: 'What is the price of waterproof cement in Morocco?',
          answer:
            'Waterproof cement costs about 10 to 20% more than standard Portland cement due to waterproofing additives. Expect about 1,700-1,800 DH/T in bulk (waterproofed CPJ 45), 90-100 DH per 50 kg bag. For small sites, you can also buy a liquid waterproofing additive to add to a standard Portland cement: about 80-150 DH per liter (dosage 1-2 L/m³ of concrete). Request a free quote from Dakhla Aménagement for an accurate price based on your project and volume.',
        },
        {
          question: 'Can any cement be made waterproof?',
          answer:
            'Yes, this is even the most economical solution for small sites: a liquid waterproofing admixture (mass water-repellent) is added to a standard Portland cement (CPJ 45 or CPJ 55) during mixing. Typical dosage: 1 to 2 liters of admixture per m³ of concrete, or 0.5 to 1% of cement weight. For large sites or highly stressed structures (pools, tanks), it is preferable to use a factory pre-waterproofed cement to guarantee homogeneous dispersion of additives. In all cases, waterproofing also depends on cement dosage (≥ 350 kg/m³), W/C ratio (≤ 0.5) and compaction quality.',
        },
      ];

  const comparison = isFr
    ? [
        { prop: 'Composition', hydro: 'Ciment Portland + additifs imperméabilisants', standard: 'Ciment Portland pur' },
        { prop: 'Absorption d\'eau (capillarité)', hydro: '−70 à −90 %', standard: 'Référence (porosité naturelle)' },
        { prop: 'Résistance mécanique', hydro: 'Identique (42,5-55 MPa)', standard: '42,5-55 MPa' },
        { prop: 'Perméabilité à la vapeur d\'eau', hydro: 'Conservée (béton respire)', standard: 'Oui' },
        { prop: 'Surcoût vs ciment classique', hydro: '+ 10 à + 20 %', standard: 'Référence' },
        { prop: 'Usage recommandé', hydro: 'Piscines, sous-sols, réservoirs, fondations', standard: 'Béton armé courant hors eau' },
      ]
    : [
        { prop: 'Composition', hydro: 'Portland cement + waterproofing additives', standard: 'Pure Portland cement' },
        { prop: 'Water absorption (capillarity)', hydro: '−70 to −90%', standard: 'Reference (natural porosity)' },
        { prop: 'Mechanical strength', hydro: 'Identical (42.5-55 MPa)', standard: '42.5-55 MPa' },
        { prop: 'Water vapor permeability', hydro: 'Retained (concrete breathes)', standard: 'Yes' },
        { prop: 'Surcharge vs standard cement', hydro: '+10 to +20%', standard: 'Reference' },
        { prop: 'Recommended use', hydro: 'Pools, basements, tanks, foundations', standard: 'Standard reinforced concrete out of water' },
      ];

  const applications = isFr
    ? [
        {
          icon: Waves,
          title: 'Piscines et bassins',
          desc: 'Béton de piscine, bassins, fontaines, jacuzzis. Étanchéité par masse et surface.',
        },
        {
          icon: Home,
          title: 'Sous-sols et caves',
          desc: 'Murs enterrés, dalles de fondation, caves, parkings souterrains.',
        },
        {
          icon: Droplets,
          title: 'Réservoirs et cuves',
          desc: 'Réservoirs d\'eau potable, industrieels, fosses septiques, regards.',
        },
        {
          icon: ShieldCheck,
          title: 'Fondations humides',
          desc: 'Semelles, radiers, murs de soutènement en présence de nappe phréatique.',
        },
      ]
    : [
        {
          icon: Waves,
          title: 'Pools and basins',
          desc: 'Pool concrete, basins, fountains, jacuzzis. Mass and surface waterproofing.',
        },
        {
          icon: Home,
          title: 'Basements and cellars',
          desc: 'Buried walls, foundation slabs, cellars, underground parking.',
        },
        {
          icon: Droplets,
          title: 'Tanks and vessels',
          desc: 'Drinking water tanks, industrial tanks, septic tanks, manholes.',
        },
        {
          icon: ShieldCheck,
          title: 'Wet foundations',
          desc: 'Footings, rafts, retaining walls in the presence of water table.',
        },
      ];

  const features = isFr
    ? [
        { icon: Factory, title: 'Production locale', desc: 'Centre de broyage Dakhla — ciment hydrofugé disponible sur commande' },
        { icon: Beaker, title: 'Additifs certifiés', desc: 'Adjuvants imperméabilisants conformes NF EN 934-2' },
        { icon: Truck, title: 'Livraison Sud Maroc', desc: 'Vrac, sacs 50kg, big bag — Dakhla, Laâyoune, Boujdour, Mauritanie' },
        { icon: ShieldCheck, title: 'Conseil projet', desc: 'Choix du dosage, du ratio E/C, des enduits complémentaires' },
      ]
    : [
        { icon: Factory, title: 'Local production', desc: 'Dakhla grinding plant — waterproof cement available on order' },
        { icon: Beaker, title: 'Certified additives', desc: 'Waterproofing admixtures compliant with NF EN 934-2' },
        { icon: Truck, title: 'Southern Morocco delivery', desc: 'Bulk, 50kg bags, big bag — Dakhla, Laayoune, Boujdour, Mauritania' },
        { icon: ShieldCheck, title: 'Project advice', desc: 'Dosage choice, W/C ratio, complementary renders' },
      ];

  const schemas = [
    webPageSchema({
      name: isFr ? 'Ciment Hydrofuge Maroc — Étanchéité Béton' : 'Waterproof Cement Morocco — Concrete Sealing',
      description: isFr
        ? "Ciment hydrofuge au Maroc : étanchéité béton, piscines, sous-sols, réservoirs. Additifs imperméabilisants. Prix dès 90 DH/sac. Centre de broyage Dakhla."
        : 'Waterproof cement in Morocco: concrete sealing, pools, basements, tanks. Waterproofing additives. Price from 90 DH/bag. Dakhla grinding plant.',
      path: '/ciment-hydrofuge-maroc',
      locale: loc,
    }),
    breadcrumbSchema(
      [{ name: isFr ? 'Ciment Hydrofuge Maroc' : 'Waterproof Cement Morocco', path: '/ciment-hydrofuge-maroc' }],
      loc,
    ),
    serviceSchema({
      name: isFr ? 'Ciment Hydrofuge Maroc — Fourniture et Conseil' : 'Waterproof Cement Morocco — Supply & Advice',
      description: isFr
        ? "Fourniture et livraison de ciment hydrofugé au Maroc. Vrac, sacs 50kg, big bag. Pour piscines, sous-sols, réservoirs, fondations."
        : 'Supply and delivery of waterproof cement in Morocco. Bulk, 50kg bags, big bag. For pools, basements, tanks, foundations.',
      path: '/ciment-hydrofuge-maroc',
      locale: loc,
      serviceType: 'Waterproof cement supply and technical advisory',
    }),
    faqSchema(faqItems),
    speakableSchema({
      path: '/ciment-hydrofuge-maroc',
      locale: loc,
      cssSelectors: ['h1', '.hero-title', '.product-price', '.faq-question'],
    }),
  ];

  return (
    <>
      <JsonLdScript schema={schemas} />
      <Breadcrumbs
        items={[{ name: isFr ? 'Ciment Hydrofuge Maroc' : 'Waterproof Cement Morocco', path: '/ciment-hydrofuge-maroc' }]}
        locale={locale}
      />

      {/* Hero */}
      <section className="bg-gradient-to-br from-[#1B3A5C] to-[#0f1f33] text-white py-20 md:py-28">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <div className="max-w-4xl">
            <span className="inline-block px-4 py-1.5 bg-[#E8B84B]/20 text-[#E8B84B] text-sm font-medium rounded-full mb-6">
              {isFr ? 'Ciment hydrofuge — Étanchéité béton' : 'Waterproof cement — Concrete sealing'}
            </span>
            <h1 className="text-[clamp(2rem,5vw,3.5rem)] font-bold leading-[1.1] mb-6">
              {isFr
                ? 'Ciment Hydrofuge Maroc — Étanchéité Béton'
                : 'Waterproof Cement Morocco — Concrete Sealing'}
            </h1>
            <p className="text-lg md:text-xl text-white/80 leading-relaxed mb-8 max-w-3xl">
              {isFr
                ? "Le ciment hydrofugé est un ciment Portland additionné d'adjuvants imperméabilisants qui réduisent l'absorption d'eau de 70 à 90 %. Indispensable pour les piscines, sous-sols, réservoirs, fondations en présence de nappe phréatique. Dakhla Aménagement (SDAD) fournit le ciment hydrofugé et les additifs imperméabilisants au Maroc et en Mauritanie. Devis gratuit sous 24h."
                : 'Waterproof cement is a Portland cement with waterproofing admixtures that reduce water absorption by 70 to 90%. Essential for pools, basements, tanks, foundations in the presence of water table. Dakhla Aménagement (SDAD) supplies waterproof cement and waterproofing additives in Morocco and Mauritania. Free quote within 24h.'}
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

      {/* Long-form — what is waterproof cement */}
      <section className="py-16 md:py-24 bg-[#F7F8FA]">
        <div className="max-w-4xl mx-auto px-6 md:px-12">
          <div className="prose prose-lg max-w-none">
            <h2 className="text-3xl font-bold text-[#1B3A5C] mb-6">
              {isFr ? 'Qu\'est-ce que le ciment hydrofuge ?' : 'What is waterproof cement?'}
            </h2>
            <p className="text-[#1A1A2E]/80 leading-relaxed mb-6">
              {isFr
                ? "Le ciment hydrofugé — aussi appelé ciment étanche ou ciment imperméable — est un ciment Portland (CPJ 45 ou CPJ 55) additionné d'adjuvants imperméabilisants qui obstruent les capillaires du béton et réduisent son absorption d'eau de 70 à 90 %. Cette propriété est cruciale pour tous les ouvrages en contact permanent ou occasionnel avec l'eau : piscines, sous-sols, réservoirs, fondations, tunnels, canalisations. Sans ciment hydrofugé, le béton classique laisse passer l'eau par capillarité et par perméabilité sous pression, entraînant infiltrations, moisissures, corrosion des armatures et dégradation du gros œuvre."
                : 'Waterproof cement — also called watertight or impermeable cement — is a Portland cement (CPJ 45 or CPJ 55) with waterproofing admixtures that block the concrete capillaries and reduce its water absorption by 70 to 90%. This property is crucial for all structures in permanent or occasional contact with water: pools, basements, tanks, foundations, tunnels, pipes. Without waterproof cement, standard concrete lets water through by capillarity and permeability under pressure, causing infiltration, mold, rebar corrosion and structural degradation.'}
            </p>
            <p className="text-[#1A1A2E]/80 leading-relaxed mb-6">
              {isFr
                ? "Le ciment hydrofugé conserve toutes les propriétés mécaniques du ciment Portland (résistance à la compression 42,5-55 MPa, durabilité, mise en œuvre) tout en ajoutant l'étanchéité. Sa perméabilité à la vapeur d'eau est conservée : le béton « respire », ce qui évite la condensation interne et les pathologies de désordre. Le surcoût par rapport à un ciment classique est limité (10 à 20 %) et largement compensé par l'économie sur les travaux d'étanchéité complémentaires et la pérennité de l'ouvrage."
                : 'Waterproof cement retains all the mechanical properties of Portland cement (compressive strength 42.5-55 MPa, durability, workability) while adding waterproofing. Its water vapor permeability is retained: the concrete "breathes", avoiding internal condensation and disorder pathologies. The surcharge compared to standard cement is limited (10 to 20%) and largely offset by savings on complementary waterproofing works and structure durability.'}
            </p>

            <h3 className="text-2xl font-bold text-[#1B3A5C] mt-10 mb-4">
              {isFr ? 'Comment fonctionne le ciment hydrofuge ?' : 'How does waterproof cement work?'}
            </h3>
            <p className="text-[#1A1A2E]/80 leading-relaxed mb-6">
              {isFr
                ? "Le ciment hydrofugé agit par deux mécanismes complémentaires intégrés à la masse du béton : (1) action capillaire — les additifs imperméabilisants (silicates, métasilicates de sodium) réagissent avec la chaux libre Ca(OH)₂ libérée par l'hydratation du clinker pour former des gels de silicate de calcium insolubles qui obstruent les capillaires ; (2) action hydrophobe — les hydrofuges de masse (acides gras, stéarates, résines polymère) enrobent les parois des pores et créent un effet lotus qui repousse l'eau par tension superficielle. L'eau perle à la surface sans pénétrer, même sous faible pression."
                : 'Waterproof cement works through two complementary mechanisms integrated into the concrete mass: (1) capillary action — waterproofing additives (silicates, sodium metasilicates) react with the free lime Ca(OH)₂ released by clinker hydration to form insoluble calcium silicate gels that block capillaries; (2) hydrophobic action — mass water-repellents (fatty acids, stearates, polymer resins) coat the pore walls and create a lotus effect that repels water by surface tension. Water beads on the surface without penetrating, even under low pressure.'}
            </p>
            <p className="text-[#1A1A2E]/80 leading-relaxed mb-6">
              {isFr
                ? "Pour une étanchéité optimale, le ciment hydrofugé doit être associé à une formulation de béton soignée : dosage en ciment ≥ 350 kg/m³, ratio E/C (eau/ciment) ≤ 0,5, serrage soigné (vibration), cure prolongée 7 jours minimum. Pour les ouvrages très sollicités (piscines, réservoirs sous pression), on ajoute systématiquement un enduit d'imperméabilisation de surface en deux couches (micro-mortier hydrofuge). Le ciment hydrofugé garantit une étanchéité de masse qui reste efficace même en cas de microfissuration du béton."
                : 'For optimal waterproofing, waterproof cement must be combined with a careful concrete formulation: cement dosage ≥ 350 kg/m³, W/C (water/cement) ratio ≤ 0.5, careful compaction (vibration), prolonged curing 7 days minimum. For highly stressed structures (pools, pressurized tanks), a two-coat surface waterproofing render (waterproof micro-mortar) is systematically added. Waterproof cement guarantees mass waterproofing that remains effective even in case of concrete microcracking.'}
            </p>

            <h3 className="text-2xl font-bold text-[#1B3A5C] mt-10 mb-4">
              {isFr ? 'Ciment hydrofugé vs ciment classique' : 'Waterproof cement vs standard cement'}
            </h3>
            <div className="overflow-x-auto my-6">
              <table className="w-full border-collapse bg-white rounded-xl overflow-hidden shadow-sm">
                <thead>
                  <tr className="bg-[#1B3A5C] text-white">
                    <th className="text-left py-3.5 px-5 font-semibold">{isFr ? 'Caractéristique' : 'Characteristic'}</th>
                    <th className="text-left py-3.5 px-5 font-semibold">{isFr ? 'Ciment hydrofugé' : 'Waterproof cement'}</th>
                    <th className="text-left py-3.5 px-5 font-semibold">{isFr ? 'Ciment classique' : 'Standard cement'}</th>
                  </tr>
                </thead>
                <tbody>
                  {comparison.map((row, i) => (
                    <tr key={i} className="border-b border-[#E5E7EB] last:border-0 hover:bg-[#F7F8FA] transition-colors">
                      <td className="py-3 px-5 text-[#6B7280] font-medium">{row.prop}</td>
                      <td className="py-3 px-5 text-[#1A1A2E] font-semibold">{row.hydro}</td>
                      <td className="py-3 px-5 text-[#1A1A2E]">{row.standard}</td>
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
            {isFr ? 'Applications du ciment hydrofugé' : 'Applications of waterproof cement'}
          </h2>
          <p className="text-center text-[#6B7280] mb-12 max-w-2xl mx-auto">
            {isFr
              ? "Partout où le béton est en contact avec l'eau : le ciment hydrofugé est la première barrière d'étanchéité."
              : 'Wherever concrete is in contact with water: waterproof cement is the first sealing barrier.'}
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
              {isFr ? 'Prix et conseils d\'application' : 'Price and application advice'}
            </h2>
            <p className="text-[#1A1A2E]/80 leading-relaxed mb-6">
              {isFr
                ? "Le ciment hydrofugé coûte environ 10 à 20 % de plus qu'un ciment Portland classique, en raison des additifs imperméabilisants intégrés. Chez Dakhla Aménagement, le CPJ 45 hydrofugé démarre à 1 700 DH/T en vrac, 90 DH le sac de 50 kg et 1 780 DH/T en big bag 1T. Le CPJ 55 hydrofugé démarre à 1 800 DH/T en vrac, 95 DH le sac et 1 880 DH/T en big bag. Pour les petits chantiers, on peut aussi acheter un adjuvant imperméabilisant liquide (80-150 DH/L, dosage 1-2 L/m³) à ajouter à un ciment Portland classique. Tarifs dégressifs selon le volume — devis gratuit sous 24h."
                : 'Waterproof cement costs about 10 to 20% more than standard Portland cement, due to integrated waterproofing additives. At Dakhla Aménagement, waterproofed CPJ 45 starts at 1,700 DH/T in bulk, 90 DH per 50 kg bag and 1,780 DH/T in 1T big bag. Waterproofed CPJ 55 starts at 1,800 DH/T in bulk, 95 DH per bag and 1,880 DH/T in big bag. For small sites, you can also buy a liquid waterproofing admixture (80-150 DH/L, dosage 1-2 L/m³) to add to a standard Portland cement. Volume-degressive prices — free quote within 24h.'}
            </p>
            <p className="text-[#1A1A2E]/80 leading-relaxed mb-6">
              {isFr
                ? "Conseils d'application : (1) respectez un dosage en ciment ≥ 350 kg/m³ (piscines : 400 kg/m³) ; (2) maintenez le ratio E/C ≤ 0,5 — l'excès d'eau ruine l'étanchéité ; (3) vibrez soigneusement le béton frais pour éliminer les poches d'air ; (4) curez 7 jours minimum pour une hydratation complète ; (5) pour les ouvrages sous pression (piscines, réservoirs), appliquez en plus un enduit d'imperméabilisation de surface en deux couches ; (6) vérifiez l'absence de retrait différentiel (joints de dilatation). Pour un accompagnement technique complet, contactez notre équipe."
                : 'Application advice: (1) respect a cement dosage ≥ 350 kg/m³ (pools: 400 kg/m³); (2) maintain W/C ratio ≤ 0.5 — excess water ruins waterproofing; (3) carefully vibrate fresh concrete to eliminate air pockets; (4) cure 7 days minimum for complete hydration; (5) for pressurized structures (pools, tanks), also apply a two-coat surface waterproofing render; (6) check the absence of differential shrinkage (expansion joints). For complete technical support, contact our team.'}
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
                    'Production locale à Dakhla — ciment hydrofugé disponible sur commande',
                    'Adjuvants imperméabilisants certifiés conformes NF EN 934-2',
                    'Contrôle qualité systématique : absorption capillaire testée en laboratoire',
                    'Conseil technique projet : dosage, ratio E/C, enduits complémentaires, plan de cure',
                    'Trois conditionnements : vrac (≥30T), sacs 50kg (palette 1T), big bag 1T',
                    'Livraison dans tout le Sud marocain (Dakhla, Laâyoune, Boujdour, Tan-Tan) et la Mauritanie',
                  ]
                : [
                    'Local production in Dakhla — waterproof cement available on order',
                    'Waterproofing admixtures certified compliant with NF EN 934-2',
                    'Systematic quality control: capillary absorption tested in laboratory',
                    'Project technical advice: dosage, W/C ratio, complementary renders, curing plan',
                    'Three packaging options: bulk (≥30T), 50kg bags (1T pallet), 1T big bag',
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
            {isFr ? 'Questions fréquentes sur le ciment hydrofuge' : 'Frequently asked questions about waterproof cement'}
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
                {isFr ? 'Ciment hydrofugé — réponse sous 24h.' : 'Waterproof cement — response within 24h.'}
              </p>
              <span className="inline-flex items-center gap-1 text-sm font-medium text-[#C1272D] group-hover:gap-2 transition-all">
                {isFr ? 'Demander' : 'Request'} <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </Link>
          </div>
        </div>
      </section>

      <RelatedArticles
        articleSlugs={['ciment-etancheite', 'ciment-pour-piscine', 'construction-zone-cotiere']}
        locale={locale}
      />
      <CtaBanner
        locale={locale}
        title={isFr ? 'Besoin de ciment hydrofugé au Maroc ?' : 'Need waterproof cement in Morocco?'}
        subtitle={
          isFr
            ? 'Devis gratuit sous 24h. Ciment hydrofugé dès 1 700 DH/T. Livraison vrac, sacs et big bag dans tout le Sud marocain et la Mauritanie.'
            : 'Free quote within 24h. Waterproof cement from 1,700 DH/T. Bulk, bags and big bag delivery across Southern Morocco and Mauritania.'
        }
        buttonText={isFr ? 'Demander un devis gratuit' : 'Request a free quote'}
      />
    </>
  );
}
