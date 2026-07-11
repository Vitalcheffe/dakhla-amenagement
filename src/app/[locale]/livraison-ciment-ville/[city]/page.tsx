import Link from 'next/link';
import { buildMetadata, KEYWORDS, SITE } from '@/lib/seo';
import { webPageSchema, breadcrumbSchema, serviceSchema, faqSchema } from '@/lib/structured-data';
import { JsonLdScript } from '@/components/shared/JsonLd';
import { Breadcrumbs } from '@/components/shared/Breadcrumbs';
import { CtaBanner } from '@/components/shared/RelatedLinks';
import { MOROCCAN_CITIES, getCity } from '@/lib/moroccan-cities';
import { CheckCircle, MapPin, Truck, Clock, Factory, ArrowRight, Package } from 'lucide-react';

export function generateStaticParams() {
  return SITE.locales.flatMap((locale) =>
    MOROCCAN_CITIES.map((city) => ({ locale, city: city.slug })),
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; city: string }>;
}) {
  const { locale, city } = await params;
  const loc: 'fr' | 'en' = locale === 'en' ? 'en' : 'fr';
  const cityData = getCity(city);
  if (!cityData) return buildMetadata({ locale: loc, path: '', title: 'Not Found', description: '', noIndex: true });

  const cityName = loc === 'fr' ? cityData.name : cityData.nameEn;

  return buildMetadata({
    locale: loc,
    path: `/livraison-ciment-ville/${city}`,
    title: loc === 'fr'
      ? `Livraison Ciment ${cityName} — Délai ${cityData.deliveryDelay} | DAM`
      : `Cement Delivery ${cityName} — ${cityData.deliveryDelay} Lead Time | DAM`,
    description: loc === 'fr'
      ? `Livraison de ciment CPJ 45 et CPJ 55 à ${cityName}, ${cityData.region}. Délai ${cityData.deliveryDelay}, distance ${cityData.distanceFromDakhla} km depuis Dakhla. Vrac, sacs, big bag. Devis gratuit.`
      : `CPJ 45 and CPJ 55 cement delivery to ${cityName}, ${cityData.regionEn}. ${cityData.deliveryDelay} lead time, ${cityData.distanceFromDakhla} km from Dakhla. Bulk, bags, big bag. Free quote.`,
    keywords: [`livraison ciment ${cityName}`, `livraison ciment ${cityData.region}`, `ciment livré ${cityName}`, ...KEYWORDS.pricing, ...KEYWORDS.core],
  });
}

export default async function LivraisonCimentVillePage({
  params,
}: {
  params: Promise<{ locale: string; city: string }>;
}) {
  const { locale, city } = await params;
  const loc: 'fr' | 'en' = locale === 'en' ? 'en' : 'fr';
  const cityData = getCity(city);
  if (!cityData) return null;

  const isFr = loc === 'fr';
  const cityName = isFr ? cityData.name : cityData.nameEn;
  const region = isFr ? cityData.region : cityData.regionEn;

  const faqItems = [
    {
      question: isFr ? `Quel est le délai de livraison du ciment à ${cityName} ?` : `What is the cement delivery delay to ${cityName}?`,
      answer: isFr
        ? `Le délai de livraison vers ${cityName} (${region}) est de ${cityData.deliveryDelay} depuis notre centre de broyage à Dakhla, distant de ${cityData.distanceFromDakhla} km. Les commandes confirmées avant 12h sont expédiées le jour même.`
        : `Delivery delay to ${cityName} (${region}) is ${cityData.deliveryDelay} from our Dakhla grinding plant, ${cityData.distanceFromDakhla} km away. Orders confirmed before 12:00 are shipped the same day.`,
    },
    {
      question: isFr ? `Comment se passe la livraison de ciment à ${cityName} ?` : `How does cement delivery to ${cityName} work?`,
      answer: isFr
        ? `Pour ${cityName}, nous livrons en camion-citerne (vrac 25-30T avec tuyau de déchargement), en plateau avec palettes de sacs 50kg (1,5T/palette), ou en camion big bag (1T/unité). Le chauffeur assure le déchargement sur chantier selon vos consignes.`
        : `For ${cityName}, we deliver via tanker truck (bulk 25-30T with discharge pipe), flatbed with 50kg bag pallets (1.5T/pallet), or big bag truck (1T/unit). The driver handles on-site unloading per your instructions.`,
    },
    {
      question: isFr ? `Quelle quantité minimum pour livrer à ${cityName} ?` : `What is the minimum order quantity for delivery to ${cityName}?`,
      answer: isFr
        ? `La quantité minimum est de 1 palette (1,5T en sacs) ou 1 big bag (1T) pour ${cityName}. Pour le vrac, le minimum est de 10T. Les commandes groupées bénéficient d'un tarif de transport optimisé sur la distance Dakhla-${cityName} (${cityData.distanceFromDakhla} km).`
        : `The minimum quantity is 1 pallet (1.5T bags) or 1 big bag (1T) for ${cityName}. For bulk, the minimum is 10T. Grouped orders benefit from optimized transport pricing on the Dakhla-${cityName} distance (${cityData.distanceFromDakhla} km).`,
    },
    {
      question: isFr ? `La livraison à ${cityName} est-elle possible pour les chantiers en zone difficile ?` : `Is delivery to ${cityName} possible for sites in difficult areas?`,
      answer: isFr
        ? `Oui, nous livrons à ${cityName} et sa région (${region}) y compris les chantiers en zone difficile. Précisez l'accessibilité (pente, terrain, restrictions) lors du devis : nous adaptons le camion et le mode de déchargement (big bag grue pour les sites non accessibles aux citernes).`
        : `Yes, we deliver to ${cityName} and its region (${region}) including sites in difficult areas. Specify accessibility (slope, terrain, restrictions) when requesting a quote: we adapt the truck and unloading method (crane big bag for sites inaccessible to tankers).`,
    },
  ];

  const schemas = [
    webPageSchema({
      name: isFr ? `Livraison Ciment ${cityName} — Dakhla Aménagement` : `Cement Delivery ${cityName} — Dakhla Aménagement`,
      description: isFr
        ? `Livraison de ciment CPJ 45 et CPJ 55 à ${cityName}, ${region}. Délai ${cityData.deliveryDelay}.`
        : `CPJ 45 and CPJ 55 cement delivery to ${cityName}, ${region}. ${cityData.deliveryDelay} lead time.`,
      path: `/livraison-ciment-ville/${city}`,
      locale: loc,
    }),
    breadcrumbSchema([{ name: `${isFr ? 'Livraison Ciment' : 'Cement Delivery'} ${cityName}`, path: `/livraison-ciment-ville/${city}` }], loc),
    serviceSchema({
      name: isFr ? `Livraison Ciment ${cityName}` : `Cement Delivery ${cityName}`,
      description: isFr ? `Livraison de ciment à ${cityName}` : `Cement delivery to ${cityName}`,
      path: `/livraison-ciment-ville/${city}`,
      locale: loc,
    }),
    faqSchema(faqItems),
  ];

  const features = isFr
    ? [
        { icon: Clock, title: 'Délai', desc: `${cityData.deliveryDelay} vers ${cityName}` },
        { icon: MapPin, title: 'Distance', desc: `${cityData.distanceFromDakhla} km depuis Dakhla` },
        { icon: Truck, title: 'Flotte Adaptée', desc: 'Citernes, plateaux, big bag' },
        { icon: CheckCircle, title: 'Zone Desservie', desc: `${cityName}, ${region}` },
      ]
    : [
        { icon: Clock, title: 'Lead Time', desc: `${cityData.deliveryDelay} to ${cityName}` },
        { icon: MapPin, title: 'Distance', desc: `${cityData.distanceFromDakhla} km from Dakhla` },
        { icon: Truck, title: 'Adapted Fleet', desc: 'Tankers, flatbeds, big bag' },
        { icon: CheckCircle, title: 'Service Area', desc: `${cityName}, ${region}` },
      ];

  const deliveryOptions = [
    {
      icon: Truck,
      name: isFr ? 'Vrac' : 'Bulk',
      vehicle: isFr ? 'Camion-citerne 25-30T' : 'Tanker truck 25-30T',
      desc: isFr
        ? `Idéal pour les chantiers de ${cityName} équipés d'un silo. Déchargement par tuyau jusqu'à 30m. Le plus économique sur longue distance.`
        : `Ideal for ${cityName} sites equipped with a silo. Discharge via pipe up to 30m. Most economical over long distance.`,
    },
    {
      icon: Package,
      name: isFr ? 'Sacs 50kg' : '50kg bags',
      vehicle: isFr ? 'Plateau palette 1,5T' : 'Flatbed pallet 1.5T',
      desc: isFr
        ? `Manipulation manuelle, stockage facile. Adapté aux petits chantiers de ${cityName} et aux livraisons fractionnées.`
        : `Manual handling, easy storage. Suited for small ${cityName} sites and split deliveries.`,
    },
    {
      icon: Factory,
      name: isFr ? 'Big bag 1T' : 'Big bag 1T',
      vehicle: isFr ? 'Camion grue' : 'Crane truck',
      desc: isFr
        ? `Compromis vrac/sacs pour ${cityName}. Manutention grue, accès chantiers difficiles. Conditionnement étanche.`
        : `Compromise bulk/bags for ${cityName}. Crane handling, access to difficult sites. Sealed packaging.`,
    },
  ];

  return (
    <>
      <JsonLdScript schema={schemas} />
      <Breadcrumbs items={[{ name: `${isFr ? 'Livraison Ciment' : 'Cement Delivery'} ${cityName}`, path: `/livraison-ciment-ville/${city}` }]} locale={locale} />

      {/* Hero */}
      <section className="bg-gradient-to-br from-[#1B3A5C] to-[#0f1f33] text-white py-20 md:py-28">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <span className="inline-block px-4 py-1.5 bg-[#E8B84B]/20 text-[#E8B84B] text-sm font-medium rounded-full mb-6">
            {isFr ? `Livraison — ${region}` : `Delivery — ${region}`}
          </span>
          <h1 className="text-[clamp(2rem,5vw,3.5rem)] font-bold leading-[1.1] mb-6">
            {isFr ? `Livraison de Ciment à ${cityName}` : `Cement Delivery to ${cityName}`}
          </h1>
          <p className="text-lg md:text-xl text-white/80 leading-relaxed mb-8 max-w-3xl">
            {isFr
              ? `Livraison de ciment CPJ 45 et CPJ 55 à ${cityName}, ${region}. Délai ${cityData.deliveryDelay}, distance ${cityData.distanceFromDakhla} km depuis Dakhla. Vrac, sacs 50kg, big bag 1T. Devis gratuit.`
              : `CPJ 45 and CPJ 55 cement delivery to ${cityName}, ${region}. ${cityData.deliveryDelay} lead time, ${cityData.distanceFromDakhla} km from Dakhla. Bulk, 50kg bags, 1T big bag. Free quote.`}
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href={`/${locale}/devis`} className="inline-flex items-center gap-2 px-6 py-3 bg-[#C1272D] text-white font-semibold rounded-full hover:bg-[#C1272D]/90 transition-colors">
              {isFr ? 'Demander un devis' : 'Request a quote'} <ArrowRight className="w-4 h-4" />
            </Link>
            <Link href={`/${locale}/prix-ciment-ville/${city}`} className="inline-flex items-center gap-2 px-6 py-3 border border-white/30 text-white font-semibold rounded-full hover:bg-white/10 transition-colors">
              {isFr ? 'Voir les prix' : 'View prices'}
            </Link>
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

      {/* Delivery Info Card */}
      <section className="py-16 md:py-24 bg-[#F7F8FA]">
        <div className="max-w-[1100px] mx-auto px-6 md:px-12">
          <h2 className="text-3xl font-bold text-[#1B3A5C] mb-12 text-center">
            {isFr ? `Livraison de ciment à ${cityName} : les informations clés` : `Cement delivery to ${cityName}: key information`}
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-12">
            <div className="bg-white border border-[#E5E7EB] rounded-2xl p-6 text-center">
              <MapPin className="w-8 h-8 text-[#C1272D] mx-auto mb-3" />
              <div className="text-3xl font-bold text-[#1B3A5C]">{cityData.distanceFromDakhla} km</div>
              <p className="text-sm text-[#6B7280] mt-2">{isFr ? `Distance Dakhla → ${cityName}` : `Dakhla → ${cityName} distance`}</p>
            </div>
            <div className="bg-white border border-[#E5E7EB] rounded-2xl p-6 text-center">
              <Clock className="w-8 h-8 text-[#C1272D] mx-auto mb-3" />
              <div className="text-3xl font-bold text-[#1B3A5C]">{cityData.deliveryDelay}</div>
              <p className="text-sm text-[#6B7280] mt-2">{isFr ? 'Délai de livraison' : 'Delivery lead time'}</p>
            </div>
            <div className="bg-white border border-[#E5E7EB] rounded-2xl p-6 text-center">
              <Truck className="w-8 h-8 text-[#C1272D] mx-auto mb-3" />
              <div className="text-3xl font-bold text-[#1B3A5C]">3</div>
              <p className="text-sm text-[#6B7280] mt-2">{isFr ? 'Modes de conditionnement' : 'Packaging modes'}</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {deliveryOptions.map((opt, i) => (
              <div key={i} className="bg-white border border-[#E5E7EB] rounded-2xl p-6">
                <div className="w-11 h-11 rounded-full bg-[#E8B84B]/15 flex items-center justify-center mb-4">
                  <opt.icon className="w-5 h-5 text-[#E8B84B]" />
                </div>
                <h3 className="font-bold text-[#1B3A5C] mb-1">{opt.name}</h3>
                <p className="text-xs font-medium text-[#C1272D] uppercase tracking-wide mb-3">{opt.vehicle}</p>
                <p className="text-sm text-[#6B7280] leading-relaxed">{opt.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Logistics SEO Content */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6 md:px-12">
          <h2 className="text-2xl md:text-3xl font-bold text-[#1B3A5C] mb-6">
            {isFr ? `Livraison de ciment à ${cityName} : logistique et organisation` : `Cement delivery to ${cityName}: logistics and organization`}
          </h2>
          <div className="prose prose-lg max-w-none">
            <p className="text-[#1A1A2E]/80 leading-relaxed mb-4">
              {isFr
                ? `Dakhla Aménagement (DAM) livre du ciment CPJ 45 et CPJ 55 à ${cityName}, dans la région de ${region}. Depuis notre centre de broyage de clinker à Dakhla (capacité 500 000 T/an), nous desservons ${cityName} avec un délai de ${cityData.deliveryDelay} sur une distance d'environ ${cityData.distanceFromDakhla} km. Nos chauffeurs expérimentés connaissent les itinéraires et les contraintes d'accès vers ${cityName}.`
                : `Dakhla Aménagement (DAM) delivers CPJ 45 and CPJ 55 cement to ${cityName}, in the ${region} region. From our clinker grinding plant in Dakhla (capacity 500,000 T/year), we serve ${cityName} with a ${cityData.deliveryDelay} lead time over a distance of about ${cityData.distanceFromDakhla} km. Our experienced drivers know the routes and access constraints to ${cityName}.`}
            </p>
            <p className="text-[#1A1A2E]/80 leading-relaxed mb-4">
              {isFr
                ? `Trois modes de livraison sont disponibles à ${cityName} : le vrac en camion-citerne (25 à 30T, déchargement par tuyau jusqu'à 30m, idéal pour les chantiers équipés d'un silo), les sacs de 50kg sur palette filmée (1,5T/palette, manipulation manuelle, parfait pour les petits chantiers) et le big bag de 1 tonne (manutention grue, conditionnement étanche, accès aux chantiers difficiles de ${cityName}).`
                : `Three delivery modes are available in ${cityName}: bulk in tanker truck (25 to 30T, discharge via pipe up to 30m, ideal for sites equipped with a silo), 50kg bags on wrapped pallet (1.5T/pallet, manual handling, perfect for small sites) and the 1-ton big bag (crane handling, sealed packaging, access to difficult ${cityName} sites).`}
            </p>
            <p className="text-[#1A1A2E]/80 leading-relaxed mb-4">
              {isFr
                ? `Les commandes confirmées avant 12h sont expédiées le jour même depuis Dakhla. Pour ${cityName} (${cityData.distanceFromDakhla} km), comptez ${cityData.deliveryDelay} jusqu'au chantier. La quantité minimum est de 1 palette (sacs), 1 big bag ou 10T en vrac. Les commandes groupées optimisent le coût de transport sur la distance Dakhla-${cityName}.`
                : `Orders confirmed before 12:00 are shipped the same day from Dakhla. For ${cityName} (${cityData.distanceFromDakhla} km), count on ${cityData.deliveryDelay} to the site. The minimum quantity is 1 pallet (bags), 1 big bag or 10T in bulk. Grouped orders optimize transport cost on the Dakhla-${cityName} distance.`}
            </p>
            <p className="text-[#1A1A2E]/80 leading-relaxed mb-6">
              {isFr
                ? `Le ciment DAM est conforme NM 10.1.004 et EN 197-1, testé en laboratoire avant expédition. Pour organiser une livraison à ${cityName}, contactez-nous au +212 658-265685 ou demandez un devis gratuit en ligne : précisez la quantité, le grade (CPJ 45/CPJ 55), le conditionnement et l'adresse de livraison.`
                : `DAM cement complies with NM 10.1.004 and EN 197-1, lab-tested before shipping. To arrange a delivery to ${cityName}, contact us at +212 658-265685 or request a free online quote: specify quantity, grade (CPJ 45/CPJ 55), packaging and delivery address.`}
            </p>
          </div>

          {/* FAQ */}
          <div className="mt-12">
            <h3 className="text-xl font-bold text-[#1B3A5C] mb-6">
              {isFr ? `Questions fréquentes — Livraison ciment ${cityName}` : `FAQ — Cement delivery ${cityName}`}
            </h3>
            <div className="space-y-4">
              {faqItems.map((item, i) => (
                <details key={i} className="group bg-[#F7F8FA] border border-[#E5E7EB] rounded-xl p-5">
                  <summary className="font-semibold text-[#1B3A5C] cursor-pointer">{item.question}</summary>
                  <p className="mt-3 text-[#1A1A2E]/70 leading-relaxed text-sm">{item.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CtaBanner locale={locale} />
    </>
  );
}
